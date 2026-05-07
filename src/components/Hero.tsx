"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { usePortfolioMode } from "./PortfolioMode";

export default function Hero() {
  const { isEngineer } = usePortfolioMode();

  const engineerContent = {
    headline: "Building systems that survive real-world usage.",
    subheadline: "Full Stack Engineer focused on scalable workflows and execution.",
    description:
      "I don't just build features. I understand systems. Enterprise platforms across AI, fintech, logistics, and subscription systems — with a focus on architecture, workflows, reliability, and execution.",
    highlights: [
      "React / TypeScript / Next.js",
      "Spring Boot / Java / REST APIs",
      "MySQL / System Design / State Machines",
      "Google Cloud / Firebase / DevOps",
    ],
    cta: "Explore Architecture",
    microHumor: "Currently debugging life decisions and backend workflows.",
  };

  const executionContent = {
    headline: "Leading technical execution.",
    subheadline: "Shipping outcomes, not just features.",
    description:
      "Technical delivery lead who bridges engineering depth with execution excellence. I scope requirements, manage stakeholder communication, enforce UAT standards, and ensure zero-surprise releases.",
    highlights: [
      "Agile / Scrum / SDLC",
      "Scope & Requirements Analysis",
      "UAT Standards & Compliance",
      "Stakeholder Communication",
    ],
    cta: "See Execution",
    microHumor: "I trust deadlines more than optimism. But I hit both.",
  };

  const content = isEngineer ? engineerContent : executionContent;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(56,189,248,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(52,211,153,0.05),_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-surface-light/50 shadow-sm">
              <img
                src="Infosys_logo.svg.png"
                alt="Infosys"
                className="h-5 w-auto transition-all"
              />
              <span className="text-muted text-xs">+</span>
              <img
                src="Accenture.svg.png"
                alt="Accenture"
                className="h-5 w-auto transition-all"
              />
            </div>
          </div>

          <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-4">
            {content.headline}
          </h1>
          <h2 className="font-outfit text-2xl md:text-4xl lg:text-5xl font-medium text-muted leading-[1.1] mb-8">
            {content.subheadline}
          </h2>

          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {content.highlights.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="px-4 py-2 rounded-full bg-surface border border-surface-light/50 text-sm font-medium text-foreground/80 font-fira"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <p className="text-xs text-muted/50 italic font-fira mb-16">
            {content.microHumor}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center"
          >
            <a
              href="#case-study"
              className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <span className="text-xs font-medium tracking-widest uppercase">
                {content.cta}
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
