"use client"

import { useEffect, useState, useMemo } from "react"
import { Heart, Sparkles, Download } from "lucide-react"

// Temporary hero background per client request
const heroBackgroundImage = "/images/hero Background.jpg"

const desktopImages = [heroBackgroundImage]

const mobileImages = [heroBackgroundImage]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size and update isMobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    // Check on mount
    checkScreenSize()
    
    // Listen for resize events
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Get the appropriate image array based on screen size
  const backgroundImages = useMemo(() => {
    return isMobile ? mobileImages : desktopImages
  }, [isMobile])

  // Preload images progressively - show first image immediately
  useEffect(() => {
    setImagesLoaded(false)
    setCurrentImageIndex(0)
    
    // Load first image with priority to show it immediately
    const firstImg = new Image()
    firstImg.src = backgroundImages[0]
    firstImg.onload = () => {
      setImagesLoaded(true) // Show first image immediately
    }
    
    // Then preload a small lookahead set in background (avoid preloading all)
    setTimeout(() => {
      if (typeof navigator !== 'undefined' && (navigator as any).connection?.saveData) return
      backgroundImages.slice(1, 3).forEach((src) => {
        const img = new Image()
        img.decoding = 'async'
        img.loading = 'lazy' as any
        img.src = src
      })
    }, 200)
  }, [backgroundImages])

  useEffect(() => {
    if (!imagesLoaded) return
    
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(imageTimer)
  }, [imagesLoaded, backgroundImages])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (imagesLoaded) {
      setIsVisible(true)
    }
  }, [imagesLoaded])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F2E1D1]">
      <div className="absolute inset-0 w-full h-full">
        {imagesLoaded && backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              willChange: "opacity",
            }}
          />
        ))}
        {/* Enhanced gradient overlay with better depth - Dusty Pink & Beige */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#BE8782]/65 via-[#F2E1D1]/35 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E9AA9B]/55 via-[#DEAB98]/35 to-transparent z-0" />
      </div>

      {isMobile && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 w-full md:hidden pointer-events-none px-6">
          <img
            src="/decoration/center-we-do.png"
            alt="We Do emblem"
            className="w-full max-w-none"
            loading="lazy"
          />
        </div>
      )}

      <div className="relative z-10 flex w-full items-end justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 pt-24 pb-10 sm:pt-32 sm:pb-16 md:pb-20 lg:pb-24 min-h-screen">
        <div
          className={`relative w-full max-w-[420px] sm:max-w-3xl lg:max-w-5xl px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative z-10 flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {/* Intro copy */}
            <div className="space-y-0.5 md:space-y-1 text-[#FFFFFF] mt-16 sm:mt-0" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.4)" }}>
              <p className="text-[9px] sm:text-xs md:text-sm lg:text-base tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.18em] uppercase">
                WITH THE GRACE OF GOD
              </p>
              <p className="text-[9px] sm:text-xs md:text-sm lg:text-base tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.18em] uppercase">
                AND THE BLESSING OF THEIR FAMILIES
              </p>
            </div>

            {/* Bible Verse */}
            <div className="max-w-2xl text-[#FFFFFF] italic text-center px-4" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wide">
                "We love because He first loved us."
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-wider mt-1">
                — 1 John 4:19
              </p>
            </div>

            {/* Divider with icons */}
            <div className="flex items-center justify-center gap-2 md:gap-3 text-[#FFFFFF]" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.45)" }}>
              <span className="h-px w-10 md:w-14 lg:w-16 bg-gradient-to-r from-transparent via-[#F2E1D1] to-[#F2E1D1]/60" />
              <Heart size={12} className="text-[#F2E1D1] fill-[#F2E1D1]/30 md:w-4 md:h-4" />
              <Sparkles size={11} className="text-[#F2E1D1] md:w-3.5 md:h-3.5" />
              <Heart size={12} className="text-[#F2E1D1] fill-[#F2E1D1]/30 md:w-4 md:h-4" />
              <span className="h-px w-10 md:w-14 lg:w-16 bg-gradient-to-l from-transparent via-[#F2E1D1] to-[#F2E1D1]/60" />
            </div>

            {/* Names */}
            <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3">
              <h1
                className="windsong-medium text-[2.75rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem] text-[#FFFFFF] leading-tight"
                style={{
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(242, 225, 209, 0.4), 0 0 40px rgba(242, 225, 209, 0.3), 0 0 50px rgba(242, 225, 209, 0.2), 0 12px 26px rgba(0,0,0,0.45)",
                }}
              >
                Kenneth
              </h1>
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.22em] md:tracking-[0.28em] lg:tracking-[0.35em] text-[#F2E1D1]" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.4)" }}>
                and
              </span>
              <h2
                className="windsong-medium text-[2.75rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem] text-[#FFFFFF] leading-tight"
                style={{
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(242, 225, 209, 0.4), 0 0 40px rgba(242, 225, 209, 0.3), 0 0 50px rgba(242, 225, 209, 0.2), 0 12px 26px rgba(0,0,0,0.45)",
                }}
              >
                Nomay
              </h2>
            </div>

            {/* Invitation message */}
            <p className="text-[10px] sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.25em] text-[#FFFFFF] max-w-3xl" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}>
              JOYFULLY REQUEST THE HONOR OF YOUR PRESENCE
            </p>
            <p className="text-[9px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.12em] md:tracking-[0.18em] lg:tracking-[0.22em] text-[#FFFFFF]" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}>
              TO CELEBRATE THEIR UNION IN LOVE
            </p>

            {/* Featured date layout */}
            <div className="w-full max-w-4xl mt-2 sm:mt-3 md:mt-5 lg:mt-6 text-[#FFFFFF]" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}>
              <div className="flex flex-col items-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 uppercase">
                <span className="text-[9px] sm:text-sm md:text-base tracking-[0.45em] sm:tracking-[0.75em]">
                  June
                </span>
                <div className="flex w-full items-center gap-2 sm:gap-4 md:gap-6">
                  <div className="flex flex-1 items-center gap-2 sm:gap-4">
                    <span className="h-[1px] flex-1 bg-white/70" />
                    <span className="text-[8px] sm:text-xs md:text-sm tracking-[0.32em] sm:tracking-[0.6em]">
                      Wed
                    </span>
                    <span className="h-[1px] w-8 sm:w-10 md:w-12 bg-white/70" />
                  </div>
                  <div className="relative flex items-center justify-center px-2 sm:px-4 md:px-8 lg:px-10">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 mx-auto h-[80%] max-h-[220px] w-[120px] sm:w-[180px] md:w-[220px] rounded-full bg-gradient-to-b from-[#F2E1D1] via-[#E9AA9B] to-[#BE8782] blur-[32px] opacity-80"
                    />
                    <span
                      className="relative font-tiktok text-[2rem] sm:text-[4.25rem] md:text-[5.5rem] lg:text-[6.5rem] leading-none tracking-[0.05em]"
                      style={{
                        color: "#FFFFFF",
                        backgroundImage: "linear-gradient(180deg, #FFFFFF 10%, #F2E1D1 60%, #E9AA9B 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        textShadow:
                          "0 0 30px rgba(255, 255, 255, 0.85), 0 0 70px rgba(242, 225, 209, 0.7), 0 0 120px rgba(233, 170, 155, 0.55), 0 18px 45px rgba(0,0,0,0.65)",
                        filter: "drop-shadow(0 0 15px rgba(242, 225, 209, 0.6))",
                      }}
                    >
                      24
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2 sm:gap-4 justify-end">
                    <span className="h-[1px] w-8 sm:w-10 md:w-12 bg-white/70" />
                    <span className="text-[8px] sm:text-xs md:text-sm tracking-[0.27em] sm:tracking-[0.45em]">
                      2:30 PM
                    </span>
                    <span className="h-[1px] flex-1 bg-white/70" />
                  </div>
                </div>
                <span className="text-[10px] sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.7em]">
                  2026
                </span>
              </div>
            </div>

            {/* Ceremony & location */}
            <div className="text-center space-y-1.5 md:space-y-2 text-[#FFFFFF] uppercase" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}>
              <div>
                <p className="text-[9px] sm:text-xs md:text-sm lg:text-base tracking-[0.12em] md:tracking-[0.16em] lg:tracking-[0.2em]">
                  Ceremony
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.35em]">
                  Our Lady of Lourdes Parish
                </p>
                <p className="text-[9px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em]">
                  Tagaytay
                </p>
              </div>
              <div>
                <p className="text-[9px] sm:text-xs md:text-sm lg:text-base tracking-[0.12em] md:tracking-[0.16em] lg:tracking-[0.2em]">
                  Reception
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.35em]">
                  Infinity Tagaytay Events Place
                </p>
              </div>
            </div>

            {/* CTA Buttons & download */}
            <div className="mt-4 md:mt-6 lg:mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="#narrative"
                className="group flex-1 min-w-[140px] md:min-w-[160px] lg:min-w-[180px] rounded-full border border-[#F2E1D1]/40 bg-[#BE8782] px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.12em] md:tracking-[0.16em] lg:tracking-[0.2em] text-[#FFFFFF] backdrop-blur-sm transition-all duration-300 hover:bg-[#BE8782]/90"
              >
                <span className="flex items-center justify-center">
                  Our Story
                </span>
              </a>
              <a
                href="#guest-list"
                className="group flex-1 min-w-[140px] md:min-w-[160px] lg:min-w-[180px] rounded-full border border-[#F2E1D1]/40 bg-[#E9AA9B] px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.12em] md:tracking-[0.16em] lg:tracking-[0.2em] text-[#FFFFFF] backdrop-blur-sm transition-all duration-300 hover:bg-[#E9AA9B]/90"
              >
                <span className="flex items-center justify-center">
                  RSVP
                </span>
              </a>
              <a
                href="/invitation/White and Beige Floral Minimalist Wedding Invitation - 1.png"
                download="Kenneth-Nomay-Wedding-Invitation.png"
                className="group flex-none rounded-full border border-[#F2E1D1]/40 bg-[#DEAB98] px-3.5 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-[11px] md:text-xs lg:text-sm uppercase tracking-[0.15em] md:tracking-[0.18em] lg:tracking-[0.22em] text-[#FFFFFF] backdrop-blur-sm transition-all duration-300 hover:bg-[#DEAB98]/90"
              >
                <span className="flex items-center justify-center gap-1.5 md:gap-2">
                  <Download size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
                  <span className="sr-only sm:hidden">Download Invitation</span>
                  <span className="hidden sm:inline">Download Invitation</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}