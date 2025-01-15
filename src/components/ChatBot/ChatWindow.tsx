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
    scale: 0.3,
    y: 100
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    y: 100,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
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
    <motion.div
      variants={windowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative w-96 max-h-[90vh] h-[500px] bg-black/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#00FF9F]/30 backdrop-blur-md"
      layoutId="chatContainer"
      style={{
        boxShadow: '0 0 20px rgba(0, 255, 159, 0.2), inset 0 0 20px rgba(0, 255, 159, 0.1)',
      }}
    >
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF9F]/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#00FF9F]/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#00FF9F]/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#00FF9F]/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#00FF9F]/50 rounded-br-2xl" />

      <ChatHeader onClose={onClose} />
      
      <motion.div 
        className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#00FF9F]/20 hover:scrollbar-thumb-[#00FF9F]/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {/* Messages will be displayed here */}
        <div className="space-y-4">
          {/* Example message styling */}
          <motion.div 
            className="bg-[#00FF9F]/5 p-3 rounded-lg border border-[#00FF9F]/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-[#00FF9F] text-sm">
              Welcome! How can I assist you today?
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="border-t border-[#00FF9F]/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <FAQSection 
          questions={faqQuestions}
          onQuestionClick={onFAQClick}
        />
      </motion.div>

      <motion.div
        className="border-t border-[#00FF9F]/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <MessageInput
          message={message}
          onChange={onMessageChange}
          onSubmit={onMessageSubmit}
        />
      </motion.div>
    </motion.div>
  );
} 