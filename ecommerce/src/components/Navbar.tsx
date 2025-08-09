import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Store } from 'lucide-react'
import { useCartStore } from '../store/cart'
import { Container } from './Container'
import { motion } from 'framer-motion'

export function Navbar() {
  const totalQty = useCartStore(s => s.totalQuantity())

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Store className="h-6 w-6 text-blue-600" />
          <span>Ecom</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900')}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900')}>Products</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link to="/cart" className="relative inline-flex items-center">
              <ShoppingCart className="h-6 w-6" />
              {totalQty > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white">
                  {totalQty}
                </span>
              )}
            </Link>
          </motion.div>
        </div>
      </Container>
    </header>
  )
}