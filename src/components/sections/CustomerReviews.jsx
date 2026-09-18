import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Star } from 'lucide-react'

const existingReviews = [
  {
    name: 'Nusrat J.',
    stars: 5,
    text: 'The Korean Bento cake was absolutely adorable and tasted incredible!',
    order: 'Birthday Cake',
  },
  {
    name: 'Farhana R.',
    stars: 5,
    text: 'Ordered a Vintage Lambeth cake for my anniversary. The piping was flawless.',
    order: 'Anniversary Cake',
  },
  {
    name: 'Tasnim A.',
    stars: 5,
    text: 'Best bakery in Dhaka. The buttercream flowers look so realistic.',
    order: 'Custom Order',
  },
  {
    name: 'Samiha K.',
    stars: 5,
    text: 'Same-day pickup for a last-minute celebration. Delivered perfection within hours.',
    order: 'Same-Day Pickup',
  },
  {
    name: 'Maliha C.',
    stars: 5,
    text: 'The custom message cake was exactly what I wanted. Unmatched attention to detail.',
    order: 'Custom Message',
  },
  {
    name: 'Rafid H.',
    stars: 5,
    text: 'My wife was thrilled with the anniversary surprise. Salted caramel was divine.',
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
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!name.trim() || !reviewText.trim() || rating === 0) return

    const msg = `Hi Hakuna Potata! I'd like to leave a review:\n\nName: ${name}\nRating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}\nReview: ${reviewText}`
    window.open(`https://wa.me/8801339656675?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

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
          <span className="text-[10px] sm:text-xs font-body font-semibold tracking-[0.3em] uppercase text-hello-pink/60 mb-3 block">
            ★ Customer Reviews ★
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-charcoal mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-hello-pink to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 sm:mb-16">
          {existingReviews.map((review, i) => (
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
                  <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-blush-pink/50">
            <h3 className="font-display font-bold text-lg sm:text-xl text-charcoal text-center mb-1">
              Leave a Review
            </h3>
            <p className="text-muted-text text-xs text-center mb-6">
              Share your Hakuna Potata experience with us
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-hello-pink/10 text-hello-pink flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 fill-hello-pink" />
                </div>
                <h4 className="font-display font-bold text-charcoal mb-2">Thank You!</h4>
                <p className="text-muted-text text-sm">
                  Your review has been sent. We truly appreciate your feedback!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setName(''); setRating(0); setReviewText('') }}
                  className="mt-4 text-hello-pink text-sm font-body font-bold hover:underline cursor-pointer"
                >
                  Submit another review
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-body font-bold text-charcoal block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Fatima K."
                    className="w-full px-4 py-3 rounded-xl border-2 border-blush-pink bg-white text-sm font-body text-charcoal placeholder-muted-text/30 focus:border-hello-pink focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-body font-bold text-charcoal block mb-1.5">Your Rating</label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => setRating(star)}
                        className="cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            star <= (hoveredStar || rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-blush-pink'
                          }`}
                        />
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="text-xs font-body text-muted-text ml-2">
                        {rating}/5
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-body font-bold text-charcoal block mb-1.5">Your Review</label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blush-pink bg-white text-sm font-body text-charcoal placeholder-muted-text/30 focus:border-hello-pink focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!name.trim() || !reviewText.trim() || rating === 0}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-hello-pink to-deep-rose text-white rounded-full text-sm font-body font-bold tracking-wide hover:from-deep-rose hover:to-deep-rose active:scale-[0.97] transition-all duration-300 shadow-lg shadow-hello-pink/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={15} />
                  Submit Review
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
