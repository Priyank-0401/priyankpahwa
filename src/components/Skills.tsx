"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Cloud,
  Database,
  GitBranch,
  Layers,
  FileCode,
  Globe,
  Flame,
  Layout,
  ClipboardList,
  BarChart3,
  Users,
  CheckCircle2,
  Route,
  MessageSquare,
} from "lucide-react";
import FadeIn, { FadeInStagger, FadeInItem } from "./FadeIn";
import { usePortfolioMode } from "./PortfolioMode";

const engineerSkills = [
  { name: "React / Next.js", icon: Code2 },
  { name: "TypeScript / JavaScript", icon: FileCode },
  { name: "Spring Boot / Java", icon: Server },
  { name: "REST API Design", icon: Globe },
  { name: "MySQL / SQL", icon: Database },
  { name: "Google Cloud / Firebase", icon: Cloud },
  { name: "Git / GitHub", icon: GitBranch },
  { name: "System Design", icon: Layers },
  { name: "Node.js / Full Stack", icon: Flame },
  { name: "HTML5 / CSS / Tailwind", icon: Layout },
];

const executionSkills = [
  { name: "Agile / Scrum", icon: Route },
  { name: "Requirements Analysis", icon: ClipboardList },
  { name: "UAT & QA Standards", icon: CheckCircle2 },
  { name: "Stakeholder Communication", icon: MessageSquare },
  { name: "Feature Prioritization", icon: BarChart3 },
  { name: "Team Leadership", icon: Users },
];

const engineerStack = [
  { section: "Systems & Architecture", items: [
    "REST API Design",
    "Authentication & Authorization",
    "Workflow Modeling",
    "Database Design",
    "State Management",
    "Billing Logic",
    "Backend Architecture",
  ]},
  { section: "Engineering Stack", items: [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "MySQL",
    "Node.js",
    "Express",
  ]},
  { section: "Platform & Cloud", items: [
    "AWS Fundamentals",
    "Deployment Pipelines",
    "Linux",
    "Git Workflows",
    "CI/CD Concepts",
    "Monitoring & Reliability",
  ]},
  { section: "Execution & Collaboration", items: [
    "Technical Communication",
    "System Walkthroughs",
    "Cross-Functional Coordination",
    "Architecture Presentation",
    "Ownership-Driven Development",
  ]},
];

const executionStack = [
  { section: "Delivery Frameworks", items: [
    "Agile / Scrum / Kanban",
    "SDLC & Release Management",
    "UAT Planning & Execution",
    "Risk & Dependency Management",
    "Sprint Planning & Velocity Tracking",
  ]},
  { section: "Product & Strategy", items: [
    "Requirements Elicitation",
    "Scope Definition & Control",
    "Gap Analysis",
    "Feature Prioritization (RICE, MoSCoW)",
    "Roadmap Planning",
  ]},
  { section: "Stakeholder & Communication", items: [
    "Executive Reporting",
    "Cross-Functional Team Alignment",
    "Client Relationship Management",
    "Technical-to-Business Translation",
    "Presentation & Demo Delivery",
  ]},
  { section: "Quality & Compliance", items: [
    "UAT Standards Enforcement",
    "Acceptance Criteria Definition",
    "Regression Testing Coordination",
    "Documentation & Knowledge Transfer",
    "Post-Release Monitoring",
  ]},
];

export default function Skills() {
  const { isEngineer } = usePortfolioMode();
  const primarySkills = isEngineer ? engineerSkills : executionSkills;
  const stackCategories = isEngineer ? engineerStack : executionStack;

  return (
    <section id="skills" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-fira text-sm font-medium tracking-wider">
              04
            </span>
            <div className="h-px flex-1 bg-surface-light/30 max-w-[60px]" />
            <span className="text-muted text-sm font-medium tracking-wider uppercase">
              {isEngineer ? "Engineering Stack" : "Execution Toolkit"}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            {isEngineer ? "Systems & Execution" : "Strategy & Delivery"}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-muted text-lg max-w-2xl mb-20">
            {isEngineer
              ? "I write the code and I understand why the code needs to exist. Deep technical competence combined with execution awareness."
              : "I ship outcomes and I understand how the technology enables them. Structured delivery combined with technical fluency."}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-light/10 border border-surface-light/30">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <Code2 size={20} />
                </div>
                <h3 className="font-outfit text-xl font-bold text-foreground">
                  {isEngineer ? "Technical Architecture" : "Project Delivery"}
                </h3>
              </div>

              <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {primarySkills.map((skill) => (
                  <FadeInItem key={skill.name}>
                    <motion.div
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(15,23,42,0.8)" }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-surface-light/20 transition-all"
                    >
                      <skill.icon size={16} className={isEngineer ? "text-accent shrink-0" : "text-emerald shrink-0"} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-light/10 border border-surface-light/30">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-emerald/10 text-emerald">
                  <ClipboardList size={20} />
                </div>
                <h3 className="font-outfit text-xl font-bold text-foreground">
                  {isEngineer ? "Project Delivery" : "Technical Fluency"}
                </h3>
              </div>

              <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {primarySkills.map((skill) => (
                  <FadeInItem key={skill.name}>
                    <motion.div
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(15,23,42,0.8)" }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-surface-light/20 transition-all"
                    >
                      <skill.icon size={16} className={isEngineer ? "text-emerald shrink-0" : "text-accent shrink-0"} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stackCategories.map((cat) => (
              <div
                key={cat.section}
                className="p-6 rounded-xl bg-surface/50 border border-surface-light/30"
              >
                <h4 className="font-outfit font-semibold text-foreground mb-4 text-sm">
                  {cat.section}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-surface border border-surface-light/30 text-xs font-fira text-muted hover:text-accent hover:border-accent/30 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 p-6 rounded-xl bg-surface/50 border border-surface-light/30">
            <h4 className="font-outfit font-semibold text-foreground mb-4 text-center text-sm">
              {isEngineer ? "Tools & Environment" : "Platforms & Collaboration"}
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {isEngineer
                ? ["JIRA", "Git / GitHub", "Postman", "DBeaver", "VS Code", "Figma", "Vercel", "Docker"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-full bg-surface border border-surface-light/30 text-sm font-fira text-muted hover:text-accent hover:border-accent/30 transition-all"
                      >
                        {tool}
                      </span>
                    )
                  )
                : ["JIRA", "Confluence", "Slack", "MS Project", "Notion", "Miro", "PowerPoint", "Teams"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-full bg-surface border border-surface-light/30 text-sm font-fira text-muted hover:text-emerald hover:border-emerald/30 transition-all"
                      >
                        {tool}
                      </span>
                    )
                  )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
