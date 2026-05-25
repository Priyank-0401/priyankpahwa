"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  const lines = [
    ["I design systems", "bridging"],
    ["product strategy", "and engineering."],
    ["I translate complex", "workflows"],
    ["into scalable", "experiences."]
  ];

  const getGlobalIndex = (lineIndex: number, phraseIndex: number) => {
    let count = 0;
    for (let i = 0; i < lineIndex; i++) {
      count += lines[i].length;
    }
    return count + phraseIndex;
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="w-full bg-neutral-950 flex flex-col lg:flex-row relative lg:min-h-screen py-24 px-4 lg:px-8 gap-12 lg:gap-24"
    >
      <div className="flex-1 flex flex-col justify-center h-full max-w-[80rem] pt-32 lg:pt-0">
         <h4 className="font-semibold uppercase mb-8 text-neutral-500 tracking-widest text-sm">Myself</h4>
         {lines.map((linePhrases, i) => {
           const justifyClasses = ["justify-start", "justify-end", "justify-between", "justify-around", "justify-center", "justify-between"];
           return (
          <div key={i} className={`overflow-hidden mb-1 sm:mb-4 flex w-full ${justifyClasses[i % justifyClasses.length]} items-center gap-x-2 sm:gap-x-4`}>
            {linePhrases.map((phrase, j) => (
              <ScrollingPhrase 
                key={j} 
                phrase={phrase} 
                progress={scrollYProgress}
                index={getGlobalIndex(i, j)} 
                totalPhrases={8} 
              />
            ))}
          </div>
         )})}
      </div>

      <div className="lg:w-[45%] flex-shrink-0 h-full relative">
         <div className="lg:sticky lg:top-[calc(50vh-25vw)] w-full aspect-[4/5] bg-neutral-900 rounded-[2rem] overflow-hidden relative shadow-2xl">
            <video 
              src="/videos/typing.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen grayscale"
            />
            {/* Edge fade */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,10,10,0.8)] pointer-events-none"></div>
         </div>
      </div>
    </section>
  );
}

function ScrollingPhrase({ 
  phrase, 
  progress, 
  index, 
  totalPhrases 
}: { 
  phrase: string; 
  progress: any; 
  index: number; 
  totalPhrases: number 
}) {
  const start = index * (1 / totalPhrases) * 0.8;
  const end = start + (1 / totalPhrases);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  
  return (
    <motion.span 
      style={{ opacity }} 
      className="text-[clamp(32px,4vw,64px)] lg:text-[clamp(40px,5vw,80px)] font-bold tracking-tight leading-[1.1] text-neutral-100 uppercase"
    >
      {phrase}
    </motion.span>
  );
}
