import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] border-[4px] border-black rounded-3xl overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/hero.png" alt="About me" fill className="object-cover object-top" />
          </div>
        </div>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
                Who&apos;s behind all this <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">work?</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                I&apos;m an AI Engineer and researcher based in Yogyakarta, Indonesia, focused on building real-world AI systems that solve meaningful problems. My work spans LLM-powered applications, chatbot systems, and computer vision models, with hands-on experience in deploying production AI solutions and publishing research in deep learning.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">3+ years of experience</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Hands-on experience building AI systems and software applications across multiple domains.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">3 research publications</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Published and accepted work in computer vision and deep learning, including IEEE research.
                  </p>
                </div>
              </div>
            </div>

          <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
            <User className="w-5 h-5" />
            More about me
          </Button>
        </div>
      </div>
    </section>
  )
}
