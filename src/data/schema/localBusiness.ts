import { absoluteUrl } from "../../utils/seo";

export function generateLocalBusinessSchema(site: {
  baseUrl: string;
  siteName: string;
  businessName: string;
  defaultOgImage: string;
  logo: string;
  whatsappNumber: string;
  serviceAreas: readonly string[];
  openingHoursSchema: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.baseUrl}/#localbusiness`,
    name: site.businessName,
    url: `${site.baseUrl}/`,
    description:
      "Jasa listrik dan AC panggilan untuk rumah, ruko, toko, kantor kecil, kos, kontrakan, dan apartemen di Jakarta, Tangerang Selatan, dan Tangerang Kota.",
    areaServed: site.serviceAreas,
    openingHours: site.openingHoursSchema,
    telephone: site.whatsappNumber,
    image: absoluteUrl(site.defaultOgImage),
    logo: absoluteUrl(site.logo)
  };
}
