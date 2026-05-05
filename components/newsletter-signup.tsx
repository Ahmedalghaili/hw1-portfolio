import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <div className="bg-white border-[3px] border-black rounded-3xl py-8 md:py-12 px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-2">Subscribe to my newsletter</h3>
        <p className="text-gray-600 text-sm md:text-base">Get updates on AI, machine learning, and real-world system development.</p>
      </div>
      
      <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
        <Input
          type="email"
          placeholder="Enter your email address"
          className="border-[3px] border-black rounded-xl px-4 md:px-6 h-12 md:h-14 pr-32 md:pr-44 text-base placeholder:text-gray-400"
        />
        <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white hover:bg-black/90 rounded-[8px] px-6 md:px-8 text-sm md:text-base font-semibold whitespace-nowrap h-auto py-2">
          Subscribe
        </Button>
      </div>
    </div>
  )
}
