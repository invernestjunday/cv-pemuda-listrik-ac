# CV Pemuda Listrik & AC — Build Pack 0

Starter project Astro untuk preview awal GitHub Pages.

## Status

Build Pack 0 — Foundation Preview Ready starter files.

## Setup lokal

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Konfigurasi GitHub Pages preview

Ganti placeholder di dua file:

- `astro.config.mjs`
- `src/data/site.ts`

Dari:

```txt
username
nama-repo
```

Menjadi username GitHub dan nama repository aktual.

Jika repository memakai pola `username.github.io`, hapus `base: "/nama-repo"` dari `astro.config.mjs`.

## GitHub Pages

Di repository GitHub:

1. Buka `Settings`.
2. Buka `Pages`.
3. Pilih `Source: GitHub Actions`.
4. Push ke branch `main`.

## Production final

Production final tetap Cloudflare Pages. GitHub Pages hanya preview awal.
