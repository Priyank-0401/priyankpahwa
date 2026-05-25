"use client";

import { motion } from "framer-motion";

const TECH_STACK = {
  topRow: [
    { name: "React", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16"><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse></svg> },
    { name: "TypeScript", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M2.5 2v20h19V2h-19zm10.74 16.51c-2.45 0-3.51-1.31-3.92-2.34l1.77-1.12c.31.7.94 1.7 2.12 1.7 1.05 0 1.63-.52 1.63-1.25 0-1.84-4.22-.85-4.22-4.14 0-1.57 1.3-2.73 3.32-2.73 2.16 0 3.19 1.15 3.54 1.95l-1.74 1.03c-.23-.55-.7-1.24-1.83-1.24-.95 0-1.47.51-1.47 1.13 0 1.76 4.25.75 4.25 4.19 0 1.64-1.28 2.82-3.45 2.82zM7.22 10.36H3.64V8.62h9.1v1.74H9.17v7.94H7.22v-7.94z"/></svg> },
    { name: "Java", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg> },
  ],
  bottomRow: [
    { name: "Spring Boot", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg> },
    { name: "Node.js", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M11.832 24l-9.456-5.46v-10.92l9.456-5.46 9.456 5.46v10.92zM12 1.954l-8.243 4.76v9.52l8.243 4.76 8.243-4.76v-9.52z"/></svg> },
    { name: "MySQL", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg> },
    { name: "Firebase", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg> },
    { name: "GCP", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg> },
    { name: "Git", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 15v-2a3 3 0 0 0-3-3H9"/><path d="M6 9v6"/></svg> },
  ]
};

export function TechStackBento() {
  return (
    <div className="w-full mt-12 lg:mt-24 mb-16 lg:mb-32">
       {/* Bento Grid Container */}
       <div className="w-full flex flex-col border-l border-t border-neutral-200">
          
          {/* Top Row (3 items) */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {TECH_STACK.topRow.map((tech, i) => (
              <div 
                key={i} 
                className="group relative h-[250px] lg:h-[350px] border-r border-b border-neutral-200 bg-neutral-100 flex items-center justify-center transition-colors duration-300 hover:bg-neutral-900 cursor-pointer"
              >
                 <div className="text-neutral-800 group-hover:text-neutral-100 transition-colors duration-300">
                    {tech.svg}
                 </div>
                 <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-neutral-800 group-hover:text-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   {tech.name}
                 </span>
              </div>
            ))}
          </div>

          {/* Bottom Row (6 items) */}
          <div className="grid grid-cols-2 md:grid-cols-6">
            {TECH_STACK.bottomRow.map((tech, i) => (
              <div 
                key={i} 
                className="group relative h-[150px] lg:h-[200px] border-r border-b border-neutral-200 bg-neutral-100 flex items-center justify-center transition-colors duration-300 hover:bg-neutral-900 cursor-pointer"
              >
                 <div className="text-neutral-800 group-hover:text-neutral-100 transition-colors duration-300">
                    {tech.svg}
                 </div>
                 <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-widest text-neutral-800 group-hover:text-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                   {tech.name}
                 </span>
              </div>
            ))}
          </div>

       </div>
    </div>
  );
}
