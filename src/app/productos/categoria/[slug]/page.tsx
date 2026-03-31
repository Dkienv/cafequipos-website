import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/categories'
import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/productos/ProductCard'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const category = CATEGORIES.find((c) => c.slug === slug)
  return {
    title: category ? `${category.label} | CaféQuipos` : 'Categoría no encontrada | CaféQuipos',
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = CATEGORIES.find((c) => c.slug === slug)

  if (!category) notFound()

  const products = getProductsByCategory(slug)

  return (
    <div className="pt-8 pb-24 max-w-7xl mx-auto px-4 md:px-6 w-full">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-zinc-400 mb-8">
        <Link href="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <ChevronRight size={12} />
        <span className="text-zinc-400">Productos</span>
        <ChevronRight size={12} />
        <span className="text-zinc-700">{category.label}</span>
      </nav>

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-heading font-medium tracking-wider text-zinc-900 uppercase mb-2">
        {category.label}
      </h1>
      <p className="text-sm text-zinc-400 mb-10">
        {products.length} {products.length === 1 ? 'producto' : 'productos'}
      </p>

      {/* Grid */}
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-zinc-400">
          <p className="text-base">No hay productos en esta categoría aún.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  )
}
