import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen,
  Award,
  Target,
  Users,
  Lightbulb,
  Cpu,
  Globe,
  Briefcase,
  Code
} from 'lucide-react';

const Experience = () => {

  const education = [
    {
      institution: "Manipal University Jaipur",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      duration: "2022 - 2026",
      location: "Jaipur, Rajasthan",
      status: "Currently pursuing 3rd year",
      description: "Comprehensive computer science education with focus on emerging technologies",
      highlights: [
        "Specialized in Blockchain Technology and Web3 Development",
        "Advanced coursework in IoT, Embedded Systems, and AI/ML",
        "Active member of University Tech Society and Coding Club",
        "Participated in multiple hackathons and technical competitions",
        "Maintained strong academic performance with practical project focus"
      ],
      icon: GraduationCap,
      gpa: "Strong Academic Performance"
    },
    {
      institution: "Blue Bells Model School",
      degree: "Higher Secondary Certificate (12th)",
      field: "Science Stream (PCM)",
      duration: "2021 - 2022",
      location: "India",
      status: "Completed with Distinction",
      description: "Strong foundation in mathematics and sciences leading to engineering",
      highlights: [
        "Excellent performance in Mathematics and Physics",
        "Early introduction to programming and computer science concepts",
        "Developed analytical thinking and problem-solving skills",
        "Participated in science olympiads and mathematics competitions"
      ],
      icon: BookOpen,
      gpa: "Distinction Grade"
    }
  ];
  const skills = [
    { name: "Blockchain Development", level: 85, icon: Globe },
    { name: "IoT Systems", level: 75, icon: Cpu },
    { name: "Full-Stack Development", level: 85, icon: Briefcase },
    { name: "AI/ML Applications", level: 70, icon: Lightbulb }
  ];

  const achievements = [
    {
      title: "Blockchain Project Portfolio",
      description: "Successfully developed and deployed multiple blockchain applications",
      icon: Award,
      color: "text-yellow-400"
    },
    {
      title: "IoT Innovation",
      description: "Created smart monitoring systems with real-world applications",
      icon: Target,
      color: "text-green-400"
    },
    {
      title: "Technical Leadership",
      description: "Led project teams and mentored peers in emerging technologies",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Continuous Learning",
      description: "Constantly updating skills with latest technology trends",
      icon: Lightbulb,
      color: "text-purple-400"
    }  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">{/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Education & <span className="text-blue-400">Learning</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous skill development in technology
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Educational <span className="text-blue-400">Background</span>
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500"></div>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300 border border-gray-600">
                      <edu.icon className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">
                      {edu.institution}
                    </h4>
                    <p className="text-xl text-green-400 font-semibold mb-2">
                      {edu.degree} - {edu.field}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.gpa}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-blue-400 mb-4">{edu.status}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                    <div className="space-y-3">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * idx }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{highlight}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Technical <span className="text-blue-400">Proficiency</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <skill.icon className="w-8 h-8 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  <span className="text-purple-400 font-bold ml-auto">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Key <span className="text-blue-400">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-all duration-300"
              >
                <achievement.icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                <h4 className="text-lg font-semibold mb-3 text-white">{achievement.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
