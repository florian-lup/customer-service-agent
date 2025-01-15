import { XMarkIcon } from '@heroicons/react/24/solid';

interface ChatHeaderProps {
  onClose: () => void;
  title?: string;
}

export default function ChatHeader({ onClose, title = "AI Support Interface" }: ChatHeaderProps) {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black/90 rounded-t-2xl" />

      {/* Header content */}
      <div className="relative flex items-center justify-between p-4 rounded-t-2xl border-b border-[#00FF9F]/20">
        <div className="flex items-center space-x-3">
          {/* Status indicator using CSS animation */}
          <div
            className="w-2 h-2 rounded-full bg-[#00FF9F] animate-pulse"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Title with glowing text effect */}
          <h2 
            className="text-lg font-medium text-[#00FF9F] tracking-wide"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 159, 0.3)',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Close button with CSS transitions */}
        <button
          onClick={onClose}
          className="p-2 rounded-full border border-[#00FF9F]/20 bg-black/50 text-[#00FF9F]
                   hover:bg-[#00FF9F]/10 hover:scale-110 active:scale-95
                   transition-all duration-200 ease-out"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Decorative tech lines */}
        <div className="absolute bottom-0 left-0 w-1/4 h-px bg-gradient-to-r from-[#00FF9F]/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/4 h-px bg-gradient-to-l from-[#00FF9F]/50 to-transparent" />
      </div>
    </div>
  );
} 