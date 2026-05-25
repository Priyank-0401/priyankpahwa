"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const stations = [
    {
      company: "Infosys",
      role: "Systems Engineer Intern",
      timeline: "Jan 2026 - Present | Mysore, India",
      description: "Architected end-to-end design of recurring billing automation and spearheaded backend API development across 23 database tables. Coordinated debugging, integration, and feature delivery across backend, frontend, and database workstreams through 3 structured sprint cycles.",
    },
    {
      company: "Manipal University Jaipur",
      role: "Project Lead & Scrum Master",
      timeline: "2023 - Present",
      description: "Facilitated sprint planning and retrospective sessions across cross-functional academic teams. Owned end-to-end preparation of project demonstrations, translating complex technical architecture and workflow decisions into clear stakeholder narratives.",
    }
  ];

  return (
    <section id="experience" className="py-28 px-4 lg:px-8 w-full">
      {/* Header */}
      <div className="mb-20 lg:mb-32">
        <h2 className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight uppercase leading-[0.8] text-neutral-900">
          Experience
        </h2>
      </div>

      {/* Timeline Layout */}
      <div ref={containerRef} className="relative flex flex-col max-w-5xl mx-auto">
        {/* Background Line */}
        <div className="absolute top-2 bottom-0 left-6 lg:left-12 w-[2px] -translate-x-1/2 bg-neutral-300" />
        
        {/* Active Progress Line */}
        <motion.div
          className="absolute top-2 bottom-0 left-6 lg:left-12 w-[2px] -translate-x-1/2 bg-neutral-900 origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        {stations.map((station, index) => (
          <div key={index} className="flex w-full relative">
            {/* Left Column: Visual Node */}
            <div className="relative w-12 lg:w-24 flex-shrink-0 flex justify-center mt-2 lg:mt-3">
              <motion.div
                initial={{ scale: 0.5, opacity: 0, backgroundColor: "#e5e5e5", borderColor: "#d4d4d4" }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1, 
                  backgroundColor: "#171717", 
                  borderColor: "#171717", 
                  boxShadow: "0 0 20px 2px rgba(23,23,23,0.2)" 
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-10%" }}
                className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 z-10"
              />
            </div>

            {/* Right Column: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
              className={`flex flex-col gap-4 w-full ${index === stations.length - 1 ? "pb-12" : "pb-24 lg:pb-32"}`}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl lg:text-5xl font-semibold text-neutral-900">{station.company}</h3>
                <span className="text-xl lg:text-2xl text-neutral-900 font-medium">{station.role}</span>
                <span className="text-sm lg:text-base text-neutral-500 tracking-widest uppercase mt-2">{station.timeline}</span>
              </div>
              
              <p className="text-base lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mt-4">
                {station.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
