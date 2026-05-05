import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-4 pb-2">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 bg-white border-4 border-black rounded-xl px-4 md:px-5 py-3 md:py-2 max-w-6xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full"></div>
          </div>

          <Button
            asChild
            className="md:hidden bg-black text-white hover:bg-black/90 rounded-sm px-4 h-10 min-w-[44px] flex-shrink-0"
          >
            <a href="mailto:ahmedalghili74@gmail.com" aria-label="Email Ahmed">
              <Mail className="w-6 h-6" strokeWidth={2.5} />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-3 md:gap-4 md:flex-1 md:justify-center overflow-x-auto whitespace-nowrap md:px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a href="#home" className="text-[14px] md:text-[18px] font-bold leading-[16px] md:leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="#services" className="text-[14px] md:text-[18px] font-bold leading-[16px] md:leading-[20px] hover:opacity-70 transition-opacity">
            Services
          </a>
         
          <a href="#about" className="text-[14px] md:text-[18px] font-bold leading-[16px] md:leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#portfolio" className="text-[14px] md:text-[18px] font-bold leading-[16px] md:leading-[20px] hover:opacity-70 transition-opacity">
            Portfolio
          </a>
          <a href="#experience" className="text-[14px] md:text-[18px] font-bold leading-[16px] md:leading-[20px] hover:opacity-70 transition-opacity">
            Experience
          </a>
          <a href="#research" className="text-[14px] md:text-[18px] font-bold leading-[16px] md:leading-[20px] hover:opacity-70 transition-opacity">
            Research
          </a>
       
        </div>

        <Button
          asChild
          className="hidden md:flex bg-black text-white hover:bg-black/90 rounded-sm px-4 md:px-5 h-10 md:h-12 min-w-[44px] flex-shrink-0"
        >
          <a href="mailto:ahmedalghili74@gmail.com" aria-label="Email Ahmed">
            <Mail className="w-6 h-6 md:w-10 md:h-10" strokeWidth={2.5} />
          </a>
        </Button>
      </nav>
    </div>
  )
}
