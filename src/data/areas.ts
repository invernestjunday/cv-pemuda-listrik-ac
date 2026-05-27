import type { AreaId, AreaName } from "./types";

export type AreaConfig = {
  id: AreaId;
  name: AreaName;
  badge: string;
  electricSlug: string;
  acSlug: string;
  shortDescription: string;
  coverageDescription: string;
  coverageItems: string[];
};

export const areas: Record<AreaId, AreaConfig> = {
  jakarta: {
    id: "jakarta",
    name: "Jakarta",
    badge: "Area Jakarta",
    electricSlug: "/jasa-listrik-jakarta/",
    acSlug: "/jasa-ac-jakarta/",
    shortDescription:
      "Layanan listrik dan AC untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen di area Jakarta.",
    coverageDescription:
      "CV Pemuda melayani kebutuhan listrik dan AC di area Jakarta.",
    coverageItems: ["Jakarta"]
  },

  "tangerang-selatan": {
    id: "tangerang-selatan",
    name: "Tangerang Selatan",
    badge: "Area Tangerang Selatan",
    electricSlug: "/jasa-listrik-tangerang-selatan/",
    acSlug: "/jasa-ac-tangerang-selatan/",
    shortDescription:
      "Melayani kebutuhan listrik dan AC di Tangerang Selatan, termasuk Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, dan sekitarnya.",
    coverageDescription:
      "CV Pemuda melayani jasa listrik dan AC untuk area Tangerang Selatan.",
    coverageItems: [
      "Ciputat",
      "Pamulang",
      "Pondok Aren",
      "Serpong",
      "Serpong Utara",
      "Setu",
      "dan sekitarnya"
    ]
  },

  "tangerang-kota": {
    id: "tangerang-kota",
    name: "Tangerang Kota",
    badge: "Area Tangerang Kota",
    electricSlug: "/jasa-listrik-tangerang-kota/",
    acSlug: "/jasa-ac-tangerang-kota/",
    shortDescription:
      "Melayani kebutuhan listrik dan AC di area Tangerang Kota, termasuk kawasan hunian, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen.",
    coverageDescription:
      "CV Pemuda melayani kebutuhan listrik dan AC di area Tangerang Kota dan sekitarnya.",
    coverageItems: [
      "kawasan hunian",
      "ruko",
      "toko",
      "kantor kecil",
      "kos",
      "kontrakan",
      "apartemen",
      "dan sekitarnya"
    ]
  }
};
