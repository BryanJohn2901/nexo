"use client";

import { useT } from "@/lib/i18n/useT";

/** Plain-text translation leaf — equivalent of the old [data-i18n] attribute. */
export function T({ k }: { k: string }) {
  const t = useT();
  return <>{t(k)}</>;
}

/**
 * HTML-bearing translation leaf — equivalent of [data-i18n-html], for
 * strings that embed <br>/<strong>/<em> markup in translations.ts.
 */
export function THtml({
  k,
  as: As = "span",
  className,
}: {
  k: string;
  as?: React.ElementType;
  className?: string;
}) {
  const t = useT();
  return <As className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />;
}
