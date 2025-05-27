import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Globe } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="w-24 h-1 bg-white mx-auto"
        />
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={itemVariants}
        >
          <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl">
            <motion.div 
              className="text-6xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👨‍💻
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I'm a passionate Computer Engineer with 5+ years of experience in full-stack development. 
            I specialize in creating scalable web applications and have a deep love for clean, 
            efficient code and innovative problem-solving.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            My journey in technology started with curiosity about how things work, and it has evolved 
            into a career focused on building solutions that make a difference.
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 gap-4 mt-8"
            variants={containerVariants}
          >
            {[
              { icon: Code, label: 'Clean Code' },
              { icon: Brain, label: 'Problem Solver' },
              { icon: Cpu, label: 'System Design' },
              { icon: Globe, label: 'Web Technologies' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(55, 65, 81, 0.8)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
