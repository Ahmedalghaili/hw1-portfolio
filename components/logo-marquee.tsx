export function LogoMarquee() {
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

  return (
    <div id="skills" className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-10 md:py-12 -rotate-[5deg] mt-10 md:mt-12 mb-10 md:mb-12 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-6">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white text-lg font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
