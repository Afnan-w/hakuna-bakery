import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { CherrySvg, StrawberrySvg } from '../decorative/FloatingElements'

export default function ContactBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-8 relative">
      <span className="pointer-events-none absolute -top-3 left-8 sm:left-16 z-10 animate-float text-2xl sm:text-3xl" aria-hidden="true">🧁</span>
      <span className="pointer-events-none absolute -top-1 right-8 sm:right-20 z-10 animate-float-slow text-2xl sm:text-3xl" aria-hidden="true">🍰</span>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-deep-cocoa rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-6 left-8 opacity-20">
          <CherrySvg className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        <div className="absolute bottom-8 right-10 opacity-20">
          <StrawberrySvg className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
        <div className="absolute top-10 right-16 opacity-10">
          <CherrySvg className="w-6 h-6" />
        </div>

        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-[10px] sm:text-xs font-body font-bold tracking-[0.3em] uppercase text-white/40 mb-4"
          >
            Let&apos;s Create Something Sweet
          </motion.span>

          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Chat with us on WhatsApp for quick orders, or use our custom cake builder
            to design every detail of your perfect cake.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/8801339656675"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-body font-bold tracking-wide hover:bg-[#20BD5C] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-[#25D366]/25"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href="tel:+8801339656675"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 text-white border border-white/20 rounded-full text-sm font-body font-bold tracking-wide hover:bg-white/20 active:scale-[0.97] transition-all duration-300"
            >
              <Phone size={16} />
              Call Us
            </a>
            <Link
              to="/order"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-deep-cocoa rounded-full text-sm font-body font-bold tracking-wide hover:bg-white/90 active:scale-[0.97] transition-all duration-300 shadow-lg"
            >
              Order Online
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
