import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatWindow from './components/ChatWindow';
import ResponseWindow from './ResponseWindow';
import ChatHeader from './components/ChatHeader';
import FAQSection from './components/FAQSection';
import MessageInput from './components/MessageInput';

interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatContainer({ isOpen, onClose }: ChatContainerProps) {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputLoading, setIsInputLoading] = useState(false);

  const sendToAPI = async (text: string, isFAQ: boolean = false) => {
    const setLoadingState = isFAQ ? setIsLoading : setIsInputLoading;
    setLoadingState(true);
    console.log('🚀 Sending request to API:', { question: text });
    
    try {
      const res = await fetch('/api/serviceAgent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text })
      });

      console.log('📥 API Response Status:', res.status);
      
      if (!res.ok) {
        let errorMessage = 'An error occurred while processing your request';
        
        try {
          const errorData = await res.json();
          console.error('❌ API Error:', errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          console.error('❌ Failed to parse error response:', parseError);
          if (res.status === 504) {
            errorMessage = 'The request took too long to process. Please try again or ask a shorter question.';
          } else if (res.status === 502 || res.status === 503) {
            errorMessage = 'The service is temporarily unavailable. Please try again in a moment.';
          }
        }
        
        throw new Error(errorMessage);
      }

      const data = await res.json();
      console.log('✅ API Response:', data);
      
      if (!data.response) {
        console.error('❌ Invalid Response Format:', data);
        throw new Error('Invalid response format from server');
      }

      setResponse(data.response);
      setShowResponse(true);
    } catch (error) {
      console.error('❌ Request Failed:', error);
      let errorMessage = 'Sorry, there was an error processing your request. Please try again.';
      
      if (error instanceof Error && error.message) {
        errorMessage = error.message;
      }
      
      setResponse(errorMessage);
      setShowResponse(true);
    } finally {
      setLoadingState(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendToAPI(message);
  };

  const handleFAQClick = (question: string) => {
    sendToAPI(question, true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
            
          {/* Content Container */}
          <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-screen-lg mx-auto px-4 md:px-6">
            {/* Chat Interface */}
            <motion.div
              className="fixed md:relative inset-0 md:inset-auto z-40 md:z-auto
                       w-full md:w-[400px] h-screen md:h-[640px] flex flex-col 
                       bg-white rounded-none md:rounded-2xl shadow-xl overflow-hidden shrink-0"
              animate={{ 
                opacity: showResponse && window.innerWidth < 768 ? 0 : 1
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="h-full flex flex-col">
                <div className="relative w-full h-full flex flex-col overflow-hidden bg-white sm:rounded-2xl shadow-xl">
                  <ChatHeader onClose={onClose} />
                  <ChatWindow />
                  <div className="border-t border-gray-100 bg-white/80 backdrop-blur-sm">
                    <FAQSection 
                      onQuestionClick={handleFAQClick}
                      isLoading={isLoading}
                    />
                  </div>
                  <div className="border-t border-gray-100 bg-white">
                    <MessageInput
                      message={message}
                      onMessageChange={setMessage}
                      onSubmit={handleSubmit}
                      isLoading={isInputLoading}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Response Window */}
            {showResponse && (
              <motion.div
                initial={{ opacity: 0, x: window.innerWidth >= 768 ? 40 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed md:relative inset-0 md:inset-auto z-50 md:z-auto"
              >
                <ResponseWindow
                  response={response}
                  onClose={() => setShowResponse(false)}
                />
              </motion.div>
            )}
          </div>
        </>
      )}
    </div>
  );
} 