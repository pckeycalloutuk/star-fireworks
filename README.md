# Starfall Pyrotechnics — Fireworks Display Company Website

A complete, production-ready, mobile-first website for a professional fireworks &
drone display company, built with **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS** and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Tech stack

- **Next.js 14** App Router, fully static where possible
- **TypeScript** (strict)
- **Tailwind CSS** dark night-sky design system (gold/ember accents)
- **Framer Motion** scroll reveals, staggered grids, hero animation
- **React Hook Form + Zod** for all forms (client + server validation)
- **lucide-react** icons, **next/font** (Anton + Inter), **next/image** everywhere

## Project structure

```
src/
  app/            # routes (App Router) + api/ route handlers, sitemap.ts, robots.ts
  components/     # ui/, layout/, forms/, blog/, legal/ — reusable components
  config/         # site.ts (brand single source of truth), nav.ts, images.ts
  content/        # services, reviews, faqs, blog posts (data)
  lib/            # seo.ts (metadata), schema.tsx (JSON-LD), fonts.ts
  styles/         # globals.css
public/           # llms.txt, favicon
```

## Editing the brand

All brand details (name, phone, email, address, URLs, hours, social) live in
**`src/config/site.ts`** — update once and it flows through every page, the
footer, schema, sitemap and `llms.txt`.

## Features

- 30+ fully-written pages incl. displays hub + 7 service pages, drone shows,
  filterable portfolio, weddings & packages, about/team/safety, shop, reviews,
  FAQs, careers, a multi-step quote builder, contact, blog (6 articles) and legal pages
- Sticky glass header with mega-menu, full-screen mobile menu, persistent mobile
  action bar (Call · WhatsApp · Quote)
- SEO: per-page metadata, canonical + OG/Twitter, JSON-LD (Organization,
  LocalBusiness, Service, FAQ, Article, Breadcrumb), `sitemap.xml`, `robots.txt`
  (AI crawlers allowed), `llms.txt`
- Accessibility: single H1 per page, landmarks, focus states, `prefers-reduced-motion`
- Forms post to `/api/quote` and `/api/contact` (Zod-validated, honeypot;
  wire up an email provider where marked `// TODO: connect email provider`)

## Forms / email

`/api/quote` and `/api/contact` validate server-side and log the payload. To send
real emails, add a provider (e.g. Resend) at the `// TODO: connect email provider`
markers in `src/app/api/*/route.ts`.
