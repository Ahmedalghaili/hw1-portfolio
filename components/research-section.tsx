import type { CSSProperties } from "react"
import { Activity, ArrowUpRight, ScanSearch } from "lucide-react"

const papers = [
  {
    title: "Adaptive Transfer Learning Strategies for a Vision Transformer-Based Seismic Foundation Model",
    venue: "2026 IEEE International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan)",
    year: "2026",
    type: "Conference paper",
    authors: ["Ahmed Alghaili", "Isack Farady", "Chih-Yang Lin", "Ming-Jen Wang"],
    field: "Geophysics · Vision Transformers",
    tags: ["Vision Transformers", "Transfer learning", "Seismic data"],
    icon: Activity,
    color: "bg-[#2F81F7]",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11652557" },
      { label: "DOI", href: "https://doi.org/10.1109/ICCE-Taiwan71481.2026.11652557" },
    ],
  },
  {
    title: "YOLOv11n-Based Deep Learning Approach for Detecting Fractures in Pediatric X-Rays",
    venue: "bit-Tech Journal",
    year: "2025",
    type: "Journal article",
    authors: ["Ahmed Mohammed Mohammed Nasser Alghaili", "Izzati Muhimmah"],
    field: "Medical imaging · Object detection",
    tags: ["YOLOv11n", "Pediatric X-rays", "Fracture detection"],
    icon: ScanSearch,
    color: "bg-[#FF6B7A]",
    links: [
      { label: "DOI", href: "https://doi.org/10.32877/bt.v8i2.3155" },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-HXOIh4AAAAJ&citation_for_view=-HXOIh4AAAAJ:u5HHmVD_uO8C",
      },
    ],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="bg-[#F6F4EE] border-t-4 border-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="text-center mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#6366F1] mb-3">Research</p>
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 tracking-tight">
              Research & <span className="bg-[#6366F1] text-white px-3 inline-block">Publications</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Peer-reviewed work in computer vision and deep learning — from seismic foundation models to medical
              imaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {papers.map((paper, index) => {
              const Icon = paper.icon
              return (
                <article
                  key={paper.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                  className="lift bg-white border-[3px] border-black rounded-[24px] overflow-hidden flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className={`${paper.color} border-b-[3px] border-black px-6 md:px-8 py-5 flex items-center justify-between gap-4`}>
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-white border-2 border-black text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                        {paper.type}
                      </span>
                      <span className="bg-[#22C55E] border-2 border-black text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                        Published {paper.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">{paper.field}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-3 leading-snug text-balance">
                      {paper.title}
                    </h3>
                    <p className="text-[15px] font-semibold text-[#2F81F7] mb-2">{paper.venue}</p>
                    <p className="text-sm text-[#393939] leading-relaxed mb-5">
                      {paper.authors.map((author, i) => (
                        <span key={author}>
                          {i > 0 && ", "}
                          {author.includes("Alghaili") ? <strong className="text-black">{author}</strong> : author}
                        </span>
                      ))}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="bg-[#F6F4EE] border-2 border-black rounded-lg px-2.5 py-0.5 text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3">
                      {paper.links.map((link, i) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`press inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold border-2 border-black ${
                            i === 0 ? "bg-black text-white hover:bg-black/85" : "bg-white text-black hover:bg-[#FFC224]"
                          }`}
                        >
                          {link.label}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ))}
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
