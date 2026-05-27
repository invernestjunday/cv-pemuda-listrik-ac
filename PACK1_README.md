# Build Pack 1 Overlay

Isi folder ini adalah file tambahan/perubahan untuk Actual Build Pack 1.

Cara pakai singkat:

1. Backup project atau pastikan Git status bersih.
2. Copy isi folder overlay ini ke root project Astro Anda.
3. Jika diminta overwrite `src/data/types.ts` dan `package.json`, pilih overwrite.
4. Jangan overwrite `src/data/site.ts` jika file Anda sudah berisi username/repo GitHub Pages yang benar. Overlay ini memang tidak menyertakan `site.ts` agar konfigurasi Anda tetap aman.
5. Jalankan:

```bash
npm install
npm run validate:content
npm run build
```

Jika PASS, commit:

```bash
git add .
git commit -m "pack-1: add global data layer and content model"
git push
```
