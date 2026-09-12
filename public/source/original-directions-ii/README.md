# Original Directions II

Six new, original design studies by GPT 6, covering the six categories not
represented in the first collection. All brands, copy, compositions, and SVG
artwork were authored for these studies. The existing DesignCanvas wrapper and
locally hosted, OFL-licensed fonts are shared infrastructure.

| Category | Concept | Interaction |
| --- | --- | --- |
| Civic & Public Service | Common Shelf | Search/filter three fictional books, maintain a reading list, and explore clearly labelled demo service information |
| Software Agency | Counterform | Switch concept case studies, inspect the studio process, and keep a local project brief |
| Profiles & Products | Interval | Choose a finish and duration; start, pause, resume, and reset a working focus timer |
| Financial Apps | Gather | Add/remove sample expenses with integer-penny accounting, inspect shared contributions, and browse activity |
| Social Media | Sideplate | Navigate three original supper-club illustrations and save the fictional invitation |
| Animation | Sonder | Switch moods, pause/resume slow motion, and explicitly play original synthesized chords |

The entry point is `../Original Directions II.html`. Every design has its own
`second-*` section and can be opened through the gallery's usual focus and embed
URLs. Thumbnails are in `public/previews/`.

## Behaviour and boundaries

- All sample data is fictional. State resets when the page reloads.
- Common Shelf collects no personal information and has no official library
  affiliation. Branch details, membership rules, fees, hours, and official
  destinations are explicitly unverified. Its evidence records are in
  `redesign-evidence/service-records.json`.
- Counterform's brief remains in the browser; it is not submitted anywhere.
- Interval measures elapsed time against a deadline, so delayed callbacks do not
  accumulate timer drift. It has no alarm or persistence after closing the page.
- Gather is a local planner. Amounts are stored as integer pennies; totals always
  reconcile with the £840 sample fund. Uneven thirds display the lower and upper
  share, with spare pennies allocated to the first contributors. No money moves.
- Sideplate is a fictional invitation, with no actual booking or RSVP service.
- Sonder creates a short chord with the browser's Web Audio API only after a
  button press. Audio contexts and timers are closed on completion or unmount.
  Motion is pausable and is disabled by the system's reduced-motion preference.

## Civic design notes

Common Shelf uses task-first information architecture and explicit provenance
principles from the BetterGov-derived civic-design guidance. Its visual design
is original; it does not reproduce an existing library or government website.
There is no authoritative library URL to link because no real institution is
being represented. The service-record validator therefore reports four expected
missing-official-URL warnings, with no schema errors.

The component has container-query reflow at narrow widths. The gallery still
uses its established fixed-artboard scaling for embeds. Browser checks cover the
library component at 320, 375, 600, 768, and 1200 CSS pixels, keyboard search and
dialog focus restoration, and an axe-core WCAG A/AA scan. This is not a claim of
complete WCAG conformance; screen-reader and translated-content testing are not
included in this English-language concept.

## Verification and previews

Run `npm test`, `npm run lint`, and `npx tsc --noEmit`. The rendered-route tests
check category/detail/reference integration and PNG thumbnails for both
original collections. The six new designs are also exercised in Chromium for
default layout, HTML export, primary interactions, and 390px gallery embeds.

With the app at port 5100 and Firefox WebDriver at port 4444:

```sh
CAPTURE_SECTIONS=second-civic,second-agency,second-product,second-financial,second-social,second-animation npm run capture:thumbnails
```

Font licenses and provenance are retained in `../original-directions/`.
Artwork and sound have no external media dependencies. The HTML retains the
gallery's existing integrity-pinned React, ReactDOM, and Babel CDN dependencies.
