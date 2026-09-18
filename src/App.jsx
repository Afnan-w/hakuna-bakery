import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import OrderPage from './pages/OrderPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  const location = useLocation()

  return (
    <div className="grain-overlay">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  )
}
