import { Container } from '../components/Container'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export function Products() {
  return (
    <Container className="py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Container>
  )
}