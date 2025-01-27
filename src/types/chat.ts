export interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ResponseWindowProps {
  response: string;
  onClose: () => void;
}

export interface MessageInputProps {
  message: string;
  onMessageChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export interface ChatHeaderProps {
  onClose: () => void;
}

export interface UseAIChatProps {
  onMessageSubmit?: (message: string) => void;
}

export interface ChatResponse {
  response: string;
  error?: string;
} 