import { XMarkIcon } from '@heroicons/react/24/solid';

interface ResponseWindowProps {
  response: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ResponseWindow({ response, isOpen, onClose }: ResponseWindowProps) {
  if (!isOpen) return null;

  return (
    <div className="w-[600px] h-[600px] bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Detailed Response</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-500 transition-all duration-200"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          {response}
        </div>
      </div>
    </div>
  );
} 