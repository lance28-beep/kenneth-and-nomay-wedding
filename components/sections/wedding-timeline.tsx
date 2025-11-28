"use client"

import type { JSX } from "react"
import Image from "next/image"
import { Section } from "@/components/section"

interface TimelineEvent {
  time: string
  title: string
  Icon: () => JSX.Element
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "2:00 PM",
    title: "Guest Arrival / Call Time",
    Icon: ClocheIcon,
  },
  {
    time: "2:30 PM",
    title: "Processional",
    Icon: RingsIcon,
  },
  {
    time: "3:00 PM",
    title: "Ceremony & Exchange of Vows",
    Icon: DanceIcon,
  },
  {
    time: "4:00 PM",
    title: "Post-Ceremony Pictorial",
    Icon: ClocheIcon,
  },
  {
    time: "5:00 PM",
    title: "Cocktails & Social Hour",
    Icon: DinnerIcon,
  },
  {
    time: "6:00 PM",
    title: "Reception Dinner",
    Icon: DinnerIcon,
  },
  {
    time: "8:00 PM",
    title: "Program & Celebration",
    Icon: MicrophoneIcon,
  },
  {
    time: "10:00 PM",
    title: "Send-off",
    Icon: FireworksIcon,
  },
]

export function WeddingTimeline() {
  return (
    <Section id="wedding-timeline" className="relative overflow-hidden bg-[#F2E1D1]">
      {/* Background decorations - Dusty Pink & Beige */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#E9AA9B]/20 via-[#E9AA9B]/8 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#E9AA9B]/20 via-[#E9AA9B]/8 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E1D1]/40 via-transparent to-[#F2E1D1]/40" />
        <div className="absolute top-12 left-12 w-32 h-32 bg-[#E9AA9B]/20 rounded-full blur-2xl opacity-80 animate-pulse" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#E9AA9B]/15 rounded-full blur-xl opacity-70 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-24 w-28 h-28 bg-[#E9AA9B]/20 rounded-full blur-2xl opacity-70 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-24 right-16 w-24 h-24 bg-[#E9AA9B]/15 rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#F2E1D1]/30 rounded-full blur-3xl opacity-70 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>


      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
          <div className="w-12 sm:w-16 h-px bg-[#BE8782]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#BE8782]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#BE8782]/70" />
          <div className="w-12 sm:w-16 h-px bg-[#BE8782]/50" />
        </div>
        <h2 className="imperial-script-regular text-3xl sm:text-4xl md:text-5xl text-[#BE8782]">
          Wedding Timeline
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#BE8782]/80 font-light mt-2 max-w-md mx-auto">
          A glimpse of the moments we'll share
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-6 sm:py-8 md:py-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#BE8782]/40 via-[#BE8782] to-[#BE8782]/40 -translate-x-1/2 pointer-events-none">
          <div className="absolute top-0 w-1 h-1 rounded-full bg-[#BE8782]" />
          <div className="absolute bottom-0 w-1 h-1 rounded-full bg-[#BE8782]" />
        </div>

        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {timelineEvents.map((event) => (
            <div
              key={event.title}
              className="relative flex flex-col items-center text-center gap-3 px-6 sm:px-10 w-full max-w-sm mx-auto"
            >
              <IconBadge Icon={event.Icon} />
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#BE8782] uppercase">
                {event.time}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-playfair text-[#BE8782] uppercase tracking-[0.1em]">
                {event.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function IconBadge({ Icon }: { Icon: () => JSX.Element }) {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#BE8782] bg-white flex items-center justify-center shadow-[0_6px_18px_rgba(190,135,130,0.3)]">
      <Icon />
    </div>
  )
}

function RingsIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#BE8782]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="13" cy="19" r="7" />
      <circle cx="21" cy="13" r="7" />
    </svg>
  )
}

function ClocheIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#BE8782]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 23h22" />
      <path d="M8 23a8 8 0 1 1 16 0" />
      <path d="M16 11v-2" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
    </svg>
  )
}

function MicrophoneIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#BE8782]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="12" y="3" width="8" height="14" rx="4" />
      <path d="M10 12v3a6 6 0 0 0 12 0v-3" />
      <path d="M16 19v6" />
      <path d="M12 25h8" />
    </svg>
  )
}

function DinnerIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#BE8782]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 23h22" />
      <path d="M8 23a8 8 0 0 1 16 0" />
      <path d="M12 12V5" />
      <path d="M20 12V5" />
      <path d="M16 10V5" />
    </svg>
  )
}

function DanceIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#BE8782]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 9c3-4 9-4 9 2 0 4-5 8-9 10-4-2-9-6-9-10 0-6 6-6 9-2z" />
    </svg>
  )
}

function FireworksIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#BE8782]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 5v6" />
      <path d="M9 7l3 5" />
      <path d="M23 7l-3 5" />
      <path d="M8 19l4-3" />
      <path d="M24 19l-4-3" />
      <path d="M6 13h6" />
      <path d="M20 13h6" />
      <path d="M12 27l4-8 4 8" />
    </svg>
  )
}

