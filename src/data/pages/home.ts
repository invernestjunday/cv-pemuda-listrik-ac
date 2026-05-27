import type { PageData } from "../types";
import { site } from "../site";
import { homeFaq } from "../faq";

export const homePage = {
  slug: "/",
  type: "home",
  serviceType: "mixed",
  seo: {
    title:
      "Jasa Listrik & AC Jakarta, Tangerang Selatan, Tangerang Kota | CV Pemuda",
    description:
      "CV Pemuda Listrik & AC melayani jasa listrik dan AC panggilan untuk Jakarta, Tangerang Selatan, dan Tangerang Kota. Konsultasi kebutuhan Anda melalui WhatsApp.",
    canonical: `${site.baseUrl}/`
  },
  hero: {
    h1: "Jasa Listrik & AC Panggilan untuk Jakarta, Tangerang Selatan, dan Tangerang Kota",
    subheadline:
      "CV Pemuda Listrik & AC melayani kebutuhan listrik dan AC untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasikan kebutuhan Anda melalui WhatsApp.",
    primaryCtaId: "globalWhatsapp",
    secondaryCta: {
      label: "Lihat Layanan",
      href: "#layanan"
    }
  },
  sections: [],
  faq: homeFaq,
  schema: {
    localBusiness: true,
    website: true,
    faq: true
  }
} satisfies PageData;
