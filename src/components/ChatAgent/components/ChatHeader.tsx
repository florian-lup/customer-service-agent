import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="relative bg-white border-b border-gray-100">
      {/* Header content */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          {/* Status indicator */}
          <div className="w-2 h-2 rounded-full bg-green-500" />
          
          {/* Chat bot icon */}
          <div className="relative w-8 h-8">
            <Image
              src="/chat-bot.svg"
              alt="Chat Bot"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              quality={100}
            />
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-gray-400
                   hover:bg-gray-50 hover:text-gray-500
                   transition-all duration-200"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 