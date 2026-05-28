import { site } from "../data/site";
import type {
  CtaConfig,
  LinkItem,
  PageData,
  PageSection
} from "../data/types";

function normalizeBaseUrl() {
  return site.baseUrl.endsWith("/") ? site.baseUrl.slice(0, -1) : site.baseUrl;
}

function expectedCanonical(slug: string) {
  if (slug === "/") return `${normalizeBaseUrl()}/`;
  return `${normalizeBaseUrl()}${slug}`;
}

function isExternalOrAnchor(href: string) {
  return (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function validateInternalLink(href: string, context: string) {
  if (isExternalOrAnchor(href)) return;

  if (!href.startsWith("/")) {
    throw new Error(`Internal link harus diawali "/": ${context} -> ${href}`);
  }

  if (!href.endsWith("/")) {
    throw new Error(
      `Internal link harus memakai trailing slash: ${context} -> ${href}`
    );
  }
}

function collectSectionLinks(section: PageSection): LinkItem[] {
  const links: LinkItem[] = [];

  if (section.type === "internal-links") {
    links.push(...section.links);
  }

  if (section.type === "cta" && section.secondaryLink) {
    links.push(section.secondaryLink);
  }

  if (section.type === "service-summary") {
    for (const service of section.services) {
      links.push(service.secondaryLink);
    }
  }

  if (section.type === "area-cards") {
    for (const area of section.areas) {
      links.push(...area.links);
    }
  }

  return links;
}

export function validatePageData(
  pages: PageData[],
  ctas: Record<string, CtaConfig>
) {
  const slugs = new Set<string>();

  for (const page of pages) {
    if (!page.slug.startsWith("/")) {
      throw new Error(`Slug harus diawali "/": ${page.slug}`);
    }

    if (!page.slug.endsWith("/")) {
      throw new Error(`Slug harus memakai trailing slash: ${page.slug}`);
    }

    if (slugs.has(page.slug)) {
      throw new Error(`Duplikasi slug: ${page.slug}`);
    }

    slugs.add(page.slug);

    if (!page.seo.title || !page.seo.description || !page.seo.canonical) {
      throw new Error(`SEO metadata belum lengkap: ${page.slug}`);
    }

    if (page.seo.canonical !== expectedCanonical(page.slug)) {
      throw new Error(
        `Canonical tidak sesuai slug: ${page.slug}. Expected ${expectedCanonical(
          page.slug
        )}, got ${page.seo.canonical}`
      );
    }

    if (page.seo.canonical.includes("domain-anda.com")) {
      throw new Error(`Canonical masih memakai domain placeholder: ${page.slug}`);
    }

    if (!page.hero.h1) {
      throw new Error(`H1 kosong: ${page.slug}`);
    }

    if (!ctas[page.hero.primaryCtaId]) {
      throw new Error(
        `CTA hero tidak ditemukan di ${page.slug}: ${page.hero.primaryCtaId}`
      );
    }

    if (page.hero.secondaryCta) {
      validateInternalLink(
        page.hero.secondaryCta.href,
        `${page.slug} hero.secondaryCta`
      );
    }

    if (page.slug !== "/" && (!page.breadcrumb || page.breadcrumb.length === 0)) {
      throw new Error(`Halaman selain Beranda wajib punya breadcrumb: ${page.slug}`);
    }

    if (page.breadcrumb) {
      for (const item of page.breadcrumb) {
        validateInternalLink(item.href, `${page.slug} breadcrumb`);
      }
    }

    if (page.sections.length === 0) {
      throw new Error(`Sections kosong: ${page.slug}`);
    }

    if (page.schema.faq && (!page.faq || page.faq.length === 0)) {
      throw new Error(`FAQ schema aktif tetapi FAQ kosong: ${page.slug}`);
    }

    if (
      page.schema.breadcrumb &&
      (!page.breadcrumb || page.breadcrumb.length === 0)
    ) {
      throw new Error(
        `Breadcrumb schema aktif tetapi breadcrumb kosong: ${page.slug}`
      );
    }

    if (page.schema.service && !page.serviceType) {
      throw new Error(`Service schema aktif tetapi serviceType kosong: ${page.slug}`);
    }

    if (page.schema.aboutPage && page.type !== "about") {
      throw new Error(`AboutPage schema hanya untuk halaman about: ${page.slug}`);
    }

    if (page.schema.contactPage && page.type !== "contact") {
      throw new Error(`ContactPage schema hanya untuk halaman contact: ${page.slug}`);
    }

    if (page.schema.website && page.slug !== "/") {
      throw new Error(`WebSite schema hanya dipasang di Beranda: ${page.slug}`);
    }

    if (page.schema.localBusiness && page.slug !== "/") {
      throw new Error(`LocalBusiness schema hanya dipasang di Beranda: ${page.slug}`);
    }

    if (page.type === "local-service") {
      if (!page.area || !page.areaId) {
        throw new Error(`Halaman lokal belum punya area: ${page.slug}`);
      }

      if (!page.serviceType) {
        throw new Error(`Halaman lokal belum punya serviceType: ${page.slug}`);
      }

      if (page.serviceType === "electric" && !page.slug.startsWith("/jasa-listrik-")) {
        throw new Error(`Slug listrik lokal tidak valid: ${page.slug}`);
      }

      if (page.serviceType === "ac" && !page.slug.startsWith("/jasa-ac-")) {
        throw new Error(`Slug AC lokal tidak valid: ${page.slug}`);
      }

      if (!page.faq || page.faq.length < 5) {
        throw new Error(`FAQ lokal minimal 5 item: ${page.slug}`);
      }

      const hasInternalLinks = page.sections.some(
        (section) => section.type === "internal-links"
      );

      if (!hasInternalLinks) {
        throw new Error(`Halaman lokal wajib punya internal links: ${page.slug}`);
      }
    }

    for (const section of page.sections) {
      if (section.type === "cta" && !ctas[section.primaryCtaId]) {
        throw new Error(
          `CTA section tidak ditemukan di ${page.slug}: ${section.primaryCtaId}`
        );
      }

      if (section.type === "service-summary") {
        for (const service of section.services) {
          if (!ctas[service.primaryCtaId]) {
            throw new Error(
              `CTA service-summary tidak ditemukan di ${page.slug}: ${service.primaryCtaId}`
            );
          }
        }
      }

      if (section.type === "education-split" && section.ctaId) {
        if (!ctas[section.ctaId]) {
          throw new Error(
            `CTA education-split tidak ditemukan di ${page.slug}: ${section.ctaId}`
          );
        }
      }

      if (section.type === "faq") {
        if (!section.faq || section.faq.length === 0) {
          throw new Error(`Section FAQ kosong: ${page.slug}`);
        }
      }

      for (const link of collectSectionLinks(section)) {
        validateInternalLink(link.href, `${page.slug} section:${section.id}`);
      }
    }
  }
}
