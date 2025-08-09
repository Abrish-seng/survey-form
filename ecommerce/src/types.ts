export type Product = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category?: string
  rating?: number
}

export type CartItem = {
  product: Product
  quantity: number
}