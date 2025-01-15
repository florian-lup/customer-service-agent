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
      className="w-96 max-h-[90vh] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      layoutId="chatContainer"
    >
      <ChatHeader onClose={onClose} />
      
      <motion.div 
        className="flex-1 p-4 overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {/* Messages will be displayed here */}
      </motion.div>

      <motion.div
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