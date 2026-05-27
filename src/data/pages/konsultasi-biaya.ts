import type { PageData } from "../types";
import { site } from "../site";
import { costFaq } from "../faq";

export const konsultasiBiayaPage = {
  slug: "/konsultasi-biaya/",
  type: "cost",
  serviceType: "cost",
  seo: {
    title: "Konsultasi Biaya Jasa Listrik dan AC | CV Pemuda",
    description:
      "Konsultasikan biaya jasa listrik dan AC melalui WhatsApp. Estimasi biaya menyesuaikan jenis pekerjaan, kondisi lapangan atau unit, material, dan tingkat kesulitan.",
    canonical: `${site.baseUrl}/konsultasi-biaya/`
  },
  breadcrumb: [
    { label: "Beranda", href: "/" },
    { label: "Konsultasi Biaya", href: "/konsultasi-biaya/" }
  ],
  hero: {
    h1: "Konsultasi Biaya Jasa Listrik dan AC",
    subheadline:
      "Biaya jasa listrik dan AC dapat berbeda tergantung jenis pekerjaan, kondisi lapangan atau unit, kebutuhan material, akses lokasi, dan tingkat kesulitan. Konsultasikan kebutuhan Anda melalui WhatsApp agar estimasi dapat dibahas lebih jelas.",
    primaryCtaId: "costConsultation",
    secondaryCta: {
      label: "Lihat Faktor Biaya",
      href: "#faktor-biaya"
    }
  },
  sections: [],
  faq: costFaq,
  schema: {
    service: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
