"use client";

import { useI18n } from "./I18nProvider";
import { translations } from "./translations";

function getDeep(obj: unknown, path: string): string | undefined {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj) as string | undefined;
}

export function useT() {
  const { locale } = useI18n();
  return (key: string): string =>
    getDeep(translations[locale], key) ??
    getDeep(translations.pt, key) ??
    key;
}
