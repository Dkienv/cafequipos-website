// Phase 3 placeholder — Product Detail Page
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <div className="pt-12 pb-24 min-h-screen max-w-7xl mx-auto px-4">
      <p className="text-zinc-500 text-sm">Producto: {slug} — Próximamente</p>
    </div>
  )
}
