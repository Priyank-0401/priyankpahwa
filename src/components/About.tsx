import React from 'react';
import Image from 'next/image';
import { FadeUp, FadeUpStagger, FadeUpItem } from './Reveal';

export default function About() {
    return (
        <section id="about" className="w-full relative flex flex-col md:flex-row justify-between gap-16 py-32 px-6 md:px-12 lg:px-24 border-t border-foreground/10">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2 flex flex-col z-10">
                <FadeUp>
                    <h2
                        className="text-6xl md:text-8xl text-foreground font-bold uppercase mb-16 tracking-wide opacity-80"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        About
                    </h2>
                </FadeUp>
                <FadeUpStagger className="flex flex-col gap-12 text-foreground/80 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                    <FadeUpItem>
                        <p className="max-w-2xl opacity-70 text-base md:text-lg uppercase tracking-widest font-semibold">
                            A Brief Introduction
                        </p>
                    </FadeUpItem>
                    <FadeUpItem>
                        <p className="max-w-2xl">
                            I work at the intersection of product thinking and technical execution, bridging the gap between business objectives and engineering realities.
                        </p>
                    </FadeUpItem>
                    <FadeUpItem>
                        <p className="max-w-xl md:ml-12 lg:ml-24 opacity-80 border-l-2 border-[#7B5944] pl-6 md:pl-10">
                            My focus is on structuring complex systems - defining operational scope, mapping logical workflows, and consistently delivering technical solutions that are engineered to scale.
                        </p>
                    </FadeUpItem>
                    <FadeUpItem>
                        <p className="max-w-2xl font-bold text-foreground text-2xl lg:text-4xl mt-4 leading-tight">
                            Execution is not about building features. It's about establishing radical clarity.
                        </p>
                    </FadeUpItem>
                </FadeUpStagger>
            </div>

            {/* Right Column - Education */}
            <div className="w-full md:w-1/2 flex flex-col md:items-end justify-start pt-12 md:pt-48 z-10">
                <div className="flex flex-col text-left md:text-right max-w-md">
                    <FadeUp>
                        <h3
                            className="text-5xl md:text-7xl text-foreground mb-8 uppercase opacity-80 tracking-wide font-bold"
                            style={{ fontFamily: 'var(--font-anton)' }}
                        >
                            Education
                        </h3>
                    </FadeUp>
                    <FadeUpStagger className="flex flex-col gap-2">
                        <FadeUpItem>
                            <span className="text-2xl md:text-3xl font-bold text-foreground block">B.Tech Computer Science</span>
                        </FadeUpItem>
                        <FadeUpItem>
                            <span className="text-xl text-foreground/80 block">Manipal University Jaipur</span>
                        </FadeUpItem>
                        <FadeUpItem>
                            <span className="text-base text-[#7B5944] font-bold mt-2 tracking-widest uppercase block">GPA: 8.5</span>
                        </FadeUpItem>
                    </FadeUpStagger>
                    <FadeUp>
                        <p className="mt-8 text-foreground/60 text-lg leading-relaxed md:ml-auto max-w-sm">
                            A rigorous foundation in algorithm design, systemic architecture, and the fundamental principles of computational logic.
                        </p>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
