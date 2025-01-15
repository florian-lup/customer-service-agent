import { XMarkIcon } from '@heroicons/react/24/solid';

interface ChatHeaderProps {
  onClose: () => void;
  title?: string;
}

export default function ChatHeader({ onClose, title = "Customer Support" }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-t-2xl">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <button
        onClick={onClose}
        className="p-1 rounded-full hover:bg-white/10 transition-colors"
      >
        <XMarkIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
} 