# CLAUDE.md

## Project Overview

Personal portfolio site for Emily Serven (emilyserven.net), built as a React SPA.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 7
- **Routing:** TanStack Router (file-based, auto code-splitting)
- **Styling:** Tailwind CSS v4 (CSS-first config)
- **Components:** shadcn/ui (new-york style, neutral base)
- **Testing:** Storybook 10 + Vitest
- **Package Manager:** pnpm

## Commands

```bash
pnpm dev              # Start dev server (localhost:5173)
pnpm build            # Type-check + production build
pnpm preview          # Preview production build
pnpm lint             # ESLint
pnpm storybook        # Storybook dev (localhost:6006)
pnpm build-storybook  # Build static Storybook
```

## Project Structure

```
src/
├── main.tsx              # App entry, router setup
├── App.css               # Tailwind + shadcn theme vars
├── routeTree.gen.ts      # Auto-generated (do not edit)
├── components/
│   ├── layout/           # Header, Footer, shared layouts
│   ├── shad/ui/          # shadcn components (managed by CLI)
│   └── ui/               # Custom reusable components
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # cn() helper and utilities
└── routes/
    ├── __root.tsx         # Root layout with Outlet
    └── index.tsx          # Homepage (/)
```

## Routing

- Uses TanStack Router file-based routing in `src/routes/`
- Route tree is auto-generated — add new routes by creating files in `src/routes/`
- Router devtools are available in development mode
- See: https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing

## Component Conventions

- **shadcn components** go in `src/components/shad/ui/` — managed by shadcn CLI, avoid manual edits
- **Custom components** go in `src/components/ui/` for reusable UI or `src/components/layout/` for page structure
- Use `cn()` from `@/lib/utils` for conditional class merging
- Import alias: `@/*` resolves to `src/*`

## Adding shadcn Components

```bash
pnpm dlx shadcn@latest add <component-name>
```

Components are placed in `src/components/shad/ui/` per `components.json` config.

## Content Collections

Legacy content preserved from Jekyll — not yet integrated into React:

- `_flexfolio/` — Extended portfolio case studies
- `_portfolio/` — Portfolio entries
- `_posts/` — Blog posts (Markdown)
- `_skills/` — Skills data
- `_drafts/` — Draft posts

## Deployment

- GitHub Pages with custom domain (emilyserven.net)
- `CNAME` in `public/` is copied to `dist/` on build
- Build output: `dist/`

## MCP Servers

- **shadcn:** Component library assistant (configured in `.mcp.json`)
