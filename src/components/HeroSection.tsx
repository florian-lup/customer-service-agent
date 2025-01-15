'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ChatBotContainer = dynamic(() => import('./ChatBot/ChatBotContainer'), { ssr: false });

const hexRings = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  size: 150 + i * 100,
  delay: i * 0.4,
}));

const energyWaves = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  delay: i * 2,
  direction: i % 2 === 0 ? 1 : -1,
}));

const radiationRings = Array.from({ length: 2 }).map((_, i) => ({
  id: i,
  delay: i * 2,
}));

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F1A] to-[#0F2F25] opacity-90" />

      {/* Hexagonal Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {hexRings.map((ring) => (
          <motion.div
            key={ring.id}
            className="absolute border-2"
            style={{
              width: ring.size,
              height: ring.size,
              clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              borderColor: [
                'rgba(0, 255, 159, 0.15)',  // bright green
                'rgba(0, 102, 255, 0.25)',   // electric blue
                'rgba(0, 255, 159, 0.15)',   // bright green
              ],
              boxShadow: [
                '0 0 20px rgba(0, 255, 159, 0.1)',
                '0 0 40px rgba(0, 102, 255, 0.15)',
                '0 0 20px rgba(0, 255, 159, 0.1)',
              ],
            }}
            transition={{
              duration: 20 + ring.id * 2,
              repeat: Infinity,
              delay: ring.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Energy Waves */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {energyWaves.map((wave) => (
          <motion.div
            key={wave.id}
            className="absolute w-[200%] h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.3), rgba(0, 102, 255, 0.3), transparent)',
              transform: `rotate(${wave.direction * 45}deg)`,
              boxShadow: '0 0 20px rgba(0, 255, 159, 0.3)',
            }}
            animate={{
              x: wave.direction > 0 ? ['-100%', '0%'] : ['0%', '-100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: wave.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Radiation Effect */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {radiationRings.map((ring) => (
          <motion.div
            key={ring.id}
            className="absolute rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.03), transparent)',
            }}
            initial={{ width: 100, height: 100 }}
            animate={{
              width: ['100px', '400px', '800px'],
              height: ['100px', '400px', '800px'],
              opacity: [0.4, 0.3, 0],
              background: [
                'linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.15), transparent)',
                'linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.1), transparent)',
                'linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.05), transparent)',
              ],
              border: [
                '2px solid rgba(0, 255, 159, 0.4)',
                '2px solid rgba(0, 255, 159, 0.2)',
                '1px solid rgba(0, 102, 255, 0.05)',
              ],
            }}
            transition={{
              duration: 6,
              times: [0, 0.5, 1],
              repeat: Infinity,
              delay: ring.delay,
              ease: [0.4, 0, 0.2, 1],
              repeatDelay: 0.1,
            }}
          >
            {/* Inner glow */}
            <motion.div 
              className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-transparent via-[#00FF9F]/20 to-transparent"
              animate={{
                opacity: [0.2, 0.15, 0],
              }}
              transition={{
                duration: 6,
                times: [0, 0.5, 1],
                repeat: Infinity,
                delay: ring.delay,
                ease: [0.4, 0, 0.2, 1],
                repeatDelay: 0.1,
              }}
            />
            {/* Outer glow */}
            <motion.div 
              className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-transparent via-[#0066FF]/10 to-transparent blur-[2px]"
              animate={{
                opacity: [0.2, 0.15, 0],
              }}
              transition={{
                duration: 6,
                times: [0, 0.5, 1],
                repeat: Infinity,
                delay: ring.delay,
                ease: [0.4, 0, 0.2, 1],
                repeatDelay: 0.1,
              }}
            />
          </motion.div>
        ))}
        
        {/* Center point */}
        <motion.div
          className="absolute w-5 h-5 bg-[#00FF9F] rounded-full"
          style={{
            boxShadow: '0 0 30px rgba(0, 255, 159, 0.8), 0 0 60px rgba(0, 255, 159, 0.6), 0 0 90px rgba(0, 102, 255, 0.4)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
            boxShadow: [
              '0 0 30px rgba(0, 255, 159, 0.8), 0 0 60px rgba(0, 255, 159, 0.6), 0 0 90px rgba(0, 102, 255, 0.4)',
              '0 0 40px rgba(0, 255, 159, 0.9), 0 0 80px rgba(0, 255, 159, 0.7), 0 0 120px rgba(0, 102, 255, 0.5)',
              '0 0 30px rgba(0, 255, 159, 0.8), 0 0 60px rgba(0, 255, 159, 0.6), 0 0 90px rgba(0, 102, 255, 0.4)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,159,0.15)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.15)_1px,transparent_1px)] bg-[length:20px_20px] rotate-45" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[1px]" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <ChatBotContainer />
      </div>
    </div>
  );
} 