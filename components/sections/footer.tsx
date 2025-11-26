"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Instagram, Twitter, Facebook, MapPin, Calendar, Clock, Heart, Music2 } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import { Monogram } from "@/components/monogram"

export function Footer() {
  const year = new Date().getFullYear()
  const ceremonyDate = siteConfig.ceremony.date
  const ceremonyTime = siteConfig.ceremony.time
  const receptionTime = siteConfig.reception.time
  const ceremonyVenue = siteConfig.ceremony.venue
  const receptionVenue = siteConfig.reception.venue

  const [ceremonyMonth = "December", ceremonyDayRaw = "28", ceremonyYear = "2025"] = ceremonyDate.split(" ")
  const ceremonyDayNumber = ceremonyDayRaw.replace(/[^0-9]/g, "") || "28"

  const quotes = [
    "In every love story, there's a moment when two hearts become one, and ours is just beginning.",
    "Two souls, one heart—forever entwined in the journey of love and faith together.",
    "Love is not about finding the perfect person, but learning to see an imperfect person perfectly."
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
      }, 3000)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (displayedText.length > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
        return () => clearTimeout(deleteTimeout)
      } else {
        setIsDeleting(false)
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
      }
    } else {
      const currentQuote = quotes[currentQuoteIndex]
      if (displayedText.length < currentQuote.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1))
        }, 50)
        return () => clearTimeout(typeTimeout)
      } else {
        setIsPaused(true)
        setIsDeleting(true)
      }
    }
  }, [displayedText, isDeleting, isPaused, currentQuoteIndex, quotes])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#narrative" },
    { label: "Events", href: "#details" },
    { label: "Gallery", href: "#gallery" },
    { label: "Snap & Share", href: "#snap-share" },
    { label: "RSVP", href: "#guest-list" },
  ] as const

  return (
    <footer
      className="relative z-20 mt-16 overflow-hidden bg-gradient-to-br from-[#F2E1D1] via-[#F8EAE0] to-[#FFFFFF]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#F2E1D1]/70 via-[#F2E1D1]/30 to-transparent" />

        {/* Floating decorative circles in wedding palette */}
        <motion.div
          className="absolute top-10 left-8 w-32 h-32 bg-[#E9AA9B]/25 rounded-full blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-24 right-10 w-24 h-24 bg-[#BE8782]/22 rounded-full blur-2xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-28 h-28 bg-[#DEAB98]/22 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.16, 0.24, 0.16] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-14 w-24 h-24 bg-[#E9AA9B]/20 rounded-full blur-2xl"
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FFFFFF]/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DEAB98]/45 to-transparent" />

        {/* Corner floral decorations (matching other sections) */}
        <Image
          src="/decoration/corner-down-left.png"
          alt=""
          width={256}
          height={256}
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-0 left-0 w-40 sm:w-52 md:w-60 lg:w-64 opacity-90"
          loading="lazy"
        />
        <Image
          src="/decoration/top-right-corner.png"
          alt=""
          width={288}
          height={288}
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-0 right-0 w-40 sm:w-52 md:w-60 lg:w-72 opacity-95"
          loading="lazy"
        />
      </div>
      
      {/* Monogram - centered at top */}
      <div className="relative flex justify-center pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <Monogram
            aria-label={`${siteConfig.couple.groomNickname} & ${siteConfig.couple.brideNickname} monogram`}
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[36rem] opacity-95"
            color="#BE8782"
          />
          {/* Glow effect behind monogram */}
          <div className="absolute inset-0 blur-3xl bg-[#BE8782]/25 -z-10 scale-125" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pb-8 sm:pb-10 md:pb-12">
        <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12" variants={staggerChildren} initial="initial" animate="animate">
          {/* Couple Info */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#F2E1D1]/70 rounded-full flex items-center justify-center border border-[#DEAB98]/70 flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[#BE8782]" fill="#E9AA9B" />
                </div>
                <h3
                  className="windsong-medium text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] text-[#BE8782] leading-tight"
                  style={{
                    textShadow:
                      "0 0 8px rgba(255, 255, 255, 0.65), 0 0 14px rgba(242, 225, 209, 0.5), 0 8px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  {siteConfig.couple.groomNickname} &amp; {siteConfig.couple.brideNickname}
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-3.5 md:space-y-4">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 font-lora text-[#BE8782]/90">
                  <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#BE8782] flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-medium">{ceremonyDate}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 font-lora text-[#BE8782]/90">
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#BE8782] flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">{ceremonyVenue}</span>
                </div>
              </div>
            </div>

            <motion.div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#DEAB98]/45 shadow-[0_18px_40px_rgba(190,135,130,0.18)]" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <blockquote className="font-lora text-[#BE8782]/90 italic text-sm sm:text-base md:text-lg leading-relaxed min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
                "{displayedText}
                <span className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-[#BE8782] ml-1 animate-pulse">|</span>"
              </blockquote>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#BE8782]/70 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E9AA9B]/70 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#DEAB98]/70 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Event Details quick tiles */}
          <motion.div className="space-y-4 sm:space-y-5 md:space-y-6" variants={fadeInUp}>
            <motion.div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#DEAB98]/45 hover:bg-white/80 transition-all duration-300 shadow-[0_10px_30px_rgba(190,135,130,0.16)]" whileHover={{ y: -5 }}>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-3.5 md:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#F2E1D1]/80 rounded-full flex items-center justify-center border border-[#DEAB98]/70 flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#BE8782]" />
                </div>
                <h4 className="font-playfair font-bold text-base sm:text-lg md:text-xl text-[#BE8782]">
                  Ceremony
                </h4>
              </div>
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3 font-lora text-[#BE8782]/90 text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BE8782] flex-shrink-0" />
                  <span>{ceremonyVenue}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BE8782] flex-shrink-0" />
                  <span>{ceremonyTime}</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#DEAB98]/45 hover:bg-white/80 transition-all duration-300 shadow-[0_10px_30px_rgba(190,135,130,0.16)]" whileHover={{ y: -5 }}>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-3.5 md:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#F2E1D1]/80 rounded-full flex items-center justify-center border border-[#DEAB98]/70 flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#BE8782]" fill="#E9AA9B" />
                </div>
                <h4 className="font-playfair font-bold text-base sm:text-lg md:text-xl text-[#BE8782]">
                  Reception
                </h4>
              </div>
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3 font-lora text-[#BE8782]/90 text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BE8782] flex-shrink-0" />
                  <span>{receptionVenue}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BE8782] flex-shrink-0" />
                  <span>{receptionTime}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact + Quick Links */}
          <motion.div className="space-y-6 sm:space-y-7 md:space-y-8" variants={fadeInUp}>
            <div>
              <h4 className="font-playfair font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-2.5 md:gap-3 text-[#BE8782]">
                <div className="w-1.5 sm:w-2 h-6 sm:h-7 md:h-8 bg-[#BE8782]/70 rounded-full" /> Follow Us
              </h4>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-wrap">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/70 ring-1 ring-[#DEAB98]/50 hover:bg-white hover:ring-[#BE8782] transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#BE8782]" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/70 ring-1 ring-[#DEAB98]/50 hover:bg-white hover:ring-[#BE8782] transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#BE8782]" />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/70 ring-1 ring-[#DEAB98]/50 hover:bg-white hover:ring-[#BE8782] transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="YouTube"
                >
                  <Music2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#BE8782]" />
                </a>
                <a 
                  href="https://x.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/70 ring-1 ring-[#DEAB98]/50 hover:bg-white hover:ring-[#BE8782] transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#BE8782]" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-playfair font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-[#BE8782]">
                Quick Links
              </h5>
              <div className="space-y-1.5 sm:space-y-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-[#BE8782]/90 hover:text-[#BE8782] transition-colors duration-200 font-lora text-xs sm:text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div className="border-t border-[#DEAB98]/60 pt-6 sm:pt-7 md:pt-8" variants={fadeInUp}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#BE8782]/90 font-lora text-xs sm:text-sm">
                © {year} {siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname}. All rights reserved.
              </p>
              <p className="text-[#BE8782] font-lora text-xs sm:text-sm mt-0.5 sm:mt-1">
                Made with 💕 for our special day
              </p>
            </div>
            
            <div className="text-center md:text-right space-y-0.5 sm:space-y-1">
              <p className="text-[#BE8782]/90 font-lora text-[10px] sm:text-xs">
                Developed by{" "}
                <a 
                  href="https://lance28-beep.github.io/portfolio-website/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#BE8782] hover:text-[#E9AA9B] transition-colors duration-200 underline decoration-[#BE8782]/60 hover:decoration-[#E9AA9B]/80"
                >
                  Lance Valle
                </a>
              </p>
              <p className="text-[#BE8782]/90 font-lora text-[10px] sm:text-xs">
                Want a website like this? Visit{" "}
                <a 
                  href="https://www.facebook.com/WeddingInvitationNaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#BE8782] hover:text-[#E9AA9B] transition-colors duration-200 underline decoration-[#BE8782]/60 hover:decoration-[#E9AA9B]/80"
                >
                  Wedding Invitation Naga
                </a>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
