export const FAQ_QUESTIONS = [
  "How do I reset my password?",
  "What are your business hours?",
  "How can I track my order?",
  "What payment methods do you accept?",
  "How can I request a refund?"
] as const;

export type FAQQuestion = typeof FAQ_QUESTIONS[number]; 