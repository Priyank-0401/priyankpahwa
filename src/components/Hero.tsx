"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
            {/* Layer 1: The Background Stripe */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/3 md:w-1/4 bg-[#7B5944] z-0"></div>

            {/* Layer 2: The Massive Typography */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full text-center z-10 flex flex-col pointer-events-none">
                <h1
                    className="text-[18vw] leading-[0.8] uppercase text-foreground mix-blend-normal opacity-90 m-0 p-0 tracking-tighter"
                    style={{ fontFamily: 'var(--font-anton)' }}
                >
                    PRIYANK PAHWA
                </h1>
                <h2
                    className="text-[11vw] leading-[0.8] uppercase text-foreground mix-blend-normal opacity-70 m-0 p-0 tracking-tighter"
                    style={{ fontFamily: 'var(--font-anton)' }}
                >
                    PROJECT MANAGER
                </h2>
            </div>

            {/* Layer 4: Side Content (Left) */}
            <div className="hidden md:flex absolute left-8 bottom-32 z-30 max-w-xs flex-col gap-4">
                <p className="text-sm font-semibold tracking-wide border-t border-foreground pt-4 leading-relaxed mix-blend-exclusion text-foreground opacity-90">
                    AS A TECHNICAL PRODUCT MANAGER, I FOCUS ON PRODUCING TOP-NOTCH, SHIPPABLE SYSTEMS AND IMPACTFUL AI EXPERIENCES.
                </p>
                <a href="mailto:priyankpahwa41@gmail.com" className="group flex items-center gap-2 text-sm font-bold uppercase hover:opacity-75 transition-opacity underline decoration-2 underline-offset-4 w-fit">
                    Let's talk
                    <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </a>
            </div>

            {/* Layer 4: Side Content (Right) */}
            <div className="hidden lg:flex absolute right-8 bottom-32 z-30 items-center gap-6 max-w-md">
                <div
                    className="w-32 h-32 shrink-0 rounded-full bg-foreground text-[#1A1C17] flex items-center justify-center text-6xl border-4 border-[#1A1C17] -rotate-12 shadow-2xl"
                    style={{ fontFamily: 'var(--font-anton)' }}
                >
                    01
                </div>
                <p className="text-sm font-bold tracking-wide uppercase leading-relaxed text-foreground mix-blend-overlay">
                    A CUTTING-EDGE STRATEGIST DESIGNED TO REVOLUTIONIZE THE WAY ENTERPRISES INTERACT WITH AUTONOMOUS ECOSYSTEMS.
                </p>
            </div>

        </section>
    );
}
