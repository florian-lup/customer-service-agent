import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef } from 'react';
import { scrollbarStyles, proseStyles } from '../utils/styles';
import { markdownComponents } from '../utils/markdown';

interface ResponseWindowProps {
  response: string;
  onClose: () => void;
}

export default function ResponseWindow({ response, onClose }: ResponseWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [response]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
      className="w-full h-full md:w-[460px] md:h-[640px] 
                 flex flex-col bg-white
                 md:rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
    >
      <div 
        ref={scrollRef}
        className={`grow px-3 py-4 sm:p-5 overflow-y-auto overscroll-contain ${scrollbarStyles.response}`}
      >
        <div className={`max-w-prose mx-auto ${proseStyles}`}>
          <ReactMarkdown components={markdownComponents}>
            {response}
          </ReactMarkdown>
        </div>
      </div>

      <div className="shrink-0 px-4 py-3 sm:py-4 border-t border-gray-100 flex justify-between items-center bg-gradient-to-r from-gray-50/80 via-white/40 to-gray-50/80">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400">AI Response</span>
        </div>
        <button
          onClick={onClose}
          className="px-3 py-1.5 -my-1.5 -mr-1 sm:-mr-3 text-sm text-gray-400 hover:text-gray-600 active:text-gray-800 transition-colors duration-200"
          aria-label="Close response window"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
} 