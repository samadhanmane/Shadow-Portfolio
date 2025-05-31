import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { subject, message } = formData;
    const mailtoLink = `mailto:samadhanmane2324@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'samadhanmane2324@gmail.com', href: 'mailto:samadhanmane2324@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8010427685', href: 'tel:+918010427685' },
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SamadhanMane', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/samadhan-mane/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Samadha90118157', label: 'Twitter' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and build something amazing together.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors group"
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon size={20} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 bg-gray-900/50 rounded-lg hover:bg-white hover:text-black transition-colors"
                    aria-label={social.label}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
          >
            <motion.form 
              className="space-y-6"
              variants={containerVariants}
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="Project Discussion"
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
