import type { PageData } from "../types";
import { site } from "../site";
import { electricServiceFaq } from "../faq";
import { electricProblems } from "../problems";
import { electricCategories } from "../services";
import { areas } from "../areas";

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
  sections: [
    {
      type: "problem-grid",
      id: "masalah-listrik",
      title: "Masalah Listrik yang Bisa Dikonsultasikan",
      description:
        "Kendala listrik bisa berasal dari beban, jalur instalasi, perangkat, atau kondisi titik tertentu. Konsultasi awal membantu memahami gejala sebelum pengerjaan dilakukan.",
      items: electricProblems,
      serviceType: "electric"
    },
    {
      type: "category-grid",
      id: "layanan-listrik",
      title: "Instalasi, Perbaikan, dan Pengecekan Listrik",
      description:
        "Ruang lingkup layanan listrik mencakup kebutuhan instalasi, perbaikan, proteksi dasar, pengecekan, dan penambahan titik listrik.",
      items: electricCategories,
      serviceType: "electric"
    },
    {
      type: "location-type-cards",
      id: "jenis-lokasi-listrik",
      title: "Jenis Lokasi yang Dilayani",
      description:
        "Layanan listrik difokuskan untuk hunian dan usaha kecil yang membutuhkan instalasi, perbaikan, atau pengecekan listrik.",
      items: [
        {
          id: "hunian",
          title: "Hunian",
          description:
            "Kebutuhan listrik untuk rumah, kos, kontrakan, dan apartemen.",
          icon: "⌂",
          locations: ["Rumah", "Kos", "Kontrakan", "Apartemen"]
        },
        {
          id: "usaha-kecil",
          title: "Usaha Kecil",
          description:
            "Kebutuhan listrik untuk ruko, toko, dan kantor kecil.",
          icon: "□",
          locations: ["Ruko", "Toko", "Kantor kecil"]
        }
      ]
    },
    {
      type: "education-split",
      id: "kenapa-masalah-listrik-perlu-dicek",
      title: "Kenapa Masalah Listrik Perlu Dicek Terlebih Dahulu?",
      body: [
        "Masalah listrik tidak selalu terlihat dari gejala awal. MCB turun, lampu mati, atau stop kontak tidak berfungsi dapat disebabkan oleh beban berlebih, jalur bermasalah, komponen rusak, atau kondisi instalasi yang perlu dicek.",
        "Pengecekan membantu memahami penyebab masalah agar langkah pengerjaan lebih sesuai dengan kondisi lokasi. Untuk konsultasi awal, pelanggan dapat mengirim lokasi, foto, atau video kendala melalui WhatsApp."
      ],
      highlightTitle: "Informasi Awal yang Membantu",
      highlightDescription:
        "Kirim detail lokasi, jenis kendala, titik yang bermasalah, dan foto atau video jika tersedia.",
      points: [
        "Lokasi dan jenis bangunan",
        "Gejala kendala listrik",
        "Foto panel, MCB, kabel, stop kontak, atau titik lampu"
      ],
      ctaId: "electricGeneral"
    },
    {
      type: "consultation-steps",
      id: "alur-konsultasi-listrik",
      title: "Alur Konsultasi Jasa Listrik via WhatsApp",
      description:
        "Konsultasi awal dibuat sederhana agar kebutuhan listrik dapat dibahas sebelum jadwal atau pengerjaan disesuaikan.",
      steps: [
        {
          number: 1,
          title: "Konsultasi via WhatsApp",
          description:
            "Klik tombol WhatsApp dan sampaikan kebutuhan jasa listrik."
        },
        {
          number: 2,
          title: "Kirim Lokasi dan Kendala",
          description:
            "Sertakan lokasi, jenis bangunan, dan kendala listrik yang dialami."
        },
        {
          number: 3,
          title: "Kirim Foto/Video Jika Ada",
          description:
            "Foto atau video membantu menjelaskan kondisi awal sebelum pengecekan."
        },
        {
          number: 4,
          title: "Pengerjaan Sesuai Kondisi",
          description:
            "Jika diperlukan, pengerjaan dilakukan menyesuaikan hasil pengecekan dan kondisi lokasi."
        }
      ]
    },
    {
      type: "area-cards",
      id: "area-layanan",
      title: "Area Layanan Jasa Listrik",
      description:
        "Pilih halaman area untuk melihat informasi jasa listrik yang lebih sesuai dengan lokasi Anda.",
      areas: [
        {
          id: areas.jakarta.id,
          name: areas.jakarta.name,
          description: areas.jakarta.coverageDescription,
          icon: "⌖",
          links: [{ label: "Jasa Listrik Jakarta", href: areas.jakarta.electricSlug }]
        },
        {
          id: areas["tangerang-selatan"].id,
          name: areas["tangerang-selatan"].name,
          description: areas["tangerang-selatan"].coverageDescription,
          icon: "⌖",
          links: [
            {
              label: "Jasa Listrik Tangerang Selatan",
              href: areas["tangerang-selatan"].electricSlug
            }
          ]
        },
        {
          id: areas["tangerang-kota"].id,
          name: areas["tangerang-kota"].name,
          description: areas["tangerang-kota"].coverageDescription,
          icon: "⌖",
          links: [
            {
              label: "Jasa Listrik Tangerang Kota",
              href: areas["tangerang-kota"].electricSlug
            }
          ]
        }
      ]
    },
    {
      type: "faq",
      id: "faq-layanan-listrik",
      title: "Pertanyaan Umum seputar Layanan Listrik",
      faq: electricServiceFaq
    },
    {
      type: "cta",
      id: "cta-layanan-listrik",
      title: "Butuh Konsultasi Jasa Listrik?",
      description:
        "Kirim lokasi, kendala listrik, dan foto atau video jika ada melalui WhatsApp agar kebutuhan bisa dibahas lebih jelas.",
      primaryCtaId: "electricGeneral",
      secondaryLink: {
        label: "Lihat Konsultasi Biaya",
        href: "/konsultasi-biaya/"
      }
    }
  ],
  faq: electricServiceFaq,
  schema: {
    service: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
