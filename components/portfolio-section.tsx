"use client"

import { useState } from "react"
import { ArrowUpRight, Bot, Database, FileSearch, FlaskConical, Globe, GraduationCap, Languages, PenTool, ShoppingBag } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Category = "ai" | "web"

type Project = {
  title: string
  description: string
  tags: string[]
  color: string
  icon: LucideIcon
  category: Category
  href?: string
}

const projects: Project[] = [
  {
    title: "Healthcare Conversational Chatbot (Visualsoft)",
    description:
      "Built a domain-specific healthcare chatbot handling patient intake queries, symptom triage FAQs, and appointment information in Arabic and English. Designed intent classification and entity extraction pipelines tailored to medical terminology with safety guardrails. Delivered via versioned REST API for real-world clinical deployment.",
    tags: ["Python", "NLP", "LangChain"],
    color: "bg-[#6366F1]",
    icon: Bot,
    category: "ai",
  },
  {
    title: "Natural Language Database Query Chatbot (Visualsoft)",
    description:
      "Developed a conversational interface that translates plain natural language questions into safe, read-only SQL queries executed against live PostgreSQL databases. Built schema-awareness and query validation layers to prevent injection risks. Enabled non-technical business users to interrogate operational databases without SQL knowledge.",
    tags: ["Python", "Text-to-SQL", "LangChain"],
    color: "bg-[#2F81F7]",
    icon: Database,
    category: "ai",
  },
  {
    title: "Secure Medical Document QA Chatbot (RAG)",
    description:
      "Built a fully local, privacy-first RAG chatbot over medical textbooks and clinical references with zero patient data leaving the server. FAISS vector indexing enables sub-second semantic retrieval across thousands of document chunks. Designed for offline clinical decision support environments.",
    tags: ["LangChain", "FAISS", "Ollama"],
    color: "bg-[#FF6B7A]",
    icon: FileSearch,
    category: "ai",
  },
  {
    title: "Realistic Arabic Handwriting Generation",
    description:
      "Created a generative AI pipeline for personalised Arabic handwriting synthesis, handling all four positional character forms with dynamic image stitching for full-sentence output. Applied to educational and cultural-preservation use cases, demonstrating deep proficiency in Arabic NLP, typography, and morphological variation.",
    tags: ["TensorFlow", "Generative AI"],
    color: "bg-[#FFC224]",
    icon: PenTool,
    category: "ai",
  },
  {
    title: "Laboratory Management Desktop Application",
    description:
      "Designed and built a desktop application for Al-Saeed University's laboratory to manage patient samples, test records, and result reporting — replacing a fully manual paper system. Implemented automated report generation, local database storage with search, filter, and export capabilities accessible to lab technicians.",
    tags: ["Java", "Python", "SQL"],
    color: "bg-[#6366F1]",
    icon: FlaskConical,
    category: "web",
  },
  {
    title: "Multi-Domain Web Platform (E-Commerce + LMS)",
    description:
      "Architected a unified full-stack platform combining e-commerce, LMS, and live dashboards as sole developer. Implemented JWT authentication, role-based access control, multilingual support, and Stripe payment integration with React, Node.js, and PostgreSQL.",
    tags: ["Next.js", "React", "Stripe"],
    color: "bg-[#2F81F7]",
    icon: Globe,
    category: "web",
  },
  {
    title: "Yemen Apiaries — E-Commerce Website",
    description:
      "Built a live e-commerce store for a premium Yemeni honey brand in Australia. Created custom Shopify theme with product catalogue, blog, and mobile-first responsive design. Live at yemenapiaries.com.au with optimized SEO.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    color: "bg-[#FF6B7A]",
    icon: ShoppingBag,
    category: "web",
    href: "https://yemenapiaries.com.au",
  },
  {
    title: "YouTalk Academy — English Language Institute Platform",
    description:
      "Built a full-featured LMS web platform for YouTalk Academy covering online tests, homework submission, and digital attendance tracking. Developed role-based dashboards for students, teachers, and administrators with automated grading and file upload capabilities.",
    tags: ["Next.js", "PostgreSQL", "LMS"],
    color: "bg-[#FFC224]",
    icon: GraduationCap,
    category: "web",
  },
  {
    title: "Syatibiy Academy — Arabic Language Teaching Platform",
    description:
      "Developed a dedicated online platform for Syatibiy Academy to deliver Arabic language courses with full RTL layout, Arabic typography, and bilingual support. Built course management, student progress tracking, and content delivery modules tailored to Arabic language pedagogy.",
    tags: ["Next.js", "RTL", "Arabic"],
    color: "bg-[#6366F1]",
    icon: Languages,
    category: "web",
  },
]

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "ai", label: "AI & ML" },
  { id: "web", label: "Web & Software" },
]

export function PortfolioSection() {
  const [filter, setFilter] = useState<"all" | Category>("all")
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div data-reveal className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-[#E0A800] mb-3">Selected work</p>
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-8 tracking-tight">
              Take a look at my <span className="bg-[#FFC224] text-black px-3 inline-block">projects</span>
            </h2>

            {/* Filter is used often, so it switches instantly — no animation */}
            <div role="group" aria-label="Filter projects" className="inline-flex flex-wrap justify-center gap-2 bg-[#F6F4EE] border-[3px] border-black rounded-2xl p-1.5">
              {filters.map((f) => {
                const count = f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length
                const isActive = filter === f.id
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setFilter(f.id)}
                    className={`press px-4 py-2 rounded-xl text-sm md:text-base font-bold ${
                      isActive ? "bg-black text-white" : "text-black hover:bg-black/5"
                    }`}
                  >
                    {f.label} <span className={`tabular-nums ${isActive ? "text-white/60" : "text-black/40"}`}>{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((project) => {
              const Icon = project.icon
              const darkIcon = project.color === "bg-[#FFC224]"
              return (
                <article
                  key={project.title}
                  className="lift group bg-white border-[3px] border-black rounded-[24px] overflow-hidden flex flex-col"
                >
                  <div className={`${project.color} border-b-[3px] border-black px-6 py-5 flex items-center justify-between`}>
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <span className={`text-sm font-bold tabular-nums ${darkIcon ? "text-black/70" : "text-white/80"}`}>
                      {String(projects.indexOf(project) + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 leading-tight text-[#0B0B0B] text-balance">{project.title}</h3>
                    <p className="text-[15px] text-[#393939] leading-[24px] font-medium mb-5 flex-1">{project.description}</p>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-[#F6F4EE] border-2 border-black rounded-lg px-2.5 py-0.5 text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="press ml-auto inline-flex items-center gap-1 bg-black text-white rounded-lg px-3 py-1 text-xs font-bold"
                        >
                          Live site
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
