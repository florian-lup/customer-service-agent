import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface MessageInputProps {
  message: string;
  onChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function MessageInput({ message, onChange, onSubmit }: MessageInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-4 bg-black/50">
      <div className="flex gap-3">
        {/* Input field */}
        <div className="relative flex-1">
          <div className="absolute inset-0 rounded-lg border border-[#00FF9F]/20" />
          <input
            type="text"
            value={message}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter command..."
            className="w-full p-2.5 bg-black/50 text-[#00FF9F] placeholder-[#00FF9F]/50 
                     border border-[#00FF9F]/20 rounded-lg focus:outline-none focus:border-[#00FF9F]/50
                     backdrop-blur-sm relative z-10 transition-colors duration-300"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 159, 0.3)',
            }}
          />
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#00FF9F]/50" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#00FF9F]/50" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#00FF9F]/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#00FF9F]/50" />
        </div>

        {/* Send button */}
        <motion.button
          type="submit"
          className="px-4 py-2.5 bg-[#00FF9F]/10 border border-[#00FF9F]/30 rounded-lg
                   hover:bg-[#00FF9F]/20 hover:border-[#00FF9F]/50 transition-colors relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ willChange: 'transform' }}
        >
          <motion.div
            className="text-[#00FF9F]"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
            style={{ willChange: 'transform' }}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </form>
  );
} 