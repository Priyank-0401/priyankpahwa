import React from 'react';
import { FadeUp, FadeUpStagger, FadeUpItem, ParallaxText } from './Reveal';

export default function Skills() {
    return (
        <section id="capabilities" className="w-full relative flex flex-col py-32 px-6 md:px-12 lg:px-24 bg-foreground/5">
            {/* Background Faint Text */}
            <div className="absolute top-24 left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0 select-none opacity-[0.03]">
                <ParallaxText offset={150}>
                    <span
                        className="text-[20vw] leading-none text-foreground whitespace-nowrap inline-block"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        CAPABILITIES
                    </span>
                </ParallaxText>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <FadeUp>
                    <h2
                        className="text-6xl md:text-8xl text-foreground font-bold uppercase mb-24 tracking-wide opacity-80 border-b-2 border-foreground/10 pb-8"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        Capabilities
                    </h2>
                </FadeUp>

                <FadeUpStagger className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
                    {/* Column 1 */}
                    <FadeUpItem className="flex flex-col gap-8">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground border-l-4 border-[#7B5944] pl-4 uppercase tracking-widest">
                            Product & Execution
                        </h3>
                        <ul className="flex flex-col gap-4 text-foreground/90 text-lg md:text-xl font-medium list-none p-0 m-0">
                            <li>Product Strategy</li>
                            <li>Agile Delivery</li>
                            <li>Requirements Gathering</li>
                            <li>Cross-functional Leadership</li>
                            <li>User-Centric Design</li>
                            <li>Go-to-Market Strategy</li>
                        </ul>
                    </FadeUpItem>

                    {/* Column 2 */}
                    <FadeUpItem className="flex flex-col gap-8 md:border-l md:border-foreground/10 md:pl-8 lg:pl-16">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground border-l-4 border-[#7B5944] pl-4 uppercase tracking-widest">
                            Systems & Architecture
                        </h3>
                        <ul className="flex flex-col gap-4 text-foreground/90 text-lg md:text-xl font-medium list-none p-0 m-0">
                            <li>System Design</li>
                            <li>Enterprise Architecture</li>
                            <li>Cloud Infrastructure</li>
                            <li>API Integration</li>
                            <li>Data Modeling</li>
                            <li>Scalability Planning</li>
                        </ul>
                    </FadeUpItem>

                    {/* Column 3 */}
                    <FadeUpItem className="flex flex-col gap-8 md:border-l md:border-foreground/10 md:pl-8 lg:pl-16">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground border-l-4 border-[#7B5944] pl-4 uppercase tracking-widest">
                            Tech Stack
                        </h3>
                        <ul className="flex flex-col gap-4 text-foreground/90 text-lg md:text-xl font-medium list-none p-0 m-0">
                            <li>React & Next.js</li>
                            <li>TypeScript</li>
                            <li>Node.js / Express</li>
                            <li>Java</li>
                            <li>Google Cloud Platform</li>
                            <li>Firebase</li>
                            <li>Docker & CI/CD</li>
                        </ul>
                    </FadeUpItem>
                </FadeUpStagger>
            </div>
        </section>
    );
}
