"use client"

import React from "react"
import { useEffect, useMemo, useState, useRef } from "react"
import { Section } from "@/components/section"
import { Loader2, Users } from "lucide-react"
import Image from "next/image"

interface PrincipalSponsor {
  MalePrincipalSponsor: string
  FemalePrincipalSponsor: string
}

export function PrincipalSponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Helper component for elegant section titles
  const SectionTitle = ({
    children,
    align = "center",
    className = "",
  }: {
    children: React.ReactNode
    align?: "left" | "center" | "right"
    className?: string
  }) => {
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
      <h3 className={`relative text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold uppercase text-[#BE8782] mb-1.5 sm:mb-2 md:mb-3 tracking-[0.1em] sm:tracking-[0.15em] ${textAlign} ${className} drop-shadow-sm transition-all duration-300`}>
        <span className="relative inline-block">
          {children}
          <span className="absolute bottom-0 left-0 w-full h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-[#E9AA9B]/60 to-transparent" />
        </span>
      </h3>
    )
  }

  // Helper component for name items with alignment
  const NameItem = ({ name, align = "center" }: { name: string, align?: "left" | "center" | "right" }) => {
    const containerAlign =
      align === "right" ? "items-end" : align === "left" ? "items-start" : "items-center"
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
      <div className={`relative flex flex-col ${containerAlign} justify-center py-1 sm:py-1.5 md:py-2.5 w-full group/item transition-all duration-300 hover:scale-[1.02] sm:hover:scale-[1.03]`}>
        {/* Hover highlight effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#BE8782]/0 via-[#E9AA9B]/18 to-[#BE8782]/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-md" />
        
        <p className={`relative text-[#BE8782] text-[11px] sm:text-[13px] md:text-sm lg:text-base font-semibold leading-snug break-words ${textAlign} group-hover/item:text-[#BE8782]/80 transition-all duration-300 drop-shadow-sm`}>{name}</p>
      </div>
    )
  }

  // Remote data state
  const [sponsors, setSponsors] = useState<PrincipalSponsor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSponsors = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/principal-sponsor", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to load principal sponsors")
      const data: PrincipalSponsor[] = await res.json()
      setSponsors(data)
    } catch (e: any) {
      console.error(e)
      setError(e?.message || "Failed to load principal sponsors")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSponsors()
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Keep sponsors as pairs to ensure alignment
  const sponsorPairs = useMemo(() => 
    sponsors.filter(s => s.MalePrincipalSponsor || s.FemalePrincipalSponsor),
    [sponsors]
  )

  return (
    <Section
      id="sponsors"
      className="relative overflow-hidden bg-gradient-to-b from-[#F2E1D1] via-[#F8EAE0] to-[#FFFFFF]"
    >
      {/* Enhanced background elements with motif colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays with motif colors */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#E9AA9B]/30 via-[#F2E1D1]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#DEAB98]/30 via-[#F2E1D1]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E1D1]/45 via-transparent to-[#F2E1D1]/45" />
        
        {/* Floating decorative circles with motif colors */}
        <div className="absolute top-20 left-8 w-32 h-32 bg-[#E9AA9B]/22 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-40 right-16 w-40 h-40 bg-[#BE8782]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-[#DEAB98]/22 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#F2E1D1]/45 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Additional subtle decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-[#E9AA9B]/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-[#DEAB98]/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.2s' }} />
        
        {/* Decorative lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E9AA9B]/45 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E9AA9B]/45 to-transparent" />
      </div>

      {/* Corner decorations – matched to countdown section */}
      <img
        src="/decoration/corner-down-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-0 w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 opacity-90"
        loading="lazy"
      />
      <img
        src="/decoration/corner-down-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 right-0 w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 opacity-90 scale-x-[-1]"
        loading="lazy"
      />
      <img
        src="/decoration/top-right-corner.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] opacity-95"
        loading="lazy"
      />
      <img
        src="/decoration/top-right-corner.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] opacity-95 scale-x-[-1]"
        loading="lazy"
      />

      {/* Section Header */}
      <div ref={sectionRef} className={`relative z-10 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 px-3 sm:px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
          <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-px bg-[#DEAB98]/60" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#BE8782]/85 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#F2E1D1]/90 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#BE8782]/85 rounded-full" />
          <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-px bg-[#DEAB98]/60" />
        </div>
        
        <h2 className="imperial-script-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#BE8782] mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-tight">
          Principal Sponsors
        </h2>
        
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#BE8782]/80 font-light max-w-xl mx-auto leading-relaxed px-2">
          Our Beloved Godparents
        </p>
        
        {/* Decorative element below subtitle */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 md:mt-4">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#BE8782]/80 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#F2E1D1]/90 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#BE8782]/80 rounded-full" />
        </div>
      </div>

      {/* Sponsors content */}
      <div className={`relative z-10 max-w-5xl mx-auto px-2 sm:px-3 md:px-6 lg:px-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Enhanced card with gradient glow */}
        <div className="relative bg-white/88 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border-2 border-[#DEAB98]/55 shadow-[0_18px_50px_rgba(190,135,130,0.25)]">
          {/* Enhanced decorative corner accents */}
          <div className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-t-2 border-l-2 border-[#E9AA9B]/70 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-t-2 border-r-2 border-[#E9AA9B]/70 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-b-2 border-l-2 border-[#DEAB98]/70 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-b-2 border-r-2 border-[#DEAB98]/70 rounded-br-lg" />
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E9AA9B]/18 via-transparent to-[#F2E1D1]/20 pointer-events-none" />
          
          {/* Card content */}
          <div className="relative p-2.5 sm:p-4 md:p-6 lg:p-8 xl:p-10 z-10">
            <div className="relative z-10 w-full">
              {isLoading ? (
                <div className="flex items-center justify-center py-24 sm:py-28 md:py-32">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-[#BE8782]" />
                    <span className="text-[#BE8782]/80 font-serif text-base sm:text-lg">Loading sponsors...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-24 sm:py-28 md:py-32">
                  <div className="text-center">
                    <p className="text-[#BE8782] font-serif text-base sm:text-lg mb-3">{error}</p>
                    <button
                      onClick={fetchSponsors}
                      className="text-[#BE8782] hover:text-[#DEAB98] font-serif underline transition-colors duration-200"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              ) : sponsorPairs.length === 0 ? (
                <div className="text-center py-24 sm:py-28 md:py-32">
                  <Users className="h-14 w-14 sm:h-16 sm:w-16 text-[#E9AA9B]/55 mx-auto mb-4" />
                  <p className="text-[#BE8782]/75 font-serif text-base sm:text-lg">No sponsors yet</p>
                </div>
              ) : (
                <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                  <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-2 md:gap-x-3 gap-y-1 sm:gap-y-1.5 md:gap-y-2 items-stretch">
                    {sponsorPairs.map((pair, idx) => (
                      <>
                        <div key={`male-${idx}-${pair.MalePrincipalSponsor || 'empty'}`} className="px-2 sm:px-3 md:px-4">
                          {pair.MalePrincipalSponsor ? (
                            <NameItem name={pair.MalePrincipalSponsor} align="right" />
                          ) : (
                            <div className="py-0.5 sm:py-1 md:py-1.5" />
                          )}
                        </div>
                        <div key={`female-${idx}-${pair.FemalePrincipalSponsor || 'empty'}`} className="px-2 sm:px-3 md:px-4">
                          {pair.FemalePrincipalSponsor ? (
                            <NameItem name={pair.FemalePrincipalSponsor} align="left" />
                          ) : (
                            <div className="py-0.5 sm:py-1 md:py-1.5" />
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}