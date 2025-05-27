
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'CSS/Tailwind', level: 92 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 82 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 78 },
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 88 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <motion.h3 
                className="text-xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + categoryIndex * 0.1, duration: 0.5 }}
                viewport={{}}
              >
                {category.title}
              </motion.h3>
              
              <motion.div 
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2 + categoryIndex * 0.1
                    }
                  }
                }}
                viewport={{ margin: "-50px" }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={skillVariants}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "-50px" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
