# Kvarta

Firemná stránka reštaurácie Kvarta — sezónna kuchyňa, nové menu každý kvartál.

Next.js 16 (App Router), statický export, nasadzované cez GitHub Actions na GitHub Pages
(`kvarta.esticode.sk`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # statický výstup do ./out
```

- `src/app/page.tsx` — sekcie stránky
- `src/components/MenuTabs.tsx` — jedálny lístok (dáta priamo v súbore)
- `src/components/ReservationForm.tsx` — rezervačný formulár (demo, nič neodosiela)
- `src/components/Logo.tsx` — logo a značka štvrtinového kruhu
- `src/app/globals.css` — dizajnové tokeny a štýly

Fotografie: Unsplash. Kontakty a menu sú ukážkové.
