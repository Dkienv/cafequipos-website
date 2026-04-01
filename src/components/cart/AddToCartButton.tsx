'use client'

import { Product } from '@/lib/products'
import { useCartStore } from '@/lib/state_zustand'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem, openCart } = useCartStore()

  return (
    <button
      onClick={() => {
        addItem(product)
        openCart()
      }}
      className="bg-primary text-zinc-900 text-sm px-4 py-2 hover:brightness-95 transition-all font-medium"
    >
      Añadir al carrito
    </button>
  )
}
