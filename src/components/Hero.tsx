"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SystemsHeroCanvas } from "@/components/SystemsHeroCanvas";

export function Hero() {
  return (
    <section 
      id="hero"
      className="w-full relative flex flex-col items-center bg-neutral-900 min-h-screen overflow-hidden"
    >
      {/* The Advanced Multi-Layer Canvas (Serves as Integrated Background) */}
      <div className="absolute inset-0 w-full h-full -z-10">
         <SystemsHeroCanvas />
      </div>

      {/* Hero Typography Overlaid on Canvas */}
      <div className="flex flex-col w-full px-4 lg:px-8 relative z-30 pt-32 lg:pt-48 pb-24 h-screen justify-center pointer-events-none">
        <div className="w-full max-w-[90rem] mx-auto">
          <span className="text-[clamp(14px,1.2vw,18px)] font-semibold tracking-[0.2em] text-neutral-400 mb-4 block">
            PRIYANK PAHWA
          </span>
        </div>
        <div className="flex justify-between w-full max-w-[90rem] mx-auto items-end text-neutral-100 mix-blend-plus-lighter">
           <h1 className="text-[clamp(40px,8vw,140px)] font-bold tracking-tight leading-[0.8] uppercase">
            A
           </h1>
           <h1 className="text-[clamp(40px,8vw,140px)] font-bold tracking-tight leading-[0.8] uppercase hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">
            SYSTEMS
           </h1>
           <h1 className="text-[clamp(40px,8vw,140px)] font-bold tracking-tight leading-[0.8] uppercase">
            FIRST
           </h1>
        </div>
        
        <div className="w-full max-w-[90rem] mx-auto mt-4 lg:mt-8 flex justify-between text-neutral-100 mix-blend-plus-lighter">
           <h1 className="text-[clamp(40px,8vw,140px)] font-bold tracking-tight leading-[0.8] uppercase md:hidden text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">
            SYSTEMS FIRST
           </h1>
           <h1 className="text-[clamp(48px,14vw,280px)] font-bold tracking-tighter leading-[0.8] uppercase w-full md:text-center text-neutral-100 opacity-90">
            STRATEGIST
           </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-neutral-400 z-40 pointer-events-none hidden md:flex">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-neutral-400" />
          </motion.div>
          <span className="text-xs lg:text-sm font-medium uppercase tracking-widest">Explore Systems</span>
        </div>
      </div>
    </section>
  );
}
