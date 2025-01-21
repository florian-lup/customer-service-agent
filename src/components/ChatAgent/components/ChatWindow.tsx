export default function ChatWindow() {
  return (
    <div 
      className="flex-1 p-3 sm:p-4 lg:p-5 overflow-y-auto
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
      <div className="space-y-4 max-w-prose mx-auto">
        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
          <h3 className="font-medium text-gray-800 mb-2 text-base sm:text-lg">Welcome to Customer Support! 👋</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3">
            I&apos;m your virtual assistant, ready to help you with:
          </p>
          <ul className="text-sm sm:text-base text-gray-600 space-y-2 ml-4 list-disc">
            <li>Product information and features</li>
            <li>Account-related questions</li>
            <li>Billing and payment inquiries</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            Feel free to ask any questions or check out the frequently asked questions below!
          </p>
        </div>
      </div>
    </div>
  );
} 