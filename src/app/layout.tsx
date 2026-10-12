import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl, organizationGraph, siteDescription, siteTitle } from "@/lib/seo";
import "./globals.css";

const googleSansFlex = localFont({
  src: "../fonts/google-sans-flex-latin.woff2",
  display: "swap",
  weight: "400 600",
  variable: "--font-google-sans-flex",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteTitle,
    template: "%s | K2 Software",
  },
  description: siteDescription,
  applicationName: "K2 Software",
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "K2 Software",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/hero/slide-1.png",
        width: 1440,
        height: 909,
        alt: "Painel do ERP K2 Software em um notebook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero/slide-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/logo-k2software.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={googleSansFlex.variable}>
      <body className="antialiased">
        <JsonLd data={organizationGraph()} />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <Script
          src="https://app.convertsales.io/widget/loader.js"
          data-key="wk_Kk88ICi3ueASUG4Y2FPmuArhkY6Lo6P6"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
