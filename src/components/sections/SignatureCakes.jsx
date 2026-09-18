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
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <StrawberrySvg className="w-4 h-4" />
            <span className="text-[10px] sm:text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold/50">
              Artisan Confections
            </span>
            <StrawberrySvg className="w-4 h-4" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-champagne">
            Signature Cakes
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
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
              whileHover={{ y: -8, scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              {cake.isBestSeller && (
                <div className="absolute -top-3 -right-1 z-20 select-none pointer-events-none drop-shadow-md w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <img
                    src="/badge-best-seller.webp"
                    alt="Best Selling Badge"
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(200,169,110,0.3)]"
                    loading="lazy"
                  />
                  <span className="relative z-10 text-[8px] sm:text-[9px] font-body font-black tracking-tight uppercase text-deep-espresso text-center leading-[1.05] px-1 transform -rotate-6">
                    Best<br />Selling
                  </span>
                </div>
              )}

              <div className="aspect-square w-full flex items-center justify-center bg-dark-cocoa/40 rounded-2xl border border-gold/5 group-hover:border-gold/20 transition-all duration-300 overflow-hidden">
                <img
                  src={cake.src}
                  alt={`Hakuna Potata ${cake.name}`}
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_12px_24px_rgba(200,169,110,0.15)] group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-xs font-body font-semibold text-muted-cream/60 group-hover:text-champagne transition-colors text-center">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 text-gold border border-gold/25 rounded-full text-sm font-body font-bold tracking-wide hover:bg-gold/20 hover:border-gold/40 active:scale-[0.97] transition-all duration-300"
          >
            View Full Gallery
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
