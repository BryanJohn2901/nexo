"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`fixed left-5 bottom-24 lg:bottom-6 z-40 w-14 h-14 rounded-full bg-brand-primary text-brand-bg flex items-center justify-center shadow-2xl shadow-black/40 hover:bg-brand-primaryHover hover:scale-105 transition ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="fas fa-arrow-up text-lg" />
    </button>
  );
}
