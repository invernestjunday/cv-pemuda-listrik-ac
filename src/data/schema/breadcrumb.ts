import type { PageData } from "../types";
import { absoluteUrl } from "../../utils/seo";

export function generateBreadcrumbSchema(page: PageData) {
  if (!page.breadcrumb || page.breadcrumb.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${page.seo.canonical}#breadcrumb`,
    itemListElement: page.breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };
}
