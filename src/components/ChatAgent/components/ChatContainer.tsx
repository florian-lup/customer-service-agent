import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatWindow from './ChatWindow';
import ResponseWindow from './ResponseWindow';

interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatContainer({ isOpen, onClose }: ChatContainerProps) {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendToAPI = async (text: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/serviceAgent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'An error occurred while processing your request');
      }

      const data = await res.json();
      if (!data.response) {
        throw new Error('Invalid response format from server');
      }

      setResponse(data.response);
      setShowResponse(true);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setResponse(error instanceof Error ? error.message : 'Sorry, there was an error processing your request. Please try again.');
      setShowResponse(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendToAPI(message);
  };

  const handleFAQClick = (question: string) => {
    setMessage(question);
    sendToAPI(question);
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
              onClick={onClose}
            />
            
            {/* Chat Interface */}
            <ChatWindow
              onClose={onClose}
              message={message}
              onMessageChange={setMessage}
              onMessageSubmit={handleSubmit}
              onFAQClick={handleFAQClick}
              isLoading={isLoading}
            />

            {/* Response Window */}
            {showResponse && (
              <ResponseWindow
                response={response}
                onClose={() => setShowResponse(false)}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 