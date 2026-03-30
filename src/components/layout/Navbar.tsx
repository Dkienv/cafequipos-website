'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { CATEGORIES } from '@/lib/categories'
import { Search, User, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
        </div>
      </div>
    </nav>
  )
}
