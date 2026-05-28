import type { CardItem, PageData } from "../types";
import { site } from "../site";
import { costFaq } from "../faq";

const costFactors: CardItem[] = [
  {
    id: "jenis-pekerjaan",
    title: "Jenis Pekerjaan",
    description:
      "Instalasi, perbaikan, pengecekan, cuci AC, freon, atau relokasi unit memiliki kebutuhan yang berbeda.",
    icon: "list"
  },
  {
    id: "kondisi-lapangan-unit",
    title: "Kondisi Lapangan atau Unit",
    description:
      "Kondisi instalasi listrik, kondisi unit AC, dan akses area pengerjaan dapat memengaruhi kebutuhan kerja.",
    icon: "search"
  },
  {
    id: "tingkat-kerusakan",
    title: "Tingkat Kendala",
    description:
      "Kendala ringan dan kendala yang membutuhkan pengecekan lebih lanjut tentu perlu dibahas berbeda.",
    icon: "alert"
  },
  {
    id: "kebutuhan-material",
    title: "Kebutuhan Material",
    description:
      "Jika pekerjaan membutuhkan material tambahan, kebutuhan tersebut harus dibahas terlebih dahulu.",
    icon: "box"
  },
  {
    id: "akses-lokasi",
    title: "Akses Lokasi",
    description:
      "Akses ruangan, ketinggian, posisi unit, atau posisi instalasi dapat memengaruhi proses pengerjaan.",
    icon: "map"
  },
  {
    id: "estimasi-waktu",
    title: "Estimasi Waktu Pengerjaan",
    description:
      "Durasi pengerjaan menyesuaikan jenis pekerjaan dan kondisi yang ditemukan di lokasi atau unit.",
    icon: "clock"
  }
];

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
  sections: [
    {
      type: "education-split",
      id: "kenapa-biaya-tidak-tetap",
      title: "Kenapa Biaya Tidak Ditampilkan sebagai Harga Tetap?",
      body: [
        "Pekerjaan listrik dan AC sangat bergantung pada kondisi lapangan atau unit. Dua kendala yang terlihat mirip bisa membutuhkan langkah pengecekan dan kebutuhan material yang berbeda.",
        "Karena itu, biaya lebih aman dibahas setelah pelanggan mengirim lokasi, jenis kebutuhan, foto atau video jika ada, serta informasi kendala yang dialami. Tujuannya agar estimasi tidak menyesatkan."
      ],
      highlightTitle: "Konsultasi Lebih Aman",
      highlightDescription:
        "Kirim detail kebutuhan melalui WhatsApp agar biaya dapat dibahas berdasarkan kondisi yang lebih jelas.",
      points: ["Jenis pekerjaan", "Kondisi lokasi/unit", "Kebutuhan material"],
      ctaId: "costConsultation"
    },
    {
      type: "trust-grid",
      id: "faktor-biaya",
      title: "Faktor yang Memengaruhi Biaya Jasa Listrik dan AC",
      description:
        "Faktor berikut membantu menjelaskan mengapa estimasi biaya perlu dibahas sesuai kondisi kebutuhan.",
      items: costFactors
    },
    {
      type: "consultation-steps",
      id: "alur-konsultasi-biaya",
      title: "Alur Konsultasi Biaya via WhatsApp",
      description:
        "Konsultasi biaya dilakukan bertahap agar informasi awal lebih lengkap sebelum estimasi dibahas.",
      steps: [
        {
          number: 1,
          title: "Kirim Jenis Kebutuhan",
          description:
            "Sampaikan apakah kebutuhan Anda terkait listrik, AC, atau keduanya."
        },
        {
          number: 2,
          title: "Kirim Lokasi dan Kondisi",
          description:
            "Sertakan lokasi, jenis bangunan, dan kondisi kendala yang dialami."
        },
        {
          number: 3,
          title: "Kirim Foto/Video Jika Ada",
          description:
            "Foto atau video membantu menjelaskan kondisi awal secara lebih jelas."
        },
        {
          number: 4,
          title: "Bahas Estimasi dan Jadwal",
          description:
            "Estimasi dan jadwal dibahas berdasarkan informasi yang tersedia."
        }
      ]
    },
    {
      type: "service-summary",
      id: "pilih-konsultasi-biaya",
      title: "Konsultasi Biaya untuk Jasa Listrik dan AC",
      description:
        "Pilih jenis konsultasi yang sesuai agar pesan WhatsApp lebih terarah.",
      services: [
        {
          id: "biaya-listrik",
          title: "Konsultasi Biaya Jasa Listrik",
          description:
            "Bahas estimasi untuk instalasi, perbaikan, pengecekan, atau tambah titik listrik.",
          primaryCtaId: "electricGeneral",
          secondaryLink: {
            label: "Lihat Layanan Listrik",
            href: "/layanan-listrik/"
          },
          icon: "⚡"
        },
        {
          id: "biaya-ac",
          title: "Konsultasi Biaya Jasa AC",
          description:
            "Bahas estimasi untuk cuci AC, perbaikan, freon, pemasangan, atau relokasi unit.",
          primaryCtaId: "acGeneral",
          secondaryLink: {
            label: "Lihat Layanan AC",
            href: "/layanan-ac/"
          },
          icon: "AC"
        }
      ]
    },
    {
      type: "faq",
      id: "faq-konsultasi-biaya",
      title: "Pertanyaan Umum seputar Konsultasi Biaya",
      faq: costFaq
    },
    {
      type: "cta",
      id: "cta-konsultasi-biaya",
      title: "Ingin Membahas Estimasi Biaya?",
      description:
        "Kirim kebutuhan, lokasi, dan kondisi awal melalui WhatsApp agar biaya dapat dibahas dengan lebih jelas.",
      primaryCtaId: "costConsultation",
      secondaryLink: {
        label: "Hubungi CV Pemuda",
        href: "/kontak/"
      }
    }
  ],
  faq: costFaq,
  schema: {
    service: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
