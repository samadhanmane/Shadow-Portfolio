import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    href={project.github} 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
              </div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-sm rounded-full border border-gray-700"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * techIndex, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
