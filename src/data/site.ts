const env =
  (globalThis as unknown as {
    process?: { env?: Record<string, string | undefined> };
  }).process?.env ?? {};

const cloudflareBaseUrl = "https://pemuda-karya-sinergi-listrik-ac.pages.dev";
const githubPagesBaseUrl =
  "https://invernestjunday.github.io/cv-pemuda-listrik-ac";

const isCloudflare =
  env.CF_PAGES === "1" ||
  env.PUBLIC_DEPLOY_TARGET === "cloudflare" ||
  env.DEPLOY_TARGET === "cloudflare";

export const site = {
  siteName: "CV Pemuda Listrik & AC",
  businessName: "CV Pemuda Listrik & AC",

  // GitHub Pages tetap bisa dipakai sebagai preview.
  // Cloudflare Pages memakai baseUrl pages.dev saat environment Cloudflare aktif.
  baseUrl: isCloudflare ? cloudflareBaseUrl : githubPagesBaseUrl,

  defaultOgImage: "/images/og/cv-pemuda-listrik-ac.jpg",
  logo: "/images/logo/logo-pks.svg",

  whatsappNumber: "+6287885724777",

  serviceAreas: ["Jakarta", "Tangerang Selatan", "Tangerang Kota"],

  openingHoursLabel: "Senin–Minggu, 08.00–21.00",
  openingHoursSchema: "Mo-Su 08:00-21:00"
} as const;
