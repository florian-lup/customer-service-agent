import ChatHeader from './ChatHeader';
import FAQSection from './FAQSection';
import MessageInput from './MessageInput';

interface ChatWindowProps {
  onClose: () => void;
  message: string;
  onMessageChange: (message: string) => void;
  onMessageSubmit: (e: React.FormEvent) => void;
  onFAQClick: (question: string) => void;
  isLoading: boolean;
  isInputLoading: boolean;
}

export default function ChatWindow({
  onClose,
  message,
  onMessageChange,
  onMessageSubmit,
  onFAQClick,
  isLoading,
  isInputLoading,
}: ChatWindowProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Chat Window */}
      <div
        className="relative w-full h-full sm:w-[400px] sm:h-[600px] sm:max-h-[90vh] 
                 bg-white sm:rounded-2xl shadow-xl flex flex-col overflow-hidden"
      >
        <ChatHeader onClose={onClose} />
        
        <div 
          className="flex-1 p-3 sm:p-4 overflow-y-auto pr-2
                    scrollbar-thin scrollbar-track-transparent
                    scrollbar-thumb-gray-200 hover:scrollbar-thumb-green-200
                    [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-200
                    hover:[&::-webkit-scrollbar-thumb]:bg-green-200
                    [&::-webkit-scrollbar-thumb]:border
                    [&::-webkit-scrollbar-thumb]:border-white"
        >
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <h3 className="font-medium text-gray-800 mb-2">Welcome to Customer Support! 👋</h3>
              <p className="text-sm text-gray-600 mb-3">
                I&apos;m your virtual assistant, ready to help you with:
              </p>
              <ul className="text-sm text-gray-600 space-y-2 ml-4 list-disc">
                <li>Product information and features</li>
                <li>Account-related questions</li>
                <li>Billing and payment inquiries</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                Feel free to ask any questions or check out the frequently asked questions below!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100">
          <FAQSection 
            onQuestionClick={onFAQClick}
            isLoading={isLoading}
          />
        </div>

        <div className="border-t border-gray-100">
          <MessageInput
            message={message}
            onMessageChange={onMessageChange}
            onSubmit={onMessageSubmit}
            isLoading={isInputLoading}
          />
        </div>
      </div>
    </div>
  );
} 