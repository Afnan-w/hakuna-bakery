import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function MagneticCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)
  const size = useSpring(20, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleEnter = () => { setHovering(true); size.set(48) }
    const handleLeave = () => { setHovering(false); size.set(20) }

    window.addEventListener('mousemove', move)

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-magnetic]').forEach((el) => {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    }

    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [visible, x, y, size])

  if (!visible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
      style={{ x, y, width: size, height: size }}
    >
      <div
        className={`w-full h-full rounded-full border transition-all duration-300 ${
          hovering
            ? 'border-hot-pink bg-hot-pink/10'
            : 'border-hello-pink/50 bg-transparent'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </motion.div>
  )
}
