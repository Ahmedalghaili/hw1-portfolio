import type { CSSProperties } from "react"
import { Brain, Code2, Eye, Server } from "lucide-react"

const groups = [
  {
    title: "LLMs & NLP",
    icon: Brain,
    color: "bg-[#6366F1]",
    items: ["LangChain", "RAG pipelines", "FAISS", "Ollama", "OpenAI API", "Text-to-SQL", "Arabic NLP"],
  },
  {
    title: "Computer Vision & DL",
    icon: Eye,
    color: "bg-[#FF6B7A]",
    items: ["PyTorch", "TensorFlow", "YOLO", "Vision Transformers", "CNNs", "Medical imaging"],
  },
  {
    title: "Backend & Data",
    icon: Server,
    color: "bg-[#2F81F7]",
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "SQL", "Node.js", "Java"],
  },
  {
    title: "Web & Product",
    icon: Code2,
    color: "bg-[#FFC224]",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify / Liquid", "Stripe", "RTL layouts"],
  },
]

export function SkillsSection() {
  return (
    <section id="stack" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div data-reveal className="text-center mb-12 md:mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6366F1] mb-3">Toolbox</p>
          <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 tracking-tight">
            My <span className="bg-[#6366F1] text-white px-3 inline-block">tech stack</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            The tools I reach for, from training models to shipping them inside real products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group, i) => (
            <div
              key={group.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              className="lift bg-white border-[3px] border-black rounded-[24px] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`${group.color} w-11 h-11 border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <group.icon className={`w-5 h-5 ${group.color === "bg-[#FFC224]" ? "text-black" : "text-white"}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold leading-tight">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="bg-[#F6F4EE] border-2 border-black rounded-lg px-2.5 py-1 text-sm font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
