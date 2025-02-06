// Chat Components
export interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ChatHeaderProps {
  onClose: () => void;
}

export interface MessageInputProps {
  message: string;
  onMessageChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export interface ResponseWindowProps {
  response: string;
  onClose: () => void;
}

export interface FAQSectionProps {
  onQuestionClick: (question: string) => void;
  isLoading: boolean;
}

// Landing Page Components
export interface ChatButtonProps {
  onClick: () => void;
} 