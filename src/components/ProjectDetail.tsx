import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight, FileText, Link2, Users, Target, BookOpen, X } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </motion.button>
          <h1 className="text-4xl font-bold">Project not found</h1>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleFullscreenClose = () => {
    setIsFullscreen(false);
  };

  const Section = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => {
    if (!children) return null;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center space-x-2 mb-6">
          <Icon size={24} />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{project.longDescription}</p>
        </motion.div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            {/* Custom Grid Layout */}
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* First row - 3 images */}
                {project.images.slice(0, 3).map((image, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800">
                      <div className="relative cursor-pointer aspect-[4/3]" onClick={() => {
                        setCurrentImageIndex(index);
                        setIsFullscreen(true);
                      }}>
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="flex items-center justify-between"
                            >
                              <span className="text-white text-sm font-medium">
                                View Full Size
                              </span>
                              <motion.div
                                className="p-2 bg-white/20 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink size={18} className="text-white" />
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Second row - 2 images */}
              {project.images.length > 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-16">
                  {project.images.slice(3, 5).map((image, index) => (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index + 3) * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800">
                        <div className="relative cursor-pointer aspect-[16/9]" onClick={() => {
                          setCurrentImageIndex(index + 3);
                          setIsFullscreen(true);
                        }}>
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 4}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center justify-between"
                              >
                                <span className="text-white text-sm font-medium">
                                  View Full Size
                                </span>
                                <motion.div
                                  className="p-2 bg-white/20 rounded-full"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <ExternalLink size={18} className="text-white" />
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Project Links */}
        <motion.div
          className="flex space-x-4 mb-12"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View Code</span>
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </motion.a>
        </motion.div>

        {/* Tech Stack */}
        <Section title="Tech Stack" icon={Target}>
          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(project.techStack).map(([category, technologies]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gray-900 rounded-full border border-gray-800"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section title="Team" icon={Users}>
          <div className="grid md:grid-cols-2 gap-4">
            {project.collaborators.map((collaborator, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-4 rounded-lg border border-gray-800"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold">{collaborator.name}</h3>
                <p className="text-gray-400">{collaborator.role}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Impact */}
        {project.impact && (
          <Section title="Project Impact" icon={Target}>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(project.impact).map(([category, impacts]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4 capitalize">{category} Impact</h3>
                  <ul className="space-y-3">
                    {impacts.map((impact, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-green-500 mt-1">•</span>
                        <span>{impact}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Challenges & Solutions */}
        <Section title="Challenges & Solutions" icon={BookOpen}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Challenges</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-red-500 mt-1">•</span>
                    <span>{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-green-500 mt-1">•</span>
                    <span>{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* References */}
        {project.references && (
          <Section title="References" icon={Link2}>
            <div className="grid md:grid-cols-2 gap-4">
              {project.references.map((reference, index) => (
                <motion.a
                  key={index}
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:bg-gray-900 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-semibold mb-2">{reference.title}</h3>
                  <p className="text-gray-400">{reference.author}</p>
                </motion.a>
              ))}
            </div>
          </Section>
        )}

        {/* Documents */}
        {project.documents && (
          <Section title="Documents" icon={FileText}>
            <div className="grid md:grid-cols-3 gap-4">
              {project.documents.map((doc, index) => (
                <motion.a
                  key={index}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:bg-gray-900 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2">
                    <FileText size={20} />
                    <span className="font-semibold">{doc.title}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{doc.type}</p>
                </motion.a>
              ))}
            </div>
          </Section>
        )}

        {/* Fullscreen Image View */}
        <AnimatePresence>
          {isFullscreen && project.images && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={handleFullscreenClose}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                onClick={handleFullscreenClose}
              >
                <X size={24} />
              </button>
              <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      onClick={prevImage}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      onClick={nextImage}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectDetail; 