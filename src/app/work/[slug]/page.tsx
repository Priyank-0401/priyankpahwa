import Link from "next/link";
import { ArrowLeft, Code2, LayoutDashboard, Settings2, ShieldCheck } from "lucide-react";
import { MediaCard } from "@/components/MediaCard";
import { ProjectTimeline } from "@/components/ProjectTimeline";

// Data Dictionary
const PROJECT_DATA: Record<string, any> = {
  pharmafleet: {
    title: "PHARMAFLEET",
    impact: "Workflow-driven pharmaceutical logistics platform focused on operational efficiency and delivery orchestration.",
    description: "Designed operational workflows that simplified inventory coordination and delivery execution. The platform focused heavily on operational clarity, reducing workflow friction through structured dashboards, delivery orchestration, and scalable backend architecture. From system planning to API integration, the project emphasized reliability, execution velocity, and enterprise-style process management.",
    role: "Full Stack + Product Strategy",
    timeline: "2025",
    focus: ["Workflow Systems", "Delivery Ops", "Compliance UX"],
    stack: ["Spring Boot", "TypeScript", "GCP"],
    status: "Production Grade",
    type: "Workflow Platform",
    githubLink: "https://github.com/Priyank-0401/Inventory-Management",
    media: { type: "video", src: "/videos/pharmafleet-1.mp4" },
    metrics: [
      "23+ relational tables",
      "workflow-first architecture",
      "delivery lifecycle management",
      "compliance-oriented dashboards"
    ],
    snapshot: {
      challenge: "Complex pharmaceutical delivery coordination",
      approach: "Workflow-centric architecture and operational dashboards",
      outcome: "Reduced process friction and improved delivery visibility"
    }
  },
  seriva: {
    title: "SERIVA",
    impact: "AI-powered wellness platform exploring conversational interaction and immersive digital companionship.",
    description: "Built modular frontend interfaces and AI-driven communication flows to create a more emotionally adaptive user experience. The project explored the intersection of AI systems, human-centered design, and real-time engagement mechanics, shifting the paradigm from rigid UI to fluid, context-aware conversations.",
    role: "Full Stack + AI Integration",
    timeline: "2024",
    focus: ["Conversational UX", "AI Architecture", "Real-time Systems"],
    stack: ["React", "Node.js", "OpenAI"],
    status: "Beta Deployment",
    type: "AI Platform",
    githubLink: "https://github.com/Priyank-0401/AI-Companion",
    media: { type: "video", src: "/videos/seriva-1.mp4" },
    metrics: [
      "real-time interaction systems",
      "AI communication workflows",
      "modular frontend architecture",
      "emotion-aware UX exploration"
    ],
    snapshot: {
      challenge: "Rigid, transactional mental health and wellness interfaces",
      approach: "Adaptive, emotion-aware AI conversational architecture",
      outcome: "Fluid user experiences that adapt to emotional context"
    }
  },
  wepay: {
    title: "WEPAY",
    impact: "Role-based digital wallet and payment management platform focused on secure transaction handling.",
    description: "Designed secure transaction workflows and structured financial systems. The project centered around REST API architecture, authentication systems, and transaction lifecycle management, enabling seamless financial operations through a clean and controlled user experience. Particular emphasis was placed on backend structure, reliability, and operational scalability.",
    role: "Backend Architect + Full Stack",
    timeline: "2024",
    focus: ["Financial Infrastructure", "Secure Systems", "Transaction Arch"],
    stack: ["Java", "Spring Boot", "MySQL"],
    status: "Production Ready",
    type: "Fintech Core",
    githubLink: "https://github.com/Priyank-0401/WePay",
    media: { type: "image", src: "/videos/wepay.jpg" },
    metrics: [
      "9 REST APIs delivered",
      "role-based transaction flows",
      "secure authentication systems",
      "backend-first architecture"
    ],
    snapshot: {
      challenge: "Insecure and fragmented digital transaction ledgers",
      approach: "Unified REST architecture with role-based access control",
      outcome: "Scalable, secure, and auditable financial workflows"
    }
  },
  arsenal: {
    title: "PRODUCT ARSENAL",
    impact: "A curated collection of internal tools, workflow automations, and operational systems.",
    description: "Built a robust suite of internal tools designed to accelerate product delivery, automate repetitive workflows, and enforce strict architectural standards. The arsenal represents a systems-first approach to software development, prioritizing developer experience and operational efficiency over isolated feature work.",
    role: "Systems Architect",
    timeline: "2024",
    focus: ["Internal Tools", "Product Ops", "Workflow Automation"],
    stack: ["TypeScript", "Next.js", "Node.js"],
    status: "Operational",
    type: "Systems Collection",
    githubLink: "https://github.com/Priyank-0401",
    media: { type: "video", src: "/videos/code-cinematic.mp4" },
    metrics: [
      "multiple workflow tools deployed",
      "streamlined product ops",
      "automated delivery pipelines",
      "reusable architectural standards"
    ],
    snapshot: {
      challenge: "Fragmented internal workflows and repetitive operational tasks",
      approach: "A unified, reusable suite of internal tools and automation systems",
      outcome: "Accelerated delivery velocity and standardized operations"
    }
  }
};

export function generateStaticParams() {
  return [
    { slug: 'pharmafleet' },
    { slug: 'seriva' },
    { slug: 'wepay' },
    { slug: 'arsenal' }
  ];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();
  
  // Fallback to pharmafleet data if slug not found
  const project = PROJECT_DATA[slug] || PROJECT_DATA['pharmafleet'];

  return (
    <div className={`w-full min-h-screen bg-neutral-950 text-neutral-100 py-24 lg:py-32 px-4 lg:px-8 relative overflow-hidden`}>
      {/* Subtle monochrome background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      
      <div className="max-w-[150rem] mx-auto relative z-10">
        
        {/* Editorial Header */}
        <div className="flex justify-between items-center mb-16 border-b border-neutral-800 pb-8">
           <Link href="/#work" className="inline-flex items-center gap-3 text-neutral-400 hover:text-neutral-100 transition-colors uppercase tracking-widest text-xs font-mono font-bold">
             <ArrowLeft className="w-4 h-4" />
             Return to Systems
           </Link>
           <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 hidden sm:block">
             Case Study / 0{slug === 'pharmafleet' ? '1' : slug === 'seriva' ? '2' : '3'}
           </span>
        </div>

        {/* Split Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 lg:mb-32">
           {/* Left: Massive Title & Impact */}
           <div className="lg:col-span-7 flex flex-col justify-end">
              <h1 className="text-[clamp(50px,8vw,160px)] font-bold tracking-tight leading-[0.85] uppercase mb-8 text-white">
                {project.title}
              </h1>
              <p className={`text-[clamp(20px,2vw,36px)] leading-[1.2] font-medium max-w-4xl text-neutral-400`}>
                {project.impact}
              </p>
           </div>
           
           {/* Right: Floating Metadata Cards */}
           <div className="lg:col-span-5 flex flex-col justify-end gap-4 lg:gap-6">
              
              <div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-8 shadow-2xl">
                 
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block mb-2">Role</span>
                      <span className="text-sm lg:text-base font-semibold text-neutral-200">{project.role}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block mb-2">Status</span>
                      <span className="text-sm lg:text-base font-semibold text-neutral-200 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        {project.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block mb-2">Type</span>
                      <span className="text-sm lg:text-base font-semibold text-neutral-200">{project.type}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block mb-2">Timeline</span>
                      <span className="text-sm lg:text-base font-semibold text-neutral-200">{project.timeline}</span>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-neutral-800">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block mb-4">Core Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech: string, i: number) => (
                        <span key={i} className="bg-neutral-950 px-3 py-1.5 rounded text-[10px] uppercase tracking-widest text-neutral-300 font-mono border border-neutral-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                 </div>

              </div>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-neutral-100 text-neutral-900 px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform duration-300 group"
              >
                <span>Inspect Repository</span>
                <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>

           </div>
        </div>

        {/* System Snapshot */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-[2rem] p-8 lg:p-16 mb-24 lg:mb-32">
           <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-neutral-500 mb-12">System Snapshot</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div>
                 <span className="flex items-center gap-3 text-sm font-bold text-neutral-300 mb-4 uppercase tracking-widest border-b border-neutral-800 pb-4">
                   <Settings2 className="w-4 h-4" /> Challenge
                 </span>
                 <p className="text-neutral-400 font-medium leading-relaxed">{project.snapshot.challenge}</p>
              </div>
              <div>
                 <span className="flex items-center gap-3 text-sm font-bold text-neutral-300 mb-4 uppercase tracking-widest border-b border-neutral-800 pb-4">
                   <LayoutDashboard className="w-4 h-4" /> Approach
                 </span>
                 <p className="text-neutral-400 font-medium leading-relaxed">{project.snapshot.approach}</p>
              </div>
              <div>
                 <span className="flex items-center gap-3 text-sm font-bold text-neutral-300 mb-4 uppercase tracking-widest border-b border-neutral-800 pb-4">
                   <ShieldCheck className="w-4 h-4" /> Outcome
                 </span>
                 <p className="text-neutral-400 font-medium leading-relaxed">{project.snapshot.outcome}</p>
              </div>
           </div>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 lg:mb-32">
           <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-neutral-500 mb-8">Operational Methodology</h3>
              <p className="text-[clamp(18px,1.5vw,28px)] text-neutral-300 font-medium leading-[1.6]">
                {project.description}
              </p>
           </div>
           
           <div className="lg:col-span-5 flex flex-col justify-center bg-neutral-900/40 p-8 lg:p-12 rounded-3xl border border-neutral-800">
              <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-neutral-500 mb-8">Delivery Metrics</h3>
              <ul className="flex flex-col gap-6">
                {project.metrics.map((metric: string, idx: number) => (
                   <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0"></div>
                      <span className="text-sm lg:text-base font-medium text-neutral-300">{metric}</span>
                   </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Visual Timeline */}
        <div className="mb-24 lg:mb-32">
           <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-neutral-400 text-center mb-4">Execution Flow</h3>
           <ProjectTimeline />
        </div>

        {/* Media Presentation */}
        <div className={`w-full aspect-video lg:aspect-[21/9] rounded-[2rem] overflow-hidden relative shadow-2xl border border-neutral-800 bg-neutral-900 p-2 lg:p-4`}>
          <div className="w-full h-full relative rounded-xl overflow-hidden border border-neutral-800/50">
            {/* Dark Monochrome Overlay */}
            <div className={`absolute inset-0 z-10 mix-blend-overlay opacity-20 bg-neutral-950 pointer-events-none`}></div>
            <MediaCard 
              type={project.media.type} 
              src={project.media.src} 
              className="opacity-90 contrast-125 grayscale" 
              hoverClip={false}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
