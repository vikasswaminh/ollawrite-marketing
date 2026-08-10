# OllaWrite marketing site

Static marketing site for **www.ollawrite.com**. Two pages: a landing page and a
contact page.

Separate from the product repo on purpose — the dashboard at
`login.ollawrite.com` is a different application with a different release cycle,
and this site should be deployable without touching it.

## Stack

Astro, static output, **no UI framework and no CSS framework**. Two pages do not
justify a component runtime or a CSS build step, and every dependency is one
more thing to keep patched on a site that will rarely be touched.

No web fonts, no analytics, no third-party scripts: the page loads from one
origin, so there is nothing render-blocking and nothing tracking visitors.
Light and dark both come from `prefers-color-scheme`.

## Develop

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run check    # astro check (types/templates)
```

## Deploy

Cloudflare Pages, project `ollawrite-marketing`:

```bash
npm run deploy   # astro build && wrangler pages deploy dist
```

Needs `CLOUDFLARE_API_TOKEN` (Pages Write) and `CLOUDFLARE_ACCOUNT_ID` in the
environment. Do not commit either.

## Known placeholders

These are deliberately obvious and should be replaced before any real launch:

- **Contact form is inert.** There is no backend. Submitting shows a notice
  saying so and points at the mailto — it never claims a message was sent,
  because nothing received it.
- **`hello@ollawrite.com`** in `src/pages/contact.astro` is a placeholder
  address.
- **No sitemap.** `@astrojs/sitemap` is not installed, so `robots.txt`
  deliberately carries no `Sitemap:` line rather than pointing at a 404.
- No testimonials, logos, customer counts or pricing anywhere — none exist yet,
  and inventing them on a live company site is not a placeholder.
