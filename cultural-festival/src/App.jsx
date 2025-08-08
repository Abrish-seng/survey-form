import Gallery from './components/Gallery'
import VideoSection from './components/VideoSection'

const photos = [
  {
    title: 'Lantern Parade',
    subtitle: 'Illuminated procession at dusk',
    badge: 'Culture',
    imageUrl:
      'https://images.unsplash.com/photo-1535268647677-300dbf3e7f94?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Folk Dancers',
    subtitle: 'Traditional attire and choreography',
    badge: 'Performance',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Handicrafts Bazaar',
    subtitle: 'Colorful stalls and artisans',
    badge: 'Market',
    imageUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  },
]

const foods = [
  {
    title: 'Festival Feast',
    subtitle: 'Shared platter of regional specialties',
    badge: 'Cuisine',
    imageUrl:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Street Food Sizzle',
    subtitle: 'Grilled skewers fresh off the fire',
    badge: 'Street Food',
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Sweet Offerings',
    subtitle: 'Desserts infused with local flavors',
    badge: 'Dessert',
    imageUrl:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1600&auto=format&fit=crop',
  },
]

const videos = [
  {
    title: 'Opening Drumline',
    subtitle: 'Energy to start the night',
    poster: 'https://images.unsplash.com/photo-1521334726092-b509a19597f8?q=80&w=1600&auto=format&fit=crop',
    src: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
  },
  {
    title: 'Cultural Dance',
    subtitle: 'Grace and rhythm',
    poster: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
    src: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
  },
  {
    title: 'Food Sizzle Reel',
    subtitle: 'Behind the scenes at the stalls',
    poster: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    src: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Cultural Festival Showcase
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Photos, foods, and videos from a vibrant celebration of heritage.
          </p>
        </div>
      </header>

      <Gallery title="Festival Photos" items={photos} />
      <Gallery title="Food Highlights" items={foods} />
      <VideoSection title="Festival Videos" videos={videos} />

      <footer className="mx-auto max-w-7xl px-4 pb-12 text-center text-xs text-white/50">
        Built with React, TailwindCSS and Framer Motion
      </footer>
    </div>
  )
}

export default App
