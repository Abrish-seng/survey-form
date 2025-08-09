import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '../types'

export type CartState = {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  increment: (productId: string) => void
  decrement: (productId: string) => void
  clear: () => void
  totalQuantity: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set(state => {
          const existing = state.items.find(i => i.product.id === product.id)
          if (existing) {
            return {
              items: state.items.map(i =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i,
              ),
            }
          }
          return { items: [...state.items, { product, quantity }] }
        })
      },
      removeItem: productId =>
        set(state => ({ items: state.items.filter(i => i.product.id !== productId) })),
      increment: productId =>
        set(state => ({
          items: state.items.map(i =>
            i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        })),
      decrement: productId =>
        set(state => ({
          items: state.items
            .map(i => (i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i))
            .filter(i => i.quantity > 0),
        })),
      clear: () => set({ items: [] }),
      totalQuantity: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    { name: 'cart-store' },
  ),
)