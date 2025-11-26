"use client"

import { useEffect } from "react"
import { useAudio } from "@/contexts/audio-context"

const BackgroundMusic = () => {
  const { audioRef } = useAudio()

  useEffect(() => {
    const handleUserInteraction = () => {
      const audioEl = audioRef.current
      if (!audioEl) return
      audioEl.play().then(() => {
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
      }).catch((error) => {
        console.log("Playback blocked:", error)
      })
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    return () => {
      audioRef.current?.pause()
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [audioRef])

  return (
    <audio
      ref={audioRef}
      // Use an encoded URI to avoid issues with spaces/parentheses on some mobile browsers
      src={encodeURI("/background_music/Ed Sheeran - The Joker And The Queen (Lyrics) feat. Taylor Swift.mp3")}
      loop
      preload="auto"
      // playsInline helps iOS treat this as inline media rather than requiring fullscreen behavior
      playsInline
      // Keep element non-visible; playback is initiated on first user interaction
      style={{ display: "none" }}
    />
  )
}

export default BackgroundMusic


