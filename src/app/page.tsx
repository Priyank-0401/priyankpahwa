import { PortfolioModeProvider } from "@/components/PortfolioMode";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import Horizon from "@/components/Horizon";
import HowIWork from "@/components/HowIWork";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PortfolioModeProvider>
      <main className="w-full">
        <Navbar />
        <Hero />
        <CaseStudy />
        <Projects />
        <Horizon />
        <HowIWork />
        <Skills />
        <Contact />
      </main>
    </PortfolioModeProvider>
  );
}
