import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatWindow from './ChatWindow';
import ResponseWindow from './ResponseWindow';
import { FAQ_QUESTIONS } from '../ai-components/FAQList';

interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatContainer({ isOpen, onClose }: ChatContainerProps) {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const res = await fetch('/api/serviceAgent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data.response);
      setShowResponse(true);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFAQClick = (question: string) => {
    setMessage(question);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
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

            {/* Windows Container */}
            <div className="relative z-50 flex items-center">
              {/* Chat Window Container */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: showResponse ? "-50%" : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <ChatWindow
                  onClose={onClose}
                  message={message}
                  onMessageChange={setMessage}
                  onMessageSubmit={handleSubmit}
                  faqQuestions={[...FAQ_QUESTIONS]}
                  onFAQClick={handleFAQClick}
                />
              </motion.div>

              {/* Response Window */}
              <AnimatePresence>
                {showResponse && (
                  <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="ml-4"
                  >
                    <ResponseWindow
                      response={response}
                      isOpen={showResponse}
                      onClose={() => setShowResponse(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 