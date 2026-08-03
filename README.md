# Alessandro Allegri — Research website

Professional academic website for Alessandro Allegri, Junior Assistant
Professor in Industrial Chemistry at the University of Bologna.

The site is a static Next.js export hosted on GitHub Pages. It includes an
introduction, curriculum vitae, research interests, collaborations, contact
details, and publication feeds. Author metrics and publication lists are
refreshed from Scopus at build time.

## Local development

```sh
npm ci
npm run update:scopus
npm run dev
```

## Production build

```sh
npm run build
```

The static site is written to `out/`. Every push to `main` is deployed by
`.github/workflows/deploy-pages.yml`. The same workflow runs every Monday to
refresh the Scopus snapshot and redeploy the site.

## Scopus configuration

For local updates, copy `.env.example` to `.env.local` and set
`ELSEVIER_API_KEY`. Spaces around the equals sign are accepted by Node, though
the conventional form is `ELSEVIER_API_KEY=...`.

For GitHub Pages, add the same key as the `ELSEVIER_API_KEY` Actions repository
secret. The key is used only during the build and is never included in the
exported website. The Scopus author ID defaults to `57219921001`; it can be
overridden with `SCOPUS_AUTHOR_ID` if the profile changes.
