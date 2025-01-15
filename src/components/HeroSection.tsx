'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ChatButton from './ChatBot/ChatButton';

const ChatBotContainer = dynamic(() => import('./ChatBot/ChatBotContainer'), { ssr: false });

export default function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    { 
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Replies', 
      description: 'Get answers in seconds'
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Availability', 
      description: 'Always here when you need help'
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Smart Solutions', 
      description: 'Accurate and relevant responses'
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient circles */}
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center container mx-auto px-4">
        {/* Top label */}
        <div className="w-full flex justify-end pt-8">
          <div className="px-4 py-1.5 bg-blue-50 rounded-full">
            <span className="text-blue-600 text-sm font-medium">AI-Powered Support</span>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-16">
          {/* Description and button */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <p className="text-2xl text-gray-600 leading-relaxed mb-12">
              Get <span className="font-semibold text-gray-800">instant</span> and <span className="font-semibold text-gray-800">accurate</span> answers 
              to any customer questions, <span className="font-medium text-green-600">available 24/7</span>.
            </p>
            <div className="flex justify-center">
              <ChatButton onClick={() => setIsChatOpen(true)} />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative">
            {/* Decorative line */}
            <div className="absolute -top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl 
                         shadow-sm hover:shadow-md
                         transition-all duration-300 
                         border border-gray-100
                         hover:border-green-100 hover:-translate-y-1"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-green-50 inline-block transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Container */}
        {isChatOpen && (
          <div className="fixed bottom-8 right-8 z-50">
            <ChatBotContainer 
              isOpen={isChatOpen}
              onClose={() => setIsChatOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
} 