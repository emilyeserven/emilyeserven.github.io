# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based portfolio website for Emily Serven, deployed on GitHub Pages at emilyserven.net. The site includes web development portfolio, photography gallery, blog, and contact sections.

## Development Commands

```bash
# Serve locally with live reload
bundle exec jekyll serve

# Build the site (output to _site/)
bundle exec jekyll build
```

There is no package.json, Gemfile, or other build tooling — the site relies on GitHub Pages' default Jekyll environment. The `node_modules/` and `dist/` directories are artifacts from past experimentation and are not part of the build.

## Architecture

### Jekyll Collections

Three collections are defined in `_config.yml`:

- **`_flexfolio/`** — Primary portfolio collection (output: true). Organized into subdirectories: `commercial/`, `projects/`, `lab/`, `photography/`, `drafts/`. Each item uses rich YAML front matter (title, code, category, subcategory, stack, responsibilities, features array, image paths, grid positioning via flexwidth/flexheight/flexorder).
- **`_portfolio/`** — Legacy portfolio collection (output: true, permalink: `/portfolio/:path/`).
- **`_skills/`** — Skill categories for display (output: false, not rendered as pages).

### Template System

- **`_layouts/`** — Page templates. `default.html` is the base; variants include `default-notitle.html`, `default-nowrap.html`, `default-photo.html`. Content layouts: `flexfolio.html`, `photofolio.html`, `post.html`, `blog-category.html`.
- **`_includes/`** — Reusable partials organized by purpose:
  - `gridblocks/` — Grid item renderers (work-block, showcase-block, photo-block)
  - `layout/` — Wrapper components (work-block-start/end, category-btn)
  - `technical/` — Detail card formatting
  - `portfolio/` and `flexfolio/` — Collection-specific components
  - `head.html`, `header.html`, `footer.html` — Site-wide structure

Includes are documented with PURPOSE, WHERE, DEPRECATION, and PARAMETERS comments.

### Styling

- `css/main.scss` — Primary stylesheet (~2200 lines) with structured TABLE OF CONTENTS sections
- `css/fonts.scss` — Custom web fonts (Bw Modelica, Quasimoda, CorporativeSansRd) and icon fonts
- `_sass/` — Partials: `_base.scss`, `_layout.scss`, `_syntax-highlighting.scss`
- Bootstrap 4.x grid system for responsive layout
- Featherlight for image lightboxes

### Content Pages

Root HTML files (`index.html`, `about.html`, `contact.html`, `blog.html`, portfolio pages) use Jekyll front matter to select layouts. Topic category pages live in `topics/`.

### Assets

Portfolio item images are stored at `assets/flexfolio/[code]/` where `[code]` matches the item's `code` front matter field. General images in `assets/images/`, icons in `assets/icons/`.

## Deployment

Push to `master` branch triggers automatic GitHub Pages build. Custom domain configured via `CNAME` file pointing to `emilyserven.net`.
