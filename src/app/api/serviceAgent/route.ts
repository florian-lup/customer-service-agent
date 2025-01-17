import { NextResponse } from 'next/server';
import { FAQQuestion } from '@/components/ChatAgent/components/FAQSection';
import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { createSearchTool } from '@/components/ChatAgent/ai-components/SearchTool';
import { createLLM, createPromptTemplate } from '@/components/ChatAgent/ai-components/LLMConfig';

// Create the agent once
let agent: Awaited<ReturnType<typeof createOpenAIFunctionsAgent>> | null = null;
let executor: AgentExecutor | null = null;

export async function POST(req: Request) {
  try {
    // Check for required environment variables
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please check the server configuration.' },
        { status: 500 }
      );
    }

    if (!process.env.SERPAPI_API_KEY) {
      return NextResponse.json(
        { error: 'SerpAPI key is not configured. Please check the server configuration.' },
        { status: 500 }
      );
    }

    const { question } = await req.json() as { question: FAQQuestion };
    
    // Initialize components and agent if not already done
    if (!agent || !executor) {
      try {
        const model = createLLM();
        const searchTool = createSearchTool();
        const prompt = createPromptTemplate();

        agent = await createOpenAIFunctionsAgent({
          llm: model,
          tools: [searchTool],
          prompt
        });

        executor = AgentExecutor.fromAgentAndTools({
          agent,
          tools: [searchTool]
        });
      } catch (initError) {
        console.error('Error initializing AI components:', initError);
        return NextResponse.json(
          { error: 'Failed to initialize AI components. Please check the server configuration.' },
          { status: 500 }
        );
      }
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
    
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'API configuration error. Please check the server configuration.' },
          { status: 500 }
        );
      }
      
      if (error.message.includes('Rate limit')) {
        return NextResponse.json(
          { error: 'Service is temporarily unavailable. Please try again later.' },
          { status: 429 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Unable to find answer to your question. Please try again later.' },
      { status: 500 }
    );
  }
}
