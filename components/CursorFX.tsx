"use client";

import { useEffect, useRef } from "react";

const HOVER_SEL =
  'a, button, .card-lift, .social-icon, input, textarea, select, [role="button"], label';
const MAGNET_SEL = ".split-btn, .social-icon";
const MAGNET_RADIUS = 90;

/** Custom cursor + magnetic CTA buttons + click spark bursts (desktop, fine pointer, motion allowed). */
export function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const sparkHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const html = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const sparkHost = sparkHostRef.current;
    if (!dot || !ring || !sparkHost) return;

    html.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      html.classList.add("cursor-active");
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };
    const onMouseLeave = () => html.classList.remove("cursor-active");
    const onMouseDown = () => html.classList.add("cursor-down");
    const onMouseUp = () => html.classList.remove("cursor-down");
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVER_SEL)) html.classList.add("cursor-hover");
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVER_SEL)) html.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    let rafId: number;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;

      document.querySelectorAll<HTMLElement>(MAGNET_SEL).forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < MAGNET_RADIUS) {
          const pull = (1 - dist / MAGNET_RADIUS) * 12;
          el.style.transform = `translate(${(dx / dist || 0) * pull}px, ${(dy / dist || 0) * pull}px)`;
        } else if (el.style.transform) {
          el.style.transform = "";
        }
      });

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest?.(".split-btn");
      if (!target) return;
      const r = target.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const n = 10;
      for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
        const dist = 32 + Math.random() * 28;
        const spark = document.createElement("span");
        spark.className = "cursor-spark";
        spark.style.setProperty("--sx", Math.cos(angle) * dist + "px");
        spark.style.setProperty("--sy", Math.sin(angle) * dist + "px");
        spark.style.left = cx + "px";
        spark.style.top = cy + "px";
        sparkHost.appendChild(spark);
        setTimeout(() => spark.remove(), 650);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      html.classList.remove("has-custom-cursor", "cursor-active", "cursor-hover", "cursor-down");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" />
      <div ref={ringRef} id="cursor-ring" />
      <div ref={sparkHostRef} />
    </>
  );
}
