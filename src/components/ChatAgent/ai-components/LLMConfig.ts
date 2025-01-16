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
    ["system", "You are a Lugg.com customer service assistant. Your role is to provide clear, accurate answers about Lugg's moving services by searching their website. Keep responses concise but informative, focusing on the specific question asked. If the information isn't directly available on Lugg.com, say so and provide the most relevant general information about their services."],
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);
}; 