import { isFeatureEnabled } from './env';

class Analytics {
  constructor() {
    this.enabled = isFeatureEnabled('ANALYTICS');
    this.initialized = false;
  }

  init() {
    if (!this.enabled || this.initialized) return;

    // Initialize analytics here
    // Example: Google Analytics, Mixpanel, etc.
    this.initialized = true;
  }

  trackPageView(path) {
    if (!this.enabled) return;
    
    // Track page view
    console.log('Page View:', path);
  }

  trackEvent(category, action, label = '', value = null) {
    if (!this.enabled) return;

    // Track custom event
    console.log('Event:', { category, action, label, value });
  }

  trackError(error, context = {}) {
    if (!this.enabled) return;

    // Track error
    console.error('Error:', error, context);
  }

  setUserProperties(properties) {
    if (!this.enabled) return;

    // Set user properties
    console.log('User Properties:', properties);
  }
}

export default new Analytics();