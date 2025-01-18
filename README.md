# Customer Service Agent

An AI-native customer service chat interface built with Next.js and LangChain. This application provides an interactive chat experience for users to get support and answers to their questions. The agent utilizes SerpAPI to perform real-time web searches, allowing it to provide up-to-date and accurate information in response to user queries.

## How It Works

The customer service agent combines the power of:

- OpenAI's language model for natural conversation
- SerpAPI for real-time web searches to find relevant information
- LangChain for orchestrating the interaction between these tools

When a user asks a question, the agent:

1. Analyzes the query to understand the information needed
2. Performs a web search using SerpAPI to gather relevant, up-to-date information
3. Processes and synthesizes the search results
4. Provides a comprehensive, natural response based on the found information

## Features

- 🤖 AI-powered chat interface
- 💬 Real-time message streaming
- 🎨 Modern and responsive UI
- 📱 Mobile-friendly design
- ⚡ Fast and efficient responses
- 🔍 FAQ section with common queries
- 🔎 Web search capabilities using SerpAPI

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager
- OpenAI API key
- SerpAPI key (for web search functionality)

## Environment Setup

1. Clone the repository
2. Create a `.env.local` file in the root directory with the following variables:

```
OPENAI_API_KEY=your_api_key_here
SERPAPI_API_KEY=your_serpapi_key_here
```

## Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000] with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 15.1
- **Language**: TypeScript
- **UI Libraries**:
  - Tailwind CSS
  - Framer Motion
  - Hero Icons
- **AI Integration**:
  - LangChain
  - OpenAI
- **Markdown Support**:
  - React Markdown
  - Remark GFM
  - Rehype Raw

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/
│   ├── ChatAgent/      # Chat interface components
│   │   ├── ai-components/  # AI configuration and tools
│   │   └── components/     # UI components
│   └── HeroSection/    # Landing page components
```

## License

This project is licensed under the MIT License.
