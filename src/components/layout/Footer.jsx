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
            <div className="flex items-center gap-1.5">
              <span className="text-muted-text/40">Website By</span>
              <span className="font-semibold text-muted-text/60">Afnan</span>
              <a
                href="https://github.com/Afnan-w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-text/50 hover:text-hello-pink transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/wamphead/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-text/50 hover:text-hello-pink transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
