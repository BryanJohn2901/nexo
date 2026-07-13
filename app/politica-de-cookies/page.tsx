import type { Metadata } from "next";
import Link from "next/link";
import { CookiePrefsButton } from "@/components/CookiePrefsButton";
import { ServiceHeroFX } from "@/components/ServiceHeroFX";

export const metadata: Metadata = {
  title: "Política de Cookies | Nexo Digital",
  description:
    "Como a Nexo Digital usa cookies e tecnologias similares, e como você pode gerenciar suas preferências, em conformidade com a LGPD.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="container mx-auto px-6 max-w-site py-4">
        <p className="text-brand-textMuted text-xs flex items-center gap-2">
          <Link href="/" className="hover:text-brand-primary transition">Home</Link>
          <i className="fas fa-chevron-right text-[9px]" />
          <span className="text-brand-primary">Política de Cookies</span>
        </p>
      </div>

      <section className="relative mx-4 md:mx-6 mb-6 rounded-3xl overflow-hidden hero-bg flex items-center py-14 md:py-20">
        <ServiceHeroFX variant="rich" />
        <div className="container mx-auto max-w-site px-8 md:px-16 relative z-10">
          <p className="eyebrow"><i className="fas fa-cookie-bite text-xs" /> LGPD — Lei nº 13.709/2018</p>
          <h1 className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Política de Cookies</h1>
          <p className="text-brand-textSecondary leading-relaxed">Última atualização: 11 de julho de 2026.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-site-md">
          <div className="bg-brand-surface border border-brand-border/15 rounded-3xl p-8 md:p-14 space-y-10 text-brand-textSecondary leading-relaxed text-sm">
            <div>
              <p>Esta Política de Cookies explica o que são cookies, quais utilizamos no site da <strong className="text-brand-textPrimary">Nexo Digital</strong> e como você pode controlar suas preferências. Ela complementa a nossa <Link href="/politica-de-privacidade/" className="text-brand-primary font-semibold">Política de Privacidade</Link>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">1. O que são cookies</h2>
              <p>Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre de informações sobre sua visita, como idioma e preferências. Também usamos armazenamento local (<em>localStorage</em>) para as mesmas finalidades.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">2. Categorias de cookies que usamos</h2>
              <div className="mt-4 space-y-4">
                <div className="border border-brand-border/15 rounded-2xl p-5">
                  <p className="font-bold text-brand-textPrimary mb-1"><i className="fas fa-lock text-brand-primary text-xs mr-1" /> Essenciais (sempre ativos)</p>
                  <p>Necessários para o funcionamento básico do site: memorizar sua decisão sobre o aviso de cookies e o idioma selecionado. Sem eles, o site pode não funcionar corretamente. Não exigem consentimento.</p>
                </div>
                <div className="border border-brand-border/15 rounded-2xl p-5">
                  <p className="font-bold text-brand-textPrimary mb-1"><i className="fas fa-chart-line text-brand-primary text-xs mr-1" /> Desempenho e análise</p>
                  <p>Nos ajudam a entender como os visitantes usam o site (páginas mais acessadas, origem do tráfego via parâmetros UTM), para melhorarmos conteúdo e performance. Só são ativados com o seu consentimento.</p>
                </div>
                <div className="border border-brand-border/15 rounded-2xl p-5">
                  <p className="font-bold text-brand-textPrimary mb-1"><i className="fas fa-code text-brand-primary text-xs mr-1" /> Recursos de terceiros</p>
                  <p>Nosso site carrega fontes (Google Fonts), ícones (Font Awesome), estilos (Tailwind CSS) e animações (AOS) de provedores externos via CDN, que podem registrar seu endereço IP para entregar esses recursos.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">3. Como gerenciar suas preferências</h2>
              <p className="mb-4">Ao acessar o site pela primeira vez, você vê um aviso perguntando se aceita cookies não essenciais. Você pode alterar essa escolha a qualquer momento clicando no botão abaixo, ou em &quot;Preferências de Cookies&quot; no rodapé de qualquer página.</p>
              <CookiePrefsButton />
              <p className="mt-4">Você também pode bloquear ou excluir cookies diretamente nas configurações do seu navegador. Note que isso pode afetar o funcionamento de algumas partes do site.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">4. Base legal</h2>
              <p>Cookies essenciais são tratados com base no legítimo interesse necessário ao funcionamento do site. Cookies de desempenho e recursos não essenciais dependem do seu consentimento livre e informado, conforme a LGPD (art. 7º, I).</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">5. Alterações a esta política</h2>
              <p>Esta política pode ser atualizada periodicamente para refletir mudanças nos cookies que utilizamos. A data da última atualização está sempre indicada no topo desta página.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">6. Contato</h2>
              <p>Dúvidas sobre esta política podem ser enviadas para <a href="mailto:contato@nexodigital.com.br" className="text-brand-primary font-semibold">contato@nexodigital.com.br</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
