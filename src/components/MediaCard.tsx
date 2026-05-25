"use client";

import Image from "next/image";

interface MediaCardProps {
  type: "video" | "image";
  src: string;
  alt?: string;
  className?: string;
  hoverClip?: boolean;
}

export function MediaCard({ type, src, alt = "Media", className = "", hoverClip = true }: MediaCardProps) {
  const baseClasses = "object-cover w-full h-full";
  // Premium Awwwards-style clip-path hover reveal
  const hoverClasses = hoverClip 
    ? "transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] [clip-path:inset(3%_round_16px)] group-hover:[clip-path:inset(0%_round_0px)]" 
    : "";

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}>
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`${baseClasses} ${hoverClasses}`}
        />
      ) : (
        <div className={`relative w-full h-full ${hoverClasses}`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
        </div>
      )}
    </div>
  );
}
