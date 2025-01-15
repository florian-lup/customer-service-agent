import { motion } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`${
        isOpen ? 'hidden' : 'flex'
      } items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
    </motion.button>
  );
} 