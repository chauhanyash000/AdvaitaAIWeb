import { getApiConfig } from './env';

const API_CONFIG = getApiConfig();

/**
 * Custom API error class
 */
class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

/**
 * Base API client configuration
 */
const createApiClient = () => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const handleResponse = async (response) => {
    if (!response.ok) {
      const error = await response.text();
      throw new ApiError(
        'API request failed',
        response.status,
        error
      );
    }

    try {
      return await response.json();
    } catch (error) {
      return await response.text();
    }
  };

  return {
    get: async (endpoint, options = {}) => {
      const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
        ...options,
      });
      return handleResponse(response);
    },

    post: async (endpoint, data, options = {}) => {
      const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
        body: JSON.stringify(data),
        ...options,
      });
      return handleResponse(response);
    },

    // Add other methods as needed (PUT, DELETE, etc.)
  };
};

const apiClient = createApiClient();

/**
 * API endpoints for specific features
 */
export const customerIntelligenceApi = {
  getData: async () => {
    return apiClient.get('/CustomerIntelligenceFunction', {
      headers: {
        'x-functions-key': API_CONFIG.customerIntelligenceKey,
      },
    });
  },
};

export const userInsightsApi = {
  getData: async () => {
    return apiClient.get('/UserInsightsFunction', {
      headers: {
        'x-functions-key': API_CONFIG.userInsightsKey,
      },
    });
  },
};

export const waitlistApi = {
  join: async (email) => {
    return apiClient.post('/waitlist', { email });
  },
};

export default apiClient;