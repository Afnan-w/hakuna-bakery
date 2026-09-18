import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import ScrollProgress from './components/layout/ScrollProgress'
import BackgroundMusic from './components/layout/BackgroundMusic'
import MagneticCursor from './components/decorative/MagneticCursor'
import FloatingParticles from './components/decorative/FloatingParticles'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import OrderPage from './pages/OrderPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const location = useLocation()

  return (
    <div className="grain-overlay">
      <ScrollToTop />
      <ScrollProgress />
      <BackgroundMusic />
      <FloatingParticles />
      <MagneticCursor />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  )
}
