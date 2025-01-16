import { motion } from 'framer-motion';
import ChatHeader from './ChatHeader';
import FAQSection from './FAQSection';
import MessageInput from './MessageInput';

interface ChatWindowProps {
  onClose: () => void;
  message: string;
  onMessageChange: (message: string) => void;
  onMessageSubmit: (e: React.FormEvent) => void;
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
        className="relative w-full h-full sm:w-[400px] sm:h-[600px] sm:max-h-[90vh] 
                 bg-white sm:rounded-2xl shadow-xl flex flex-col overflow-hidden"
      >
        <ChatHeader onClose={onClose} />
        
        <motion.div 
          className="flex-1 p-3 sm:p-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div 
              className="bg-green-50 p-4 rounded-xl border border-green-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-medium text-gray-800 mb-2">Welcome to Customer Support! 👋</h3>
              <p className="text-sm text-gray-600 mb-3">
                I&apos;m your virtual assistant, ready to help you with:
              </p>
              <ul className="text-sm text-gray-600 space-y-2 ml-4 list-disc">
                <li>Product information and features</li>
                <li>Technical support and troubleshooting</li>
                <li>Account-related questions</li>
                <li>Billing and payment inquiries</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                Feel free to ask any questions or check out the frequently asked questions below!
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="border-t border-gray-100">
          <FAQSection 
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