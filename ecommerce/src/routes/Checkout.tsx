import { Container } from '../components/Container'
import { useCartStore } from '../store/cart'

export function Checkout() {
  const { items, totalPrice, clear } = useCartStore()
  const total = totalPrice()

  const handlePlaceOrder = () => {
    clear()
    alert('Order placed!')
  }

  return (
    <Container className="py-10">
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-lg border bg-white p-6">
            <h2 className="text-xl font-semibold">Shipping details</h2>
            <form className="grid gap-4">
              <input className="rounded-md border p-2" placeholder="Full name" />
              <input className="rounded-md border p-2" placeholder="Address" />
              <div className="grid grid-cols-2 gap-4">
                <input className="rounded-md border p-2" placeholder="City" />
                <input className="rounded-md border p-2" placeholder="Postal code" />
              </div>
              <input className="rounded-md border p-2" placeholder="Country" />
            </form>
          </div>
          <div className="space-y-4 rounded-lg border bg-white p-6 h-fit">
            <h2 className="text-xl font-semibold">Order summary</h2>
            <ul className="space-y-2 text-sm">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center justify-between">
                  <span>{product.name} × {quantity}</span>
                  <span>${(product.price * quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t pt-2 font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button onClick={handlePlaceOrder} className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Place order</button>
          </div>
        </div>
      )}
    </Container>
  )
}