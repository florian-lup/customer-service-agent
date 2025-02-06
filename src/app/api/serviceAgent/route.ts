import { NextResponse } from 'next/server';
import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { createLLM, createPromptTemplate } from '../lib/LLMConfig';
import { createSearchTool } from '../lib/SearchTool';
import { 
  AgentInstance, 
  ServiceAgentRequest, 
  ServiceAgentResponse, 
  ServiceAgentErrorResponse 
} from '../types';

// Create the agent once
let agent: AgentInstance | null = null;
let executor: AgentExecutor | null = null;

export async function POST(req: Request) {
  try {
    // Check for required environment variables
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json<ServiceAgentErrorResponse>(
        { error: 'OpenAI API key is not configured. Please check the server configuration.' },
        { status: 500 }
      );
    }

    if (!process.env.SERPAPI_API_KEY) {
      return NextResponse.json<ServiceAgentErrorResponse>(
        { error: 'SerpAPI key is not configured. Please check the server configuration.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { question } = body as ServiceAgentRequest;
    
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
      } catch {
        return NextResponse.json<ServiceAgentErrorResponse>(
          { error: 'Failed to initialize AI components. Please check the server configuration.' },
          { status: 500 }
        );
      }
    }

    // Execute the FAQ question
    const result = await executor.invoke({
      input: question,
    });

    return NextResponse.json<ServiceAgentResponse>({ 
      response: result.output,
      question 
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json<ServiceAgentErrorResponse>(
          { error: 'API configuration error. Please check the server configuration.' },
          { status: 500 }
        );
      }
      
      if (error.message.includes('Rate limit')) {
        return NextResponse.json<ServiceAgentErrorResponse>(
          { error: 'Service is temporarily unavailable. Please try again later.' },
          { status: 429 }
        );
      }
    }
    
    return NextResponse.json<ServiceAgentErrorResponse>(
      { error: 'Unable to find answer to your question. Please try again later.' },
      { status: 500 }
    );
  }
}
