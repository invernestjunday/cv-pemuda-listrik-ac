import type { PageData } from "../types";
import { site } from "../site";
import { acServiceFaq } from "../faq";
import { acProblems } from "../problems";
import { acCategories } from "../services";
import { areas } from "../areas";

export const layananAcPage = {
  slug: "/layanan-ac/",
  type: "service",
  serviceType: "ac",
  seo: {
    title: "Layanan AC untuk Rumah & Usaha Kecil | CV Pemuda",
    description:
      "CV Pemuda melayani konsultasi jasa AC untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen di Jakarta, Tangerang Selatan, dan Tangerang Kota.",
    canonical: `${site.baseUrl}/layanan-ac/`
  },
  breadcrumb: [
    { label: "Beranda", href: "/" },
    { label: "Layanan AC", href: "/layanan-ac/" }
  ],
  hero: {
    h1: "Layanan AC untuk Rumah, Ruko, Toko, dan Kantor Kecil",
    subheadline:
      "CV Pemuda melayani konsultasi jasa AC untuk kebutuhan rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen, mulai dari cuci AC, AC tidak dingin, AC bocor, isi atau tambah freon, bongkar pasang, instalasi, hingga relokasi AC.",
    primaryCtaId: "acGeneral",
    secondaryCta: {
      label: "Lihat Area Layanan",
      href: "#area-layanan"
    }
  },
  sections: [
    {
      type: "problem-grid",
      id: "masalah-ac",
      title: "Masalah AC yang Bisa Dikonsultasikan",
      description:
        "Kondisi AC perlu dilihat dari gejala, kebersihan unit, instalasi, aliran udara, dan komponen terkait. Konsultasi awal membantu menentukan kebutuhan yang lebih sesuai.",
      items: acProblems,
      serviceType: "ac"
    },
    {
      type: "category-grid",
      id: "layanan-ac",
      title: "Service, Perawatan, dan Pemasangan AC",
      description:
        "Ruang lingkup layanan AC mencakup perawatan, perbaikan, masalah pendinginan, instalasi, serta bongkar pasang atau relokasi unit.",
      items: acCategories,
      serviceType: "ac"
    },
    {
      type: "location-type-cards",
      id: "jenis-lokasi-ac",
      title: "Jenis Lokasi yang Dilayani",
      description:
        "Layanan AC difokuskan untuk kebutuhan hunian dan usaha kecil yang membutuhkan perawatan, pengecekan, atau pemasangan unit.",
      items: [
        {
          id: "hunian",
          title: "Hunian",
          description:
            "Kebutuhan AC untuk rumah, kos, kontrakan, dan apartemen.",
          icon: "⌂",
          locations: ["Rumah", "Kos", "Kontrakan", "Apartemen"]
        },
        {
          id: "usaha-kecil",
          title: "Usaha Kecil",
          description:
            "Kebutuhan AC untuk ruko, toko, dan kantor kecil.",
          icon: "□",
          locations: ["Ruko", "Toko", "Kantor kecil"]
        }
      ]
    },
    {
      type: "education-split",
      id: "kenapa-masalah-ac-perlu-dicek",
      title: "Kenapa Masalah AC Perlu Dicek Terlebih Dahulu?",
      body: [
        "AC tidak dingin, bocor, berisik, atau bau tidak selalu disebabkan oleh satu hal yang sama. Penyebabnya bisa berkaitan dengan kebersihan unit, aliran udara, freon, saluran pembuangan, pemasangan, atau komponen tertentu.",
        "Konsultasi awal membantu memahami gejala dan kondisi unit sebelum jadwal pengecekan atau pengerjaan dibahas lebih lanjut. Foto atau video kondisi AC dapat membantu memperjelas kondisi awal."
      ],
      highlightTitle: "Informasi Awal yang Membantu",
      highlightDescription:
        "Kirim lokasi, jenis kendala AC, tipe ruangan, dan foto atau video unit jika tersedia.",
      points: [
        "Lokasi dan jenis bangunan",
        "Gejala kendala AC",
        "Foto unit indoor/outdoor jika ada"
      ],
      ctaId: "acGeneral"
    },
    {
      type: "consultation-steps",
      id: "alur-konsultasi-ac",
      title: "Alur Konsultasi Jasa AC via WhatsApp",
      description:
        "Konsultasi awal dilakukan melalui WhatsApp agar kebutuhan AC, kondisi unit, dan lokasi bisa dibahas terlebih dahulu.",
      steps: [
        {
          number: 1,
          title: "Konsultasi via WhatsApp",
          description:
            "Klik tombol WhatsApp dan sampaikan kebutuhan jasa AC."
        },
        {
          number: 2,
          title: "Kirim Lokasi dan Kendala",
          description:
            "Sampaikan lokasi, jenis ruangan, dan kendala AC yang dialami."
        },
        {
          number: 3,
          title: "Kirim Foto/Video Jika Ada",
          description:
            "Foto unit atau video gejala dapat membantu konsultasi awal menjadi lebih jelas."
        },
        {
          number: 4,
          title: "Pengerjaan Sesuai Kondisi Unit",
          description:
            "Jika diperlukan, pengerjaan dilakukan menyesuaikan hasil pengecekan dan kondisi unit."
        }
      ]
    },
    {
      type: "area-cards",
      id: "area-layanan",
      title: "Area Layanan Jasa AC",
      description:
        "Pilih halaman area untuk melihat informasi jasa AC yang lebih sesuai dengan lokasi Anda.",
      areas: [
        {
          id: areas.jakarta.id,
          name: areas.jakarta.name,
          description: areas.jakarta.coverageDescription,
          icon: "⌖",
          links: [{ label: "Jasa AC Jakarta", href: areas.jakarta.acSlug }]
        },
        {
          id: areas["tangerang-selatan"].id,
          name: areas["tangerang-selatan"].name,
          description: areas["tangerang-selatan"].coverageDescription,
          icon: "⌖",
          links: [
            {
              label: "Jasa AC Tangerang Selatan",
              href: areas["tangerang-selatan"].acSlug
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
              label: "Jasa AC Tangerang Kota",
              href: areas["tangerang-kota"].acSlug
            }
          ]
        }
      ]
    },
    {
      type: "faq",
      id: "faq-layanan-ac",
      title: "Pertanyaan Umum seputar Layanan AC",
      faq: acServiceFaq
    },
    {
      type: "cta",
      id: "cta-layanan-ac",
      title: "Butuh Konsultasi Jasa AC?",
      description:
        "Kirim lokasi, kondisi unit AC, dan foto atau video jika ada melalui WhatsApp agar kebutuhan bisa dibahas lebih jelas.",
      primaryCtaId: "acGeneral",
      secondaryLink: {
        label: "Lihat Konsultasi Biaya",
        href: "/konsultasi-biaya/"
      }
    }
  ],
  faq: acServiceFaq,
  schema: {
    service: true,
    faq: true,
    breadcrumb: true
  }
} satisfies PageData;
