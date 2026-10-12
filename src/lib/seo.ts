import type { FAQItem } from "@/data/home";

const fallbackSiteUrl = "https://www.k2software.com.br";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  try {
    return new URL(value).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteName = "K2 Software";

export const siteTitle = "K2 Software | ERP 100% web para gestão empresarial";

export const siteDescription =
  "A plataforma de gestão mais completa e inovadora do Brasil. ERP 100% web com atualização automática, integrando financeiro, fiscal, estoque, RH e BI.";

export function organizationGraph() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: siteName,
        url,
        logo: `${url}/assets/logo-k2software.svg`,
        taxID: "16.501.555/0001-57",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Alameda Grajaú, 60, Sala 2510, Alphaville",
          addressLocality: "Barueri",
          addressRegion: "SP",
          postalCode: "32.456-356",
          addressCountry: "BR",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: siteName,
        url,
        inLanguage: "pt-BR",
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };
}

export function faqGraph(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.join(" "),
      },
    })),
  };
}
