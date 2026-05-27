import type { PageData } from "../types";
import { site } from "../site";

export const tentangKamiPage = {
  slug: "/tentang-kami/",
  type: "about",
  serviceType: "mixed",
  seo: {
    title: "Tentang CV Pemuda Listrik & AC",
    description:
      "CV Pemuda Listrik & AC melayani jasa listrik dan AC panggilan untuk Jakarta, Tangerang Selatan, dan Tangerang Kota.",
    canonical: `${site.baseUrl}/tentang-kami/`
  },
  breadcrumb: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami/" }
  ],
  hero: {
    h1: "Tentang CV Pemuda Listrik & AC",
    subheadline:
      "CV Pemuda Listrik & AC melayani jasa listrik dan AC panggilan untuk Jakarta, Tangerang Selatan, dan Tangerang Kota, dengan proses konsultasi yang mudah, komunikasi jelas, dan pengerjaan sesuai kondisi lapangan atau unit.",
    primaryCtaId: "globalWhatsapp",
    secondaryCta: {
      label: "Lihat Layanan",
      href: "/layanan-listrik/"
    }
  },
  sections: [],
  schema: {
    breadcrumb: true,
    aboutPage: true
  }
} satisfies PageData;
