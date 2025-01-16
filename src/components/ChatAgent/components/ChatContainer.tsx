import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatWindow from './ChatWindow';
import { FAQ_QUESTIONS } from '../ai-components/FAQList';

interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatContainer({ isOpen, onClose }: ChatContainerProps) {
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
                faqQuestions={[...FAQ_QUESTIONS]} // Convert readonly array to mutable array
                onFAQClick={handleFAQClick}
              />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 