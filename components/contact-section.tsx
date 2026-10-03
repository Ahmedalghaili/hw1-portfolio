"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy, Github, Linkedin, Mail, MessageCircle } from "lucide-react"

const EMAIL = "ahmedalghili74@gmail.com"

const channels = [
  { label: "GitHub", value: "@Ahmedalghaili", href: "https://github.com/Ahmedalghaili", icon: Github },
  { label: "LinkedIn", value: "ahmed-alghaili", href: "https://www.linkedin.com/in/ahmed-alghaili", icon: Linkedin },
  { label: "WhatsApp", value: "+62 821-3490-8249", href: "https://wa.me/6282134908249", icon: MessageCircle },
]

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <div
        data-reveal
        className="max-w-6xl mx-auto bg-[#FFC224] border-4 border-black rounded-[32px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 md:p-12 lg:border-r-4 border-black">
            <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-3">Contact</p>
            <h2 className="text-4xl md:text-[56px] md:leading-[64px] font-bold tracking-tight mb-5 text-balance">
              Let&apos;s build something <span className="bg-black text-white px-3 inline-block -rotate-1">intelligent</span>
            </h2>
            <p className="text-[#262626] text-base md:text-lg font-medium leading-relaxed max-w-xl mb-8">
              Research collaboration, an AI product idea, or a course project question — my inbox is open and I usually
              reply within a day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="press inline-flex items-center justify-center gap-2 bg-black text-white rounded-xl px-7 py-4 text-base md:text-lg font-semibold hover:bg-black/85"
              >
                <Mail className="w-5 h-5" />
                Send an email
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-live="polite"
                className="press inline-flex items-center justify-center gap-2 bg-white border-[3px] border-black rounded-xl px-6 py-4 text-base font-semibold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none min-w-[230px]"
              >
                {/* Two stacked labels cross-fade; blur bridges the swap so it reads as one change */}
                <span className="relative inline-grid">
                  <span
                    className={`col-start-1 row-start-1 inline-flex items-center justify-center gap-2 transition-[opacity,filter,transform] duration-200 ease-out ${
                      copied ? "opacity-0 blur-[2px] scale-95" : "opacity-100"
                    }`}
                  >
                    <Copy className="w-4 h-4" />
                    Copy email address
                  </span>
                  <span
                    className={`col-start-1 row-start-1 inline-flex items-center justify-center gap-2 text-[#15803D] transition-[opacity,filter,transform] duration-200 ease-out ${
                      copied ? "opacity-100" : "opacity-0 blur-[2px] scale-95"
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    Copied!
                  </span>
                </span>
              </button>
            </div>
          </div>

          <ul className="bg-white border-t-4 lg:border-t-0 border-black divide-y-[3px] divide-black">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 px-8 py-6 hover:bg-[#F6F4EE] transition-colors"
              >
                <span className="w-11 h-11 bg-[#FF6B7A] border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">Email</span>
                  <span className="block font-bold truncate">{EMAIL}</span>
                </span>
              </a>
            </li>
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-8 py-6 hover:bg-[#F6F4EE] transition-colors"
                >
                  <span className="w-11 h-11 bg-[#2F81F7] border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">{c.label}</span>
                    <span className="block font-bold truncate">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
