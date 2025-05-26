
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Globe } from 'lucide-react';

const AboutSection = () => {
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
        <div className="w-24 h-1 bg-white mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
            <div className="text-6xl">👨‍💻</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate Computer Engineer with 5+ years of experience in full-stack development. 
            I specialize in creating scalable web applications and have a deep love for clean, 
            efficient code and innovative problem-solving.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in technology started with curiosity about how things work, and it has evolved 
            into a career focused on building solutions that make a difference.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: Code, label: 'Clean Code' },
              { icon: Brain, label: 'Problem Solver' },
              { icon: Cpu, label: 'System Design' },
              { icon: Globe, label: 'Web Technologies' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <item.icon className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
