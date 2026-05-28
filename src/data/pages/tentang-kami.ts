import type { PageData } from "../types";
import { site } from "../site";
import { trustPoints } from "../trust";
import { areas } from "../areas";

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
  sections: [
    {
      type: "education-split",
      id: "profil-cv-pemuda",
      title: "Profil CV Pemuda Listrik & AC",
      body: [
        "CV Pemuda Listrik & AC membantu kebutuhan listrik dan AC untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen di area Jakarta, Tangerang Selatan, dan Tangerang Kota.",
        "Konsultasi awal dilakukan melalui WhatsApp agar pelanggan dapat menjelaskan lokasi, jenis kebutuhan, dan kondisi kendala terlebih dahulu. Dari informasi tersebut, kebutuhan bisa dibahas dengan lebih jelas sebelum jadwal atau pengerjaan disesuaikan."
      ],
      highlightTitle: "Fokus Layanan",
      highlightDescription:
        "CV Pemuda berfokus pada kebutuhan jasa listrik dan AC untuk hunian dan usaha kecil.",
      points: ["Jasa listrik", "Jasa AC", "Konsultasi awal via WhatsApp"]
    },
    {
      type: "trust-grid",
      id: "prinsip-kerja",
      title: "Aman, Rapi, dan Komunikatif",
      description:
        "Prinsip kerja CV Pemuda diarahkan agar pelanggan mendapatkan komunikasi yang jelas dan pengerjaan yang menyesuaikan kondisi lapangan atau unit.",
      items: trustPoints
    },
    {
      type: "area-cards",
      id: "area-layanan",
      title: "Area Layanan CV Pemuda",
      description:
        "Area layanan utama saat ini meliputi Jakarta, Tangerang Selatan, dan Tangerang Kota.",
      areas: [
        {
          id: areas.jakarta.id,
          name: areas.jakarta.name,
          description: areas.jakarta.shortDescription,
          icon: "⌖",
          links: [
            { label: "Jasa Listrik Jakarta", href: areas.jakarta.electricSlug },
            { label: "Jasa AC Jakarta", href: areas.jakarta.acSlug }
          ]
        },
        {
          id: areas["tangerang-selatan"].id,
          name: areas["tangerang-selatan"].name,
          description: areas["tangerang-selatan"].shortDescription,
          icon: "⌖",
          links: [
            {
              label: "Jasa Listrik Tangerang Selatan",
              href: areas["tangerang-selatan"].electricSlug
            },
            {
              label: "Jasa AC Tangerang Selatan",
              href: areas["tangerang-selatan"].acSlug
            }
          ]
        },
        {
          id: areas["tangerang-kota"].id,
          name: areas["tangerang-kota"].name,
          description: areas["tangerang-kota"].shortDescription,
          icon: "⌖",
          links: [
            {
              label: "Jasa Listrik Tangerang Kota",
              href: areas["tangerang-kota"].electricSlug
            },
            {
              label: "Jasa AC Tangerang Kota",
              href: areas["tangerang-kota"].acSlug
            }
          ]
        }
      ]
    },
    {
      type: "cta",
      id: "cta-tentang-kami",
      title: "Ingin Konsultasi Kebutuhan Listrik atau AC?",
      description:
        "Sampaikan lokasi dan kebutuhan Anda melalui WhatsApp agar dapat dibahas dengan lebih jelas.",
      primaryCtaId: "globalWhatsapp",
      secondaryLink: {
        label: "Lihat Kontak",
        href: "/kontak/"
      }
    }
  ],
  schema: {
    breadcrumb: true,
    aboutPage: true
  }
} satisfies PageData;
