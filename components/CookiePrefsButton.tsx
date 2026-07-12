"use client";

import { useCookieBanner } from "@/components/CookieBanner";

export function CookiePrefsButton() {
  const { reopen } = useCookieBanner();
  return (
    <button
      onClick={reopen}
      className="split-btn inline-flex items-center rounded-full border border-brand-primary/40 p-1 hover:border-brand-primary/70 transition"
    >
      <span className="px-5 py-2.5 text-sm font-semibold text-brand-textPrimary">Gerenciar preferências de cookies</span>
      <span className="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
        <i className="fas fa-sliders text-brand-bg text-xs" />
      </span>
    </button>
  );
}
