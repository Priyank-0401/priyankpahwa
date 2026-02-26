"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeUpItem, FadeUpStagger } from './Reveal';

export default function ThinkingVisual() {
    return (
        <section className="w-full relative py-24 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center bg-background border-t border-foreground/5 z-20 overflow-hidden">
            <FadeUpStagger className="max-w-4xl mx-auto flex flex-col items-center gap-16 md:gap-24 w-full">

                {/* 1. THINKING LINE */}
                <FadeUpItem>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-[0.05em] leading-[1.1] text-foreground uppercase opacity-90 max-w-5xl text-center" style={{ fontFamily: 'var(--font-anton)' }}>
                        I don't optimize for features.<br />
                        <span className="text-[#7B5944] block mt-4">I optimize for clarity and execution.</span>
                    </h2>
                </FadeUpItem>

                {/* 2. SYSTEMS THINKING VISUAL */}
                <FadeUpItem className="w-full">
                    <div className="relative w-full max-w-2xl mx-auto h-32 md:h-48 flex items-center justify-between opacity-80 group cursor-default">

                        {/* Connecting Background Lines (Svg) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                            {/* Wavy interaction line representing messy inputs */}
                            <motion.path
                                d="M 5,50 C 20,20 30,80 50,50 C 70,20 80,80 95,50"
                                fill="transparent"
                                stroke="var(--foreground)"
                                strokeWidth="0.5"
                                strokeOpacity="0.2"
                                strokeDasharray="2 2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="group-hover:stroke-[#7B5944] transition-colors duration-700"
                            />
                            {/* Straight robust line representing structured execution */}
                            <motion.path
                                d="M 5,50 L 95,50"
                                fill="transparent"
                                stroke="#7B5944"
                                strokeWidth="1.5"
                                strokeOpacity="0.8"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                viewport={{ once: true, margin: "-100px" }}
                                style={{ transformOrigin: "left center" }}
                            />
                        </svg>

                        {/* Node 1: Input/Chaos */}
                        <div className="w-8 h-8 rounded-sm rotate-45 border-2 border-foreground/30 bg-background z-10 flex items-center justify-center group-hover:rotate-90 transition-transform duration-700 ease-out">
                            <div className="w-2 h-2 rounded-full bg-foreground/30" />
                        </div>

                        {/* Node 2: The Core/System (You) */}
                        <div className="w-12 h-12 rounded-full border-4 border-[#7B5944] bg-background z-10 flex items-center justify-center shadow-[0_0_30px_rgba(123,89,68,0.2)] group-hover:scale-110 transition-transform duration-500">
                            <div className="w-3 h-3 rounded-full bg-[#7B5944]" />
                        </div>

                        {/* Node 3: Output/Execution */}
                        <div className="w-8 h-8 rounded-sm outline outline-offset-4 outline-foreground/80 bg-foreground group-hover:bg-[#7B5944] group-hover:outline-[#7B5944] transition-colors duration-500 z-10" />

                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-foreground/40 mt-8 group-hover:text-foreground/80 transition-colors duration-500">
                        Systematic Approach // Predictable Outcomes
                    </p>
                </FadeUpItem>

            </FadeUpStagger>
        </section>
    );
}
