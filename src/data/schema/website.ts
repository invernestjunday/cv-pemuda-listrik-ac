export function generateWebsiteSchema(site: {
  baseUrl: string;
  siteName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.baseUrl}/#website`,
    name: site.siteName,
    url: `${site.baseUrl}/`,
    publisher: {
      "@id": `${site.baseUrl}/#localbusiness`
    }
  };
}
