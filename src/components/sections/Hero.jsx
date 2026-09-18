import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CherrySvg, ButtercreamFlowerSvg, SprinklesSvg } from '../decorative/FloatingElements'

const heroWords = ['Artisan', 'Bakery', '&', 'Custom', 'Cake', 'Studio']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 100, damping: 14, duration: 0.6 },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-6 left-4 sm:top-8 sm:left-6 lg:left-12 animate-float text-2xl sm:text-4xl">🍓</span>
        <span className="absolute top-20 right-4 sm:top-24 sm:right-10 animate-float-slow text-2xl sm:text-3xl">🧁</span>
        <span className="absolute bottom-12 left-1/4 hidden lg:block animate-float-slow text-2xl sm:text-3xl">✨</span>
        <span className="absolute bottom-24 right-1/4 hidden sm:block animate-wiggle text-xl sm:text-2xl">🍪</span>
        <span className="absolute top-1/2 left-8 hidden xl:block animate-wiggle text-xl sm:text-2xl">🎂</span>
        <SprinklesSvg className="absolute bottom-6 left-8 w-8 h-8 animate-float-slow opacity-80" />
        <SprinklesSvg className="absolute top-8 right-24 w-10 h-10 animate-float opacity-80" />
        <SprinklesSvg className="absolute bottom-12 right-16 hidden sm:block w-9 h-9 animate-wiggle opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-butter-light border border-butter mb-6"
            >
              <CherrySvg className="w-4 h-4" />
              <span className="text-[11px] font-body font-bold tracking-[0.2em] uppercase text-cocoa/70">
                Dhaka, Bangladesh
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="overflow-hidden"
            >
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-chocolate perspective-[800px]">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className={`inline-block mr-[0.3em] ${
                      word === '&' ? 'text-strawberry italic font-normal' : ''
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
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 text-cocoa/70 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Bespoke Korean Bento cakes, Vintage Lambeth piping, and celebration
              multi-tier cake towers handcrafted in Dhaka.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/order"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-chocolate text-white rounded-full text-sm font-body font-bold tracking-wide hover:bg-deep-cocoa active:scale-[0.97] transition-all duration-300 shadow-lg shadow-chocolate/20 hover:shadow-xl hover:shadow-chocolate/30"
              >
                Order Your Cake
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-chocolate border-2 border-chocolate/20 rounded-full text-sm font-body font-bold tracking-wide hover:border-chocolate/40 hover:bg-butter-light active:scale-[0.97] transition-all duration-300"
              >
                View Gallery
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="flex items-start gap-4 sm:gap-6 justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
                className="w-[45%] max-w-[240px]"
              >
                <div className="relative p-2 sm:p-2.5 arch-shape border-[1.5px] border-chocolate/80 bg-white shadow-[0_20px_50px_rgba(61,35,20,0.08)]">
                  <div className="p-1 sm:p-1.5 arch-shape border border-butter bg-ivory">
                    <div className="arch-shape overflow-hidden aspect-[4/5] bg-butter-light">
                      <img
                        src="/hakuna-cookies.webp"
                        alt="Hakuna Potata Artisan Cookies"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center text-[10px] sm:text-xs font-body font-bold tracking-[0.2em] uppercase text-cocoa/40">
                  Handcrafted Cookies
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
                className="w-[45%] max-w-[240px] mt-8 sm:mt-12"
              >
                <div className="relative p-2 sm:p-2.5 arch-shape border-[1.5px] border-chocolate/80 bg-white shadow-[0_20px_50px_rgba(61,35,20,0.08)]">
                  <div className="p-1 sm:p-1.5 arch-shape border border-butter bg-ivory">
                    <div className="arch-shape overflow-hidden aspect-[4/5] bg-butter-light">
                      <img
                        src="/hakuna-bakery.webp"
                        alt="Hakuna Potata Artisan Viennoiserie"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center text-[10px] sm:text-xs font-body font-bold tracking-[0.2em] uppercase text-cocoa/40">
                  Fresh Danishes & Bakes
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 -right-2 sm:right-8"
            >
              <ButtercreamFlowerSvg className="w-12 h-12 sm:w-16 sm:h-16" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
