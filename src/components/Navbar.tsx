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
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:opacity-75 transition-opacity cursor-pointer">About</a>
                <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:opacity-75 transition-opacity cursor-pointer">Experience</a>
                <a href="#capabilities" onClick={(e) => handleScroll(e, 'capabilities')} className="hover:opacity-75 transition-opacity cursor-pointer">Capabilities</a>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:opacity-75 transition-opacity cursor-pointer">Projects</a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:opacity-75 transition-opacity cursor-pointer">Contact</a>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 pointer-events-auto">
                <a
                    href="https://github.com/Priyank-0401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                    <Github size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/priyankpahwa41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </nav>
    );
}
