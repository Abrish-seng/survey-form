import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ThreeDCard({ imageUrl, title, subtitle, badge, children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 150, damping: 20 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12])

  function onPointerMove(e) {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    x.set(px - 0.5)
    y.set(py - 0.5)
  }

  function onPointerLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        className="relative h-72 w-full rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-glow overflow-hidden preserve-3d"
        style={{ rotateX, rotateY }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        whileTap={{ scale: 0.99 }}
      >
        {/* Image layer */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover backface-hidden"
          style={{ transform: 'translateZ(30px)' }}
        />

        {/* Shine */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(600px circle at calc(50% + ' + smoothX.get() * 200 + 'px) calc(50% + ' + smoothY.get() * 200 + 'px), rgba(255,255,255,0.15), transparent 50%)',
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white" style={{ transform: 'translateZ(50px)' }}>
          {badge && (
            <span className="mb-2 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur">
              {badge}
            </span>
          )}
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          {subtitle && <p className="text-sm text-white/80">{subtitle}</p>}
          {children && <div className="mt-2 text-sm text-white/80">{children}</div>}
        </div>
      </motion.div>
    </div>
  )
}