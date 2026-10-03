"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ArrowUpRight, Mail, Menu, X } from "lucide-react"
import { studentInfo } from "@/lib/student-info"

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

const EMAIL = "mailto:ahmedalghili74@gmail.com"

export function Navigation() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null)
  const linkRow = useRef<HTMLDivElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

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

  // Tighten the bar once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Slide the active pill under the current desktop link. Re-measure whenever the
  // row resizes (web-font swap, window resize) so the pill never drifts off its link.
  const [pillReady, setPillReady] = useState(false)
  useLayoutEffect(() => {
    const row = linkRow.current
    if (!row) return
    const measure = () => {
      const link = row.querySelector<HTMLElement>(`[data-id="${active}"]`)
      setPill(link && link.offsetWidth > 0 ? { x: link.offsetLeft, w: link.offsetWidth } : null)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(row)
    return () => ro.disconnect()
  }, [active])

  // First placement snaps into position; only later changes animate.
  useEffect(() => {
    if (!pill || pillReady) return
    const id = requestAnimationFrame(() => setPillReady(true))
    return () => cancelAnimationFrame(id)
  }, [pill, pillReady])

  // Mobile menu: close on Escape or outside click.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (!panel.current?.contains(target) && !toggle.current?.contains(target)) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 px-3 md:px-4 pt-3 pb-2">
      <div className="relative max-w-6xl mx-auto">
        <nav
          aria-label="Primary"
          className={`nav-bar flex items-center gap-3 bg-white border-[3px] border-black rounded-2xl pl-2 pr-2 py-2 ${
            scrolled ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          }`}
        >
          {/* Brand */}
          <a href="#home" className="press group flex items-center gap-2.5 pr-2 rounded-xl flex-shrink-0">
            <span className="relative w-10 h-10 md:w-11 md:h-11 bg-[#FFC224] border-[3px] border-black rounded-xl flex items-center justify-center font-bold text-sm md:text-base tracking-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              AA
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B7A] border-2 border-black rounded-full" />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] md:text-base font-bold">{studentInfo.nameEn}</span>
              <span className="block text-[11px] md:text-xs font-semibold text-gray-500">AI Engineer · Researcher</span>
            </span>
          </a>

          {/* Desktop links with sliding active pill */}
          <div ref={linkRow} className="relative hidden xl:flex flex-1 items-center justify-center gap-0.5">
            {pill && (
              <span
                aria-hidden="true"
                data-ready={pillReady}
                className="nav-pill absolute top-0 left-0 h-full bg-black rounded-xl"
                style={{ width: pill.w, transform: `translateX(${pill.x}px)` }}
              />
            )}
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.id}
                  data-id={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative z-10 px-3 py-2 rounded-xl text-[15px] font-bold leading-none transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#0B0B0B] hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="ml-auto xl:ml-0 flex items-center gap-2 flex-shrink-0">
            <a
              href={EMAIL}
              className="press hidden sm:inline-flex items-center gap-2 bg-[#FFC224] border-[3px] border-black rounded-xl px-4 py-2 text-[15px] font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            >
              <Mail className="w-4 h-4" />
              Email me
            </a>

            <button
              ref={toggle}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="press xl:hidden w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center"
            >
              <span className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 transition-[opacity,transform] duration-200 ease-out ${
                    open ? "opacity-0 rotate-90 scale-75" : "opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 transition-[opacity,transform] duration-200 ease-out ${
                    open ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile / tablet menu */}
        <div
          id="mobile-menu"
          ref={panel}
          data-open={open}
          className="nav-panel xl:hidden absolute left-0 right-0 top-full mt-3 bg-white border-[3px] border-black rounded-2xl p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          <ul className="grid grid-cols-2 gap-2">
            {links.map((link, i) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`press flex items-center justify-between rounded-xl border-2 px-4 py-3 text-base font-bold ${
                      isActive ? "bg-black text-white border-black" : "bg-[#F6F4EE] border-transparent hover:border-black"
                    }`}
                  >
                    {link.label}
                    <span className={`text-xs tabular-nums ${isActive ? "text-white/60" : "text-black/35"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href={EMAIL}
            onClick={() => setOpen(false)}
            className="press mt-3 flex items-center justify-center gap-2 bg-[#FFC224] border-[3px] border-black rounded-xl px-4 py-3 text-base font-bold"
          >
            <Mail className="w-4 h-4" />
            ahmedalghili74@gmail.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
