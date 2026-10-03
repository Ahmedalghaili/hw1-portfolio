const items = [
  { text: "LLM", icon: "🤖" },
  { text: "RAG", icon: "📚" },
  { text: "Computer Vision", icon: "👁️" },
  { text: "PyTorch", icon: "🔥" },
  { text: "NLP", icon: "📝" },
  { text: "FastAPI", icon: "⚡" },
  { text: "TensorFlow", icon: "🧠" },
  { text: "YOLO", icon: "🎯" },
]

export function LogoMarquee() {
  return (
    <div id="skills" aria-label="Core skills" className="overflow-hidden py-10 md:py-14">
      <div className="-rotate-[3deg] -mx-[10vw] bg-black py-6 md:py-8">
        <div className="flex w-max items-center gap-12 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} aria-hidden={index >= items.length} className="flex items-center gap-3 px-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white text-lg md:text-xl font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
