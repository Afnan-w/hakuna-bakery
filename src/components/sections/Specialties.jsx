import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { StarSvg } from '../decorative/FloatingElements'

const specialties = [
  {
    title: 'Korean Bento Cakes',
    description: 'Adorable mini cakes, perfectly portioned for intimate celebrations and sweet gifting.',
    accent: 'bg-strawberry/10 text-strawberry',
  },
  {
    title: 'Vintage Lambeth Piping',
    description: 'Intricate, royal-inspired buttercream piping that transforms cakes into edible art.',
    accent: 'bg-pistachio/10 text-pistachio',
  },
  {
    title: 'Multi-Tier Towers',
    description: 'Showstopping celebration cakes for weddings, birthdays, and milestone events.',
    accent: 'bg-butter text-cocoa',
  },
  {
    title: '100% Eggless Options',
    description: 'Every flavor available in pure eggless preparation without compromising on taste.',
    accent: 'bg-rose/20 text-strawberry',
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
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <StarSvg className="w-3 h-3 text-strawberry" />
            <span className="text-[10px] sm:text-xs font-body font-bold tracking-[0.3em] uppercase text-cocoa/40">
              What We Do Best
            </span>
            <StarSvg className="w-3 h-3 text-strawberry" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-chocolate">
            Our Specialties
          </h2>
          <div className="w-12 h-[2px] bg-strawberry mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-ivory rounded-2xl p-6 sm:p-7 border border-butter/60 shadow-[0_4px_20px_rgba(61,35,20,0.04)] hover:shadow-[0_8px_30px_rgba(61,35,20,0.08)] transition-shadow duration-300"
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-wider uppercase mb-4 ${item.accent}`}>
                {item.title}
              </div>
              <p className="text-cocoa/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
