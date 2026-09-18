import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cakes } from '../data/cakes'
import { StrawberrySvg } from '../components/decorative/FloatingElements'

const categories = [
  { id: 'all', label: 'All Cakes' },
  { id: 'bento', label: 'Bento' },
  { id: 'celebration', label: 'Celebration' },
  { id: 'multi-tier', label: 'Multi-Tier' },
  { id: 'special', label: 'Special' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
}

export default function GalleryPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'all'
    ? cakes
    : cakes.filter((c) => c.category === activeFilter)

  const handleLightboxNav = useCallback((dir) => {
    setLightbox((prev) => {
      if (prev === null) return prev
      return (prev + dir + filtered.length) % filtered.length
    })
  }, [filtered.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') handleLightboxNav(-1)
      if (e.key === 'ArrowRight') handleLightboxNav(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, handleLightboxNav])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-cream"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-body font-semibold text-muted-text/50 hover:text-charcoal transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <StrawberrySvg className="w-5 h-5" />
            <span className="text-[10px] sm:text-xs font-body font-semibold tracking-[0.3em] uppercase text-hello-pink/60">
              Our Confections
            </span>
            <StrawberrySvg className="w-5 h-5" />
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal">
            Cake Gallery
          </h1>
          <p className="text-muted-text text-sm sm:text-base mt-3 max-w-md mx-auto">
            Browse our collection of handcrafted artisan cakes. Each one made with love in Dhaka.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-body font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-hello-pink text-white shadow-md shadow-hello-pink/20'
                  : 'bg-white text-muted-text border border-blush-pink hover:border-hello-pink/30 hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-8 pb-16 sm:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={activeFilter}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-16"
            >
              <StrawberrySvg className="w-10 h-10 mx-auto mb-4 opacity-30" />
              <p className="font-display font-bold text-lg text-charcoal mb-2">No cakes found</p>
              <p className="text-muted-text/50 text-sm">Try selecting a different category above.</p>
            </motion.div>
          )}
          {filtered.map((cake, idx) => (
            <motion.div
              key={cake.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              onClick={() => setLightbox(idx)}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              {cake.isBestSeller && (
                <div className="absolute -top-3 -right-1 z-20 select-none pointer-events-none drop-shadow-md w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <img
                    src="/badge-best-seller.webp"
                    alt="Best Selling Badge"
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(255,158,181,0.3)]"
                    loading="lazy"
                  />
                  <span className="relative z-10 text-[8px] sm:text-[9px] font-body font-black tracking-tight uppercase text-white text-center leading-[1.05] px-1 transform -rotate-6">
                    Best<br />Selling
                  </span>
                </div>
              )}

              <div className="aspect-square w-full flex items-center justify-center bg-white rounded-2xl border border-blush-pink/50 group-hover:border-hello-pink/40 shadow-sm group-hover:shadow-md group-hover:shadow-hello-pink/10 transition-all duration-300 overflow-hidden">
                <img
                  src={cake.src}
                  alt={`Hakuna Potata ${cake.name}`}
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.06)] group-hover:drop-shadow-[0_8px_16px_rgba(255,158,181,0.12)] group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-xs font-body font-semibold text-muted-text/60 group-hover:text-charcoal transition-colors text-center">
                {cake.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-sm font-body cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            Close &times;
          </button>

          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between px-2 pb-2">
              <button
                onClick={() => handleLightboxNav(-1)}
                className="text-white/50 hover:text-hello-pink text-sm font-body cursor-pointer px-3 py-1 transition-colors"
                aria-label="Previous cake"
              >
                &larr; Prev
              </button>
              <span className="text-white/30 text-xs font-mono">
                {lightbox + 1} / {filtered.length}
              </span>
              <button
                onClick={() => handleLightboxNav(1)}
                className="text-white/50 hover:text-hello-pink text-sm font-body cursor-pointer px-3 py-1 transition-colors"
                aria-label="Next cake"
              >
                Next &rarr;
              </button>
            </div>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].name}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <p className="text-white/60 text-sm font-body mt-3 text-center">
              {filtered[lightbox].name}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
