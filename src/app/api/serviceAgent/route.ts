import { NextResponse } from 'next/server';
import { FAQQuestion } from '@/components/ChatAgent/ai-components/FAQList';
import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { createSearchTool } from '@/components/ChatAgent/ai-components/SearchTool';
import { createLLM, createPromptTemplate } from '@/components/ChatAgent/ai-components/LLMConfig';

export async function POST(req: Request) {
  try {
    const { question } = await req.json() as { question: FAQQuestion };
    
    // Initialize components
    const model = createLLM();
    const searchTool = createSearchTool();
    const prompt = createPromptTemplate();
    
    // Create the agent
    const agent = await createOpenAIFunctionsAgent({
      llm: model,
      tools: [searchTool],
      prompt
    });

    // Create the executor
    const executor = AgentExecutor.fromAgentAndTools({
      agent,
      tools: [searchTool]
    });

    // Execute the agent with the FAQ question
    const result = await executor.invoke({
      input: question,
    });

    return NextResponse.json({ response: result.output });
  } catch (error) {
    console.error('Error in service agent:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
