import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const FAQ_QUESTIONS = [
  "How do I reset my password?",
  "What are your business hours?",
  "How can I track my order?"
];

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
      <div className={`${isOpen ? 'w-full h-full p-4' : ''} flex items-center justify-center`}>
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <ChatButton 
              key="button"
              isOpen={isOpen}
              onClick={() => setIsOpen(true)}
            />
          ) : (
            <ChatWindow
              key="window"
              onClose={() => setIsOpen(false)}
              message={message}
              onMessageChange={setMessage}
              onMessageSubmit={handleSubmit}
              faqQuestions={FAQ_QUESTIONS}
              onFAQClick={handleFAQClick}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 