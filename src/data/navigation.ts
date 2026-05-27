import type { LinkItem } from "./types";

export type NavItem = LinkItem & {
  children?: LinkItem[];
};

export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami/" },
  {
    label: "Layanan",
    href: "#",
    children: [
      { label: "Layanan Listrik", href: "/layanan-listrik/" },
      { label: "Layanan AC", href: "/layanan-ac/" }
    ]
  },
  {
    label: "Area Layanan",
    href: "#",
    children: [
      { label: "Jasa Listrik Jakarta", href: "/jasa-listrik-jakarta/" },
      { label: "Jasa AC Jakarta", href: "/jasa-ac-jakarta/" },
      {
        label: "Jasa Listrik Tangerang Selatan",
        href: "/jasa-listrik-tangerang-selatan/"
      },
      {
        label: "Jasa AC Tangerang Selatan",
        href: "/jasa-ac-tangerang-selatan/"
      },
      {
        label: "Jasa Listrik Tangerang Kota",
        href: "/jasa-listrik-tangerang-kota/"
      },
      { label: "Jasa AC Tangerang Kota", href: "/jasa-ac-tangerang-kota/" }
    ]
  },
  { label: "Konsultasi Biaya", href: "/konsultasi-biaya/" },
  { label: "Kontak", href: "/kontak/" }
];

export const footerNav: Array<{
  title: string;
  links: LinkItem[];
}> = [
  {
    title: "Halaman Utama",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Tentang Kami", href: "/tentang-kami/" },
      { label: "Konsultasi Biaya", href: "/konsultasi-biaya/" },
      { label: "Kontak", href: "/kontak/" }
    ]
  },
  {
    title: "Layanan",
    links: [
      { label: "Layanan Listrik", href: "/layanan-listrik/" },
      { label: "Layanan AC", href: "/layanan-ac/" }
    ]
  },
  {
    title: "Area Layanan",
    links: [
      { label: "Jasa Listrik Jakarta", href: "/jasa-listrik-jakarta/" },
      { label: "Jasa AC Jakarta", href: "/jasa-ac-jakarta/" },
      {
        label: "Jasa Listrik Tangerang Selatan",
        href: "/jasa-listrik-tangerang-selatan/"
      },
      {
        label: "Jasa AC Tangerang Selatan",
        href: "/jasa-ac-tangerang-selatan/"
      },
      {
        label: "Jasa Listrik Tangerang Kota",
        href: "/jasa-listrik-tangerang-kota/"
      },
      { label: "Jasa AC Tangerang Kota", href: "/jasa-ac-tangerang-kota/" }
    ]
  }
];
