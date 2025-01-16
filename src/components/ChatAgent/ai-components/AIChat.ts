import { useState } from 'react';

interface UseAIChatProps {
  onMessageSubmit?: (message: string) => void;
}

export function useAIChat({ onMessageSubmit }: UseAIChatProps = {}) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;

    try {
      setIsLoading(true);
      await onMessageSubmit?.(message);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    message,
    isLoading,
    handleMessageChange,
    handleSubmit
  };
} 