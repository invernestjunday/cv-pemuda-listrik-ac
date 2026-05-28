import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const cloudflareSite = "https://pemuda-karya-sinergi-listrik-ac.pages.dev";
const githubSite = "https://invernestjunday.github.io";
const githubBase = "/cv-pemuda-listrik-ac";

const isCloudflare =
  process.env.CF_PAGES === "1" ||
  process.env.PUBLIC_DEPLOY_TARGET === "cloudflare" ||
  process.env.DEPLOY_TARGET === "cloudflare";

const config = {
  site: isCloudflare ? cloudflareSite : githubSite,
  trailingSlash: "always",
  output: "static",
  integrations: [sitemap()]
};

if (!isCloudflare) {
  config.base = githubBase;
}

export default defineConfig(config);
