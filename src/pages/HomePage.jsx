import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Specialties from '../components/sections/Specialties'
import SignatureCakes from '../components/sections/SignatureCakes'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import CustomerReviews from '../components/sections/CustomerReviews'
import ContactBanner from '../components/sections/ContactBanner'
import Marquee from '../components/decorative/Marquee'
import WaveDivider from '../components/decorative/WaveDivider'

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
      <WaveDivider />
      <Marquee />
      <Specialties />
      <WaveDivider />
      <SignatureCakes />
      <WaveDivider />
      <Marquee
        tone="white"
        reverse
        items={[
          'Order Online',
          'Custom Messages',
          'Same-Day Pickup',
          'Delivered Across Dhaka',
          'Made With Butter & Love',
          'Your Dream Cake Awaits',
        ]}
      />
      <HowItWorks />
      <WaveDivider />
      <Testimonials />
      <CustomerReviews />
      <ContactBanner />
    </motion.div>
  )
}
