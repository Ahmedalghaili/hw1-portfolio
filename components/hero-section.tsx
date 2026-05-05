import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-6 md:py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="order-2 md:order-1 space-y-4 md:space-y-5 text-center md:text-left">
          <h1 className="text-[32px] leading-[38px] sm:text-[36px] sm:leading-[44px] md:text-[64px] font-bold md:leading-[74px]">
            I&apos;m <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Ahmed Alghaili</span>, an AI Engineer & <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Full stack</span>
          </h1>

          <p className="text-[#393939] text-[15px] md:text-[18px] font-medium leading-[26px] md:leading-[30px] max-w-xl mx-auto md:mx-0">
            AI developer specializing in LLM-powered applications, RAG chatbot systems, and deep learning–based computer vision. I build production-ready AI systems that are accurate, scalable, and privacy-focused.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-2 justify-center md:justify-start">
            <Button
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-4 px-6 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <a href="mailto:ahmedalghili74@gmail.com">
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[260px] sm:max-w-sm md:max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/hero.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
