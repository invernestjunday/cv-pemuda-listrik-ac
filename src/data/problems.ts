import type { CardItem } from "./types";

export const electricProblems: CardItem[] = [
  {
    id: "listrik-mati-sebagian-total",
    title: "Listrik Mati Sebagian / Total",
    description:
      "Pengecekan awal untuk memahami penyebab listrik mati pada sebagian ruangan atau seluruh area.",
    icon: "zap-off"
  },
  {
    id: "mcb-sering-turun",
    title: "MCB Sering Turun",
    description:
      "Pengecekan beban listrik, jalur instalasi, atau potensi gangguan pada rangkaian listrik.",
    icon: "switch"
  },
  {
    id: "stop-kontak-rusak",
    title: "Stop Kontak Rusak",
    description:
      "Pengecekan stop kontak yang longgar, panas, tidak berfungsi, atau perlu diganti.",
    icon: "plug"
  },
  {
    id: "lampu-mati",
    title: "Lampu Mati",
    description:
      "Pengecekan titik lampu, saklar, fitting, atau jalur listrik yang berkaitan dengan lampu.",
    icon: "lightbulb"
  },
  {
    id: "korsleting",
    title: "Korsleting",
    description:
      "Pengecekan sumber gangguan listrik yang berpotensi menyebabkan korsleting atau MCB turun.",
    icon: "alert-triangle"
  },
  {
    id: "kabel-panas-terkelupas",
    title: "Kabel Panas / Terkelupas",
    description:
      "Pengecekan kondisi kabel yang panas, aus, terkelupas, atau tidak aman untuk pemakaian.",
    icon: "cable"
  },
  {
    id: "bau-gosong-instalasi",
    title: "Bau Gosong dari Instalasi",
    description:
      "Pengecekan sumber bau gosong dari stop kontak, panel, MCB, kabel, atau titik listrik tertentu.",
    icon: "flame"
  },
  {
    id: "tambah-titik-listrik",
    title: "Kebutuhan Tambah Titik Listrik",
    description:
      "Konsultasi penambahan titik lampu, stop kontak, atau jalur listrik baru sesuai kebutuhan lokasi.",
    icon: "plus-circle"
  }
];

export const acProblems: CardItem[] = [
  {
    id: "ac-tidak-dingin",
    title: "AC Tidak Dingin",
    description:
      "Pengecekan penyebab AC kurang dingin, mulai dari kebersihan unit, freon, hingga komponen terkait.",
    icon: "snowflake"
  },
  {
    id: "ac-bocor",
    title: "AC Bocor",
    description:
      "Pengecekan sumber kebocoran air pada unit indoor, saluran pembuangan, atau pemasangan.",
    icon: "droplets"
  },
  {
    id: "ac-berisik",
    title: "AC Berisik",
    description:
      "Pengecekan suara tidak normal pada unit indoor atau outdoor agar penyebabnya lebih jelas.",
    icon: "volume-2"
  },
  {
    id: "ac-bau-tidak-sedap",
    title: "AC Bau Tidak Sedap",
    description:
      "Pengecekan bau tidak sedap yang dapat berkaitan dengan kebersihan unit, drainase, atau kelembapan.",
    icon: "wind"
  },
  {
    id: "ac-mati",
    title: "AC Mati",
    description:
      "Pengecekan unit AC yang tidak menyala, tidak merespons remote, atau tidak bekerja normal.",
    icon: "power"
  },
  {
    id: "ac-menetes",
    title: "AC Menetes",
    description:
      "Pengecekan air menetes pada unit indoor dan kemungkinan masalah pada saluran pembuangan.",
    icon: "drop"
  },
  {
    id: "ac-kurang-angin",
    title: "AC Kurang Angin",
    description:
      "Pengecekan aliran udara AC yang terasa lemah, kurang merata, atau tidak seperti biasanya.",
    icon: "fan"
  },
  {
    id: "ac-perlu-dicuci",
    title: "AC Perlu Dicuci",
    description:
      "Konsultasi perawatan dan cuci AC untuk membantu menjaga kebersihan unit dan kenyamanan penggunaan.",
    icon: "sparkles"
  }
];
