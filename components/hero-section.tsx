import type { CSSProperties } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties


export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 pt-8 pb-6 md:pt-14 md:pb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <div
            className="enter inline-flex items-center gap-2 bg-white border-2 border-black rounded-full pl-3 pr-4 py-1.5 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            style={delay(0)}
          >
            <span className="relative flex w-2.5 h-2.5">
              <span className="ping absolute inline-flex w-full h-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
            </span>
            Open to research & engineering roles
          </div>

          <h1
            className="enter text-[38px] leading-[46px] sm:text-[48px] sm:leading-[58px] lg:text-[68px] lg:leading-[80px] font-bold tracking-tight text-balance"
            style={delay(80)}
          >
            I&apos;m{" "}
            <span className="whitespace-nowrap">
              <span className="bg-[#FF6B7A] text-white px-3 inline-block -rotate-1">Ahmed Alghaili</span>,
            </span>{" "}
            an AI Engineer & <span className="bg-[#2F81F7] text-white px-3 inline-block rotate-1">Researcher</span>
          </h1>

          <p
            className="enter text-[#393939] text-[16px] md:text-[19px] font-medium leading-[28px] md:leading-[32px] max-w-xl mx-auto md:mx-0 text-pretty"
            style={delay(160)}
          >
            I build LLM-powered applications, RAG chatbot systems, and deep-learning computer vision models — production
            AI that is accurate, scalable, and privacy-focused.
          </p>

          <div
            className="enter flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            style={delay(240)}
          >
            <Button
              asChild
              className="press bg-[#0B0B0B] text-white hover:bg-black/85 rounded-xl py-4 px-7 md:py-5 md:px-9 text-base md:text-lg font-semibold h-auto"
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="press bg-white text-black border-[3px] border-black hover:bg-[#FFC224] rounded-xl py-4 px-7 md:py-5 md:px-9 text-base md:text-lg font-semibold h-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            >
              <a href="#research">
                <ArrowDown className="w-5 h-5" />
                See my research
              </a>
            </Button>
          </div>

          <div className="enter flex items-center gap-3 justify-center md:justify-start" style={delay(320)}>
            <span className="text-sm font-bold text-gray-500">Find me on</span>
            <a
              href="https://github.com/Ahmedalghaili"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="press w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-alghaili"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="press w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-[#2F81F7] hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">
            <div
              className="enter-pop relative aspect-[955/992] bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
              style={delay(120)}
            >
              <img
                src="/images/portrait.jpg"
                alt="Portrait of Ahmed Alghaili"
                width={955}
                height={992}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
