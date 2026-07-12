"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { type Locale } from "./translations";

const SUPPORTED: Locale[] = ["pt", "en", "es"];
const DEFAULT_LOCALE: Locale = "pt";
const STORAGE_KEY = "nexo-lang";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

function detectLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && (SUPPORTED as string[]).includes(stored)) {
    return stored as Locale;
  }
  const nav = window.navigator.language?.slice(0, 2);
  if (nav === "pt" || nav === "en" || nav === "es") return nav;
  return DEFAULT_LOCALE;
}

// Renders with DEFAULT_LOCALE (pt) on the server and on first client
// paint — matching the old site, whose HTML shipped hardcoded PT copy
// that plain JS then swapped after mount if a different language was
// detected/stored. Same one-frame flash behavior, ported as-is.
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    // One-time client-only read (localStorage/navigator.language) — not
    // syncing with an external system's ongoing changes, so the usual
    // "don't setState in effect" guidance doesn't apply here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(detectLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    if (!SUPPORTED.includes(next)) return;
    window.localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
