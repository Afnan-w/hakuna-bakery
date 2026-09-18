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
    text: 'Ordered a Vintage Lambeth cake for my wedding anniversary. The piping was flawless and it was almost too pretty to eat! Everyone was obsessed.',
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
    text: 'Ordered same-day pickup for a last-minute celebration. They delivered the most beautiful cake within hours. The red velvet flavor is divine!',
    order: 'Same-Day Pickup',
  },
  {
    name: 'Maliha Chowdhury',
    stars: 5,
    text: 'The custom message cake was exactly what I wanted. The attention to detail is unmatched. It looked like a work of art and tasted heavenly.',
    order: 'Custom Message Cake',
  },
  {
    name: 'Rafid Hassan',
    stars: 5,
    text: 'My wife was thrilled with the anniversary surprise. The cake design was elegant and the salted caramel flavor was out of this world.',
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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-soft-pink/40"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-hello-pink text-sm font-body font-semibold uppercase tracking-widest mb-4">
            <StarSvg className="w-4 h-4 text-hot-pink" />
            Customer Reviews
            <StarSvg className="w-4 h-4 text-hot-pink" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-text font-body text-base sm:text-lg max-w-2xl mx-auto">
            Every cake tells a story. Here's what our customers have to say about their Hakuna Potata experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <StarSvg
                    key={j}
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-dark-text font-body text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-light-border">
                <span className="font-display font-bold text-charcoal text-sm">
                  {review.name}
                </span>
                <span className="text-xs font-body font-semibold text-hello-pink bg-hello-pink/10 px-3 py-1 rounded-full">
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
