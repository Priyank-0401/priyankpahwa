"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DynamicMediaCardProps {
  images: string[];
  className?: string;
}

export function DynamicMediaCard({ images, className = "" }: DynamicMediaCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Wait 2.5 seconds before transitioning

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1, ease: "easeInOut" },
            scale: { duration: 5, ease: "linear" }
          }}
          className="w-full h-full object-cover absolute inset-0"
          alt="Dynamic Project Media"
        />
      </AnimatePresence>
    </div>
  );
}
