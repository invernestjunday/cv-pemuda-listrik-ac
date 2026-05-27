# Pack 3 Overlay — Design Tokens & Core UI Components

Pack ini memecah CSS global menjadi sistem CSS yang lebih rapi dan menambahkan komponen UI kecil untuk pack berikutnya.

## File yang ditambahkan / diubah

- src/styles/tokens.css
- src/styles/global.css
- src/styles/layout.css
- src/styles/components.css
- src/styles/utilities.css
- src/layouts/BaseLayout.astro
- src/components/ui/Badge.astro
- src/components/ui/SectionHeader.astro
- src/components/ui/CardShell.astro
- src/components/ui/ButtonLink.astro

## Cara cek

```cmd
npm run validate:content
npm run build
npm run preview
```

## Target visual

- Header tetap tampil.
- Footer tetap tampil.
- Tombol WhatsApp tetap hijau.
- Mobile bottom CTA tetap tampil di mobile.
- Floating WhatsApp tetap tampil di desktop.
- Hero skeleton tetap tampil rapi.
- Tidak ada horizontal scroll mobile.

Jika semua aman:

```cmd
git add .
git commit -m "pack-3: add design tokens and core ui components"
git push
```
