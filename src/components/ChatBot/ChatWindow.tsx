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
      {/* Chat Window - Optimized animations */}
      <motion.div
        variants={windowVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-96 max-h-[90vh] h-[500px] bg-black/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#00FF9F]/30 z-10"
        style={{
          willChange: 'transform, opacity',
          boxShadow: '0 0 20px rgba(0, 255, 159, 0.15), inset 0 0 20px rgba(0, 255, 159, 0.05)',
        }}
      >
        {/* Static border effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-r from-transparent via-[#00FF9F]/5 to-transparent" />

        {/* Corner accents - Static */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#00FF9F]/30 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#00FF9F]/30 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#00FF9F]/30 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#00FF9F]/30 rounded-br-2xl" />

        <ChatHeader onClose={onClose} />
        
        <motion.div 
          className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#00FF9F]/20 hover:scrollbar-thumb-[#00FF9F]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div 
              className="bg-[#00FF9F]/5 p-3 rounded-lg border border-[#00FF9F]/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-[#00FF9F] text-sm">
                Welcome! How can I assist you today?
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="border-t border-[#00FF9F]/10">
          <FAQSection 
            questions={faqQuestions}
            onQuestionClick={onFAQClick}
          />
        </div>

        <div className="border-t border-[#00FF9F]/10">
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