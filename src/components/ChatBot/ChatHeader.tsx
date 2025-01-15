import { XMarkIcon } from '@heroicons/react/24/solid';

interface ChatHeaderProps {
  onClose: () => void;
  title?: string;
}

export default function ChatHeader({ onClose, title = "Chat Support" }: ChatHeaderProps) {
  return (
    <div className="relative bg-white border-b border-gray-100">
      {/* Header content */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          {/* Status indicator */}
          <div className="w-2 h-2 rounded-full bg-green-500" />
          
          {/* Title */}
          <h2 className="text-base font-medium text-gray-900">
            {title}
          </h2>
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