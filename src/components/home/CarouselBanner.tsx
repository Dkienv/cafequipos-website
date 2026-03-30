'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const CAROUSEL_IMAGES = [
  { src: '/images/carousel/img1.jpg', alt: 'Cafequipos - imagen 1' },
  { src: '/images/carousel/img2.jpg', alt: 'Cafequipos - imagen 2' },
]

export default function CarouselBanner() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = CAROUSEL_IMAGES.length

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, 5000)
  }

  useEffect(() => {
    if (!paused) startTimer()
    else if (timerRef.current) clearInterval(timerRef.current)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, total])

  const go = (index: number) => {
    setCurrent((index + total) % total)
    if (!paused) startTimer()
  }

  const prev = () => go(current - 1)
  const next = () => go(current + 1)

  return (
    <>
      {/* CTA BANNER */}
      <section className="w-full relative py-24 bg-zinc-900">
        <div className="absolute inset-0 overflow-hidden">
          {CAROUSEL_IMAGES.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover object-[center_60%] transition-opacity duration-700 ${
                i === current ? 'opacity-50' : 'opacity-0'
              }`}
              priority={i === 0}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-heading font-medium leading-[1.6] tracking-wide">
            Contamos con más de 20 años de experiencia nos especializamos en ofrecer equipos de alta calidad y soluciones completas con un servicio Postventa excepcional, protegiendo tu inversión.
          </h2>
        </div>
      </section>

      {/* PAGINATION DOTS */}
      <div className="flex justify-center items-center gap-4 py-8 bg-white border-b border-zinc-100">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="text-zinc-400 hover:text-primary transition-colors hover:-translate-x-1 transform duration-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full border transition-colors duration-300 ${
              i === current
                ? 'bg-zinc-800 border-zinc-800'
                : 'bg-transparent border-zinc-400 hover:bg-zinc-400'
            }`}
          />
        ))}

        <button
          onClick={next}
          aria-label="Siguiente"
          className="text-zinc-400 hover:text-primary transition-colors hover:translate-x-1 transform duration-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="w-px h-4 bg-zinc-300 mx-2" />

        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Reanudar' : 'Pausar'}
          className="text-zinc-400 hover:text-zinc-800 transition-colors flex gap-0.5"
        >
          {paused ? (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <>
              <div className="w-0.5 h-3 bg-current rounded-sm" />
              <div className="w-0.5 h-3 bg-current rounded-sm" />
            </>
          )}
        </button>
      </div>
    </>
  )
}
