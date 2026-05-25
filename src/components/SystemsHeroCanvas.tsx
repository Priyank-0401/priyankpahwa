"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export function SystemsHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Performance Optimization: Pause videos when Hero is off-screen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        videoRefs.current.forEach(video => {
          if (!video) return;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Performance Optimization: Fake 2.8s loop to prevent decoding full massive videos
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (e.currentTarget.currentTime > 2.8) {
      e.currentTarget.currentTime = 0;
    }
  };

  // Scroll Parallax mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mainScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Interactive Hover Parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const panel1X = useTransform(smoothX, [0, 1], ["-15%", "15%"]);
  const panel1Y = useTransform(smoothY, [0, 1], ["-10%", "10%"]);

  const panel2X = useTransform(smoothX, [0, 1], ["10%", "-10%"]);
  const panel2Y = useTransform(smoothY, [0, 1], ["20%", "-20%"]);

  const panel3X = useTransform(smoothX, [0, 1], ["-5%", "5%"]);
  const panel3Y = useTransform(smoothY, [0, 1], ["15%", "-15%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-[150vh] relative z-20"
      onMouseMove={handleMouseMove}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-950 flex items-center justify-center perspective-[1000px]">
        
        {/* Base Layer - Ambient Cybernetic Network Video */}
        <motion.div 
          style={{ scale: mainScale }}
          className="absolute inset-0 w-full h-full opacity-35 mix-blend-screen"
        >
          <video 
            ref={el => { videoRefs.current[0] = el; }}
            src="/videos/code-cinematic.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover grayscale contrast-125 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_90%)]"
          />
        </motion.div>

        {/* Floating Panel 1 - Left: Dashboard Motion */}
        <motion.div
          style={{ x: panel1X, y: panel1Y, rotateY: useTransform(smoothX, [0, 1], [15, -15]) }}
          className="absolute top-[15%] left-[10%] w-[350px] h-[250px] bg-neutral-900/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl z-10 hidden md:block"
        >
          <video 
             ref={el => { videoRefs.current[1] = el; }}
             src="/videos/hero.mp4"
             muted loop playsInline preload="metadata" onTimeUpdate={handleTimeUpdate}
             className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale contrast-125 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
          />
        </motion.div>

        {/* Floating Panel 2 - Center: AI / System Visuals */}
        <motion.div
          style={{ x: panel2X, y: panel2Y, rotateX: useTransform(smoothY, [0, 1], [-10, 10]) }}
          className="absolute bottom-[20%] right-[15%] w-[400px] h-[250px] bg-neutral-900/20 backdrop-blur-lg rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.02)] z-20 hidden md:block"
        >
           <video 
             ref={el => { videoRefs.current[2] = el; }}
             src="/videos/seriva-2.mp4"
             muted loop playsInline preload="metadata" onTimeUpdate={handleTimeUpdate}
             className="w-full h-full object-cover opacity-70 mix-blend-screen grayscale contrast-150 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"
          />
        </motion.div>

        {/* Floating Panel 3 - Right: Workflow Analytics */}
        <motion.div
          style={{ x: panel3X, y: panel3Y, scale: useTransform(smoothY, [0, 1], [0.95, 1.05]) }}
          className="absolute top-[30%] right-[35%] w-[250px] h-[350px] bg-neutral-900/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl z-30 pointer-events-none hidden lg:block"
        >
           <div className="w-full h-full flex items-center justify-center bg-black/40">
             <video 
               ref={el => { videoRefs.current[3] = el; }}
               src="/videos/code.mp4"
               muted loop playsInline preload="metadata" onTimeUpdate={handleTimeUpdate}
               className="w-full h-full object-cover opacity-50 contrast-125 mix-blend-screen grayscale [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)]"
            />
           </div>
        </motion.div>
        
        {/* Global Noise Layer for Cinematic Feel */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Foreground Gradient Fade for Seamless Section Blend */}
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-neutral-900 to-transparent z-40 pointer-events-none"></div>
      </div>
    </div>
  );
}
