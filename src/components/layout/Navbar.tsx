'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { CATEGORIES } from '@/lib/categories'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  const closeAll = () => {
    setMobileOpen(false)
    setMobileProductsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 shadow-sm h-16">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-cafequipos.svg"
            alt="Cafequipos Logo"
            width={160}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-900">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/nosotros" className="hover:text-primary transition-colors">
            Nosotros
          </Link>

          {/* Productos dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              onBlur={() => setTimeout(() => setOpen(false), 200)}
              className="flex items-center gap-1 hover:text-primary transition-colors py-2"
            >
              Productos
              <svg
                className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-foreground border border-zinc-800 rounded shadow-xl py-2 flex flex-col z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/productos/categoria/${cat.slug}`}
                    className="block px-4 py-2 text-white text-xs hover:bg-zinc-800 transition-colors border-b border-zinc-800 last:border-0"
                    onClick={() => setOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/servicios" className="hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="/contacto" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 text-zinc-800">
          <button className="hover:text-primary transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-primary transition-colors" aria-label="User Account">
            <User className="w-5 h-5" />
          </button>
          <button className="hover:text-primary transition-colors relative" aria-label="Shopping Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-black">
              0
            </span>
          </button>
          {/* HAMBURGER — mobile only */}
          <button
            className="md:hidden hover:text-primary transition-colors"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white border-t border-zinc-200 shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)]">
          <div className="flex flex-col divide-y divide-zinc-100 px-6 py-2">

            <Link
              href="/"
              className="py-4 text-sm font-medium text-zinc-900 hover:text-primary transition-colors"
              onClick={closeAll}
            >
              Home
            </Link>

            <Link
              href="/nosotros"
              className="py-4 text-sm font-medium text-zinc-900 hover:text-primary transition-colors"
              onClick={closeAll}
            >
              Nosotros
            </Link>

            {/* Productos accordion */}
            <div className="flex flex-col">
              <button
                className="flex items-center justify-between py-4 text-sm font-medium text-zinc-900 hover:text-primary transition-colors w-full text-left"
                onClick={() => setMobileProductsOpen((v) => !v)}
              >
                Productos
                <svg
                  className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="flex flex-col bg-foreground rounded mb-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/productos/categoria/${cat.slug}`}
                      className="block px-4 py-3 text-white text-xs hover:bg-zinc-800 transition-colors border-b border-zinc-800 last:border-0"
                      onClick={closeAll}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/servicios"
              className="py-4 text-sm font-medium text-zinc-900 hover:text-primary transition-colors"
              onClick={closeAll}
            >
              Servicios
            </Link>

            <Link
              href="/contacto"
              className="py-4 text-sm font-medium text-zinc-900 hover:text-primary transition-colors"
              onClick={closeAll}
            >
              Contacto
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}
