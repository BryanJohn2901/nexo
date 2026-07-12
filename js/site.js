/* ================================================================
   NEXO DIGITAL — shared site behavior
   Loaded on every page after translations.js + i18n.js.
================================================================ */

/* ── PARTIAL INJECTION (header / footer / popup / mobile CTA / cookie banner) ── */
async function loadPartial(url, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  try {
    const res = await fetch(url);
    mount.outerHTML = await res.text();
  } catch (err) {
    console.error('Falha ao carregar', url, err);
  }
}

Promise.all([
  loadPartial('/partials/header.html', 'site-header'),
  loadPartial('/partials/footer.html', 'site-footer'),
  loadPartial('/partials/popup.html', 'site-popup'),
  loadPartial('/partials/mobile-float.html', 'site-mobile-float'),
  loadPartial('/partials/cookie-banner.html', 'site-cookie-banner'),
]).then(initAfterPartials);

function initAfterPartials() {
  initMobileMenu();
  initStickyHeader();
  initCookieConsent();
  initPopup();
  if (window.AOS) AOS.refreshHard();
  document.dispatchEvent(new Event('nexo:partials-loaded'));
}

/* ── MOBILE MENU (right-side drawer) ── */
function initMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const toggle = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  if (!menu || !toggle) return;

  function openMobileMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  window.closeMobileMenu = function () {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.getElementById('mob-services-sub')?.classList.remove('open');
    document.getElementById('mob-services-chevron')?.classList.remove('open');
  };
  window.toggleMobServices = function () {
    document.getElementById('mob-services-sub')?.classList.toggle('open');
    document.getElementById('mob-services-chevron')?.classList.toggle('open');
  };

  toggle.addEventListener('click', openMobileMenu);
  closeBtn?.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });
}

/* ── STICKY / FIXED HEADER SHADOW ON SCROLL ── */
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  const toggle = () => header.classList.toggle('scrolled', window.scrollY > 40);
  toggle();
  window.addEventListener('scroll', toggle);
}

/* ── COOKIE CONSENT (LGPD) ── */
function initCookieConsent() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  const consent = localStorage.getItem('nexo-cookie-consent');
  if (!consent) {
    setTimeout(() => banner.classList.add('show'), 600);
  }
  window.acceptCookies = function () {
    localStorage.setItem('nexo-cookie-consent', 'accepted');
    banner.classList.remove('show');
  };
  window.rejectCookies = function () {
    localStorage.setItem('nexo-cookie-consent', 'rejected');
    banner.classList.remove('show');
  };
  window.reopenCookiePrefs = function () {
    banner.classList.add('show');
  };
}

/* ── POPUP DE CAPTURA + FORM ── */
const WA_URLS = {
  start:  'https://wa.me/5535991661854?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20de%20pacotes%20da%20Nexo%20Digital%20e%20tenho%20interesse%20no%20Plano%20Start%20%E2%80%94%20organizar%20minha%20presen%C3%A7a%20digital.%20Podemos%20agendar%20uma%20conversa%20para%20alinhar%20os%20detalhes%3F',
  growth: 'https://wa.me/5535991661854?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20de%20pacotes%20da%20Nexo%20Digital%20e%20tenho%20interesse%20no%20Plano%20Growth%20%E2%80%94%20presen%C3%A7a%20digital%20%2B%20p%C3%A1gina%20vendendo.%20Podemos%20agendar%20uma%20conversa%20para%20alinhar%20os%20detalhes%3F',
  machine:'https://wa.me/5535991661854?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20de%20pacotes%20da%20Nexo%20Digital%20e%20tenho%20interesse%20no%20Plano%20Machine%20%E2%80%94%20funil%20completo%20%2B%20tr%C3%A1fego%20pago.%20Podemos%20agendar%20uma%20conversa%20para%20alinhar%20os%20detalhes%3F',
  default:'https://wa.me/5535991661854'
};
var _activePlan = 'default';

function abrirPopup(plan) {
  _activePlan = plan || 'default';
  const popup = document.getElementById('popup-captura');
  popup?.classList.remove('hidden');
  popup?.classList.add('flex');
  document.body.style.overflow = 'hidden';
  popup?.setAttribute('aria-hidden', 'false');
}
function fecharPopup() {
  const popup = document.getElementById('popup-captura');
  popup?.classList.add('hidden');
  popup?.classList.remove('flex');
  document.body.style.overflow = '';
  popup?.setAttribute('aria-hidden', 'true');
}

function initPopup() {
  const popup = document.getElementById('popup-captura');
  if (!popup) return;

  popup.addEventListener('click', e => { if (e.target === popup) fecharPopup(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharPopup(); });

  /* UTM fill */
  const p = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_term', 'utm_campaign', 'utm_medium', 'utm_content'].forEach(k => {
    const el = document.getElementById(k);
    if (el) el.value = p.get(k) || '';
  });
  const urlEl = document.getElementById('url');
  if (urlEl) urlEl.value = window.location.href;

  /* phone mask */
  const telInput = document.getElementById('lead-telefone');
  telInput?.addEventListener('input', function (e) {
    let v = e.target.value.replace(/\D/g, '');
    if (v.startsWith('55') && v.length > 2) v = v.slice(2);
    v = v.slice(0, 11);
    let f = v;
    if (v.length > 2) f = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    if (v.length > 7) f = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    e.target.value = f;
    document.querySelector('.error-msg')?.classList.add('hidden');
  });

  /* submit */
  document.getElementById('form-captura')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    const err = this.querySelector('.error-msg');
    const raw = telInput.value.replace(/\D/g, '');
    if (raw.length < 10) { err?.classList.remove('hidden'); telInput.focus(); return; }
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';
    const payload = {
      nome: document.getElementById('lead-nome').value.trim(),
      email: document.getElementById('lead-email').value.trim(),
      telefone: '+55' + raw,
      utm_source: document.getElementById('utm_source')?.value || '',
      utm_term: document.getElementById('utm_term')?.value || '',
      utm_campaign: document.getElementById('utm_campaign')?.value || '',
      utm_medium: document.getElementById('utm_medium')?.value || '',
      utm_content: document.getElementById('utm_content')?.value || '',
      url: document.getElementById('url')?.value || window.location.href
    };
    const WEBHOOK_URL = 'WEBHOOK_DO_PROJETO'; // ← definir Make / n8n
    const redirectUrl = WA_URLS[_activePlan] || WA_URLS.default;
    try {
      await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), mode: 'no-cors' });
    } catch (err2) { console.error(err2); }
    finally {
      fecharPopup();
      btn.disabled = false;
      btn.innerHTML = 'Enviar Solicitação';
      this.reset();
      window.open(redirectUrl, '_blank');
    }
  });
}

/* ── FAQ ── */
function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(f => f.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

/* ── COUNTER ANIMATION ── */
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = prefix + current + suffix;
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}
const statsSection = document.querySelector('[data-counter]');
if (statsSection) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounters(); obs.disconnect(); }
    });
  }, { threshold: 0.3 });
  obs.observe(statsSection);
}

/* ── NEWSLETTER ── */
function handleNewsletter(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '<span class="text-sm font-semibold text-brand-textPrimary">Inscrito!</span><span class="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center"><i class="fas fa-check text-brand-bg text-xs"></i></span>';
  setTimeout(() => {
    btn.innerHTML = '<span class="text-sm font-semibold text-brand-textPrimary">Inscrever</span><span class="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center"><i class="fas fa-arrow-right text-brand-bg text-xs"></i></span>';
    e.target.reset();
  }, 3000);
}

/* ── AOS ── */
if (window.AOS) AOS.init({ duration: 650, once: true, offset: 60 });

/* ── SCROLL PROGRESS BAR ── */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ── CUSTOM CURSOR + MAGNETIC BUTTONS + CLICK SPARKS (desktop, fine pointer, motion allowed) ── */
(function initCursorFX() {
  const fine = window.matchMedia('(pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || reduced) return;

  const html = document.documentElement;
  const dot = document.createElement('div'); dot.id = 'cursor-dot';
  const ring = document.createElement('div'); ring.id = 'cursor-ring';
  document.body.append(dot, ring);
  html.classList.add('has-custom-cursor');

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  const HOVER_SEL = 'a, button, .card-lift, .social-icon, input, textarea, select, [role="button"], label';
  const MAGNET_SEL = '.split-btn, .social-icon';
  const MAGNET_RADIUS = 90;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    html.classList.add('cursor-active');
    dot.style.transform = `translate(${mx}px, ${my}px)`;
  });
  window.addEventListener('mouseleave', () => html.classList.remove('cursor-active'));
  document.addEventListener('mousedown', () => html.classList.add('cursor-down'));
  document.addEventListener('mouseup', () => html.classList.remove('cursor-down'));

  document.addEventListener('mouseover', e => { if (e.target.closest(HOVER_SEL)) html.classList.add('cursor-hover'); });
  document.addEventListener('mouseout', e => { if (e.target.closest(HOVER_SEL)) html.classList.remove('cursor-hover'); });

  (function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;

    document.querySelectorAll(MAGNET_SEL).forEach(el => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = mx - cx, dy = my - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < MAGNET_RADIUS) {
        const pull = (1 - dist / MAGNET_RADIUS) * 12;
        el.style.transform = `translate(${(dx / dist || 0) * pull}px, ${(dy / dist || 0) * pull}px)`;
      } else if (el.style.transform) {
        el.style.transform = '';
      }
    });

    requestAnimationFrame(loop);
  })();

  document.addEventListener('click', e => {
    const target = e.target.closest('.split-btn');
    if (!target) return;
    const r = target.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const n = 10;
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
      const dist = 32 + Math.random() * 28;
      const spark = document.createElement('span');
      spark.className = 'cursor-spark';
      spark.style.setProperty('--sx', Math.cos(angle) * dist + 'px');
      spark.style.setProperty('--sy', Math.sin(angle) * dist + 'px');
      spark.style.left = cx + 'px';
      spark.style.top = cy + 'px';
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 650);
    }
  });
})();
