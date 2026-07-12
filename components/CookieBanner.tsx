"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { T } from "@/components/i18n/T";

const STORAGE_KEY = "nexo-cookie-consent";

const CookieBannerContext = createContext<{ reopen: () => void }>({
  reopen: () => {},
});

export function useCookieBanner() {
  return useContext(CookieBannerContext);
}

export function CookieBannerProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };
  const reject = () => {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };
  const reopen = () => setVisible(true);

  return (
    <CookieBannerContext.Provider value={{ reopen }}>
      {children}
      <CookieBanner visible={visible} onAccept={accept} onReject={reject} />
    </CookieBannerContext.Provider>
  );
}

function CookieBanner({
  visible,
  onAccept,
  onReject,
}: {
  visible: boolean;
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <div
      id="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className={visible ? "show" : ""}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center flex-shrink-0">
          <i className="fas fa-cookie-bite text-brand-primary" />
        </div>
        <p className="text-sm text-brand-textSecondary leading-relaxed">
          <span>
            <T k="cookies.msg" />
          </span>{" "}
          <a
            href="/politica-de-cookies/"
            className="text-brand-primary font-semibold hover:underline"
          >
            <T k="cookies.link" />
          </a>
          .
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onAccept}
          className="split-btn inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-xs font-bold text-brand-bg hover:bg-brand-primaryHover transition"
        >
          <T k="cookies.accept" />
        </button>
        <button
          type="button"
          onClick={onReject}
          className="inline-flex items-center rounded-full border border-brand-border/25 px-5 py-2.5 text-xs font-semibold text-brand-textSecondary hover:border-brand-primary/50 hover:text-brand-primary transition"
        >
          <T k="cookies.reject" />
        </button>
      </div>
    </div>
  );
}
