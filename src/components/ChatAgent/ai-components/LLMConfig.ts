import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';

export const createLLM = () => {
  return new ChatOpenAI({
    temperature: 0,
    modelName: 'gpt-4o-mini',
  });
};

export const createPromptTemplate = () => {
  return ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful customer service assistant that searches Lugg.com and provide detailed answers to customer questions."],
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);
}; 