export const FAQ_QUESTIONS = [
  "What are Lugg's business hours for moving services?",
  "How can I track my Lugg moving order?",
  "What payment methods does Lugg accept?",
  "How can I request a refund for my Lugg service?",
  "How much notice do I need to book a move?",
  "What items can Lugg help me move?",
  "Does Lugg provide packing services?"
] as const;

export type FAQQuestion = typeof FAQ_QUESTIONS[number]; 