import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Zap, 
  Heart, 
  Book, 
  Trophy,
  Target,
  Lightbulb,
  Users,
  Award
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "3+", label: "Years of Learning", icon: GraduationCap },
    { number: "2+", label: "Major Projects", icon: Code },
    { number: "10+", label: "Technologies", icon: Zap },
    { number: "100%", label: "Passion", icon: Heart }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "3rd-year CSE student at Manipal University Jaipur, maintaining high academic standards while pursuing practical technology applications",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Proficient in blockchain development, Web3 technologies, React, Node.js, Python, IoT systems, and AI/ML frameworks",
      color: "text-green-400"
    },
    {
      icon: Trophy,
      title: "Project Leadership",
      description: "Successfully delivered blockchain DApps, IoT monitoring systems, smart contracts, and AI-powered applications",
      color: "text-yellow-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Passionate about solving real-world problems through innovative technology solutions and cutting-edge development practices",
      color: "text-purple-400"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "I approach challenges with analytical thinking and creative solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication and project management skills"
    },
    {
      icon: Book,
      title: "Continuous Learner",
      description: "Always staying updated with latest technologies and best practices"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to writing clean, maintainable code and delivering excellence"
    }
  ];  return (
    <section id="about" className="py-20 bg-gray-900">
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
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer exploring the intersection of blockchain, AI, and real-world innovation
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold mb-4 text-white">Priyank Pahwa</h3>
              <p className="text-xl text-blue-400 font-semibold mb-6">
                Blockchain Developer | Web3 Engineer | Software Developer
              </p>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  🎓 <strong className="text-blue-400">Computer Science Engineering student</strong> at Manipal University Jaipur 
                  with an unwavering passion for emerging technologies and innovative problem-solving.
                </p>
                <p>
                  🚀 Specialized in <strong className="text-blue-400">blockchain development, Web3 technologies, IoT systems, and AI/ML</strong>, 
                  with hands-on experience building production-ready applications that bridge the digital divide.
                </p>
                <p>
                  💡 Focused on creating <strong className="text-blue-400">decentralized applications and smart contract solutions</strong> 
                  that democratize access to technology and create meaningful impact in everyday life.
                </p>
                <p>
                  🌟 Currently exploring the convergence of <strong className="text-blue-400">AI and blockchain technologies</strong> to build 
                  next-generation applications that leverage intelligent automation and decentralized architecture.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Core <span className="text-blue-400">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-3 text-white">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-white">My Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                To harness the transformative power of <span className="text-blue-400 font-semibold">blockchain technology</span>, 
                <span className="text-green-400 font-semibold"> artificial intelligence</span>, and 
                <span className="text-purple-400 font-semibold"> innovative software development</span> to create solutions that 
                democratize access to technology, solve real-world problems, and contribute to a more connected and equitable digital future. 
                I believe that through continuous learning, collaborative innovation, and ethical development practices, 
                we can build technology that truly serves humanity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
