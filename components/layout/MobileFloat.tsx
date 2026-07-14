"use client";

import { T } from "@/components/i18n/T";
import { usePopup } from "@/components/Popup";

export function MobileFloat() {
  const { open } = usePopup();
  return (
    <div className="mobile-float lg:hidden">
      <button
        onClick={() => open("mobile-float")}
        className="split-btn w-full inline-flex items-center justify-between rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition"
      >
        <span className="px-6 py-2.5 text-sm font-bold text-brand-bg flex-1 text-center">
          <T k="mob_float" />
        </span>
        <span className="btn-icon w-9 h-9 rounded-full bg-brand-bg/20 flex items-center justify-center">
          <i className="fas fa-arrow-right text-brand-bg text-xs" />
        </span>
      </button>
    </div>
  );
}
