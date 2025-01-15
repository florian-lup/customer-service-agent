interface FAQSectionProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export default function FAQSection({ questions, onQuestionClick }: FAQSectionProps) {
  return (
    <div className="p-4 bg-gray-50 space-y-2">
      <p className="text-sm font-medium text-gray-600">Frequently Asked Questions:</p>
      <div className="space-y-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="w-full text-left text-sm p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
} 