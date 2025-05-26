
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Globe } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <motion.div 
          className="w-24 h-1 bg-white mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-6xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              👨‍💻
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed"
          >
            I'm a passionate Computer Engineer with 5+ years of experience in full-stack development. 
            I specialize in creating scalable web applications and have a deep love for clean, 
            efficient code and innovative problem-solving.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed"
          >
            My journey in technology started with curiosity about how things work, and it has evolved 
            into a career focused on building solutions that make a difference.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            {[
              { icon: Code, label: 'Clean Code' },
              { icon: Brain, label: 'Problem Solver' },
              { icon: Cpu, label: 'System Design' },
              { icon: Globe, label: 'Web Technologies' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover="hover"
                className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-colors cursor-pointer"
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
      </div>
    </section>
  );
};

export default AboutSection;
