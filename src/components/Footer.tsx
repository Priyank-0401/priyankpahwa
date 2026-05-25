"use client";

import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-neutral-100 border-t border-neutral-200 pt-32 pb-8 px-4 lg:px-8 overflow-hidden flex flex-col">
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center">
        <h2 className="text-[clamp(100px,18vw,350px)] font-bold tracking-tighter text-neutral-200/50 whitespace-nowrap">
          PRIYANK
        </h2>
      </div>

      {/* Glassmorphism Interaction Cards */}
      <div className="grid grid-cols-12 gap-4 relative z-10 w-full max-w-5xl mx-auto mb-12">
        {/* Email Card */}
        <a 
          href="mailto:priyankpahwa41@gmail.com" 
          className="col-span-12 lg:col-span-8 bg-neutral-900/5 backdrop-blur-md border border-neutral-900/10 rounded-2xl p-6 lg:p-8 flex justify-between items-end h-[300px] group transition-all duration-500 hover:bg-neutral-900/10 hover:backdrop-blur-xl"
        >
          <span className="text-[clamp(24px,2vw,32px)] font-medium text-neutral-900 transition-transform duration-500 group-hover:translate-x-2">
            Send an Email
          </span>
          <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-100 overflow-hidden group-hover:scale-110 transition-transform duration-500">
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </div>
        </a>

        {/* Social Links Column */}
        <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4 h-[300px]">
          {/* GitHub Card */}
          <a 
            href="https://github.com/Priyank-0401" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-neutral-900/5 backdrop-blur-md border border-neutral-900/10 rounded-2xl p-6 lg:p-8 flex justify-between items-end group transition-all duration-500 hover:bg-neutral-900/10 hover:backdrop-blur-xl"
          >
            <span className="text-[clamp(16px,1.4vw,24px)] font-medium text-neutral-900 transition-transform duration-500 group-hover:translate-x-2">
              GitHub
            </span>
            <ArrowUpRight className="w-5 h-5 text-neutral-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/priyankpahwa41" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-neutral-900/5 backdrop-blur-md border border-neutral-900/10 rounded-2xl p-6 lg:p-8 flex justify-between items-end group transition-all duration-500 hover:bg-neutral-900/10 hover:backdrop-blur-xl"
          >
            <span className="text-[clamp(16px,1.4vw,24px)] font-medium text-neutral-900 transition-transform duration-500 group-hover:translate-x-2">
              LinkedIn
            </span>
            <ArrowUpRight className="w-5 h-5 text-neutral-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </a>
        </div>
      </div>
      
      {/* Footer Bottom Bar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 mt-auto gap-4">
        <span>© {new Date().getFullYear()} Priyank Pahwa. All rights reserved.</span>
        <span>Local Time: {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })} (IST)</span>
      </div>
    </footer>
  );
}
