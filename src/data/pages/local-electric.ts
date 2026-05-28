import type { AreaId, AreaName, PageData } from "../types";
import { site } from "../site";
import { areas } from "../areas";
import { electricProblems } from "../problems";
import { electricCategories } from "../services";
import { getLocalElectricFaq } from "../faq";

type LocalElectricConfig = {
  areaSlug: string;
  areaId: AreaId;
  area: AreaName;
  slug: string;
  ctaId: "electricJakarta" | "electricTangerangSelatan" | "electricTangerangKota";
  title: string;
  description: string;
  h1: string;
  subheadline: string;
  problemDescription: string;
  categoryDescription: string;
  areaBody: string[];
  areaHighlight: string;
  relatedElectricLinks: Array<{ label: string; href: string }>;
  relatedAcLink: { label: string; href: string };
};

const localElectricConfigs: LocalElectricConfig[] = [
  {
    areaSlug: "jakarta",
    areaId: "jakarta",
    area: "Jakarta",
    slug: "/jasa-listrik-jakarta/",
    ctaId: "electricJakarta",
    title: "Jasa Listrik Jakarta untuk Rumah & Usaha Kecil | CV Pemuda",
    description:
      "CV Pemuda melayani jasa listrik Jakarta untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi instalasi, perbaikan, dan pengecekan via WhatsApp.",
    h1: "Jasa Listrik Jakarta untuk Rumah, Ruko, Toko, dan Kantor Kecil",
    subheadline:
      "Mulai dari listrik mati sebagian, MCB turun, korsleting, tambah titik lampu/stop kontak, instalasi, panel listrik sederhana, hingga pengecekan jalur listrik di Jakarta, CV Pemuda membantu konsultasi dan pengerjaan sesuai kondisi lapangan.",
    problemDescription:
      "Kendala listrik di Jakarta dapat muncul pada rumah, apartemen, ruko, toko, kantor kecil, kos, atau kontrakan. Konsultasi awal membantu memahami gejala dan kemungkinan kebutuhan pengecekan di lokasi.",
    categoryDescription:
      "CV Pemuda membantu kebutuhan listrik di Jakarta, mulai dari instalasi, perbaikan kendala, pengecekan jalur, proteksi sederhana, sampai penambahan titik listrik.",
    areaBody: [
      "CV Pemuda melayani kebutuhan listrik di area Jakarta untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen.",
      "Sertakan lokasi detail saat konsultasi via WhatsApp agar kebutuhan, akses lokasi, dan jadwal dapat dibahas lebih jelas."
    ],
    areaHighlight:
      "Untuk kebutuhan tertentu, jadwal pengecekan atau pengerjaan menyesuaikan lokasi, jenis pekerjaan, dan kondisi yang dijelaskan pelanggan.",
    relatedElectricLinks: [
      { label: "Jasa Listrik Tangerang Selatan", href: "/jasa-listrik-tangerang-selatan/" },
      { label: "Jasa Listrik Tangerang Kota", href: "/jasa-listrik-tangerang-kota/" }
    ],
    relatedAcLink: { label: "Jasa AC Jakarta", href: "/jasa-ac-jakarta/" }
  },
  {
    areaSlug: "tangerang-selatan",
    areaId: "tangerang-selatan",
    area: "Tangerang Selatan",
    slug: "/jasa-listrik-tangerang-selatan/",
    ctaId: "electricTangerangSelatan",
    title: "Jasa Listrik Tangerang Selatan | CV Pemuda",
    description:
      "CV Pemuda melayani jasa listrik Tangerang Selatan untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi instalasi, perbaikan, dan pengecekan via WhatsApp.",
    h1: "Jasa Listrik Tangerang Selatan untuk Rumah dan Usaha Kecil",
    subheadline:
      "CV Pemuda membantu konsultasi jasa listrik di Tangerang Selatan, termasuk Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, dan sekitarnya. Konsultasikan kebutuhan instalasi, perbaikan, tambah titik, atau pengecekan jalur listrik melalui WhatsApp.",
    problemDescription:
      "Kebutuhan listrik di Tangerang Selatan sering berkaitan dengan hunian, ruko, toko, kantor kecil, kos, kontrakan, atau apartemen. Kondisi seperti MCB turun, stop kontak rusak, atau tambah titik sebaiknya dijelaskan sejak konsultasi awal.",
    categoryDescription:
      "Layanan listrik di Tangerang Selatan mencakup kebutuhan instalasi, perbaikan kendala, pengecekan, proteksi sederhana, dan penambahan titik sesuai kondisi lapangan.",
    areaBody: [
      "CV Pemuda melayani jasa listrik di Tangerang Selatan, termasuk Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, dan sekitarnya.",
      "Kirim lokasi detail dan kondisi kendala melalui WhatsApp agar kebutuhan pekerjaan dapat dibahas dengan lebih jelas sebelum penjadwalan."
    ],
    areaHighlight:
      "Informasi lokasi detail membantu proses penyesuaian jadwal, estimasi kebutuhan, dan arahan awal sebelum pengecekan atau pengerjaan.",
    relatedElectricLinks: [
      { label: "Jasa Listrik Jakarta", href: "/jasa-listrik-jakarta/" },
      { label: "Jasa Listrik Tangerang Kota", href: "/jasa-listrik-tangerang-kota/" }
    ],
    relatedAcLink: { label: "Jasa AC Tangerang Selatan", href: "/jasa-ac-tangerang-selatan/" }
  },
  {
    areaSlug: "tangerang-kota",
    areaId: "tangerang-kota",
    area: "Tangerang Kota",
    slug: "/jasa-listrik-tangerang-kota/",
    ctaId: "electricTangerangKota",
    title: "Jasa Listrik Tangerang Kota | CV Pemuda",
    description:
      "CV Pemuda melayani jasa listrik Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi instalasi, perbaikan, dan pengecekan via WhatsApp.",
    h1: "Jasa Listrik Tangerang Kota untuk Hunian dan Usaha Kecil",
    subheadline:
      "CV Pemuda membantu konsultasi kebutuhan listrik di Tangerang Kota untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, apartemen, dan sekitarnya, mulai dari instalasi, perbaikan, tambah titik, sampai pengecekan jalur listrik.",
    problemDescription:
      "Kendala listrik di Tangerang Kota dapat terjadi pada kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, atau apartemen. Konsultasi awal membantu menjelaskan jenis gangguan dan kebutuhan pengecekan.",
    categoryDescription:
      "CV Pemuda membantu kebutuhan listrik di Tangerang Kota untuk instalasi, perbaikan, pengecekan, proteksi sederhana, dan penambahan titik sesuai kondisi lokasi.",
    areaBody: [
      "CV Pemuda melayani kebutuhan listrik di Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, apartemen, dan sekitarnya.",
      "Sampaikan lokasi detail, jenis bangunan, dan kendala listrik yang dialami agar konsultasi awal lebih jelas."
    ],
    areaHighlight:
      "Kondisi bangunan dan akses lokasi dapat memengaruhi kebutuhan pengecekan, material, dan waktu pengerjaan.",
    relatedElectricLinks: [
      { label: "Jasa Listrik Jakarta", href: "/jasa-listrik-jakarta/" },
      { label: "Jasa Listrik Tangerang Selatan", href: "/jasa-listrik-tangerang-selatan/" }
    ],
    relatedAcLink: { label: "Jasa AC Tangerang Kota", href: "/jasa-ac-tangerang-kota/" }
  }
];

function buildLocationItems(area: AreaName) {
  return [
    {
      id: "hunian",
      title: "Hunian",
      description: `Layanan listrik untuk kebutuhan rumah, kos, kontrakan, dan apartemen di ${area}.`,
      icon: "⌂",
      locations: ["Rumah", "Kos", "Kontrakan", "Apartemen"]
    },
    {
      id: "usaha-kecil",
      title: "Usaha Kecil",
      description: `Layanan listrik untuk ruko, toko, dan kantor kecil di ${area} yang membutuhkan instalasi, pengecekan, atau perbaikan listrik.`,
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
      description: `Klik tombol WhatsApp dan sampaikan kebutuhan jasa listrik di area ${area}.`
    },
    {
      number: 2,
      title: "Kirim Lokasi dan Foto/Video Jika Ada",
      description:
        "Sertakan lokasi detail serta foto atau video masalah listrik jika tersedia."
    },
    {
      number: 3,
      title: "Pengecekan Kebutuhan Listrik",
      description:
        "Kebutuhan dibahas berdasarkan jenis kendala, kondisi instalasi, dan informasi lokasi."
    },
    {
      number: 4,
      title: "Pengerjaan Sesuai Kondisi Lapangan",
      description:
        "Jika diperlukan, pengerjaan dilakukan menyesuaikan hasil pengecekan dan kondisi di lokasi."
    }
  ];
}

export const localElectricPages = localElectricConfigs.map((config): PageData & { areaSlug: string } => {
  const faq = getLocalElectricFaq(config.area);
  const areaConfig = areas[config.areaId];

  return {
    areaSlug: config.areaSlug,
    slug: config.slug,
    type: "local-service",
    serviceType: "electric",
    area: config.area,
    areaId: config.areaId,
    seo: {
      title: config.title,
      description: config.description,
      canonical: `${site.baseUrl}${config.slug}`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan Listrik", href: "/layanan-listrik/" },
      { label: `Jasa Listrik ${config.area}`, href: config.slug }
    ],
    hero: {
      badge: areaConfig.badge,
      h1: config.h1,
      subheadline: config.subheadline,
      primaryCtaId: config.ctaId,
      secondaryCta: {
        label: "Lihat Layanan Listrik",
        href: "/layanan-listrik/"
      }
    },
    sections: [
      {
        type: "problem-grid",
        id: `masalah-listrik-${config.areaSlug}`,
        title: `Masalah Listrik yang Sering Dikonsultasikan di ${config.area}`,
        description: config.problemDescription,
        items: electricProblems,
        serviceType: "electric"
      },
      {
        type: "category-grid",
        id: `layanan-listrik-${config.areaSlug}`,
        title: `Instalasi, Perbaikan, dan Pengecekan Listrik di ${config.area}`,
        description: config.categoryDescription,
        items: electricCategories,
        serviceType: "electric"
      },
      {
        type: "location-type-cards",
        id: `lokasi-listrik-${config.areaSlug}`,
        title: `Jasa Listrik ${config.area} untuk Rumah dan Usaha Kecil`,
        description: areaConfig.shortDescription,
        items: buildLocationItems(config.area)
      },
      {
        type: "education-split",
        id: `area-layanan-listrik-${config.areaSlug}`,
        title: `Area Layanan Jasa Listrik ${config.area}`,
        body: config.areaBody,
        highlightTitle: "Catatan Jadwal dan Pengecekan",
        highlightDescription: config.areaHighlight,
        ctaId: config.ctaId,
        points: areaConfig.coverageItems
      },
      {
        type: "consultation-steps",
        id: `alur-listrik-${config.areaSlug}`,
        title: `Alur Konsultasi Jasa Listrik ${config.area} via WhatsApp`,
        description:
          "Konsultasi awal dilakukan melalui WhatsApp agar kebutuhan, lokasi, dan kondisi masalah listrik bisa dijelaskan terlebih dahulu.",
        steps: buildSteps(config.area)
      },
      {
        type: "cta",
        id: `cta-listrik-${config.areaSlug}`,
        title: `Butuh Jasa Listrik ${config.area}? Konsultasikan via WhatsApp`,
        description:
          `Konsultasikan kebutuhan listrik Anda di area ${config.area} melalui WhatsApp. CV Pemuda membantu pengecekan dan pengerjaan sesuai kondisi lapangan.`,
        primaryCtaId: config.ctaId
      },
      {
        type: "faq",
        id: `faq-listrik-${config.areaSlug}`,
        title: `Pertanyaan Umum seputar Jasa Listrik ${config.area}`,
        faq
      },
      {
        type: "internal-links",
        id: `link-listrik-${config.areaSlug}`,
        title: "Layanan Terkait",
        description:
          "Lihat juga halaman layanan utama dan area terkait agar Anda bisa memilih halaman yang paling sesuai.",
        links: [
          { label: "Lihat Detail Layanan Listrik", href: "/layanan-listrik/" },
          ...config.relatedElectricLinks,
          config.relatedAcLink
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
