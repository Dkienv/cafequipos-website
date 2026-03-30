import Image from 'next/image'
import Link from 'next/link'

export default function Servicios() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[400px] bg-zinc-900 flex flex-col items-center justify-center overflow-hidden">
        <Image 
          src="/images/servicios/hero.jpg"
          alt="Servicios Hero Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl pt-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">Servicios</h1>
          <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed">
            Soporte y servicio técnico en todo el Perú. Mantén tu negocio en perfecto funcionamiento con nuestros servicios especializados.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="w-full flex flex-col">
        
        {/* ROW 1: MANTENIMIENTO (Image Left, Text Right | White BG) */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
          <div className="relative h-64 md:h-auto min-h-[350px]">
            <Image 
              src="/images/servicios/mantenimiento.jpg" 
              alt="Mantenimiento" 
              fill 
              className="object-cover object-[center_5%]"  /* Ajusta el valor de -20px para subir o bajar la imagen */
            />
          </div>
          <div className="flex items-center justify-center p-12 lg:p-24 bg-white">
            <div className="flex flex-col items-start gap-6 max-w-md w-full">
              <h2 className="text-3xl font-medium text-zinc-900 tracking-wide">MANTENIMIENTO</h2>
              <p className="text-zinc-600 font-light text-[15px] leading-relaxed">
                Realizamos mantenimientos preventivos o correctivos para asegurar la continuidad de tus operaciones.
              </p>
              <Link 
                href="/contacto" 
                className="mt-2 border border-zinc-300 py-3 px-8 text-sm text-zinc-700 font-medium hover:bg-zinc-50 transition-colors"
              >
                Más información
              </Link>
            </div>
          </div>
        </div>

        {/* ROW 2: INSTALACIONES (Text Left, Image Right | Yellow BG) */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-primary">
          <div className="flex items-center justify-center p-12 lg:p-24 bg-primary order-2 md:order-1">
            <div className="flex flex-col items-start gap-6 max-w-md w-full">
              <h2 className="text-3xl font-medium text-zinc-900 tracking-wide">INSTALACIONES</h2>
              <p className="text-zinc-800 font-medium text-[15px] leading-relaxed">
                Activación de máquinas ajustándonos a tus horarios y condiciones disponibles.
              </p>
              <Link 
                href="/contacto" 
                className="mt-2 bg-white py-3 px-8 text-sm text-zinc-900 font-medium hover:bg-zinc-50 transition-colors shadow-sm"
              >
                Más información
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-auto min-h-[350px] order-1 md:order-2">
            <Image 
              src="/images/servicios/instalaciones-de-maquinas.jpg" 
              alt="Instalaciones" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* ROW 3: REPUESTOS Y SUMINISTROS (Image Left, Text Right | White BG) */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
          <div className="relative h-64 md:h-auto min-h-[350px]">
            <Image 
              src="/images/servicios/repuestos-suministros.jpg" 
              alt="Repuestos y Suministros" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center p-12 lg:p-24 bg-white">
            <div className="flex flex-col items-start gap-6 max-w-md w-full">
              <h2 className="text-3xl font-medium text-zinc-900 tracking-wide">REPUESTOS Y SUMINISTROS</h2>
              <p className="text-zinc-600 font-light text-[15px] leading-relaxed">
                Contamos con un amplio stock repuestos para atención de servicios multimarca.
              </p>
              <Link 
                href="/contacto" 
                className="mt-2 border border-zinc-300 py-3 px-8 text-sm text-zinc-700 font-medium hover:bg-zinc-50 transition-colors"
              >
                Más información
              </Link>
            </div>
          </div>
        </div>

        {/* ROW 4: ASISTENCIA REMOTA (Text Left, Image Right | Yellow BG) */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-primary">
          <div className="flex items-center justify-center p-12 lg:p-24 bg-primary order-2 md:order-1">
            <div className="flex flex-col items-start gap-6 max-w-md w-full">
              <h2 className="text-3xl font-medium text-zinc-900 tracking-wide">ASISTENCIA REMOTA</h2>
              <p className="text-zinc-800 font-medium text-[15px] leading-relaxed">
                Atendemos consultas a través de comunicación remota para darte soluciones inmediatas.
              </p>
              <Link 
                href="/contacto" 
                className="mt-2 bg-white py-3 px-8 text-sm text-zinc-900 font-medium hover:bg-zinc-50 transition-colors shadow-sm"
              >
                Más información
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-auto min-h-[350px] order-1 md:order-2">
            <Image 
              src="/images/servicios/asistencia-remota.jpg" 
              alt="Asistencia Remota" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

      </section>
    </div>
  )
}
