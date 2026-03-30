export default async function ProductosPage(props: PageProps<'/productos/[slug]'>) {
  const { slug } = await props.params
  return (
    <div className="pt-24 min-h-screen container mx-auto px-4">
      Productos — {slug}
    </div>
  )
}
