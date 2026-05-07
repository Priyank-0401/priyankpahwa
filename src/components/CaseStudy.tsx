"use client";

import { motion } from "framer-motion";
import { Database, Calendar, Zap, Shield, FileText, Users, Server, Lock } from "lucide-react";
import FadeIn from "./FadeIn";
import { usePortfolioMode } from "./PortfolioMode";

const techStack = [
  "Spring Boot 3.4.5",
  "Java 21",
  "React 19",
  "TypeScript + Vite",
  "MySQL",
];

const engineerFeatures = [
  {
    icon: Database,
    title: "23-Table Relational Schema",
    desc: "Designed a normalized MySQL schema mapping the entire subscription lifecycle: users, customers, plans, subscriptions, invoices, dunning retry logs, revenue snapshots, and more.",
  },
  {
    icon: Zap,
    title: "Precision Proration Engine",
    desc: "Implemented billing proration algorithms in minor units (paise/cents) to eliminate floating-point rounding errors across mid-cycle plan changes.",
  },
  {
    icon: Calendar,
    title: "Automated Recurring Billing",
    desc: "Engineered daily cron batch billing with idempotency locks, ensuring no duplicate charges across retry scenarios.",
  },
  {
    icon: Shield,
    title: "Dunning Recovery & State Machines",
    desc: "Built retry orchestration with escalating intervals and automated suspension workflows. Managed subscription states via finite state machines.",
  },
  {
    icon: FileText,
    title: "Invoice & Financial Reporting",
    desc: "Generated PDF-ready invoices with line-item breakdowns and built admin dashboards for revenue analytics and compliance reporting.",
  },
  {
    icon: Lock,
    title: "Role-Based Access & Session Security",
    desc: "Implemented RBAC for admin tiers and secure session architecture with token rotation and encrypted credential storage.",
  },
  {
    icon: Server,
    title: "Enterprise REST API Design",
    desc: "Designed versioned, paginated, and idempotent REST endpoints with comprehensive OpenAPI documentation.",
  },
  {
    icon: Users,
    title: "Stakeholder Ownership",
    desc: "Carried the final presentation—explaining architecture, workflows, and every module's code. Answered all stakeholder questions end-to-end.",
  },
];

const executionFeatures = [
  {
    icon: Database,
    title: "Workflow Architecture",
    desc: "Mapped 23 interdependent data entities across the subscription lifecycle, ensuring downstream billing, invoicing, and reporting workflows remain consistent and traceable.",
  },
  {
    icon: Zap,
    title: "Financial Accuracy Standards",
    desc: "Defined precision rules for proration calculations that eliminated rounding disputes. Established the financial compliance baseline for all billing operations.",
  },
  {
    icon: Calendar,
    title: "Automated Operations",
    desc: "Designed repeatable, automated billing runs with retry logic — reducing manual reconciliation effort and ensuring consistent monthly revenue recognition.",
  },
  {
    icon: Shield,
    title: "Failure Recovery Protocols",
    desc: "Built dunning escalation workflows that preserve customer relationships while protecting revenue. Defined clear state-transition rules for subscription lifecycle management.",
  },
  {
    icon: FileText,
    title: "Reporting & Admin Experience",
    desc: "Delivered invoice generation and financial dashboards that gave stakeholders real-time visibility into revenue, churn, and operational health.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    desc: "Implemented role-based access controls and session security to meet enterprise audit requirements. Every access decision was traceable and reviewable.",
  },
  {
    icon: Server,
    title: "API Contract Stability",
    desc: "Established versioned, documented API contracts that reduced integration friction with frontend and external systems. New consumers onboard in hours, not days.",
  },
  {
    icon: Users,
    title: "Stakeholder Confidence",
    desc: "Led the final stakeholder presentation, fielding every technical and business question with clarity. Resulted in immediate sign-off and zero post-demo revision requests.",
  },
];

export default function CaseStudy() {
  const { isEngineer } = usePortfolioMode();
  const features = isEngineer ? engineerFeatures : executionFeatures;

  return (
    <section id="case-study" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.04),_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-fira text-sm font-medium tracking-wider">
              01
            </span>
            <div className="h-px flex-1 bg-surface-light/30 max-w-[60px]" />
            <span className="text-muted text-sm font-medium tracking-wider uppercase">
              {isEngineer ? "Enterprise Impact" : "Delivery Excellence"}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-4">
            StreamFlix
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-xl md:text-2xl text-muted font-medium mb-2">
            Subscription Billing & Revenue Management Platform
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted mb-2">
            {isEngineer
              ? "Systems Engineer Intern @ Infosys — Jan 2026 to Present"
              : "Systems Engineer Intern & Technical Lead @ Infosys — Jan 2026 to Present"}
          </p>
          <p className="text-xs text-muted/50 italic font-fira mb-8">
            {isEngineer
              ? "Spent an unhealthy amount of time thinking about failed payments and retry logic."
              : "Coordinated a team project while personally owning architecture, billing logic, and stakeholder delivery."}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="flex flex-wrap gap-2 mb-16">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md bg-surface border border-surface-light/40 text-xs font-fira text-accent/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(56,189,248,0.3)" }}
                className="group p-6 rounded-xl bg-surface/50 border border-surface-light/30 hover:bg-surface transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-foreground mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-surface to-surface-light/20 border border-surface-light/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-emerald/10 text-emerald shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-foreground text-xl mb-3">
                  {isEngineer ? "The Leadership & Stakeholder Win" : "Cross-Functional Ownership"}
                </h3>
                <blockquote className="text-foreground/80 italic leading-relaxed text-lg border-l-2 border-emerald/40 pl-4">
                  {isEngineer
                    ? "Although built as a collaborative team project, I acted as the technical core: architected the database, implemented the calculations, and carried the final stakeholder presentation. Delivered complex technical logic with absolute clarity, answering every architectural question end-to-end."
                    : "I coordinated a cross-functional team of developers while personally owning the most critical technical modules. During stakeholder presentations, I translated complex system behavior into business outcomes — enabling immediate project sign-off without revision cycles."}
                </blockquote>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <Shield size={14} className="text-emerald" />
                    Strict UAT standards enforced
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText size={14} className="text-emerald" />
                    Zero major deployment issues
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
