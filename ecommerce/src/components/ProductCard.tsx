import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { useCartStore } from '../store/cart'

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore(s => s.addItem)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
    >
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 font-semibold text-gray-900">{product.name}</h3>
          <span className="shrink-0 text-blue-600">${product.price.toFixed(2)}</span>
        </div>
        <p className="line-clamp-2 text-sm text-gray-600">{product.description}</p>
        <div className="pt-2">
          <button
            onClick={() => addItem(product, 1)}
            className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}