import type { CSSProperties } from "react"
import { BookOpen, Briefcase, GraduationCap, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { studentInfo } from "@/lib/student-info"
import { asset } from "@/lib/asset"

const highlights = [
  {
    icon: Briefcase,
    color: "bg-[#6366F1]",
    title: "3+ years of experience",
    text: "Hands-on experience building AI systems and software applications across multiple domains.",
  },
  {
    icon: BookOpen,
    color: "bg-[#FF6B7A]",
    title: "2 published papers",
    text: "Peer-reviewed work in computer vision and deep learning, including an IEEE conference paper.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 md:gap-16 items-center">
        {/* Student ID card — carries the required EN/CN name and Student ID */}
        <div data-reveal className="flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#2F81F7] border-4 border-black rounded-3xl rotate-3"
            />
            <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
                <span className="font-bold tracking-wide text-sm">STUDENT PROFILE</span>
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="p-6 grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] gap-5 items-center border-b-[3px] border-black">
                <div className="aspect-square rounded-2xl border-[3px] border-black overflow-hidden bg-[#FDB927]">
                  <img
                    src={asset("/images/portrait.jpg")}
                    alt="Portrait of Ahmed Alghaili"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-2xl sm:text-3xl font-bold leading-tight">{studentInfo.nameEn}</p>
                  <p lang="zh" className="text-xl sm:text-2xl font-bold text-[#2F81F7] mt-1">
                    {studentInfo.nameCn}
                  </p>
                  <p className="flex items-center gap-1.5 text-sm text-gray-600 font-medium mt-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {studentInfo.location}
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2">
                <div className="p-5 border-r-[3px] border-black">
                  <dt className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Student ID</dt>
                  <dd className="text-lg font-bold tabular-nums break-all">{studentInfo.studentId}</dd>
                </div>
                <div className="p-5">
                  <dt className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Focus</dt>
                  <dd className="text-lg font-bold">AI · Computer Vision</dd>
                </div>
              </dl>

              {/* Barcode strip for the ID-card feel */}
              <div
                aria-hidden="true"
                className="h-10 mx-5 mb-5 rounded-md bg-[repeating-linear-gradient(90deg,#0B0B0B_0_3px,transparent_3px_6px,#0B0B0B_6px_7px,transparent_7px_11px)]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-7 md:space-y-8">
          <div data-reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-[#FF6B7A] mb-3">About me</p>
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-5 tracking-tight">
              Who&apos;s behind all this <span className="bg-[#2F81F7] text-white px-3 inline-block">work?</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg leading-relaxed font-medium text-pretty">
              I&apos;m an AI Engineer and researcher, currently pursuing a Master&apos;s in Artificial Intelligence at Chang Gung University in Taoyuan, Taiwan. I&apos;m focused on building real-world AI
              systems that solve meaningful problems. My work spans LLM-powered applications, chatbot systems, and
              computer vision models, with hands-on experience in deploying production AI solutions and publishing
              research in deep learning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
                className="bg-white border-[3px] border-black rounded-2xl p-5"
              >
                <div
                  className={`${item.color} w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center mb-3`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div data-reveal>
            <Button
              asChild
              className="press bg-[#0B0B0B] text-white hover:bg-black/85 rounded-xl py-4 px-8 md:py-5 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto"
            >
              <a href="#education">
                <User className="w-5 h-5" />
                My education
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
