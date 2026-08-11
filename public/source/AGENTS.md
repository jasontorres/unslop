# AGENTS.md — Theme and Typography

This project is an **exploration library** of design directions. The user is
auditioning aesthetic systems across many product surfaces — hero/landing,
dashboards, mobile apps, social posts, and grid layouts — so they can compare
typography, color, density, and visual vocabulary side-by-side and decide which
directions to push further.

## What this project is

A multi-page catalog of design options. Each HTML page is one **canvas** of
artboards built with `design-canvas.jsx` (DesignCanvas → DCSection → DCArtboard).
The user pans, zooms, drags to reorder, and clicks the expand icon on any
artboard to focus it full-screen.

## Pages so far

| File | Section count | Contents |
|---|---|---|
| `Themes and Typography.html` | 4 sections, 30 artboards | Hero/landing across 16 aesthetic directions + saturated-bg color batch + 6 dashboards |
| `Mobile Apps.html` | 2 sections, 16 artboards | iOS app screens in device frames across 16 categories |
| `Social Media Posts.html` | 3 sections, 16 artboards | IG posts, stories/reels, text platforms (X, Threads, LinkedIn, YouTube) |
| `Profiles and Product Pages.html` | 3 sections, 12 artboards | Profile views (social, portfolio, account, athlete, creator) + PDPs (fashion, furniture, tech, prints) + listings (property, vehicle, app) |
| `Articles and Editorial.html` | 3 sections, 12 artboards | Long-form reading (essay, magazine, photo essay, interview) + editorial indexes (broadsheet, newsletter, riso zine) + specialized formats (docs, recipe, dev blog, album review, podcast) |

## Working principles

1. **Variety over polish on first pass.** When the user asks for N options,
   spread them across distinct typographic systems, palettes, densities, and
   metaphors. Don't ship 8 variants of the same idea.
2. **Audit your own palette.** The user has called out before that defaults
   drift toward cream/paper backgrounds, orange accents, and italic display
   serifs. When making a new batch, *consciously* avoid the previous batch's
   palette unless the brief calls for it.
3. **Design canvas is the presentation format.** Use `DCSection` to group, give
   each artboard a clear label (`01 · Editorial Serif`), and pick artboard
   dimensions to fit the medium (1280×800 for desktop, 462×920 for iOS frames,
   square / 9:16 for social).
4. **Real content beats lorem.** Use evocative brand names, real-sounding
   copy, plausible stats. Aim for the feel of a real product.
5. **Placeholders are fine.** Photos are gradient blocks; product shots are
   gradient cards. The goal is layout + type + color, not finished art.
6. **Componentize per file.** Each page's JSX file defines all its variant
   components inline (with prefixed style-object names — `s`, never the global
   name `styles`) and renders into the same `#root` via its own
   `ReactDOM.createRoot` call. Cross-page sharing happens via
   `window.<SectionName>` globals (see Themes and Typography.html).
7. **Fonts are loaded via Google Fonts** in the page `<head>`. When adding a
   new family, add it to the `<link>` once and reuse.

## Recurring brand vocabulary (so cross-page references rhyme)

The user has built up a loose recurring cast — feel free to reuse these names
across new artboards so the project feels like one fictional universe:

- **The Quiet Times** — slow-media weekly, @anyaiqbal
- **Maison Calva** — 18-seat wine bar / restaurant
- **Halid** — fintech / treasury SaaS
- **Atelier Form** — fashion house, SS26
- **Linear Labs** — software company (recurring employer)
- **Werner Institute** — cultural institution, Paris
- **Tide** — meditation app
- **Pace//Form** — running club
- **Pavilion** — CRM SaaS
- **milkpath** — cooking app
- **Press & Pulp** — Brooklyn riso print studio
- **PopShop / Haus/Haus** — DTC fashion / pop brands
- **Maya Khanna, Anya Iqbal, Toma, Aanya R., V. Lev** — recurring people

## File layout

```
Theme and Typography (project)
├── AGENTS.md                       ← this file
├── design-canvas.jsx               ← shared canvas component (Figma-ish)
├── ios-frame.jsx                   ← iPhone device chrome
│
├── Themes and Typography.html      ← page 1
│   ├── heroes.jsx                  ← row 1 (8 hero directions) + bootstraps App
│   ├── heroes2.jsx                 ← row 2 (8 more)
│   ├── heroes3.jsx                 ← saturated-bg color batch (8)
│   └── dashboards.jsx              ← 6 dashboards
│
├── Mobile Apps.html                ← page 2
│   ├── mobile-apps.jsx             ← row 1 (8 apps) + bootstraps App
│   └── mobile-apps-2.jsx           ← row 2 (8 more)
│
├── Social Media Posts.html         ← page 3
│   └── social-posts.jsx            ← 16 posts, 3 sections
│
├── Grids and Marketplace.html      ← page 4
│   └── grids.jsx                   ← 12 grid layouts, 3 sections
│
├── Profiles and Product Pages.html ← page 5
│   └── profiles.jsx                ← 12 profile/PDP/listing layouts, 3 sections
│
└── Articles and Editorial.html     ← page 6
    ├── articles.jsx                ← rows 1-2 (7 layouts) + bootstraps App
    └── articles-2.jsx              ← row 3 (5 specialized formats), exposed via window
```

## What good "more" looks like

When the user says "8 more" of something, the new batch should:

- Pick **categories or palettes not covered yet** (check the audit list above).
- Mix **bold + restrained** options. Don't make all 8 maximalist or all 8 minimal.
- Include at least one direction with **a different layout structure**, not just
  a different color (e.g. split-screen, full-bleed image, ticker/marquee,
  asymmetric grid).
- Keep at least one **familiar/safe** option so the user has a baseline to compare.

## What to ask the user before starting a new page

- Which medium / aspect ratio?
- Light, dark, or mix?
- Which existing brand voices to carry forward vs. invent new ones?
- Any aesthetic constraints to avoid (e.g. "no cream, no orange, no italic
  serifs" was the standing rule when the user pushed back on convergence)?

## Useful follow-ons the user has not asked for yet

- **Email templates** (transactional, newsletter, receipt)
- **Onboarding flows** (mobile or web, multi-screen)
- **Pricing pages** as a focused study
- **Empty states / error states**
- **Settings & profile screens** (often underserved)
- **Charts & data viz study** (one chart × many treatments)
- **Print/poster output** as a counterpoint to all the screen work

Don't surface these unprompted unless context calls for it — log them here for
when the user runs out of fresh briefs.
