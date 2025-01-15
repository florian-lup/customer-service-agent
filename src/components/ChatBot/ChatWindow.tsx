import { motion } from 'framer-motion';
import ChatHeader from './ChatHeader';
import FAQSection from './FAQSection';
import MessageInput from './MessageInput';

interface ChatWindowProps {
  onClose: () => void;
  message: string;
  onMessageChange: (message: string) => void;
  onMessageSubmit: (e: React.FormEvent) => void;
  faqQuestions: string[];
  onFAQClick: (question: string) => void;
}

const windowVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export default function ChatWindow({
  onClose,
  message,
  onMessageChange,
  onMessageSubmit,
  faqQuestions,
  onFAQClick,
}: ChatWindowProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Chat Window */}
      <motion.div
        variants={windowVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-[400px] max-h-[600px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
      >
        <ChatHeader onClose={onClose} />
        
        <motion.div 
          className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div 
              className="bg-green-50 p-3 rounded-xl border border-green-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-600 text-sm">
                Hello! How can I help you today?
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="border-t border-gray-100">
          <FAQSection 
            questions={faqQuestions}
            onQuestionClick={onFAQClick}
          />
        </div>

        <div className="border-t border-gray-100">
          <MessageInput
            message={message}
            onChange={onMessageChange}
            onSubmit={onMessageSubmit}
          />
        </div>
      </motion.div>
    </div>
  );
} 