"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Code2, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioMode } from "./PortfolioMode";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#case-study", label: "Case Study" },
  { href: "#projects", label: "Projects" },
  { href: "#how-i-work", label: "How I Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, setMode, isEngineer } = usePortfolioMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-surface-light/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <button
          onClick={() => {
            const element = document.querySelector("#hero");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/priyankpahwa/logo.png"
            alt="Priyank Pahwa"
            className="h-10 w-10 rounded-full"
          />
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors tracking-wide"
            >
              {link.label}
            </button>
          ))}

          <div className="flex items-center bg-surface rounded-full p-1 border border-surface-light/40">
            <button
              onClick={() => setMode("engineer")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isEngineer
                  ? "bg-accent text-background shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Code2 size={13} />
              Engineer View
            </button>
            <button
              onClick={() => setMode("execution")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !isEngineer
                  ? "bg-emerald text-background shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <ClipboardList size={13} />
              Execution View
            </button>
          </div>

          <a
            href="/priyankpahwa/Priyank_Pahwa_Project_Management_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold hover:bg-accent/20 transition-all border border-accent/20"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center bg-surface rounded-full p-0.5 border border-surface-light/40">
            <button
              onClick={() => setMode("engineer")}
              className={`p-2 rounded-full transition-all ${
                isEngineer ? "bg-accent text-background" : "text-muted"
              }`}
            >
              <Code2 size={14} />
            </button>
            <button
              onClick={() => setMode("execution")}
              className={`p-2 rounded-full transition-all ${
                !isEngineer ? "bg-emerald text-background" : "text-muted"
              }`}
            >
              <ClipboardList size={14} />
            </button>
          </div>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-surface-light/50 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-lg font-medium text-muted hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/priyankpahwa/Priyank_Pahwa_Project_Management_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent/10 text-accent font-semibold hover:bg-accent/20 transition-all border border-accent/20 mt-2"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
