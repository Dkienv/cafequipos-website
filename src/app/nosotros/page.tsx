import Image from 'next/image'

export default function Nosotros() {
  return (
    <div className="flex flex-col w-full bg-white pb-32">
      <main className="container mx-auto max-w-3xl px-6 pt-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center text-zinc-900 leading-tight">
          Más de 20 años impulsando
          <br />
          la cultura del café en el Perú
        </h1>

        <div className="flex flex-col gap-8 text-black font-normal text-[15px] leading-[1.8] text-left w-full">
          <p>
            En Café quipos hemos acompañado el crecimiento de cafeterías, restaurantes y negocios en todo el país, brindando soluciones profesionales en maquinaria, equipamiento y asesoría técnica.
          </p>
          <p>
            Nuestra historia nace de una pasión compartida: ofrecer herramientas confiables para quienes viven el café como una experiencia, no solo como una bebida.
          </p>

          <blockquote className="pl-6 border-l-4 border-zinc-200 italic text-zinc-600 font-serif my-2 text-lg">
            "El café une, inspira y transforma. Por eso cada máquina, cada capacitación y cada cliente forman parte de una misma comunidad: la que impulsa el desarrollo del café peruano."
          </blockquote>

          <p>
            Nos distinguimos por integrar tecnología, servicio y conocimiento especializado, conectando a nuestros clientes con las marcas más reconocidas del mundo y asegurando soporte técnico permanente en cada etapa de su operación.
          </p>

          <blockquote className="pl-6 border-l-4 border-zinc-200 italic text-zinc-600 font-serif my-2 text-lg">
            "No vendemos solo equipos, construimos relaciones duraderas. Nuestro compromiso es acompañarte desde la elección de tu máquina hasta la optimización de tu negocio día a día."
          </blockquote>

          <p>
            Hoy, seguimos fortaleciendo la cadena del café con un enfoque humano, sostenible y orientado al éxito de cada emprendedor que confía en nosotros.
          </p>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className="w-full mt-24">
          <h2 className="text-2xl font-semibold text-center mb-10 text-zinc-900 uppercase tracking-widest">
            Preguntas Frecuentes
          </h2>
          
          <div className="flex flex-col gap-0 border-t border-zinc-200">
            {/* Native HTML5 Accordion using details/summary */}
            <details className="group border-b border-zinc-200 py-4 cursor-pointer">
              <summary className="font-medium text-zinc-900 list-none flex justify-between items-center transition-colors hover:text-primary">
                <span className="flex items-center gap-2">
                  <span className="text-zinc-400">☑</span>
                  ¿Ofrecen asesoría para elegir la máquina ideal?
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-zinc-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-zinc-600 text-sm pl-6">
                Sí, contamos con un equipo especializado que te guiará para encontrar la máquina que mejor se adapte a tu tipo de negocio y volumen de ventas.
              </p>
            </details>

            <details className="group border-b border-zinc-200 py-4 cursor-pointer">
              <summary className="font-medium text-zinc-900 list-none flex justify-between items-center transition-colors hover:text-primary">
                <span className="flex items-center gap-2">
                  <span className="text-zinc-400">☑</span>
                  ¿Realizan instalación y mantenimiento de los equipos?
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-zinc-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-zinc-600 text-sm pl-6">
                Ofrecemos instalación profesional y planes de mantenimiento preventivo y correctivo a nivel nacional con repuestos originales.
              </p>
            </details>

            <details className="group border-b border-zinc-200 py-4 cursor-pointer">
              <summary className="font-medium text-zinc-900 list-none flex justify-between items-center transition-colors hover:text-primary">
                <span className="flex items-center gap-2">
                  <span className="text-zinc-400">☑</span>
                  ¿Qué marcas trabajan?
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-zinc-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-zinc-600 text-sm pl-6">
                Representamos oficialmente a las mejores marcas italianas e internacionales en maquinaria y accesorios para baristas comerciales e industriales.
              </p>
            </details>

            <details className="group border-b border-zinc-200 py-4 cursor-pointer">
              <summary className="font-medium text-zinc-900 list-none flex justify-between items-center transition-colors hover:text-primary">
                <span className="flex items-center gap-2">
                  <span className="text-zinc-400">☑</span>
                  ¿Puedo comprar repuestos o accesorios por separado?
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-zinc-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-zinc-600 text-sm pl-6">
                ¡Claro! En nuestra tienda online y física podrás encontrar una amplia gama de repuestos originales, herramientas de barista, filtros, entre otros insumos.
              </p>
            </details>
          </div>
        </div>
      </main>
    </div>
  )
}
