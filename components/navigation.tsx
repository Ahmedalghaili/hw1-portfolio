"use client"

import { useEffect, useRef, useState } from "react"
import { Mail } from "lucide-react"

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
]

export function Navigation() {
  const [active, setActive] = useState("home")
  const scroller = useRef<HTMLDivElement>(null)

  // Highlight the section currently in the middle band of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // On phones the link row scrolls sideways; keep the active link in view.
  useEffect(() => {
    const row = scroller.current
    const link = row?.querySelector<HTMLElement>(`[href="#${active}"]`)
    if (!row || !link || row.scrollWidth <= row.clientWidth) return
    row.scrollTo({ left: link.offsetLeft - row.clientWidth / 2 + link.offsetWidth / 2, behavior: "smooth" })
  }, [active])

  return (
    <div className="sticky top-0 z-50 px-4 pt-3 pb-2">
      <nav
        aria-label="Primary"
        className="flex items-center gap-3 bg-white/95 backdrop-blur border-[3px] md:border-4 border-black rounded-xl pl-2 pr-2 md:pl-3 py-2 max-w-6xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
      >
        <a
          href="#home"
          aria-label="Ahmed Alghaili — back to top"
          className="press w-9 h-9 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-bold tracking-tight"
        >
          AA
        </a>

        <div ref={scroller} className="relative flex-1 min-w-0 flex items-center gap-1 overflow-x-auto whitespace-nowrap md:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`press px-2.5 md:px-3 py-1.5 rounded-lg text-[14px] md:text-[16px] font-bold leading-none ${
                  isActive ? "bg-black text-white" : "text-[#0B0B0B] hover:bg-black/5"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <a
          href="mailto:ahmedalghili74@gmail.com"
          className="press hidden lg:inline-flex items-center gap-2 bg-[#FFC224] border-2 border-black rounded-lg px-4 py-2 text-[15px] font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none flex-shrink-0"
        >
          <Mail className="w-4 h-4" />
          Email me
        </a>
      </nav>
    </div>
  )
}
