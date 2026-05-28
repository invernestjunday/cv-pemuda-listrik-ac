export function withBase(href: string) {
  if (!href) return href;

  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  if (isExternal || !href.startsWith("/")) {
    return href;
  }

  const base = import.meta.env.BASE_URL || "/";

  if (base === "/") {
    return href;
  }

  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}${href}`;
}
