interface FAQSectionProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export default function FAQSection({ questions, onQuestionClick }: FAQSectionProps) {
  return (
    <div className="p-4 bg-black/50 space-y-3">
      <p 
        className="text-sm font-medium text-[#00FF9F] tracking-wider uppercase"
        style={{
          textShadow: '0 0 10px rgba(0, 255, 159, 0.3)',
        }}
      >
        Quick Access Interface:
      </p>

      <div className="space-y-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="w-full text-left text-sm p-2.5 rounded-lg bg-[#00FF9F]/5 border border-[#00FF9F]/10 text-[#00FF9F]/90 backdrop-blur-sm hover:bg-[#00FF9F]/10 hover:border-[#00FF9F]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out relative group"
            style={{
              animation: `fadeIn 300ms ease-out forwards ${index * 100}ms`
            }}
          >
            <div className="relative flex items-center space-x-2">
              <span className="text-[#00FF9F]/50 text-xs">{">"}</span>
              <span className="flex-1">{question}</span>
            </div>

            <div className="absolute bottom-0 left-0 h-px bg-[#00FF9F]/30 w-0 group-hover:w-full transition-all duration-300 ease-out" />
          </button>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
} 