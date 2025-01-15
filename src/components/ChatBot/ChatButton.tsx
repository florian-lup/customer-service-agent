import { motion } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const buttonVariants = {
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
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      layoutId="chatContainer"
      className={`${
        isOpen ? 'hidden' : 'flex'
      } items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out`}
    >
      <motion.div
        initial={{ rotate: -45 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      >
        <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
      </motion.div>
    </motion.button>
  );
} 