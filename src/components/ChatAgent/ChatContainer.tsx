import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import ChatWindow from './components/ChatWindow';
import ResponseWindow from './ResponseWindow';
import ChatHeader from './components/ChatHeader';
import FAQSection from './components/FAQSection';
import MessageInput from './components/MessageInput';
import { ChatContainerProps } from '../../types/components';
import { useChatState } from '../../hooks/useChatState';
import { useServiceAgent } from '../../hooks/useServiceAgent';

export default function ChatContainer({ isOpen, onClose }: ChatContainerProps) {
  const {
    message,
    response,
    showResponse,
    isLoading,
    isInputLoading,
    setMessage,
    setResponse,
    setShowResponse,
    setIsInputLoading
  } = useChatState();

  const { sendToAPI } = useServiceAgent(
    setResponse,
    setShowResponse,
    setIsInputLoading
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendToAPI(message);
  };

  const handleFAQClick = (question: string) => {
    sendToAPI(question);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={() => onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fadeIn z-50" />
        <Dialog.Content className="fixed inset-0 md:flex md:items-center md:justify-center data-[state=open]:animate-contentShow z-50">
          <Dialog.Title className="sr-only">Customer Support Chat</Dialog.Title>
          <Dialog.Description className="sr-only">
            Chat with our AI assistant for customer support. You can ask questions, get help with products, and resolve issues.
          </Dialog.Description>
          
          <div className="relative h-full md:h-auto flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-screen-lg mx-auto">
            <motion.div
              className={`absolute md:relative inset-0 md:inset-auto w-full md:w-[400px] h-full md:h-auto md:min-h-[480px] md:max-h-[85vh] flex flex-col 
                       bg-white rounded-none md:rounded-2xl shadow-xl overflow-hidden
                       ${showResponse ? 'hidden md:flex' : 'flex'}`}
            >
              <div className="h-full flex flex-col">
                <div className="relative w-full h-full flex flex-col overflow-hidden bg-white sm:rounded-2xl">
                  <ChatHeader onClose={onClose} />
                  <ChatWindow />
                  <div className="border-t border-gray-100 bg-white/80 backdrop-blur-sm">
                    <FAQSection 
                      onQuestionClick={handleFAQClick}
                      isLoading={isLoading}
                    />
                  </div>
                  <div className="border-t border-gray-100 bg-white">
                    <MessageInput
                      message={message}
                      onMessageChange={setMessage}
                      onSubmit={handleSubmit}
                      isLoading={isInputLoading}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {showResponse && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute md:relative inset-0 md:inset-auto w-full md:w-[460px] h-full md:h-auto md:min-h-[480px] md:max-h-[85vh]"
              >
                <ResponseWindow
                  response={response}
                  onClose={() => setShowResponse(false)}
                />
              </motion.div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 