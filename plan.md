# Implementation Plan: cafequipos

## Phase 1: Layout & Pages — COMPLETED ✅

All items below have been implemented.

- `src/app/layout.tsx` — Navbar + `<main>` wrapper + Footer
- `src/app/globals.css` — Brand colors (`--color-primary: #F7CD46`, `--color-foreground: #333431`), Outfit/Inter fonts
- `src/components/layout/Navbar.tsx` — Logo, nav links, Productos dropdown, mobile hamburger, Search/User/Cart icons
- `src/components/layout/Footer.tsx` — 4-column layout (About, Contact, Links, Newsletter), social icons, copyright
- `src/app/page.tsx` — Categories grid, hero banner, featured products grid, blog cards
- `src/app/nosotros/page.tsx` — Hero heading, paragraphs, blockquotes, FAQ accordions (`<details>`/`<summary>`)
- `src/app/servicios/page.tsx` — Hero section + 4 alternating rows (Mantenimiento, Instalaciones, Repuestos, Asistencia Remota)
- `src/app/contacto/page.tsx` — Form with Nombre, Correo, Teléfono, Comentario fields and yellow Enviar button

---

## Phase 2: Products Catalog

### Goal
Build a real category/product listing page so the Navbar dropdown links actually work.

### [MODIFY] `src/app/productos/[slug]/page.tsx`
Currently a stub showing only `"Productos — {slug}"`. Needs:
- A grid of product cards filtered by the `slug` category.
- Each card: product image, name, price, "Añadir al carrito" button.
- A category heading derived from the slug (e.g. `oficina` → "Oficina").
- Empty-state message when no products match the category.

### [NEW] `src/lib/products.ts`
- Define a `Product` type: `{ id, name, slug, category, price, image, description }`.
- Export a `PRODUCTS` array with mock data (10–20 items across the existing categories).

### [MODIFY] `src/lib/categories.ts`
- Verify category slugs match the `PRODUCTS` data and the Navbar dropdown links.

---

## Phase 3: Cart & Checkout

### Goal
Make the cart icon functional and allow users to complete a purchase flow.

### [MODIFY] `src/lib/state_zustand.ts`
Currently a minimal stub. Needs:
- Typed `CartItem`: `{ product: Product; quantity: number }`.
- Actions: `addItem`, `removeItem`, `updateQuantity`, `clearCart`.
- Derived: `totalItems`, `totalPrice`.

### [NEW] `src/components/cart/CartDrawer.tsx`
- Slide-in panel triggered by the cart icon in the Navbar.
- Lists items with image, name, quantity controls, and line price.
- Shows subtotal and a "Proceder al pago" button linking to `/checkout`.

### [NEW] `src/app/checkout/page.tsx`
- Order summary on the right.
- Shipping/billing form on the left.
- "Confirmar pedido" button that calls `POST /api/checkout`.

### [MODIFY] `src/app/api/checkout/route.ts`
- Validate the cart payload.
- (Initially) return a mock success response; later integrate a payment gateway.

---

## Phase 4: Backend Integration

### Goal
Replace stubs and placeholder data with real services.

### Supabase — `src/lib/supabase.ts`
- Initialize the Supabase client.
- Create a `products` table with the schema matching `Product` in Phase 2.
- Replace the mock `PRODUCTS` array with a `getProducts(category?)` query.
- Create an `orders` table and write to it from the checkout route.

### Resend — `src/lib/resend.ts`
- Initialize the Resend client.
- Send a confirmation email from `POST /api/checkout` when an order is placed.
- Send the contact form data from `contacto/page.tsx` via `POST /api/contact`.

### [NEW] `src/app/api/contact/route.ts`
- Accept `{ nombre, correo, telefono, comentario }`.
- Forward to the business email via Resend.

### Cloudinary — `src/lib/cloudinary.ts`
- Set up the Cloudinary SDK for image URL generation.
- Replace all `placehold.co` and `images.unsplash.com` URLs with real uploaded assets.

---

## Phase 5: Blog

### Goal
Turn the static blog cards on the homepage into a real navigable blog.

### [NEW] `src/lib/posts.ts`
- Define a `Post` type: `{ id, slug, title, date, excerpt, content, image }`.
- Export a `POSTS` array (or fetch from Supabase/a CMS later).

### [NEW] `src/app/blog/page.tsx`
- Grid of blog post cards (title, date, excerpt, image).

### [NEW] `src/app/blog/[slug]/page.tsx`
- Full post layout: hero image, date, title, rich-text body.

### [MODIFY] `src/app/page.tsx`
- Update blog card links to point to `/blog/[slug]` instead of `#`.
