import { motion } from 'framer-motion';

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
          <motion.button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="w-full text-left text-sm p-2.5 rounded-lg bg-[#00FF9F]/5 hover:bg-[#00FF9F]/10 
                     border border-[#00FF9F]/10 hover:border-[#00FF9F]/30 transition-all duration-300
                     text-[#00FF9F]/90 backdrop-blur-sm relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative flex items-center space-x-2">
              <span className="text-[#00FF9F]/50 text-xs">{">"}</span>
              <span className="flex-1">{question}</span>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 h-px bg-[#00FF9F]/30"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ 
                willChange: 'transform',
                transformOrigin: 'left'
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
} 