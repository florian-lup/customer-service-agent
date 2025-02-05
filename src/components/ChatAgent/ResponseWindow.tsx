import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';
import { ResponseWindowProps } from '../../types/chat';
import { markdownComponents, proseStyles } from './utils/markdown';

export default function ResponseWindow({ response, onClose }: ResponseWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-full flex flex-col bg-white rounded-none md:rounded-2xl shadow-xl overflow-hidden"
    >
      <ScrollArea.Root className="flex-1 h-[calc(100%-4rem)]">
        <ScrollArea.Viewport className="w-full h-full p-4">
          <div className={`max-w-prose mx-auto ${proseStyles}`}>
            <ReactMarkdown components={markdownComponents}>
              {response}
            </ReactMarkdown>
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-150 ease-out hover:bg-gray-100 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-gray-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-gray-100" />
      </ScrollArea.Root>

      <Separator.Root className="h-px bg-gray-100" />

      <div className="shrink-0 px-4 py-3 sm:py-4 flex justify-between items-center bg-gradient-to-r from-gray-50/80 via-white/40 to-gray-50/80">
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