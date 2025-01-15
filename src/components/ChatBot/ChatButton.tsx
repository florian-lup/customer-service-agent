interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2.5 px-6 py-3 rounded-xl
                bg-green-50 text-green-600 overflow-hidden relative
                border border-green-100
                shadow-[0_1px_2px_rgba(0,0,0,0.05)]
                hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                transition-all duration-300"
    >
      {/* Background hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-50 
                    translate-x-[-100%] group-hover:translate-x-0 
                    transition-transform duration-300 ease-out" 
      />
      
      {/* Content */}
      <div className="relative flex items-center gap-2.5">
        {/* Icon */}
        <svg className="w-5 h-5 text-green-500 transition-transform duration-300 group-hover:rotate-12" 
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        
        {/* Text */}
        <span className="font-medium">Try Now</span>
      </div>
    </button>
  );
} 