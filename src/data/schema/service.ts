import type { PageData } from "../types";

function getServiceTypeLabel(page: PageData) {
  if (page.serviceType === "electric") return "Jasa Listrik";
  if (page.serviceType === "ac") return "Jasa AC";
  if (page.serviceType === "cost") return "Konsultasi Biaya Jasa Listrik dan AC";
  return "Jasa Listrik dan AC";
}

function getAreaServed(page: PageData, siteAreas: readonly string[]) {
  if (page.area) return page.area;
  return siteAreas;
}

export function generateServiceSchema(
  page: PageData,
  site: {
    baseUrl: string;
    serviceAreas: readonly string[];
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${page.seo.canonical}#service`,
    name: page.hero.h1,
    description: page.seo.description,
    provider: {
      "@id": `${site.baseUrl}/#localbusiness`
    },
    areaServed: getAreaServed(page, site.serviceAreas),
    serviceType: getServiceTypeLabel(page)
  };
}
