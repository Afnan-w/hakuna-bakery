import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { StarSvg } from '../decorative/FloatingElements'

const specialties = [
  {
    title: 'Korean Bento Cakes',
    description: 'Adorable mini cakes, perfectly portioned for intimate celebrations and sweet gifting.',
    accent: 'text-hello-pink',
    border: 'border-hello-pink/15 hover:border-hello-pink/40',
  },
  {
    title: 'Vintage Lambeth Piping',
    description: 'Intricate, royal-inspired buttercream piping that transforms cakes into edible art.',
    accent: 'text-hot-pink',
    border: 'border-hot-pink/15 hover:border-hot-pink/40',
  },
  {
    title: 'Multi-Tier Towers',
    description: 'Showstopping celebration cakes for weddings, birthdays, and milestone events.',
    accent: 'text-charcoal',
    border: 'border-blush-pink hover:border-hello-pink/30',
  },
  {
    title: '100% Eggless Options',
    description: 'Every flavor available in pure eggless preparation without compromising on taste.',
    accent: 'text-deep-rose',
    border: 'border-deep-rose/15 hover:border-deep-rose/40',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 100, damping: 15 },
  }),
}

export default function Specialties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-8 relative section-glow">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <StarSvg className="w-3 h-3 text-hello-pink" />
            <span className="text-[10px] sm:text-xs font-body font-semibold tracking-[0.3em] uppercase text-hello-pink/60">
              What We Do Best
            </span>
            <StarSvg className="w-3 h-3 text-hello-pink" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-charcoal">
            Our Specialties
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-hello-pink to-transparent mx-auto mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
              className={`glass-card rounded-2xl p-6 sm:p-7 border ${item.border} transition-all duration-300`}
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-wider uppercase mb-4 ${item.accent} bg-soft-pink/80`}>
                {item.title}
              </div>
              <p className="text-muted-text text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
