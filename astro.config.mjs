import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://invernestjunday.github.io",
  base: "/cv-pemuda-listrik-ac",
  trailingSlash: "always",
  output: "static",
  integrations: [sitemap()]
});
