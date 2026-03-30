'use client'

export default function Contacto() {
  return (
    <div className="flex flex-col flex-1 bg-white items-center pb-32">
      
      {/* HEADER */}
      <div className="w-full max-w-4xl px-6 pt-20 mb-12">
        <h1 className="text-4xl text-zinc-900 font-medium tracking-wide">Contacto</h1>
      </div>

      {/* FORM SECTION */}
      <main className="w-full max-w-4xl px-6">
        <form 
          className="flex flex-col gap-6 w-full" 
          onSubmit={(e) => { e.preventDefault(); alert("Form submitted (mock)"); }}
        >
          {/* Top Row: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col">
              <input
                type="text"
                id="nombre"
                placeholder="Nombre"
                className="w-full py-3 px-4 rounded-sm outline-none border border-zinc-400 focus:border-zinc-700 text-sm font-light placeholder:text-zinc-500 bg-transparent transition-colors"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                id="correo"
                required
                placeholder="Correo electrónico *"
                className="w-full py-3 px-4 rounded-sm outline-none border border-zinc-400 focus:border-zinc-700 text-sm font-light placeholder:text-zinc-500 bg-transparent transition-colors"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <input
              type="tel"
              id="telefono"
              placeholder="Número de teléfono"
              className="w-full py-3 px-4 rounded-sm outline-none border border-zinc-400 focus:border-zinc-700 text-sm font-light placeholder:text-zinc-500 bg-transparent transition-colors"
            />
          </div>

          {/* Comment */}
          <div className="flex flex-col">
            <textarea
              id="comentario"
              rows={4}
              placeholder="Comentario"
              className="w-full py-3 px-4 rounded-sm outline-none border border-zinc-400 focus:border-zinc-700 text-sm font-light placeholder:text-zinc-500 bg-transparent transition-colors resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-2">
            <button
              type="submit"
              className="px-10 py-3 rounded-sm bg-primary text-zinc-900 font-semibold text-sm hover:brightness-95 transition-all shadow-sm max-w-max"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>

    </div>
  )
}
