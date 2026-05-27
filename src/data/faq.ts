import type { AreaName, FaqItem } from "./types";

export const homeFaq: FaqItem[] = [
  {
    question: "Area mana saja yang dilayani CV Pemuda Listrik & AC?",
    answer:
      "CV Pemuda Listrik & AC melayani area Jakarta, Tangerang Selatan, dan Tangerang Kota. Untuk memastikan kebutuhan dan penyesuaian jadwal, pelanggan dapat mengirim lokasi detail melalui WhatsApp."
  },
  {
    question: "Apakah CV Pemuda melayani jasa listrik dan AC?",
    answer:
      "Ya, CV Pemuda melayani konsultasi jasa listrik dan jasa AC untuk kebutuhan rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen."
  },
  {
    question: "Bagaimana cara konsultasi awal?",
    answer:
      "Konsultasi awal dilakukan melalui WhatsApp. Pelanggan dapat mengirim jenis kebutuhan, lokasi, serta foto atau video kendala jika tersedia."
  }
];

export const electricServiceFaq: FaqItem[] = [
  {
    question: "Layanan listrik apa saja yang bisa dikonsultasikan?",
    answer:
      "Pelanggan dapat berkonsultasi terkait instalasi listrik, perbaikan kendala listrik, MCB turun, stop kontak rusak, tambah titik listrik, panel sederhana, dan pengecekan jalur listrik."
  },
  {
    question: "Apakah masalah listrik perlu dicek langsung?",
    answer:
      "Sebagian masalah listrik perlu pengecekan langsung agar penyebabnya lebih jelas dan penanganannya dapat disesuaikan dengan kondisi instalasi."
  },
  {
    question: "Apakah bisa konsultasi dulu melalui WhatsApp?",
    answer:
      "Bisa. Pelanggan dapat mengirim lokasi, jenis masalah, serta foto atau video kondisi listrik melalui WhatsApp untuk konsultasi awal."
  },
  {
    question: "Apakah melayani rumah dan usaha kecil?",
    answer:
      "Ya, CV Pemuda melayani kebutuhan listrik untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen."
  },
  {
    question: "Apakah biaya listrik langsung bisa diketahui?",
    answer:
      "Biaya bergantung pada jenis pekerjaan, kondisi lapangan, kebutuhan material, dan tingkat kesulitan. Konsultasi awal diperlukan agar estimasi lebih jelas."
  }
];

export const acServiceFaq: FaqItem[] = [
  {
    question: "Layanan AC apa saja yang bisa dikonsultasikan?",
    answer:
      "Pelanggan dapat berkonsultasi terkait cuci AC, AC tidak dingin, AC bocor, AC berisik, isi atau tambah freon, instalasi, bongkar pasang, dan relokasi AC."
  },
  {
    question: "Apakah AC tidak dingin selalu karena freon habis?",
    answer:
      "Tidak selalu. AC tidak dingin dapat dipengaruhi kebersihan unit, kondisi filter, aliran udara, freon, komponen, atau kondisi pemasangan."
  },
  {
    question: "Apakah bisa konsultasi kondisi AC melalui WhatsApp?",
    answer:
      "Bisa. Pelanggan dapat mengirim lokasi, tipe kendala, serta foto atau video kondisi unit AC jika tersedia."
  },
  {
    question: "Apakah melayani cuci AC?",
    answer:
      "Ya, cuci AC termasuk layanan yang dapat dikonsultasikan untuk membantu menjaga kebersihan dan kenyamanan penggunaan unit."
  },
  {
    question: "Apakah biaya jasa AC langsung bisa diketahui?",
    answer:
      "Biaya bergantung pada jenis layanan, kondisi unit, akses lokasi, dan kebutuhan pengerjaan. Konsultasi awal diperlukan agar estimasi lebih jelas."
  }
];

export const costFaq: FaqItem[] = [
  {
    question: "Mengapa biaya tidak ditampilkan sebagai harga tetap?",
    answer:
      "Biaya dapat berbeda tergantung jenis pekerjaan, kondisi lapangan atau unit, kebutuhan material, akses lokasi, dan tingkat kesulitan."
  },
  {
    question: "Apakah bisa meminta estimasi biaya lewat WhatsApp?",
    answer:
      "Bisa. Pelanggan dapat mengirim detail kebutuhan, lokasi, serta foto atau video kondisi agar estimasi awal bisa dibahas lebih jelas."
  },
  {
    question: "Apakah biaya listrik dan AC sama?",
    answer:
      "Tidak selalu. Biaya listrik dan AC dipengaruhi jenis pekerjaan dan kondisi yang berbeda. Keduanya perlu dibahas sesuai kebutuhan."
  },
  {
    question: "Apakah ada biaya tambahan material?",
    answer:
      "Jika pekerjaan membutuhkan material tertentu, kebutuhan material akan dibahas terlebih dahulu sesuai kondisi pekerjaan."
  },
  {
    question: "Apa informasi yang perlu dikirim untuk konsultasi biaya?",
    answer:
      "Kirim lokasi, jenis kebutuhan, kondisi masalah, foto atau video jika ada, serta preferensi jadwal agar konsultasi lebih jelas."
  }
];

export const contactFaq: FaqItem[] = [
  {
    question: "Bagaimana cara menghubungi CV Pemuda?",
    answer:
      "Pelanggan dapat menghubungi CV Pemuda melalui tombol WhatsApp yang tersedia di website."
  },
  {
    question: "Jam layanan CV Pemuda pukul berapa?",
    answer:
      "Jam layanan yang digunakan saat ini adalah Senin–Minggu, 08.00–21.00."
  },
  {
    question: "Area mana saja yang dilayani?",
    answer:
      "Area layanan utama adalah Jakarta, Tangerang Selatan, dan Tangerang Kota."
  },
  {
    question: "Apa yang perlu dikirim saat menghubungi via WhatsApp?",
    answer:
      "Kirim lokasi, jenis kebutuhan, kendala yang dialami, serta foto atau video jika tersedia."
  },
  {
    question: "Apakah bisa konsultasi listrik dan AC di nomor yang sama?",
    answer:
      "Ya, konsultasi jasa listrik dan AC dapat dimulai melalui nomor WhatsApp yang sama."
  }
];

export function getLocalElectricFaq(area: AreaName): FaqItem[] {
  return [
    {
      question: `Apakah CV Pemuda melayani jasa listrik untuk area ${area}?`,
      answer: `Ya, CV Pemuda melayani konsultasi jasa listrik untuk area ${area}. Untuk penyesuaian kebutuhan dan jadwal, pelanggan dapat mengirim lokasi detail melalui WhatsApp.`
    },
    {
      question: `Layanan listrik apa saja yang bisa dikonsultasikan di ${area}?`,
      answer: `Pelanggan di ${area} dapat berkonsultasi terkait instalasi, perbaikan, tambah titik listrik, MCB turun, stop kontak rusak, dan pengecekan jalur listrik.`
    },
    {
      question: `Apakah biaya jasa listrik ${area} bisa langsung diketahui?`,
      answer: `Biaya jasa listrik di ${area} bergantung pada jenis pekerjaan, kondisi lapangan, kebutuhan material, dan tingkat kesulitan. Konsultasi awal diperlukan agar estimasi lebih jelas.`
    },
    {
      question: "Apakah semua pekerjaan listrik perlu pengecekan lokasi?",
      answer:
        "Tidak semua, tetapi banyak pekerjaan listrik perlu pengecekan lokasi agar penyebab masalah dan kebutuhan pengerjaan dapat dipahami dengan lebih aman."
    },
    {
      question: "Apakah perlu mengirim foto/video masalah listrik?",
      answer:
        "Disarankan. Foto atau video dapat membantu menjelaskan kondisi awal sebelum jadwal dan kebutuhan pengerjaan dibahas lebih lanjut."
    }
  ];
}

export function getLocalAcFaq(area: AreaName): FaqItem[] {
  return [
    {
      question: `Apakah CV Pemuda melayani jasa AC untuk area ${area}?`,
      answer: `Ya, CV Pemuda melayani konsultasi jasa AC untuk area ${area}. Untuk penyesuaian kebutuhan dan jadwal, pelanggan dapat mengirim lokasi detail melalui WhatsApp.`
    },
    {
      question: `Layanan AC apa saja yang bisa dikonsultasikan di ${area}?`,
      answer: `Pelanggan di ${area} dapat berkonsultasi terkait cuci AC, AC tidak dingin, AC bocor, isi atau tambah freon, instalasi, bongkar pasang, dan relokasi AC.`
    },
    {
      question: `Apakah biaya jasa AC ${area} bisa langsung diketahui?`,
      answer: `Biaya jasa AC di ${area} bergantung pada jenis layanan, kondisi unit, akses lokasi, dan kebutuhan pengerjaan. Konsultasi awal diperlukan agar estimasi lebih jelas.`
    },
    {
      question: "Apakah semua pekerjaan AC perlu pengecekan unit?",
      answer:
        "Tidak selalu, tetapi pengecekan unit sering diperlukan untuk memahami penyebab masalah seperti AC tidak dingin, bocor, atau berisik."
    },
    {
      question: "Apakah perlu mengirim foto/video kondisi unit AC?",
      answer:
        "Disarankan. Foto atau video unit AC dan kondisi kendala dapat membantu konsultasi awal melalui WhatsApp menjadi lebih jelas."
    }
  ];
}
