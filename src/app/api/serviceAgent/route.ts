import { NextResponse } from 'next/server';
import { FAQQuestion } from '@/components/ChatAgent/ai-components/FAQList';
import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { createSearchTool } from '@/components/ChatAgent/ai-components/SearchTool';
import { createLLM, createPromptTemplate } from '@/components/ChatAgent/ai-components/LLMConfig';

// Initialize components once (they are stateless and can be reused)
const model = createLLM();
const searchTool = createSearchTool();
const prompt = createPromptTemplate();

// Create the agent once
let agent: Awaited<ReturnType<typeof createOpenAIFunctionsAgent>> | null = null;
let executor: AgentExecutor | null = null;

export async function POST(req: Request) {
  try {
    const { question } = await req.json() as { question: FAQQuestion };
    
    // Initialize agent and executor if not already done
    if (!agent || !executor) {
      agent = await createOpenAIFunctionsAgent({
        llm: model,
        tools: [searchTool],
        prompt
      });

      executor = AgentExecutor.fromAgentAndTools({
        agent,
        tools: [searchTool]
      });
    }

    // Execute the FAQ question
    const result = await executor.invoke({
      input: question,
    });

    return NextResponse.json({ 
      response: result.output,
      question 
    });
  } catch (error) {
    console.error('Error in FAQ agent:', error);
    return NextResponse.json(
      { error: 'Unable to find answer to your question. Please try again later.' },
      { status: 500 }
    );
  }
}
