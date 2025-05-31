import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  rotation: number;
}

const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Add new particle every few pixels moved
      if (particleId % 2 === 0) { // Increased frequency for more fluid effect
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
          rotation: Math.random() * 360 // Random rotation for organic feel
        };

        setParticles(prev => [...prev, newParticle]);
      } else {
        particleId++;
      }
    };

    // Clean up old particles every 100ms
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(particle => now - particle.timestamp < 3000)); // Reduced lifetime for more fluid effect
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
            className="absolute w-5 h-5 bg-gradient-to-br from-white/30 to-gray-400/20 backdrop-blur-sm"
            style={{
              left: particle.x - 10,
              top: particle.y - 10,
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', // Organic blob shape
              transform: `rotate(${particle.rotation}deg)`,
            }}
            initial={{ 
              scale: 0,
              opacity: 1,
              rotate: particle.rotation,
            }}
            animate={{ 
              scale: [0, 1.2, 0.8, 0],
              opacity: [1, 0.8, 0.4, 0],
              rotate: [particle.rotation, particle.rotation + 180],
              x: Math.sin(index * 0.5) * 20,
              y: Math.cos(index * 0.5) * 20,
              borderRadius: [
                '60% 40% 30% 70% / 60% 30% 70% 40%',
                '30% 60% 70% 40% / 50% 60% 30% 60%',
                '60% 40% 30% 70% / 60% 30% 70% 40%'
              ]
            }}
            exit={{ 
              scale: 0,
              opacity: 0 
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              delay: index * 0.01
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
