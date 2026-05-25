"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface VideoMotionCardProps {
  title: string;
  category: string;
  year: string;
  tags: string[];
  videoSrc: string;
  slug: string;
  className?: string;
}

export function VideoMotionCard({
  title,
  category,
  year,
  tags,
  videoSrc,
  slug,
  className = ""
}: VideoMotionCardProps) {
  return (
    <Link 
      href={`/work/${slug}`}
      className={`group relative flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-neutral-900 cursor-pointer overflow-hidden ${className}`}
    >
      {/* Video Container with Clip Path Hover Effect */}
      <div className="relative rounded-lg lg:rounded-xl overflow-hidden w-full h-[260px] md:h-[350px] lg:h-[clamp(500px,32vw,800px)] bg-neutral-950">
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
        
        {/* Core Video with Performance Attributes & Clip-Path */}
        <video 
          src={videoSrc}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata" 
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[clamp(300px,85%,800px)] h-auto rounded-lg object-cover z-20 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)] group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)] group-hover:w-full group-hover:h-full group-hover:scale-105 opacity-90 contrast-125"
        ></video>
        
        {/* Advanced Aesthetic Layer: Noise + Blend Mode */}
        <div className="absolute inset-0 z-25 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay backdrop-blur-[4px] bg-neutral-900/10"></div>
        
        {/* Edge Fade Mask */}
        <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_120px_rgba(10,10,10,0.9)]"></div>

        {/* Fallback Background Image underlying the video clip-path */}
        <div className="absolute inset-0 w-full h-full opacity-30 grayscale pointer-events-none">
          <video 
            src={videoSrc}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata" 
            className="w-full h-full object-cover blur-md"
          ></video>
        </div>
      </div>

      {/* Metadata Bottom Section */}
      <div className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 z-30">
        <div className="flex justify-between items-center w-full relative">
          <div className="flex items-center gap-2 lg:gap-3">
             <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:-rotate-45 transition-transform duration-300" />
             </div>
             <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-100 tracking-wide">{title}</p>
          </div>
          <div className="flex gap-3 lg:gap-5">
             <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-400 tracking-wide">{category}</p>
             <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-400 tracking-wide">{year}</p>
          </div>
        </div>

        {/* Marquee Tags */}
        <div className="flex justify-center items-center h-4 md:h-4.5 overflow-hidden relative w-full">
          <div className="absolute left-0 h-full w-8 lg:w-10 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
          <div className="absolute right-0 h-full w-8 lg:w-10 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
          <div className="flex overflow-hidden relative w-full group-hover:opacity-100 opacity-60 transition-opacity duration-300">
             <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 15, repeat: Infinity }}
               className="flex whitespace-nowrap"
             >
                <p className="text-[10px] md:text-xs tracking-widest text-neutral-400 uppercase pr-1.5 flex gap-1.5">
                   {tags.map((tag, i) => <span key={i}>{tag} &bull; </span>)}
                   {tags.map((tag, i) => <span key={`dup-${i}`}>{tag} &bull; </span>)}
                </p>
             </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
}
