import type React from "react"
import type { Metadata, Viewport } from "next"

import "./globals.css"

import { Onest } from "next/font/google"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal-observer"
import { asset } from "@/lib/asset"

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Ahmed Alghaili — AI Engineer & Researcher",
  description:
    "Coursework portfolio of Ahmed Alghaili: education, experience, research in computer vision and deep learning, and AI projects.",
  openGraph: {
    title: "Ahmed Alghaili — AI Engineer & Researcher",
    description: "LLM systems, RAG chatbots, and computer vision research.",
    images: [asset("/images/portrait.jpg")],
  },
}

export const viewport: Viewport = {
  themeColor: "#FFC224",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Opt in to scroll-reveal before first paint so nothing flashes; without JS everything stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('IntersectionObserver' in window)document.documentElement.classList.add('reveal-ready')",
          }}
        />
      </head>
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>
        <div
          aria-hidden="true"
          className="scroll-progress fixed top-0 left-0 right-0 h-1 bg-[#FF6B7A] z-[60]"
        />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  )
}
