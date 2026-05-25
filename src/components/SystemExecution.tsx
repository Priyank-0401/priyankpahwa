"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, CheckCircle2 } from "lucide-react";

const PIPELINE_NODES = [
  { id: "req", title: "Requirement Analysis", log: "> translating business constraints into executable technical flows... [OK]" },
  { id: "plan", title: "Feature Planning", log: "> architecting data schemas & modeling operational constraints... [OK]" },
  { id: "sprint", title: "Sprint Coordination", log: "> organizing cross-functional velocity & unblocking dependencies... [OK]" },
  { id: "exec", title: "Cross-Functional Execution", log: "> bridging backend architecture with frontend UI systems... [OK]" },
  { id: "uat", title: "UAT & Delivery", log: "> auditing edge cases & facilitating stakeholder sign-off... [OK]" },
  { id: "opt", title: "Workflow Optimization", log: "> identifying bottlenecks & optimizing system latency... [OK]" },
];

export function SystemExecution() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const activeLog = activeNode 
    ? PIPELINE_NODES.find(n => n.id === activeNode)?.log 
    : "> awaiting operational input... [IDLE]";

  return (
    <section className="w-full py-24 lg:py-32 bg-neutral-100 relative overflow-hidden" id="system-execution">
      {/* Subtle background grid/noise */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>

      <div className="max-w-[150rem] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
           <h2 className="text-[clamp(40px,5vw,80px)] font-bold tracking-tight text-neutral-900 leading-[0.9] uppercase mb-6">
             System <br/> Execution
           </h2>
           <p className="text-sm lg:text-base text-neutral-500 uppercase tracking-widest font-semibold max-w-xl">
             Operational Intelligence & Product Delivery Architecture
           </p>
        </div>

        {/* Hybrid Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-neutral-300 pt-16">
           
           {/* Left: Process Pipeline */}
           <div className="lg:col-span-5 flex flex-col relative py-4">
              <div className="absolute left-[11px] lg:left-[15px] top-8 bottom-8 w-[2px] bg-neutral-300"></div>
              
              {PIPELINE_NODES.map((node, idx) => {
                 const isActive = activeNode === node.id;
                 return (
                   <div 
                     key={node.id}
                     onMouseEnter={() => setActiveNode(node.id)}
                     onMouseLeave={() => setActiveNode(null)}
                     className="relative flex items-center gap-6 lg:gap-8 py-5 lg:py-6 group cursor-pointer"
                   >
                      {/* Node Point */}
                      <div className={`relative z-10 flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 transition-colors duration-300 bg-neutral-100 ${isActive ? 'border-neutral-900' : 'border-neutral-300 group-hover:border-neutral-500'}`}>
                         <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-neutral-900 scale-100' : 'bg-neutral-300 scale-50 group-hover:bg-neutral-500 group-hover:scale-75'}`}></div>
                      </div>
                      
                      {/* Node Label */}
                      <h3 className={`text-xl lg:text-2xl font-bold uppercase tracking-wide transition-colors duration-300 ${isActive ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
                         {node.title}
                      </h3>
                   </div>
                 );
              })}
           </div>

           {/* Right: Live Operational Terminal */}
           <div className="lg:col-span-7 flex flex-col">
              <div className="w-full h-full min-h-[500px] bg-neutral-950 rounded-[2rem] p-8 lg:p-10 flex flex-col shadow-2xl relative overflow-hidden group border border-neutral-900">
                 {/* Glassmorphic glow on hover */}
                 <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                 
                 {/* Terminal Header Metrics */}
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-800 pb-6 mb-8 relative z-10 gap-4">
                    <div className="flex items-center gap-3 text-neutral-400">
                       <Activity className="w-5 h-5 text-neutral-300 animate-pulse" />
                       <span className="text-xs uppercase tracking-widest font-mono text-neutral-300">system_status: operational</span>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-[10px] font-mono text-neutral-500 uppercase">
                       <span>12+ sprint cycles simulated</span>
                       <span>3 production-grade systems</span>
                    </div>
                 </div>

                 {/* Terminal Logs */}
                 <div className="flex-1 font-mono text-xs lg:text-sm text-neutral-300 flex flex-col gap-6 relative z-10">
                    <div>
                      <span className="text-neutral-600">{"// initializing_product_delivery_module()"}</span>
                    </div>
                    
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-neutral-800 ml-2">
                      <div className="flex items-center gap-4 text-neutral-400">
                         <CheckCircle2 className="w-4 h-4 text-neutral-500" />
                         <span>Agile / Scrum Frameworks</span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                         <CheckCircle2 className="w-4 h-4 text-neutral-500" />
                         <span>Stakeholder Alignment</span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                         <CheckCircle2 className="w-4 h-4 text-neutral-500" />
                         <span>Technical Documentation</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-neutral-600">{"// loading_core_concepts()"}</span>
                    </div>

                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-neutral-800 ml-2">
                      <div className="flex items-center gap-4 text-neutral-400">
                         <CheckCircle2 className="w-4 h-4 text-neutral-500" />
                         <span>REST APIs & Backend Architecture</span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                         <CheckCircle2 className="w-4 h-4 text-neutral-500" />
                         <span>Database Schema Design</span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                         <CheckCircle2 className="w-4 h-4 text-neutral-500" />
                         <span>SDLC & Object-Oriented Programming</span>
                      </div>
                    </div>

                    {/* Interactive Log Output */}
                    <div className="mt-auto pt-8">
                       <AnimatePresence mode="wait">
                          <motion.div
                            key={activeLog}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="text-neutral-100 bg-neutral-900/80 p-5 rounded-xl border border-neutral-800 inline-flex items-center shadow-lg"
                          >
                             {activeLog}
                          </motion.div>
                       </AnimatePresence>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
