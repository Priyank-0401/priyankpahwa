import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Code,
  Coffee,
  Star,
  ExternalLink,
  Calendar,
  Award
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = [
    'React', 'Node.js', 'Solidity', 'Python', 'TypeScript', 'Tailwind CSS'
  ];

  const achievements = [
    { icon: Award, text: '2+ Major Projects', color: 'text-yellow-400' },
    { icon: Star, text: '3rd Year CSE Student', color: 'text-blue-400' },
    { icon: Code, text: 'Blockchain Developer', color: 'text-green-400' },
    { icon: Coffee, text: 'Always Learning', color: 'text-orange-400' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/priyankpahwa',
      label: 'GitHub',
      color: 'hover:bg-gray-700',
      external: true
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/priyankpahwa41',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
      external: true
    },
    {
      icon: Mail,
      href: 'mailto:priyankpahwa41@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-600',
      external: false
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800/50"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand & About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Priyank Pahwa
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Passionate <span className="text-blue-400 font-semibold">Blockchain & Web3 Developer</span> crafting 
              innovative solutions that bridge cutting-edge technology with real-world applications. 
              Currently pursuing Computer Science Engineering with a focus on decentralized systems and AI.
            </p>
            
            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-200"
                >
                  <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                  <span className="text-sm text-gray-300">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h5>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="px-3 py-1 bg-gray-800 text-blue-400 text-xs rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-200"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
            
            {/* Resume Download */}
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/resume.pdf"
                download="Priyank_Pahwa_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Download Resume</span>
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact & Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Let's Connect</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Gurugram, Haryana</p>
                </div>
              </motion.div>
              
              <motion.a 
                href="tel:+918595399258"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+91 85953 99258</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="mailto:priyankpahwa41@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">priyankpahwa41@gmail.com</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Follow Me</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-200 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-gray-300 group-hover:text-white transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>        {/* Inspirational Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center py-12 border-t border-b border-gray-800/50"
        >
          <div className="max-w-4xl mx-auto">
            <motion.blockquote 
              className="text-2xl md:text-3xl font-light text-gray-300 italic mb-4"
              whileHover={{ scale: 1.02 }}
            >
              "Innovation distinguishes between a leader and a follower."
            </motion.blockquote>
            <motion.p 
              className="text-blue-400 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              — Steve Jobs
            </motion.p>
            <motion.div 
              className="mt-6 flex justify-center space-x-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>Available for Opportunities</span>
              </div>
              <div className="flex items-center space-x-1">
                <Coffee size={14} />
                <span>Always Learning</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Coffee size={16} className="text-yellow-600" />
            <span>by Priyank Pahwa</span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 text-sm">
            <p>&copy; {currentYear} Priyank Pahwa. All rights reserved.</p>
            <span className="hidden md:block">•</span>
            <div className="flex items-center space-x-2">
              <span>Built with</span>
              <span className="text-blue-400 font-semibold">React</span>
              <span>&</span>
              <span className="text-blue-400 font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-200" />
      </motion.button>
    </footer>
  );
};

export default Footer;
