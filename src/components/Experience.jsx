import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen,
  ChevronDown
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
  

  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleItem = (idx) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

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

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Educational <span className="text-blue-400">Timeline</span>
          </h3>

          <div className="relative pl-10">
            {/* Scroll-draw vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute left-4 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-blue-500 to-green-500"
            />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-0.5 top-3 w-3 h-3 rounded-full bg-blue-500 border-2 border-gray-900 shadow" />

                  {/* Card */}
                  <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
                    {/* Header clickable */}
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full text-left p-5 flex items-start gap-4 hover:bg-gray-800/60 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
                        <edu.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-lg md:text-xl font-semibold text-white">{edu.institution}</h4>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${openItems[index] ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <p className="text-blue-400 font-medium mt-1">{edu.degree} - {edu.field}</p>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm">
                          <span className="inline-flex items-center gap-2"><Calendar size={14} />{edu.duration}</span>
                          <span className="inline-flex items-center gap-2"><MapPin size={14} />{edu.location}</span>
                          <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-medium">{edu.gpa}</span>
                        </div>
                      </div>
                    </button>

                    {/* Collapsible content */}
                    <motion.div
                      initial={false}
                      animate={openItems[index] ? 'open' : 'collapsed'}
                      variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 }
                      }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="px-5 pb-5 overflow-hidden"
                    >
                      <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                      <div className="space-y-3">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.06 * idx }}
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2" />
                            <p className="text-gray-300 leading-relaxed">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Experience;
