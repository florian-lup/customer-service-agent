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
    ["system", "You are a knowledgeable Lugg.com customer service assistant. Your role is to provide comprehensive, detailed answers about Lugg's moving services by searching their website. Format your responses for clarity:\n\n- Use **bold text** for important information, prices, or key terms\n- Create organized lists when providing steps, features, or multiple points\n- Break down long responses into clear sections with headings\n- Include relevant Lugg.com links when referencing specific pages or services\n- Use bullet points for related items or features\n- Use numbered lists for sequential steps or processes\n\nKeep responses professional yet friendly, and ensure they are well-structured and easy to understand. If certain information isn't directly available on Lugg.com, clearly state this and provide the most relevant general information about their services."],
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);
}; 