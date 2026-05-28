# Pack 9 — Cloudflare Pages Config + Logo & Icons

Pack ini mengunci konfigurasi Cloudflare Pages sementara dengan domain gratis:

https://pemuda-karya-sinergi-listrik-ac.pages.dev/

Catatan SEO:
- robots.txt tetap `Disallow: /`
- Tujuannya agar domain sementara `pages.dev` tidak diindeks Google dulu.
- Saat custom domain final sudah tersedia, robots/canonical/sitemap perlu diganti ke domain final.

Cloudflare Pages settings yang disarankan:

- Project name: pemuda-karya-sinergi-listrik-ac
- Build command: npm run build
- Build output directory: dist
- Root directory: /
- Production branch: main

Environment variable yang disarankan di Cloudflare Pages:

PUBLIC_DEPLOY_TARGET=cloudflare

File penting:
- astro.config.mjs dibuat conditional agar GitHub Pages preview tetap memakai base `/cv-pemuda-listrik-ac`.
- Cloudflare build memakai site `https://pemuda-karya-sinergi-listrik-ac.pages.dev` dan tanpa base.
- src/data/site.ts juga conditional agar canonical/schema sesuai environment.
- Nomor WhatsApp final sudah diganti ke +6287885724777.
- Logo final dimasukkan ke public/images/logo/logo-pks.svg.
- Icon SVG internal ditambahkan melalui src/components/ui/Icon.astro.
