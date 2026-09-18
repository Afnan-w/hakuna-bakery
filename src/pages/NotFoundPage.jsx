import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CherrySvg } from '../components/decorative/FloatingElements'

export default function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-cream flex items-center justify-center px-4"
    >
      <div className="text-center max-w-md">
        <CherrySvg className="w-14 h-14 mx-auto mb-6 opacity-40" />
        <h1 className="font-display font-bold text-6xl sm:text-7xl text-hello-pink mb-4">404</h1>
        <p className="font-display font-bold text-xl text-charcoal mb-2">
          Page Not Found
        </p>
        <p className="text-muted-text text-sm mb-8">
          Looks like this page has crumbled. Let&apos;s get you back to our sweet world.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-hello-pink to-hot-pink text-white rounded-full text-sm font-body font-bold tracking-wide hover:from-hot-pink hover:to-deep-rose active:scale-[0.97] transition-all duration-300 shadow-lg shadow-hello-pink/20"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </motion.div>
  )
}
