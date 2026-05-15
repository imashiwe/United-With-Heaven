# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000 (Turbopack)
npm run build    # production build
npm run start    # serve production build
```

There are no tests and no linter configured.

## Content Updates

**All site content lives in `content.ts` at the project root.** This is the single source of truth for:
- `heroScriptures` — three cycling scriptures on the hero banner
- `wordOfTheWeek` — the featured scripture in the gold section
- `songs` — first entry is the featured song; rest appear in the grid
- `books`, `messages`, `testimonials`

Sections import directly from `@/content`. Do not hardcode content inside section components.

## Architecture

**Next.js 16 App Router** with no CMS — all data is static TypeScript exported from `content.ts`.

### Design system

Defined entirely in `app/globals.css` via Tailwind v4's `@theme inline` block (no `tailwind.config.ts`). Use the CSS custom property names as Tailwind classes:

| Token | Class example | Value |
|---|---|---|
| `--color-gold-primary` | `text-gold-primary` | `#B8860B` |
| `--color-gold-light` | `bg-gold-light` | `#D4A017` |
| `--color-gold-wash` | `bg-gold-wash` | `#FDF8EC` |
| `--color-cream` | `bg-cream` | `#FAF7F0` |
| `--color-text-heading` | `text-text-heading` | `#1C1209` |
| `--color-text-muted` | `text-text-muted` | `#7A6E5A` |

In practice, most color values are written as raw hex inside Tailwind's arbitrary-value syntax (`text-[#B8860B]`) — both approaches exist in the codebase.

**Three fonts**, loaded in `lib/fonts.ts` and applied as CSS variables on `<html>`:
- `font-display` → Cormorant Garamond (headings, pull quotes, decorative text)
- `font-body` → Lora (body copy, scripture excerpts)
- `font-ui` → Jost (labels, tags, buttons, uppercase tracking)

### Component conventions

- **Server components by default.** Add `"use client"` only when the component needs browser APIs, event handlers, or Framer Motion animations.
- **`ScrollReveal`** (`components/ui/ScrollReveal.tsx`) — Framer Motion wrapper for fade-up entrance. Wrap any section block that should animate in on scroll. Accepts `delay` and `className` props.
- **`SectionHeading`** (`components/ui/SectionHeading.tsx`) — renders the eyebrow line, `<h2>`, and animated gold underline. Props: `subtitle`, `light` (white text variant), `center`.
- **`Button`** (`components/ui/Button.tsx`) — renders a `<Link>` when `href` is passed, a `<motion.button>` otherwise. Variants: `filled`, `outline`, `outline-white`.

### Section background rhythm

Sections alternate to create visual breathing room — do not break this pattern when adding new sections:

```
Hero          → image
Vision        → white (#FFFFFF)
Music         → gold-wash (#FDF8EC)
Books         → white (#FFFFFF)
Messages      → cream (#FAF7F0)
Founder       → cream (#FAF7F0)
Testimonials  → gold-wash (#FDF8EC)
Scripture     → gold-warm (#F7E8B0)
Prayer        → cream-warm (#FDF9F3)
Newsletter    → white (#FFFFFF)
```

### Images

Static images live in `public/images/`. Referenced as `/images/filename` in `next/image` `src` props. The hero image filename contains a space (`open doors.jpg`) — keep the path string as-is.
