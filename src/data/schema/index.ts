import type { PageData } from "../types";
import { generateLocalBusinessSchema } from "./localBusiness";
import { generateWebsiteSchema } from "./website";
import { generateBreadcrumbSchema } from "./breadcrumb";
import { generateServiceSchema } from "./service";
import { generateFaqSchema } from "./faq";
import { generateAboutPageSchema, generateContactPageSchema } from "./page";

export function generatePageSchemas(
  page: PageData,
  site: {
    baseUrl: string;
    siteName: string;
    businessName: string;
    defaultOgImage: string;
    logo: string;
    whatsappNumber: string;
    serviceAreas: readonly string[];
    openingHoursSchema: string;
  }
) {
  const schemas: Array<Record<string, unknown>> = [];

  if (page.schema.localBusiness) {
    schemas.push(generateLocalBusinessSchema(site));
  }

  if (page.schema.website) {
    schemas.push(generateWebsiteSchema(site));
  }

  if (page.schema.breadcrumb) {
    const schema = generateBreadcrumbSchema(page);
    if (schema) schemas.push(schema);
  }

  if (page.schema.service) {
    schemas.push(generateServiceSchema(page, site));
  }

  if (page.schema.faq) {
    const schema = generateFaqSchema(page);
    if (schema) schemas.push(schema);
  }

  if (page.schema.aboutPage) {
    schemas.push(generateAboutPageSchema(page, site));
  }

  if (page.schema.contactPage) {
    schemas.push(generateContactPageSchema(page, site));
  }

  return schemas;
}
