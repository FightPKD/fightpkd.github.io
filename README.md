# FightPKD

A website tracking the drug development pipeline and therapeutic research for Polycystic Kidney Disease (PKD/ADPKD) patients.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed on GitHub Pages at [pkdcuretracker.com](https://pkdcuretracker.com).

## Features

- **Drug Pipeline Dashboard** — 17 drugs in clinical trials with phase, enrollment status, and trial details
- **Therapeutic Research** — Evidence-based dietary, supplement, and lifestyle interventions
- **Keto & PKD** — Deep-dive into ketogenic diet and KetoCitra research with verified citations
- **PKD News** — Latest drug and therapy updates from conferences and publications
- **Recruiting Trials** — Trials currently enrolling patients
- **Clinical Trial Phases Guide** — Educational resource explaining trial phases
- **Error Reporting** — Community-driven accuracy via a contact form at `/report`

## Development

```bash
npm install          # install dependencies
npm run dev          # start dev server at localhost:4321
npm run build        # build to ./dist/
npm run preview      # preview production build
```

Requires Node.js 22+.

## Data Files

All content lives in JSON files (single source of truth):

- `src/data/drugs.json` — Pipeline drugs (17 entries)
- `src/data/therapies.json` — Therapeutic interventions
- `src/data/keto-studies.json` — Published keto/PKD studies with DOIs
- `src/data/news.json` — News items
- `src/data/drug-articles.json` — Drug detail page content

See [AGENTS_REFERENCE.md](./AGENTS_REFERENCE.md) for the full data schema, citation standards, and update guide.

## Deployment

Automated via GitHub Actions — push to `main` triggers build and deploy to GitHub Pages.

Custom domain: `pkdcuretracker.com`
