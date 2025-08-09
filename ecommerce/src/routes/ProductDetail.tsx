import { useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { products } from '../data/products'
import { useMemo, useState } from 'react'
import { useCartStore } from '../store/cart'
import { motion } from 'framer-motion'

export function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(() => products.find(p => p.id === id), [id])
  const addItem = useCartStore(s => s.addItem)
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <Container className="py-16">
        <p className="text-gray-600">Product not found.</p>
      </Container>
    )
  }

  return (
    <Container className="py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          src={product.imageUrl}
          alt={product.name}
          className="aspect-[4/3] w-full rounded-lg object-cover shadow"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-semibold text-blue-600">${product.price.toFixed(2)}</div>

          <div className="flex items-center gap-4 pt-2">
            <div className="inline-flex items-center rounded-md border">
              <button className="px-3 py-1 hover:bg-gray-100" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span className="min-w-10 px-3 text-center tabular-nums">{qty}</span>
              <button className="px-3 py-1 hover:bg-gray-100" onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <button
              onClick={() => addItem(product, qty)}
              className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}