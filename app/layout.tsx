import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { PopupProvider } from "@/components/Popup";
import { CookieBannerProvider } from "@/components/CookieBanner";
import { CursorFX } from "@/components/CursorFX";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileFloat } from "@/components/layout/MobileFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexo Digital | Agência de Marketing & Automação",
  description:
    "Conectamos estratégia, dados e automação para escalar negócios. Tráfego pago, CRM, funis e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Self-hosted Font Awesome subset (see scripts/build-icons.mjs) — lives in
            public/ with relative font-face urls, so it can't go through a CSS import. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/fonts/fa/all.min.css" />
      </head>
      <body
        className="bg-brand-bg text-brand-textPrimary font-sans antialiased"
        // Browser extensions (ColorZilla, Grammarly, etc.) inject attributes
        // like cz-shortcut-listen before hydration — harmless, not our markup.
        suppressHydrationWarning
      >
        <I18nProvider>
          <PopupProvider>
            <CookieBannerProvider>
              <Header />
              {children}
              <Footer />
              <MobileFloat />
              <CursorFX />
              <ScrollProgress />
            </CookieBannerProvider>
          </PopupProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
