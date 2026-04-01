import Image from 'next/image'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/categories'
import CarouselBanner from '@/components/home/CarouselBanner'
import { PRODUCTS, formatPrice } from '@/lib/products'
import AddToCartButton from '@/components/cart/AddToCartButton'

const CATEGORY_IMAGES: Record<string, string> = {
  'coccion-barra-hornos': '/images/categorias/coccion-barra-hornos_v2.png',
  'dispesandores-bebidas-cremoladeras-hielo': '/images/categorias/dispesandores-bebidas-cremoladeras-hielo_v2.png',
  'instrumentos-medicion': '/images/categorias/instrumentos-medicion_v2.png',
  'licuadoras-comerciales-procesadores-jugos': '/images/categorias/licuadoras-comerciales-procesadores-jugos_v2.jpg',
  'maquinas-cafe-molinos-accesorios': '/images/categorias/maquinas-cafe-molinos-accesorios_v2.jpg',
}

const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured)

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">

      {/* 1. HERO BANNERS */}
      <section className="relative w-full h-[30vh] min-h-[350px] overflow-hidden group">
        <Image
          src="/images/hero/hero.jpg"
          alt="Coffee making hero"
          fill
          priority
          className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
           <h1 className="sr-only">CaféQuipos - Equipos de alta calidad para café</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* 2. NUESTRAS CATEGORIAS SECTION */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-medium mb-12 tracking-wider text-zinc-900 uppercase relative inline-block">
          Nuestras Categorias
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-1 mx-auto ">
          {CATEGORIES.slice(0, 5).map((category) => (
            <Link
              key={category.slug}
              href={`/productos/categoria/${category.slug}`}
              className="group flex flex-col overflow-hidden h-full"
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={CATEGORY_IMAGES[category.slug]}
                  alt={category.label}
                  fill
                  className="object-cover object-[center_80%] group-hover:scale-110 transition-transform duration-700 ease-out" // -translate-y-5 para que se vea la parte de arriba de la imagen. Update: 80% para que se vea la parte de arriba de la imagen con object-[center_80%]
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-heading font-bold uppercase tracking-widest text-center px-3 leading-tight">
                  {category.label}
                </span>
              </div>
              {/* Yellow strip */}
              <div className="bg-primary px-3 py-3 flex items-center flex-1">
                <span className="text-zinc-900 text-xs font-heading font-medium text-left leading-snug">
                  {category.label} →
                </span>
              </div> 
            </Link>
          ))}
        </div>
      </section>

      {/* 3. PRODUCTOS DESTACADOS SECTION */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-medium mb-12 tracking-wider text-zinc-900 uppercase">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto group">
          {FEATURED_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group/product bg-white"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover/product:scale-110"
                />
              </div>
              <p className="text-sm text-zinc-700 font-medium leading-snug group-hover/product:text-zinc-900 transition-colors">{product.name}</p>
              <p className="text-sm font-bold text-zinc-900">{formatPrice(product.price)}</p>
              <AddToCartButton product={product} />
            </article>
          ))}
        </div>
      </section>

      {/* 4. FULL-WIDTH CTA BANNER & PAGINATION */}
      <CarouselBanner />

      {/* 5. BLOG SECTION */}
      <section className="py-20 px-6 max-w-[1300px] mx-auto w-full mb-12">
        <h2 className="text-2xl md:text-3xl font-heading font-medium mb-16 text-center tracking-wider text-zinc-900 uppercase">
          Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-3 max-w-6xl mx-auto group/blog">
          {/* Article 1 */}
          <article className="flex flex-col h-full bg-primary relative group cursor-pointer transition-all duration-500">
            <div className="relative h-64 md:h-72 w-full overflow-hidden">
              <Image
                src="https://placehold.co/600x600/1c1c1b/ffffff.png?text=BLOG+1"
                alt="Cafequipos: 20 Años"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-8 pb-12 flex-1 flex flex-col items-start text-left bg-primary relative z-10 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-heading font-medium mb-3 text-zinc-900 line-clamp-2">Cafequipos: 20 Años de Aniversario</h3>
              <p className="text-zinc-700 text-[10px] sm:text-xs mb-4 uppercase font-bold tracking-widest">5 de Marzo de 2026</p>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                La empresa no siempre vendió máquinas de café, de hecho, la razón social mantiene el giro de negocio con el que comenzamos: Instrumentos y Sistemas que nació en Cusco como...
              </p>
            </div>
          </article>

          {/* Article 2 */}
          <article className="flex flex-col h-full bg-primary relative group cursor-pointer transition-all duration-500">
            <div className="relative h-64 md:h-72 w-full overflow-hidden">
              <Image
                src="https://placehold.co/600x600/1c1c1b/ffffff.png?text=BLOG+2"
                alt="Emprendimiento Barista Lab"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-8 pb-12 flex-1 flex flex-col items-start text-left bg-primary relative z-10 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-heading font-medium mb-3 text-zinc-900 line-clamp-2">Historias de Emprendimiento: Centro Barista Lab</h3>
              <p className="text-zinc-700 text-[10px] sm:text-xs mb-4 uppercase font-bold tracking-widest">5 de Marzo de 2026</p>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Entrevistamos a Brhayam Quispe y Jeraldine Torres, fundadores de la escuela de barismo Centro Barista Lab y socios de DEKANO — Barista Shop. Quienes nos cuentan un poco más acerca...
              </p>
            </div>
          </article>

          {/* Article 3 */}
          <article className="flex flex-col h-full bg-primary relative group cursor-pointer transition-all duration-500">
            <div className="relative h-64 md:h-72 w-full overflow-hidden">
              <Image
                src="https://placehold.co/600x600/1c1c1b/ffffff.png?text=BLOG+3"
                alt="Campeones de Barismo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-8 pb-12 flex-1 flex flex-col items-start text-left bg-primary relative z-10 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-heading font-medium mb-3 text-zinc-900 line-clamp-2">Campeones de Barismo: Entrevista a Renzo Ruiz</h3>
              <p className="text-zinc-700 text-[10px] sm:text-xs mb-4 uppercase font-bold tracking-widest">5 de Marzo de 2026</p>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Conversamos con Renzo Ruiz; Campeón Nacional de Barismo Perú 2022. Barista, Bartender y Sommelier profesional. Socio de la Tostaduría y Cafetería Mamaquilla, y quién nos representará...
              </p>
            </div>
          </article>
        </div>
      </section>

    </div>
  )
}
