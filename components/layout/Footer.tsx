"use client";

import Image from "next/image";
import Link from "next/link";
import { T } from "@/components/i18n/T";
import { useCookieBanner } from "@/components/CookieBanner";

const SERVICE_LINKS = [
  { href: "/servicos/trafego-pago/", label: "Tráfego Pago" },
  { href: "/servicos/automacao/", label: "Automação de Marketing" },
  { href: "/servicos/social-media/", label: "Social Media" },
  { href: "/servicos/crm-funis/", label: "CRM & Funis" },
  { href: "/servicos/email-marketing/", label: "E-mail Marketing" },
  { href: "/servicos/seo-conteudo/", label: "SEO & Conteúdo" },
  { href: "/servicos/design-identidade/", label: "Design & Identidade Visual" },
  { href: "/servicos/edicao-video/", label: "Edição de Vídeo" },
  { href: "/servicos/sites-paginas/", label: "Sites & Checkouts" },
] as const;

export function Footer() {
  const { reopen } = useCookieBanner();

  return (
    <footer className="mx-4 md:mx-6 mb-4 rounded-t-3xl border border-b-0 border-brand-primary/20 bg-brand-surface pt-16 pb-8 px-8 md:px-16">
      <div className="container mx-auto max-w-site">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="block mb-5">
              <Image src="/assets/logoNexo.svg" alt="Nexo Digital" width={145} height={56} className="h-14 w-auto" />
            </Link>
            <h5 className="font-bold text-brand-textPrimary mb-3 text-sm leading-snug"><T k="footer.tagline" /></h5>
            <p className="text-brand-textMuted text-sm"><T k="footer.perf" /></p>
          </div>

          <div>
            <h6 className="font-bold text-brand-textPrimary mb-4 text-sm"><T k="footer.quick" /></h6>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              <li><Link href="/#home" className="footer-link hover:text-brand-primary transition"><span><T k="footer.l_home" /></span></Link></li>
              <li><Link href="/#sobre" className="footer-link hover:text-brand-primary transition"><span><T k="footer.l_about" /></span></Link></li>
              <li><Link href="/#cases" className="footer-link hover:text-brand-primary transition"><span><T k="footer.l_cases" /></span></Link></li>
              <li><Link href="/#pricing" className="footer-link hover:text-brand-primary transition"><span><T k="footer.l_plans" /></span></Link></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-brand-textPrimary mb-4 text-sm"><T k="footer.services" /></h6>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="footer-link hover:text-brand-primary transition">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-brand-textPrimary mb-4 text-sm"><T k="footer.contact_title" /></h6>
            <p className="text-brand-textMuted text-sm mb-1 flex items-center gap-2">
              <i className="fab fa-whatsapp text-brand-primary text-xs" /> +55 (35) 99166-1854
            </p>
          </div>
        </div>

        <div className="gradient-rule mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-textMuted">
          <p><T k="footer.rights" /></p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade/" className="footer-link hover:text-brand-primary transition"><T k="footer.privacy" /></Link>
            <Link href="/politica-de-cookies/" className="footer-link hover:text-brand-primary transition"><T k="footer.cookies" /></Link>
            <button type="button" onClick={reopen} className="footer-link hover:text-brand-primary transition">
              <T k="footer.cookie_prefs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
