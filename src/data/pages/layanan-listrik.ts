import type { PageData } from "../types";
import { site } from "../site";
import { electricServiceFaq } from "../faq";

export const layananListrikPage = {
  slug: "/layanan-listrik/",
  type: "service",
  serviceType: "electric",
  seo: {
    title: "Jasa Listrik untuk Rumah & Usaha Kecil | CV Pemuda",
    description:
      "CV Pemuda melayani konsultasi jasa listrik untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen di Jakarta, Tangerang Selatan, dan Tangerang Kota.",
    canonical: `${site.baseUrl}/layanan-listrik/`
  },
  breadcrumb: [
    { label: "Beranda", href: "/" },
    { label: "Layanan Listrik", href: "/layanan-listrik/" }
  ],
  hero: {
    h1: "Jasa Listrik untuk Rumah, Ruko, Toko, dan Kantor Kecil",
    subheadline:
      "CV Pemuda melayani konsultasi jasa listrik untuk kebutuhan rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen, mulai dari instalasi, perbaikan, tambah titik, penggantian MCB, panel sederhana, grounding, hingga pengecekan jalur listrik.",
    primaryCtaId: "electricGeneral",
    secondaryCta: {
      label: "Lihat Area Layanan",
      href: "#area-layanan"
    }
  },
  sections: [],
  faq: electricServiceFaq,
  schema: {
    service: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
