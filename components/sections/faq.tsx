"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [

  {
    question: "What time should I arrive?",
    answer:
      "Please arrive at the church a little before the suggested guest arrival time, so you can be comfortably seated and settled before the procession begins.",
  },
  {
    question: "What if I arrive late?",
    answer:
      "Please avoid walking during the ceremony. Approach the coordinator or wait for a proper pause to be guided to your seat so we can keep the ceremony solemn.",
  },
  {
    question: "Is there assigned seating for the reception?",
    answer:
      "Yes. Our coordinators will guide you to your assigned table when you arrive at the reception.",
  },

  {
    question: "Can I bring a plus one or children?",
    answer:
      "To keep our wedding intimate and within venue capacity, only the guests named on the invitation will be accommodated.",
  },
  {
    question: "Do I need to RSVP?",
    answer:
      `Yes. If we do not receive your RSVP by April 30, 2026, it will be counted as a \"No.\"\n\n[RSVP_LINK]Click here to RSVP[/RSVP_LINK]`,
  },
  {
    question: "Can I still update my RSVP if my plans change?",
    answer:
      "If you need to cancel or your plans change after submitting your RSVP, please let us or our coordinator know as soon as possible so we can adjust the guest list.",
  },
  {
    question: "Is the ceremony unplugged?",
    answer:
      "Yes. We kindly request that guests refrain from using phones and cameras during the ceremony so everyone can be fully present. Our photographers will capture the important moments for us all to enjoy later.",
  },

  {
    question: "Do you have a gift registry?",
    answer:
      "Your presence is our greatest gift. If you wish to give, details about monetary gifts and payment options are available in the Gift Guide section.",
  },

  {
    question: "How can I help the couple enjoy their day?",
    answer:
      "Arrive on time, follow the attire guidelines, respect the unplugged ceremony, and stay until the end of the program if you can. Your presence and participation mean the world to us.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative bg-[#F2E1D1] overflow-hidden"
    >
      {/* Enhanced background elements with layered depth - Dusty Pink & Beige */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2E1D1] via-[#FFFFFF] to-[#F2E1D1]" />
        
        {/* Soft gradient overlays with dusty pink tones */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#E9AA9B]/30 via-[#E9AA9B]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#E9AA9B]/30 via-[#E9AA9B]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E1D1]/50 via-transparent to-[#F2E1D1]/50" />
        
        {/* Floating decorative circles with enhanced visibility */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E9AA9B]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-[#BE8782]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#E9AA9B]/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#F2E1D1]/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Additional subtle decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-[#DEAB98]/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-[#C2D3C3]/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.2s' }} />
        
        {/* Decorative lines with enhanced visibility */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6CFC9]/40 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6CFC9]/40 to-transparent" />
      </div>


      {/* Section Header */}
      <div className="relative z-10 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 px-3 sm:px-4">
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
          <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-px bg-[#DEAB98]/60" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#BE8782]/80 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#F2E1D1]/80 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#BE8782]/80 rounded-full" />
          <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-px bg-[#DEAB98]/60" />
        </div>
        
        <h2 className="imperial-script-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#BE8782] mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-tight">
          Frequently Asked Questions
        </h2>
        
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#BE8782]/85 font-light max-w-xl mx-auto leading-relaxed px-2">
          Everything you need to know about our day
        </p>
        
        {/* Decorative element below subtitle */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 md:mt-4">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E9AA9B]/80 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#F2E1D1]/80 rounded-full" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E9AA9B]/80 rounded-full" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-3 md:px-6 lg:px-8">
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
            {/* FAQ items */}
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border-2 border-[#DEAB98]/45 bg-white/96 backdrop-blur-sm hover:border-[#BE8782]/60 transition-all duration-300 hover:shadow-[0_10px_32px_rgba(190,135,130,0.22)] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#BE8782]/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className="font-semibold text-[#BE8782] pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-base lg:text-lg font-sans leading-snug sm:leading-relaxed transition-colors duration-200 group-hover:text-[#A96964]">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#DEAB98]/80 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-[#F2E1D1]/60 border-t border-[#DEAB98]/40">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className="text-[#BE8782]/90 leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-base font-sans whitespace-pre-line">
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-[#BE8782] underline font-semibold hover:text-[#A96964] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : (
                            <p className="text-[#BE8782]/90 leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-base font-sans whitespace-pre-line">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
