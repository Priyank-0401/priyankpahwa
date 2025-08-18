import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Cpu, 
  Shield, 
  Globe, 
  Code2, 
  Database, 
  Brain,
  Calendar,
  Star,
  GitBranch,
  Eye,
  Award,
  Zap
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [hoverRect, setHoverRect] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "AI Wellness Companion (3D Emotional Assistant)",
      description: "3D AI wellness companion with expressive avatar, emotional support, journaling, and guided relaxation.",
      detailedDescription: "The AI Wellness Companion blends AI and 3D technology to deliver a personalized digital wellness experience. Through real-time emotion detection, voice and text conversation, and interactive journaling, it promotes mindfulness and mental health. The avatar responds with realistic expressions and synced voice output using Azure TTS and Groq-powered NLP, all built in a custom React + Node.js stack.",
      image: `${import.meta.env.BASE_URL}Seriva.png`,
      previewGif: "",
      technologies: ["React", "AI/ML", "3D Graphics", "Voice API", "Emotion AI", "TensorFlow", "Three.js", "NLP"],
      category: "ai",
      icon: Brain,
      github: "https://github.com/Priyank-0401/Seriva-Showcase",
      demo: "#",
      status: "wip",
      date: "2025 - Present",
      highlights: [
        "Built 3D avatar with lip-sync and emotion-driven animations",
        "Integrated real-time text and voice-based chat AI",
        "Implemented journaling and wellness tools using React",
        "Deployed emotion detection and mood-based response system"
      ],
      impact: "Empowering mental wellness through personalized, AI-enhanced support"
    },
    {
      id: 2,
      title: "PharmaFleet: Smart Carton Inventory System",
      description: "Real-time pharma inventory with IoT, NFC/barcode, smart tracking, and analytics.",
      detailedDescription: "PharmaFleet is an intelligent inventory management system tailored for the pharmaceutical industry. It integrates IoT sensors, NFC tags, and barcode scanning with a React frontend and Node.js backend. The system tracks medicine cartons in real-time, verifies product authenticity, and powers analytics dashboards to support supply chain decisions and traceability.",
      image: `${import.meta.env.BASE_URL}PharmaFleet.png`,
      previewGif: "",
      technologies: ["IoT", "Node.js", "MongoDB", "React", "NFC", "Barcode Scanner", "Express.js", "Socket.io"],
      category: "iot",
      icon: Cpu,
      github: "https://github.com/Priyank-0401/Inventory-Management",
      demo: "#",
      status: "wip",
      date: "2025 - Present",
      highlights: [
        "Integrated NFC and barcode technologies for item-level tracking",
        "Built real-time communication via Socket.io",
        "Created interactive dashboard for inventory analysis",
        "Enhanced pharmaceutical traceability through smart carton tracking"
      ],
      impact: "Revolutionized pharma supply chains with intelligent, sensor-driven visibility"
    },
    {
      id: 3,
      title: "WePay: Blockchain-Powered Local Transactions",
      description: "Full-stack DApp on Ethereum/Ganache with MetaMask, secure transactions, and smart contracts.",
      detailedDescription: "WePay is a robust blockchain solution that demonstrates hands-on experience in decentralized finance. It combines Solidity smart contracts with a React frontend and Node.js backend, enabling users to connect MetaMask wallets, manage funds, and track transaction history in real-time using Web3.js. Built for local deployment with Ganache, it offers a sandbox for exploring real-world DeFi concepts.",
      image: `${import.meta.env.BASE_URL}WePay.png`,
      previewGif: "",
      technologies: ["Solidity", "Web3.js", "Ethereum", "React", "Node.js", "Ganache", "MetaMask"],
      category: "blockchain",
      icon: Shield,
      github: "https://github.com/Priyank-0401/wepay-crypto",
      demo: "#",
      status: "completed",
      date: "2025",
      highlights: [
        "Developed and deployed secure smart contracts on Ethereum",
        "Integrated MetaMask for user wallet connectivity",
        "Implemented real-time transaction monitoring via Web3.js",
        "Ensured robust validation and secure backend operations"
      ],
      impact: "Strengthened expertise in blockchain development and DeFi system architecture"
    }   
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe, count: projects.length },
    { key: 'ai', label: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'ai').length },
    { key: 'iot', label: 'IoT', icon: Cpu, count: projects.filter(p => p.category === 'iot').length },
    { key: 'blockchain', label: 'Blockchain', icon: Shield, count: projects.filter(p => p.category === 'blockchain').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const hoveredProject = projects.find(p => p.id === hoveredProjectId);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500 text-white';
      case 'wip': return 'bg-yellow-500 text-black';
      case 'concept': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'wip': return 'In Progress';
      case 'concept': return 'Concept';
      default: return 'Unknown';
    }
  };
      return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative projects spanning blockchain development, IoT systems, and AI applications
          </p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white border border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'bg-gray-900 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-blue-500/50'
              }`}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.key ? 'bg-blue-700' : 'bg-gray-700'
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onMouseEnter={(e) => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                    hoverTimeoutRef.current = null;
                  }
                  setHoveredProjectId(project.id);
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoverRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
                }}
                onMouseMove={(e) => {
                  if (hoveredProjectId === project.id) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoverRect((prev) => {
                      const next = { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
                      return (!prev || prev.top !== next.top || prev.left !== next.left || prev.width !== next.width || prev.height !== next.height) ? next : prev;
                    });
                  }
                }}
                onMouseLeave={() => {
                  hoverTimeoutRef.current = setTimeout(() => {
                    setHoveredProjectId((prev) => (prev === project.id ? null : prev));
                    setHoverRect(null);
                  }, 120);
                }}
                className="relative bg-gray-900 border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                {/* Media Preview */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={(project.previewGif && project.previewGif.length > 0) ? project.previewGif : project.image}
                    alt={project.title}
                    loading="lazy"
                    initial={{ scale: 1, opacity: 0.9 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full w-full object-cover will-change-transform"
                  />
                  {/* Gradient overlays */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                  {/* Glow ring on hover */}
                  <div className="pointer-events-none absolute -inset-px rounded-t-2xl ring-1 ring-white/5 group-hover:ring-blue-500/30 transition duration-300" />
                </div>

                {/* Project Header with Icon and Status */}
                <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        project.category === 'blockchain' ? 'bg-blue-500/20 text-blue-400' :
                        project.category === 'iot' ? 'bg-orange-500/20 text-orange-400' :
                        project.category === 'ai' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {React.createElement(project.icon, { size: 24 })}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar size={14} className="text-gray-400" />
                          <span className="text-gray-400 text-sm">{project.date}</span>
                        </div>

                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star size={12} className="text-yellow-400" />
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                            project.category === 'blockchain' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                            project.category === 'iot' ? 'bg-orange-500/10 text-orange-400 border-orange-500/30' :
                            project.category === 'ai' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' :
                            'bg-green-500/10 text-green-400 border-green-500/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons (reveal on hover) */}
                  <div className="flex space-x-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-gray-700/80 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-gray-600 hover:border-gray-500"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>

                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <Eye size={16} />
                      <span>Details</span>
                    </motion.button>
                  </div>

                  {/* Impact */}
                  <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award size={16} className="text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400">Project Impact</span>
                    </div>
                    <p className="text-gray-300 text-sm">{project.impact}</p>
                  </div>
                </div>

                {/* (Popup moved to portal at root) */}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-900 border border-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Project <span className="text-blue-400">Statistics</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Projects", value: "3", icon: Zap, color: "text-blue-400" },
              { label: "Technologies", value: "20+", icon: Code2, color: "text-green-400" },
              { label: "GitHub Repos", value: "15+", icon: GitBranch, color: "text-purple-400" },
              { label: "Lines of Code", value: "10K+", icon: Database, color: "text-orange-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Global hover popup portal (desktop only) */
      /* Backdrop remains fixed; popup is positioned above hovered card using hoverRect */}
      {typeof document !== 'undefined' && createPortal(
        (
          <AnimatePresence>
            {hoveredProject && (
              <>
                {/* Backdrop */}
                <motion.div
                  key={`backdrop-global-${hoveredProject.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="hidden md:block fixed inset-0 z-[9998] bg-black/50 backdrop-blur-md pointer-events-none"
                />
                {/* Popup aligned to hovered card (fixed position, above backdrop) */}
                {(hoverRect || hoveredProject) && (
                  <motion.div
                    key={`popup-global-${hoveredProject.id}`}
                    initial={{ opacity: 0, y: -12, scale: 0.96, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, scale: 0.97, filter: 'blur(4px)' }}
                    transition={{ type: 'spring', stiffness: 240, damping: 20, mass: 0.9 }}
                    className="hidden md:block fixed z-[2147483647] pointer-events-auto"
                    onMouseEnter={() => {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                        hoverTimeoutRef.current = null;
                      }
                    }}
                    onMouseLeave={() => {
                      hoverTimeoutRef.current = setTimeout(() => {
                        setHoveredProjectId(null);
                        setHoverRect(null);
                      }, 120);
                    }}
                    style={{
                      top: hoverRect ? hoverRect.top : 100,
                      left: hoverRect ? hoverRect.left : 24,
                      width: hoverRect ? hoverRect.width : 520
                    }}
                  >
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/50">
                      <div className="p-6 md:p-8 max-h-[85vh] overflow-hidden">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                              hoveredProject.category === 'blockchain' ? 'bg-blue-500/20 text-blue-300' :
                              hoveredProject.category === 'iot' ? 'bg-orange-500/20 text-orange-300' :
                              hoveredProject.category === 'ai' ? 'bg-purple-500/20 text-purple-300' :
                              'bg-green-500/20 text-green-300'
                            }`}>
                              {React.createElement(hoveredProject.icon, { size: 22 })}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white leading-tight">{hoveredProject.title}</h3>
                              <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                                <Calendar size={14} />
                                <span>{hoveredProject.date}</span>
                              </div>
                            </div>
                          </div>
                          <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor(hoveredProject.status)}`}>
                            {getStatusLabel(hoveredProject.status)}
                          </span>
                        </div>

                        {/* Popup Media (full image, natural height) */}
                        <div className="mb-6 -mt-1 overflow-hidden">
                          <div className="relative w-full flex items-center justify-center">
                            <motion.img
                              src={hoveredProject.image}
                              alt={`${hoveredProject.title} preview`}
                              className="w-full h-auto max-h-[60vh] object-contain"
                              initial={{ opacity: 0, scale: 0.985 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                            />
                            
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                          <div className="md:col-span-2">
                            <h4 className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase mb-2">What it is</h4>
                            <p className="text-slate-200/95 leading-relaxed">
                              {hoveredProject.detailedDescription}
                            </p>

                            <h4 className="mt-6 text-[12px] font-semibold tracking-wider text-slate-400 uppercase mb-2">Value / Impact</h4>
                            <p className="text-slate-300/90 leading-relaxed">
                              {hoveredProject.impact}. Designed to scale, impress stakeholders, and accelerate development cycles through clean architecture and compelling UX.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {hoveredProject.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/70 border border-slate-700 text-slate-200">
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <h4 className="mt-6 text-[12px] font-semibold tracking-wider text-slate-400 uppercase mb-2">Highlights</h4>
                            <ul className="space-y-2">
                              {hoveredProject.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-200">
                                  <Star size={14} className="mt-0.5 text-yellow-400" />
                                  <span className="leading-snug text-sm">{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        ), document.body)
      }
    </section>
  );
};

export default Projects;
