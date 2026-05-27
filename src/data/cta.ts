import type { CtaConfig } from "./types";

export const ctas = {
  globalWhatsapp: {
    id: "globalWhatsapp",
    label: "Konsultasi via WhatsApp",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa listrik/AC. Lokasi saya di ...",
    serviceType: "mixed",
    area: null,
    channel: "whatsapp",
    trackingName: "wa_click_global"
  },

  electricGeneral: {
    id: "electricGeneral",
    label: "Konsultasi Jasa Listrik",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa listrik. Lokasi saya di ...",
    serviceType: "electric",
    area: null,
    channel: "whatsapp",
    trackingName: "wa_click_electric_general"
  },

  acGeneral: {
    id: "acGeneral",
    label: "Konsultasi Jasa AC",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa AC. Lokasi saya di ...",
    serviceType: "ac",
    area: null,
    channel: "whatsapp",
    trackingName: "wa_click_ac_general"
  },

  costConsultation: {
    id: "costConsultation",
    label: "Konsultasi Biaya via WhatsApp",
    message:
      "Halo CV Pemuda, saya ingin konsultasi biaya jasa listrik/AC. Lokasi saya di ...",
    serviceType: "cost",
    area: null,
    channel: "whatsapp",
    trackingName: "wa_click_cost"
  },

  electricJakarta: {
    id: "electricJakarta",
    label: "Konsultasi Jasa Listrik Jakarta",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa listrik untuk area Jakarta. Lokasi saya di ...",
    serviceType: "electric",
    area: "Jakarta",
    channel: "whatsapp",
    trackingName: "wa_click_electric_jakarta"
  },

  electricTangerangSelatan: {
    id: "electricTangerangSelatan",
    label: "Konsultasi Jasa Listrik Tangerang Selatan",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa listrik untuk area Tangerang Selatan. Lokasi saya di ...",
    serviceType: "electric",
    area: "Tangerang Selatan",
    channel: "whatsapp",
    trackingName: "wa_click_electric_tangerang_selatan"
  },

  electricTangerangKota: {
    id: "electricTangerangKota",
    label: "Konsultasi Jasa Listrik Tangerang Kota",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa listrik untuk area Tangerang Kota. Lokasi saya di ...",
    serviceType: "electric",
    area: "Tangerang Kota",
    channel: "whatsapp",
    trackingName: "wa_click_electric_tangerang_kota"
  },

  acJakarta: {
    id: "acJakarta",
    label: "Konsultasi Jasa AC Jakarta",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa AC untuk area Jakarta. Lokasi saya di ...",
    serviceType: "ac",
    area: "Jakarta",
    channel: "whatsapp",
    trackingName: "wa_click_ac_jakarta"
  },

  acTangerangSelatan: {
    id: "acTangerangSelatan",
    label: "Konsultasi Jasa AC Tangerang Selatan",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa AC untuk area Tangerang Selatan. Lokasi saya di ...",
    serviceType: "ac",
    area: "Tangerang Selatan",
    channel: "whatsapp",
    trackingName: "wa_click_ac_tangerang_selatan"
  },

  acTangerangKota: {
    id: "acTangerangKota",
    label: "Konsultasi Jasa AC Tangerang Kota",
    message:
      "Halo CV Pemuda, saya ingin konsultasi jasa AC untuk area Tangerang Kota. Lokasi saya di ...",
    serviceType: "ac",
    area: "Tangerang Kota",
    channel: "whatsapp",
    trackingName: "wa_click_ac_tangerang_kota"
  }
} satisfies Record<string, CtaConfig>;

export type CtaId = keyof typeof ctas;
