"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface MediaFrame {
  id: string;
  bg: string;
  mid?: string;
  fg?: string;
}

interface AdvancedMotionCardProps {
  frames: MediaFrame[];
  className?: string;
  intervalMs?: number;
}

export function AdvancedMotionCard({ frames, className = "", intervalMs = 4000 }: AdvancedMotionCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-flip logic
  useEffect(() => {
    if (!frames || frames.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % frames.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [frames, intervalMs]);

  // Parallax / Hover logic
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for background (subtle opposite movement)
  const bgX = useTransform(smoothX, [0, 1], ["2%", "-2%"]);
  const bgY = useTransform(smoothY, [0, 1], ["2%", "-2%"]);
  
  // Transforms for midground (follows mouse slightly)
  const midX = useTransform(smoothX, [0, 1], ["-4%", "4%"]);
  const midY = useTransform(smoothY, [0, 1], ["-4%", "4%"]);

  // Transforms for foreground (follows mouse intensely)
  const fgX = useTransform(smoothX, [0, 1], ["-8%", "8%"]);
  const fgY = useTransform(smoothY, [0, 1], ["-8%", "8%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  if (!frames || frames.length === 0) return null;

  const currentFrame = frames[currentIndex];

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden perspective-[1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentFrame.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full transform-style-3d"
        >
          {/* Background Layer (Scales continuously + subtle parallax) */}
          <motion.img
            src={currentFrame.bg}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: (intervalMs / 1000) + 2, ease: "linear" }}
            style={{ x: bgX, y: bgY }}
            className="absolute inset-[-10%] w-[120%] h-[120%] object-cover object-center"
            alt="Background"
          />
          
          {/* Midground Layer */}
          {currentFrame.mid && (
            <motion.img
              src={currentFrame.mid}
              initial={{ scale: 1.1, opacity: 0, y: 20 }}
              animate={{ scale: 1.15, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{ x: midX, y: midY }}
              className="absolute inset-[-10%] w-[120%] h-[120%] object-cover object-center mix-blend-screen opacity-70"
              alt="Midground overlay"
            />
          )}

          {/* Foreground Layer */}
          {currentFrame.fg && (
            <motion.img
              src={currentFrame.fg}
              initial={{ scale: 1, opacity: 0, y: 40 }}
              animate={{ scale: 1.1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              style={{ x: fgX, y: fgY }}
              className="absolute inset-0 w-full h-full object-contain mix-blend-plus-lighter opacity-90 drop-shadow-2xl"
              alt="Foreground UI overlay"
            />
          )}
          
          {/* Noise / Grain Texture Layer */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
