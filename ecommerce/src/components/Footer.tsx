import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 text-sm text-gray-600">
      <Container className="flex items-center justify-between">
        <p>© {new Date().getFullYear()} Ecom. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, and Framer Motion</p>
      </Container>
    </footer>
  )
}