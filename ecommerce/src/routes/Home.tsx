import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <Container className="py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Discover products you’ll love
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg text-gray-600">
                Quality gadgets and accessories at great prices.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <Link to="/products" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-700">
                  Shop now
                </Link>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <img className="mx-auto w-full max-w-lg rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" alt="Hero" />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Featured products</h2>
            <Link to="/products" className="text-blue-600 hover:underline">View all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}