export const pageSlugs = [
  "/",
  "/tentang-kami/",
  "/layanan-listrik/",
  "/layanan-ac/",
  "/konsultasi-biaya/",
  "/kontak/",
  "/jasa-listrik-jakarta/",
  "/jasa-listrik-tangerang-selatan/",
  "/jasa-listrik-tangerang-kota/",
  "/jasa-ac-jakarta/",
  "/jasa-ac-tangerang-selatan/",
  "/jasa-ac-tangerang-kota/"
] as const;

export function isKnownInternalPath(path: string) {
  return pageSlugs.includes(path as (typeof pageSlugs)[number]);
}
