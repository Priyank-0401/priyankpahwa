"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import { usePortfolioMode } from "./PortfolioMode";

const engineerProjects = [
  {
    number: "01",
    name: "Seriva",
    tagline: "AI Wellness & Emotion-Aware Interaction Platform",
    role: "Full-Stack Owner",
    description:
      "Built an immersive AI wellness platform integrating conversational AI, emotion-aware interactions, real-time communication workflows, and a human-centered interface experience.",
    highlights: [
      "Three.js 3D avatar interaction with real-time animation",
      "Conversational AI with emotion-aware contextual responses",
      "Full-stack architecture with Google Cloud Secret Manager",
      "Secure API orchestration and IAM-based access control",
    ],
    tech: ["React", "Three.js", "AI/LLM", "Google Cloud", "Node.js"],
    link: "https://github.com/Priyank-0401/Seriva-Showcase",
    humor: "Teaching AI emotional intelligence while debugging my own.",
  },
  {
    number: "02",
    name: "PharmaFleet",
    tagline: "Pharmaceutical Logistics & Inventory Platform",
    role: "Designer & Engineer",
    description:
      "Designed a workflow-driven platform for managing pharmaceutical inventory, logistics coordination, delivery tracking, and operational visibility.",
    highlights: [
      "Admin workflows and operational dashboards",
      "Inventory state management for high-frequency updates",
      "Audit-ready workflows for compliance and reporting",
      "70%+ transcription error reduction through workflow mapping",
    ],
    tech: ["React", "Node.js", "SQL", "Dashboard Design"],
    link: "https://github.com/Priyank-0401/Inventory-Management",
    humor: "Turns out inventory problems become very real when medicines disappear.",
  },
  {
    number: "03",
    name: "WePay",
    tagline: "Digital Wallet & Transaction Management Platform",
    role: "Solo Engineer",
    description:
      "Built a fintech-oriented wallet system handling transaction workflows, account management, payment processing logic, and financial operation flows.",
    highlights: [
      "Transaction consistency and API workflows",
      "Wallet interaction and full transaction lifecycle handling",
      "Tested reliability across simulated blockchain environments",
      "Solidity + Web3.js integration patterns",
    ],
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    link: "https://github.com/Priyank-0401/wepay-crypto",
    humor: "Financial systems are surprisingly calm until decimals get involved.",
  },
];

const executionProjects = [
  {
    number: "01",
    name: "Seriva",
    tagline: "AI Product — Wellness & Interaction",
    role: "Product Owner & Delivery Lead",
    description:
      "Led end-to-end delivery of an AI wellness product from concept to deployment. Managed the integration of conversational AI, real-time 3D interactions, and cloud infrastructure into a cohesive user experience.",
    highlights: [
      "Scoped AI interaction flows and emotional response triggers",
      "Coordinated frontend 3D experience with backend AI orchestration",
      "Managed Google Cloud deployment, IAM roles, and secret management",
      "Delivered a production-ready product with measurable user engagement",
    ],
    tech: ["React", "Three.js", "AI/LLM", "Google Cloud", "Node.js"],
    link: "https://github.com/Priyank-0401/Seriva-Showcase",
    humor: "Teaching AI emotional intelligence while debugging my own.",
  },
  {
    number: "02",
    name: "PharmaFleet",
    tagline: "Operations Platform — Inventory & Compliance",
    role: "Designer & Delivery Lead",
    description:
      "Modernized legacy pharmaceutical inventory tracking through workflow mapping and system design. Delivered a centralized platform replacing manual processes with digital accuracy.",
    highlights: [
      "Mapped legacy manual workflows before writing any code",
      "Defined compliance requirements and audit trail standards",
      "Delivered admin dashboards with real-time inventory visibility",
      "Achieved 70%+ error reduction through structured digitization",
    ],
    tech: ["React", "Node.js", "SQL", "Dashboard Design"],
    link: "https://github.com/Priyank-0401/Inventory-Management",
    humor: "Turns out inventory problems become very real when medicines disappear.",
  },
  {
    number: "03",
    name: "WePay",
    tagline: "Fintech Product — Wallet & Transactions",
    role: "Solo Product Owner & Engineer",
    description:
      "Owned the full lifecycle of a digital wallet product from requirements definition to deployment on Ethereum testnets. Focused on transaction reliability and user trust.",
    highlights: [
      "Defined transaction lifecycle requirements and edge cases",
      "Validated smart contract reliability across test environments",
      "Designed wallet UX flows for payment initiation and confirmation",
      "Shipped a functional prototype demonstrating real transaction patterns",
    ],
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    link: "https://github.com/Priyank-0401/wepay-crypto",
    humor: "Financial systems are surprisingly calm until decimals get involved.",
  },
];

export default function Projects() {
  const { isEngineer } = usePortfolioMode();
  const projects = isEngineer ? engineerProjects : executionProjects;

  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-fira text-sm font-medium tracking-wider">
              02
            </span>
            <div className="h-px flex-1 bg-surface-light/30 max-w-[60px]" />
            <span className="text-muted text-sm font-medium tracking-wider uppercase">
              {isEngineer ? "Independent Projects" : "Product Delivery"}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            {isEngineer ? "Selected Work" : "Shipped Outcomes"}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-muted text-lg max-w-2xl mb-20">
            {isEngineer
              ? "Standalone engineering projects that demonstrate self-driven capability and exploration of emerging technologies."
              : "Self-driven product deliveries from concept to deployment — each scoped, built, and iterated independently."}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={0.1}>
              <motion.article
                whileHover={{ y: -2 }}
                className="group relative"
              >
                <div className="absolute -left-4 lg:-left-12 top-0 opacity-[0.04] font-outfit text-[8rem] font-bold leading-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500 select-none">
                  {project.number}
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h3 className="font-outfit text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-accent font-medium text-sm tracking-wider uppercase mb-2">
                      {project.tagline}
                    </p>
                    <p className="text-muted text-sm mb-2">{project.role}</p>
                    <p className="text-xs text-muted/50 italic font-fira mb-6">
                      {project.humor}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-surface-light/40 text-sm font-medium text-foreground hover:bg-accent hover:text-background hover:border-accent transition-all"
                    >
                      <ExternalLink size={14} />
                      View on GitHub
                    </a>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <ul className="flex flex-col gap-3 mb-6">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-muted text-sm"
                        >
                          <span className="text-accent mt-1 shrink-0">◆</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-md bg-surface border border-surface-light/30 text-xs font-fira text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {i < projects.length - 1 && (
                  <div className="mt-24 h-px bg-surface-light/20" />
                )}
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
