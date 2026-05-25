"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Download, Home, Briefcase, TerminalSquare, User, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

const navItems = [
  { label: "Home", href: "/#hero", icon: Home },
  { label: "Work", href: "/#work", icon: Briefcase },
  { label: "About", href: "/#about", icon: User },
  { label: "Experience", href: "/#experience", icon: Clock },
  { label: "Arsenal", href: "/#arsenal", icon: TerminalSquare },
];

export function FloatingDock() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const sectionId = href.replace('/#', '');

    if (pathname === '/') {
      if (lenis) {
        lenis.scrollTo(`#${sectionId}`, { duration: 1.5 });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    } else {
      sessionStorage.setItem('scrollTarget', sectionId);
      router.push('/');
    }
  };

  useEffect(() => {
    if (pathname === '/') {
      const target = sessionStorage.getItem('scrollTarget');
      if (target) {
        sessionStorage.removeItem('scrollTarget');
        setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(`#${target}`, { duration: 1.5, immediate: true });
          } else {
            const element = document.getElementById(target);
            if (element) {
              const top = element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }
        }, 300); // Wait for page to fully mount before scrolling
      }
    }
  }, [pathname, lenis]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <motion.div 
        layout
        animate={{ borderRadius: isOpen ? 24 : 9999 }}
        className="bg-[#111111] border border-neutral-800 shadow-2xl overflow-hidden flex flex-col"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <div className="flex flex-col gap-1 p-3 pb-4">
                {navItems.map((item, i) => (
                  <motion.a 
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex items-center gap-4 p-2 rounded-xl hover:bg-neutral-800 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <span className="text-neutral-100 font-medium text-sm tracking-wide">{item.label}</span>
                  </motion.a>
                ))}
              </div>
              <div className="w-full h-px bg-neutral-800/50" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Pill - Always Visible */}
        <div 
          className="flex items-center gap-5 p-4 pr-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Avatar Placeholder */}
          <div className="w-14 h-14 rounded-xl bg-neutral-800 border border-neutral-700 overflow-hidden flex items-center justify-center flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Priyank Pahwa Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Profile Info & Marquee */}
          <div className="flex flex-col justify-center overflow-hidden w-[240px] sm:w-[360px] md:w-[480px]">
            <span className="text-base font-bold text-neutral-100 whitespace-nowrap mb-0.5">
              PRIYANK PAHWA
            </span>
            <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-linear-fade">
               <motion.div 
                 animate={{ x: ["0%", "-50%"] }}
                 transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                 className="flex whitespace-nowrap text-[11px] text-neutral-400 tracking-widest uppercase font-medium w-max"
               >
                 <span className="pr-2">PRODUCT SYSTEMS • WORKFLOW ARCHITECTURE • TECHNICAL DELIVERY • OPERATIONAL THINKING • SCALABLE EXECUTION •</span>
                 <span className="pr-2">PRODUCT SYSTEMS • WORKFLOW ARCHITECTURE • TECHNICAL DELIVERY • OPERATIONAL THINKING • SCALABLE EXECUTION •</span>
               </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 ml-2">
            <a 
              href="/Priyank_Pahwa_Resume.pdf" 
              download="Priyank_Pahwa_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Download Resume"
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-neutral-800 transition-colors"
            >
              <Download className="w-6 h-6 text-neutral-400 hover:text-neutral-100 transition-colors" />
            </a>
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-neutral-800 transition-colors">
              {isOpen ? <X className="w-6 h-6 text-neutral-100" /> : <Menu className="w-6 h-6 text-neutral-100" />}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
