# Pack 8 Link Fix Overlay

Fix untuk GitHub Pages project site agar internal link seperti `/tentang-kami/` otomatis menjadi `/cv-pemuda-listrik-ac/tentang-kami/` saat preview GitHub Pages.

Setelah copy overlay:

```cmd
npm run validate:content
npm run build
npm run preview
git add .
git commit -m "pack-8: fix github pages base path links"
git push
```

