/**
 * CAHC Global Search Overlay
 * --------------------------
 * Client-side search over a build-time JSON index.
 * Zero external dependencies.
 *
 * Modes (toggle buttons, all OFF by default):
 *   Aa  — Case sensitive
 *   .*  — Regex matching
 *   ā   — IAST sensitive (when OFF, diacritics are normalized)
 */
(function () {
  "use strict";

  // ── DOM refs ──────────────────────────────────────────────────────────
  var overlay    = document.getElementById("searchOverlay");
  var backdrop   = document.getElementById("searchBackdrop");
  var input      = document.getElementById("searchOverlayInput");
  var resultsBox = document.getElementById("searchResults");
  var emptyState = document.getElementById("searchEmptyState");

  var btnCase  = document.getElementById("searchToggleCase");
  var btnRegex = document.getElementById("searchToggleRegex");
  var btnIAST  = document.getElementById("searchToggleIAST");

  if (!overlay || !input) return; // safety

  // ── State ─────────────────────────────────────────────────────────────
  var searchIndex   = null;   // will hold the parsed JSON array
  var indexLoading  = false;
  var activeIdx     = -1;     // keyboard-selected result index
  var debounceTimer = null;

  // Toggle states (all OFF by default)
  var caseSensitive = false;
  var regexMode     = false;
  var iastSensitive = false;

  // ── IAST normalization map ────────────────────────────────────────────
  // When IAST sensitivity is OFF, these diacriticals collapse to ASCII.
  var IAST_MAP = {
    "ā": "a", "Ā": "A",
    "ī": "i", "Ī": "I",
    "ū": "u", "Ū": "U",
    "ṛ": "r", "Ṛ": "R", "ṝ": "r", "Ṝ": "R",
    "ḷ": "l", "Ḷ": "L", "ḹ": "l", "Ḹ": "L",
    "ṃ": "m", "Ṃ": "M", "ṁ": "m", "Ṁ": "M",
    "ḥ": "h", "Ḥ": "H",
    "ñ": "n", "Ñ": "N",
    "ṅ": "n", "Ṅ": "N",
    "ṇ": "n", "Ṇ": "N",
    "ṭ": "t", "Ṭ": "T",
    "ḍ": "d", "Ḍ": "D",
    "ś": "s", "Ś": "S",
    "ṣ": "s", "Ṣ": "S",
    "ö": "o", "ä": "a", "ü": "u"  // occasional German transliterations
  };

  // Build regex for IAST normalization
  var iastPattern = new RegExp("[" + Object.keys(IAST_MAP).join("") + "]", "g");

  function normalizeIAST(str) {
    return str.replace(iastPattern, function (ch) {
      return IAST_MAP[ch] || ch;
    });
  }

  // ── Badge config ──────────────────────────────────────────────────────
  var TYPE_META = {
    paper:  { label: "Paper",  icon: "📄" },
    page:   { label: "Page",   icon: "📃" },
    post:   { label: "Post",   icon: "📝" },
    book:   { label: "Book",   icon: "📖" },
    person: { label: "Person", icon: "👤" },
    lab:    { label: "Lab",    icon: "🔬" }
  };

  // ── Toggle management ─────────────────────────────────────────────────
  function setupToggle(btn, getter, setter, labelOn, labelOff) {
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      setter(!getter());
      btn.classList.toggle("is-active", getter());
      btn.setAttribute("aria-pressed", getter() ? "true" : "false");
      btn.title = getter() ? labelOn : labelOff;
      // Re-run search with current input
      var query = input.value.trim();
      if (query.length > 0) {
        performSearch(query);
      }
      input.focus(); // keep focus on input
    });
  }

  setupToggle(btnCase,
    function () { return caseSensitive; },
    function (v) { caseSensitive = v; },
    "Case sensitive (on)", "Case sensitive (off)"
  );
  setupToggle(btnRegex,
    function () { return regexMode; },
    function (v) { regexMode = v; },
    "Regex (on)", "Regex (off)"
  );
  setupToggle(btnIAST,
    function () { return iastSensitive; },
    function (v) { iastSensitive = v; },
    "IAST sensitive (on)", "IAST sensitive (off)"
  );

  // ── Open / Close ──────────────────────────────────────────────────────
  function openSearch() {
    overlay.classList.add("is-visible");
    document.body.style.overflow = "hidden";
    input.value = "";
    input.focus();
    showEmptyState();
    loadIndex();
  }

  function closeSearch() {
    overlay.classList.remove("is-visible");
    document.body.style.overflow = "";
  }

  function isOpen() {
    return overlay.classList.contains("is-visible");
  }

  // ── Index loading ─────────────────────────────────────────────────────
  function loadIndex() {
    if (searchIndex || indexLoading) return;
    indexLoading = true;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/search-index.json", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        try {
          searchIndex = JSON.parse(xhr.responseText);
        } catch (e) {
          console.error("Search index parse error:", e);
          searchIndex = [];
        }
      } else {
        console.error("Search index load failed:", xhr.status);
        searchIndex = [];
      }
      indexLoading = false;
      // If user already typed while loading, run the search now
      if (input.value.trim().length > 0) {
        performSearch(input.value.trim());
      }
    };
    xhr.send();
  }

  // ── Prepare text for matching ─────────────────────────────────────────
  function prepareText(str) {
    var s = str;
    if (!iastSensitive) s = normalizeIAST(s);
    if (!caseSensitive) s = s.toLowerCase();
    return s;
  }

  // ── Search logic ──────────────────────────────────────────────────────
  function performSearch(query) {
    if (!searchIndex) return;

    var preparedQuery = prepareText(query);
    var tokens, regexTokens;

    if (regexMode) {
      // In regex mode, treat the whole query as one pattern
      try {
        var flags = caseSensitive ? "g" : "gi";
        regexTokens = [new RegExp(query, flags)];
      } catch (e) {
        // Invalid regex — show error
        resultsBox.innerHTML =
          '<div class="search-no-results">Invalid regex: ' + escapeHtml(e.message) + '</div>';
        return;
      }
      tokens = [preparedQuery]; // for fallback scoring
    } else {
      tokens = preparedQuery.split(/\s+/).filter(function (t) {
        return t.length > 0;
      });
    }

    if (tokens.length === 0) {
      showEmptyState();
      return;
    }

    var scored = [];

    for (var i = 0; i < searchIndex.length; i++) {
      var item = searchIndex[i];
      var titleEnP   = prepareText(item.title_en   || "");
      var titleSaP   = prepareText(item.title_sa   || "");
      var contentEnP = prepareText(item.content_en || "");
      var contentSaP = prepareText(item.content_sa || "");
      var authorEnP  = prepareText(item.author_en  || "");
      var authorSaP  = prepareText(item.author_sa  || "");
      var roleEnP    = prepareText(item.role_en    || "");
      var roleSaP    = prepareText(item.role_sa    || "");
      
      var haystack = titleEnP + " " + titleSaP + " " +
                     contentEnP + " " + contentSaP + " " +
                     authorEnP + " " + authorSaP + " " +
                     roleEnP + " " + roleSaP;

      var allMatch = true;
      var score = 0;

      if (regexMode && regexTokens) {
        // Regex mode: test the whole haystack
        var re = regexTokens[0];
        re.lastIndex = 0;
        if (!re.test(haystack)) {
          allMatch = false;
        } else {
          // Score by where it matched
          re.lastIndex = 0;
          if (re.test(titleEnP) || re.test(titleSaP))     score += 10;
          re.lastIndex = 0;
          if (re.test(authorEnP) || re.test(authorSaP))   score += 5;
          re.lastIndex = 0;
          if (re.test(roleEnP) || re.test(roleSaP))       score += 3;
          re.lastIndex = 0;
          if (re.test(contentEnP) || re.test(contentSaP)) score += 1;
        }
      } else {
        // Substring mode
        for (var t = 0; t < tokens.length; t++) {
          var tok = tokens[t];
          if (haystack.indexOf(tok) === -1) {
            allMatch = false;
            break;
          }
          if (titleEnP.indexOf(tok) !== -1 || titleSaP.indexOf(tok) !== -1)     score += 10;
          if (authorEnP.indexOf(tok) !== -1 || authorSaP.indexOf(tok) !== -1)   score += 5;
          if (roleEnP.indexOf(tok) !== -1 || roleSaP.indexOf(tok) !== -1)       score += 3;
          if (contentEnP.indexOf(tok) !== -1 || contentSaP.indexOf(tok) !== -1) score += 1;
        }
      }

      if (allMatch) {
        scored.push({ item: item, score: score });
      }
    }

    // Sort by score descending
    scored.sort(function (a, b) { return b.score - a.score; });

    // Cap at 12 results
    var results = scored.slice(0, 12);

    // For highlighting, use the original query tokens (not prepared)
    var displayTokens;
    if (regexMode) {
      displayTokens = [query];
    } else {
      displayTokens = query.split(/\s+/).filter(function (t) { return t.length > 0; });
    }

    renderResults(results, displayTokens);
  }

  // ── Rendering ─────────────────────────────────────────────────────────
  function showEmptyState() {
    emptyState.style.display = "";
    // Remove any result cards
    var cards = resultsBox.querySelectorAll(".search-result-card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].parentNode.removeChild(cards[i]);
    }
    activeIdx = -1;
  }

  function renderResults(scored, tokens) {
    // Clear existing
    resultsBox.innerHTML = "";
    activeIdx = -1;

    if (scored.length === 0) {
      resultsBox.innerHTML =
        '<div class="search-no-results">No results found</div>';
      return;
    }

    for (var i = 0; i < scored.length; i++) {
      var item = scored[i].item;
      var meta = TYPE_META[item.type] || TYPE_META.page;

      var card = document.createElement("a");
      card.href = item.url;
      card.className = "search-result-card";
      card.setAttribute("data-index", i);

      // If it's an external link (lab), open in new tab
      if (item.url && item.url.indexOf("http") === 0) {
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      }

      // Badge
      var badge = '<span class="search-type-badge search-type-' + item.type + '">'
                + meta.icon + " " + meta.label + "</span>";

      // Dynamically select language strings based on active document lang
      var currentLang = document.documentElement.lang || "en";
      var displayTitle   = currentLang === "sa" ? (item.title_sa || item.title_en || "") : (item.title_en || item.title_sa || "");
      var displayContent = currentLang === "sa" ? (item.content_sa || item.content_en || "") : (item.content_en || item.content_sa || "");
      var displayAuthor  = currentLang === "sa" ? (item.author_sa || item.author_en || "") : (item.author_en || item.author_sa || "");
      var displayRole    = currentLang === "sa" ? (item.role_sa || item.role_en || "") : (item.role_en || item.role_sa || "");

      // Title with highlight
      var title = highlightText(displayTitle, tokens);

      // Subtitle line (author, role, date)
      var subtitle = "";
      if (displayAuthor)  subtitle += displayAuthor;
      if (displayRole)    subtitle += (subtitle ? " · " : "") + displayRole;
      if (item.date)      subtitle += (subtitle ? " · " : "") + item.date;
      if (subtitle) {
        subtitle = '<div class="search-result-subtitle">' + highlightText(subtitle, tokens) + "</div>";
      }

      // Snippet from content
      var snippet = extractSnippet(displayContent, tokens);

      card.innerHTML =
        '<div class="search-result-top">' + badge + '</div>'
        + '<div class="search-result-title">' + title + "</div>"
        + subtitle
        + '<div class="search-result-snippet">' + snippet + "</div>";

      card.addEventListener("click", function () {
        closeSearch();
      });

      resultsBox.appendChild(card);
    }
  }

  function highlightText(text, tokens) {
    if (!text) return "";
    var escaped = escapeHtml(text);
    var flags = caseSensitive ? "g" : "gi";

    for (var i = 0; i < tokens.length; i++) {
      var tok = tokens[i];
      var pattern;

      if (regexMode) {
        // Use token as-is (it's a regex)
        try {
          pattern = new RegExp("(" + tok + ")", flags);
        } catch (e) {
          continue; // skip invalid regex for highlighting
        }
      } else {
        // Escape regex special chars, then if IAST-insensitive, build
        // a pattern that matches both ASCII and diacritical variants
        var escapedTok = tok.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        if (!iastSensitive) {
          escapedTok = expandIASTPattern(escapedTok);
        }

        pattern = new RegExp("(" + escapedTok + ")", flags);
      }

      escaped = escaped.replace(pattern, '<mark class="search-highlight">$1</mark>');
    }
    return escaped;
  }

  /**
   * Expand an ASCII search token so it matches IAST variants too.
   * e.g. "a" → "[aāĀ]", "s" → "[sśṣŚṢ]", "n" → "[nñṅṇÑṄṆ]"
   */
  function expandIASTPattern(escapedTok) {
    // Build reverse map: ASCII char → [diacritical chars]
    var groups = {};
    for (var diacrit in IAST_MAP) {
      var ascii = IAST_MAP[diacrit].toLowerCase();
      if (!groups[ascii]) groups[ascii] = [];
      groups[ascii].push(diacrit);
    }

    var result = "";
    for (var c = 0; c < escapedTok.length; c++) {
      var ch = escapedTok[c];
      var lower = ch.toLowerCase();
      if (groups[lower]) {
        // Create character class: [original + diacriticals]
        result += "[" + ch + groups[lower].join("") + "]";
      } else {
        result += ch;
      }
    }
    return result;
  }

  function extractSnippet(content, tokens) {
    if (!content) return "";
    var searchContent = prepareText(content);

    // Find the position of the first matching token
    var bestPos = -1;
    for (var i = 0; i < tokens.length; i++) {
      var tok = regexMode ? tokens[i] : prepareText(tokens[i]);
      var pos;

      if (regexMode) {
        try {
          var flags = caseSensitive ? "" : "i";
          var re = new RegExp(tok, flags);
          var match = re.exec(searchContent);
          pos = match ? match.index : -1;
        } catch (e) {
          pos = -1;
        }
      } else {
        pos = searchContent.indexOf(tok);
      }

      if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
        bestPos = pos;
      }
    }

    var snippet;
    if (bestPos === -1) {
      snippet = content.substring(0, 120);
    } else {
      var start = Math.max(0, bestPos - 40);
      var end = Math.min(content.length, bestPos + 100);
      snippet = (start > 0 ? "…" : "") + content.substring(start, end) + (end < content.length ? "…" : "");
    }

    return highlightText(snippet, tokens);
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ── Keyboard navigation ───────────────────────────────────────────────
  function updateActiveResult(newIdx) {
    var cards = resultsBox.querySelectorAll(".search-result-card");
    if (cards.length === 0) return;

    // Clamp
    if (newIdx < 0) newIdx = cards.length - 1;
    if (newIdx >= cards.length) newIdx = 0;

    // Remove old active
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove("is-active");
    }

    activeIdx = newIdx;
    cards[activeIdx].classList.add("is-active");
    cards[activeIdx].scrollIntoView({ block: "nearest" });
  }

  // ── Event handlers ────────────────────────────────────────────────────

  // Global keyboard shortcut: Cmd/Ctrl+K to open
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (isOpen()) {
        closeSearch();
      } else {
        openSearch();
      }
      return;
    }

    // Also open on "/" if not focused on an input
    if (e.key === "/" && !isOpen()) {
      var tag = (document.activeElement || {}).tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
        e.preventDefault();
        openSearch();
      }
    }
  });

  // Escape to close
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeSearch();
      return;
    }

    var cards = resultsBox.querySelectorAll(".search-result-card");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      updateActiveResult(activeIdx + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      updateActiveResult(activeIdx - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0 && activeIdx < cards.length) {
        cards[activeIdx].click();
      }
    }
  });

  // Search on input (debounced)
  input.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    var query = input.value.trim();
    if (query.length === 0) {
      showEmptyState();
      return;
    }
    debounceTimer = setTimeout(function () {
      performSearch(query);
    }, 150);
  });

  // Close on backdrop click
  backdrop.addEventListener("click", function () {
    closeSearch();
  });

  // ── Expose open function for the header icon ──────────────────────────
  window.CAHCSearch = { open: openSearch, close: closeSearch };

})();
