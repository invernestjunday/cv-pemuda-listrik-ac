import type { PageData } from "../types";
import { site } from "../site";
import { acServiceFaq } from "../faq";

export const layananAcPage = {
  slug: "/layanan-ac/",
  type: "service",
  serviceType: "ac",
  seo: {
    title: "Layanan AC untuk Rumah & Usaha Kecil | CV Pemuda",
    description:
      "CV Pemuda melayani konsultasi jasa AC untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen di Jakarta, Tangerang Selatan, dan Tangerang Kota.",
    canonical: `${site.baseUrl}/layanan-ac/`
  },
  breadcrumb: [
    { label: "Beranda", href: "/" },
    { label: "Layanan AC", href: "/layanan-ac/" }
  ],
  hero: {
    h1: "Layanan AC untuk Rumah, Ruko, Toko, dan Kantor Kecil",
    subheadline:
      "CV Pemuda melayani konsultasi jasa AC untuk kebutuhan rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen, mulai dari cuci AC, AC tidak dingin, AC bocor, isi atau tambah freon, bongkar pasang, instalasi, hingga relokasi AC.",
    primaryCtaId: "acGeneral",
    secondaryCta: {
      label: "Lihat Area Layanan",
      href: "#area-layanan"
    }
  },
  sections: [],
  faq: acServiceFaq,
  schema: {
    service: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
