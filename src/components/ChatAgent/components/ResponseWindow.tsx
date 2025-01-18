import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface ResponseWindowProps {
  response: string;
  onClose: () => void;
}

export default function ResponseWindow({ response, onClose }: ResponseWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
      className="w-[min(90vw,420px)] h-[min(85vh,640px)] md:h-[min(85vh,640px)] flex flex-col bg-white rounded-2xl 
                 shadow-xl border border-gray-100 overflow-hidden shrink-0"
    >
      <div className="grow p-4 sm:p-5 overflow-y-auto 
                  scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-200 
                  hover:scrollbar-thumb-green-200 
                  [&::-webkit-scrollbar]:w-1.5
                  [&::-webkit-scrollbar-track]:bg-transparent
                  [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className="max-w-prose mx-auto prose prose-sm sm:prose-base prose-green">
          <ReactMarkdown
            components={{
              a: ({ ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline" />
              ),
            }}
          >
            {response}
          </ReactMarkdown>
        </div>
      </div>

      <div className="shrink-0 px-4 py-3 border-t border-gray-100 flex justify-between items-center bg-gradient-to-r from-gray-50/80 via-white/40 to-gray-50/80">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400">AI Response</span>
        </div>
        <button
          onClick={onClose}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Close response window"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
} 