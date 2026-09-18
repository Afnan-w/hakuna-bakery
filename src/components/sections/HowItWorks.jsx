import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Ruler, Palette, Truck } from 'lucide-react'

const steps = [
  {
    icon: Ruler,
    step: '01',
    title: 'Choose Your Size',
    description: 'From adorable 4" Bento cakes to grand 10" Feast sizes, pick the perfect portion.',
    color: 'text-gold',
    bg: 'bg-gold/10',
  },
  {
    icon: Palette,
    step: '02',
    title: 'Customize Everything',
    description: 'Pick your sponge, filling, colors, and add a personal message. Make it uniquely yours.',
    color: 'text-rose-accent',
    bg: 'bg-rose-accent/10',
  },
  {
    icon: Truck,
    step: '03',
    title: 'We Deliver or You Pick Up',
    description: 'Fresh from our kitchen to your doorstep across Dhaka, or collect from our bakery.',
    color: 'text-champagne',
    bg: 'bg-champagne/8',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-8 relative section-glow">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold/50">
            Simple & Sweet
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-champagne mt-2">
            How It Works
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-[16%] right-[16%] h-[1px] bg-warm-brown">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 100, damping: 15 }}
                className="text-center relative"
              >
                <div className={`inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-full ${step.bg} items-center justify-center mb-5 relative z-10 transition-transform duration-300 hover:scale-110 border border-gold/10`}>
                  <step.icon size={28} className={step.color} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 text-[10px] font-mono font-bold text-gold/40 bg-dark-cocoa rounded-full w-6 h-6 flex items-center justify-center border border-gold/15">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-champagne mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-cream text-sm max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
