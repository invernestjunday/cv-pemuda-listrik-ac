import type { PageData } from "../types";
import { site } from "../site";
import { contactFaq } from "../faq";

export const kontakPage = {
  slug: "/kontak/",
  type: "contact",
  serviceType: "mixed",
  seo: {
    title: "Kontak CV Pemuda Listrik & AC",
    description:
      "Hubungi CV Pemuda Listrik & AC untuk konsultasi jasa listrik dan AC di Jakarta, Tangerang Selatan, dan Tangerang Kota melalui WhatsApp.",
    canonical: `${site.baseUrl}/kontak/`
  },
  breadcrumb: [
    { label: "Beranda", href: "/" },
    { label: "Kontak", href: "/kontak/" }
  ],
  hero: {
    h1: "Hubungi CV Pemuda untuk Jasa Listrik dan AC",
    subheadline:
      "Konsultasikan kebutuhan listrik atau AC Anda melalui WhatsApp. CV Pemuda melayani area Jakarta, Tangerang Selatan, dan Tangerang Kota setiap hari pukul 08.00–21.00.",
    primaryCtaId: "globalWhatsapp"
  },
  sections: [],
  faq: contactFaq,
  schema: {
    contactPage: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
