'use client'

import Image from 'next/image'
import Link from 'next/link'
import { X, Trash2 } from 'lucide-react'
import { useCartStore } from '@/lib/state_zustand'
import { formatPrice } from '@/lib/products'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCartStore()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
          <h2 className="font-heading text-lg font-semibold text-zinc-900">Tu carrito</h2>
          <button
            onClick={closeCart}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items list or empty state */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-zinc-500 text-sm">Tu carrito está vacío.</p>
            <Link
              href="/productos/categoria/maquinas-cafe-molinos-accesorios"
              onClick={closeCart}
              className="bg-primary text-zinc-900 text-sm px-6 py-2 font-medium hover:brightness-95 transition-all"
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto divide-y divide-zinc-100 px-6">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-4 py-4">
                <div className="relative w-16 h-16 flex-shrink-0 bg-zinc-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1 min-w-0">
                  <p className="text-xs font-medium text-zinc-900 line-clamp-2 leading-snug">
                    {product.name}
                  </p>
                  <p className="text-xs text-zinc-400">{formatPrice(product.price)} c/u</p>
                  <div className="flex items-center justify-between mt-auto">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-zinc-200">
                      <button
                        className="w-7 h-7 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 transition-colors"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Reducir cantidad"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-xs font-medium text-zinc-900">
                        {quantity}
                      </span>
                      <button
                        className="w-7 h-7 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 transition-colors"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-zinc-900">
                        {formatPrice(product.price * quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-zinc-400 hover:text-red-500 transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-zinc-200 px-6 py-4 flex flex-col gap-4">
            <div className="flex justify-between text-sm font-medium text-zinc-900">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice())}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full bg-primary text-zinc-900 text-sm font-medium py-3 text-center hover:brightness-95 transition-all block"
            >
              Proceder al pago
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
