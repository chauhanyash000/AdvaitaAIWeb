/**
 * Common validation rules
 */
export const validate = {
  required: (value) => {
    if (value === null || value === undefined || value === '') {
      return 'This field is required';
    }
    return null;
  },

  email: (value) => {
    if (!value) return null;
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(value)) {
      return 'Invalid email address';
    }
    return null;
  },

  workEmail: (value) => {
    if (!value) return null;

    const commonFreeEmails = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'aol.com'
    ];

    const domain = value.split('@')[1]?.toLowerCase();
    if (commonFreeEmails.includes(domain)) {
      return 'Please use your work email address';
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (!value) return null;
    
    if (value.length < min) {
      return `Must be at least ${min} characters`;
    }
    return null;
  },

  maxLength: (max) => (value) => {
    if (!value) return null;
    
    if (value.length > max) {
      return `Must be no more than ${max} characters`;
    }
    return null;
  },

  match: (field, fieldName) => (value, formValues) => {
    if (!value) return null;
    
    if (value !== formValues[field]) {
      return `Must match ${fieldName}`;
    }
    return null;
  }
};

/**
 * Validates a form field with multiple rules
 */
export const validateField = (value, rules = []) => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return null;
};

/**
 * Validates an entire form
 */
export const validateForm = (values, validationRules) => {
  const errors = {};
  
  Object.keys(validationRules).forEach(field => {
    const fieldRules = validationRules[field];
    const error = validateField(values[field], fieldRules);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};