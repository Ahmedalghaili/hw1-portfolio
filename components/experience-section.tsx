import type { CSSProperties } from "react"
import { Bot, CalendarDays, Code2, FileText, MessagesSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jun 2025 – Sep 2025",
      title: "AI Engineer",
      description:
        "Developed and deployed production NLP systems, focusing on conversational AI and RAG pipelines. Improved system accuracy, reduced hallucination, and ensured scalable API integration.",
      icon: Bot,
      color: "bg-[#6366F1]",
    },
    {
      period: "Nov 2024 – May 2025",
      title: "AI Developer",
      description:
        "Built domain-specific chatbot systems with Arabic NLP support. Delivered AI solutions for healthcare and e-commerce applications.",
      icon: MessagesSquare,
      color: "bg-[#2F81F7]",
    },
    {
      period: "2024 – 2025",
      title: "Software Developer Intern",
      description:
        "Developed healthcare software systems and database solutions. Improved operational workflows through automation and system design.",
      icon: Code2,
      color: "bg-[#FF6B7A]",
    },
    {
      period: "2023 – Present",
      title: "Event Coordinator",
      description:
        "Organize international events and manage cross-cultural communication and logistics.",
      icon: CalendarDays,
      color: "bg-[#FFC224]",
    },
  ]

  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div data-reveal className="text-white pt-0 md:pt-12 md:sticky md:top-28 self-start">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FFC224] mb-3">Experience</p>
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 md:mb-8 tracking-tight">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              I enjoy working across the full AI stack — from data preparation and model training to deployment and system integration.
            </p>
            <Button
              asChild
              className="press bg-white text-black hover:bg-[#FFC224] rounded-xl py-4 px-8 md:py-5 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto"
            >
              <a href="https://www.linkedin.com/in/ahmed-alghaili" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                Full profile on LinkedIn
              </a>
            </Button>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-6 pl-8 md:pl-10">
            <span aria-hidden="true" className="absolute left-[11px] md:left-[15px] top-4 bottom-4 w-[3px] bg-white/25 rounded-full" />
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const darkIcon = exp.color === "bg-[#FFC224]"
              return (
                <li
                  key={exp.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-8 md:-left-10 top-8 w-6 h-6 md:w-8 md:h-8 ${exp.color} border-[3px] border-white rounded-full`}
                  />
                  <article className="bg-white border-4 border-black rounded-3xl">
                    <div className="flex items-center justify-between gap-4 pt-6 md:pt-7 px-6 md:px-8 pb-4 md:pb-5 border-b-[3px] border-black">
                      <span className="text-base md:text-[20px] font-bold text-[#0B0B0B] tabular-nums">{exp.period}</span>
                      <div
                        className={`${exp.color} w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex-shrink-0`}
                      >
                        <Icon className={`w-5 h-5 ${darkIcon ? "text-black" : "text-white"}`} />
                      </div>
                    </div>
                    <div className="px-6 md:px-8 py-5 md:py-6">
                      <h3 className="text-xl md:text-[26px] leading-tight font-bold text-[#0B0B0B] mb-2">{exp.title}</h3>
                      <p className="text-[#393939] text-base md:text-[18px] leading-relaxed">{exp.description}</p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
