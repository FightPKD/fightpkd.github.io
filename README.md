# FightPKD

A website tracking the drug development pipeline and therapeutic research for Polycystic Kidney Disease (PKD/ADPKD) patients.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed on GitHub Pages.

## Features

- **Drug Pipeline Dashboard** — 16 drugs in clinical trials with phase, enrollment status, and trial details
- **Therapeutic Research** — Evidence-based dietary, supplement, and lifestyle interventions
- **Keto Research Page** — Deep-dive into ketogenic diet and KetoCitra research for PKD

## Development

```bash
npm install          # install dependencies
npm run dev          # start dev server at localhost:4321
npm run build        # build to ./dist/
npm run preview      # preview production build
```

## Updating Data

Drug and therapy information lives in JSON files:

- `src/data/drugs.json` — Pipeline drugs
- `src/data/therapies.json` — Therapeutic interventions

See [AGENTS_REFERENCE.md](./AGENTS_REFERENCE.md) for the full data schema and update guide.

## Deployment

Automated via GitHub Actions — push to `main` triggers build and deploy to GitHub Pages.
