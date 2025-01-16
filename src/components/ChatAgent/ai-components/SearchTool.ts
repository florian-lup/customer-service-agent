import { SerpAPI } from '@langchain/community/tools/serpapi';

export const createSearchTool = () => {
  return new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: 'United States',
    hl: 'en',
    gl: 'us',
    google_domain: 'google.com',
    as_sitesearch: 'lugg.com'
  });
}; 