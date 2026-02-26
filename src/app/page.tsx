import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThinkingVisual from "@/components/ThinkingVisual";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <ThinkingVisual />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
