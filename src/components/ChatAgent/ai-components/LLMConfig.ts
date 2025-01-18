import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';

const log = (message: string, data?: unknown) => {
  const timestamp = new Date().toISOString();
  console.warn(`[${timestamp}] ${message}`);
  if (data) console.dir(data, { depth: null });
};

export const createLLM = () => {
  log('🔧 Creating LLM instance...');
  
  if (!process.env.OPENAI_API_KEY) {
    log('❌ OPENAI_API_KEY environment variable is not set');
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }

  try {
    const llm = new ChatOpenAI({
      temperature: 0.5,
      modelName: 'gpt-4o-mini',
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    log('✅ LLM instance created successfully');
    return llm;
  } catch (error) {
    log('❌ Error creating LLM instance:', error);
    throw error;
  }
};

export const createPromptTemplate = () => {
  return ChatPromptTemplate.fromMessages([
    ["system", "You are a Lugg.com customer service assistant. Your role is to provide clear, accurate answers about Lugg's moving services by searching their website. Keep responses concise but informative, focusing on the specific question asked. If the information isn't directly available on Lugg.com, say so and provide the most relevant general information about their services."],
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);
}; 