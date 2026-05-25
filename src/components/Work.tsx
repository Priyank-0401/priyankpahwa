"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MediaReelCard } from "@/components/MediaReelCard";

export function Work() {
  return (
    <section id="work" className="flex flex-col items-center py-28 px-4 lg:px-8 bg-neutral-950">
      <h2 className="flex justify-between w-full mb-6 lg:mb-8 text-neutral-100 mix-blend-difference">
        <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">Work</span>
        <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">'25</span>
      </h2>
      
      <ul className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 w-full mb-8 lg:mb-16">
        <li className="w-full col-span-12 lg:col-span-7">
           <MediaReelCard 
             title="PharmaFleet"
             category="Logistics Platform"
             year="2025"
             tags={["Supply Chain", "UX/UI", "Next.js", "System Architecture", "Logistics", "Operations"]}
             slug="pharmafleet"
             mediaSrcs={["/videos/pharmafleet-1.mp4", "/videos/pharmafleet-2.mp4"]}
             className="h-[400px] lg:h-[450px]"
           />
        </li>
        <li className="w-full col-span-12 lg:col-span-5">
           <MediaReelCard 
             title="Seriva AI"
             category="AI Wellness"
             year="2025"
             tags={["AI Engineering", "Emotion Detection", "UI", "UX", "Product Strategy", "Voice AI"]}
             slug="seriva"
             mediaSrcs={["/videos/seriva-1.mp4", "/videos/seriva-2.mp4"]}
             className="h-[400px] lg:h-[450px]"
           />
        </li>
        <li className="w-full col-span-12 lg:col-span-5">
           <MediaReelCard 
             title="WePay"
             category="Fintech Infrastructure"
             year="2024"
             tags={["Security", "Dashboard UI", "Transaction Arch", "Fintech", "Data Visualization"]}
             slug="wepay"
             mediaSrcs={["/videos/wepay.jpg", "/videos/wepay-2.jpg"]}
             className="h-[400px] lg:h-[450px]"
           />
        </li>
        <li className="w-full col-span-12 lg:col-span-7">
           <MediaReelCard 
             title="Product Arsenal"
             category="Systems & Strategy"
             year="2025"
             tags={["Technical Strategy", "Architecture", "Systems Design", "Engineering"]}
             slug="arsenal"
             mediaSrcs={["/videos/code-cinematic.mp4"]}
             className="h-[400px] lg:h-[450px]"
           />
        </li>
      </ul>
      
      <div className="w-full flex justify-end px-4 mt-8">
        <Link href="/#work" className="flex items-center gap-2 group text-neutral-100 hover:text-neutral-400 transition-colors">
          <span className="text-[clamp(20px,1.5vw,32px)] font-medium">View All Systems</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
