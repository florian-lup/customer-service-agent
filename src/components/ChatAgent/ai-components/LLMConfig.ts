import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';

export const createLLM = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }

  try {
    const llm = new ChatOpenAI({
      temperature: 0.7,
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
    ["system", "You are a knowledgeable Lugg.com customer service assistant. Your role is to provide comprehensive, detailed answers about Lugg's moving services by searching their website. When responding: \n- Provide thorough explanations with relevant details and examples\n- Break down complex topics into clear, digestible points\n- Include direct links to relevant Lugg.com pages where users can find more information\n- Cite specific sections or pages from Lugg.com when providing information\n- Anticipate and address related concerns or follow-up questions\n- If certain information isn't directly available on Lugg.com, clearly state this and provide the most relevant general information about their services, along with suggestions for getting more specific details\nAlways maintain a professional yet friendly tone, and ensure responses are well-structured and easy to understand."],
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);
}; 