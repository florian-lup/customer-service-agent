// Generic API response type
export type ApiResponse<T> = {
  data?: T;
  error?: string;
  status: number;
}; 