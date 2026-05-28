import { site } from "../data/site";

function normalizedBaseUrl() {
  return site.baseUrl.endsWith("/") ? site.baseUrl.slice(0, -1) : site.baseUrl;
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBaseUrl()}${normalizedPath}`;
}

export function pageCanonical(slug: string) {
  if (slug === "/") return `${normalizedBaseUrl()}/`;
  return `${normalizedBaseUrl()}${slug}`;
}
