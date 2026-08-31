# unslop.site

[unslop.site](https://unslop.site) is a curated library of interface references
and a browser-based logo maker. It is built with vinext, React, Vite, and
Cloudflare Workers. vinext provides a Next.js-compatible API surface without
using the Next.js build system.

## Features

- Browse 207 interface references across landing pages, SaaS products, animated
  heroes, dashboards, mobile apps, editorial, commerce, civic services, software
  agencies, and financial products.
  Each reference is tagged with the model that generated it.
- Open each reference as an interactive canvas or a focused AI-ready URL.
- Copy a design brief or a self-contained HTML reference.
- Create one logo, app-icon, mascot, poster, or brand-lockup direction from a
  short brief and an optional source image.
- Keep recent logo generations in browser-local history.
- Publish generated images to a public, numbered and linkable R2 showcase.
- Protect generation credits with strict same-origin checks, Cloudflare
  Turnstile, per-client and shared burst limits, signed browser IDs, a
  D1-backed limit of 10 successful generations per browser, and a 10,000-per-day
  global D1 budget.
- Collect Logo Maker return notifications in a D1-backed email waitlist.

## Requirements

- Node.js `>=22.13.0`
- A Runware API key to use image generation
- Optional Google Programmable Search credentials for in-app image search
- An R2 bucket for the shared generated-logo showcase
- A D1 database for site data
- A Cloudflare Turnstile widget for the production domain

## Local development

```bash
npm install
cp .env.example .env.local
npm run db:migrate:local
npm run dev
```

The development server runs at <http://localhost:5100>.

Configure only the integrations you need in `.env.local`:

```dotenv
RUNWARE_API_KEY=
GOOGLE_SEARCH_API_KEY=
GOOGLE_SEARCH_ENGINE_ID=
```

`RUNWARE_API_KEY` enables `/api/logo/generate`. The two Google values enable
inline logo-image results; without them, the UI falls back to Google Images in
a new tab. Environment files are ignored by Git.

## Commands

- `npm run dev` — run the local development server
- `npm run build` — create the production Worker bundle
- `npm start` — serve the production bundle locally
- `npm test` — build and verify rendered routes and metadata
- `npm run lint` — run ESLint
- `npm run capture:thumbnails` — regenerate gallery previews through WebDriver
- `npm run gallery:prepare` — sanitize and split a local Runware usage export
- `npm run gallery:download` — cache the exported generated images locally
- `npm run gallery:upload` — upload cached images and index pages to R2
- `npm run gallery:verify` — verify the imported R2 image and page counts
- `npm run db:migrate:local` — apply pending migrations to the local D1 database
- `npm run db:migrate:remote` — apply pending migrations to the production D1 database
- `npm run deploy:dry-run` — validate the Cloudflare deployment bundle
- `npm run deploy` — apply production D1 migrations, then build and deploy the Worker

## Project structure

```text
app/                    vinext App Router routes, gallery UI, and logo maker
app/api/logo/           Server-side image search and generation endpoints
app/logo/gallery/       Public shared generated-logo showcase
migrations/             Ordered D1 database migrations
public/previews/        Gallery thumbnail images
public/source/          Interactive reference canvases and their dependencies
scripts/                Reference-thumbnail capture tooling
tests/                  Rendered-route integration tests
worker/                 Cloudflare Worker entry point
wrangler.jsonc          Cloudflare Worker configuration
```

The files under `public/source/` are runtime assets, not build scaffolding.
`app/data.ts` maps every gallery entry to an HTML canvas and artboard ID, while
`public/previews/` contains one matching image for every entry.

## Cloudflare deployment

The committed Wrangler configuration targets the canonical `unslop` Worker and
`unslop.site` domain. Forks should change the Worker name, account, and route in
`wrangler.jsonc` before deploying.

Authenticate with Wrangler and configure production secrets:

```bash
npx wrangler login
npx wrangler secret put RUNWARE_API_KEY
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put BROWSER_ID_SECRET
npx wrangler secret put GOOGLE_SEARCH_API_KEY
npx wrangler secret put GOOGLE_SEARCH_ENGINE_ID
npm run deploy
```

The Worker expects an R2 binding named `LOGO_GALLERY`. The canonical
configuration binds it to the `unslop` bucket. Gallery images are served
directly from R2 through `https://assets.unslop.site`; they do not pass through
the application Worker. Forks should create their own bucket, configure a
public R2 custom domain, and update both `wrangler.jsonc` and the gallery asset
origin in `app/api/logo/gallery/storage.ts` before deploying.

Site data uses a shared D1 binding named `DB`; the Logo Maker waitlist is its
first consumer. Before the first production deployment, create the database
and copy the returned `database_id` into the `d1_databases` entry in
`wrangler.jsonc`:

```bash
npx wrangler d1 create unslop-site
npm run db:migrate:remote
```

The migrations create `waitlist_entries`, the browser generation-limit table,
and the atomic daily generation budget. Email addresses are normalized to
lowercase and duplicate submissions are ignored. The Logo Maker allows 10
successful generations per signed persistent browser ID, limits each client to
5 starts per minute, limits the service to 10 starts per minute, and stops at
10,000 successful generations per UTC day. Local development uses Cloudflare's
official always-pass Turnstile test keys automatically, applies the same D1
migrations through `npm run db:migrate:local`, and stores database state under
Wrangler’s ignored local state directory.

### Importing a Runware usage export

Place the export at `runware_api_usage.json`; the filename and generated staging
directory are ignored by Git. Prepare and download the sanitized archive:

```bash
npm run gallery:prepare
npm run gallery:download
```

Upload with temporary S3-compatible R2 credentials supplied only to the shell:

```bash
R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... npm run gallery:upload
R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... npm run gallery:verify
```

The importer stores images under `logo-gallery/images/`, splits metadata into
200-item JSON pages, and publishes the manifest only after every image upload
succeeds. It is resumable through the ignored `.logo-gallery-import/` staging
directory.

The Google secrets are optional. In CI, provide `CLOUDFLARE_API_TOKEN` with
Workers edit permissions instead of using interactive login.

For a non-publishing deployment check:

```bash
npm run deploy:dry-run
```

## Security notes

- Never commit `.env.local`, `.dev.vars`, API keys, or Cloudflare tokens.
- Image-provider credentials are read only by server routes and are not exposed
  to browser bundles.
- A signed, random, HttpOnly, `SameSite=Strict` browser ID enforces the
  10-generation allowance. It does not contain personal information; clearing
  browser data creates a new ID, while Turnstile, client throttling, and the
  global daily budget continue to protect provider spend.
- `/api/logo/generate` accepts only same-origin JSON requests and validates a
  single-use Turnstile token, action, and hostname before quota checks or the
  image-provider call. Validation failures and limit events are written to
  Cloudflare Worker observability without logging tokens or prompts.
- Personal logo history remains in the visitor's browser. Generated images are
  also copied to the public R2 bucket and exposed through the public community
  showcase; source images and full prompts are not stored.
- Waitlist signups store only the normalized email address, signup source, and
  database-generated creation time. A honeypot prevents basic automated form
  submissions from reaching D1.
- Raw Runware usage exports and local gallery-import caches are ignored by Git.

## Contributing

Run `npm test` and `npm run lint` before opening a pull request. When adding a
gallery reference, update `app/data.ts`, retain all HTML/JS dependencies under
`public/source/`, and add the matching image under `public/previews/`.

## Further reading

- [vinext documentation](https://github.com/cloudflare/vinext)
- [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
