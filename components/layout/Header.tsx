"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { T } from "@/components/i18n/T";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { usePopup } from "@/components/Popup";
import type { Locale } from "@/lib/i18n/translations";

const MEGA_MAIN = [
  { href: "/servicos/trafego-pago/", icon: "fa-chart-bar", title: "Tráfego Pago", desc: "Google, Meta, TikTok & LinkedIn Ads" },
  { href: "/servicos/email-marketing/", icon: "fa-envelope-open-text", title: "E-mail Marketing", desc: "Sequências, A/B e reativação" },
  { href: "/servicos/automacao/", icon: "fa-robot", title: "Automação de Marketing", desc: "Fluxos, lead scoring e integrações" },
  { href: "/servicos/crm-funis/", icon: "fa-filter", title: "CRM & Funis de Vendas", desc: "HubSpot, RD, Pipedrive" },
  { href: "/servicos/social-media/", icon: "fa-share-nodes", title: "Social Media", desc: "Gestão, conteúdo e crescimento" },
  { href: "/servicos/seo-conteudo/", icon: "fa-magnifying-glass-chart", title: "SEO & Conteúdo", desc: "Rank orgânico e autoridade" },
] as const;

const MEGA_DESIGN = [
  { href: "/servicos/design-identidade/", icon: "fa-palette", title: "Design e Identidade Visual", desc: "Logotipo, visual e criativos" },
  { href: "/servicos/edicao-video/", icon: "fa-video", title: "Edição de Vídeo", desc: "Reels, shorts e anúncios" },
  { href: "/servicos/sites-paginas/", icon: "fa-globe", title: "Sites, Páginas e Checkouts", desc: "Landing pages e conversão" },
] as const;

const MOBILE_SERVICES = [
  { href: "/servicos/trafego-pago/", icon: "fa-chart-bar", title: "Tráfego Pago" },
  { href: "/servicos/automacao/", icon: "fa-robot", title: "Automação de Marketing" },
  { href: "/servicos/social-media/", icon: "fa-share-nodes", title: "Social Media" },
  { href: "/servicos/email-marketing/", icon: "fa-envelope-open-text", title: "E-mail Marketing" },
  { href: "/servicos/crm-funis/", icon: "fa-filter", title: "CRM & Funis" },
  { href: "/servicos/seo-conteudo/", icon: "fa-magnifying-glass-chart", title: "SEO & Conteúdo" },
  { href: "/servicos/design-identidade/", icon: "fa-palette", title: "Design e Identidade Visual" },
  { href: "/servicos/edicao-video/", icon: "fa-video", title: "Edição de Vídeo" },
  { href: "/servicos/sites-paginas/", icon: "fa-globe", title: "Sites, Páginas e Checkouts" },
] as const;

const LOCALES: Locale[] = ["pt", "en", "es"];

function LangSwitcher({
  onSelect,
  className = "",
  mobile = false,
}: {
  onSelect?: () => void;
  className?: string;
  mobile?: boolean;
}) {
  const { locale, setLocale } = useI18n();
  return (
    <div className={`flex items-center gap-0.5 ${className}`.trim()}>
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-0.5">
          {i > 0 && <span className="lang-sep">|</span>}
          <button
            data-lang={l}
            onClick={() => {
              setLocale(l);
              onSelect?.();
            }}
            className={`lang-btn ${locale === l ? "lang-active" : ""} ${mobile ? "px-3 py-1.5" : ""}`.trim()}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const { open: openPopup } = usePopup();

  const closeMega = () => setMegaOpen(false);

  useEffect(() => {
    if (!megaOpen) return;
    const onOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) closeMega();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMega();
    };
    document.addEventListener("click", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header id="main-header" className={`w-full bg-brand-bg/90 border-b border-brand-border/10 glass ${scrolled ? "scrolled" : ""}`.trim()}>
        <div className="container mx-auto px-6 max-w-site flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/assets/logoNexo.svg" alt="Nexo Digital" width={145} height={56} className="h-14 w-auto" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-brand-textPrimary">
            <Link href="/#home" className="nav-link hover:text-brand-primary transition duration-200">
              <i className="nav-icon fas fa-house" /> <span><T k="nav.home" /></span>
            </Link>
            <Link href="/#sobre" className="nav-link hover:text-brand-primary transition duration-200">
              <i className="nav-icon fas fa-users" /> <span><T k="nav.about" /></span>
            </Link>

            <div
              className={`mega-trigger ${megaOpen ? "mega-open" : ""}`.trim()}
              ref={megaRef}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                onClick={() => setMegaOpen((v) => !v)}
                className="nav-link hover:text-brand-primary transition duration-200 cursor-pointer select-none"
                aria-haspopup="true"
                aria-expanded={megaOpen}
              >
                <i className="nav-icon fas fa-briefcase" /> <span><T k="nav.services" /></span>
                <i className={`fas fa-chevron-down text-[9px] ml-0.5 opacity-60 transition-transform ${megaOpen ? "rotate-180" : ""}`.trim()} />
              </button>

              <div className="mega-menu-wrap">
                <div className="mega-menu-arrow" />
                <div className="bg-brand-surface border border-brand-primary/20 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,.55)] overflow-hidden">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 p-3 grid grid-cols-2 gap-1 content-start">
                      {MEGA_MAIN.map((s) => (
                        <Link key={s.href} href={s.href} onClick={closeMega} className="mega-service-item">
                          <div className="mega-icon"><i className={`fas ${s.icon}`} /></div>
                          <div>
                            <p className="font-semibold text-brand-textPrimary text-sm leading-snug mb-0.5">{s.title}</p>
                            <p className="text-brand-textMuted text-xs leading-snug">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 pt-2 px-1 pb-1 border-t border-brand-border/10 mt-1">
                        <Link href="/#servicos" onClick={closeMega} className="flex items-center gap-2 text-xs text-brand-primary font-semibold hover:gap-3 transition-all duration-200">
                          <i className="fas fa-table-cells text-[10px]" /> <span><T k="nav.see_all" /></span>
                          <i className="fas fa-arrow-right text-[10px]" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-brand-bg/60 border-l border-brand-primary/10 p-6 flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-semibold text-brand-primary uppercase tracking-wider mb-2"><T k="nav.mega_diag_eyebrow" /></p>
                        <h4 className="font-bold text-brand-textPrimary text-sm leading-snug mb-3"><T k="nav.mega_diag_title" /></h4>
                        <p className="text-brand-textMuted text-xs leading-relaxed mb-5"><T k="nav.mega_diag_desc" /></p>
                        <button
                          onClick={() => {
                            openPopup("mega-diag");
                            closeMega();
                          }}
                          className="w-full split-btn inline-flex items-center justify-between rounded-full bg-brand-primary p-1 hover:bg-brand-primaryHover transition"
                        >
                          <span className="px-4 py-2 text-xs font-bold text-brand-bg"><T k="nav.mega_diag_cta" /></span>
                          <span className="btn-icon w-7 h-7 rounded-full bg-brand-bg/20 flex items-center justify-center">
                            <i className="fas fa-arrow-right text-brand-bg text-[10px]" />
                          </span>
                        </button>
                      </div>
                      <div className="mt-6 pt-5 border-t border-brand-border/10 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-brand-textMuted">
                          <i className="fas fa-check text-brand-primary text-[10px]" /> <span><T k="nav.mega_stat1" /></span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-brand-textMuted">
                          <i className="fas fa-check text-brand-primary text-[10px]" /> <span><T k="nav.mega_stat2" /></span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-brand-textMuted">
                          <i className="fas fa-check text-brand-primary text-[10px]" /> <span><T k="nav.mega_stat3" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-brand-primary/10 px-4 py-3">
                    <p className="text-[9px] text-brand-textMuted font-semibold uppercase tracking-wider mb-2 px-1"><T k="nav.mega_label" /></p>
                    <div className="grid grid-cols-3 gap-1">
                      {MEGA_DESIGN.map((s) => (
                        <Link key={s.href} href={s.href} onClick={closeMega} className="mega-service-item">
                          <div className="mega-icon"><i className={`fas ${s.icon}`} /></div>
                          <div>
                            <p className="font-semibold text-brand-textPrimary text-sm mb-0.5">{s.title}</p>
                            <p className="text-brand-textMuted text-xs">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/#cases" className="nav-link hover:text-brand-primary transition duration-200">
              <i className="nav-icon fas fa-trophy" /> <span><T k="nav.cases" /></span>
            </Link>
            <Link href="/#pricing" className="nav-link hover:text-brand-primary transition duration-200">
              <i className="nav-icon fas fa-tag" /> <span><T k="nav.plans" /></span>
            </Link>
            <Link href="/#contato" className="nav-link hover:text-brand-primary transition duration-200">
              <i className="nav-icon fas fa-message" /> <span><T k="nav.contact" /></span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openPopup("nav")}
              className="split-btn hidden md:inline-flex items-center rounded-full bg-brand-bg/40 border border-brand-primary/30 p-1 hover:border-brand-primary/60 transition"
            >
              <span className="px-5 py-2.5 text-sm font-semibold text-brand-textPrimary"><T k="nav.cta" /></span>
              <span className="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
                <i className="fas fa-arrow-right text-brand-bg text-xs" />
              </span>
            </button>

            <LangSwitcher className="hidden md:flex" />

            <button
              id="menu-toggle"
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-brand-textSecondary hover:text-brand-primary transition"
            >
              <i className="fas fa-bars text-base" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu-overlay"
        className={`mobile-menu-overlay lg:hidden ${mobileOpen ? "open" : ""}`.trim()}
        onClick={closeMobile}
      />

      <aside id="mobile-menu" className={`lg:hidden ${mobileOpen ? "open" : ""}`.trim()} aria-hidden={!mobileOpen}>
        <div className="flex items-center justify-between px-6 h-20 border-b border-brand-border/10 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3" onClick={closeMobile}>
            <Image src="/assets/logoNexo.svg" alt="Nexo Digital" width={104} height={40} className="h-10 w-auto" />
          </Link>
          <button
            id="menu-close"
            aria-label="Fechar menu"
            onClick={closeMobile}
            className="w-10 h-10 rounded-full flex items-center justify-center text-brand-textSecondary hover:text-brand-primary transition"
          >
            <i className="fas fa-xmark text-lg" />
          </button>
        </div>
        <nav className="px-6 py-4 flex flex-col gap-1 text-sm font-medium flex-1">
          <Link href="/#home" onClick={closeMobile} className="nav-link hover:text-brand-primary transition py-2.5 px-3 rounded-xl hover:bg-brand-surface/60">
            <i className="nav-icon fas fa-house w-4 text-center" /> <span><T k="nav.home" /></span>
          </Link>
          <Link href="/#sobre" onClick={closeMobile} className="nav-link hover:text-brand-primary transition py-2.5 px-3 rounded-xl hover:bg-brand-surface/60">
            <i className="nav-icon fas fa-users w-4 text-center" /> <span><T k="nav.about" /></span>
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="nav-link w-full hover:text-brand-primary transition py-2.5 px-3 rounded-xl hover:bg-brand-surface/60 justify-between"
            >
              <span className="flex items-center gap-1.5">
                <i className="nav-icon fas fa-briefcase w-4 text-center" /> <span><T k="nav.services" /></span>
              </span>
              <i id="mob-services-chevron" className={`fas fa-chevron-down text-[10px] opacity-60 ${servicesOpen ? "open" : ""}`.trim()} />
            </button>
            <div id="mob-services-sub" className={servicesOpen ? "open" : ""}>
              <div className="border-l border-brand-primary/20 pl-4 ml-3 space-y-1 py-2">
                {MOBILE_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMobile}
                    className="flex items-center gap-2.5 py-2 text-brand-textSecondary hover:text-brand-primary transition"
                  >
                    <i className={`fas ${s.icon} text-brand-primary text-xs w-4 text-center`} /> {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#cases" onClick={closeMobile} className="nav-link hover:text-brand-primary transition py-2.5 px-3 rounded-xl hover:bg-brand-surface/60">
            <i className="nav-icon fas fa-trophy w-4 text-center" /> <span><T k="nav.cases" /></span>
          </Link>
          <Link href="/#pricing" onClick={closeMobile} className="nav-link hover:text-brand-primary transition py-2.5 px-3 rounded-xl hover:bg-brand-surface/60">
            <i className="nav-icon fas fa-tag w-4 text-center" /> <span><T k="nav.plans" /></span>
          </Link>
          <Link href="/#contato" onClick={closeMobile} className="nav-link hover:text-brand-primary transition py-2.5 px-3 rounded-xl hover:bg-brand-surface/60">
            <i className="nav-icon fas fa-message w-4 text-center" /> <span><T k="nav.contact" /></span>
          </Link>

          <button
            onClick={() => {
              openPopup("nav-mobile");
              closeMobile();
            }}
            className="mt-3 w-full split-btn inline-flex items-center justify-between rounded-full border border-brand-primary/40 p-1"
          >
            <span className="px-5 py-2.5 text-sm font-semibold flex-1 text-center"><T k="nav.mob_cta" /></span>
            <span className="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
              <i className="fas fa-arrow-right text-brand-bg text-xs" />
            </span>
          </button>

          <div className="flex items-center justify-center gap-1 py-4 border-t border-brand-border/10 mt-2">
            <LangSwitcher onSelect={closeMobile} mobile />
          </div>
        </nav>
      </aside>
    </>
  );
}
