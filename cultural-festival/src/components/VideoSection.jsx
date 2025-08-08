import { motion } from 'framer-motion'

export default function VideoSection({ title, videos = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-sm text-white/60">Short clips from performances and moments</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, idx) => (
          <motion.div
            key={video.title + idx}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-glow"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <video
                className="h-full w-full object-cover"
                src={video.src}
                poster={video.poster}
                controls
                preload="metadata"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-white">{video.title}</h3>
              {video.subtitle && (
                <p className="text-sm text-white/70">{video.subtitle}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}