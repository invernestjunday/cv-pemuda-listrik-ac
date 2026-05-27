import type { PageData } from "../types";
import { site } from "../site";
import { getLocalElectricFaq } from "../faq";

const jakartaFaq = getLocalElectricFaq("Jakarta");
const tangerangSelatanFaq = getLocalElectricFaq("Tangerang Selatan");
const tangerangKotaFaq = getLocalElectricFaq("Tangerang Kota");

export const localElectricPages = [
  {
    areaSlug: "jakarta",
    slug: "/jasa-listrik-jakarta/",
    type: "local-service",
    serviceType: "electric",
    area: "Jakarta",
    areaId: "jakarta",
    seo: {
      title: "Jasa Listrik Jakarta untuk Rumah & Usaha Kecil | CV Pemuda",
      description:
        "CV Pemuda melayani jasa listrik Jakarta untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi instalasi, perbaikan, dan pengecekan via WhatsApp.",
      canonical: `${site.baseUrl}/jasa-listrik-jakarta/`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan Listrik", href: "/layanan-listrik/" },
      { label: "Jasa Listrik Jakarta", href: "/jasa-listrik-jakarta/" }
    ],
    hero: {
      badge: "Area Jakarta",
      h1: "Jasa Listrik Jakarta untuk Rumah, Ruko, Toko, dan Kantor Kecil",
      subheadline:
        "Mulai dari listrik mati sebagian, MCB turun, korsleting, tambah titik lampu/stop kontak, instalasi, panel listrik sederhana, hingga pengecekan jalur listrik di Jakarta, CV Pemuda membantu konsultasi dan pengerjaan sesuai kondisi lapangan.",
      primaryCtaId: "electricJakarta",
      secondaryCta: {
        label: "Lihat Layanan Listrik",
        href: "/layanan-listrik/"
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
    slug: "/jasa-listrik-tangerang-selatan/",
    type: "local-service",
    serviceType: "electric",
    area: "Tangerang Selatan",
    areaId: "tangerang-selatan",
    seo: {
      title: "Jasa Listrik Tangerang Selatan | CV Pemuda",
      description:
        "CV Pemuda melayani jasa listrik Tangerang Selatan untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi kebutuhan listrik via WhatsApp.",
      canonical: `${site.baseUrl}/jasa-listrik-tangerang-selatan/`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan Listrik", href: "/layanan-listrik/" },
      {
        label: "Jasa Listrik Tangerang Selatan",
        href: "/jasa-listrik-tangerang-selatan/"
      }
    ],
    hero: {
      badge: "Area Tangerang Selatan",
      h1: "Jasa Listrik Tangerang Selatan untuk Rumah dan Usaha Kecil",
      subheadline:
        "CV Pemuda melayani konsultasi jasa listrik di Tangerang Selatan, termasuk Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, dan sekitarnya. Konsultasikan kebutuhan instalasi, perbaikan, tambah titik, atau pengecekan listrik melalui WhatsApp.",
      primaryCtaId: "electricTangerangSelatan",
      secondaryCta: {
        label: "Lihat Layanan Listrik",
        href: "/layanan-listrik/"
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
    slug: "/jasa-listrik-tangerang-kota/",
    type: "local-service",
    serviceType: "electric",
    area: "Tangerang Kota",
    areaId: "tangerang-kota",
    seo: {
      title: "Jasa Listrik Tangerang Kota | CV Pemuda",
      description:
        "CV Pemuda melayani jasa listrik Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen. Konsultasi via WhatsApp.",
      canonical: `${site.baseUrl}/jasa-listrik-tangerang-kota/`
    },
    breadcrumb: [
      { label: "Beranda", href: "/" },
      { label: "Layanan Listrik", href: "/layanan-listrik/" },
      { label: "Jasa Listrik Tangerang Kota", href: "/jasa-listrik-tangerang-kota/" }
    ],
    hero: {
      badge: "Area Tangerang Kota",
      h1: "Jasa Listrik Tangerang Kota untuk Hunian dan Usaha Kecil",
      subheadline:
        "CV Pemuda melayani konsultasi jasa listrik di Tangerang Kota untuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, apartemen, dan sekitarnya. Konsultasikan kebutuhan listrik Anda melalui WhatsApp.",
      primaryCtaId: "electricTangerangKota",
      secondaryCta: {
        label: "Lihat Layanan Listrik",
        href: "/layanan-listrik/"
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
