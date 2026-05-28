import type { AreaId, AreaName, PageData } from "../types";
import { site } from "../site";
import { areas } from "../areas";
import { acProblems } from "../problems";
import { acCategories } from "../services";
import { getLocalAcFaq } from "../faq";

type LocalAcConfig = {
  areaSlug: string;
  areaId: AreaId;
  area: AreaName;
  slug: string;
  ctaId: "acJakarta" | "acTangerangSelatan" | "acTangerangKota";
  title: string;
  description: string;
  h1: string;
  subheadline: string;
  problemDescription: string;
  categoryDescription: string;
  areaBody: string[];
  areaHighlight: string;
  relatedAcLinks: Array<{ label: string; href: string }>;
  relatedElectricLink: { label: string; href: string };
};

const localAcConfigs: LocalAcConfig[] = [
  {
    areaSlug: "jakarta",
    areaId: "jakarta",
    area: "Jakarta",
    slug: "/jasa-ac-jakarta/",
    ctaId: "acJakarta",
    title: "Jasa AC Jakarta untuk Rumah & Usaha Kecil | CV Pemuda",
    description:
      "CV Pemuda melayani jasa AC Jakarta untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi cuci AC, AC tidak dingin, bocor, instalasi, dan relokasi via WhatsApp.",
    h1: "Jasa AC Jakarta untuk Rumah, Ruko, Toko, dan Kantor Kecil",
    subheadline:
      "CV Pemuda membantu konsultasi jasa AC di Jakarta, mulai dari cuci AC, AC tidak dingin, AC bocor, AC berisik, isi atau tambah freon, instalasi, bongkar pasang, sampai relokasi AC sesuai kondisi unit dan lokasi.",
    problemDescription:
      "Kendala AC di Jakarta dapat muncul pada rumah, apartemen, ruko, toko, kantor kecil, kos, atau kontrakan. Konsultasi awal membantu memahami gejala AC dan kebutuhan pengecekan unit.",
    categoryDescription:
      "CV Pemuda membantu kebutuhan AC di Jakarta, mulai dari perawatan, perbaikan, pengecekan pendinginan, instalasi, sampai bongkar pasang atau relokasi unit.",
    areaBody: [
      "CV Pemuda melayani kebutuhan AC di area Jakarta untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen.",
      "Sertakan lokasi detail, jenis unit, dan kendala AC saat konsultasi via WhatsApp agar kebutuhan dapat dibahas lebih jelas."
    ],
    areaHighlight:
      "Kondisi unit, akses indoor/outdoor, dan posisi pemasangan dapat memengaruhi kebutuhan pengecekan serta pengerjaan AC.",
    relatedAcLinks: [
      { label: "Jasa AC Tangerang Selatan", href: "/jasa-ac-tangerang-selatan/" },
      { label: "Jasa AC Tangerang Kota", href: "/jasa-ac-tangerang-kota/" }
    ],
    relatedElectricLink: { label: "Jasa Listrik Jakarta", href: "/jasa-listrik-jakarta/" }
  },
  {
    areaSlug: "tangerang-selatan",
    areaId: "tangerang-selatan",
    area: "Tangerang Selatan",
    slug: "/jasa-ac-tangerang-selatan/",
    ctaId: "acTangerangSelatan",
    title: "Jasa AC Tangerang Selatan | CV Pemuda",
    description:
      "CV Pemuda melayani jasa AC Tangerang Selatan untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi cuci AC, perbaikan, freon, instalasi, dan relokasi via WhatsApp.",
    h1: "Jasa AC Tangerang Selatan untuk Hunian dan Usaha Kecil",
    subheadline:
      "CV Pemuda membantu konsultasi jasa AC di Tangerang Selatan, termasuk Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, dan sekitarnya. Konsultasikan AC tidak dingin, bocor, cuci AC, freon, instalasi, atau relokasi melalui WhatsApp.",
    problemDescription:
      "Kendala AC di Tangerang Selatan dapat berkaitan dengan kebersihan unit, pendinginan, kebocoran, suara tidak normal, atau posisi pemasangan. Informasi awal melalui WhatsApp membantu proses konsultasi lebih jelas.",
    categoryDescription:
      "Layanan AC di Tangerang Selatan mencakup perawatan, perbaikan, pengecekan pendinginan, instalasi, dan bongkar pasang sesuai kondisi unit serta lokasi.",
    areaBody: [
      "CV Pemuda melayani jasa AC di Tangerang Selatan, termasuk Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, dan sekitarnya.",
      "Kirim lokasi detail, jenis AC, dan kondisi kendala agar kebutuhan service, perbaikan, atau pemasangan dapat dibahas sebelum penjadwalan."
    ],
    areaHighlight:
      "Foto atau video unit AC dapat membantu menjelaskan kondisi awal, terutama untuk kendala AC bocor, tidak dingin, atau berisik.",
    relatedAcLinks: [
      { label: "Jasa AC Jakarta", href: "/jasa-ac-jakarta/" },
      { label: "Jasa AC Tangerang Kota", href: "/jasa-ac-tangerang-kota/" }
    ],
    relatedElectricLink: { label: "Jasa Listrik Tangerang Selatan", href: "/jasa-listrik-tangerang-selatan/" }
  },
  {
    areaSlug: "tangerang-kota",
    areaId: "tangerang-kota",
    area: "Tangerang Kota",
    slug: "/jasa-ac-tangerang-kota/",
    ctaId: "acTangerangKota",
    title: "Jasa AC Tangerang Kota | CV Pemuda",
    description:
      "CV Pemuda melayani jasa AC Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi cuci AC, perbaikan, freon, instalasi, dan relokasi via WhatsApp.",
    h1: "Jasa AC Tangerang Kota untuk Rumah, Ruko, Toko, dan Apartemen",
    subheadline:
      "CV Pemuda membantu konsultasi kebutuhan AC di Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, apartemen, dan sekitarnya, mulai dari cuci AC, AC tidak dingin, bocor, freon, instalasi, sampai relokasi AC.",
    problemDescription:
      "Kendala AC di Tangerang Kota dapat terjadi pada hunian, ruko, toko, kantor kecil, kos, kontrakan, atau apartemen. Konsultasi awal membantu memahami gejala, lokasi unit, dan kebutuhan pengecekan.",
    categoryDescription:
      "CV Pemuda membantu kebutuhan AC di Tangerang Kota, mulai dari perawatan, perbaikan, pengecekan freon dan pendinginan, instalasi, sampai bongkar pasang atau relokasi.",
    areaBody: [
      "CV Pemuda melayani kebutuhan AC di Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, apartemen, dan sekitarnya.",
      "Sampaikan lokasi detail, jenis bangunan, dan kendala unit AC agar konsultasi awal lebih jelas."
    ],
    areaHighlight:
      "Akses unit indoor/outdoor, posisi pemasangan, dan kondisi unit dapat memengaruhi kebutuhan pengerjaan AC.",
    relatedAcLinks: [
      { label: "Jasa AC Jakarta", href: "/jasa-ac-jakarta/" },
      { label: "Jasa AC Tangerang Selatan", href: "/jasa-ac-tangerang-selatan/" }
    ],
    relatedElectricLink: { label: "Jasa Listrik Tangerang Kota", href: "/jasa-listrik-tangerang-kota/" }
  }
];

function buildLocationItems(area: AreaName) {
  return [
    {
      id: "hunian",
      title: "Hunian",
      description: `Layanan AC untuk kebutuhan rumah, kos, kontrakan, dan apartemen di ${area}.`,
      icon: "⌂",
      locations: ["Rumah", "Kos", "Kontrakan", "Apartemen"]
    },
    {
      id: "usaha-kecil",
      title: "Usaha Kecil",
      description: `Layanan AC untuk ruko, toko, dan kantor kecil di ${area} yang membutuhkan perawatan, perbaikan, pemasangan, atau relokasi unit.`,
      icon: "□",
      locations: ["Ruko", "Toko", "Kantor kecil"]
    }
  ];
}

function buildSteps(area: AreaName) {
  return [
    {
      number: 1,
      title: "Konsultasi via WhatsApp",
      description: `Klik tombol WhatsApp dan sampaikan kebutuhan jasa AC di area ${area}.`
    },
    {
      number: 2,
      title: "Kirim Lokasi dan Foto/Video Unit",
      description:
        "Sertakan lokasi detail, foto unit indoor/outdoor, atau video kendala jika tersedia."
    },
    {
      number: 3,
      title: "Pengecekan Kebutuhan AC",
      description:
        "Kebutuhan dibahas berdasarkan gejala AC, kondisi unit, akses lokasi, dan jenis pekerjaan."
    },
    {
      number: 4,
      title: "Pengerjaan Sesuai Kondisi Unit",
      description:
        "Jika diperlukan, pengerjaan dilakukan menyesuaikan hasil pengecekan dan kondisi unit AC."
    }
  ];
}

export const localAcPages = localAcConfigs.map((config): PageData & { areaSlug: string } => {
  const faq = getLocalAcFaq(config.area);
  const areaConfig = areas[config.areaId];

  return {
    areaSlug: config.areaSlug,
    slug: config.slug,
    type: "local-service",
    serviceType: "ac",
    area: config.area,
    areaId: config.areaId,
    seo: {
      title: config.title,
      description: config.description,
      canonical: `${site.baseUrl}${config.slug}`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan AC", href: "/layanan-ac/" },
      { label: `Jasa AC ${config.area}`, href: config.slug }
    ],
    hero: {
      badge: areaConfig.badge,
      h1: config.h1,
      subheadline: config.subheadline,
      primaryCtaId: config.ctaId,
      secondaryCta: {
        label: "Lihat Layanan AC",
        href: "/layanan-ac/"
      }
    },
    sections: [
      {
        type: "problem-grid",
        id: `masalah-ac-${config.areaSlug}`,
        title: `Masalah AC yang Sering Dikonsultasikan di ${config.area}`,
        description: config.problemDescription,
        items: acProblems,
        serviceType: "ac"
      },
      {
        type: "category-grid",
        id: `layanan-ac-${config.areaSlug}`,
        title: `Service, Perawatan, dan Pemasangan AC di ${config.area}`,
        description: config.categoryDescription,
        items: acCategories,
        serviceType: "ac"
      },
      {
        type: "location-type-cards",
        id: `lokasi-ac-${config.areaSlug}`,
        title: `Jasa AC ${config.area} untuk Rumah dan Usaha Kecil`,
        description: areaConfig.shortDescription,
        items: buildLocationItems(config.area)
      },
      {
        type: "education-split",
        id: `area-layanan-ac-${config.areaSlug}`,
        title: `Area Layanan Jasa AC ${config.area}`,
        body: config.areaBody,
        highlightTitle: "Catatan Kondisi Unit",
        highlightDescription: config.areaHighlight,
        ctaId: config.ctaId,
        points: areaConfig.coverageItems
      },
      {
        type: "consultation-steps",
        id: `alur-ac-${config.areaSlug}`,
        title: `Alur Konsultasi Jasa AC ${config.area} via WhatsApp`,
        description:
          "Konsultasi awal dilakukan melalui WhatsApp agar kebutuhan, lokasi, dan kondisi unit AC bisa dijelaskan terlebih dahulu.",
        steps: buildSteps(config.area)
      },
      {
        type: "cta",
        id: `cta-ac-${config.areaSlug}`,
        title: `Butuh Jasa AC ${config.area}? Konsultasikan via WhatsApp`,
        description:
          `Konsultasikan kebutuhan AC Anda di area ${config.area} melalui WhatsApp. CV Pemuda membantu pengecekan dan pengerjaan sesuai kondisi unit serta lokasi.`,
        primaryCtaId: config.ctaId
      },
      {
        type: "faq",
        id: `faq-ac-${config.areaSlug}`,
        title: `Pertanyaan Umum seputar Jasa AC ${config.area}`,
        faq
      },
      {
        type: "internal-links",
        id: `link-ac-${config.areaSlug}`,
        title: "Layanan Terkait",
        description:
          "Lihat juga halaman layanan utama dan area terkait agar Anda bisa memilih halaman yang paling sesuai.",
        links: [
          { label: "Lihat Detail Layanan AC", href: "/layanan-ac/" },
          ...config.relatedAcLinks,
          config.relatedElectricLink
        ]
      }
    ],
    faq,
    schema: {
      service: true,
      faq: true,
      breadcrumb: true
    }
  };
});
