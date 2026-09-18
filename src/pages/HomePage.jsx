import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import SignatureCakes from '../components/sections/SignatureCakes'
import Specialties from '../components/sections/Specialties'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import CustomerReviews from '../components/sections/CustomerReviews'
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
      <SignatureCakes />
      <Specialties />
      <HowItWorks />
      <CustomerReviews />
      <Testimonials />
      <ContactBanner />
    </motion.div>
  )
}
