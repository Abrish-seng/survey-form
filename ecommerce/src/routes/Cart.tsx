import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { useCartStore } from '../store/cart'

export function Cart() {
  const { items, increment, decrement, removeItem, totalPrice } = useCartStore()

  const total = totalPrice()

  return (
    <Container className="py-10">
      <h1 className="mb-6 text-3xl font-bold">Your cart</h1>
      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed p-10 text-center text-gray-600">
          Your cart is empty. <Link className="text-blue-600 underline" to="/products">Browse products</Link>.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-[1fr_350px]">
          <ul className="space-y-4">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex items-center gap-4 rounded-lg border bg-white p-4">
                <img src={product.imageUrl} alt={product.name} className="h-24 w-24 rounded object-cover" />
                <div className="flex-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                  <div className="mt-2 inline-flex items-center rounded-md border">
                    <button className="px-3 py-1 hover:bg-gray-100" onClick={() => decrement(product.id)}>−</button>
                    <span className="min-w-10 px-3 text-center tabular-nums">{quantity}</span>
                    <button className="px-3 py-1 hover:bg-gray-100" onClick={() => increment(product.id)}>+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-semibold text-blue-600">${(product.price * quantity).toFixed(2)}</span>
                  <button onClick={() => removeItem(product.id)} className="text-sm text-red-600 hover:underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <aside className="space-y-4 rounded-lg border bg-white p-6 h-fit">
            <h2 className="text-xl font-semibold">Order summary</h2>
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="text-xs text-gray-500">Shipping and taxes calculated at checkout.</div>
            <Link to="/checkout" className="block rounded-md bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700">Proceed to checkout</Link>
          </aside>
        </div>
      )}
    </Container>
  )
}