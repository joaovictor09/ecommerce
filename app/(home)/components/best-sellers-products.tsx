import { ProductCard } from './product-card'

export function BestSellerProducts() {
  return (
    <section className="flex flex-col gap-12 py-20">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl text-muted-foreground">Featured Products</span>
        <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
        <span className="text-muted-foreground">
          Problems trying to resolve the conflict between
        </span>
      </div>

      <div className="grid grid-cols-1 items-center justify-between gap-10 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}
