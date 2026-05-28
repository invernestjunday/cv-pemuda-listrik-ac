# Pack 7 — SEO, Schema, Sitemap, Robots

Pack ini menambahkan:

- MetaTags final
- JsonLd renderer
- Schema generator
- Sitemap integration
- Robots preview
- SEO/canonical validator

## Setelah copy overlay

Jalankan:

```cmd
npm install @astrojs/sitemap
npm run validate:content
npm run build
npm run preview
```

Untuk preview GitHub Pages, `robots.txt` masih memakai:

```txt
User-agent: *
Disallow: /
```

Nanti pada Pack 9 / Cloudflare production, robots harus diganti menjadi `Allow: /`.
