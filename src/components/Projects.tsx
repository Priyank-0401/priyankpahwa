import React from 'react';
import Link from 'next/link';
import { FadeUp, FadeUpStagger, FadeUpItem, ParallaxText, FocusProject } from './Reveal';

export default function Projects() {
    return (
        <section id="projects" className="w-full relative flex flex-col py-32 px-6 md:px-12 lg:px-24">
            {/* Background Faint Text */}
            <div className="absolute top-32 right-0 w-full overflow-hidden flex justify-end pointer-events-none z-0 select-none opacity-[0.015]">
                <ParallaxText offset={150}>
                    <span
                        className="text-[22vw] leading-none text-foreground whitespace-nowrap inline-block"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        PROJECTS
                    </span>
                </ParallaxText>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <FadeUp>
                    <h2
                        className="text-6xl md:text-8xl text-foreground font-bold uppercase mb-32 tracking-wide opacity-80 pb-8"
                        style={{ fontFamily: 'var(--font-anton)' }}
                    >
                        Selected Work
                    </h2>
                </FadeUp>

                <FadeUpStagger className="flex flex-col gap-40 md:gap-48">

                    {/* Project 1 */}
                    <FadeUpItem>
                        <FocusProject>
                            <article className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 group">
                                <div className="absolute -left-4 lg:-left-20 top-0 opacity-[0.05] text-[8rem] font-black leading-none pointer-events-none group-hover:opacity-10 transition-opacity duration-500" style={{ fontFamily: 'var(--font-anton)' }}>
                                    01
                                </div>
                                <div className="w-full lg:w-5/12 flex flex-col z-10">
                                    <h3
                                        className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] 2xl:text-7xl font-bold text-foreground uppercase tracking-[0.05em] leading-none mb-4 opacity-90 group-hover:translate-x-2 transition-transform duration-300 w-fit whitespace-nowrap"
                                        style={{ fontFamily: 'var(--font-anton)' }}
                                    >
                                        Seriva
                                    </h3>
                                    <p className="text-[#7B5944] font-bold tracking-widest uppercase text-sm mb-6">
                                        AI Wellness System
                                    </p>
                                    <a href="https://github.com/Priyank-0401/Seriva-Showcase" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110 active:scale-95 duration-300 mt-auto lg:flex">
                                        ↗
                                    </a>
                                </div>
                                <div className="w-full lg:w-7/12 flex flex-col pt-8 lg:pt-0 lg:border-t-4 lg:border-foreground z-10 lg:ml-8 -rotate-1 group-hover:rotate-0 transition-transform duration-500 mt-4 lg:mt-8">
                                    <p className="text-2xl md:text-3xl font-medium text-foreground/90 max-w-2xl leading-tight mb-8">
                                        A real-time AI companion integrating conversational intelligence with 3D interaction.
                                    </p>
                                    <ul className="flex flex-col gap-4 text-foreground/70 text-lg font-medium list-none p-0 m-0">
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Designed an interaction system combining LLM responses with real-time avatar rendering.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Built emotion-aware conversational flows to improve contextual responses.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Engineered a full-stack architecture with secure cloud deployment and API orchestration.
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </FocusProject>
                    </FadeUpItem>

                    <div className="w-full h-px bg-foreground/10 transition-all duration-500"></div>

                    {/* Project 2 */}
                    <FadeUpItem>
                        <FocusProject>
                            <article className="relative flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 group">
                                <div className="absolute -right-4 lg:-right-20 top-0 opacity-[0.05] text-[8rem] font-black leading-none pointer-events-none group-hover:opacity-10 transition-opacity duration-500" style={{ fontFamily: 'var(--font-anton)' }}>
                                    02
                                </div>
                                <div className="w-full lg:w-5/12 flex flex-col z-10 items-start lg:items-end text-left lg:text-right">
                                    <h3
                                        className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] 2xl:text-7xl font-bold text-foreground uppercase tracking-[0.05em] leading-none mb-4 opacity-90 group-hover:-translate-x-2 transition-transform duration-300 w-fit whitespace-nowrap"
                                        style={{ fontFamily: 'var(--font-anton)' }}
                                    >
                                        PharmaFleet
                                    </h3>
                                    <p className="text-[#7B5944] font-bold tracking-widest uppercase text-sm mb-6">
                                        Operations Intelligence Platform
                                    </p>
                                    <a href="https://github.com/Priyank-0401/Inventory-Management" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110 active:scale-95 duration-300 mt-auto lg:flex">
                                        ↗
                                    </a>
                                </div>
                                <div className="w-full lg:w-7/12 flex flex-col pt-8 lg:pt-0 lg:border-t-4 lg:border-foreground z-10 lg:mr-8 rotate-1 group-hover:rotate-0 transition-transform duration-500 mt-4 lg:mt-8">
                                    <p className="text-2xl md:text-3xl font-medium text-foreground/90 max-w-2xl leading-tight mb-8">
                                        A structured system for digitizing pharmaceutical inventory and compliance workflows.
                                    </p>
                                    <ul className="flex flex-col gap-4 text-foreground/70 text-lg font-medium list-none p-0 m-0">
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Transformed manual tracking into a centralized, error-resistant digital system.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Designed relational data models supporting high-frequency inventory updates.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Implemented audit-ready workflows for compliance and reporting.
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </FocusProject>
                    </FadeUpItem>

                    <div className="w-full h-px bg-foreground/10 transition-all duration-500"></div>

                    {/* Project 3 */}
                    <FadeUpItem>
                        <FocusProject>
                            <article className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 group">
                                <div className="absolute -left-4 lg:-left-20 top-0 opacity-[0.05] text-[8rem] font-black leading-none pointer-events-none group-hover:opacity-10 transition-opacity duration-500" style={{ fontFamily: 'var(--font-anton)' }}>
                                    03
                                </div>
                                <div className="w-full lg:w-5/12 flex flex-col z-10">
                                    <h3
                                        className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] 2xl:text-7xl font-bold text-foreground uppercase tracking-[0.05em] leading-none mb-4 opacity-90 group-hover:translate-x-2 transition-transform duration-300 w-fit whitespace-nowrap"
                                        style={{ fontFamily: 'var(--font-anton)' }}
                                    >
                                        WePay
                                    </h3>
                                    <p className="text-[#7B5944] font-bold tracking-widest uppercase text-sm mb-6">
                                        Blockchain Payment System
                                    </p>
                                    <a href="https://github.com/Priyank-0401/wepay-crypto" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-foreground items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110 active:scale-95 duration-300 mt-auto hidden lg:flex">
                                        ↗
                                    </a>
                                </div>
                                <div className="w-full lg:w-7/12 flex flex-col pt-8 lg:pt-0 lg:border-t-4 lg:border-foreground z-10 lg:ml-8 -rotate-1 group-hover:rotate-0 transition-transform duration-500 mt-4 lg:mt-8">
                                    <p className="text-2xl md:text-3xl font-medium text-foreground/90 max-w-2xl leading-tight mb-8">
                                        A peer-to-peer transaction system built on Ethereum test environments.
                                    </p>
                                    <ul className="flex flex-col gap-4 text-foreground/70 text-lg font-medium list-none p-0 m-0">
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Developed smart contract-based transaction flows with predictable validation.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Implemented wallet interaction and transaction lifecycle handling.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Tested reliability across simulated blockchain environments (Ganache).
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </FocusProject>
                    </FadeUpItem>

                    <div className="w-full h-px bg-foreground/10 transition-all duration-500"></div>

                    {/* Project 4 */}
                    <FadeUpItem>
                        <FocusProject>
                            <article className="relative flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 group">
                                <div className="absolute -right-4 lg:-right-20 top-0 opacity-[0.05] text-[8rem] font-black leading-none pointer-events-none group-hover:opacity-10 transition-opacity duration-500" style={{ fontFamily: 'var(--font-anton)' }}>
                                    04
                                </div>
                                <div className="w-full lg:w-5/12 flex flex-col z-10 items-start lg:items-end text-left lg:text-right">
                                    <h3
                                        className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] 2xl:text-7xl font-bold text-foreground uppercase tracking-[0.05em] leading-none mb-4 opacity-90 group-hover:-translate-x-2 transition-transform duration-300 w-fit whitespace-nowrap"
                                        style={{ fontFamily: 'var(--font-anton)' }}
                                    >
                                        VendorVantage
                                    </h3>
                                    <p className="text-[#7B5944] font-bold tracking-widest uppercase text-sm mb-6">
                                        AI Negotiation Workflow
                                    </p>
                                    <div className="h-12 border-2 border-foreground rounded-full items-center justify-center mt-auto hidden lg:flex px-4 text-xs font-bold tracking-widest uppercase text-foreground/50 border-dashed w-fit">
                                        WIP
                                    </div>
                                </div>
                                <div className="w-full lg:w-7/12 flex flex-col pt-8 lg:pt-0 lg:border-t-4 lg:border-foreground z-10 lg:mr-8 rotate-1 group-hover:rotate-0 transition-transform duration-500 mt-4 lg:mt-8">
                                    <p className="text-2xl md:text-3xl font-medium text-foreground/90 max-w-2xl leading-tight mb-8">
                                        A multi-agent system designed to simulate and optimize vendor negotiations.
                                    </p>
                                    <ul className="flex flex-col gap-4 text-foreground/70 text-lg font-medium list-none p-0 m-0">
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Built structured prompt pipelines for consistent AI decision-making.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Designed workflow orchestration for multi-stage negotiation flows.
                                        </li>
                                        <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#7B5944] before:text-sm before:top-1 max-w-2xl">
                                            Focused on reliability and deterministic outputs across AI interactions.
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </FocusProject>
                    </FadeUpItem>

                </FadeUpStagger>
            </div>
        </section>
    );
}
