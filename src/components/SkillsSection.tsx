import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Core Programming',
      skills: [
        { 
          name: 'C++',
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
          description: 'Advanced programming with C++'
        },
        { 
          name: 'Java',
          image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
          description: 'Object-oriented programming'
        },
        { 
          name: 'C',
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
          description: 'System programming'
        },
        { 
          name: 'Python',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
          description: 'General purpose programming'
        },
        
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { 
          name: 'HTML5',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
          description: 'Web structure'
        },
        { 
          name: 'CSS3',
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
          description: 'Web styling'
        },
        { 
          name: 'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          description: 'Web interactivity'
        },
        { 
          name: 'React',
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
          description: 'Frontend framework'
        }
      ]
    },
    {
      title: 'Data & Tools',
      skills: [
        { 
          name: 'MongoDB',
          image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
          description: 'NoSQL database'
        },
        { 
          name: 'SQL/PLSQL',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
          description: 'Relational database'
        },
        { 
          name: 'MATLAB',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
          description: 'Numerical computing'
        },
        { 
          name: 'Tableau',
          image: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
          description: 'Data visualization'
        }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="pt-12 pb-4 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-50px" }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
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
              className="bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <motion.h3 
                className="text-xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      className="mb-1 p-2 bg-white/10 rounded-lg w-14 h-14 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                        style={{
                          filter: skill.name === 'Express' ? 'invert(1)' : 'none'
                        }}
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/48?text=' + skill.name;
                        }}
                      />
                    </motion.div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                    <span className="text-xs text-gray-400 text-center mt-0.5">{skill.description}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
