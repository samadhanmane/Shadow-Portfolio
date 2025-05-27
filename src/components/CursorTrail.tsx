
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

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Add new particle every few pixels moved
      if (particleId % 3 === 0) { // Reduce frequency slightly
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        };

        setParticles(prev => [...prev, newParticle]);
      } else {
        particleId++;
      }
    };

    // Clean up old particles every 100ms
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(particle => now - particle.timestamp < 5000));
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
            className="absolute w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/40"
            style={{
              left: particle.x - 16,
              top: particle.y - 16,
            }}
            initial={{ 
              scale: 0,
              opacity: 1,
            }}
            animate={{ 
              scale: [0, 1.5, 1, 0],
              opacity: [1, 0.8, 0.5, 0],
              x: Math.sin(index * 0.3) * 40,
              y: Math.cos(index * 0.3) * 40,
            }}
            exit={{ 
              scale: 0,
              opacity: 0 
            }}
            transition={{ 
              duration: 4,
              ease: "easeOut",
              delay: index * 0.03
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
