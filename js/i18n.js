/* Nexo Digital — i18n engine */
(function () {
  var SUPPORTED = ['pt', 'en', 'es'];
  var DEFAULT = 'pt';

  function detectLang() {
    var stored = localStorage.getItem('nexo-lang');
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('pt')) return 'pt';
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('en')) return 'en';
    return DEFAULT;
  }

  function getDeep(obj, path) {
    return path.split('.').reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : undefined;
    }, obj);
  }

  function applyLang(lang) {
    var t = window.NexoT && window.NexoT[lang];
    if (!t) return;

    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getDeep(t, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });

    /* inner HTML (for elements with <br> / <strong> etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = getDeep(t, el.getAttribute('data-i18n-html'));
      if (val !== undefined) el.innerHTML = val;
    });

    /* placeholder */
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var val = getDeep(t, el.getAttribute('data-i18n-ph'));
      if (val !== undefined) el.placeholder = val;
    });

    /* aria-label */
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      var val = getDeep(t, el.getAttribute('data-i18n-label'));
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    /* page title */
    if (t.meta && t.meta.title) document.title = t.meta.title;

    /* html lang */
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    /* switcher active state */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('lang-active', isActive);
    });

    localStorage.setItem('nexo-lang', lang);
    window.__nexoLang = lang;
  }

  window.setLang = function (lang) {
    if (SUPPORTED.indexOf(lang) !== -1) applyLang(lang);
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(detectLang());
  });
})();
