"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import StaggeredMenu from "./StaggeredMenu"

const palette = {
  deepRose: "#BE8782",
  blush: "#E9AA9B",
  peach: "#DEAB98",
  beige: "#F2E1D1",
  white: "#FFFFFF",
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#countdown", label: "Countdown" },
  { href: "#gallery", label: "Gallery" },
  { href: "#messages", label: "Messages" },
  { href: "#details", label: "Details" },
  { href: "#entourage", label: "Entourage" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#guest-list", label: "RSVP" },
  { href: "#registry", label: "Registry" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafIdRef.current != null) return
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null
        setIsScrolled(window.scrollY > 50)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current)
      window.removeEventListener("scroll", onScroll as EventListener)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const sectionIds = navLinks.map(l => l.href.substring(1))
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))
        if (visible.length > 0) {
          const topMost = visible[0]
          if (topMost.target && topMost.target.id) {
            const newActive = `#${topMost.target.id}`
            setActiveSection(prev => (prev === newActive ? prev : newActive))
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const menuItems = useMemo(() => navLinks.map((l) => ({ label: l.label, ariaLabel: `Go to ${l.label}`, link: l.href })), [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? 'bg-[#BE8782]/95 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(190,135,130,0.35)] border-b border-white/20' 
        : 'bg-gradient-to-r from-[#BE8782]/90 via-[#DEAB98]/90 to-[#E9AA9B]/90 backdrop-blur-lg border-b border-white/10'
    }`}>
      {/* Elegant glow effect when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E1D1]/20 via-transparent to-[#F2E1D1]/20 pointer-events-none" />
      )}
      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/10 via-transparent to-[#FFFFFF]/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <Link href="#home" className="flex-shrink-0 group relative z-10">
            <div className="relative">
              <Image
                src="/monogram/navmonogram.png"
                alt="Kenneth & Nomay Monogram"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain group-hover:scale-105 group-active:scale-100 transition-all duration-500"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </Link>

          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
              className={`px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-500 relative group drop-shadow-md ${
                    isActive 
                      ? 'text-[#FFFFFF] bg-gradient-to-br from-[#DEAB98]/80 via-[#BE8782]/80 to-[#DEAB98]/80 backdrop-blur-md shadow-[0_8px_20px_rgba(190,135,130,0.35)] border border-[#F2E1D1]/60' 
                      : 'text-white/85 hover:text-white hover:bg-gradient-to-br hover:from-[#FFFFFF]/10 hover:via-[#DEAB98]/20 hover:to-[#FFFFFF]/10 hover:backdrop-blur-md hover:border hover:border-white/30 hover:shadow-lg hover:scale-105 active:scale-95'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FFFFFF] via-[#F2E1D1] to-[#FFFFFF] transition-all duration-500 rounded-full ${
                    isActive ? 'w-full shadow-[0_0_10px_rgba(242,225,209,0.8)]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_6px_rgba(242,225,209,0.6)]'
                  }`} />
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#F2E1D1] animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
                  )}
                  {/* Subtle accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFFFFF]/15 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </Link>
              )
            })}
          </div>

          <div className="md:hidden flex items-center h-full">
            {/* Decorative halo to improve tap target and visual affordance */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/20 via-[#BE8782]/30 to-transparent blur-md pointer-events-none" />
              <StaggeredMenu
                position="left"
                items={menuItems}
                socialItems={[]}
                displaySocials={false}
                displayItemNumbering={true}
                menuButtonColor="#F2E1D1"
                openMenuButtonColor="#E9AA9B"
                changeMenuColorOnOpen={true}
                colors={["#BE8782", "#DEAB98", "#E9AA9B", "#F2E1D1", "#FFFFFF"]}
                accentColor="#FFFFFF"
                isFixed={true}
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
              />
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
