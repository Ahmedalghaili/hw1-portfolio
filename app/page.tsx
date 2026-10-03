import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ServicesSection } from "@/components/services-section"
import { SkillsSection } from "@/components/skills-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { ResearchSection } from "@/components/research-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#FFFFFF]">
        <HeroSection />
        <LogoMarquee />
        <AboutSection />
        <EducationSection />
        <ServicesSection />
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <ResearchSection />
        <ContactSection />
      </main>
    </>
  )
}
