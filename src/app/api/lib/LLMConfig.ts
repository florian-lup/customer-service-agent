import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';

export const createLLM = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }

  try {
    const llm = new ChatOpenAI({
      temperature: 0.5,
      modelName: 'gpt-4o-mini',
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    return llm;
  } catch (error) {
    throw error;
  }
};

export const createPromptTemplate = () => {
  return ChatPromptTemplate.fromMessages([
    ["system", "You are a professional and helpful customer service assistant. Your role is to provide clear, comprehensive answers to customer inquiries. Format your responses for clarity:\n\n- Use **bold text** for important information or key terms\n- Create organized lists when providing steps, features, or multiple points\n- Break down long responses into clear sections with headings\n- Use bullet points for related items or features\n- Use numbered lists for sequential steps or processes\n\nKeep responses professional yet friendly, and ensure they are well-structured and easy to understand. If you're unsure about specific information, be honest and provide the most relevant general guidance."],
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);
}; 