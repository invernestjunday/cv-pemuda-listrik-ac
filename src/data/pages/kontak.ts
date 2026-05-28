import type { CardItem, PageData } from "../types";
import { site } from "../site";
import { contactFaq } from "../faq";

const contactInfo: CardItem[] = [
  {
    id: "area-layanan",
    title: "Area Layanan",
    description:
      "CV Pemuda melayani area Jakarta, Tangerang Selatan, dan Tangerang Kota.",
    icon: "map-pin"
  },
  {
    id: "jam-layanan",
    title: "Jam Layanan",
    description: site.openingHoursLabel,
    icon: "clock"
  },
  {
    id: "konsultasi-whatsapp",
    title: "Konsultasi via WhatsApp",
    description:
      "Kirim lokasi, jenis kebutuhan, kendala, serta foto atau video jika tersedia.",
    icon: "phone"
  }
];

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
    primaryCtaId: "globalWhatsapp",
    secondaryCta: {
      label: "Pilih Jenis Konsultasi",
      href: "#pilih-konsultasi"
    }
  },
  sections: [
    {
      type: "service-summary",
      id: "pilih-konsultasi",
      title: "Pilih Jenis Konsultasi",
      description:
        "Pilih tombol sesuai kebutuhan agar pesan WhatsApp lebih terarah sejak awal.",
      services: [
        {
          id: "kontak-listrik",
          title: "Konsultasi Jasa Listrik",
          description:
            "Untuk kebutuhan instalasi, perbaikan, tambah titik, atau pengecekan listrik.",
          primaryCtaId: "electricGeneral",
          secondaryLink: {
            label: "Lihat Layanan Listrik",
            href: "/layanan-listrik/"
          },
          icon: "⚡"
        },
        {
          id: "kontak-ac",
          title: "Konsultasi Jasa AC",
          description:
            "Untuk kebutuhan cuci AC, AC tidak dingin, bocor, freon, pemasangan, atau relokasi.",
          primaryCtaId: "acGeneral",
          secondaryLink: {
            label: "Lihat Layanan AC",
            href: "/layanan-ac/"
          },
          icon: "AC"
        },
        {
          id: "kontak-umum",
          title: "Konsultasi Umum",
          description:
            "Untuk kebutuhan yang belum pasti, misalnya ingin bertanya dulu apakah kendala termasuk listrik atau AC.",
          primaryCtaId: "globalWhatsapp",
          secondaryLink: {
            label: "Lihat Konsultasi Biaya",
            href: "/konsultasi-biaya/"
          },
          icon: "WA"
        }
      ]
    },
    {
      type: "trust-grid",
      id: "area-dan-jam-layanan",
      title: "Area dan Jam Layanan",
      description:
        "Informasi dasar sebelum menghubungi CV Pemuda melalui WhatsApp.",
      items: contactInfo
    },
    {
      type: "consultation-steps",
      id: "alur-kontak",
      title: "Alur Konsultasi via WhatsApp",
      description:
        "Agar konsultasi lebih jelas, siapkan informasi dasar sebelum mengirim pesan.",
      steps: [
        {
          number: 1,
          title: "Klik Tombol WhatsApp",
          description:
            "Pilih tombol sesuai kebutuhan listrik, AC, atau konsultasi umum."
        },
        {
          number: 2,
          title: "Sampaikan Lokasi",
          description:
            "Kirim area dan lokasi detail agar jadwal dapat dibahas lebih jelas."
        },
        {
          number: 3,
          title: "Jelaskan Kendala",
          description:
            "Sampaikan kondisi listrik atau AC yang ingin dikonsultasikan."
        },
        {
          number: 4,
          title: "Kirim Foto/Video Jika Ada",
          description:
            "Foto atau video dapat membantu memperjelas kondisi awal."
        }
      ]
    },
    {
      type: "faq",
      id: "faq-kontak",
      title: "Pertanyaan Umum seputar Kontak",
      faq: contactFaq
    },
    {
      type: "cta",
      id: "cta-kontak",
      title: "Siap Menghubungi CV Pemuda?",
      description:
        "Klik WhatsApp dan kirim lokasi serta kebutuhan Anda agar konsultasi awal bisa segera dibahas.",
      primaryCtaId: "globalWhatsapp",
      secondaryLink: {
        label: "Lihat Konsultasi Biaya",
        href: "/konsultasi-biaya/"
      }
    }
  ],
  faq: contactFaq,
  schema: {
    contactPage: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
