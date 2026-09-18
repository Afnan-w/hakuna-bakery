import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ButtercreamFlowerSvg, StrawberrySvg } from '../decorative/FloatingElements'

const heroWords = ['Artisan', 'Bakery', '&', 'Custom', 'Cake', 'Studio']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 80, damping: 12, duration: 0.6 },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 400], [0, -30])
  const y2 = useTransform(scrollY, [0, 400], [0, -60])

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -left-24 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-hello-pink/8 blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-blush-pink/10 blur-[80px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-blush-pink mb-5 shadow-sm"
            >
              <span className="text-hello-pink text-sm">&#10022;</span>
              <span className="text-[10px] sm:text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-hello-pink/80">
                Handcrafted in Dhaka
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="overflow-hidden"
            >
              <h1 className="font-display font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.08] tracking-tight text-charcoal perspective-[800px]">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className={`inline-block mr-[0.3em] ${
                      word === '&' ? 'text-hello-pink italic text-[0.85em]' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-4 text-muted-text text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Bespoke Korean Bento cakes, Vintage Lambeth piping, and celebration
              multi-tier cake towers — every bite handcrafted with love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <Link
                to="/order"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-hello-pink to-deep-rose text-white rounded-full text-sm font-body font-bold tracking-wide hover:from-deep-rose hover:to-deep-rose active:scale-[0.97] transition-all duration-300 shadow-xl shadow-hello-pink/25 hover:shadow-2xl hover:shadow-deep-rose/30"
              >
                Order Your Cake
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-charcoal border border-blush-pink rounded-full text-sm font-body font-bold tracking-wide hover:bg-soft-pink hover:border-hello-pink/40 active:scale-[0.97] transition-all duration-300 shadow-sm"
              >
                View Gallery
              </Link>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <div className="flex items-start gap-4 sm:gap-6 justify-center">
              <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                className="w-[42%] max-w-[220px]"
              >
                <div className="relative p-2.5 arch-shape bg-gradient-to-b from-hello-pink/20 to-blush-pink/20 shadow-[0_20px_50px_rgba(255,158,181,0.12)]">
                  <div className="p-1.5 arch-shape bg-white">
                    <div className="arch-shape overflow-hidden aspect-[4/5] bg-soft-pink">
                      <img
                        src="/hakuna-cookies.webp"
                        alt="Hakuna Potata Artisan Cookies"
                        className="w-full h-full object-cover hero-img-zoom"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center text-[9px] sm:text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-muted-text/60">
                  Handcrafted Cookies
                </p>
              </motion.div>

              <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                className="w-[42%] max-w-[220px] mt-8 sm:mt-12"
              >
                <div className="relative p-2.5 arch-shape bg-gradient-to-b from-blush-pink/25 to-hot-pink/10 shadow-[0_20px_50px_rgba(255,158,181,0.1)]">
                  <div className="p-1.5 arch-shape bg-white">
                    <div className="arch-shape overflow-hidden aspect-[4/5] bg-soft-pink">
                      <img
                        src="/hakuna-bakery.webp"
                        alt="Hakuna Potata Artisan Viennoiserie"
                        className="w-full h-full object-cover hero-img-zoom"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center text-[9px] sm:text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-muted-text/60">
                  Fresh Danishes & Bakes
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.4, type: 'spring' }}
              className="absolute -top-4 right-0 sm:right-4"
            >
              <ButtercreamFlowerSvg className="w-10 h-10 sm:w-16 sm:h-16" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.4, type: 'spring' }}
              className="absolute bottom-4 -left-2 sm:left-4"
            >
              <StrawberrySvg className="w-8 h-8 sm:w-12 sm:h-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
