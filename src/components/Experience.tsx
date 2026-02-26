import React from 'react';
import { FadeUp, FadeUpStagger, FadeUpItem, ParallaxText } from './Reveal';

export default function Experience() {
    return (
        <section id="experience" className="w-full relative flex flex-col py-32 px-6 md:px-12 lg:px-24">

            {/* Background Faint Text */}
            <div className="absolute top-24 left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0 select-none opacity-[0.03]">
                <ParallaxText offset={150}>
                    <span
                        className="text-[25vw] leading-none text-foreground whitespace-nowrap inline-block"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        EXPERIENCE
                    </span>
                </ParallaxText>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                <FadeUp>
                    <h2
                        className="text-6xl md:text-8xl text-foreground font-bold uppercase mb-24 tracking-wide opacity-80 border-b-2 border-foreground/10 pb-8"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        Experience
                    </h2>
                </FadeUp>

                <FadeUpStagger className="flex flex-col gap-24">
                    {/* Role 1 */}
                    <FadeUpItem>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                            {/* Title Section */}
                            <div className="w-full md:w-1/3 flex flex-col gap-2 border-l-4 border-[#7B5944] pl-6 md:pl-8">
                                <span className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Systems Engineer Intern</span>
                                <span className="text-xl text-foreground/70 uppercase tracking-wide font-semibold mt-2">Infosys</span>
                                <span className="text-sm text-foreground/50 font-mono tracking-widest mt-4">JAN 2026 - PRESENT</span>
                            </div>

                            {/* Description Section */}
                            <div className="w-full md:w-2/3 flex flex-col gap-8 pt-2 md:pt-0">
                                <p className="text-foreground/80 text-xl leading-relaxed">
                                    Gaining exposure to enterprise-level application development workflows, focusing on requirement understanding and delivery processes within structured Agile environments.
                                </p>
                                <ul className="flex flex-col gap-5 text-foreground/70 text-lg list-none p-0 m-0">
                                    <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1">
                                        Engineering scalable and maintainable components using React and Java architectures.
                                    </li>
                                    <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1">
                                        Participating in systemic design reviews to align technical execution with business constraints.
                                    </li>
                                    <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1">
                                        Collaborating with cross-functional teams to streamline continuous deployment pipelines.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FadeUpItem>

                    <div className="w-full h-px bg-foreground/10"></div>
                </FadeUpStagger>
            </div>
        </section>
    );
}
