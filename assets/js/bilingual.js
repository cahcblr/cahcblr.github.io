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
  });
})();
