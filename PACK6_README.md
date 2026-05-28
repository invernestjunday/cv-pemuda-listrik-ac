# Pack 6 Overlay — Local SEO Pages Build

Pack ini memfinalkan 6 halaman SEO lokal:

- /jasa-listrik-jakarta/
- /jasa-listrik-tangerang-selatan/
- /jasa-listrik-tangerang-kota/
- /jasa-ac-jakarta/
- /jasa-ac-tangerang-selatan/
- /jasa-ac-tangerang-kota/

File yang ditimpa:

- src/data/pages/local-electric.ts
- src/data/pages/local-ac.ts
- src/utils/validatePageData.ts

Setelah copy overlay, jalankan:

```cmd
npm run validate:content
npm run build
npm run preview
```

Jika PASS:

```cmd
git add .
git commit -m "pack-6: build local SEO pages"
git push
```
