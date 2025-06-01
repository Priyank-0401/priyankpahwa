import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Coffee,
  Calendar
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear();
  const achievements = [
    { icon: Calendar, text: 'Available for Opportunities', color: 'text-blue-400' },
    { icon: Coffee, text: 'Always Learning', color: 'text-orange-400' }
  ];
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Priyank-0401',
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
    },    {
      icon: Mail,
      href: 'mailto:priyankpahwa41@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-600',
      external: false
    }];
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800/50"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-6 py-10">{/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <div className="border-l-4 border-blue-500 pl-4">
              <motion.blockquote 
                className="text-xl md:text-2xl font-light text-gray-300 italic"
                whileHover={{ scale: 1.02 }}
              >
                "Innovation distinguishes between a leader and a follower."
              </motion.blockquote>
              <motion.p 
                className="text-blue-400 font-semibold mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                — Steve Jobs
              </motion.p>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            {/* Social Links */}
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
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} group`}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-300 group-hover:text-white transition-colors duration-200" />
                </motion.a>
              ))}
            </div>
            
            {/* Status Cards */}
            <div className="flex flex-wrap gap-3 mt-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-200 text-xs"
                >
                  <achievement.icon className={`w-4 h-4 ${achievement.color}`} />
                  <span className="text-gray-300">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Border only on top */}
        <div className="border-t border-gray-800/50 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <Coffee size={16} className="text-yellow-600 ml-1" />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 text-sm">
            <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
            <span className="hidden md:block">•</span>
            <div className="flex items-center space-x-2">
              <span>React</span>
              <span>&</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
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
