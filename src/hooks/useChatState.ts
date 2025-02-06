import { useState } from 'react';

interface UseChatStateReturn {
  message: string;
  response: string;
  showResponse: boolean;
  isLoading: boolean;
  isInputLoading: boolean;
  setMessage: (message: string) => void;
  setResponse: (response: string) => void;
  setShowResponse: (show: boolean) => void;
  setIsLoading: (loading: boolean) => void;
  setIsInputLoading: (loading: boolean) => void;
}

export function useChatState(): UseChatStateReturn {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputLoading, setIsInputLoading] = useState(false);

  return {
    message,
    response,
    showResponse,
    isLoading,
    isInputLoading,
    setMessage,
    setResponse,
    setShowResponse,
    setIsLoading,
    setIsInputLoading,
  };
} 