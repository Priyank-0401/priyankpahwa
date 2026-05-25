import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Arsenal } from "@/components/Arsenal";
import { Experience } from "@/components/Experience";
import { TechStackBento } from "@/components/TechStackBento";
import { SystemExecution } from "@/components/SystemExecution";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/FloatingDock";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden relative bg-neutral-100">
      <Header />
      <Hero />
      <Work />
      <About />
      
      {/* Tech Stack Skills Bento Grid */}
      <div className="px-4 lg:px-8">
        <TechStackBento />
      </div>

      <SystemExecution />

      <Experience />
      <Arsenal />
      
      <Footer />
      <FloatingDock />
    </main>
  );
}
