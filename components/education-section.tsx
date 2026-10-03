import type { CSSProperties } from "react"
import { GraduationCap, MapPin } from "lucide-react"
import { education } from "@/lib/student-info"

export function EducationSection() {
  return (
    <section id="education" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div data-reveal className="text-center mb-12 md:mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2F81F7] mb-3">Education</p>
          <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 tracking-tight">
            My <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">education</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
            The academic foundation behind my work in AI, computer vision, and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              className="lift bg-white border-[3px] border-black rounded-[24px] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-base md:text-lg font-bold text-[#0B0B0B]">{item.period}</span>
                <div className="w-11 h-11 bg-[#2F81F7] border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-[26px] leading-tight md:leading-[36px] font-bold text-[#0B0B0B] mb-1">
                {item.degree}
              </h3>
              <p className="text-base md:text-lg font-semibold text-[#2F81F7] mb-2">{item.school}</p>
              <p className="flex items-center gap-1.5 text-sm md:text-base text-[#393939] font-medium mb-5">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {item.location}
              </p>
              {"gpa" in item && item.gpa ? (
                <span className="inline-block bg-[#FFC224] border-2 border-black rounded-lg px-3 py-1 text-sm font-bold tabular-nums">
                  GPA {item.gpa}
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 bg-[#22C55E] border-2 border-black rounded-lg px-3 py-1 text-sm font-bold">
                  {"status" in item ? item.status : null}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
