"use client";

import { Rocket, TrendingUp, Target } from "lucide-react";
import FadeIn from "./FadeIn";
import { usePortfolioMode } from "./PortfolioMode";

export default function Horizon() {
  const { isEngineer } = usePortfolioMode();

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-fira text-sm font-medium tracking-wider">
              03
            </span>
            <div className="h-px flex-1 bg-surface-light/30 max-w-[60px]" />
            <span className="text-muted text-sm font-medium tracking-wider uppercase">
              Professional Horizon
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-12">
            Next Chapter
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-light/10 border border-surface-light/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <Rocket size={20} />
                </div>
                <span className="text-accent font-fira text-sm font-medium">
                  Upcoming Role
                </span>
              </div>

              <h3 className="font-outfit text-2xl md:text-3xl font-bold text-foreground mb-3">
                Associate Software Engineer @ Accenture
              </h3>

              <p className="text-muted leading-relaxed mb-6">
                {isEngineer
                  ? "Joining Accenture to refine my engineering skills at massive scale. I believe the best engineers must understand the systems they build deeply — architecture, reliability, and operational behavior."
                  : "Joining Accenture to build delivery credibility at massive scale. I believe the best technical leaders must first understand what it takes to ship reliably — scope, timelines, and stakeholder alignment."}
              </p>

              <blockquote className="text-foreground/70 italic border-l-2 border-accent/40 pl-4 text-sm leading-relaxed">
                {isEngineer
                  ? "My goal is to master deployment pipelines, code quality, and system design to serve as a foundation for world-class technical leadership."
                  : "My goal is to master project delivery, scope management, and cross-functional coordination to serve as a foundation for world-class technical leadership."}
              </blockquote>

              <p className="text-xs text-muted/50 italic font-fira mt-4">
                {isEngineer
                  ? "Currently accepting that production is the ultimate code reviewer."
                  : "Currently accepting that no Gantt chart has ever survived first contact with reality."}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-xl bg-surface/50 border border-surface-light/30 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald/10 text-emerald shrink-0">
                    <Target size={18} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-foreground mb-1">
                      {isEngineer ? "Engineering Mastery" : "Delivery Mastery"}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {isEngineer
                        ? "Deepening expertise in system design, distributed architecture, and cloud-native development at enterprise scale."
                        : "Deepening expertise in project scoping, timeline management, and risk mitigation at enterprise scale."}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="p-6 rounded-xl bg-surface/50 border border-surface-light/30 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald/10 text-emerald shrink-0">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-foreground mb-1">
                      {isEngineer ? "Technical Leadership Path" : "Strategic Leadership Path"}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {isEngineer
                        ? "Building the engineering credibility required to lead cross-functional teams and own product delivery end-to-end."
                        : "Building the delivery credibility required to lead cross-functional teams and drive product outcomes end-to-end."}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
