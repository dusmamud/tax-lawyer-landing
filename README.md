# MSY Law — Tax Attorney Landing Page

Professional landing page for a tax attorney firm, built with **Svelte 5 + SvelteKit + Vite + TypeScript + Tailwind CSS v4**.

Sections: Header, Hero (“We Are Handle Every Case Professionally”), About Us with stats (98% / 1M+ / $50M), Practice Areas (6 cards), Footer.

## Stack

- Svelte 5.57.3 (runes: `$state`, `$derived`, `$props`)
- SvelteKit 3.2.0 — file-based routing, SSR by default
- Vite 8.3.8
- TypeScript
- Tailwind CSS 4.3.5 — CSS-first config via `@theme` in `src/app.css`, `@tailwindcss/vite` plugin
- `@sveltejs/adapter-static` — prerendered static site (`export const prerender = true` in `src/routes/+layout.ts`), output in `build/`

> Note: SvelteKit 3 removed `$lib` — imports use `#lib` (see `imports` in `package.json`).

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # writes static site to build/
npm run preview
npm run check   # svelte-check, 0 errors
```

## Deploy

Static output in `build/` — deployable to Cloudflare Pages, Netlify, Vercel or GitHub Pages. Build command: `npm run build`, output directory: `build`.
