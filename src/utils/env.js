/**
 * Environment utility functions for safe access to environment variables
 */

/**
 * Get environment variable with fallback
 * @param {string} key - Environment variable key
 * @param {string} fallback - Fallback value if environment variable is not set
 * @returns {string}
 */
export const getEnvVar = (key, fallback = '') => {
  const value = process.env[`REACT_APP_${key}`];
  return value || fallback;
};

/**
 * Check if feature flag is enabled
 * @param {string} feature - Feature flag name
 * @returns {boolean}
 */
export const isFeatureEnabled = (feature) => {
  return process.env[`REACT_APP_ENABLE_${feature.toUpperCase()}`] === 'true';
};

/**
 * Get API configuration
 */
export const getApiConfig = () => ({
  baseUrl: getEnvVar('API_BASE_URL'),
  customerIntelligenceKey: getEnvVar('CUSTOMER_INTELLIGENCE_KEY'),
  userInsightsKey: getEnvVar('USER_INSIGHTS_KEY'),
  timeout: parseInt(getEnvVar('API_TIMEOUT', '30000')),
});

/**
 * Get Azure Storage configuration
 */
export const getAzureStorageConfig = () => ({
  accountName: getEnvVar('AZURE_STORAGE_ACCOUNT'),
  containerName: getEnvVar('AZURE_STORAGE_CONTAINER'),
  key: getEnvVar('AZURE_STORAGE_KEY'),
});

/**
 * Get application configuration
 */
export const getAppConfig = () => ({
  environment: getEnvVar('ENVIRONMENT', 'development'),
  version: getEnvVar('VERSION'),
  name: getEnvVar('NAME', 'Advaita Clickstream AI'),
});

/**
 * Check if we're in production environment
 */
export const isProduction = () => getEnvVar('ENVIRONMENT') === 'production';

/**
 * Get cache configuration
 */
export const getCacheConfig = () => ({
  duration: parseInt(getEnvVar('CACHE_DURATION', '3600000')),
  maxSize: parseInt(getEnvVar('MAX_CACHE_SIZE', '104857600')),
});