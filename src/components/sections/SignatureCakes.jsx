import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cakes } from '../../data/cakes'
import { StrawberrySvg } from '../decorative/FloatingElements'

const previewCakes = cakes.filter((c) => c.id <= 10)

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
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

export default function SignatureCakes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-8 bg-vanilla/50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <StrawberrySvg className="w-4 h-4" />
            <span className="text-[10px] sm:text-xs font-body font-bold tracking-[0.3em] uppercase text-cocoa/40">
              Artisan Confections
            </span>
            <StrawberrySvg className="w-4 h-4" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-chocolate">
            Signature Cakes
          </h2>
          <div className="w-12 h-[2px] bg-strawberry mx-auto mt-3 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
        >
          {previewCakes.map((cake) => (
            <motion.div
              key={cake.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              {cake.isBestSeller && (
                <div className="absolute -top-3 -right-1 z-20 select-none pointer-events-none drop-shadow-md w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <img
                    src="/badge-best-seller.webp"
                    alt="Best Selling Badge"
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(212,134,140,0.4)]"
                    loading="lazy"
                  />
                  <span className="relative z-10 text-[8px] sm:text-[9px] font-body font-black tracking-tight uppercase text-white text-center leading-[1.05] px-1 transform -rotate-6">
                    Best<br />Selling
                  </span>
                </div>
              )}

              <div className="aspect-square w-full flex items-center justify-center bg-transparent rounded-2xl">
                <img
                  src={cake.src}
                  alt={`Hakuna Potata ${cake.name}`}
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(61,35,20,0.1)] group-hover:drop-shadow-[0_12px_24px_rgba(61,35,20,0.18)] group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-xs font-body font-semibold text-cocoa/60 group-hover:text-chocolate transition-colors text-center">
                {cake.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-chocolate text-white rounded-full text-sm font-body font-bold tracking-wide hover:bg-deep-cocoa active:scale-[0.97] transition-all duration-300 shadow-lg shadow-chocolate/15"
          >
            View Full Gallery
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
