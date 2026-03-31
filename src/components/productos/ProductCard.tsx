import Image from 'next/image'
import { Product, formatPrice } from '@/lib/products'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="border border-zinc-100 hover:shadow-md transition-shadow flex flex-col">
      <div className="relative aspect-square bg-zinc-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-heading font-medium text-zinc-900 line-clamp-2 text-sm leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-500 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-auto pt-3">
          <span className="font-bold text-zinc-900 text-sm">{formatPrice(product.price)}</span>
          <button className="bg-primary text-zinc-900 text-sm px-4 py-2 hover:brightness-95 transition-all font-medium">
            Ver producto
          </button>
        </div>
      </div>
    </article>
  )
}
