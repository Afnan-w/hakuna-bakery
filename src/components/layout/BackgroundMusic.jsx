import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const LOW_VOLUME = 0.15

export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const startedRef = useRef(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = LOW_VOLUME

    const tryPlay = () => {
      if (startedRef.current) return
      const p = audio.play()
      if (p) {
        p.then(() => {
          startedRef.current = true
        }).catch(() => {})
      }
    }

    tryPlay()

    const unlock = () => tryPlay()
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)

    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      audio.pause()
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    startedRef.current = true
    const p = audio.play()
    if (p) p.catch(() => {})
    const next = !audio.muted
    audio.muted = next
    setMuted(next)
  }

  return (
    <>
      <audio ref={audioRef} src="/bgmusic.mp3" loop preload="auto" onError={() => {}} />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? 'Unmute background music' : 'Mute background music'}
        title={muted ? 'Unmute music' : 'Mute music'}
        className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-warm-brown/90 text-gold shadow-lg shadow-black/30 backdrop-blur border border-gold/15 flex items-center justify-center hover:bg-brown-mid hover:border-gold/30 active:scale-95 transition-all duration-200"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </>
  )
}
