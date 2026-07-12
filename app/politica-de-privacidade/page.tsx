import type { Metadata } from "next";
import Link from "next/link";
import { PopupButton } from "@/components/PopupButton";

export const metadata: Metadata = {
  title: "Política de Privacidade | Nexo Digital",
  description:
    "Como a Nexo Digital coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container mx-auto px-6 max-w-site py-4">
        <p className="text-brand-textMuted text-xs flex items-center gap-2">
          <Link href="/" className="hover:text-brand-primary transition">Home</Link>
          <i className="fas fa-chevron-right text-[9px]" />
          <span className="text-brand-primary">Política de Privacidade</span>
        </p>
      </div>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-site-md">
          <p className="eyebrow"><i className="fas fa-shield-halved text-xs" /> LGPD — Lei nº 13.709/2018</p>
          <h1 className="text-fade text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Política de Privacidade</h1>
          <p className="text-brand-textSecondary leading-relaxed">Última atualização: 11 de julho de 2026.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-site-md">
          <div className="bg-brand-surface border border-brand-border/15 rounded-3xl p-8 md:p-14 space-y-10 text-brand-textSecondary leading-relaxed text-sm">
            <div>
              <p>A <strong className="text-brand-textPrimary">Nexo Digital</strong> (&quot;Nexo&quot;, &quot;nós&quot;) respeita a sua privacidade e está comprometida em proteger os dados pessoais tratados através do site <strong className="text-brand-textPrimary">nexodigital.com.br</strong>, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018). Esta política explica quais dados coletamos, por que coletamos e como você pode exercer seus direitos.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">1. Quem é o controlador dos dados</h2>
              <p>A Nexo Digital, agência de marketing e automação, é a controladora dos dados pessoais coletados neste site. Dúvidas sobre este documento ou sobre o tratamento dos seus dados podem ser enviadas para <a href="mailto:contato@nexodigital.com.br" className="text-brand-primary font-semibold">contato@nexodigital.com.br</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">2. Quais dados coletamos</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-brand-textPrimary">Dados fornecidos por você:</strong> nome completo, e-mail e telefone/WhatsApp, quando você preenche o formulário de solicitação de proposta.</li>
                <li><strong className="text-brand-textPrimary">Dados de origem de tráfego:</strong> parâmetros UTM e URL de acesso, para entendermos qual campanha ou canal trouxe o seu contato.</li>
                <li><strong className="text-brand-textPrimary">Dados técnicos e de navegação:</strong> endereço IP, tipo de dispositivo, navegador e páginas visitadas, coletados de forma automática por cookies e tecnologias similares (veja nossa <Link href="/politica-de-cookies/" className="text-brand-primary font-semibold">Política de Cookies</Link>).</li>
                <li><strong className="text-brand-textPrimary">Preferências de navegação:</strong> idioma selecionado e decisão sobre cookies, salvos localmente no seu navegador.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">3. Para que usamos seus dados</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Responder à sua solicitação de proposta e entrar em contato via e-mail ou WhatsApp;</li>
                <li>Entender a origem e o desempenho das nossas campanhas de marketing;</li>
                <li>Melhorar a experiência de navegação e o conteúdo do site;</li>
                <li>Cumprir obrigações legais e regulatórias, quando aplicável.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">4. Base legal (art. 7º da LGPD)</h2>
              <p>Tratamos seus dados com base no seu <strong className="text-brand-textPrimary">consentimento</strong> (ao preencher o formulário e ao interagir com o aviso de cookies) e no <strong className="text-brand-textPrimary">legítimo interesse</strong> da Nexo em responder a solicitações comerciais e melhorar seus serviços.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">5. Com quem compartilhamos seus dados</h2>
              <p>Seus dados podem ser compartilhados com fornecedores que operam em nosso nome, como plataformas de automação de marketing (Make/n8n), WhatsApp Business e provedores de hospedagem (Vercel). Não vendemos seus dados pessoais a terceiros.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">6. Por quanto tempo guardamos seus dados</h2>
              <p>Mantemos seus dados pelo tempo necessário para cumprir a finalidade para a qual foram coletados, ou até que você solicite a exclusão, o que ocorrer primeiro, respeitando eventuais obrigações legais de retenção.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">7. Seus direitos (art. 18 da LGPD)</h2>
              <p className="mb-3">Você tem direito a, mediante solicitação:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Confirmar a existência de tratamento e acessar seus dados;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Solicitar a portabilidade dos seus dados a outro fornecedor;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Solicitar a exclusão dos dados tratados com base no consentimento.</li>
              </ul>
              <p className="mt-3">Para exercer esses direitos, entre em contato pelo e-mail <a href="mailto:contato@nexodigital.com.br" className="text-brand-primary font-semibold">contato@nexodigital.com.br</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">8. Cookies</h2>
              <p>Utilizamos cookies e tecnologias similares para o funcionamento do site e para fins analíticos. Detalhes completos estão na nossa <Link href="/politica-de-cookies/" className="text-brand-primary font-semibold">Política de Cookies</Link>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">9. Segurança dos dados</h2>
              <p>Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acessos não autorizados, perda, alteração ou divulgação indevida.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-textPrimary mb-3">10. Alterações a esta política</h2>
              <p>Esta política pode ser atualizada periodicamente. A data da última atualização está sempre indicada no topo desta página.</p>
            </div>

            <div className="pt-6 border-t border-brand-border/10">
              <PopupButton className="split-btn inline-flex items-center rounded-full bg-brand-primary p-1.5 hover:bg-brand-primaryHover transition">
                <span className="px-6 py-2.5 text-sm font-bold text-brand-bg">Falar com a Nexo</span>
                <span className="btn-icon w-10 h-10 rounded-full bg-brand-bg/20 flex items-center justify-center">
                  <i className="fas fa-arrow-right text-brand-bg text-sm" />
                </span>
              </PopupButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
