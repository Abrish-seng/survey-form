import type { Product } from '../types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with 30h battery life.',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1518443855757-4c8393563103?q=80&w=1200&auto=format&fit=crop',
    category: 'Audio',
    rating: 4.6,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracking, heart-rate monitor, and GPS.',
    price: 149.0,
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop',
    category: 'Wearables',
    rating: 4.4,
  },
  {
    id: '3',
    name: 'DSLR Camera',
    description: '24MP DSLR with kit lens for stunning photos and videos.',
    price: 549.0,
    imageUrl: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1200&auto=format&fit=crop',
    category: 'Photography',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Gaming Keyboard',
    description: 'Mechanical keyboard with RGB backlight and hot-swappable keys.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1595044426074-4219fa82f22c?q=80&w=1200&auto=format&fit=crop',
    category: 'Gaming',
    rating: 4.5,
  },
  {
    id: '5',
    name: '4K Monitor',
    description: '27-inch 4K UHD monitor with HDR and 99% sRGB.',
    price: 329.99,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Displays',
    rating: 4.3,
  },
]