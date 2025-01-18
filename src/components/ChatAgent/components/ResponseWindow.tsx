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
        <div className="max-w-prose mx-auto prose prose-sm sm:prose-base prose-green !text-gray-900
                    prose-h1:text-lg prose-h1:font-semibold prose-h1:mb-3
                    prose-h2:text-base prose-h2:font-semibold prose-h2:mb-3 prose-h2:mt-6
                    prose-h3:text-base prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                    prose-p:!text-gray-900 prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:my-2
                    prose-ol:my-2 prose-ol:list-decimal
                    prose-li:!text-gray-900 prose-li:my-0.5
                    prose-strong:font-semibold prose-strong:!text-gray-900
                    [&>ul]:pl-5 [&>ol]:pl-5
                    [&>*]:mb-4
                    [&>ul>li]:list-disc [&>ul>li]::marker:text-gray-900
                    [&_ul]:my-0.5 [&_ul]:pl-5
                    [&_ul>li]:list-disc [&_ul>li]::marker:text-gray-900
                    [&_ol]:my-0.5 [&_ol]:pl-5
                    [&_li]:pl-0 [&_li]:ml-4
                    [&_ol>li]:list-decimal [&_ol>li]::marker:text-gray-900">
          <ReactMarkdown
            components={{
              a: ({ ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" className="!text-green-600 hover:!text-green-700 underline" />
              ),
              p: ({ ...props }) => (
                <p {...props} className="!text-gray-900" />
              )
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