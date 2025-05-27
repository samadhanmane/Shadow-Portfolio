
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new particle
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };

      setParticles(prev => [...prev, newParticle]);
    };

    // Clean up old particles every 100ms
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(particle => now - particle.timestamp < 4000));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              left: particle.x - 6,
              top: particle.y - 6,
            }}
            initial={{ 
              scale: 0,
              opacity: 0.8,
            }}
            animate={{ 
              scale: [0, 1, 0.5, 0],
              opacity: [0.8, 0.6, 0.3, 0],
              x: Math.sin(index * 0.5) * 20,
              y: Math.cos(index * 0.5) * 20,
            }}
            exit={{ 
              scale: 0,
              opacity: 0 
            }}
            transition={{ 
              duration: 4,
              ease: "easeOut",
              delay: index * 0.02
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default CursorTrail;
