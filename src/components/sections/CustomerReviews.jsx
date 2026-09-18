import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { StarSvg } from '../decorative/FloatingElements'

const reviews = [
  {
    name: 'Nusrat Jahan',
    stars: 5,
    text: 'The Korean Bento cake was absolutely adorable and tasted incredible! My daughter loved every bite. The packaging was so cute too.',
    order: 'Birthday Cake',
  },
  {
    name: 'Farhana Rahman',
    stars: 5,
    text: 'Ordered a Vintage Lambeth cake for my wedding anniversary. The piping was flawless and it was almost too pretty to eat!',
    order: 'Anniversary Cake',
  },
  {
    name: 'Tasnim Ahmed',
    stars: 5,
    text: 'Best bakery in Dhaka, hands down. The buttercream flowers look so realistic. I order from Hakuna Potata every month now.',
    order: 'Custom Order',
  },
  {
    name: 'Samiha Karim',
    stars: 5,
    text: 'Ordered same-day pickup for a last-minute celebration. They delivered the most beautiful cake within hours.',
    order: 'Same-Day Pickup',
  },
  {
    name: 'Maliha Chowdhury',
    stars: 5,
    text: 'The custom message cake was exactly what I wanted. The attention to detail is unmatched. It looked like a work of art.',
    order: 'Custom Message',
  },
  {
    name: 'Rafid Hassan',
    stars: 5,
    text: 'My wife was thrilled with the anniversary surprise. The cake design was elegant and the salted caramel flavor was divine.',
    order: 'Anniversary Cake',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function CustomerReviews() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-soft-pink/40"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-hello-pink text-[10px] sm:text-xs font-body font-semibold uppercase tracking-[0.3em] mb-3">
            <StarSvg className="w-3 h-3 text-hello-pink" />
            Customer Reviews
            <StarSvg className="w-3 h-3 text-hello-pink" />
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-charcoal mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-hello-pink to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <StarSvg
                    key={j}
                    className="w-3.5 h-3.5 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-dark-text font-body text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-light-border">
                <span className="font-display font-bold text-charcoal text-sm">
                  {review.name}
                </span>
                <span className="text-[10px] font-body font-semibold text-hello-pink bg-hello-pink/10 px-2.5 py-1 rounded-full">
                  {review.order}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
