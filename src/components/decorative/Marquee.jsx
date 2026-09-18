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
  tone = 'chocolate',
  reverse = false,
}) {
  const tones = {
    chocolate: 'bg-chocolate text-white',
    strawberry: 'bg-strawberry text-white',
    butter: 'bg-butter text-chocolate',
    pistachio: 'bg-pistachio text-chocolate',
  }

  const row = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden py-3 sm:py-4 ${tones[tone] || tones.chocolate} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5 font-display font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap"
          >
            {item}
            <span className="text-base sm:text-lg opacity-80">✿</span>
          </span>
        ))}
      </div>
    </div>
  )
}