import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/about', label: 'ABOUT' },
  { path: '/order', label: 'ORDER' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-deep-espresso/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(200,169,110,0.06)] border-b border-gold/10'
            : 'bg-deep-espresso/60 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Hakuna Potata Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 brightness-110"
            />
            <span className="text-base sm:text-lg font-display font-bold tracking-tight text-champagne group-hover:text-gold transition-colors">
              HAKUNA POTATA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300 py-1 relative ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-muted-cream hover:text-champagne'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {location.pathname !== link.path && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gold/40 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                )}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-champagne hover:text-gold transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-deep-espresso/98 backdrop-blur-xl border-b border-gold/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden md:hidden"
          >
            <nav className="flex flex-col items-center gap-1 py-4 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-body font-semibold tracking-[0.2em] uppercase py-3 block transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold'
                        : 'text-muted-cream hover:text-champagne'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
