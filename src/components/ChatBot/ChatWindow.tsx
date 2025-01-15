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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-96 max-h-[90vh] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col"
    >
      <ChatHeader onClose={onClose} />
      
      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Messages will be displayed here */}
      </div>

      <FAQSection 
        questions={faqQuestions}
        onQuestionClick={onFAQClick}
      />

      <MessageInput
        message={message}
        onChange={onMessageChange}
        onSubmit={onMessageSubmit}
      />
    </motion.div>
  );
} 