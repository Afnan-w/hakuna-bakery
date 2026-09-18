import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Specialties from '../components/sections/Specialties'
import SignatureCakes from '../components/sections/SignatureCakes'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import ContactBanner from '../components/sections/ContactBanner'

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Specialties />
      <SignatureCakes />
      <HowItWorks />
      <Testimonials />
      <ContactBanner />
    </motion.div>
  )
}
