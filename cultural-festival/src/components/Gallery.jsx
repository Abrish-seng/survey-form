import { motion } from 'framer-motion'
import ThreeDCard from './ThreeDCard'

export default function Gallery({ title, items = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-sm text-white/60">Curated highlights from the festival</p>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <ThreeDCard
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
              badge={item.badge}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}