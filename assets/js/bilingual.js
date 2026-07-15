(function () {
  const LANGUAGES = ['en', 'sa'];
  const DEFAULT_LANG = 'en';

  // Helper to extract query parameters
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Determine active language
  function getActiveLanguage() {
    // Handle Reviewer Mode passcode
    const REVIEW_PASSCODE = 'cahc2026';
    const urlReview = getQueryParam('review');
    if (urlReview === REVIEW_PASSCODE) {
      localStorage.setItem('site-reviewer-mode', 'true');
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('review');
      window.history.replaceState({}, '', cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
    }

    const urlLang = getQueryParam('lang');
    if (urlLang && LANGUAGES.includes(urlLang)) {
      localStorage.setItem('site-lang', urlLang);
      return urlLang;
    }
    const savedLang = localStorage.getItem('site-lang');
    if (savedLang && LANGUAGES.includes(savedLang)) {
      return savedLang;
    }
    return DEFAULT_LANG;
  }

  let activeLang = getActiveLanguage();

  // Apply immediately to prevent flash of wrong language (FOUT)
  document.documentElement.setAttribute('lang', activeLang);

  // Helper to dynamically update the URL query parameter without page reload
  function updateURLQueryParam(lang) {
    const url = new URL(window.location.href);
    if (lang === 'sa') {
      url.searchParams.set('lang', 'sa');
    } else {
      url.searchParams.delete('lang');
    }
    // Update the address bar silently
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
  }

  // Initialize toggle option click events and URL state
  document.addEventListener('DOMContentLoaded', () => {
    // Ensure the address bar reflects the active state on load
    updateURLQueryParam(activeLang);

    document.querySelectorAll('.lang-switcher .lang-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        const clickedLang = opt.getAttribute('data-lang');
        if (clickedLang && LANGUAGES.includes(clickedLang) && clickedLang !== activeLang) {
          activeLang = clickedLang;
          localStorage.setItem('site-lang', activeLang);
          document.documentElement.setAttribute('lang', activeLang);
          updateURLQueryParam(activeLang);
        }
      });
    });

    // Inject Reviewer Portal link if active
    if (localStorage.getItem('site-reviewer-mode') === 'true') {
      const footer = document.querySelector('.site-footer .wrapper');
      if (footer) {
        const reviewDiv = document.createElement('div');
        reviewDiv.style.marginTop = '20px';
        reviewDiv.style.padding = '10px 15px';
        reviewDiv.style.border = '1px dashed #4a5568';
        reviewDiv.style.borderRadius = '4px';
        reviewDiv.style.background = '#f7fafc';
        reviewDiv.style.fontSize = '0.85em';
        reviewDiv.style.display = 'inline-flex';
        reviewDiv.style.alignItems = 'center';
        reviewDiv.style.gap = '10px';
        
        const folderUrl = 'https://drive.google.com/drive/folders/10hBHGBW07Dc7AZeL7kHZ6ZgV7rCe861I?usp=sharing';
        
        reviewDiv.innerHTML = `
          <strong style="color: #2b6cb0;">🔍 Sanskrit Reviewer Portal:</strong>
          <a href="${folderUrl}" target="_blank" style="color: #2b6cb0; text-decoration: underline; font-weight: bold;">Access Shared Translation Google Doc</a>
          <span style="color: #cbd5e0;">|</span>
          <button id="exit-reviewer-btn" style="background: none; border: none; color: #e53e3e; cursor: pointer; text-decoration: underline; padding: 0; font-family: inherit; font-size: inherit;">Exit Mode</button>
        `;
        
        footer.appendChild(reviewDiv);
        
        document.getElementById('exit-reviewer-btn').addEventListener('click', () => {
          localStorage.removeItem('site-reviewer-mode');
          reviewDiv.remove();
        });
      }
    }
  });
})();
