import { createOpenAIFunctionsAgent } from 'langchain/agents';

export type AgentInstance = Awaited<ReturnType<typeof createOpenAIFunctionsAgent>>; 