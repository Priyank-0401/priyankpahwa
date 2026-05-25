"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-6 left-8 right-8 z-50 grid grid-cols-3 items-center text-[clamp(14px,1vw,18px)] font-medium"
    >
      {/* Left Zone */}
      <div className="flex flex-col">
        <span className="text-neutral-900">India Based</span>
        <span className="text-neutral-500">Working globally</span>
      </div>

      {/* Center Zone */}
      <div className="flex flex-col text-center">
        <span className="text-neutral-500">Building at</span>
        <span className="text-neutral-900">Infosys</span>
      </div>

      {/* Right Zone */}
      <div className="flex justify-end">
        <a
          href="mailto:priyankpahwa41@gmail.com"
          className="group relative flex items-center justify-center h-12 px-6 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-100 overflow-hidden cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-x-2">
            Get in touch
          </span>
          <div className="absolute right-4 z-10 opacity-0 translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-x-0">
            <ArrowUpRight className="w-5 h-5 text-neutral-100" />
          </div>
        </a>
      </div>
    </motion.header>
  );
}
