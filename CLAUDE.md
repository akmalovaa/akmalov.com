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
- **Custom pages**: `src/pages/` — homepage (`index.tsx`), about page (`about.mdx`)
- **Components**: `src/components/home/` — landing page sections (hero, topics, about); `src/components/HomepageFeatures/` — feature cards
- **Theme overrides**: `src/theme/BlogPostItem.tsx` — swizzled to inject Giscus comments on blog post pages
- **Styling**: SCSS modules (`*.module.scss`) via `docusaurus-plugin-sass`, plus `src/css/custom.css` for global overrides. Color mode is locked to dark.

## Key Configuration

- `docusaurus.config.js` — site config; Algolia search and Google Analytics are conditionally enabled via env vars (`ALGOLIA_APP_ID`, `ALGOLIA_API_KEY`, `ALGOLIA_INDEX_NAME`, `GOOGLE_ANALYTICS_TAG_ID`)
- `sidebars.js` — auto-generated from `docs/` folder structure
- Deployment: Dockerfile builds static assets and serves via nginx on port 8000; also supports GitHub Pages via `npm run deploy`

## Testing

- Use Playwright for local visual/functional testing

## Content Conventions

- Blog posts live in `blog/<slug>/index.md` with frontmatter (title, date, tags, etc.)
- Docs are organized in topic directories under `docs/`, each with a `_category_.json` for sidebar ordering
- Site locale is `ru` (Russian)
