import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <div className="relative w-full">
      <div className="pink-divider" />
      <footer className="w-full bg-soft-pink pt-10 sm:pt-12 pb-6 px-4 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="HAKUNA POTATA"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <h2 className="text-lg sm:text-2xl font-display font-bold tracking-tight text-charcoal">
                HAKUNA POTATA
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 text-sm">
                <h3 className="text-[10px] font-body font-bold tracking-widest uppercase text-hello-pink mb-1">
                  Quick Links
                </h3>
                <Link to="/" className="text-muted-text hover:text-hello-pink transition-colors text-xs">Home</Link>
                <Link to="/gallery" className="text-muted-text hover:text-hello-pink transition-colors text-xs">Gallery</Link>
                <Link to="/about" className="text-muted-text hover:text-hello-pink transition-colors text-xs">About Us</Link>
                <Link to="/order" className="text-muted-text hover:text-hello-pink transition-colors text-xs">Order a Cake</Link>
              </div>

              <div className="w-[1px] h-16 bg-blush-pink rounded-full hidden sm:block" />

              <div className="flex flex-col gap-2.5 text-xs">
                <h3 className="text-[10px] font-body font-bold tracking-widest uppercase text-hello-pink mb-1">
                  Contact
                </h3>
                <div className="flex items-center gap-2 text-muted-text">
                  <MapPin size={12} className="shrink-0 text-hello-pink/60" />
                  <span>Bashundhara R/A, F block 24, Bangladesh</span>
                </div>
                <a href="mailto:hakunapotatabakery@gmail.com" className="flex items-center gap-2 text-muted-text hover:text-hello-pink transition-colors">
                  <Mail size={12} className="shrink-0 text-hello-pink/60" />
                  <span>hakunapotatabakery@gmail.com</span>
                </a>
                <a href="tel:+8801339656675" className="flex items-center gap-2 text-muted-text hover:text-hello-pink transition-colors">
                  <Phone size={12} className="shrink-0 text-hello-pink/60" />
                  <span>+880 1339656675</span>
                </a>
              </div>

              <div className="w-[1px] h-16 bg-blush-pink rounded-full hidden sm:block" />

              <div className="flex flex-col gap-2.5 text-xs">
                <h3 className="text-[10px] font-body font-bold tracking-widest uppercase text-hello-pink mb-1">
                  Follow Us
                </h3>
                <a
                  href="https://www.instagram.com/hakunapotata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-text hover:text-hello-pink transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hello-pink/60">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/hakunapotata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-text hover:text-hello-pink transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hello-pink/60">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full pt-4 border-t border-blush-pink flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10px] text-muted-text/60 select-none">
            <div className="flex items-center gap-1.5 font-medium">
              <span>&copy; {new Date().getFullYear()} HAKUNA POTATA</span>
              <span className="text-hello-pink/30">&middot;</span>
              <span>All Rights Reserved</span>
            </div>
            <a
              href="https://nonamedevs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hello-pink transition-colors flex items-center gap-1"
            >
              <span className="text-muted-text/40">made by</span>
              <span className="underline decoration-hello-pink/20 underline-offset-2 hover:decoration-hello-pink font-semibold text-muted-text/60">
                @nonamedevs
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
