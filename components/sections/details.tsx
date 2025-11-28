"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { Clock, Utensils, Car, Shirt, Copy, Check, Navigation, Heart, Camera, X, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())
  const [showImageModal, setShowImageModal] = useState<string | null>(null)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showImageModal) {
        setShowImageModal(null)
      }
    }
    
    if (showImageModal) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showImageModal])

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev)
          newSet.delete(itemId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Generate Google Maps links
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(siteConfig.ceremony.location)}`
  const receptionMapsLink = `https://maps.google.com/?q=${encodeURIComponent(siteConfig.reception.location)}`

  const sponsorPalette = ["#E8E0D5", "#D1AD97", "#C49E92", "#C19A83", "#9A7A6B"]
  const guestPalette = ["#E8E0D3", "#D1AD97", "#C49F90", "#F7CDCF", "#DDB2AC"]

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section id="details" className="relative bg-[#F2E1D1] py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Enhanced background elements with motif colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays with motif colors - Dusty Pink & Beige */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#E9AA9B]/30 via-[#E9AA9B]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#E9AA9B]/30 via-[#E9AA9B]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E1D1]/35 via-transparent to-[#F2E1D1]/35" />
        
        {/* Floating decorative circles with motif colors */}
        <div className="absolute top-6 left-8 w-32 h-32 bg-[#E9AA9B]/18 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-16 right-12 w-24 h-24 bg-[#BE8782]/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-[#DEAB98]/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#F2E1D1]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#BE8782]/12 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-[#E9AA9B]/14 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.8s' }} />
        
        {/* Top corner decorative elements */}
        <div className="absolute top-0 left-0 z-0 opacity-50">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#BE8782]/20 to-transparent rounded-br-full blur-xl"></div>
        </div>
        <div className="absolute top-0 right-0 z-0 opacity-50">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-bl from-[#E9AA9B]/20 to-transparent rounded-bl-full blur-xl"></div>
        </div>
      </div>


      {/* Header with motif colors */}
      <div className="relative z-10 text-center mb-4 sm:mb-7 md:mb-10 px-3 sm:px-4">
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
          <div className="w-6 sm:w-10 md:w-16 h-px bg-[#BE8782]/40" />
          <div className="w-1.5 h-1.5 bg-[#E9AA9B]/70 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#E9AA9B]/70 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#DEAB98]/70 rounded-full" />
          <div className="w-6 sm:w-10 md:w-16 h-px bg-[#BE8782]/40" />
        </div>
        
        <h2 className="imperial-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#BE8782] mb-1.5 sm:mb-3 md:mb-4 drop-shadow-lg">
          Event Details
        </h2>
        
        <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-[#BE8782]/80 font-light max-w-xl mx-auto leading-relaxed px-2">
          Everything you need to know about our special day
        </p>
        
        {/* Decorative element below subtitle */}
        <div className="flex items-center justify-center gap-2 mt-2 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-[#E9AA9B]/70 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#E9AA9B]/70 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#DEAB98]/70 rounded-full" />
        </div>
      </div>

      {/* Ceremony & Reception Locations */}
      <div className="relative z-10 mb-4 sm:mb-7 max-w-4xl mx-auto px-3 sm:px-5 space-y-4">
        {/* Ceremony */}
        <div 
          className="overflow-hidden rounded-md sm:rounded-lg shadow-[0_20px_60px_rgba(190,135,130,0.25)] transition-transform duration-500 group bg-gradient-to-b from-[#BE8782] via-[#E9AA9B] to-[#DEAB98]"
        >
          {/* Top image */}
          <div className="relative h-40 sm:h-60 md:h-80 w-full">
            <Image
              src="/Details/Our Lady of Lourdes Parish.jpg"
              alt={siteConfig.ceremony.location}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#BE8782]/95 via-[#BE8782]/60 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end px-3 sm:px-6 pb-3 sm:pb-6 text-white">
              <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase opacity-80">
                Ceremony
              </p>
              <h3 className="text-xl sm:text-3xl font-serif font-semibold tracking-wide drop-shadow-lg">
                {siteConfig.ceremony.venue}
              </h3>
            </div>
          </div>

          {/* Details panel */}
          <div className="bg-white text-[#4A4A4A] px-3 sm:px-6 py-4 sm:py-6 space-y-4">
            <div className="space-y-2.5">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#BE8782] uppercase">
                  Ceremony Location
                </p>
                <h4 className="text-base sm:text-xl font-semibold">{siteConfig.ceremony.venue}</h4>
                <p className="text-xs sm:text-sm text-[#4A4A4A]/90 leading-relaxed">{siteConfig.ceremony.location}</p>
              </div>
              <div className="grid grid-cols-1 gap-1.5 sm:gap-2 text-left">
                {[
                  { label: "Date", value: siteConfig.ceremony.date },
                ].map((item) => (
                  <div key={item.label} className="rounded-md border border-[#E9AA9B] bg-white/70 px-2.5 py-2 shadow-sm">
                    <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] text-[#BE8782] uppercase mb-0.5">{item.label}</p>
                    <p className="text-sm sm:text-base font-bold text-[#BE8782]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3">
              <button
                onClick={() => openInMaps(ceremonyMapsLink)}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-[#BE8782] text-white py-2.5 sm:py-3 shadow-lg hover:translate-y-[-2px] transition-all text-xs sm:text-sm font-semibold"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </button>
              <button
                onClick={() => copyToClipboard(siteConfig.ceremony.location, 'ceremony')}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-[#BE8782]/30 text-[#BE8782] py-2.5 sm:py-3 hover:bg-[#BE8782]/5 transition-all text-xs sm:text-sm font-semibold"
              >
                {copiedItems.has('ceremony') ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Address
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Reception */}
        <div 
          className="overflow-hidden rounded-md sm:rounded-lg shadow-[0_20px_60px_rgba(222,171,152,0.25)] transition-transform duration-500 group bg-gradient-to-b from-[#DEAB98] via-[#F2E1D1] to-[#FFFFFF]"
        >
          {/* Top image */}
          <div className="relative h-40 sm:h-60 md:h-80 w-full">
            <Image
              src="/Details/Infinity Tagaytay Events Place.jpg"
              alt={siteConfig.reception.location}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#DEAB98]/95 via-[#DEAB98]/60 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end px-3 sm:px-6 pb-3 sm:pb-6 text-white">
              <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase opacity-80">
                Reception
              </p>
              <h3 className="text-xl sm:text-3xl font-serif font-semibold tracking-wide drop-shadow-lg">
                {siteConfig.reception.venue}
              </h3>
            </div>
          </div>

          {/* Details panel */}
          <div className="bg-white text-[#4A4A4A] px-3 sm:px-6 py-4 sm:py-6 space-y-4">
            <div className="space-y-2.5">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#DEAB98] uppercase">
                  Reception Location
                </p>
                <h4 className="text-base sm:text-xl font-semibold">{siteConfig.reception.venue}</h4>
                <p className="text-xs sm:text-sm text-[#4A4A4A]/90 leading-relaxed">{siteConfig.reception.location}</p>
              </div>
              <div className="grid grid-cols-1 gap-1.5 sm:gap-2 text-left">
                {[
                  { label: "Date", value: siteConfig.reception.date },
                ].map((item) => (
                  <div key={item.label} className="rounded-md border border-[#F2E1D1] bg-white/70 px-2.5 py-2 shadow-sm">
                    <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] text-[#DEAB98] uppercase mb-0.5">{item.label}</p>
                    <p className="text-sm sm:text-base font-bold text-[#BE8782]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3">
              <button
                onClick={() => openInMaps(receptionMapsLink)}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-[#DEAB98] text-white py-2.5 sm:py-3 shadow-lg hover:translate-y-[-2px] transition-all text-xs sm:text-sm font-semibold"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </button>
              <button
                onClick={() => copyToClipboard(siteConfig.reception.location, 'reception')}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-[#DEAB98]/30 text-[#DEAB98] py-2.5 sm:py-3 hover:bg-[#DEAB98]/5 transition-all text-xs sm:text-sm font-semibold"
              >
                {copiedItems.has('reception') ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Address
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information - Compact for mobile */}
      <div className="relative z-10 mb-4 sm:mb-7 max-w-4xl mx-auto px-3 sm:px-5">
        <div className="text-center mb-3 sm:mb-5">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-[#BE8782]">Important Information</h3>
          <p className="text-[11px] sm:text-xs text-[#BE8782]/80">Everything you need to know</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Attire Guidelines */}
          <div className="relative rounded-2xl border border-white/30 bg-white/80 backdrop-blur-lg shadow-[0_18px_40px_rgba(190,135,130,0.15)] p-3.5 sm:p-5 overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3 relative z-10">
              <div className="p-1.5 rounded-full shadow-md bg-white/80 border border-[#BE8782]/20">
                <Shirt className="w-3.5 h-3.5 text-[#BE8782]" />
              </div>
              <h4 className="font-bold text-xs sm:text-base text-[#BE8782]">Attire Guidelines</h4>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/50 shadow-xl bg-white p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="text-center">
                <p className="text-xs sm:text-sm font-semibold text-[#BE8782] mb-3 sm:mb-4">Formal Attire is encouraged.</p>
                <p className="text-xs sm:text-sm text-[#BE8782]/90 mb-3 sm:mb-4">Please dress according to our Dusty Pink & Beige wedding motif.</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-t border-[#F2E1D1] pt-4">
                  <h5 className="font-bold text-xs sm:text-sm text-[#BE8782] mb-2">Principal Sponsors</h5>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    <p className="text-[#4A4A4A]">
                      Barong Tagalog and long gowns in curated shades of brown.
                    </p>
                    <div className="pt-1">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#BE8782] mb-1">Palette</p>
                      <div className="flex flex-wrap gap-1.5">
                        {sponsorPalette.map((color) => (
                          <span
                            key={color}
                            className="w-7 h-7 rounded-full border border-white/50 shadow-sm"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-[#F2E1D1] pt-4">
                  <h5 className="font-bold text-xs sm:text-sm text-[#BE8782] mb-2">Wedding Guests</h5>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    <p className="text-[#4A4A4A]">
                      Formal attire in soft light-brown and dusty pink tones is lovingly encouraged.
                    </p>
                    <div className="pt-1">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#BE8782] mb-1">Palette</p>
                      <div className="flex flex-wrap gap-1.5">
                        {guestPalette.map((color) => (
                          <span
                            key={color}
                            className="w-7 h-7 rounded-full border border-white/50 shadow-sm"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[11px] sm:text-sm text-center mt-2.5 sm:mt-3 text-[#BE8782] font-semibold">
              Note: Strictly no jeans and no shorts.
            </p>
          </div>

          {/* Travel & Parking - Compact */}
          <div className="relative rounded-2xl border border-white/30 bg-white/80 backdrop-blur-lg shadow-[0_18px_40px_rgba(190,135,130,0.15)] p-3.5 sm:p-5 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3 relative z-10">
              <div className="p-1.5 rounded-full shadow-md bg-white/80 border border-[#BE8782]/20">
                <Car className="w-3.5 h-3.5 text-[#BE8782]" />
              </div>
              <h4 className="font-bold text-xs sm:text-base text-[#BE8782]">Parking & Travel</h4>
            </div>
            
            <div className="space-y-3 relative z-10">
              {/* Parking */}
              <div className="rounded-xl p-2.5 sm:p-3 border border-[#BE8782]/25 bg-gradient-to-br from-white/90 to-white/70 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#BE8782]/10 text-[#BE8782]">
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] sm:text-sm font-semibold text-[#BE8782]">Parking Available</p>
                    <p className="text-[10px] sm:text-xs text-[#4A4A4A]/80">
                      Parking is available at both the church and the reception venue. Please arrive early to find a comfortable spot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="rounded-xl p-2.5 sm:p-3 border border-[#BE8782]/25 bg-gradient-to-br from-white/90 to-white/70 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#DEAB98]/15 text-[#BE8782]">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] sm:text-sm font-semibold text-[#BE8782]">Transportation</p>
                    <p className="text-[10px] sm:text-xs text-[#4A4A4A]/80">
                      Taxis, Grab, and private vehicles are welcome. Share your ride details with companions for a smoother arrival.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="rounded-xl p-2.5 sm:p-3 border border-[#DEAB98]/30 bg-gradient-to-br from-white/85 to-white/60">
                <p className="text-[11px] sm:text-sm font-semibold mb-2 flex items-center gap-2 text-[#BE8782]">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#BE8782]/10 text-[#BE8782]">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  Quick Tips
                </p>
                <ul className="text-[10px] sm:text-xs space-y-1 text-[#4A4A4A]/85">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BE8782] mt-0.5">•</span>
                    <span>Plan your route ahead to avoid unexpected delays.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BE8782] mt-0.5">•</span>
                    <span>Please avoid walking during the ceremony. Approach the coordinator or wait to be guided.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BE8782] mt-0.5">•</span>
                    <span>Coordinate carpooling with friends or family when possible.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-500"
          onClick={() => setShowImageModal(null)}
          style={{ backgroundColor: 'rgba(241, 237, 226, 0.95)' }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#8EA58B', opacity: 0.15 }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#D8B0B0', opacity: 0.15, animationDelay: '1s' }} />
          </div>

          <div className="relative max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] bg-gradient-to-br from-white via-white rounded-3xl overflow-hidden shadow-2xl border-2 animate-in zoom-in-95 duration-500 group relative"
            onClick={(e) => e.stopPropagation()}
            style={{ borderColor: '#8EA58B', backgroundColor: '#BCCFC0' }}
          >
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" style={{ background: 'linear-gradient(to right, #8EA58B, #D8B0B0, #8EA58B)' }} />
            
            {/* Enhanced close button */}
            <button
              onClick={() => setShowImageModal(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 z-20 hover:bg-white backdrop-blur-sm p-2.5 sm:p-3 rounded-xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 border-2 group/close"
              title="Close (ESC)"
              style={{ backgroundColor: '#BCCFC0', borderColor: '#8EA58B', color: '#1a1a1a' }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover/close:text-red-500 transition-colors" />
            </button>

            {/* Venue badge */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6 z-20">
              <div className="flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border-2" style={{ backgroundColor: '#BCCFC0', borderColor: '#8EA58B' }}>
                {showImageModal === 'ceremony' ? (
                  <>
                    <Heart className="w-4 h-4" fill="#D8B0B0" style={{ color: '#8EA58B' }} />
                    <span className="text-xs sm:text-sm font-bold" style={{ color: '#1a1a1a' }}>Ceremony Venue</span>
                  </>
                ) : (
                  <>
                    <Utensils className="w-4 h-4" style={{ color: '#D8B0B0' }} />
                    <span className="text-xs sm:text-sm font-bold" style={{ color: '#1a1a1a' }}>Reception Venue</span>
                  </>
                )}
              </div>
            </div>

            {/* Image section with enhanced effects */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden" style={{ backgroundColor: '#BCCFC0' }}>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
              
              <Image
                src={
                  showImageModal === 'ceremony'
                    ? "/Details/Our Lady of Lourdes Parish.jpg"
                    : "/Details/Infinity Tagaytay Events Place.jpg"
                }
                alt={showImageModal === 'ceremony' ? siteConfig.ceremony.location : siteConfig.reception.location}
                fill
                className="object-contain p-6 sm:p-8 md:p-10 transition-transform duration-700 group-hover:scale-105 z-10"
                sizes="95vw"
                priority
              />
            </div>

            {/* Enhanced content section */}
            <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-white to-white/95 backdrop-blur-sm border-t-2 relative" style={{ borderColor: '#8EA58B', backgroundColor: '#BCCFC0' }}>
              {/* Decorative line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#8EA58B]/40 to-transparent" />
              
              <div className="space-y-5">
                {/* Header with venue info */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-3" style={{ color: '#1a1a1a' }}>
                      {showImageModal === 'ceremony' ? (
                        <Heart className="w-6 h-6" fill="#D8B0B0" style={{ color: '#8EA58B' }} />
                      ) : (
                        <Utensils className="w-6 h-6" style={{ color: '#D8B0B0' }} />
                      )}
                      {showImageModal === 'ceremony' ? siteConfig.ceremony.venue : siteConfig.reception.venue}
                    </h3>
                    <div className="flex items-center gap-2 text-sm opacity-70" style={{ color: '#1a1a1a' }}>
                      <MapPin className="w-4 h-4" style={{ color: '#8EA58B' }} />
                      <span>{showImageModal === 'ceremony' ? siteConfig.ceremony.location : siteConfig.reception.location}</span>
                    </div>

                    {/* Date & Time info */}
                    {showImageModal === 'ceremony' && (
                      <div className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border" style={{ color: '#1a1a1a', backgroundColor: '#D8B0B0', opacity: 0.25, borderColor: '#8EA58B' }}>
                        <Clock className="w-4 h-4" style={{ color: '#8EA58B' }} />
                        <span>{siteConfig.ceremony.date} at {siteConfig.ceremony.time}</span>
                      </div>
                    )}
                    {showImageModal === 'reception' && (
                      <div className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border" style={{ color: '#1a1a1a', backgroundColor: '#8EA58B', opacity: 0.25, borderColor: '#D8B0B0' }}>
                        <Clock className="w-4 h-4" style={{ color: '#D8B0B0' }} />
                        <span>{siteConfig.reception.date} - {siteConfig.reception.time}</span>
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => copyToClipboard(
                        showImageModal === 'ceremony' 
                          ? siteConfig.ceremony.location
                          : siteConfig.reception.location,
                        `modal-${showImageModal}`
                      )}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-white border-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md hover:bg-[#D8B0B0]/15 whitespace-nowrap"
                      title="Copy address"
                      style={{ borderColor: '#8EA58B', color: '#1a1a1a' }}
                    >
                      {copiedItems.has(`modal-${showImageModal}`) ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openInMaps(showImageModal === 'ceremony' ? ceremonyMapsLink : receptionMapsLink)}
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg whitespace-nowrap text-white"
                      style={{ background: showImageModal === 'ceremony' ? 'linear-gradient(to right, #8EA58B, #8EA58B)' : 'linear-gradient(to right, #D8B0B0, #D8B0B0)' }}
                      onMouseEnter={(e) => {
                        if (showImageModal === 'ceremony') {
                          e.currentTarget.style.background = 'linear-gradient(to right, #9BB5D8, #8EA58B)'
                        } else {
                          e.currentTarget.style.background = 'linear-gradient(to right, #C89A9A, #D8B0B0)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (showImageModal === 'ceremony') {
                          e.currentTarget.style.background = 'linear-gradient(to right, #8EA58B, #8EA58B)'
                        } else {
                          e.currentTarget.style.background = 'linear-gradient(to right, #D8B0B0, #D8B0B0)'
                        }
                      }}
                    >
                      <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>

                {/* Additional info */}
                <div className="flex items-center gap-2 text-xs opacity-60" style={{ color: '#1a1a1a' }}>
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-3 h-3" />
                    Click outside to close
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline-flex items-center gap-1.5">
                    Press ESC to close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
