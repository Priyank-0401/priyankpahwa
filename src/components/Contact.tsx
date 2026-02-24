import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="w-full relative flex flex-col items-center justify-center py-40 px-6 md:px-12 lg:px-24 border-t border-foreground/10 bg-foreground/5 overflow-hidden">
            {/* Background Faint Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none z-0 select-none opacity-[0.02]">
                <span
                    className="text-[20vw] leading-none text-foreground whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-anton)' }}
                >
                    LET'S BUILD
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground uppercase tracking-widest leading-none mb-8"
                    style={{ fontFamily: 'var(--font-anton)' }}
                >
                    Ready to build something that actually works?
                </h2>

                <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-2xl mb-16 leading-relaxed">
                    I'm open to discussing product, project, and execution-focused roles - or just interesting systems.
                </p>

                <div className="w-full max-w-sm h-px bg-foreground/10 mb-12"></div>

                <a
                    href="mailto:priyankpahwa41@gmail.com"
                    className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-black text-foreground uppercase tracking-wider hover:opacity-75 transition-opacity underline decoration-4 underline-offset-8 mb-24"
                    style={{ fontFamily: 'var(--font-anton)' }}
                >
                    Let's Talk
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm md:text-base font-bold tracking-widest uppercase text-foreground/80">
                    <a href="mailto:priyankpahwa41@gmail.com" className="hover:text-foreground transition-colors">Email</a>
                    <a href="https://www.linkedin.com/in/priyankpahwa41" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="https://github.com/Priyank-0401" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                </div>
            </div>
        </section>
    );
}
