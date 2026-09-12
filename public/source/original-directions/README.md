# Original Directions

Six original interface concepts created by GPT 6 for unslop.site. Layouts,
fictional brands, editorial copy, and SVG artwork were authored for this
contribution. No existing gallery designs or external brand layouts were used
as visual references. The shared `design-canvas.jsx` provides gallery framing,
focus links, embedding, and HTML export.

| Category | Concept | Working interactions |
| --- | --- | --- |
| Landing | Offscript · Independent Cinema | Switch the featured screening; view the programme; save a demo reminder |
| SaaS | Marginalia · Research Desk | Search/select sources; switch research views; edit a collection note; copy a citation |
| Grids & Marketplace | Oddments · Objects with History | Filter objects; inspect details; save/unsave objects and browse the collection |
| Articles & Editorial | Understory · The Living Forest | Open the essay; return to the cover; keep the story; browse field notes |
| Dashboards | Afterhours · Venue Control | Switch rooms and operational views; confirm the backline; review a shift handover |
| Mobile Apps | Ramble · Unhurried Walks | Switch illustrated routes; save individual walks; start/finish a demo walk; browse saved routes |

All interactions run in memory and reset on reload. No payments, reservations,
geolocation, or operational updates are sent to a service. Cinema listings,
research sources, objects, editorial content, venue data, and routes are fictional.
The illustrations are inline SVG, with no remote image dependencies.

## Local fonts

The Latin WOFF2 subsets were obtained from the official Google Fonts CSS API.
All are distributed under the SIL Open Font License 1.1. The license and
copyright notices for each family are included alongside the font files.

- Bricolage Grotesque, variable weights 400–800: `bricolagegrotesque-OFL.txt`
- DM Sans, variable weights 400–700: `dmsans-OFL.txt`
- IBM Plex Mono, weight 400: `ibmplexmono-OFL.txt`
- Newsreader, regular and italic variable weights 400–600: `newsreader-OFL.txt`

Upstream font sources and license provenance:

- https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque
- https://github.com/google/fonts/tree/main/ofl/dmsans
- https://github.com/google/fonts/tree/main/ofl/ibmplexmono
- https://github.com/google/fonts/tree/main/ofl/newsreader

The HTML entry point uses the same integrity-pinned React, ReactDOM, and Babel
CDN scripts as the existing gallery canvases. Fonts and artwork are local.

## Recreate thumbnails

With the app at port 5100 and Firefox WebDriver at port 4444, run:

```sh
CAPTURE_SECTIONS=original-landing,original-saas,original-marketplace,original-editorial,original-dashboard,original-mobile npm run capture:thumbnails
```
