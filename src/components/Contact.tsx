import React from 'react';
import { FadeUp, FadeUpStagger, FadeUpItem, ParallaxText } from './Reveal';

export default function Contact() {
    return (
        <section id="contact" className="w-full relative flex flex-col items-center justify-center py-40 px-6 md:px-12 lg:px-24 border-t border-foreground/10 bg-foreground/5 overflow-hidden">
            {/* Background Faint Text */}
            <div className="absolute top-1/2 left-1/2 w-full flex justify-center pointer-events-none z-0 select-none opacity-[0.02] transform -translate-x-1/2 -translate-y-1/2">
                <ParallaxText offset={150}>
                    <span
                        className="text-[20vw] leading-none text-foreground whitespace-nowrap inline-block"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        LET'S BUILD
                    </span>
                </ParallaxText>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
                <FadeUp>
                    <h2
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground uppercase tracking-widest leading-none mb-8"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        Ready to build something that actually works?
                    </h2>
                </FadeUp>

                <FadeUpStagger className="flex flex-col flex-1 items-center w-full max-w-2xl mx-auto">
                    <FadeUpItem>
                        <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-2xl mb-16 leading-relaxed">
                            I'm open to discussing product, project, and execution-focused roles - or just interesting systems.
                        </p>
                    </FadeUpItem>

                    <FadeUpItem>
                        <div className="w-full max-w-sm h-px bg-foreground/10 mb-12 mx-auto"></div>
                    </FadeUpItem>

                    <FadeUpItem>
                        <a
                            href="mailto:priyankpahwa41@gmail.com"
                            className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-black text-foreground uppercase tracking-wider hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 mb-24"
                            style={{ fontFamily: 'var(--font-anton)' }}
                        >
                            <span className="relative">
                                Let's Talk
                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </a>
                    </FadeUpItem>

                    <FadeUpItem>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm md:text-base font-bold tracking-widest uppercase text-foreground/80">
                            <a href="mailto:priyankpahwa41@gmail.com" className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                                <span className="relative z-10">Email</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                            </a>
                            <a href="https://www.linkedin.com/in/priyankpahwa41" target="_blank" rel="noopener noreferrer" className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                                <span className="relative z-10">LinkedIn</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                            </a>
                            <a href="https://github.com/Priyank-0401" target="_blank" rel="noopener noreferrer" className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                                <span className="relative z-10">GitHub</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                            </a>
                        </div>
                    </FadeUpItem>
                </FadeUpStagger>
            </div>
        </section>
    );
}
