# Actual Build Pack 5 — Main Pages Build

Pack ini memfinalkan 6 halaman utama:

- `/`
- `/tentang-kami/`
- `/layanan-listrik/`
- `/layanan-ac/`
- `/konsultasi-biaya/`
- `/kontak/`

File yang ditimpa:

- `src/data/pages/home.ts`
- `src/data/pages/tentang-kami.ts`
- `src/data/pages/layanan-listrik.ts`
- `src/data/pages/layanan-ac.ts`
- `src/data/pages/konsultasi-biaya.ts`
- `src/data/pages/kontak.ts`
- `src/utils/validatePageData.ts`

Pack ini belum memfinalkan halaman lokal SEO. Halaman lokal tetap masuk Build Pack 6.

Setelah copy overlay, jalankan:

```bash
npm run validate:content
npm run build
npm run preview
```

Jika PASS:

```bash
git add .
git commit -m "pack-5: build main website pages"
git push
```
