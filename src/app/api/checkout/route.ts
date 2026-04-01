import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

interface ShippingInfo {
  nombre: string
  correo: string
  telefono: string
  direccion: string
  ciudad: string
  notas?: string
}

interface CartItemPayload {
  product: { id: string; name: string; price: number }
  quantity: number
}

const REQUIRED_FIELDS: (keyof ShippingInfo)[] = [
  'nombre',
  'correo',
  'telefono',
  'direccion',
  'ciudad',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?[\d\s\-()\u2012\u2013]{7,}$/

const FIELD_LABELS: Record<string, string> = {
  nombre: 'Nombre completo',
  correo: 'Correo electrónico',
  telefono: 'Teléfono',
  direccion: 'Dirección',
  ciudad: 'Ciudad',
}

export async function POST(request: Request) {
  const body = await request.json()
  const { items, shipping } = body as {
    items: CartItemPayload[]
    shipping: ShippingInfo
  }

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: 'El carrito está vacío.' }, { status: 400 })
  }

  for (const field of REQUIRED_FIELDS) {
    if (!shipping?.[field]?.trim()) {
      return NextResponse.json(
        { error: `${FIELD_LABELS[field]} es requerido.` },
        { status: 400 }
      )
    }
  }

  if (!EMAIL_RE.test(shipping.correo.trim())) {
    return NextResponse.json(
      { error: 'El correo electrónico no es válido.' },
      { status: 400 }
    )
  }

  if (!PHONE_RE.test(shipping.telefono.trim())) {
    return NextResponse.json(
      { error: 'El teléfono no es válido (mínimo 7 dígitos).' },
      { status: 400 }
    )
  }

  const orderId = randomUUID()
  return NextResponse.json({ success: true, orderId })
}
