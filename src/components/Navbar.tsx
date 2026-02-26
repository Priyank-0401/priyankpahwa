"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import logoImg from '../../public/logo.png';

export default function Navbar() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="absolute top-0 w-full flex items-center justify-between px-6 md:px-12 py-8 z-50 text-foreground pointer-events-none">
            {/* Left */}
            <div className="flex items-center gap-3 font-bold tracking-widest text-sm md:text-base uppercase pointer-events-auto">
                <Image src={logoImg} alt="Priyank Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-sm" priority />
                <span>Priyank Pahwa</span>
            </div>

            {/* Center */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 font-bold tracking-wide text-xs uppercase pointer-events-auto mix-blend-difference lg:mix-blend-normal">
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                    <span className="relative z-10">About</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
                <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                    <span className="relative z-10">Experience</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
                <a href="#capabilities" onClick={(e) => handleScroll(e, 'capabilities')} className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                    <span className="relative z-10">Capabilities</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                    <span className="relative z-10">Projects</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="relative group hover:text-foreground transition-colors overflow-hidden py-1">
                    <span className="relative z-10">Contact</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 pointer-events-auto">
                <a
                    href="https://github.com/Priyank-0401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110 active:scale-95 duration-300"
                >
                    <Github size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/priyankpahwa41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110 active:scale-95 duration-300"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </nav>
    );
}
