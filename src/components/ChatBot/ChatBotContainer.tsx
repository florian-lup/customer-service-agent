import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const FAQ_QUESTIONS = [
  "How do I reset my password?",
  "What are your business hours?",
  "How can I track my order?"
];

// Primary grid lines
const primaryGridLines = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  delay: i * 0.1,
}));

// Secondary grid lines for layered effect
const secondaryGridLines = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  delay: i * 0.05,
}));

export default function ChatBotContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here
    setMessage('');
  };

  const handleFAQClick = (question: string) => {
    setMessage(question);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Chat Button */}
      <ChatButton 
        onClick={() => setIsOpen(true)}
      />

      {/* Chat Window with Background Effects */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background overlay with enhanced grid effect */}
            <motion.div 
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid container with perspective effect */}
              <div className="absolute inset-0 overflow-hidden perspective-1000">
                {/* Primary vertical grid lines */}
                {primaryGridLines.map((line) => (
                  <motion.div
                    key={line.id}
                    className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#00FF9F]/20 to-transparent"
                    style={{ 
                      left: `${(line.id + 1) * 6.66}%`,
                      willChange: 'transform, opacity',
                      transformStyle: 'preserve-3d',
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                      scaleY: 1, 
                      opacity: 0.6,
                    }}
                    exit={{
                      scaleY: 0,
                      opacity: 0,
                      transition: { duration: 0.2, ease: "easeIn" }
                    }}
                    transition={{
                      delay: line.delay,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Secondary vertical grid lines - thinner and more subtle */}
                {secondaryGridLines.map((line) => (
                  <motion.div
                    key={`secondary-${line.id}`}
                    className="absolute top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-[#0066FF]/10 to-transparent"
                    style={{ 
                      left: `${(line.id + 1) * 3.33}%`,
                      willChange: 'transform, opacity',
                      transformStyle: 'preserve-3d',
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                      scaleY: 1, 
                      opacity: 0.3,
                    }}
                    exit={{
                      scaleY: 0,
                      opacity: 0,
                      transition: { duration: 0.2, ease: "easeIn" }
                    }}
                    transition={{
                      delay: line.delay,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Primary horizontal grid lines */}
                {primaryGridLines.map((line) => (
                  <motion.div
                    key={`h-${line.id}`}
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF9F]/20 to-transparent"
                    style={{ 
                      top: `${(line.id + 1) * 6.66}%`,
                      willChange: 'transform, opacity',
                      transformStyle: 'preserve-3d',
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                      scaleX: 1, 
                      opacity: 0.6,
                    }}
                    exit={{
                      scaleX: 0,
                      opacity: 0,
                      transition: { duration: 0.2, ease: "easeIn" }
                    }}
                    transition={{
                      delay: line.delay + 0.1,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Secondary horizontal grid lines - thinner and more subtle */}
                {secondaryGridLines.map((line) => (
                  <motion.div
                    key={`h-secondary-${line.id}`}
                    className="absolute left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#0066FF]/10 to-transparent"
                    style={{ 
                      top: `${(line.id + 1) * 3.33}%`,
                      willChange: 'transform, opacity',
                      transformStyle: 'preserve-3d',
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                      scaleX: 1, 
                      opacity: 0.3,
                    }}
                    exit={{
                      scaleX: 0,
                      opacity: 0,
                      transition: { duration: 0.2, ease: "easeIn" }
                    }}
                    transition={{
                      delay: line.delay,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Radial gradient overlay for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.6)_70%)]" />
              </div>
            </motion.div>

            {/* Chat Window Container */}
            <div className="relative w-full h-full p-4">
              <ChatWindow
                key="window"
                onClose={() => setIsOpen(false)}
                message={message}
                onMessageChange={setMessage}
                onMessageSubmit={handleSubmit}
                faqQuestions={FAQ_QUESTIONS}
                onFAQClick={handleFAQClick}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 