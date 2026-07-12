import Image from "next/image";
import Link from "next/link";
import { T, THtml } from "@/components/i18n/T";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { PopupButton } from "@/components/PopupButton";
import { SectionDivider } from "@/components/SectionDivider";

const PARTNERS = [
  { icon: "fa-google", brand: true, label: "Google Ads" },
  { icon: "fa-meta", brand: true, label: "Meta Ads" },
  { icon: "fa-hubspot", brand: true, label: "HubSpot" },
  { icon: "fa-salesforce", brand: true, label: "Salesforce" },
  { icon: "fa-tiktok", brand: true, label: "TikTok Ads" },
  { icon: "fa-linkedin", brand: true, label: "LinkedIn Ads" },
  { icon: "fa-shopify", brand: true, label: "Shopify" },
  { icon: "fa-mailchimp", brand: true, label: "Mailchimp" },
] as const;

function PartnerLogo({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="flex items-center gap-2 text-brand-textMuted font-semibold text-sm whitespace-nowrap opacity-60 hover:opacity-100 transition">
      <i className={`fab ${icon} text-2xl`} /> {label}
    </span>
  );
}

const SERVICE_CARDS = [
  {
    href: "/servicos/design-identidade/",
    icon: "fa-palette",
    title: "services.s1_title",
    tag: "services.s1_tag",
    desc: "services.s1_desc",
    deliverables: (
      <><em>Entregas:</em> identidade visual, logotipo, paleta, tipografia, templates, banners, flyers, artes para WhatsApp, design de checkout, peças de lançamento e webinar, criativos para tráfego.</>
    ),
    cta: "services.s1_cta",
    delay: 0,
  },
  {
    href: "/servicos/social-media/",
    icon: "fa-share-nodes",
    title: "services.s2_title",
    tag: "services.s2_tag",
    desc: "services.s2_desc",
    deliverables: (
      <><em>Entregas:</em> linha editorial, calendário, posts, carrosséis, reels editados, legendas, pautas de stories, conteúdos de topo, meio e fundo de funil.</>
    ),
    cta: "services.s2_cta",
    delay: 80,
  },
  {
    href: "/servicos/trafego-pago/",
    icon: "fa-chart-bar",
    title: "services.s3_title",
    tag: "services.s3_tag",
    desc: "services.s3_desc",
    deliverables: (
      <><em>Entregas:</em> planejamento, gestão de Meta Ads, campanhas de captação e remarketing, otimização semanal, relatórios de CPL, CPA e ROAS. <em>Verba de mídia não está inclusa.</em></>
    ),
    cta: "services.s3_cta",
    delay: 160,
  },
  {
    href: "/servicos/edicao-video/",
    icon: "fa-video",
    title: "services.s4_title",
    tag: "services.s4_tag",
    desc: null,
    deliverables: (
      <><em>Entregas:</em> reels, shorts, vídeos para anúncios, cortes de aula, live e podcast, depoimentos, legendas dinâmicas.</>
    ),
    cta: "services.s4_cta",
    delay: 0,
  },
  {
    href: "/servicos/sites-paginas/",
    icon: "fa-globe",
    title: "services.s5_title",
    tag: "services.s5_tag",
    desc: "services.s5_desc",
    deliverables: (
      <><em>Entregas:</em> site institucional, página de captura, venda, obrigado, webinar, lista de espera, checkout, copy e estrutura completa de seções.</>
    ),
    cta: "services.s5_cta",
    delay: 80,
  },
  {
    href: "/servicos/automacao/",
    icon: "fa-filter",
    title: "services.s6_title",
    tag: "services.s6_tag",
    desc: "services.s6_desc",
    deliverables: (
      <><em>Entregas:</em> funil de captação, vendas, perpétuo, lançamento, automação de direct, sequência de WhatsApp e e-mail, recuperação de carrinho, integração com CRM.</>
    ),
    cta: "services.s6_cta",
    delay: 160,
  },
] as const;

const HOW_STEPS = [
  { icon: "fa-magnifying-glass", num: "01", title: "how.s1_title", desc: "how.s1_desc", delay: 0 },
  { icon: "fa-map", num: "02", title: "how.s2_title", desc: "how.s2_desc", delay: 100 },
  { icon: "fa-rocket", num: "03", title: "how.s3_title", desc: "how.s3_desc", delay: 200 },
  { icon: "fa-arrow-trend-up", num: "04", title: "how.s4_title", desc: "how.s4_desc", delay: 300 },
] as const;

export default function Home() {
  return (
    <>
      {/* ================================================================
          HERO
      ================================================================ */}
      <section id="home" className="relative mx-4 md:mx-6 mt-4 rounded-3xl overflow-hidden hero-bg min-h-[88vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-pulse absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle,rgba(217,255,106,.12) 0%,transparent 70%)" }} />
          <div className="glow-pulse absolute -top-20 left-1/4 w-[280px] h-[280px] rounded-full" style={{ background: "radial-gradient(circle,rgba(217,255,106,.07) 0%,transparent 70%)", animationDelay: "1.5s" }} />

          <div className="float-a absolute top-16 right-16 w-32 h-32 opacity-30">
            <div className="spin-slow w-full h-full rounded-full border border-brand-primary/40" style={{ borderStyle: "dashed" }} />
          </div>
          <div className="float-b absolute bottom-24 right-32 w-20 h-20 opacity-25">
            <div className="spin-rev w-full h-full rounded-full border border-brand-primary/30" />
          </div>

          <div className="float-c absolute top-1/2 right-12 w-3 h-3 rounded-full bg-brand-primary opacity-50" />
          <div className="float-a absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-brand-primary opacity-40" style={{ animationDelay: "2s" }} />
          <div className="float-b absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-brand-primary opacity-30" style={{ animationDelay: "1s" }} />

          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[.04]" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="#D9FF6A" strokeWidth="0.5" /></pattern></defs>
            <rect width="600" height="800" fill="url(#grid)" />
          </svg>

          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] opacity-[.07]" viewBox="0 0 400 400" fill="none">
            <path d="M0 200 Q100 80 200 200 Q300 320 400 200" stroke="#D9FF6A" strokeWidth="1.5" fill="none" />
            <path d="M0 230 Q100 110 200 230 Q300 350 400 230" stroke="#D9FF6A" strokeWidth="1" fill="none" />
            <path d="M0 170 Q100 50 200 170 Q300 290 400 170" stroke="#D9FF6A" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="80" stroke="#D9FF6A" strokeWidth=".8" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#D9FF6A" strokeWidth=".5" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto max-w-site px-8 md:px-16 relative z-10 py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="eyebrow hero-line-1">
              <i className="fas fa-circle-dot text-xs" /> Nexo Digital
            </p>

            <h1 className="hero-line-2 font-extrabold tracking-tight leading-[1.1] mb-6" style={{ fontSize: "clamp(2rem,3.8vw,3.75rem)" }}>
              <span className="text-fade block whitespace-nowrap"><T k="hero.h1_1" /></span>
              <span className="block whitespace-nowrap" style={{ WebkitTextFillColor: "#D9FF6A", color: "#D9FF6A" }}><T k="hero.h1_2" /></span>
            </h1>

            <THtml k="hero.desc" as="p" className="hero-line-3 text-brand-textSecondary text-lg leading-relaxed max-w-lg mb-8" />

            <div className="hero-line-4 flex flex-wrap items-center gap-4 mb-10">
              <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
                <span className="px-6 py-2.5 text-sm font-bold text-brand-bg"><T k="hero.cta1" /></span>
                <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center">
                  <i className="fas fa-arrow-right text-brand-bg text-sm" />
                </span>
              </PopupButton>

              <a href="#pricing" className="split-btn inline-flex items-center rounded-full bg-brand-bg/30 border border-brand-primary/30 p-1 hover:border-brand-primary/60 transition">
                <span className="px-6 py-3 text-sm font-semibold text-brand-textPrimary"><T k="hero.cta2" /></span>
                <span className="btn-icon w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center">
                  <i className="fas fa-arrow-right text-brand-primary text-sm" />
                </span>
              </a>
            </div>

            <p className="hero-line-5 text-brand-textMuted text-sm italic"><T k="hero.note" /></p>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-bounce opacity-40">
          <div className="w-6 h-10 rounded-full border border-brand-primary/40 flex items-start justify-center pt-1.5">
            <div className="w-1.5 h-3 rounded-full bg-brand-primary" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          LOGO STRIP
      ================================================================ */}
      <section className="py-14 overflow-hidden">
        <Reveal type="fade-up" className="container mx-auto px-6 max-w-site mb-6">
          <p className="text-center text-brand-textMuted text-xs font-semibold tracking-widest uppercase"><T k="strip.label" /></p>
        </Reveal>
        <div className="marquee-wrap">
          <div className="marquee-track select-none">
            {PARTNERS.map((p, i) => <PartnerLogo key={`a${i}`} icon={p.icon} label={p.label} />)}
            {PARTNERS.map((p, i) => <PartnerLogo key={`b${i}`} icon={p.icon} label={p.label} />)}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          SEÇÃO 1 — O PROBLEMA
      ================================================================ */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6 max-w-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal type="fade-right">
              <p className="eyebrow"><i className="fas fa-circle-dot text-xs" /> <span><T k="problem.eyebrow" /></span></p>
              <THtml k="problem.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6" />
              <p className="text-brand-textSecondary leading-relaxed mb-6"><span><T k="problem.p1" /></span></p>
              <p className="text-brand-textSecondary leading-relaxed mb-6"><span><T k="problem.p2" /></span></p>
              <p className="font-bold text-brand-textPrimary mb-6"><T k="problem.bold" /></p>
              <p className="text-brand-textSecondary leading-relaxed mb-6"><span><T k="problem.p3" /></span></p>
              <p className="text-brand-textSecondary leading-relaxed"><span><T k="problem.p4" /></span></p>
            </Reveal>

            <Reveal type="fade-left" delay={100} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image src="/assets/problem-team.jpg" alt="Time Nexo Digital" width={1920} height={1000} sizes="(max-width: 1024px) 90vw, 600px" className="col-span-2 rounded-2xl w-full h-48 object-cover" />
                <Image src="/assets/problem-strategy.jpg" alt="Estratégia" width={1920} height={1000} sizes="(max-width: 1024px) 45vw, 300px" className="rounded-2xl w-full h-36 object-cover" />
                <Image src="/assets/problem-execution.jpg" alt="Execução" width={1920} height={1000} sizes="(max-width: 1024px) 45vw, 300px" className="rounded-2xl w-full h-36 object-cover" />
              </div>
              <div className="photo-overlap-card">
                <p className="font-bold text-brand-textPrimary text-sm mb-2"><T k="problem.card" /></p>
                <PopupButton as="a" className="text-brand-primary text-xs font-semibold inline-flex items-center gap-1 cursor-pointer">
                  <span><T k="problem.card_link" /></span> <i className="fas fa-arrow-right text-xs" />
                </PopupButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          SEÇÃO 2 — POSICIONAMENTO
      ================================================================ */}
      <section className="py-24 bg-brand-surface/30">
        <div className="container mx-auto px-6 max-w-site">
          <Reveal type="fade-up" className="text-center mb-16">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="positioning.eyebrow" /></span></p>
            <THtml k="positioning.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight" />
          </Reveal>

          <Reveal type="fade-up" as="p" className="text-brand-textSecondary text-center max-w-2xl mx-auto mb-4 leading-relaxed">
            <T k="positioning.p1" />
          </Reveal>
          <Reveal type="fade-up" as="p" className="text-brand-textSecondary text-center max-w-xl mx-auto mb-14 text-sm">
            <T k="positioning.p2" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal type="fade-up" delay={0} className="card-lift shine-card bg-brand-surface border border-brand-border/15 rounded-2xl p-8">
              <div className="icon-badge-lg mb-6"><i className="fas fa-magnifying-glass-chart" /></div>
              <h3 className="text-xl font-bold text-brand-textPrimary mb-3"><T k="positioning.c1_title" /></h3>
              <p className="text-brand-textSecondary text-sm leading-relaxed"><T k="positioning.c1_desc" /></p>
              <div className="mt-6 pt-6 border-t border-brand-border/10">
                <p className="text-brand-primary text-sm font-semibold"><T k="positioning.c1_motto" /></p>
              </div>
            </Reveal>
            <Reveal type="fade-up" delay={100} className="card-lift shine-card bg-brand-surface border border-brand-border/15 rounded-2xl p-8">
              <div className="icon-badge-lg mb-6"><i className="fas fa-pen-ruler" /></div>
              <h3 className="text-xl font-bold text-brand-textPrimary mb-3"><T k="positioning.c2_title" /></h3>
              <p className="text-brand-textSecondary text-sm leading-relaxed"><T k="positioning.c2_desc" /></p>
              <div className="mt-6 pt-6 border-t border-brand-border/10">
                <p className="text-brand-primary text-sm font-semibold"><T k="positioning.c2_motto" /></p>
              </div>
            </Reveal>
            <Reveal type="fade-up" delay={200} className="card-lift shine-card bg-brand-surface border border-brand-border/15 rounded-2xl p-8">
              <div className="icon-badge-lg mb-6"><i className="fas fa-chart-line" /></div>
              <h3 className="text-xl font-bold text-brand-textPrimary mb-3"><T k="positioning.c3_title" /></h3>
              <p className="text-brand-textSecondary text-sm leading-relaxed"><T k="positioning.c3_desc" /></p>
              <div className="mt-6 pt-6 border-t border-brand-border/10">
                <p className="text-brand-primary text-sm font-semibold"><T k="positioning.c3_motto" /></p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          SEÇÃO 3 — DIAGNÓSTICO ANTES DA EXECUÇÃO
      ================================================================ */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <Reveal type="fade-up" className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center">
          <Image src="/assets/diag-bg.jpg" alt="Diagnóstico Nexo" fill sizes="100vw" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-bg/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/99 via-brand-bg/90 to-brand-bg/50" />
          <div className="relative z-10 container mx-auto max-w-site px-8 md:px-16 py-16">
            <p className="eyebrow"><i className="fas fa-circle-dot text-xs" /> <span><T k="diag.eyebrow" /></span></p>
            <THtml k="diag.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight max-w-xl mb-4" />
            <p className="text-white/75 max-w-lg mb-2 leading-relaxed"><T k="diag.p1" /></p>
            <p className="text-white/75 max-w-lg mb-8 leading-relaxed"><T k="diag.p2" /></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mb-8">
              <div className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> <span className="text-white/80"><T k="diag.c1" /></span></div>
              <div className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> <span className="text-white/80"><T k="diag.c2" /></span></div>
              <div className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> <span className="text-white/80"><T k="diag.c3" /></span></div>
              <div className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> <span className="text-white/80"><T k="diag.c4" /></span></div>
              <div className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> <span className="text-white/80"><T k="diag.c5" /></span></div>
            </div>
            <THtml k="diag.goal" as="p" className="text-white/75 mb-8" />
            <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
              <span className="px-6 py-2.5 text-sm font-bold text-brand-bg"><T k="diag.cta" /></span>
              <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center">
                <i className="fas fa-arrow-right text-brand-bg text-sm" />
              </span>
            </PopupButton>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* ================================================================
          SEÇÃO 4 — POR QUE ISSO IMPORTA
      ================================================================ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-site">
          <Reveal type="fade-up" className="text-center mb-4">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="why.eyebrow" /></span></p>
            <THtml k="why.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight mb-4" />
            <p className="text-brand-textSecondary max-w-2xl mx-auto leading-relaxed mb-4"><T k="why.desc" /></p>
          </Reveal>

          <Reveal type="fade-up" delay={80} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-brand-surface border border-brand-border/15 rounded-2xl p-6 text-sm text-brand-textSecondary">
              <div className="icon-badge-red"><i className="fas fa-face-frown-open" /></div>
              <span><T k="why.prob1" /></span>
            </div>
            <div className="bg-brand-surface border border-brand-border/15 rounded-2xl p-6 text-sm text-brand-textSecondary">
              <div className="icon-badge-red"><i className="fas fa-lock" /></div>
              <span><T k="why.prob2" /></span>
            </div>
            <div className="bg-brand-surface border border-brand-border/15 rounded-2xl p-6 text-sm text-brand-textSecondary">
              <div className="icon-badge-red"><i className="fas fa-arrow-trend-down" /></div>
              <span><T k="why.prob3" /></span>
            </div>
            <div className="bg-brand-surface border border-brand-border/15 rounded-2xl p-6 text-sm text-brand-textSecondary">
              <div className="icon-badge-red"><i className="fas fa-faucet-drip" /></div>
              <span><T k="why.prob4" /></span>
            </div>
          </Reveal>

          <Reveal type="fade-up" as="p" className="text-brand-textSecondary text-center mb-10">
            <T k="why.connector" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal type="fade-up" delay={0} className="card-lift shine-card bg-brand-surface border border-brand-primary/20 rounded-2xl p-8 glow-card">
              <div className="icon-badge mb-6"><i className="fas fa-bullseye" /></div>
              <p className="font-bold text-brand-textPrimary mb-1"><T k="why.s1_title" /></p>
              <p className="text-brand-textSecondary text-sm leading-relaxed"><T k="why.s1_desc" /></p>
            </Reveal>
            <Reveal type="fade-up" delay={80} className="card-lift shine-card bg-brand-surface border border-brand-border/15 rounded-2xl p-8">
              <div className="icon-badge mb-6"><i className="fas fa-pen-ruler" /></div>
              <p className="font-bold text-brand-textPrimary mb-1"><T k="why.s2_title" /></p>
              <p className="text-brand-textSecondary text-sm leading-relaxed"><T k="why.s2_desc" /></p>
            </Reveal>
            <Reveal type="fade-up" delay={160} className="card-lift shine-card bg-brand-surface border border-brand-border/15 rounded-2xl p-8">
              <div className="icon-badge mb-6"><i className="fas fa-route" /></div>
              <p className="font-bold text-brand-textPrimary mb-1"><T k="why.s3_title" /></p>
              <p className="text-brand-textSecondary text-sm leading-relaxed"><T k="why.s3_desc" /></p>
            </Reveal>
            <Reveal type="fade-up" delay={240} className="card-lift shine-card bg-brand-surface border border-brand-border/15 rounded-2xl p-8">
              <div className="icon-badge mb-6"><i className="fas fa-chart-bar" /></div>
              <p className="font-bold text-brand-textPrimary mb-1"><T k="why.s4_title" /></p>
              <p className="text-brand-textSecondary text-sm leading-relaxed"><T k="why.s4_desc" /></p>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          BANNER CTA
      ================================================================ */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <Reveal type="fade-up" className="bg-brand-surface border border-brand-primary/25 rounded-3xl p-10 md:p-16 glow-card">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="banner.eyebrow" /></span></p>
            <THtml k="banner.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight mb-4" />
            <p className="text-brand-textSecondary leading-relaxed mb-3"><span><T k="banner.p1" /></span></p>
            <p className="text-brand-textSecondary leading-relaxed mb-8"><T k="banner.p2" /></p>
            <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
              <span className="px-6 py-2.5 text-sm font-bold text-brand-bg"><T k="banner.cta" /></span>
              <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center">
                <i className="fas fa-arrow-right text-brand-bg text-sm" />
              </span>
            </PopupButton>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* ================================================================
          SERVIÇOS INDIVIDUAIS
      ================================================================ */}
      <section id="servicos" className="py-24">
        <div className="container mx-auto px-6 max-w-site">
          <Reveal type="fade-up" className="text-center mb-6">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="services.eyebrow" /></span></p>
            <THtml k="services.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight" />
          </Reveal>
          <Reveal type="fade-up" as="p" className="text-brand-textSecondary text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            <span><T k="services.intro" /></span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((s) => (
              <Reveal key={s.href} type="fade-up" delay={s.delay}>
                <Link href={s.href} className="card-lift shine-card bg-brand-surface border border-brand-border/15 rounded-2xl p-8 flex flex-col h-full cursor-pointer">
                  <div className="icon-badge mb-6"><i className={`fas ${s.icon}`} /></div>
                  <h4 className="text-xl font-bold text-brand-textPrimary mb-2"><T k={s.title} /></h4>
                  <p className="text-brand-primary text-xs font-semibold mb-3"><T k={s.tag} /></p>
                  {s.desc && <p className="text-brand-textSecondary text-sm mb-3 leading-relaxed"><T k={s.desc} /></p>}
                  <p className="text-brand-textMuted text-xs mb-6 leading-relaxed">{s.deliverables}</p>
                  <div className="flex-1" />
                  <span className="flex items-center gap-1.5 text-brand-primary text-xs font-semibold mb-4 hover:gap-2.5 transition-all"><T k="services.see" /> <i className="fas fa-arrow-right text-[10px]" /></span>
                  <span className="split-btn inline-flex items-center justify-between w-full rounded-full border border-brand-primary/40 p-1 hover:border-brand-primary/70 transition">
                    <span className="px-5 py-2.5 text-sm font-semibold text-brand-textPrimary"><T k={s.cta} /></span>
                    <span className="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-arrow-right text-brand-bg text-xs" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          COMO TRABALHAMOS
      ================================================================ */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <Reveal type="fade-up" className="border border-brand-border/15 rounded-3xl p-8 md:p-14 bg-brand-surface/20">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="how.eyebrow" /></span></p>
            <THtml k="how.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-brand-border/15">
            {HOW_STEPS.map((step) => (
              <Reveal key={step.num} type="fade-up" delay={step.delay} className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="icon-badge"><i className={`fas ${step.icon}`} /></div>
                  <span className="text-brand-textMuted text-sm font-semibold">{step.num}</span>
                </div>
                <h5 className="font-bold text-brand-textPrimary mb-2"><T k={step.title} /></h5>
                <p className="text-brand-textSecondary text-sm leading-relaxed"><T k={step.desc} /></p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* ================================================================
          PLANOS NEXO DIGITAL
      ================================================================ */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6 max-w-site">
          <Reveal type="fade-up" className="text-center mb-4">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="pricing.eyebrow" /></span></p>
            <THtml k="pricing.h2" as="h2" className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight" />
          </Reveal>
          <p className="text-brand-textSecondary text-center max-w-xl mx-auto mb-4"><T k="pricing.desc" /></p>
          <p className="text-brand-textMuted text-center text-sm max-w-2xl mx-auto mb-16 italic">
            <strong className="text-brand-textPrimary not-italic">Regra da casa:</strong> o que não está escrito no pacote, não está no pacote. Pedido fora do escopo entra como add-on ou upgrade, sem exceção.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* START */}
            <Reveal type="fade-up" delay={0} className="flex flex-col gap-0 bg-brand-surface border border-brand-border/15 rounded-2xl overflow-hidden">
              <div className="p-8 border-b border-brand-border/15">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0" />
                  <h4 className="font-bold text-brand-textPrimary"><T k="pricing.p1_name" /></h4>
                </div>
                <p className="text-4xl font-extrabold text-brand-textPrimary mb-1">R$&nbsp;3.000 <span className="text-sm text-brand-textMuted font-normal">/mês</span></p>
                <p className="text-brand-primary font-semibold text-sm mb-4"><T k="pricing.p1_tag" /></p>
                <p className="text-brand-textSecondary text-sm leading-relaxed mb-6">Pra quem já vende, mas o Instagram e a comunicação visual não representam o tamanho do negócio.</p>
                <PopupButton plan="start" className="split-btn inline-flex items-center justify-between w-full rounded-full border border-brand-primary/40 p-1 hover:border-brand-primary/70 transition">
                  <span className="px-5 py-2.5 text-sm font-semibold text-brand-textPrimary"><T k="pricing.p1_cta" /></span>
                  <span className="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-arrow-right text-brand-bg text-xs" />
                  </span>
                </PopupButton>
              </div>
              <div className="p-8 flex-1">
                <p className="text-xs text-brand-textMuted font-semibold uppercase tracking-wider mb-4">Setup no 1º mês</p>
                <ul className="space-y-2 mb-6">
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Diagnóstico de perfil</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Reposicionamento de bio e link</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Linha editorial (3–4 pilares)</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Kit visual completo</li>
                </ul>
                <p className="text-xs text-brand-textMuted font-semibold uppercase tracking-wider mb-4">Todo mês</p>
                <ul className="space-y-2 mb-6">
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> 12 posts (8 estáticos/carrosséis + 4 reels)</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Pauta semanal de stories</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Relatório mensal</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> 1 call de alinhamento</li>
                </ul>
                <p className="text-brand-textMuted text-xs"><strong className="text-brand-textPrimary">Fora do escopo:</strong> captação de vídeo, tráfego pago, página, automação, atendimento de direct.</p>
              </div>
            </Reveal>

            {/* GROWTH */}
            <Reveal type="fade-up" delay={100} className="pricing-featured rounded-2xl overflow-hidden flex flex-col relative">
              <div className="absolute top-6 right-6">
                <span className="text-[10px] font-bold text-brand-bg bg-brand-primary px-3 py-1 rounded-full"><T k="pricing.popular" /></span>
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full glow-pulse" style={{ background: "radial-gradient(circle,rgba(217,255,106,.15) 0%,transparent 70%)" }} />
              </div>
              <div className="relative z-10 p-8 border-b border-brand-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0" />
                  <h4 className="font-bold text-brand-textPrimary"><T k="pricing.p2_name" /></h4>
                </div>
                <p className="text-4xl font-extrabold text-brand-textPrimary mb-1">R$&nbsp;5.000 <span className="text-sm text-brand-textMuted font-normal">/mês</span></p>
                <p className="text-brand-primary font-semibold text-sm mb-4"><T k="pricing.p2_tag" /></p>
                <p className="text-brand-textSecondary text-sm leading-relaxed mb-6">Tudo do Start, mais uma porta de conversão real.</p>
                <PopupButton plan="growth" className="split-btn inline-flex items-center justify-between w-full rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
                  <span className="px-5 py-2.5 text-sm font-bold text-brand-bg"><T k="pricing.p2_cta" /></span>
                  <span className="btn-icon w-9 h-9 rounded-full bg-brand-bg/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-arrow-right text-brand-bg text-xs" />
                  </span>
                </PopupButton>
              </div>
              <div className="relative z-10 p-8 flex-1">
                <p className="text-xs text-brand-textMuted font-semibold uppercase tracking-wider mb-4">Setup adicional</p>
                <ul className="space-y-2 mb-6">
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> 1 página de vendas/captura com copy</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Funil simples (conteúdo → CTA → página → WhatsApp)</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Automação de entrada</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Ajuste da oferta principal</li>
                </ul>
                <p className="text-xs text-brand-textMuted font-semibold uppercase tracking-wider mb-4">Todo mês</p>
                <ul className="space-y-2 mb-6">
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> 16 posts (mín. 4 de conversão)</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Stories com CTA de venda 2x/semana</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> 1 rodada de otimização de página</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Relatório de funil</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> 2 calls/mês</li>
                </ul>
                <p className="text-brand-textMuted text-xs mb-2"><strong className="text-brand-textPrimary">Fora do escopo:</strong> gestão de tráfego pago, e-mail marketing, lançamento, webinar completo.</p>
                <p className="text-brand-textMuted text-xs italic">Fidelidade mínima: 3 meses.</p>
              </div>
            </Reveal>

            {/* MACHINE */}
            <Reveal type="fade-up" delay={200} className="flex flex-col gap-0 bg-brand-surface border border-brand-border/15 rounded-2xl overflow-hidden">
              <div className="p-8 border-b border-brand-border/15">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-purple-400 flex-shrink-0" />
                  <h4 className="font-bold text-brand-textPrimary"><T k="pricing.p3_name" /></h4>
                </div>
                <p className="text-4xl font-extrabold text-brand-textPrimary mb-1">R$&nbsp;7.500 <span className="text-sm text-brand-textMuted font-normal">/mês</span></p>
                <p className="text-brand-primary font-semibold text-sm mb-4"><T k="pricing.p3_tag" /></p>
                <p className="text-brand-textSecondary text-sm leading-relaxed mb-6">Tudo dos planos anteriores, com funil completo e mídia paga.</p>
                <PopupButton plan="machine" className="split-btn inline-flex items-center justify-between w-full rounded-full border border-brand-primary/40 p-1 hover:border-brand-primary/70 transition">
                  <span className="px-5 py-2.5 text-sm font-semibold text-brand-textPrimary"><T k="pricing.p3_cta" /></span>
                  <span className="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-arrow-right text-brand-bg text-xs" />
                  </span>
                </PopupButton>
              </div>
              <div className="p-8 flex-1">
                <p className="text-xs text-brand-textMuted font-semibold uppercase tracking-wider mb-4">Setup adicional</p>
                <ul className="space-y-2 mb-6">
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Funil perpétuo completo (ou 1 lançamento/trimestre)</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Arquitetura de oferta e bônus</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Order bump, checkout, upsell simples</li>
                </ul>
                <p className="text-xs text-brand-textMuted font-semibold uppercase tracking-wider mb-4">Todo mês</p>
                <ul className="space-y-2 mb-6">
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Gestão de Meta Ads</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> 4–6 criativos/mês</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Conteúdo mapeado por funil</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Relatório quinzenal com dashboard</li>
                  <li className="check-item"><span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> Calls quinzenais + canal direto com SLA</li>
                </ul>
                <p className="text-brand-textMuted text-xs mb-1"><em>Verba de mídia por conta do cliente, não inclusa na mensalidade.</em></p>
                <p className="text-brand-textMuted text-xs mb-2"><strong className="text-brand-textPrimary">Fora do escopo:</strong> verba de anúncio, mais de 1 funil simultâneo, atendimento comercial.</p>
                <p className="text-brand-textMuted text-xs italic">Fidelidade mínima: 3 meses.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          ADD-ONS / O QUE TORNA A NEXO DIFERENTE
      ================================================================ */}
      <section className="py-24 bg-brand-surface/30">
        <div className="container mx-auto px-6 max-w-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal type="fade-right">
              <p className="eyebrow"><i className="fas fa-circle-dot text-xs" /> <span><T k="addons.eyebrow1" /></span></p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-textPrimary mb-4"><T k="addons.h3_1" /></h3>
              <p className="text-brand-textSecondary leading-relaxed mb-4">
                Sem problema, só não vamos chamar projeto novo de &quot;ajustezinho&quot;. Tudo fora do escopo contratado entra como add-on, serviço individual ou upgrade: páginas extras, identidade visual, sites institucionais, automações, dashboards, estrutura de lançamento e mais.
              </p>
              <PopupButton className="split-btn inline-flex items-center rounded-full border border-brand-primary/40 p-1 hover:border-brand-primary/70 transition">
                <span className="px-5 py-2.5 text-sm font-semibold text-brand-textPrimary"><T k="addons.cta1" /></span>
                <span className="btn-icon w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
                  <i className="fas fa-arrow-right text-brand-bg text-xs" />
                </span>
              </PopupButton>
            </Reveal>

            <Reveal type="fade-left" delay={100}>
              <p className="eyebrow"><i className="fas fa-circle-dot text-xs" /> <span><T k="addons.eyebrow2" /></span></p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-textPrimary mb-4"><T k="addons.h3_2" /></h3>
              <p className="text-brand-textSecondary leading-relaxed mb-4">
                A maioria das empresas contrata marketing e recebe tarefas soltas: post, arte, anúncio, relatório, página.
              </p>
              <p className="text-brand-textSecondary leading-relaxed mb-4">
                O design sustenta percepção de valor. A copy deixa a oferta clara. A página conduz para ação. O tráfego leva a pessoa certa. A automação organiza a entrada. O relatório mostra o que ajustar.
              </p>
              <p className="text-brand-textSecondary leading-relaxed">
                Quando cada peça trabalha sozinha, o marketing vira ruído. <strong className="text-brand-textPrimary">Quando tudo se conecta, vira sistema, e sistema é o que permite crescer com clareza.</strong>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          PRA QUEM É / PRA QUEM NÃO É
      ================================================================ */}
      <section id="cases" className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-site">
          <Reveal type="fade-up" className="text-center mb-10">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="fit.eyebrow" /></span></p>
            <h2 className="text-fade text-3xl md:text-4xl font-extrabold tracking-tight"><T k="fit.h2" /></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal type="fade-right" className="bg-brand-surface border border-brand-primary/25 rounded-2xl p-8 glow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center">
                  <i className="fas fa-check text-brand-primary text-sm" />
                </div>
                <h3 className="font-bold text-xl text-brand-primary"><T k="fit.yes_title" /></h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-check text-brand-primary mt-0.5 text-xs flex-shrink-0" /> Negócios que já faturam e querem escalar com estrutura</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-check text-brand-primary mt-0.5 text-xs flex-shrink-0" /> Empreendedores que entendem que marketing é investimento</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-check text-brand-primary mt-0.5 text-xs flex-shrink-0" /> Marcas que querem previsibilidade, não sorte</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-check text-brand-primary mt-0.5 text-xs flex-shrink-0" /> Quem quer uma equipe de marketing sem contratar internamente</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-check text-brand-primary mt-0.5 text-xs flex-shrink-0" /> Negócios prontos para uma parceria de médio e longo prazo</li>
              </ul>
            </Reveal>
            <Reveal type="fade-left" delay={80} className="bg-brand-surface border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                  <i className="fas fa-times text-red-400 text-sm" />
                </div>
                <h3 className="font-bold text-xl text-red-400"><T k="fit.no_title" /></h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-times text-red-400 mt-0.5 text-xs flex-shrink-0" /> Negócios que querem resultado sem investir nada</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-times text-red-400 mt-0.5 text-xs flex-shrink-0" /> Quem busca atalho milagroso ou fórmula mágica</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-times text-red-400 mt-0.5 text-xs flex-shrink-0" /> Empreendedores que não têm clareza sobre sua oferta</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-times text-red-400 mt-0.5 text-xs flex-shrink-0" /> Negócios sem produto validado ou sem mínimo de margem</li>
                <li className="flex items-start gap-3 text-sm text-brand-textSecondary"><i className="fas fa-times text-red-400 mt-0.5 text-xs flex-shrink-0" /> Quem quer controlar cada detalhe sem confiar no processo</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          FAQ
      ================================================================ */}
      <section className="py-24 bg-brand-surface/20">
        <div className="container mx-auto px-6 max-w-site-md">
          <Reveal type="fade-up" className="text-center mb-14">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> <span><T k="faq.eyebrow" /></span></p>
            <h2 className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight"><T k="faq.h2" /></h2>
          </Reveal>

          <Reveal type="fade-up" delay={100}>
            <Faq
              items={[
                { q: <T k="faq.q1" />, a: <T k="faq.a1" /> },
                { q: <T k="faq.q2" />, a: <T k="faq.a2" /> },
                { q: <T k="faq.q3" />, a: <T k="faq.a3" /> },
                { q: <T k="faq.q4" />, a: <T k="faq.a4" /> },
                { q: <T k="faq.q5" />, a: <T k="faq.a5" /> },
                {
                  q: <T k="faq.q6" />,
                  a: <>Não. É funil perpétuo completo <strong>ou</strong> 1 lançamento por trimestre. Os dois simultâneos exigem proposta customizada.</>,
                },
                { q: <T k="faq.q7" />, a: <T k="faq.a7" /> },
                { q: <T k="faq.q8" />, a: <T k="faq.a8" /> },
                { q: <T k="faq.q9" />, a: <T k="faq.a9" /> },
                { q: <T k="faq.q10" />, a: <T k="faq.a10" /> },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================
          CTA FINAL
      ================================================================ */}
      <section id="contato" className="py-12 md:py-16 px-4 md:px-6">
        <Reveal type="fade-up" className="bg-brand-surface border border-brand-primary/25 rounded-3xl p-10 md:p-16 text-center glow-card">
          <div className="max-w-2xl mx-auto">
            <div className="float-a inline-flex w-16 h-16 rounded-2xl items-center justify-center bg-brand-primary/10 border border-brand-primary/30 mb-6">
              <i className="fas fa-bolt text-brand-primary text-2xl" />
            </div>
            <p className="eyebrow justify-center mb-4"><i className="fas fa-circle-dot text-xs" /> <span><T k="cta_final.eyebrow" /></span></p>
            <THtml k="cta_final.h2" as="h2" className="text-fade text-3xl md:text-4xl font-extrabold mb-3" />
            <p className="text-brand-textSecondary mb-4 leading-relaxed"><span><T k="cta_final.p1" /></span></p>
            <p className="text-brand-textSecondary mb-8 leading-relaxed"><span><T k="cta_final.p2" /></span></p>
            <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
              <span className="px-8 py-3 text-sm font-bold text-brand-bg"><T k="cta_final.cta" /></span>
              <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center">
                <i className="fas fa-arrow-right text-brand-bg text-sm" />
              </span>
            </PopupButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
