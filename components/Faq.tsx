"use client";

import { useState, type ReactNode } from "react";

export type FaqEntry = { q: ReactNode; a: ReactNode };

/** Accordion — only one item open at a time, replaces the toggleFaq() global. */
export function Faq({
  items,
  className = "",
}: {
  items: FaqEntry[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {items.map((item, i) => (
        <FaqItem
          key={i}
          q={item.q}
          a={item.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: ReactNode;
  a: ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`faq-item bg-brand-surface border border-brand-border/15 rounded-2xl overflow-hidden cursor-pointer ${open ? "open" : ""}`.trim()}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-6">
        <p className="font-semibold text-brand-textPrimary text-sm pr-4">{q}</p>
        <i className="faq-icon fas fa-plus text-brand-primary text-sm flex-shrink-0" />
      </div>
      <div className="faq-answer px-6">
        <p className="text-brand-textSecondary text-sm leading-relaxed pb-6">{a}</p>
      </div>
    </div>
  );
}
