import type { CategoryItem } from "./types";

export const electricCategories: CategoryItem[] = [
  {
    id: "electric-installation",
    title: "Instalasi",
    description:
      "Pengerjaan instalasi listrik untuk kebutuhan rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen.",
    icon: "zap",
    items: [
      "Instalasi listrik baru",
      "Instalasi titik lampu",
      "Instalasi stop kontak",
      "Kebutuhan jalur listrik tambahan"
    ]
  },
  {
    id: "electric-repair",
    title: "Perbaikan",
    description:
      "Pengecekan dan perbaikan kendala listrik sesuai kondisi yang ditemukan di lokasi.",
    icon: "wrench",
    items: [
      "Listrik mati sebagian",
      "Stop kontak rusak",
      "Saklar bermasalah",
      "Kabel atau jalur listrik bermasalah"
    ]
  },
  {
    id: "electric-protection-panel",
    title: "Proteksi / Panel",
    description:
      "Konsultasi kebutuhan MCB, panel listrik sederhana, dan proteksi dasar untuk penggunaan harian.",
    icon: "shield",
    items: [
      "Penggantian MCB",
      "Panel listrik sederhana",
      "Pengecekan beban listrik",
      "Proteksi dasar instalasi"
    ]
  },
  {
    id: "electric-checking",
    title: "Pengecekan",
    description:
      "Pengecekan jalur listrik dan titik gangguan untuk memahami penyebab masalah sebelum pengerjaan.",
    icon: "search",
    items: [
      "Pengecekan jalur listrik",
      "Pengecekan titik lampu",
      "Pengecekan stop kontak",
      "Pengecekan sumber gangguan"
    ]
  },
  {
    id: "electric-additional-point",
    title: "Penambahan Titik",
    description:
      "Konsultasi penambahan titik listrik untuk kebutuhan ruangan, perangkat, atau penataan ulang lokasi.",
    icon: "plus",
    items: [
      "Tambah titik lampu",
      "Tambah stop kontak",
      "Tambah jalur perangkat",
      "Penyesuaian kebutuhan ruangan"
    ]
  }
];

export const acCategories: CategoryItem[] = [
  {
    id: "ac-care",
    title: "Perawatan",
    description:
      "Perawatan AC untuk membantu menjaga kebersihan unit dan kenyamanan penggunaan.",
    icon: "snowflake",
    items: ["Cuci AC", "Perawatan rutin", "Pembersihan filter", "Pengecekan kondisi unit"]
  },
  {
    id: "ac-repair",
    title: "Perbaikan",
    description:
      "Pengecekan dan perbaikan kendala AC sesuai kondisi unit indoor maupun outdoor.",
    icon: "wrench",
    items: ["AC tidak dingin", "AC bocor", "AC berisik", "AC tidak menyala"]
  },
  {
    id: "ac-cooling-freon",
    title: "Freon / Pendinginan",
    description:
      "Konsultasi masalah pendinginan AC, termasuk pengecekan freon dan performa dingin unit.",
    icon: "thermometer",
    items: ["Pengecekan freon", "AC kurang dingin", "Tambah freon jika diperlukan", "Pengecekan kebocoran"]
  },
  {
    id: "ac-installation",
    title: "Instalasi",
    description:
      "Pemasangan unit AC untuk kebutuhan rumah, ruko, toko, kantor kecil, kos, kontrakan, atau apartemen.",
    icon: "tool",
    items: ["Pasang AC baru", "Instalasi pipa", "Pemasangan bracket", "Pengecekan posisi unit"]
  },
  {
    id: "ac-relocation",
    title: "Bongkar Pasang / Relokasi",
    description:
      "Konsultasi bongkar pasang atau pemindahan unit AC sesuai kondisi lokasi dan unit.",
    icon: "move",
    items: ["Bongkar AC", "Pasang ulang AC", "Relokasi unit", "Penyesuaian posisi indoor/outdoor"]
  }
];
