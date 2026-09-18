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
  tone = 'pink',
  reverse = false,
}) {
  const tones = {
    pink: 'bg-hello-pink/10 text-hello-pink border-y border-hello-pink/20',
    white: 'bg-white text-charcoal border-y border-blush-pink',
    rose: 'bg-hot-pink/10 text-hot-pink border-y border-hot-pink/20',
  }

  const row = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden py-3.5 sm:py-4 ${tones[tone] || tones.pink} ${className}`}
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
