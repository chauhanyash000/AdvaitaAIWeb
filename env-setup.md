# Environment Configuration Setup

## Getting Started

1. Copy `.env.example` to create a new `.env` file:
```bash
cp .env.example .env
```

2. Update the values in `.env` with your actual configuration.

## Environment Files

The project uses different environment files for different stages:

- `.env`: Local development environment variables
- `.env.development`: Development environment variables
- `.env.production`: Production environment variables
- `.env.test`: Testing environment variables

## Required Variables

### API Configuration
- `REACT_APP_API_BASE_URL`: Base URL for API calls
- `REACT_APP_CUSTOMER_INTELLIGENCE_KEY`: API key for customer intelligence
- `REACT_APP_USER_INSIGHTS_KEY`: API key for user insights

### Azure Storage
- `REACT_APP_AZURE_STORAGE_ACCOUNT`: Azure storage account name
- `REACT_APP_AZURE_STORAGE_CONTAINER`: Azure storage container name
- `REACT_APP_AZURE_STORAGE_KEY`: Azure storage access key

### Application Settings
- `REACT_APP_ENVIRONMENT`: Application environment (development/production)
- `REACT_APP_VERSION`: Application version
- `REACT_APP_NAME`: Application name

## Feature Flags

Feature flags allow you to enable/disable certain features:

- `REACT_APP_ENABLE_WAITLIST`: Enable waitlist functionality
- `REACT_APP_ENABLE_ANALYTICS`: Enable analytics tracking
- `REACT_APP_ENABLE_ERROR_LOGGING`: Enable error logging

## Security

Important security-related variables:

- `REACT_APP_ENCRYPTION_KEY`: Key for client-side encryption
- `REACT_APP_API_TIMEOUT`: API request timeout in milliseconds
- `REACT_APP_MAX_UPLOAD_SIZE`: Maximum upload size in bytes

## Usage

Import the environment utilities:

```javascript
import { getEnvVar, isFeatureEnabled, getApiConfig } from './utils/env';

// Get a specific environment variable
const apiUrl = getEnvVar('API_BASE_URL');

// Check if a feature is enabled
if (isFeatureEnabled('WAITLIST')) {
  // Waitlist feature is enabled
}

// Get API configuration
const apiConfig = getApiConfig();
```

## Security Notes

1. Never commit `.env` files to version control
2. Keep sensitive keys secure
3. Rotate keys regularly
4. Use different keys for different environments
5. Implement proper access controls

## Deployment

When deploying, ensure that:

1. All required environment variables are set
2. Production environment uses secure values
3. Keys and secrets are managed securely
4. Environment-specific configurations are correct