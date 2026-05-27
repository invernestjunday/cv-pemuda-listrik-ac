import type { PageData } from "../types";
import { site } from "../site";
import { getLocalAcFaq } from "../faq";

const jakartaFaq = getLocalAcFaq("Jakarta");
const tangerangSelatanFaq = getLocalAcFaq("Tangerang Selatan");
const tangerangKotaFaq = getLocalAcFaq("Tangerang Kota");

export const localAcPages = [
  {
    areaSlug: "jakarta",
    slug: "/jasa-ac-jakarta/",
    type: "local-service",
    serviceType: "ac",
    area: "Jakarta",
    areaId: "jakarta",
    seo: {
      title: "Jasa AC Jakarta untuk Rumah & Usaha Kecil | CV Pemuda",
      description:
        "CV Pemuda melayani jasa AC Jakarta untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi cuci AC, perbaikan, dan pemasangan via WhatsApp.",
      canonical: `${site.baseUrl}/jasa-ac-jakarta/`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan AC", href: "/layanan-ac/" },
      { label: "Jasa AC Jakarta", href: "/jasa-ac-jakarta/" }
    ],
    hero: {
      badge: "Area Jakarta",
      h1: "Jasa AC Jakarta untuk Rumah, Ruko, Toko, dan Kantor Kecil",
      subheadline:
        "CV Pemuda melayani konsultasi jasa AC di Jakarta, mulai dari cuci AC, AC tidak dingin, AC bocor, freon, instalasi, bongkar pasang, hingga relokasi unit untuk rumah dan usaha kecil.",
      primaryCtaId: "acJakarta",
      secondaryCta: {
        label: "Lihat Layanan AC",
        href: "/layanan-ac/"
      }
    },
    sections: [],
    faq: jakartaFaq,
    schema: {
      service: true,
      faq: true,
      breadcrumb: true
    }
  },
  {
    areaSlug: "tangerang-selatan",
    slug: "/jasa-ac-tangerang-selatan/",
    type: "local-service",
    serviceType: "ac",
    area: "Tangerang Selatan",
    areaId: "tangerang-selatan",
    seo: {
      title: "Jasa AC Tangerang Selatan | CV Pemuda",
      description:
        "CV Pemuda melayani jasa AC Tangerang Selatan untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi kebutuhan AC via WhatsApp.",
      canonical: `${site.baseUrl}/jasa-ac-tangerang-selatan/`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan AC", href: "/layanan-ac/" },
      { label: "Jasa AC Tangerang Selatan", href: "/jasa-ac-tangerang-selatan/" }
    ],
    hero: {
      badge: "Area Tangerang Selatan",
      h1: "Jasa AC Tangerang Selatan untuk Rumah dan Usaha Kecil",
      subheadline:
        "CV Pemuda melayani konsultasi jasa AC di Tangerang Selatan, termasuk Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, dan sekitarnya. Konsultasikan cuci AC, perbaikan, instalasi, atau relokasi unit melalui WhatsApp.",
      primaryCtaId: "acTangerangSelatan",
      secondaryCta: {
        label: "Lihat Layanan AC",
        href: "/layanan-ac/"
      }
    },
    sections: [],
    faq: tangerangSelatanFaq,
    schema: {
      service: true,
      faq: true,
      breadcrumb: true
    }
  },
  {
    areaSlug: "tangerang-kota",
    slug: "/jasa-ac-tangerang-kota/",
    type: "local-service",
    serviceType: "ac",
    area: "Tangerang Kota",
    areaId: "tangerang-kota",
    seo: {
      title: "Jasa AC Tangerang Kota | CV Pemuda",
      description:
        "CV Pemuda melayani jasa AC Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi via WhatsApp.",
      canonical: `${site.baseUrl}/jasa-ac-tangerang-kota/`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan AC", href: "/layanan-ac/" },
      { label: "Jasa AC Tangerang Kota", href: "/jasa-ac-tangerang-kota/" }
    ],
    hero: {
      badge: "Area Tangerang Kota",
      h1: "Jasa AC Tangerang Kota untuk Hunian dan Usaha Kecil",
      subheadline:
        "CV Pemuda melayani konsultasi jasa AC di Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, apartemen, dan sekitarnya. Konsultasikan kebutuhan AC Anda melalui WhatsApp.",
      primaryCtaId: "acTangerangKota",
      secondaryCta: {
        label: "Lihat Layanan AC",
        href: "/layanan-ac/"
      }
    },
    sections: [],
    faq: tangerangKotaFaq,
    schema: {
      service: true,
      faq: true,
      breadcrumb: true
    }
  }
] satisfies Array<PageData & { areaSlug: string }>;
