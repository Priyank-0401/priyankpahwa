"use client";

import { motion } from "framer-motion";

const TIMELINE_STEPS = [
  "Research",
  "Architecture",
  "Backend Systems",
  "Workflow Integration",
  "Deployment"
];

export function ProjectTimeline() {
  return (
    <div className="flex flex-col items-center justify-center py-24 relative">
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-neutral-800"></div>
      
      {TIMELINE_STEPS.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className="relative z-10 flex flex-col items-center justify-center my-8 group"
        >
          <div className="w-3 h-3 rounded-full bg-neutral-700 group-hover:bg-neutral-300 transition-colors duration-300 mb-4 ring-4 ring-neutral-900"></div>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-mono group-hover:text-white transition-colors duration-300 bg-neutral-900 px-4 py-1 rounded-full border border-neutral-700">
            {step}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
