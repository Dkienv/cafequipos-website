'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/state_zustand'
import { formatPrice } from '@/lib/products'

const FIELDS = [
  { name: 'nombre', label: 'Nombre completo', type: 'text' },
  { name: 'correo', label: 'Correo electrónico', type: 'email' },
  { name: 'telefono', label: 'Teléfono', type: 'tel' },
  { name: 'direccion', label: 'Dirección', type: 'text' },
  { name: 'ciudad', label: 'Ciudad', type: 'text' },
] as const

type FieldName = (typeof FIELDS)[number]['name']

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore()
  const [form, setForm] = useState<Record<FieldName | 'notas', string>>({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    notas: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [orderId, setOrderId] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, shipping: form }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setOrderId(data.orderId)
      clearCart()
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error al procesar el pedido.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center pt-16">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-zinc-900">¡Pedido confirmado!</h1>
        <p className="text-zinc-400 text-sm">Orden #{orderId}</p>
        <p className="text-zinc-500 text-sm max-w-sm">
          Nos pondremos en contacto contigo pronto para coordinar el envío y el pago.
        </p>
        <Link
          href="/"
          className="bg-primary text-zinc-900 text-sm px-6 py-3 font-medium hover:brightness-95 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center pt-16">
        <p className="text-zinc-500 text-sm">No hay productos en tu carrito.</p>
        <Link
          href="/"
          className="bg-primary text-zinc-900 text-sm px-6 py-3 font-medium hover:brightness-95 transition-all"
        >
          Ver productos
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-heading text-2xl font-bold text-zinc-900 mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT — Shipping form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="font-heading text-base font-semibold text-zinc-700 uppercase tracking-wide">
              Datos de envío
            </h2>

            {FIELDS.map((field) => (
              <div key={field.name} className="flex flex-col gap-1">
                <label htmlFor={field.name} className="text-xs font-medium text-zinc-600">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={handleChange}
                  className="border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary transition-colors rounded-none"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1">
              <label htmlFor="notas" className="text-xs font-medium text-zinc-600">
                Notas <span className="text-zinc-400">(opcional)</span>
              </label>
              <textarea
                id="notas"
                name="notas"
                rows={3}
                value={form.notas}
                onChange={handleChange}
                className="border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary transition-colors resize-none rounded-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-xs">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-primary text-zinc-900 text-sm font-medium py-3 hover:brightness-95 transition-all disabled:opacity-60 mt-2"
            >
              {status === 'loading' ? 'Procesando...' : 'Confirmar pedido'}
            </button>
          </form>

          {/* RIGHT — Order summary */}
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-base font-semibold text-zinc-700 uppercase tracking-wide">
              Resumen del pedido
            </h2>
            <ul className="divide-y divide-zinc-100">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex justify-between items-start py-3 gap-4 text-sm">
                  <span className="text-zinc-700 flex-1 leading-snug">
                    {product.name}{' '}
                    <span className="text-zinc-400 text-xs">× {quantity}</span>
                  </span>
                  <span className="font-medium text-zinc-900 flex-shrink-0">
                    {formatPrice(product.price * quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-zinc-200 pt-4 flex flex-col gap-2 text-sm">
              <div className="flex justify-between text-zinc-600">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-xs">
                <span>Envío</span>
                <span>A calcular</span>
              </div>
              <div className="flex justify-between font-bold text-zinc-900 pt-2 border-t border-zinc-100 mt-1 text-base">
                <span>Total</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
