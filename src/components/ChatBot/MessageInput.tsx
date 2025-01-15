import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface MessageInputProps {
  message: string;
  onChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function MessageInput({ message, onChange, onSubmit }: MessageInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white">
      <div className="flex gap-2">
        {/* Input field */}
        <input
          type="text"
          value={message}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 bg-gray-50 text-gray-900 placeholder-gray-400 
                   rounded-xl border border-gray-200 
                   focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-300
                   transition-colors duration-200"
        />

        {/* Send button */}
        <button
          type="submit"
          disabled={!message.trim()}
          className="px-4 py-2 bg-green-50 text-green-600 rounded-xl
                   border border-green-100
                   hover:bg-green-100
                   transition-colors duration-200
                   disabled:opacity-50 disabled:hover:bg-green-50 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
} 