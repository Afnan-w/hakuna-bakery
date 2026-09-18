import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CherrySvg, ButtercreamFlowerSvg } from '../decorative/FloatingElements'

const heroWords = ['Artisan', 'Bakery', '&', 'Custom', 'Cake', 'Studio']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 80, damping: 12, duration: 0.7 },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -50])
  const y2 = useTransform(scrollY, [0, 600], [0, -100])

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -left-32 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full bg-strawberry/20 blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] rounded-full bg-lilac/20 blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-pistachio/20 blur-[100px] animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 lg:py-28 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-strawberry/15 mb-8 shadow-sm"
            >
              <CherrySvg className="w-4 h-4" />
              <span className="text-[11px] font-body font-bold tracking-[0.2em] uppercase text-cocoa/70">
                Handcrafted in Dhaka
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="overflow-hidden"
            >
              <h1 className="font-display font-bold text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.04] tracking-tight text-chocolate perspective-[800px]">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className={`inline-block mr-[0.3em] ${
                      word === '&' ? 'text-candy italic font-normal' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-7 text-cocoa/65 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Bespoke Korean Bento cakes, Vintage Lambeth piping, and celebration
              multi-tier cake towers — every bite handcrafted with love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/order"
                className="btn-shine inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-chocolate to-cocoa text-white rounded-full text-sm font-body font-bold tracking-wide hover:from-deep-cocoa hover:to-chocolate active:scale-[0.97] transition-all duration-300 shadow-xl shadow-chocolate/25 hover:shadow-2xl hover:shadow-chocolate/35"
              >
                Order Your Cake
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/60 backdrop-blur-sm text-chocolate border border-chocolate/10 rounded-full text-sm font-body font-bold tracking-wide hover:bg-white hover:border-chocolate/20 active:scale-[0.97] transition-all duration-300 shadow-sm"
              >
                View Gallery
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="flex items-start gap-5 sm:gap-8 justify-center">
              <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className="w-[45%] max-w-[260px]"
              >
                <div className="relative p-3 arch-shape bg-gradient-to-b from-strawberry/25 to-lilac/25 shadow-[0_24px_60px_rgba(255,140,168,0.18)]">
                  <div className="p-1.5 arch-shape bg-white">
                    <div className="arch-shape overflow-hidden aspect-[4/5] bg-butter-light">
                      <img
                        src="/hakuna-cookies.webp"
                        alt="Hakuna Potata Artisan Cookies"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-[10px] sm:text-xs font-body font-bold tracking-[0.2em] uppercase text-cocoa/40">
                  Handcrafted Cookies
                </p>
              </motion.div>

              <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                className="w-[45%] max-w-[260px] mt-10 sm:mt-16"
              >
                <div className="relative p-3 arch-shape bg-gradient-to-b from-pistachio/25 to-butter/25 shadow-[0_24px_60px_rgba(168,220,187,0.18)]">
                  <div className="p-1.5 arch-shape bg-white">
                    <div className="arch-shape overflow-hidden aspect-[4/5] bg-butter-light">
                      <img
                        src="/hakuna-bakery.webp"
                        alt="Hakuna Potata Artisan Viennoiserie"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-[10px] sm:text-xs font-body font-bold tracking-[0.2em] uppercase text-cocoa/40">
                  Fresh Danishes & Bakes
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
              className="absolute -top-6 -right-2 sm:right-6"
            >
              <ButtercreamFlowerSvg className="w-14 h-14 sm:w-20 sm:h-20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}