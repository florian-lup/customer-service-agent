import Image from 'next/image';

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2.5 px-6 py-3 rounded-xl
                bg-gradient-to-r from-green-500 to-blue-500 text-white overflow-hidden relative
                shadow-[0_1px_2px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_16px_rgba(37,99,235,0.1)]
                transition-all duration-300"
      aria-label="Open chat support"
    >
      {/* Background hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 
                    group-hover:opacity-100
                    transition-opacity duration-300 ease-out" 
      />
      
      {/* Content */}
      <div className="relative flex items-center gap-2.5">
        {/* Icon */}
        <div className="relative w-5 h-5">
          <Image
            src="/chat-bot.png"
            alt="Chat Bot"
            fill
            className="object-contain transition-transform duration-300 group-hover:rotate-12"
            sizes="20px"
          />
        </div>
        
        {/* Text */}
        <span className="font-medium tracking-wide">Chat with AI</span>

        {/* Arrow icon */}
        <svg 
          className="w-4 h-4 text-white/70 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
} 