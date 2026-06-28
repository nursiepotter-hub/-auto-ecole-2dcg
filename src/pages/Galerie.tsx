import { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const images = [
  '/images/galerie-1.jpg', '/images/galerie-2.jpg', '/images/galerie-3.jpg',
  '/images/galerie-4.jpg', '/images/galerie-5.jpg',
]

export default function Galerie() {
  const [full, setFull] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-ecole-red/10 text-ecole-red px-4 py-2 rounded-full text-sm font-semibold mb-4">📸 Galerie</span>
          <h1 className="section-title">Notre auto-école en images</h1>
          <p className="section-subtitle">Découvrez nos installations et nos véhicules</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto space-y-4">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setFull(i)}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group relative animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img src={src} alt={`2DCG Auto-École ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                  <Maximize2 size={18} className="text-gray-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {full !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setFull(null)}>
          <button onClick={() => setFull(full - 1)} disabled={full === 0} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white disabled:opacity-30 transition-all">
            <ChevronLeft size={24} />
          </button>
          <img src={images[full]} alt="" className="max-w-full max-h-[90vh] rounded-2xl" onClick={e => e.stopPropagation()} />
          <button onClick={() => setFull(full + 1)} disabled={full === images.length - 1} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white disabled:opacity-30 transition-all">
            <ChevronRight size={24} />
          </button>
          <button onClick={() => setFull(null)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-all">
            ✕
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {full + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}
