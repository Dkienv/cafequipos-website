export type Product = {
  id: string
  name: string
  slug: string
  categorySlug: string
  price: number
  description: string
  image: string
  featured?: boolean
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price)
}

export const PRODUCTS: Product[] = [
  // --- coccion-barra-hornos ---
  {
    id: 'krampouz-ctro4aa',
    name: 'Crepera de barra Krampouz CTRO4AA',
    slug: 'krampouz-ctro4aa',
    categorySlug: 'coccion-barra-hornos',
    price: 1850.00,
    description: 'Crepera profesional de doble placa con control termostático independiente. Ideal para barras de café y restaurantes de alto volumen.',
    image: '/images/productos/Aparatos de coccion de barra y hornos/KRAMPOUZ_CTRO4AA_F.png',
    featured: false,
  },
  {
    id: 'plancha-barra-pro-200',
    name: 'Plancha de barra profesional Pro 200',
    slug: 'plancha-barra-pro-200',
    categorySlug: 'coccion-barra-hornos',
    price: 640.00,
    description: 'Plancha de contacto de acero inoxidable con superficie antiadherente. Temperatura uniforme de 50 °C a 300 °C.',
    image: '/images/productos/Aparatos de coccion de barra y hornos/KRAMPOUZ_CTRO4AA_F.png',
    featured: false,
  },
  {
    id: 'horno-convector-bar-30',
    name: 'Horno convector de barra Bar-30',
    slug: 'horno-convector-bar-30',
    categorySlug: 'coccion-barra-hornos',
    price: 2290.00,
    description: 'Horno eléctrico de convección compacto con 6 posiciones y timer digital. Diseñado para producción continua en barras de café.',
    image: '/images/productos/Aparatos de coccion de barra y hornos/KRAMPOUZ_CTRO4AA_F.png',
    featured: false,
  },

  // --- dispesandores-bebidas-cremoladeras-hielo ---
  {
    id: 'iceswan-ani80c',
    name: 'Dispensador de bebidas frías Iceswan ANI80C',
    slug: 'iceswan-ani80c',
    categorySlug: 'dispesandores-bebidas-cremoladeras-hielo',
    price: 1299.00,
    description: 'Dispensador de 3 depósitos de 8 L con agitación continua y refrigeración por compresor. Perfecto para bebidas frías y granizados.',
    image: '/images/productos/Dispensadores de bebidas, cremoladas y hielo/ICESWAN_ANI80C_F.png',
    featured: true,
  },
  {
    id: 'cremoladora-doble-cd2',
    name: 'Cremoladora de doble cuba CD2',
    slug: 'cremoladora-doble-cd2',
    categorySlug: 'dispesandores-bebidas-cremoladeras-hielo',
    price: 980.00,
    description: 'Dos cubas independientes de 10 L con motor de alta durabilidad. Ideal para cremoladas de fruta y slushies.',
    image: '/images/productos/Dispensadores de bebidas, cremoladas y hielo/ICESWAN_ANI80C_F.png',
    featured: false,
  },
  {
    id: 'maquina-hielo-cube-40',
    name: 'Máquina de hielo en cubos Cube-40',
    slug: 'maquina-hielo-cube-40',
    categorySlug: 'dispesandores-bebidas-cremoladeras-hielo',
    price: 1540.00,
    description: 'Producción de 40 kg de hielo en cubos por día. Compresor hermético, depósito de 15 kg y limpieza automática.',
    image: '/images/productos/Dispensadores de bebidas, cremoladas y hielo/ICESWAN_ANI80C_F.png',
    featured: false,
  },

  // --- instrumentos-medicion ---
  {
    id: 'gehaka-g939ip',
    name: "Medidor de humedad G'Inspectra Gehaka G939IP",
    slug: 'gehaka-g939ip',
    categorySlug: 'instrumentos-medicion',
    price: 3527.00,
    description: 'Analizador portátil de humedad y temperatura para más de 80 cultivos. Lectura en 10 segundos con memoria para 500 registros.',
    image: '/images/productos/Instrumentos de medición/GEHAKA_G939IP_F_v2.png',
    featured: true,
  },
  {
    id: 'termometro-digital-pro-t1',
    name: 'Termómetro digital de sonda Pro T1',
    slug: 'termometro-digital-pro-t1',
    categorySlug: 'instrumentos-medicion',
    price: 145.00,
    description: 'Termómetro de respuesta rápida (3 s) con sonda inoxidable de 15 cm. Rango −50 °C a 300 °C con alarma de temperatura.',
    image: '/images/productos/Instrumentos de medición/GEHAKA_G939IP_F_v2.png',
    featured: false,
  },
  {
    id: 'refractometro-brix-rbx',
    name: 'Refractómetro digital Brix RBX',
    slug: 'refractometro-brix-rbx',
    categorySlug: 'instrumentos-medicion',
    price: 310.00,
    description: 'Medición de concentración de azúcar en rango 0–85 °Brix. Compensación automática de temperatura y pantalla retroiluminada.',
    image: '/images/productos/Instrumentos de medición/GEHAKA_G939IP_F_v2.png',
    featured: false,
  },

  // --- licuadoras-comerciales-procesadores-jugos ---
  {
    id: 'santos-62',
    name: 'Licuadora comercial Santos #62',
    slug: 'santos-62',
    categorySlug: 'licuadoras-comerciales-procesadores-jugos',
    price: 799.99,
    description: 'Licuadora de alto rendimiento con jarra de 1.5 L y motor de 2 HP. Silencio máximo gracias a su cubierta acústica integrada.',
    image: '/images/productos/Licuadoras comerciales y procesadores de jugos/SANTOS_62_F_V2.jpg',
    featured: true,
  },
  {
    id: 'extractor-jugos-ej500',
    name: 'Extractor centrífugo de jugos EJ-500',
    slug: 'extractor-jugos-ej500',
    categorySlug: 'licuadoras-comerciales-procesadores-jugos',
    price: 480.00,
    description: 'Extractor de alta velocidad con tamiz de acero inoxidable. Capacidad de 500 L/h ideal para bares y juguerías de alto tráfico.',
    image: '/images/productos/Licuadoras comerciales y procesadores de jugos/SANTOS_62_F_V2.jpg',
    featured: false,
  },
  {
    id: 'procesador-frutas-pf3',
    name: 'Procesador de frutas PF-3',
    slug: 'procesador-frutas-pf3',
    categorySlug: 'licuadoras-comerciales-procesadores-jugos',
    price: 620.00,
    description: 'Procesador multiusos con 3 discos intercambiables para rebanar, rallar y juliana. Motor de 550 W de uso continuo.',
    image: '/images/productos/Licuadoras comerciales y procesadores de jugos/SANTOS_62_F_V2.jpg',
    featured: false,
  },

  // --- maquinas-cafe-molinos-accesorios ---
  {
    id: 'wendougee-mantis-ii',
    name: 'Máquina espresso Wendougee Mantis II',
    slug: 'wendougee-mantis-ii',
    categorySlug: 'maquinas-cafe-molinos-accesorios',
    price: 822.00,
    description: 'Máquina espresso de 2 grupos con caldera E61 de 7 L y sistema PID. Diseño industrial pensado para cafeterías de especialidad.',
    image: '/images/productos/Máquinas de café, molinos y accesorios/Wendougee_Mantis_ii_2000px.jpg',
    featured: true,
  },
  {
    id: 'molino-cafe-flat-60',
    name: 'Molino de café plano Flat-60',
    slug: 'molino-cafe-flat-60',
    categorySlug: 'maquinas-cafe-molinos-accesorios',
    price: 695.00,
    description: 'Molino con muelas planas de 60 mm de acero endurecido. 64 niveles de molienda y dosificador programable en gramos.',
    image: '/images/productos/Máquinas de café, molinos y accesorios/Wendougee_Mantis_ii_2000px.jpg',
    featured: false,
  },
  {
    id: 'kit-barista-pro',
    name: 'Kit de accesorios barista Pro',
    slug: 'kit-barista-pro',
    categorySlug: 'maquinas-cafe-molinos-accesorios',
    price: 175.00,
    description: 'Set completo: tamper 58 mm, distribuidor, puck screen y cepillo de limpieza. Acero inoxidable y madera de haya.',
    image: '/images/productos/Máquinas de café, molinos y accesorios/Wendougee_Mantis_ii_2000px.jpg',
    featured: false,
  },
]
