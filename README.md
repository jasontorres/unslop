# unslop.site

[unslop.site](https://unslop.site) is a curated library of interface references
and a browser-based logo maker. It is built with vinext, React, Vite, and
Cloudflare Workers. vinext provides a Next.js-compatible API surface without
using the Next.js build system.

## Features

- Browse 143 interface references across landing pages, mobile apps, editorial,
  commerce, civic services, software agencies, and financial products.
- Open each reference as an interactive canvas or a focused AI-ready URL.
- Copy a design brief or a self-contained HTML reference.
- Create three logo, app-icon, mascot, poster, or brand-lockup directions from a
  short brief and an optional source image.
- Keep recent logo generations in browser-local history.

## Requirements

- Node.js `>=22.13.0`
- A Runware API key to use image generation
- Optional Google Programmable Search credentials for in-app image search

## Local development

```bash
npm install
cp .env.example .env.local
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
- `npm run deploy:dry-run` — validate the Cloudflare deployment bundle
- `npm run deploy` — build and deploy the Worker

## Project structure

```text
app/                    vinext App Router routes, gallery UI, and logo maker
app/api/logo/           Server-side image search and generation endpoints
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
npx wrangler secret put GOOGLE_SEARCH_API_KEY
npx wrangler secret put GOOGLE_SEARCH_ENGINE_ID
npm run deploy
```

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
- Logo history is stored locally in the visitor's browser and is not uploaded
  to this application.

## Contributing

Run `npm test` and `npm run lint` before opening a pull request. When adding a
gallery reference, update `app/data.ts`, retain all HTML/JS dependencies under
`public/source/`, and add the matching image under `public/previews/`.

## Further reading

- [vinext documentation](https://github.com/cloudflare/vinext)
- [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
