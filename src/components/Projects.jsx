import React, { useState } from 'react';
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

  const projects = [
    {
      id: 1,
      title: "AI Wellness Companion (3D Emotional Assistant)",
      description: "A 3D AI-powered wellness platform featuring an expressive avatar that offers emotional support, intelligent chat, journaling, and guided relaxation tools.",
      detailedDescription: "The AI Wellness Companion blends AI and 3D technology to deliver a personalized digital wellness experience. Through real-time emotion detection, voice and text conversation, and interactive journaling, it promotes mindfulness and mental health. The avatar responds with realistic expressions and synced voice output using Azure TTS and Groq-powered NLP, all built in a custom React + Node.js stack.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&auto=format",
      technologies: ["React", "AI/ML", "3D Graphics", "Voice API", "Emotion AI", "TensorFlow", "Three.js", "NLP"],
      category: "ai",
      icon: Brain,
      github: "https://github.com/Priyank-0401/AI-Companion",
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
      description: "A real-time pharmaceutical inventory platform leveraging IoT, barcode, and NFC technologies to deliver supply chain transparency, smart tracking, and analytics.",
      detailedDescription: "PharmaFleet is an intelligent inventory management system tailored for the pharmaceutical industry. It integrates IoT sensors, NFC tags, and barcode scanning with a React frontend and Node.js backend. The system tracks medicine cartons in real-time, verifies product authenticity, and powers analytics dashboards to support supply chain decisions and traceability.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=300&fit=crop&auto=format",
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
      description: "A full-stack decentralized application (DApp) built on Ethereum and Ganache, enabling secure, real-time local transactions with MetaMask integration and smart contract automation.",
      detailedDescription: "WePay is a robust blockchain solution that demonstrates hands-on experience in decentralized finance. It combines Solidity smart contracts with a React frontend and Node.js backend, enabling users to connect MetaMask wallets, manage funds, and track transaction history in real-time using Web3.js. Built for local deployment with Ganache, it offers a sandbox for exploring real-world DeFi concepts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop&auto=format",
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
    { key: 'blockchain', label: 'Blockchain', icon: Shield, count: projects.filter(p => p.category === 'blockchain').length },
    { key: 'iot', label: 'IoT', icon: Cpu, count: projects.filter(p => p.category === 'iot').length },
    { key: 'ai', label: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
                whileHover={{ y: -5 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
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
                        <project.icon size={24} />
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
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
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

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-gray-600 hover:border-gray-500"
                    >
                      <Github size={16} />
                      <span>View Code</span>
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
    </section>
  );
};

export default Projects;
