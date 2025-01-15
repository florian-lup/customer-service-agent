import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const FAQ_QUESTIONS = [
  "How do I reset my password?",
  "What are your business hours?",
  "How can I track my order?"
];

// Grid lines for background effect
const gridLines = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  delay: i * 0.1,
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
            {/* Background overlay with grid effect */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Vertical grid lines */}
              <div className="absolute inset-0 overflow-hidden">
                {gridLines.map((line) => (
                  <motion.div
                    key={line.id}
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00FF9F]/20 to-transparent"
                    style={{ left: `${(line.id + 1) * 5}%` }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                      scaleY: 1, 
                      opacity: 0.5,
                      transition: {
                        delay: line.delay,
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      scaleY: 0,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeIn"
                      }
                    }}
                  />
                ))}
                {/* Horizontal grid lines */}
                {gridLines.map((line) => (
                  <motion.div
                    key={`h-${line.id}`}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent"
                    style={{ top: `${(line.id + 1) * 5}%` }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                      scaleX: 1, 
                      opacity: 0.5,
                      transition: {
                        delay: line.delay + 0.2,
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      scaleX: 0,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeIn"
                      }
                    }}
                  />
                ))}
              </div>

              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_70%)]" />
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