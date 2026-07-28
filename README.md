# Alessandro Allegri — Research website

Professional academic website for Alessandro Allegri, Junior Assistant
Professor in Industrial Chemistry at the University of Bologna.

The site is a static Next.js export hosted on GitHub Pages. It includes an
introduction, curriculum vitae, research interests, collaborations, contact
details, and publication feeds.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

The static site is written to `out/`. Every push to `main` is deployed by
`.github/workflows/deploy-pages.yml`.
