# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and documentation site (akmalov.com) built with Docusaurus 3. The site is in Russian, uses dark mode only, and deploys as static HTML served by nginx.

## Commands

- `npm run start` — local dev server
- `npm run build` — production build (output in `build/`)
- `npm run serve` — serve production build locally
- `npm run typecheck` — TypeScript type checking
- `npm run clear` — clear Docusaurus cache (useful when build behaves unexpectedly)

## Architecture

- **Content**: Markdown/MDX files in `docs/` (documentation organized by topic with auto-generated sidebar) and `blog/` (blog posts, each in its own directory with an `index.md`)
- **Custom pages**: `src/pages/` — homepage (`index.tsx`), about page (`about.tsx`)
- **Components**: `src/components/home/` — landing page sections (HomeHero, TopicsSection, AboutSite)
- **Theme overrides**: `src/theme/BlogPostItem.tsx` — swizzled to inject Giscus comments on blog post pages
- **Styling**: Tailwind CSS (`@import "tailwindcss"` in `src/css/custom.css`) for utility classes, plus Infima (Docusaurus CSS framework) for base styles. Color mode is locked to dark.
- **Icons**: `@icons-pack/react-simple-icons` for brand icons (Docker, K8s, Python, etc.), `@mdi/react` + `@mdi/js` for Material Design Icons

## Key Configuration

- `docusaurus.config.js` — site config; Algolia search and Google Analytics are conditionally enabled via env vars (`ALGOLIA_APP_ID`, `ALGOLIA_API_KEY`, `ALGOLIA_INDEX_NAME`, `GOOGLE_ANALYTICS_TAG_ID`)
- `sidebars.js` — auto-generated from `docs/` folder structure
- `plugins/tailwind-plugin.js` — Tailwind CSS integration
- Deployment: Dockerfile builds static assets and serves via nginx on port 8000; also supports GitHub Pages via `npm run deploy`

## Testing

- Playwright is available (`npm install -D playwright`) for local visual/functional testing
- `screenshot.mjs` — takes full-page screenshots of homepage and about page via Playwright

## Content Conventions

- Blog posts live in `blog/<slug>/index.md` with frontmatter (title, date, tags, etc.)
- Docs are organized in topic directories under `docs/`, each with a `_category_.json` for sidebar ordering
- Site locale is `ru` (Russian)
- Navbar labels are in English (Blog, Docs, About) — do not translate them
- `static/llms.txt` — индекс контента для AI/LLM краулеров (SEO/GEO оптимизация). При добавлении новой статьи в `blog/` или документа в `docs/` обязательно обновлять `llms.txt`: добавить ссылку с кратким описанием в соответствующую секцию (Blog Posts / Docs). Поддерживать файл в актуальном состоянии — удалять/править записи о перемещённом или удалённом контенте.
