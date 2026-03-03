# Sharde Williams — Luxury Personal Brand & Ecommerce

A high-end, black + gold luxury ecommerce website for **Sharde Williams** — beauty, curvy-style fashion, and fitness-lifestyle.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFeeTheDeveloper%2FDeezys_demo-site)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif) + Inter (sans) via `next/font`
- **Deployment**: Vercel (zero-config)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── page.tsx              # Homepage (hero, featured, brand story, newsletter)
├── shop/page.tsx         # Shop with category filters + external storefronts
├── product/[slug]/       # Dynamic product detail pages
├── cart/page.tsx          # Shopping cart
├── checkout/page.tsx      # Checkout (placeholder)
├── about/page.tsx         # About Sharde
├── work-with-me/page.tsx  # Brand collaborations
├── contact/page.tsx       # Contact form
├── layout.tsx             # Root layout (fonts, metadata, providers)
└── globals.css            # Tailwind + custom luxury utility classes

components/
├── Navbar.tsx             # Fixed header with logo + mobile menu
├── Footer.tsx             # Footer with socials + newsletter
├── HeroSplash.tsx         # Full-screen hero
├── SplashScreen.tsx       # Opening logo splash screen
├── ProductCard.tsx        # Product card component
├── ProductGrid.tsx        # Filterable product grid
├── FeaturedCollection.tsx # Featured products carousel
├── BrandStory.tsx         # Brand story section
├── NewsletterSection.tsx  # Email signup
└── ExternalShopSection.tsx # ShopMy / LTK / TruFusion links

lib/
├── products.ts            # Mock product data + helpers
└── cart-context.tsx       # Cart state (React Context)
```

## Deploy to Vercel

**One-click:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFeeTheDeveloper%2FDeezys_demo-site)

**Or manually:**

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Click **Deploy** — no configuration needed

Vercel auto-detects Next.js. Build command (`next build`) and output directory are handled automatically.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## License

Private project — all rights reserved.
