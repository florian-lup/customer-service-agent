'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ChatBotContainer = dynamic(() => import('./ChatBot/ChatBotContainer'), { ssr: false });

// Reduce number of elements
const hexRings = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  size: 200 + i * 150,
}));

const energyWaves = Array.from({ length: 2 }).map((_, i) => ({
  id: i,
  direction: i % 2 === 0 ? 1 : -1,
}));

const radiationRings = Array.from({ length: 2 }).map((_, i) => ({
  id: i,
  size: 400 + i * 300,
  clockwise: i % 2 === 0,
}));

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Dark gradient overlay - Using CSS only */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F1A] to-[#0F2F25] opacity-90" />

      {/* Hexagonal Grid Background - Reduced animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        {hexRings.map((ring) => (
          <motion.div
            key={ring.id}
            className="absolute border border-[#00FF9F]/20"
            style={{
              width: ring.size,
              height: ring.size,
              clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
              willChange: 'transform',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30 + ring.id * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Energy Waves - Using CSS animations */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {energyWaves.map((wave) => (
          <div
            key={wave.id}
            className="absolute w-[200%] h-[2px] animate-wave"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.3), rgba(0, 102, 255, 0.3), transparent)',
              transform: `rotate(${wave.direction * 45}deg)`,
              animation: `wave${wave.direction > 0 ? 'Right' : 'Left'} 8s linear infinite`,
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Radiation Effect - Optimized animations */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {radiationRings.map((ring) => (
          <motion.div
            key={ring.id}
            className="absolute rounded-full border-2"
            style={{
              width: ring.size,
              height: ring.size,
              borderColor: ring.clockwise ? 'rgba(0, 255, 159, 0.3)' : 'rgba(0, 102, 255, 0.3)',
              [ring.clockwise ? 'borderRightColor' : 'borderLeftColor']: 'transparent',
              willChange: 'transform',
            }}
            animate={{
              rotate: ring.clockwise ? 360 : -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Center point - Simplified animation */}
        <motion.div
          className="absolute w-5 h-5 rounded-full"
          style={{
            backgroundColor: '#00FF9F',
            boxShadow: '0 0 30px rgba(0, 255, 159, 0.8)',
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Gradient mesh - Using CSS only */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,159,0.15)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.15)_1px,transparent_1px)] bg-[length:20px_20px] rotate-45" />
      </div>

      {/* Content overlay - Using CSS only */}
      <div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[1px]" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <ChatBotContainer />
      </div>
    </div>
  );
} 