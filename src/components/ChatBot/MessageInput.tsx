interface MessageInputProps {
  message: string;
  onChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function MessageInput({ message, onChange, onSubmit }: MessageInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Send
        </button>
      </div>
    </form>
  );
} 