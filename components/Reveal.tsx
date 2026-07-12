"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealType = "fade-up" | "fade-left" | "fade-right";

/**
 * Scroll-triggered entrance animation — replaces AOS (fade-up/left/right,
 * 650ms, offset 60, once). No external dependency, ~1KB.
 */
export function Reveal({
  as: As = "div",
  type = "fade-up",
  delay = 0,
  className = "",
  children,
}: {
  as?: ElementType;
  type?: RevealType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      data-reveal-type={type}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}
