# United With Heaven

Official website for **United With Heaven**, a prophetic ministry of worship, written revelation, and anointed teaching founded by Imashi Wetakepotha.

Built with Next.js 16, Tailwind CSS v4, and Framer Motion. All content is managed from a single file — no CMS or database required.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Forms | React Hook Form |
| Icons | React Icons |
| Fonts | Cormorant Garamond · Lora · Jost (via `next/font`) |
| Deployment | Vercel |

---

## Getting Started

```bash
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve production build
```

---

## Updating Content

All site content — songs, books, messages, testimonials, weekly scripture, and hero scriptures — lives in one file:

```
content.ts
```

Edit the exported arrays in that file. The site hot-reloads instantly in development. On Vercel, push to `main` to deploy.

**To add a new song:** copy an existing entry in the `songs` array, paste it below, and fill in the details. The first song in the array is always shown as the featured song.

**To update the Word of the Week:** change `wordOfTheWeek.verse` and `wordOfTheWeek.reference`.

---

## Pages

| Route | Description |
|---|---|
| `/` | Full landing page — all sections |
| `/music` | Songs library |
| `/books` | Books with full descriptions |
| `/messages` | Paginated messages with category filter |
| `/about` | About Imashi |
| `/events` | Upcoming events |
| `/prayer` | Dedicated prayer request page |

---

## Prayer Request Form

The form at `/prayer` posts to `app/api/prayer/route.ts`. Currently it logs submissions to the console. To send real emails, wire in a [Resend](https://resend.com) API key:

1. Add `RESEND_API_KEY` and `PRAYER_REQUEST_EMAIL` to your Vercel environment variables
2. Update `app/api/prayer/route.ts` to call the Resend SDK

---

## Images

Place images in `public/images/`. The two key images the site expects:

| File | Used in |
|---|---|
| `public/images/open doors.jpg` | Hero section background |
| `public/images/imashi_portrait.png` | Founder section hover portrait |

If either image is missing, the hero falls back to a gold radial gradient.

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. No environment variables are required for the base site (add `RESEND_API_KEY` when enabling email)
4. Every push to `main` auto-deploys
