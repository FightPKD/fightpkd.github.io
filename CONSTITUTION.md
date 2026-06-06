# FightPKD — Constitution

This file defines the principles, processes, and reminders for maintaining this project. Any agent working on this project should read this file first.

## Core Principles

1. **Patient-first information** — All content serves PKD/ADPKD patients seeking clear, accurate information about treatments in development.
2. **Accuracy over speed** — Never publish unverified claims. If a source is uncertain, note it.
3. **Transparency about conflicts** — Always disclose conflicts of interest in research (e.g., company-funded studies, researcher financial ties).
4. **Balanced reporting** — Present both promising results AND limitations/caveats of each study.

## Update Rules

### When you find new information:
1. Update the relevant data file (`src/data/drugs.json` or `src/data/therapies.json`)
2. If it's a significant finding (new trial, acquisition, major result), add it to the Sources Log below
3. If the keto page content needs updating, edit `src/pages/keto.astro` directly
4. Run `npm run build` to verify the site builds cleanly before committing

### When you find a new source:
Add it to the Sources Log section below with:
- Date found
- What it relates to
- URL or reference
- Brief note on what changed

## Sources Log

| Date | Drug/Therapy | Source | Notes |
|------|-------------|--------|-------|
| 2026-05-21 | All drugs | ClinicalTrials.gov API v2 | Initial data population |
| 2026-05-21 | Keto/KetoCitra | PubMed, Cell Reports Medicine | KETO-ADPKD trial results, Ren-Nu data |
| 2026-05-21 | Farabursen | Novartis press releases, ClinicalTrials.gov | Novartis acquired Regulus ($1.7B, closed Jun 2025). Phase 1b showed htTKV growth halted. Phase 3 planned. Internal code: CYX082. NCT05521191 |
| 2026-05-21 | Farabursen | ASN Kidney Week 2025, WCN 2026 (Yokohama) | Oral + poster presentations confirming PC1/PC2 biomarker increases, 300mg dose selected |
| 2026-06-05 | Farabursen | Novartis ERA 2026 press release (May 26, 2026) | Global Phase 3 trial design presented at ERA 2026 Glasgow (Abstract #3398, oral June 4). Phase 3 imminent. |
| 2026-06-05 | JMKX003142 | ClinicalTrials.gov | Multiple Phase 1 studies registered (NCT07565441, NCT07470177, NCT07463053). DDI study est. start May 2026. |
| 2026-06-05 | Rotigotine | ClinicalTrials.gov | Phase 2 for ADPKD registered (NCT06291116), dopamine agonist, est. start March 2026. |

## Data Validation Checklist

Before pushing updates, verify:
- [ ] `npm run build` passes
- [ ] Drug phases match ClinicalTrials.gov
- [ ] Status values use allowed enum: `recruiting`, `not_yet_recruiting`, `active_not_recruiting`, `completed`, `enrolling_by_invitation`
- [ ] Dates use YYYY or YYYY-MM format
- [ ] NCT IDs are valid (format: NCTxxxxxxxx) and verified via CT.gov API
- [ ] No broken internal links
- [ ] DOIs resolve to the correct paper (spot-check at least 3 per update)
- [ ] Author names match DOI/PubMed metadata exactly
- [ ] Numeric claims (p-values, enrollment counts) match source papers

## SEO Requirements

Every page must use `BaseLayout.astro` which provides:
- Meta description, Open Graph, Twitter Card, canonical URL, JSON-LD, keywords
- Automatic sitemap inclusion via `@astrojs/sitemap`
- `robots.txt` at `public/robots.txt` (allow all, reference sitemap)

**Rules:**
- Every new page needs a unique `title` (≤60 chars) and `description` (≤160 chars) prop
- Use semantic HTML hierarchy (one h1 per page, logical h2-h6 nesting)
- Add internal links between related pages where natural
- Never block crawling (`noindex`, `nofollow`) without explicit approval
- After adding a new page, verify it appears in `dist/sitemap-0.xml`

## Key Decisions

- **Data format:** JSON files as single source of truth (not hardcoded in templates)
- **No database:** Static site, all data lives in repo
- **Inline styles for dynamic colors:** Tailwind conditional classes break in Astro templates; use `style` attributes for computed colors
- **Node.js 22+:** Required by Astro 6.x
- **GitHub Pages via Actions:** Not branch-based deployment

## Contact & Context

- Maintained by Renato Molina
- Repo: github.com/FightPKD/fightpkd.github.io
- Custom domain: pkdcuretracker.com
- Deploy target: GitHub Pages (via Actions on push to main)
