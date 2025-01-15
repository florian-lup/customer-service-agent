interface FAQSectionProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export default function FAQSection({ questions, onQuestionClick }: FAQSectionProps) {
  return (
    <div className="p-4 bg-white">
      <p className="text-sm font-medium text-gray-500 mb-3 sticky top-0 bg-white">
        Frequently Asked Questions
      </p>

      <div className="space-y-2 max-h-[180px] overflow-y-auto pr-2
                    scrollbar-thin scrollbar-track-transparent
                    scrollbar-thumb-gray-200 hover:scrollbar-thumb-green-200
                    [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-200
                    hover:[&::-webkit-scrollbar-thumb]:bg-green-200
                    [&::-webkit-scrollbar-thumb]:border
                    [&::-webkit-scrollbar-thumb]:border-white">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="w-full text-left text-sm p-2.5 rounded-xl 
                     bg-gray-50 text-gray-600
                     hover:bg-green-50 hover:text-green-600
                     border border-gray-100
                     hover:border-green-100
                     transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <svg 
                className="w-4 h-4 text-gray-400 group-hover:text-green-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span>{question}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 