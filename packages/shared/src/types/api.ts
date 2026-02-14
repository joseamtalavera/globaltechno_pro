export interface HealthResponse {
  status: 'ok';
  uptimeSec: number;
  version: string;
  timestamp: string;
}

export interface ContactLeadInput {
  name: string;
  company?: string;
  email: string;
  message: string;
  consent: boolean;
}

export interface ContactSubmitResponse {
  id: string;
  receivedAt: string;
}

export interface NewsletterSubscribeResponse {
  id: string;
  subscribedAt: string;
}

export interface ApiError {
  statusCode: number;
  error: string;
  message: string | string[];
  requestId: string;
  timestamp: string;
}
