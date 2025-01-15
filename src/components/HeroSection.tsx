'use client';

import dynamic from 'next/dynamic';

const ChatBotContainer = dynamic(() => import('./ChatBot/ChatBotContainer'), { ssr: false });

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <ChatBotContainer />
      </div>
    </div>
  );
} 