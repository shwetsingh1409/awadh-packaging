# Awadh Packaging — Corporate Website

Premium corporate website for **Awadh Packaging**, manufacturers of corrugated boxes and paper-based packaging solutions (Ayodhya, Uttar Pradesh).

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Shadcn-style UI primitives (Radix + CVA)
- Framer Motion + GSAP
- React Hook Form + Zod
- EmailJS (optional) with mailto fallback
- Swiper.js
- LightGallery
- React Icons / Lucide

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (SEO, sitemap) |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

If EmailJS vars are empty, contact/quote forms open the user’s email client via `mailto:packagingawadh@gmail.com`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Folder Structure

```
src/
  app/                  # Routes (App Router)
  components/
    forms/              # Contact & quote forms
    gallery/            # Lightbox gallery
    home/               # Home-specific sections
    layout/             # Header, footer, floating actions
    manufacturing/      # Process timeline (GSAP)
    shared/             # Reusable section UI
    ui/                 # Button, Input, Label, Textarea
  lib/                  # Company data, products, utils
public/                 # Static assets
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/products` | Products |
| `/manufacturing` | Manufacturing Process |
| `/infrastructure` | Infrastructure |
| `/industries` | Industries We Serve |
| `/gallery` | Gallery |
| `/quality` | Quality Assurance |
| `/contact` | Contact |
| `/quote` | Request a Quote |

## SEO

- Metadata per page
- `sitemap.xml` via `src/app/sitemap.ts`
- `robots.txt` via `src/app/robots.ts`
- Organization + ManufacturingBusiness JSON-LD in root layout

## Brand Assets

Replace placeholder logo in `src/components/layout/logo.tsx` and gallery SVGs in `src/lib/gallery.ts` with official logo and factory photography under `public/images/`.

## Vercel Deployment

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Set environment variables from `.env.example`.
4. Deploy (framework preset: Next.js).
5. Attach your custom domain and update `NEXT_PUBLIC_SITE_URL`.

```bash
npm i -g vercel
vercel
```

## Maintenance

- Keep product specs and capacity figures updated in `src/lib/company.ts` and `src/lib/products.ts`.
- Swap gallery placeholders when media is ready.
- Add certifications to `/quality` when documents are available.
- Configure EmailJS (or migrate to Resend API route) for production form delivery.
- Re-run Lighthouse after real images are added; compress with WebP/AVIF.

## Company Snapshot

- **Email:** packagingawadh@gmail.com  
- **Phone / WhatsApp:** +91 6390066000  
- **GSTIN:** 09AFUPS8508N1Z9  
- **Established:** 2026  
- **Address:** Industrial Estate, Laxman Puri Marg, Gaddopur, Ayodhya – 224001, UP
