"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FadeUpStagger, FadeUpItem } from './Reveal';

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) - 0.5; // Range: -0.5 to 0.5
        const y = (clientY / innerHeight) - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Very subtle movements
    const stripeX = useTransform(smoothMouseX, [-0.5, 0.5], ['-15%', '15%']);
    const textX = useTransform(smoothMouseX, [-0.5, 0.5], ['-2%', '2%']);
    const textY = useTransform(smoothMouseY, [-0.5, 0.5], ['-2%', '2%']);

    return (
        <section onMouseMove={handleMouseMove} className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
            {/* Layer 1: The Background Stripe */}
            <motion.div
                style={{ x: stripeX, translateX: '-50%' }}
                className="absolute inset-y-0 left-1/2 w-1/3 md:w-1/4 bg-[#7B5944] z-0 border-l border-r border-[#1A1C17]/10"
            />

            {/* Layer 2: The Massive Typography */}
            <FadeUpStagger className="absolute top-1/2 -translate-y-1/2 w-full text-center z-10 flex flex-col pointer-events-none">
                <FadeUpItem>
                    <motion.h1
                        className="text-[18vw] leading-[0.8] uppercase text-foreground mix-blend-normal opacity-90 m-0 p-0 tracking-tighter hover:text-[#7B5944] hover:-skew-x-6 hover:scale-[1.01] transition-all duration-300 pointer-events-auto cursor-default origin-bottom"
                        style={{ fontFamily: 'var(--font-anton)', x: textX, y: textY }}
                    >
                        PRIYANK PAHWA
                    </motion.h1>
                </FadeUpItem>
                <FadeUpItem>
                    <motion.h2
                        className="text-[11vw] leading-[0.8] uppercase text-foreground mix-blend-normal opacity-70 m-0 p-0 tracking-tighter"
                        style={{ fontFamily: 'var(--font-anton)', x: textX, y: textY }}
                    >
                        PROJECT MANAGER
                    </motion.h2>
                </FadeUpItem>
            </FadeUpStagger>

            {/* Layer 3: Side Content (Left) */}
            <FadeUpStagger className="hidden md:flex absolute left-8 bottom-32 z-30 max-w-xs flex-col gap-4">
                <FadeUpItem>
                    <p className="text-sm font-semibold tracking-wide border-t border-foreground pt-4 leading-relaxed mix-blend-exclusion text-foreground opacity-90 pointer-events-none">
                        AS A TECHNICAL PRODUCT MANAGER, I FOCUS ON PRODUCING TOP-NOTCH, SHIPPABLE SYSTEMS AND IMPACTFUL AI EXPERIENCES.
                    </p>
                </FadeUpItem>
                <FadeUpItem>
                    <a href="mailto:priyankpahwa41@gmail.com" className="group flex items-center gap-2 text-sm font-bold uppercase hover:opacity-75 transition-opacity underline decoration-2 underline-offset-4 w-fit">
                        Let's talk
                        <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
                    </a>
                </FadeUpItem>
            </FadeUpStagger>

            {/* Layer 4: Side Content (Right) */}
            <FadeUpStagger className="hidden lg:flex absolute right-8 bottom-32 z-30 items-center gap-6 max-w-md pointer-events-none">
                <FadeUpItem>
                    <div
                        className="w-32 h-32 shrink-0 rounded-full bg-foreground text-[#1A1C17] flex items-center justify-center text-6xl border-4 border-[#1A1C17] -rotate-12 shadow-2xl"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        01
                    </div>
                </FadeUpItem>
                <FadeUpItem>
                    <p className="text-sm font-bold tracking-wide uppercase leading-relaxed text-foreground mix-blend-overlay">
                        A CUTTING-EDGE STRATEGIST DESIGNED TO REVOLUTIONIZE THE WAY ENTERPRISES INTERACT WITH AUTONOMOUS ECOSYSTEMS.
                    </p>
                </FadeUpItem>
            </FadeUpStagger>

        </section>
    );
}
