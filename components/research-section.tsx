import { CheckCircle } from "lucide-react"

export function ResearchSection() {
  const research = [
    {
      title: "YOLO-based fracture detection",
      status: "Published",
    },
    {
      title: "YOLO model comparison research",
      status: "Under review",
    },
    {
      title: "Vision Transformer seismic model",
      status: "IEEE accepted",
    },
  ]

  return (
    <section id="research" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
            Research & <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">Publications</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
            I actively contribute to AI research, focusing on computer vision and deep learning applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {research.map((item, index) => (
            <div
              key={index}
              className="bg-white border-[3px] border-black rounded-[24px] p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#6366F1] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-3">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-[#6366F1] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
