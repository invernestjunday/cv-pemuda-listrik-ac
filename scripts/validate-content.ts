import { ctas } from "../src/data/cta";
import { homePage } from "../src/data/pages/home";
import { tentangKamiPage } from "../src/data/pages/tentang-kami";
import { layananListrikPage } from "../src/data/pages/layanan-listrik";
import { layananAcPage } from "../src/data/pages/layanan-ac";
import { konsultasiBiayaPage } from "../src/data/pages/konsultasi-biaya";
import { kontakPage } from "../src/data/pages/kontak";
import { localElectricPages } from "../src/data/pages/local-electric";
import { localAcPages } from "../src/data/pages/local-ac";
import { validatePageData } from "../src/utils/validatePageData";

const pages = [
  homePage,
  tentangKamiPage,
  layananListrikPage,
  layananAcPage,
  konsultasiBiayaPage,
  kontakPage,
  ...localElectricPages,
  ...localAcPages
];

validatePageData(pages, ctas);

console.log("Content validation PASS");
console.log(`Validated ${pages.length} pages.`);
