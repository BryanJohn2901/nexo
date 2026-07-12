import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services-data";
import { ServiceHeroFX } from "@/components/ServiceHeroFX";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { PopupButton } from "@/components/PopupButton";
import { SectionDivider } from "@/components/SectionDivider";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* BREADCRUMB */}
      <div className="container mx-auto px-6 max-w-site py-4">
        <p className="text-brand-textMuted text-xs flex items-center gap-2">
          <Link href="/" className="hover:text-brand-primary transition">Home</Link>
          <i className="fas fa-chevron-right text-[9px]" />
          <Link href="/#servicos" className="hover:text-brand-primary transition">Serviços</Link>
          <i className="fas fa-chevron-right text-[9px]" />
          <span className="text-brand-primary">{service.breadcrumbLabel}</span>
        </p>
      </div>

      {/* HERO */}
      <section className="relative mx-4 md:mx-6 mb-6 rounded-3xl overflow-hidden hero-bg min-h-[70vh] flex items-center">
        <ServiceHeroFX variant={service.heroDecoration} />
        <div className="container mx-auto max-w-site px-8 md:px-16 relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="eyebrow hero-line-1"><i className={`fas ${service.heroIcon} text-xs`} /> {service.heroEyebrow}</p>
            <h1 className="text-fade hero-line-2 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              {service.heroH1[0]}
              {service.heroH1[1] && (<><br /><span style={{ WebkitTextFillColor: "#D9FF6A" }}>{service.heroH1[1]}</span></>)}
            </h1>
            <p className="hero-line-3 text-brand-textSecondary text-lg leading-relaxed max-w-lg mb-8">{service.heroDesc}</p>
            <div className="hero-line-4 flex flex-wrap gap-4">
              <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
                <span className="px-6 py-2.5 text-sm font-bold text-brand-bg">Solicitar Proposta</span>
                <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center"><i className="fas fa-arrow-right text-brand-bg text-sm" /></span>
              </PopupButton>
              <div className="flex items-center gap-3 text-sm text-brand-textMuted"><i className={`fas ${service.heroNoteIcon} text-brand-primary`} /> {service.heroNote}</div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* STATS */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                type="fade-up"
                delay={i * 80}
                className={`rounded-2xl p-6 text-center bg-brand-surface border ${i === 0 ? "border-brand-primary/20 glow-card" : "border-brand-border/15"}`}
              >
                <p className="stat-fill text-5xl mb-2">{stat.value}</p>
                <p className="text-brand-textPrimary font-semibold text-sm">{stat.label}</p>
                <p className="text-brand-textMuted text-xs mt-1">{stat.sublabel}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FERRAMENTAS */}
      <section className="py-16 bg-brand-surface/20">
        <div className="container mx-auto px-6 max-w-site">
          <Reveal type="fade-up" className="text-center mb-12">
            <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> {service.toolsEyebrow}</p>
            <h2 className="text-fade text-3xl md:text-4xl font-extrabold tracking-tight">{service.toolsH2}</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {service.tools.map((tool, i) => (
              <Reveal key={tool.title} type="fade-up" delay={i * 80} className="card-lift bg-brand-surface border border-brand-border/15 rounded-2xl p-7 text-center">
                <i className={`${tool.brand ? "fab" : "fas"} ${tool.icon} text-4xl text-brand-primary mb-4 block`} />
                <p className="font-bold text-brand-textPrimary text-sm mb-1">{tool.title}</p>
                <p className="text-brand-textMuted text-xs">{tool.subtitle}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ENTREGAS */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-site">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 ${service.entregasVariant === "card" ? "items-start" : "items-center"}`}>
            <Reveal type="fade-right">
              <p className="eyebrow"><i className="fas fa-circle-dot text-xs" /> {service.entregasEyebrow}</p>
              <h2 className="text-fade text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.15] mb-8">
                {service.entregasH2.map((line, i) => (
                  <span key={i}>{i > 0 && <br />}{line}</span>
                ))}
              </h2>
              <div className="space-y-4">
                {service.entregasItems.map((item) => (
                  <div key={item} className="check-item">
                    <span className="check-dot"><i className="fas fa-check text-[9px] text-brand-primary" /></span> {item}
                  </div>
                ))}
              </div>
            </Reveal>

            {service.entregasVariant === "card" && service.nextStep ? (
              <Reveal type="fade-left" delay={100} className="bg-brand-surface border border-brand-primary/20 rounded-2xl p-8 glow-card">
                <p className="eyebrow"><i className="fas fa-circle-dot text-xs" /> Próximo Passo</p>
                <h3 className="font-bold text-xl text-brand-textPrimary mb-4">{service.nextStep.title}</h3>
                <p className="text-brand-textSecondary text-sm leading-relaxed mb-6">{service.nextStep.desc}</p>
                <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
                  <span className="px-6 py-2.5 text-sm font-bold text-brand-bg">{service.nextStep.cta}</span>
                  <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center"><i className="fas fa-arrow-right text-brand-bg text-sm" /></span>
                </PopupButton>
              </Reveal>
            ) : service.entregasImage ? (
              <Reveal type="fade-left" delay={100}>
                <Image
                  src={service.entregasImage.src}
                  alt={service.entregasImage.alt}
                  width={700}
                  height={467}
                  sizes="(max-width: 1024px) 90vw, 600px"
                  className="rounded-2xl w-full h-auto"
                  unoptimized
                />
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <>
          <section className="py-20 bg-brand-surface/20">
            <div className="container mx-auto px-6 max-w-[860px]">
              <Reveal type="fade-up" className="text-center mb-12">
                <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> FAQ</p>
                <h2 className="text-fade text-3xl md:text-4xl font-extrabold tracking-tight">{service.faqH2}</h2>
              </Reveal>
              <Reveal type="fade-up" delay={100}>
                <Faq items={service.faq.map((f) => ({ q: f.q, a: f.a }))} />
              </Reveal>
            </div>
          </section>
          <SectionDivider />
        </>
      )}

      {/* CTA FINAL */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <Reveal type="fade-up" className="bg-brand-surface border border-brand-primary/25 rounded-3xl p-10 md:p-16 text-center glow-card">
          <p className="eyebrow justify-center"><i className="fas fa-circle-dot text-xs" /> {service.finalCta.eyebrow}</p>
          <h2 className="text-fade text-3xl md:text-4xl font-extrabold mb-4">{service.finalCta.h2}</h2>
          <p className="text-brand-textSecondary mb-8 max-w-md mx-auto">{service.finalCta.desc}</p>
          <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
            <span className="px-8 py-3 text-sm font-bold text-brand-bg">{service.finalCta.cta}</span>
            <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center"><i className="fas fa-arrow-right text-brand-bg text-sm" /></span>
          </PopupButton>
        </Reveal>
      </section>
    </>
  );
}
