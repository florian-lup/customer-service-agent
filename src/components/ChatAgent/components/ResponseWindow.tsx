import { motion } from 'framer-motion';

interface ResponseWindowProps {
  response: string;
  onClose: () => void;
}

export default function ResponseWindow({ response, onClose }: ResponseWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl w-[90vw] max-w-md max-h-[85vh] flex flex-col relative">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Response</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
        </div>
      </div>
    </motion.div>
  );
} 