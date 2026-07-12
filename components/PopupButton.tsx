"use client";

import type { ElementType, ReactNode } from "react";
import { usePopup } from "@/components/Popup";

/** Button/anchor that opens the lead popup — replaces onclick="abrirPopup()" / abrirPopup('plan'). */
export function PopupButton({
  plan,
  className,
  children,
  as: As = "button",
}: {
  plan?: string;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}) {
  const { open } = usePopup();
  return (
    <As
      type={As === "button" ? "button" : undefined}
      onClick={() => open(plan)}
      className={className}
    >
      {children}
    </As>
  );
}
