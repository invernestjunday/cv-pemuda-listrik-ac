import type { PageData } from "../types";
import { site } from "../site";
import { homeFaq } from "../faq";
import { electricProblems, acProblems } from "../problems";
import { electricCategories, acCategories } from "../services";
import { trustPoints } from "../trust";
import { areas } from "../areas";

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
  sections: [
    {
      type: "service-summary",
      id: "layanan",
      title: "Layanan Listrik dan AC",
      description:
        "Pilih layanan yang sesuai dengan kebutuhan Anda. Konsultasi awal dilakukan melalui WhatsApp agar lokasi, kendala, dan kebutuhan bisa dibahas lebih jelas.",
      services: [
        {
          id: "jasa-listrik",
          title: "Jasa Listrik",
          description:
            "Konsultasi instalasi, perbaikan, tambah titik listrik, MCB turun, stop kontak rusak, dan pengecekan jalur listrik.",
          primaryCtaId: "electricGeneral",
          secondaryLink: {
            label: "Lihat Detail Layanan Listrik",
            href: "/layanan-listrik/"
          },
          icon: "⚡"
        },
        {
          id: "jasa-ac",
          title: "Jasa AC",
          description:
            "Konsultasi cuci AC, AC tidak dingin, AC bocor, freon, instalasi, bongkar pasang, dan relokasi AC.",
          primaryCtaId: "acGeneral",
          secondaryLink: {
            label: "Lihat Detail Layanan AC",
            href: "/layanan-ac/"
          },
          icon: "AC"
        }
      ]
    },
    {
      type: "problem-grid",
      id: "fokus-listrik",
      title: "Kebutuhan Listrik yang Sering Dikonsultasikan",
      description:
        "Kendala listrik perlu dipahami dari kondisi instalasi, beban, titik gangguan, dan kebutuhan lokasi. Konsultasi awal membantu menentukan langkah yang lebih tepat.",
      items: electricProblems.slice(0, 6),
      serviceType: "electric"
    },
    {
      type: "category-grid",
      id: "ringkasan-layanan-ac",
      title: "Layanan AC untuk Kenyamanan Ruangan",
      description:
        "Layanan AC dapat dikonsultasikan untuk kebutuhan perawatan, perbaikan, pendinginan, pemasangan, dan relokasi unit.",
      items: acCategories.slice(0, 3),
      serviceType: "ac"
    },
    {
      type: "location-type-cards",
      id: "jenis-lokasi",
      title: "Jenis Lokasi yang Dilayani",
      description:
        "CV Pemuda melayani kebutuhan listrik dan AC untuk hunian dan usaha kecil di area layanan utama.",
      items: [
        {
          id: "hunian",
          title: "Hunian",
          description:
            "Kebutuhan listrik dan AC untuk rumah, kos, kontrakan, dan apartemen.",
          icon: "⌂",
          locations: ["Rumah", "Kos", "Kontrakan", "Apartemen"]
        },
        {
          id: "usaha-kecil",
          title: "Usaha Kecil",
          description:
            "Kebutuhan listrik dan AC untuk ruko, toko, dan kantor kecil.",
          icon: "□",
          locations: ["Ruko", "Toko", "Kantor kecil"]
        }
      ]
    },
    {
      type: "trust-grid",
      id: "kenapa-pilih-cv-pemuda",
      title: "Kenapa Pilih CV Pemuda?",
      description:
        "CV Pemuda mengutamakan komunikasi yang jelas, konsultasi yang mudah dimulai, dan pengerjaan yang menyesuaikan kondisi lapangan atau unit.",
      items: trustPoints
    },
    {
      type: "consultation-steps",
      id: "alur-konsultasi",
      title: "Alur Konsultasi via WhatsApp",
      description:
        "Alur dibuat sederhana agar pelanggan awam tetap mudah memulai konsultasi.",
      steps: [
        {
          number: 1,
          title: "Klik WhatsApp",
          description:
            "Gunakan tombol WhatsApp yang tersedia di website."
        },
        {
          number: 2,
          title: "Kirim Lokasi dan Kendala",
          description:
            "Sampaikan lokasi, jenis kebutuhan, dan kendala yang dialami."
        },
        {
          number: 3,
          title: "Kirim Foto atau Video Jika Ada",
          description:
            "Foto atau video membantu menjelaskan kondisi awal sebelum jadwal dibahas."
        },
        {
          number: 4,
          title: "Diskusi Kebutuhan",
          description:
            "Kebutuhan akan dibahas berdasarkan informasi awal yang dikirim."
        }
      ]
    },
    {
      type: "area-cards",
      id: "area-layanan",
      title: "Area Layanan",
      description:
        "Area layanan utama CV Pemuda saat ini meliputi Jakarta, Tangerang Selatan, dan Tangerang Kota.",
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
      type: "internal-links",
      id: "halaman-seo-lokal",
      title: "Lihat Layanan Berdasarkan Area",
      description:
        "Pilih halaman area untuk melihat informasi layanan listrik dan AC yang lebih sesuai dengan lokasi Anda.",
      links: [
        { label: "Jasa Listrik Jakarta", href: "/jasa-listrik-jakarta/" },
        {
          label: "Jasa Listrik Tangerang Selatan",
          href: "/jasa-listrik-tangerang-selatan/"
        },
        {
          label: "Jasa Listrik Tangerang Kota",
          href: "/jasa-listrik-tangerang-kota/"
        },
        { label: "Jasa AC Jakarta", href: "/jasa-ac-jakarta/" },
        {
          label: "Jasa AC Tangerang Selatan",
          href: "/jasa-ac-tangerang-selatan/"
        },
        { label: "Jasa AC Tangerang Kota", href: "/jasa-ac-tangerang-kota/" }
      ]
    },
    {
      type: "faq",
      id: "faq-beranda",
      title: "Pertanyaan Umum",
      faq: homeFaq
    },
    {
      type: "cta",
      id: "cta-beranda",
      title: "Butuh Jasa Listrik atau AC? Konsultasikan via WhatsApp",
      description:
        "Kirim lokasi dan kebutuhan Anda melalui WhatsApp agar konsultasi awal bisa dibahas lebih jelas.",
      primaryCtaId: "globalWhatsapp",
      secondaryLink: {
        label: "Hubungi CV Pemuda",
        href: "/kontak/"
      }
    }
  ],
  faq: homeFaq,
  schema: {
    localBusiness: true,
    website: true,
    faq: true
  }
} satisfies PageData;
