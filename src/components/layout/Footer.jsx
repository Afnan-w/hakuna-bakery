import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <div className="relative w-full overflow-visible">
      <div className="absolute right-6 sm:right-16 md:right-24 -top-[48px] sm:-top-[58px] md:-top-[82px] z-0 pointer-events-none select-none">
        <div className="relative w-32 sm:w-36 md:w-44">
          <img
            src="/bread-icon.webp"
            alt=""
            className="w-full object-contain drop-shadow-sm opacity-85 animate-float"
            loading="lazy"
            style={{ transform: 'rotate(-22deg)' }}
          />
          <div
            className="absolute w-full animate-float-slow"
            style={{ left: '78%', top: 'calc(22% + 13px)', transform: 'translate(-50%, -50%)' }}
          >
            <img
              src="/bread-icon.webp"
              alt=""
              className="w-full object-contain drop-shadow-md"
              loading="lazy"
              style={{ transform: 'rotate(25deg)' }}
            />
          </div>
        </div>
      </div>

      <footer className="w-full bg-deep-cocoa text-white pt-10 sm:pt-12 pb-6 px-4 sm:px-12 rounded-t-[24px] sm:rounded-t-[36px] shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="HAKUNA POTATA"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <h2 className="text-lg sm:text-2xl font-display font-bold tracking-tight">
                HAKUNA POTATA
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
              <div className="flex flex-col gap-2 text-sm">
                <h3 className="text-[10px] font-body font-bold tracking-widest uppercase text-white/50 mb-1">
                  Quick Links
                </h3>
                <Link to="/" className="text-white/70 hover:text-white transition-colors text-xs">Home</Link>
                <Link to="/gallery" className="text-white/70 hover:text-white transition-colors text-xs">Gallery</Link>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors text-xs">About Us</Link>
                <Link to="/order" className="text-white/70 hover:text-white transition-colors text-xs">Order a Cake</Link>
              </div>

              <div className="w-[1px] h-16 bg-white/10 rounded-full hidden sm:block" />

              <div className="flex flex-col gap-2.5 text-xs">
                <h3 className="text-[10px] font-body font-bold tracking-widest uppercase text-white/50 mb-1">
                  Contact
                </h3>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin size={12} className="shrink-0 opacity-70" />
                  <span>Bashundhara R/A, F block 24, Bangladesh</span>
                </div>
                <a href="mailto:hakunapotatabakery@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <Mail size={12} className="shrink-0 opacity-70" />
                  <span>hakunapotatabakery@gmail.com</span>
                </a>
                <a href="tel:+8801339656675" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <Phone size={12} className="shrink-0 opacity-70" />
                  <span>+880 1339656675</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10px] text-white/40 select-none">
            <div className="flex items-center gap-1.5 font-medium">
              <span>&copy; 2026 HAKUNA POTATA</span>
              <span className="text-white/20">&middot;</span>
              <span>All Rights Reserved</span>
            </div>
            <a
              href="https://nonamedevs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span className="text-white/30">made by</span>
              <span className="underline decoration-white/20 underline-offset-2 hover:decoration-white font-semibold text-white/60">
                @nonamedevs
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
