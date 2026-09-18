import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "The Korean Bento cake was the cutest thing ever! My daughter's face lit up. The chocolate flavor was divine.",
    name: "Farhana R.",
    context: "Birthday Order",
  },
  {
    quote: "Absolutely stunning Lambeth piping on our wedding cake. It looked like a piece of art. Guests couldn't stop taking photos!",
    name: "Tasnim & Arif",
    context: "Wedding Tower",
  },
  {
    quote: "Best eggless cake I've ever had. The pistachio rose flavor is something else. They never compromise on taste.",
    name: "Nusrat J.",
    context: "Eggless Celebration",
  },
  {
    quote: "Ordered a last-minute custom cake and they delivered perfection. The salted caramel filling was chef's kiss!",
    name: "Sabrina M.",
    context: "Anniversary Cake",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-hello-pink/5 blur-3xl animate-blob" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-hot-pink/4 blur-3xl animate-blob" style={{ animationDelay: '4s' }} aria-hidden="true" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-body font-semibold tracking-[0.3em] uppercase text-hello-pink/60">
            Love Notes
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-charcoal mt-2">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-hello-pink to-transparent mx-auto mt-3" />
        </motion.div>

        <div
          className="relative min-h-[200px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: current === i ? 1 : 0,
                y: current === i ? 0 : 20,
                scale: current === i ? 1 : 0.95,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              style={{ pointerEvents: current === i ? 'auto' : 'none' }}
            >
              <span className="text-hello-pink/25 text-5xl font-display leading-none mb-4">&ldquo;</span>
              <p className="font-display italic text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed max-w-2xl">
                {t.quote}
              </p>
              <div className="mt-6 flex flex-col items-center">
                <span className="font-body font-bold text-sm text-hello-pink">{t.name}</span>
                <span className="text-[11px] font-body text-muted-text/60 mt-0.5">{t.context}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === i ? 'bg-hello-pink w-6' : 'bg-blush-pink hover:bg-hello-pink/40'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
