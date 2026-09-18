export default function WaveDivider({ fill = 'var(--color-cream)', className = '' }) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        className="w-full h-12 sm:h-16 md:h-20 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}