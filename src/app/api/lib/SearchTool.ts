import { SerpAPI } from '@langchain/community/tools/serpapi';

export const createSearchTool = () => {
  if (!process.env.SERPAPI_API_KEY) {
    throw new Error('SERPAPI_API_KEY environment variable is not set');
  }

  return new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: 'United States',
    hl: 'en',
    gl: 'us',
    google_domain: 'google.com'
  });
}; 