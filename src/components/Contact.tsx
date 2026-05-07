"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { usePortfolioMode } from "./PortfolioMode";

export default function Contact() {
  const { isEngineer } = usePortfolioMode();

  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-accent font-fira text-sm font-medium tracking-wider">
              {isEngineer ? "BUILD" : "SHIP"}
            </span>
            <div className="h-px w-12 bg-surface-light/30" />
            <span className="text-muted text-sm font-medium tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8">
            {isEngineer ? "Let's Build" : "Let's Ship"}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted leading-relaxed mb-12 max-w-2xl mx-auto">
            {isEngineer ? (
              <>
                If you&apos;re looking for an engineer who understands systems
                <span className="text-foreground"> and </span>
                can own features end-to-end — from architecture to deployment — I&apos;m ready.
              </>
            ) : (
              <>
                If you&apos;re looking for someone who bridges engineering depth
                <span className="text-foreground"> and </span>
                delivery execution — who ships outcomes, not just tasks — I&apos;m ready.
              </>
            )}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="mailto:priyankpahwa41@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-background font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              <Mail size={20} />
              priyankpahwa41@gmail.com
            </motion.a>

            <motion.a
              href="/Priyank_Pahwa_Project_Management_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-surface border border-surface-light/40 text-foreground font-semibold text-lg hover:bg-surface-light transition-colors"
            >
              <ArrowUpRight size={20} />
              View Resume
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Priyank-0401"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-surface-light/30 text-muted hover:text-accent hover:border-accent/30 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/priyankpahwa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-surface-light/30 text-muted hover:text-accent hover:border-accent/30 transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-muted text-sm mt-20">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
