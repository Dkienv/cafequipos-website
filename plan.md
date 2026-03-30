# Implementation Plan: Layout & Pages

This plan covers the implementation of the global layout (Navbar, Footer) and the initial pages (Home, Nosotros, Servicios, Contacto) based on the provided reference screenshots. 

## User Review Required
Please review the proposed structure below to confirm the approach for Navbar, Footer, and the page structural layouts. If you agree, I will proceed with the execution.

## Proposed Changes

### 1. Global Layout & Styling
We need to set up the foundational colors and global layout wrapper to include our new components.
#### [MODIFY] `src/app/layout.tsx`
- Add `<Navbar />` at the top.
- Add `<main className="flex-grow"> {children} </main>` to wrap pages.
- Add `<Footer />` at the bottom.
#### [MODIFY] `src/app/globals.css`
- Define the primary brand yellow color (`--color-brand-yellow` perhaps `#FCD34D` or `#E5B83B`).
- Set base font families and background colors.

---

### 2. Layout Components

#### [MODIFY] `src/components/layout/Navbar.tsx`
- **Structure**: Rebuild to match the screenshot. 
  - **Left**: Typographical "CAFEQUIPOS" logo.
  - **Center**: Links (`Home`, `Nosotros`, `Productos`, `Servicios`, `Blog`, `Contact`). 
  - **Products Dropdown**: Dark gray absolute positioned dropdown featuring categories ("Oficina - Máquinas de café", etc.).
  - **Right**: Icons (Search, User, ShoppingBag) from `lucide-react`.

#### [MODIFY] `src/components/layout/Footer.tsx`
- **Structure**: 
  - **Column 1**: Circular Cafequipos logo with coffee bean and "Contamos con más de 20 años..." paragraph.
  - **Column 2**: "Contactanos" with email and two phone numbers.
  - **Column 3**: Vertical Navigation Links.
  - **Column 4**: Newsletter subscription input with arrow button.
  - **Bottom row**: Copyright text and Social icons (Facebook, Instagram, Youtube, Tiktok).

---

### 3. Core Pages

#### [MODIFY] `src/app/page.tsx` (Home)
- **Categories Grid**: "NUESTRAS CATEGORIAS" section with 5 image cards (Negocio, Oficina, Instrumentos, Café, Equipos).
- **Banner**: Full-width image banner with overlay text "Contamos con más de 20 años...".
- **Blog Section**: 3 blog cards with yellow backgrounds, dates, and preview text.

#### [NEW] `src/app/nosotros/page.tsx` (Nosotros)
- **Top Section**: Hero text ("Más de 20 años impulsando...").
- **Content**: Intro paragraphs and stylized blockquotes.
- **FAQ Component**: "PREGUNTAS FRECUENTES" section using accordions for questions like "¿Ofrecen asesoría para elegir la máquina ideal?".

#### [NEW] `src/app/servicios/page.tsx` (Servicios)
- **Hero**: Dark image background with title "Servicios" and subtitle.
- **Alternating Sections**:
  - Mantenimiento (White background, left image, right text).
  - Instalaciones (Yellow background, left text, right image).
  - Repuestos y Suministros (White background, left image, right text).
  - Asistencia Remota (Yellow background, left text, right image).

#### [NEW] `src/app/contacto/page.tsx` (Contacto)
- **Header**: Title "Contacto".
- **Form**: Grid inputs for `Nombre`, `Correo electrónico *`, `Número de teléfono`, and a `textarea` for `Comentario`.
- **Button**: Yellow "Enviar" button.

---

## Technical Details (Mock Data & Images)
- **Images**: I will use generic coffee machine image placeholders from `placehold.co` or high-quality royalty-free placeholder image URLs (like Unsplash) matching the context (espresso machines, coffee beans, tools).
- **Icons**: Will be implemented using `lucide-react`.
- **Interactivity**: The Navbar dropdown will use basic React state. The FAQ accordion on the "Nosotros" page will use a simple state-toggled expanding block.

## Verification Plan
After writing the code:
1. Ensure the development server renders the pages correctly.
2. Verify visual alignment against the provided screenshots.
3. Validate interactive elements (dropdowns, accordions).
