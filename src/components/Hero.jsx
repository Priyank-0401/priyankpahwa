import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown, 
  Download, 
  Code, 
  Cpu, 
  Zap,
  Sparkles 
} from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  // Framer Motion variants for letter stagger
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.035, delayChildren: 0.1 }
    }
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }
  };
  
  const roles = [
    "Software Developer",
    "AI Enthusiast",
    "Web3 Engineer", 
    "Blockchain Developer",
    "Problem Solver"
  ];

  // Rotate roles periodically
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, [roles.length]);

  const highlights = [
    { icon: Code, text: "2+ Major Projects", color: "text-blue-400" },
    { icon: Cpu, text: "IoT & Blockchain", color: "text-green-400" },
    { icon: Zap, text: "Web3 Expert", color: "text-yellow-400" },
    { icon: Sparkles, text: "Innovation Focused", color: "text-purple-400" }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Priyank-0401', 
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/priyankpahwa41', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: Mail, 
      href: 'mailto:priyankpahwa41@gmail.com', 
      label: 'Email',
      color: 'hover:bg-red-600'
    },
  ];

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-xl"
        />
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)] opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to_right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 0'
          }}
        />
        {/* Soft rotating conic gradient for depth */}
        <motion.div
          aria-hidden
          className="absolute -inset-1/2 md:-inset-1/3 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(59,130,246,0.06),rgba(147,51,234,0.06),rgba(59,130,246,0.06))] blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >          {/* Main heading with letter stagger */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            {"Hi, I'm Priyank Pahwa".split("").map((char, idx) => (
              <motion.span key={`h-${idx}`} variants={letterVariants} className={char === ' ' ? 'inline-block w-2' : ''}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Dynamic role display with letter stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl mb-8"
          >
            <span className="text-gray-300">I'm {/^[aeiouAEIOU]/.test(roles[currentRole]) ? 'an' : 'a'} </span>
            <motion.span
              key={`role-${currentRole}`}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.02 } }
              }}
              initial="hidden"
              animate="visible"
              className="text-blue-400 font-bold inline-block"
            >
              {roles[currentRole].split("").map((c, i) => (
                <motion.span key={`rl-${currentRole}-${i}`} variants={letterVariants} className={c === ' ' ? 'inline-block w-2' : ''}>
                  {c}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200"
              >
                <highlight.icon className={`w-6 h-6 mx-auto mb-2 ${highlight.color}`} />
                <p className="text-gray-300 text-sm font-medium">{highlight.text}</p>
              </motion.div>
            ))}
          </motion.div>          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Final year Computer Science student at Manipal University Jaipur with hands-on experience in 
            Full Stack development, Web3 technologies, IoT systems, and AI/ML. Building innovative solutions 
            that bridge cutting-edge technology and real-world applications.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-4 mb-10"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More About Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View My Work
            </motion.button>            <motion.a
              href="/resume.pdf"
              download="Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border border-gray-700 hover:border-gray-600"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Hero;