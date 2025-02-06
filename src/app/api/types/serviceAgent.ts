// Request/Response types for the service agent
export interface ServiceAgentRequest {
  question: string;
}

export interface ServiceAgentResponse {
  response: string;
  question: string;
}

export interface ServiceAgentErrorResponse {
  error: string;
} 