import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest } from "next/font/google"
import { Footer } from "@/components/footer"

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Paperfolio - Portfolio Landing Page",
  description: "A playful portfolio landing page",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
