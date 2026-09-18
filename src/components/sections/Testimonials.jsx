import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-8 bg-vanilla/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-body font-bold tracking-[0.3em] uppercase text-cocoa/40">
            Love Notes
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-chocolate mt-2">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[2px] bg-strawberry mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="relative min-h-[200px]">
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
              <Quote size={32} className="text-strawberry/30 mb-4" />
              <p className="font-display italic text-lg sm:text-xl md:text-2xl text-chocolate leading-relaxed max-w-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex flex-col items-center">
                <span className="font-body font-bold text-sm text-chocolate">{t.name}</span>
                <span className="text-[11px] font-body text-cocoa/50 mt-0.5">{t.context}</span>
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
                current === i ? 'bg-strawberry w-6' : 'bg-butter hover:bg-strawberry/40'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
