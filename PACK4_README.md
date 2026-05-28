# Build Pack 4 Overlay

Isi folder ini adalah file tambahan/perubahan untuk Actual Build Pack 4 — Reusable Section Components.

Cara pakai singkat:

1. Pastikan Pack 3 sudah PASS dan `git status` bersih.
2. Copy isi folder overlay ini ke root project Astro Anda.
3. Jika diminta overwrite `src/layouts/PageLayout.astro`, `src/styles/components.css`, dan `src/data/pages/home.ts`, pilih overwrite.
4. Jalankan:

```bash
npm run validate:content
npm run build
npm run preview
```

5. Cek homepage. Pack 4 menambahkan banyak section sementara di Beranda untuk mengetes renderer dan semua komponen reusable. Isi final halaman akan dirapikan pada Pack 5.

Jika PASS, commit:

```bash
git add .
git commit -m "pack-4: add reusable section components"
git push
```
