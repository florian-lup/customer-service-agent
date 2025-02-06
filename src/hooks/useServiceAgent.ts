import { useState } from 'react';

interface UseServiceAgentReturn {
  sendToAPI: (text: string, isFAQ?: boolean) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useServiceAgent(
  setResponse: (response: string) => void,
  setShowResponse: (show: boolean) => void,
  setLoadingState: (loading: boolean) => void
): UseServiceAgentReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendToAPI = async (text: string) => {
    setLoadingState(true);
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await fetch('/api/serviceAgent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text })
      });

      if (!res.ok) {
        let errorMessage = 'An error occurred while processing your request';
        
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          if (res.status === 504) {
            errorMessage = 'The request took too long to process. Please try again or ask a shorter question.';
          } else if (res.status === 502 || res.status === 503) {
            errorMessage = 'The service is temporarily unavailable. Please try again in a moment.';
          }
        }
        
        throw new Error(errorMessage);
      }

      const data = await res.json();
      
      if (!data.response) {
        throw new Error('Invalid response format from server');
      }

      setResponse(data.response);
      setShowResponse(true);
    } catch (error) {
      let errorMessage = 'Sorry, there was an error processing your request. Please try again.';
      
      if (error instanceof Error && error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      setResponse(errorMessage);
      setShowResponse(true);
    } finally {
      setLoadingState(false);
      setIsLoading(false);
    }
  };

  return { sendToAPI, isLoading, error };
} 