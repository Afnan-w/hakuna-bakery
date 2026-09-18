import { DiamondSvg } from './FloatingElements'

const defaultItems = [
  'Fresh Bakes Daily',
  'Korean Bento Cakes',
  'Vintage Lambeth Piping',
  '100% Eggless Options',
  'Custom Celebration Towers',
  'Handmade in Dhaka',
]

export default function Marquee({
  items = defaultItems,
  className = '',
  tone = 'gold',
  reverse = false,
}) {
  const tones = {
    gold: 'bg-gold/10 text-gold border-y border-gold/20',
    dark: 'bg-dark-cocoa text-champagne border-y border-warm-brown',
    rose: 'bg-rose-accent/10 text-rose-accent border-y border-rose-accent/20',
  }

  const row = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden py-3.5 sm:py-4 ${tones[tone] || tones.gold} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5 font-display font-semibold text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap"
          >
            {item}
            <DiamondSvg className="w-2.5 h-2.5 opacity-40" />
          </span>
        ))}
      </div>
    </div>
  )
}
