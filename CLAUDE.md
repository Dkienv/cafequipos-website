# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

**cafequipos** — an e-commerce site built with Next.js 16.2.1, React 19, TypeScript, and Tailwind CSS v4.

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```

No test suite is configured yet.

## Architecture

Uses the **App Router** (`src/app/`). There is no Pages Router in this project.

### Routes

| Path | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/productos/categoria/[slug]` | `src/app/productos/categoria/[slug]/page.tsx` |
| `/productos/[slug]` | `src/app/productos/[slug]/page.tsx` (Phase 4 placeholder) |
| `/checkout` | `src/app/checkout/page.tsx` |
| `/servicios` | `src/app/servicios/page.tsx` |
| `/nosotros` | `src/app/nosotros/page.tsx` |
| `/contacto` | `src/app/contacto/page.tsx` |
| `POST /api/checkout` | `src/app/api/checkout/route.ts` |

### Components

- `src/components/layout/Navbar.tsx` — Main navigation using `lucide-react` and dropdown; renders `<CartDrawer />` and wires the cart icon to the Zustand store.
- `src/components/layout/Footer.tsx` — Global footer
- `src/components/productos/ProductCard.tsx` — Product card used in the category listing page; renders `<AddToCartButton>`.
- `src/components/cart/CartDrawer.tsx` — Slide-in cart panel (client component); reads from `useCartStore`.
- `src/components/cart/AddToCartButton.tsx` — Client component button; calls `addItem` + `openCart` from `useCartStore`.
- *Note*: Homepage sections (Hero, Categories Grid, Blog) are currently built directly within `src/app/page.tsx`.

### Lib / integrations

- `src/lib/categories.ts` — Contains the `CATEGORIES` array for the Navbar dropdown.
- `src/lib/products.ts` — `Product` type, `PRODUCTS` mock array (15 items across 5 categories), and helpers: `getProductsByCategory`, `getProductBySlug`, `formatPrice`.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) (stub)
- `src/lib/state_zustand.ts` — Zustand cart store (`useCartStore`). Exports `CartItem` type. Actions: `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `openCart`, `closeCart`. Derived: `totalItems()`, `totalPrice()`.
- `src/lib/cloudinary.ts` — empty; intended for Cloudinary code
- `src/lib/supabase.ts` — empty; intended for Supabase client
- `src/lib/resend.ts` — empty; intended for Resend email client

### State management

Cart state lives in `src/lib/state_zustand.ts` via Zustand (`useCartStore`). The store manages the full cart lifecycle including drawer visibility. `CartDrawer` is rendered inside `Navbar` so it is always mounted and the store controls its open/close state.

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. **There is no `tailwind.config.js`** — configuration is done in CSS. 
Custom brand colors (`--color-primary: #F7CD46` and `--color-foreground: #333431`) are defined inside `@theme inline` in `src/app/globals.css`. Typography uses `Outfit` (Heading/Display) and `Inter` (Body).
Utility composition uses `cn()` from `src/lib/utils.ts`. Icons are handled via `lucide-react`. The aesthetic emphasizes polished motion/transitions, unexpected spatial compositions, and striking large typographic choices.

### next.config.ts

Allowed image hostnames (`images.remotePatterns`):
- `placehold.co` — placeholder images used in dev/prototype pages
- `images.unsplash.com` — sample images for high-fidelity mockups

### Considerations

- Dont run the command: `npm run build` in every change, I will run it when I need it, but if you need it for fixing or testing, run it.
- Update CLAUDE.md if it is a big change or that touches the architecture of the project.
