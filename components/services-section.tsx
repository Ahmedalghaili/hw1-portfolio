import type { CSSProperties } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "LLM & Chatbot Development",
      description: "Design and deploy advanced conversational AI systems using RAG pipelines, LangChain, and OpenAI APIs with high accuracy and reduced hallucination.",
      image: "/images/web-design.svg",
    },
    {
      title: "Computer Vision Solutions",
      description: "Build deep learning models for object detection and medical imaging using YOLO, Vision Transformers, and CNN architectures.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "AI Model Development",
      description: "Train and fine-tune machine learning models using PyTorch and TensorFlow with optimized pipelines and performance evaluation.",
      image: "/images/product-design.svg",
    },
    {
      title: "AI API & Backend Integration",
      description: "Deploy scalable AI systems using FastAPI and REST APIs, ensuring seamless integration into real-world applications.",
      image: "/images/user-research.svg",
    },
    {
      title: "Data Processing & MLOps",
      description: "Develop efficient data pipelines, experiment tracking, and model lifecycle management using modern MLOps tools.",
      image: "/images/motion-graphics.svg",
    },
    {
      title: "Full-stack Websites & Applications",
      description: "Build responsive, production-ready websites and full-stack applications—from UI to backend APIs and deployment.",
      image: "/images/studio-workspace.svg",
    },
  ]

  return (
    <section id="services" className="bg-[#F6F4EE] border-y-4 border-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div data-reveal className="text-center mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FF4A60] mb-3">What I do</p>
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 tracking-tight">
              My broad <span className="bg-[#FF4A60] text-white px-3 inline-block">set of services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              I design and build intelligent AI systems from research to production, combining strong engineering with practical real-world impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <article
                key={service.title}
                data-reveal
                style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as CSSProperties}
                className="lift group bg-white border-[3px] border-black rounded-[28px] overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden border-b-[3px] border-black bg-[#EFEFEF] flex justify-center">
                  <span className="absolute top-4 left-4 z-10 bg-white border-2 border-black rounded-lg px-2 py-0.5 text-sm font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={service.image}
                    alt=""
                    width={382}
                    height={328}
                    className="zoom-img w-3/5 sm:w-full h-auto"
                  />
                </div>
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <h3 className="text-[22px] md:text-[24px] leading-tight font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </article>
            ))}

            {/* Full-width CTA so the grid never ends on a lonely card */}
            <div
              data-reveal
              className="sm:col-span-2 lg:col-span-3 bg-[#FFC224] border-[3px] border-black rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <Image src="/images/get-in-touch.svg" alt="" width={92} height={92} className="w-[76px] h-[76px] md:w-[92px] md:h-[92px] flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-[26px] md:text-[32px] leading-tight font-bold mb-2 text-[#0B0B0B]">Have an AI problem worth solving?</h3>
                <p className="text-[16px] md:text-[18px] leading-relaxed font-medium text-[#393939]">
                  Looking for a custom AI solution or research collaboration? I&apos;m always open to building impactful systems.
                </p>
              </div>
              <Button
                asChild
                className="press bg-black text-white hover:bg-black/85 rounded-xl px-8 py-5 font-semibold text-[17px] h-auto w-full md:w-auto flex-shrink-0"
              >
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Let&apos;s talk
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
