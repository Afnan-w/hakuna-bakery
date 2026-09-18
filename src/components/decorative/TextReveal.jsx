import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TextReveal({
  words,
  className = '',
  as: Tag = 'h1',
  delay = 0,
  staggerDelay = 0.08,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 80, damping: 14, duration: 0.6 },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`overflow-hidden ${className}`}
    >
      <Tag className="font-display font-bold">
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
