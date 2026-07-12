"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { T } from "@/components/i18n/T";
import { useT } from "@/lib/i18n/useT";

const WA_URLS: Record<string, string> = {
  start:
    "https://wa.me/5535991661854?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20de%20pacotes%20da%20Nexo%20Digital%20e%20tenho%20interesse%20no%20Plano%20Start%20%E2%80%94%20organizar%20minha%20presen%C3%A7a%20digital.%20Podemos%20agendar%20uma%20conversa%20para%20alinhar%20os%20detalhes%3F",
  growth:
    "https://wa.me/5535991661854?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20de%20pacotes%20da%20Nexo%20Digital%20e%20tenho%20interesse%20no%20Plano%20Growth%20%E2%80%94%20presen%C3%A7a%20digital%20%2B%20p%C3%A1gina%20vendendo.%20Podemos%20agendar%20uma%20conversa%20para%20alinhar%20os%20detalhes%3F",
  machine:
    "https://wa.me/5535991661854?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20de%20pacotes%20da%20Nexo%20Digital%20e%20tenho%20interesse%20no%20Plano%20Machine%20%E2%80%94%20funil%20completo%20%2B%20tr%C3%A1fego%20pago.%20Podemos%20agendar%20uma%20conversa%20para%20alinhar%20os%20detalhes%3F",
  default: "https://wa.me/5535991661854",
};

// TODO: unconfigured — mirrors the placeholder that shipped on the static
// site. The form still closes and redirects to WhatsApp regardless of
// whether this POST succeeds (see handleSubmit), same as before.
const WEBHOOK_URL = "WEBHOOK_DO_PROJETO";

type PopupContextValue = { open: (plan?: string) => void };
const PopupContext = createContext<PopupContextValue>({ open: () => {} });

export function usePopup() {
  return useContext(PopupContext);
}

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePlan, setActivePlan] = useState("default");
  const [showError, setShowError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const telRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const open = (plan?: string) => {
    setActivePlan(plan || "default");
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.startsWith("55") && v.length > 2) v = v.slice(2);
    v = v.slice(0, 11);
    let f = v;
    if (v.length > 2) f = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    if (v.length > 7) f = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    e.target.value = f;
    setShowError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    const tel = telRef.current;
    if (!form || !tel) return;
    const raw = tel.value.replace(/\D/g, "");
    if (raw.length < 10) {
      setShowError(true);
      tel.focus();
      return;
    }
    setSubmitting(true);
    const data = new FormData(form);
    const payload = {
      nome: String(data.get("nome") || "").trim(),
      email: String(data.get("email") || "").trim(),
      telefone: "+55" + raw,
      utm_source: String(data.get("utm_source") || ""),
      utm_term: String(data.get("utm_term") || ""),
      utm_campaign: String(data.get("utm_campaign") || ""),
      utm_medium: String(data.get("utm_medium") || ""),
      utm_content: String(data.get("utm_content") || ""),
      url: String(data.get("url") || window.location.href),
    };
    const redirectUrl = WA_URLS[activePlan] || WA_URLS.default;
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
    } catch (err) {
      console.error(err);
    } finally {
      close();
      setSubmitting(false);
      form.reset();
      window.open(redirectUrl, "_blank");
    }
  };

  return (
    <PopupContext.Provider value={{ open }}>
      {children}
      <Popup
        isOpen={isOpen}
        onClose={close}
        onSubmit={handleSubmit}
        onPhoneInput={handlePhoneInput}
        showError={showError}
        submitting={submitting}
        telRef={telRef}
        formRef={formRef}
      />
      <PopupFieldsFiller />
    </PopupContext.Provider>
  );
}

function Popup({
  isOpen,
  onClose,
  onSubmit,
  onPhoneInput,
  showError,
  submitting,
  telRef,
  formRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onPhoneInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError: boolean;
  submitting: boolean;
  telRef: React.RefObject<HTMLInputElement | null>;
  formRef: React.RefObject<HTMLFormElement | null>;
}) {
  const t = useT();
  return (
    <div
      id="popup-captura"
      className={`fixed inset-0 z-[100] ${isOpen ? "flex" : "hidden"} items-center justify-center p-4 bg-black/90 backdrop-blur-sm`}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-brand-surface border border-brand-primary/30 rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-t-2xl" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-brand-bg/50 flex items-center justify-center text-brand-textMuted hover:text-brand-primary transition"
        >
          <i className="fas fa-times text-xs" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center bg-brand-primary/10 border border-brand-primary/30 mb-4">
            <i className="fas fa-rocket text-brand-primary" />
          </div>
          <p className="text-brand-primary font-semibold text-xs mb-1">
            <T k="popup.eyebrow" />
          </p>
          <h3 className="font-bold text-2xl text-brand-textPrimary mb-1">
            <T k="popup.title" />
          </h3>
          <p className="text-sm text-brand-textMuted">
            <T k="popup.desc" />
          </p>
        </div>

        <form id="form-captura" className="space-y-4" ref={formRef} onSubmit={onSubmit}>
          <input
            type="text"
            id="lead-nome"
            name="nome"
            placeholder={t("popup.ph_name")}
            required
            className="w-full bg-brand-bg border border-brand-border/25 rounded-xl px-4 py-3 text-sm text-brand-textPrimary placeholder:text-brand-textMuted focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
          />

          <input
            type="email"
            id="lead-email"
            name="email"
            placeholder={t("popup.ph_email")}
            required
            className="w-full bg-brand-bg border border-brand-border/25 rounded-xl px-4 py-3 text-sm text-brand-textPrimary placeholder:text-brand-textMuted focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
          />

          <div className="flex items-stretch">
            <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-brand-border/25 bg-brand-bg text-brand-textMuted text-sm">
              +55
            </span>
            <input
              ref={telRef}
              type="tel"
              id="lead-telefone"
              name="telefone"
              placeholder="(11) 99999-9999"
              required
              maxLength={15}
              onChange={onPhoneInput}
              className="w-full bg-brand-bg border border-brand-border/25 rounded-r-xl px-4 py-3 text-sm text-brand-textPrimary placeholder:text-brand-textMuted focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
            />
          </div>

          <input type="hidden" id="utm_source" name="utm_source" />
          <input type="hidden" id="utm_term" name="utm_term" />
          <input type="hidden" id="utm_campaign" name="utm_campaign" />
          <input type="hidden" id="utm_medium" name="utm_medium" />
          <input type="hidden" id="utm_content" name="utm_content" />
          <input type="hidden" id="url" name="url" />

          <p className={`error-msg text-red-400 text-xs ${showError ? "" : "hidden"}`}>
            <T k="popup.err_tel" />
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="btn-submit w-full split-btn flex items-center justify-center gap-3 bg-brand-primary text-brand-bg font-bold text-sm rounded-full py-4 hover:bg-brand-primaryHover transition"
          >
            {submitting ? (
              <>
                <i className="fas fa-spinner fa-spin" /> Enviando...
              </>
            ) : (
              <T k="popup.submit" />
            )}
          </button>
          <p className="text-center text-brand-textMuted text-xs">
            <T k="popup.privacy" />
          </p>
        </form>
      </div>
    </div>
  );
}

export function PopupFieldsFiller() {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    (["utm_source", "utm_term", "utm_campaign", "utm_medium", "utm_content"] as const).forEach(
      (k) => {
        const el = document.getElementById(k) as HTMLInputElement | null;
        if (el) el.value = p.get(k) || "";
      }
    );
    const urlEl = document.getElementById("url") as HTMLInputElement | null;
    if (urlEl) urlEl.value = window.location.href;
  }, []);
  return null;
}
