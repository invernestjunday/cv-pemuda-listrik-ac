import type { PageData } from "../types";

export function generateAboutPageSchema(
  page: PageData,
  site: { baseUrl: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${page.seo.canonical}#aboutpage`,
    name: page.hero.h1,
    url: page.seo.canonical,
    about: {
      "@id": `${site.baseUrl}/#localbusiness`
    }
  };
}

export function generateContactPageSchema(
  page: PageData,
  site: { baseUrl: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${page.seo.canonical}#contactpage`,
    name: page.hero.h1,
    url: page.seo.canonical,
    about: {
      "@id": `${site.baseUrl}/#localbusiness`
    }
  };
}
