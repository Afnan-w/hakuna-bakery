export default function WaveDivider({ className = '' }) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden="true">
      <div className="max-w-5xl mx-auto px-8">
        <div className="gold-divider" />
      </div>
    </div>
  )
}
