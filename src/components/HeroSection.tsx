'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ChatButton from './ChatAgent/components/ChatButton';

const ChatContainer = dynamic(() => import('./ChatAgent/components/ChatContainer'), { ssr: false });

export default function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    { 
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Replies', 
      description: 'Get answers in seconds',
      delay: 0.1,
      gradient: 'from-green-50 to-blue-50'
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Availability', 
      description: 'Always here when you need help',
      delay: 0.2,
      gradient: 'from-blue-50 to-purple-50'
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Smart Solutions', 
      description: 'Accurate and relevant responses',
      delay: 0.3,
      gradient: 'from-purple-50 to-green-50'
    },
  ];

  return (
    <section className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white overflow-hidden" aria-label="Hero Section">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient circles */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -left-24 -top-24 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-to-br from-green-100/50 to-purple-100/50 rounded-full blur-3xl" 
        />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center container mx-auto px-4 sm:px-6">
        {/* Top label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex justify-end pt-4 sm:pt-6 md:pt-8"
        >
          <div className="px-3 sm:px-4 py-1.5 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-100/20 shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 text-xs sm:text-sm font-medium">
              AI-Powered Support
            </span>
          </div>
        </motion.div>

        {/* Content section */}
        <div className="flex-1 flex flex-col items-center justify-center w-full mt-12 sm:mt-0">
          {/* Description and button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-center w-full max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-24 px-2"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-12"
            >
              Get <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">instant</span> and{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">accurate</span> answers 
              to any customer questions,{' '}
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                available 24/7
              </span>.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="flex justify-center"
            >
              <ChatButton onClick={() => setIsChatOpen(true)} />
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl mx-auto px-2 sm:px-4 pb-8 sm:pb-12 relative">
            {/* Decorative line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="absolute -top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left" 
            />
            
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: feature.delay }}
                className={`group bg-gradient-to-br ${feature.gradient} p-5 sm:p-6 md:p-8 rounded-2xl 
                         shadow-sm hover:shadow-lg
                         transition-all duration-300 
                         border border-white/50 backdrop-blur-sm
                         hover:-translate-y-1`}
                role="article"
                aria-label={`${feature.title} feature`}
              >
                <div className="mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-white/80 group-hover:bg-white inline-block transition-colors duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat Container */}
        {isChatOpen && (
          <div className="fixed inset-0 sm:inset-auto sm:bottom-8 sm:right-8 z-50">
            <ChatContainer 
              isOpen={isChatOpen}
              onClose={() => setIsChatOpen(false)}
            />
          </div>
        )}
      </div>
    </section>
  );
} 