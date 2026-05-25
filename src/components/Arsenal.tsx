"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function Arsenal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      id: "01",
      title: "Product Systems",
      description: "Translating product requirements into scalable execution workflows through roadmap planning, stakeholder coordination, and delivery systems.",
      primaryTags: ["Agile/Scrum", "Product Roadmap", "Stakeholder Management"],
      secondaryTags: ["Requirement Analysis", "User Stories", "Sprint Coordination"],
      log: "> translating requirements -> orchestrating delivery systems"
    },
    {
      id: "02",
      title: "Workflow Design",
      description: "Designing operational workflows and user-focused system experiences that simplify complex technical processes.",
      primaryTags: ["Workflow Optimization", "Systems Thinking", "UAT"],
      secondaryTags: ["Cross-Functional Collaboration", "Technical Documentation", "Process Mapping"],
      log: "> optimizing operational flow -> reducing delivery friction"
    },
    {
      id: "03",
      title: "Technical Foundation",
      description: "Building scalable backend workflows, API integrations, and system architectures grounded in strong software engineering fundamentals.",
      primaryTags: ["REST APIs", "System Architecture", "Database Design"],
      secondaryTags: ["OOP", "SDLC", "API Integration"],
      log: "> building infrastructure -> establishing scalable integrations"
    }
  ];

  return (
    <section id="arsenal" className="px-2 lg:px-8 py-16 lg:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Micro-animated background noise */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      <div className="flex flex-col gap-16 lg:gap-32 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 px-4 pt-16 lg:pt-32 pb-8 rounded-[2rem] lg:rounded-[3rem] relative z-10 max-w-[150rem] mx-auto">
        
        {/* Header Area */}
        <div className="lg:grid lg:grid-cols-12 gap-24 px-2 lg:px-12">
          <div className="flex flex-col col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-500 uppercase font-mono tracking-widest mb-6">Operating Model</h2>
            <p className="text-neutral-100 text-[clamp(28px,4vw,64px)] font-medium leading-[1.1] lg:leading-[1.05] tracking-tight">
              Bridging product thinking and engineering execution through workflow-driven system design and scalable operational delivery.
            </p>
          </div>
        </div>

        {/* Operating Model List Area */}
        <div className="flex flex-col relative px-4 lg:px-16 mt-8">
          
          {/* Vertical System Line */}
          <div className="hidden lg:block absolute left-[88px] top-10 bottom-20 w-[1px] bg-gradient-to-b from-neutral-800 via-neutral-700 to-transparent"></div>

          <ul className="flex flex-col gap-8 lg:gap-0">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <li 
                  key={index} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 py-12 lg:py-24 border-b border-neutral-800/50 last:border-0 transition-colors duration-700 rounded-2xl lg:rounded-none px-6 lg:px-0 -mx-6 lg:mx-0 ${isHovered ? 'bg-neutral-800/20' : 'hover:bg-neutral-800/10'}`}
                >
                  
                  {/* ID / Number Column */}
                  <div className="lg:col-span-2 flex items-start mb-6 lg:mb-0 relative z-10">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 ${isHovered ? 'border-neutral-100 bg-neutral-100 text-neutral-900 shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'border-neutral-700 bg-neutral-900 text-neutral-500'}`}>
                      <span className="text-sm font-mono font-bold">{service.id}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <h3 className={`text-[clamp(28px,3vw,48px)] font-bold tracking-tight mb-4 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-neutral-200'}`}>
                      {service.title}
                    </h3>
                    <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-400 font-medium leading-[1.6] mb-10 max-w-xl">
                      {service.description}
                    </p>
                    
                    {/* Tags Hierarchy */}
                    <div className="flex flex-col gap-5">
                      {/* Primary Tags */}
                      <ul className="flex gap-3 flex-wrap">
                        {service.primaryTags.map((tag, tIndex) => (
                          <li key={`p-${tIndex}`} className={`text-[11px] lg:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded border transition-colors duration-500 ${isHovered ? 'bg-neutral-100 text-neutral-900 border-neutral-100' : 'bg-transparent text-neutral-300 border-neutral-700'}`}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                      {/* Secondary Tags */}
                      <ul className="flex gap-2 flex-wrap">
                        {service.secondaryTags.map((tag, tIndex) => (
                          <li key={`s-${tIndex}`} className={`text-[10px] lg:text-[11px] text-neutral-500 uppercase tracking-widest px-3 py-1.5 rounded border transition-colors duration-500 ${isHovered ? 'bg-neutral-800 border-neutral-700 text-neutral-400' : 'bg-neutral-900/50 border-neutral-800/50'}`}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Live System Log Output (Right Column) */}
                  <div className="lg:col-span-5 flex items-center justify-start lg:justify-end mt-12 lg:mt-0">
                     <AnimatePresence>
                        {isHovered && (
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex items-center gap-4 bg-neutral-950/80 border border-neutral-800 p-5 rounded-xl shadow-2xl backdrop-blur-md max-w-md w-full"
                          >
                             <Terminal className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                             <span className="text-[11px] lg:text-xs font-mono text-neutral-300 leading-relaxed">
                               {service.log}
                             </span>
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>

                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Bottom Right System Status */}
        <div className="hidden lg:flex absolute bottom-8 right-12 flex-col items-end gap-1 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default">
           <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-mono">System Status</span>
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-mono">Operational</span>
           </div>
        </div>

      </div>
    </section>
  );
}
