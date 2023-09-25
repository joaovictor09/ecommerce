import { Navbar } from './products/components/navbar'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  )
}
