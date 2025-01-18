import { motion } from 'framer-motion';

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
      <div className="shrink-0 p-4 sm:p-5 border-b border-gray-100 flex justify-between items-center 
                  bg-gradient-to-r from-green-50/50 to-white">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <h3 className="text-base font-medium text-gray-900">Response</h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 -mr-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-500 
                   active:bg-gray-100 transition-all duration-200"
          aria-label="Close response window"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="grow p-4 sm:p-5 overflow-y-auto 
                  scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-200 
                  hover:scrollbar-thumb-green-200 
                  [&::-webkit-scrollbar]:w-1.5
                  [&::-webkit-scrollbar-track]:bg-transparent
                  [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className="max-w-prose mx-auto">
          <p className="text-gray-700 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
            {response}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 