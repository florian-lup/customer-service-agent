import { NextResponse } from 'next/server';
import { FAQQuestion } from '@/components/ChatAgent/components/FAQSection';
import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { createSearchTool } from '@/components/ChatAgent/ai-components/SearchTool';
import { createLLM, createPromptTemplate } from '@/components/ChatAgent/ai-components/LLMConfig';

// Create the agent once
let agent: Awaited<ReturnType<typeof createOpenAIFunctionsAgent>> | null = null;
let executor: AgentExecutor | null = null;

const log = (message: string, data?: unknown) => {
  const timestamp = new Date().toISOString();
  console.warn(`[${timestamp}] ${message}`);
  if (data) console.dir(data, { depth: null });
};

export async function POST(req: Request) {
  log('🔵 API Request received');
  
  try {
    // Check for required environment variables
    if (!process.env.OPENAI_API_KEY) {
      log('❌ Missing OPENAI_API_KEY');
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please check the server configuration.' },
        { status: 500 }
      );
    }

    if (!process.env.SERPAPI_API_KEY) {
      log('❌ Missing SERPAPI_API_KEY');
      return NextResponse.json(
        { error: 'SerpAPI key is not configured. Please check the server configuration.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    log('📝 Request body received:', body);
    
    const { question } = body as { question: FAQQuestion };
    
    // Initialize components and agent if not already done
    if (!agent || !executor) {
      log('🚀 Initializing AI components...');
      try {
        const model = createLLM();
        const searchTool = createSearchTool();
        const prompt = createPromptTemplate();

        log('🤖 Creating agent...');
        agent = await createOpenAIFunctionsAgent({
          llm: model,
          tools: [searchTool],
          prompt
        });

        log('⚙️ Creating executor...');
        executor = AgentExecutor.fromAgentAndTools({
          agent,
          tools: [searchTool]
        });
        log('✅ AI components initialized successfully');
      } catch (initError) {
        log('❌ Error initializing AI components:', initError);
        return NextResponse.json(
          { error: 'Failed to initialize AI components. Please check the server configuration.' },
          { status: 500 }
        );
      }
    }

    // Execute the FAQ question
    log('🎯 Executing question:', question);
    const result = await executor.invoke({
      input: question,
    });
    log('✅ Question executed successfully:', result);

    return NextResponse.json({ 
      response: result.output,
      question 
    });
  } catch (error) {
    log('❌ Error in FAQ agent:', error);
    
    if (error instanceof Error) {
      log('🔍 Detailed error information:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
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
