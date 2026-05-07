"use client";

import { motion } from "framer-motion";
import { Workflow, Cog, Monitor, MessageSquare, RotateCcw } from "lucide-react";
import FadeIn, { FadeInStagger, FadeInItem } from "./FadeIn";
import { usePortfolioMode } from "./PortfolioMode";

const engineerSteps = [
  {
    icon: Workflow,
    title: "Understand the workflow first",
    desc: "If the workflow is broken, the code eventually will be too.",
  },
  {
    icon: Cog,
    title: "Build around system behavior",
    desc: "I prefer designing predictable systems over patch-heavy implementations.",
  },
  {
    icon: Monitor,
    title: "Think operationally",
    desc: "How does this scale? Who maintains it? What breaks first? What happens under failure?",
  },
  {
    icon: MessageSquare,
    title: "Explain things clearly",
    desc: "A good system nobody understands becomes a future production incident.",
  },
  {
    icon: RotateCcw,
    title: "Iterate aggressively",
    desc: "Most systems become good after the third redesign.",
  },
];

const executionSteps = [
  {
    icon: Workflow,
    title: "Map the workflow before the timeline",
    desc: "A Gantt chart without understanding the actual process is just a fantasy calendar.",
  },
  {
    icon: Cog,
    title: "Define scope ruthlessly",
    desc: "Scope creep is the silent killer. Every addition must justify its delay.",
  },
  {
    icon: Monitor,
    title: "Own the handoff",
    desc: "Engineering delivers features. Delivery ships outcomes. I manage both transitions.",
  },
  {
    icon: MessageSquare,
    title: "Communicate in systems, not status",
    desc: "Stakeholders need context, not checkmarks. I explain the 'why' behind every delay.",
  },
  {
    icon: RotateCcw,
    title: "Ship, learn, iterate",
    desc: "Perfect is the enemy of deployed. I optimize for fast feedback loops.",
  },
];

export default function HowIWork() {
  const { isEngineer } = usePortfolioMode();
  const steps = isEngineer ? engineerSteps : executionSteps;

  return (
    <section id="how-i-work" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-fira text-sm font-medium tracking-wider">
              {isEngineer ? "BUILD" : "SHIP"}
            </span>
            <div className="h-px flex-1 bg-surface-light/30 max-w-[60px]" />
            <span className="text-muted text-sm font-medium tracking-wider uppercase">
              Operating Principles
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-outfit text-4xl md:text-6xl font-bold text-foreground leading-[1.05] mb-4">
            How I Work
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-muted text-lg max-w-2xl mb-16">
            {isEngineer
              ? "I approach software as a systems problem rather than isolated screens or APIs."
              : "I approach delivery as a systems problem rather than a checklist of tasks."}
          </p>
        </FadeIn>

        <FadeInStagger className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <FadeInItem key={step.title}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-5 p-5 rounded-xl bg-surface/50 border border-surface-light/30 hover:border-accent/20 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                  <step.icon size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-accent/50 font-fira text-xs">
                      0{i + 1}
                    </span>
                    <h3 className="font-outfit font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.5}>
          <p className="text-center text-muted/60 text-xs mt-12 italic font-fira">
            {isEngineer
              ? "The first architecture diagram is usually fiction."
              : "The first project plan is usually a polite estimate."}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
