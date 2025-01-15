import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatWindow from './ChatWindow';

const FAQ_QUESTIONS = [
  "How do I reset my password?",
  "What are your business hours?",
  "How can I track my order?",
  "What payment methods do you accept?",
  "How can I request a refund?"
];

interface ChatBotContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBotContainer({ isOpen, onClose }: ChatBotContainerProps) {
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
      {/* Chat Window with Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Chat Window Container */}
            <div className="relative z-50">
              <ChatWindow
                onClose={onClose}
                message={message}
                onMessageChange={setMessage}
                onMessageSubmit={handleSubmit}
                faqQuestions={FAQ_QUESTIONS}
                onFAQClick={handleFAQClick}
              />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 