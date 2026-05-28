import type { CtaConfig, PageData, PageSection } from "../data/types";

function validateInternalLink(href: string, pageSlug: string, context: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return;
  if (href === "/") return;

  const hashIndex = href.indexOf("#");
  const pathOnly = hashIndex >= 0 ? href.slice(0, hashIndex) : href;

  if (pathOnly && !pathOnly.endsWith("/")) {
    throw new Error(
      `Internal link harus memakai trailing slash di ${pageSlug} (${context}): ${href}`
    );
  }
}

function validateSectionCtas(
  pageSlug: string,
  section: PageSection,
  ctas: Record<string, CtaConfig>
) {
  if (section.type === "cta" && !ctas[section.primaryCtaId]) {
    throw new Error(
      `CTA section tidak ditemukan di ${pageSlug}: ${section.primaryCtaId}`
    );
  }

  if (section.type === "service-summary") {
    for (const service of section.services) {
      if (!ctas[service.primaryCtaId]) {
        throw new Error(
          `CTA service-summary tidak ditemukan di ${pageSlug}: ${service.primaryCtaId}`
        );
      }
      validateInternalLink(service.secondaryLink.href, pageSlug, "service-summary");
    }
  }

  if (section.type === "education-split" && section.ctaId) {
    if (!ctas[section.ctaId]) {
      throw new Error(
        `CTA education-split tidak ditemukan di ${pageSlug}: ${section.ctaId}`
      );
    }
  }
}

function validateSectionLinks(pageSlug: string, section: PageSection) {
  if (section.type === "internal-links") {
    for (const link of section.links) {
      validateInternalLink(link.href, pageSlug, "internal-links");
    }
  }

  if (section.type === "area-cards") {
    for (const area of section.areas) {
      for (const link of area.links) {
        validateInternalLink(link.href, pageSlug, "area-cards");
      }
    }
  }

  if (section.type === "cta" && section.secondaryLink) {
    validateInternalLink(section.secondaryLink.href, pageSlug, "cta secondaryLink");
  }
}

function hasSection(page: PageData, type: PageSection["type"]) {
  return page.sections.some((section) => section.type === type);
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

    if (!page.seo.canonical.startsWith("https://")) {
      throw new Error(`Canonical harus absolute HTTPS: ${page.slug}`);
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
      validateInternalLink(page.hero.secondaryCta.href, page.slug, "hero secondaryCta");
    }

    if (page.slug !== "/" && (!page.breadcrumb || page.breadcrumb.length === 0)) {
      throw new Error(`Halaman selain Beranda wajib punya breadcrumb: ${page.slug}`);
    }

    if (page.breadcrumb) {
      for (const item of page.breadcrumb) {
        validateInternalLink(item.href, page.slug, "breadcrumb");
      }
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

    if (page.sections.length === 0) {
      throw new Error(`Halaman wajib punya sections: ${page.slug}`);
    }

    if (page.type === "service" && !page.serviceType) {
      throw new Error(`Halaman service wajib punya serviceType: ${page.slug}`);
    }

    for (const section of page.sections) {
      if (section.type === "faq" && section.faq.length === 0) {
        throw new Error(`Section FAQ kosong: ${page.slug}`);
      }
    }

    if (page.type === "local-service") {
      if (!page.area || !page.areaId) {
        throw new Error(`Halaman lokal belum punya area lengkap: ${page.slug}`);
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

      if (!hasSection(page, "internal-links")) {
        throw new Error(`Halaman lokal wajib punya internal-links: ${page.slug}`);
      }

      if (!hasSection(page, "cta")) {
        throw new Error(`Halaman lokal wajib punya CTA section: ${page.slug}`);
      }

      if (!hasSection(page, "problem-grid") || !hasSection(page, "category-grid")) {
        throw new Error(
          `Halaman lokal wajib punya problem-grid dan category-grid: ${page.slug}`
        );
      }

      if (page.serviceType === "electric" && !page.hero.primaryCtaId.startsWith("electric")) {
        throw new Error(`CTA hero listrik lokal tidak sesuai: ${page.slug}`);
      }

      if (page.serviceType === "ac" && !page.hero.primaryCtaId.startsWith("ac")) {
        throw new Error(`CTA hero AC lokal tidak sesuai: ${page.slug}`);
      }
    }

    for (const section of page.sections) {
      validateSectionCtas(page.slug, section, ctas);
      validateSectionLinks(page.slug, section);
    }
  }
}
