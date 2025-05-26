
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

const Hero3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  // Create particles
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Floating geometric shapes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={[-3, 0, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="white" 
            wireframe 
            transparent 
            opacity={0.6}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[3, 1, -2]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial 
            color="white" 
            wireframe 
            transparent 
            opacity={0.4}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
        <mesh position={[0, -2, 1]}>
          <tetrahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial 
            color="white" 
            wireframe 
            transparent 
            opacity={0.5}
          />
        </mesh>
      </Float>

      {/* Particle system */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="white"
          transparent
          opacity={0.6}
        />
      </points>
    </>
  );
};

export default Hero3D;
