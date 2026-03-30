import Link from 'next/link'
import Image from 'next/image'
import { Share2, Camera, Play, Tv } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 mt-16 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          
          {/* Column 1: Logo and About */}
          <div className="flex flex-col gap-4 items-center text-center">
            <Image 
              src="/logo-isotipo.svg"
              alt="Cafequipos Isotipo"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-zinc-600 leading-relaxed text-xs lg:text-sm">
              Contamos con más de 20 años de experiencia nos especializamos en ofrecer equipos de alta calidad y soluciones completas con un servicio Postventa excepcional, protegiendo tu inversión.
            </p>
          </div>

          {/* Column 2: Contactanos */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-zinc-900 text-base">Contactanos</h3>
            <div className="flex flex-col gap-2 text-zinc-600 text-xs">
              <a href="mailto:ventas@cafequipos.com" className="hover:text-primary transition-colors">ventas@cafequipos.com</a>
              <a href="tel:012410230" className="hover:text-primary transition-colors">012410230</a>
              <a href="tel:992586854" className="hover:text-primary transition-colors">992586854</a>
            </div>
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-3 text-zinc-600 font-medium">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/nosotros" className="hover:underline transition-colors decoration-zinc-900 underline-offset-4">Nosotros</Link></li>
              <li><Link href="/productos/categoria/maquinas-cafe-molinos-accesorios" className="hover:text-primary transition-colors">Productos</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contacto" className="hover:underline transition-colors decoration-zinc-900 underline-offset-4">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Social row */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-200 pt-8 pb-12 gap-6">
          <div className="w-full md:w-1/3 flex flex-col gap-2">
             <label className="text-zinc-900 font-medium">Suscríbete a nuestro boletín</label>
             <div className="relative flex">
               <input 
                 type="email" 
                 placeholder="Correo electrónico" 
                 className="w-full border border-zinc-300 py-3 px-4 outline-none focus:border-zinc-500 text-sm"
               />
               <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-primary">
                 →
               </button>
             </div>
          </div>

          <div className="flex gap-4 text-zinc-600">
             <a href="#" className="hover:text-primary transition-colors"><Share2 className="w-4 h-4" /></a>
             <a href="#" className="hover:text-primary transition-colors"><Camera className="w-4 h-4" /></a>
             <a href="#" className="hover:text-primary transition-colors"><Play className="w-4 h-4" /></a>
             <a href="#" className="hover:text-primary transition-colors"><Tv className="w-4 h-4" /></a>{/* Stand-in for Tiktok icon */}
          </div>
        </div>

        {/* Bottom row */}

        <div className="flex justify-between items-center text-xs text-zinc-500 pt-4">
          <p>© 2026, Cafequipos · Política de privacidad</p>
        </div>
      </div>
    </footer>
  )
}

