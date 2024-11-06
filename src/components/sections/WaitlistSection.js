import React, { useState } from 'react';
import { themeColors, typography } from '../../styles/theme';
import { Check, AlertCircle, X} from 'lucide-react';

const TECH_STACK_OPTIONS = [
  {
    category: 'Website Platforms & CMS',
    options: [
      'WordPress',
      'Shopify',
      'Wix',
      'Webflow',
      'Squarespace',
      'Custom Website'
    ]
  },
  {
    category: 'Mobile Apps',
    options: [
      'iOS Native (Swift/SwiftUI)',
      'Android Native (Kotlin/Java)',
      'React Native',
      'Flutter',
      'Progressive Web App (PWA)'
    ]
  },
  {
    category: 'E-commerce Platforms',
    options: [
      'Shopify',
      'WooCommerce',
      'Magento',
      'Custom E-commerce',
      'Marketplace Platform'
    ]
  }
];

const INDUSTRY_OPTIONS = [
  'E-commerce',
  'Financial Services',
  'Healthcare',
  'Education',
  'Media & Entertainment',
  'Other'
];

const WaitlistSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    company: '',
    industry: '',
    userbase: '',
    techStack: [],
    otherTechStack: '',
    pricingPreference: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTechStackChange = (tech) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter(t => t !== tech)
        : [...prev.techStack, tech]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Basic validation
    if (!formData.contactEmail || !formData.contactName || !formData.company) {
      setError('Please fill in all required fields');
      setStatus('error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
      setError('Please enter a valid email address');
      setStatus('error');
      return;
    }

    try {
      // Add your waitlist submission logic here
      // await submitToWaitlist(formData);
      console.log('Form submitted:', formData);
      setStatus('success');
      setError('');
    } catch (error) {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (!isFormOpen) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Check size={48} style={{ color: themeColors.primary.teal }} />
            </div>
            <h3 style={{
              color: themeColors.secondary.darkBlue,
              fontSize: typography.size['2xl'],
              fontWeight: typography.weight.bold
            }} className="mb-2">
              Thank You for Joining Our Waitlist!
            </h3>
            <p style={{ color: themeColors.neutral[600] }}>
              We'll be in touch soon with more information.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={() => setIsFormOpen(false)}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          style={{ color: themeColors.neutral[500] }}
        >
          <X size={24} />
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 style={{
              color: themeColors.secondary.darkBlue,
              fontSize: typography.size['3xl'],
              fontWeight: typography.weight.bold
            }} className="mb-4">
              Join our Waitlist
            </h2>
            <p style={{
              color: themeColors.neutral[600],
              fontSize: typography.size.base
            }}>
              Please tell us a bit about yourself and your company
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-center gap-2" 
                 style={{ color: themeColors.danger }}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields remain the same as your original form */}
            {/* Contact Name */}
            <div>
              <label className="block mb-1" style={{
                color: themeColors.neutral[700],
                fontSize: typography.size.sm,
                fontWeight: typography.weight.medium
              }}>
                Contact Name *
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none"
                style={{ focusBorderColor: themeColors.primary.teal }}
                required
                disabled={status === 'loading'}
              />
            </div>

            {/* Contact Email */}
            <div>
              <label className="block mb-1" style={{
                color: themeColors.neutral[700],
                fontSize: typography.size.sm,
                fontWeight: typography.weight.medium
              }}>
                Contact Email *
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none"
                style={{ focusBorderColor: themeColors.primary.teal }}
                required
                disabled={status === 'loading'}
              />
            </div>

            {/* Company */}
            <div>
              <label className="block mb-1" style={{
                color: themeColors.neutral[700],
                fontSize: typography.size.sm,
                fontWeight: typography.weight.medium
              }}>
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none"
                style={{ focusBorderColor: themeColors.primary.teal }}
                required
                disabled={status === 'loading'}
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block mb-1" style={{
                color: themeColors.neutral[700],
                fontSize: typography.size.sm,
                fontWeight: typography.weight.medium
              }}>
                Industry
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none"
                style={{ focusBorderColor: themeColors.primary.teal }}
                disabled={status === 'loading'}
              >
                <option value="">Select Industry</option>
                {INDUSTRY_OPTIONS.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Userbase */}
            <div>
              <label className="block mb-1" style={{
                color: themeColors.neutral[700],
                fontSize: typography.size.sm,
                fontWeight: typography.weight.medium
              }}>
                Userbase
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['<50', '50-500', '500+'].map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'userbase', value: size } })}
                    className="px-4 py-2 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: formData.userbase === size ? themeColors.primary.teal : 'white',
                      color: formData.userbase === size ? 'white' : themeColors.neutral[700],
                      borderColor: formData.userbase === size ? themeColors.primary.teal : themeColors.neutral[300]
                    }}
                    disabled={status === 'loading'}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block mb-1" style={{
                color: themeColors.neutral[700],
                fontSize: typography.size.sm,
                fontWeight: typography.weight.medium
              }}>
                Tech Stack
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                {TECH_STACK_OPTIONS.map(tech => (
                  <label key={tech} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.techStack.includes(tech)}
                      onChange={() => handleTechStackChange(tech)}
                      className="rounded border-neutral-300"
                      style={{ accentColor: themeColors.primary.teal }}
                      disabled={status === 'loading'}
                    />
                    <span style={{ color: themeColors.neutral[700] }}>{tech}</span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                name="otherTechStack"
                value={formData.otherTechStack}
                onChange={handleChange}
                placeholder="Other technologies..."
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none"
                style={{ focusBorderColor: themeColors.primary.teal }}
                disabled={status === 'loading'}
              />
            </div>

            {/* Preferred Pricing */}
            <div>
              <label className="block mb-1" style={{
                color: themeColors.neutral[700],
                fontSize: typography.size.sm,
                fontWeight: typography.weight.medium
              }}>
                Preferred Pricing
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Monthly', 'Dynamic Usage Based'].map(price => (
                  <button
                    key={price}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'pricingPreference', value: price } })}
                    className="px-4 py-2 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: formData.pricingPreference === price ? themeColors.primary.teal : 'white',
                      color: formData.pricingPreference === price ? 'white' : themeColors.neutral[700],
                      borderColor: formData.pricingPreference === price ? themeColors.primary.teal : themeColors.neutral[300]
                    }}
                    disabled={status === 'loading'}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="flex-1 px-6 py-3 rounded-lg border transition-colors"
                style={{
                  borderColor: themeColors.neutral[300],
                  color: themeColors.neutral[700]
                }}
                disabled={status === 'loading'}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 px-6 py-3 rounded-lg transition-opacity disabled:opacity-50"
                style={{
                  backgroundColor: themeColors.primary.orange,
                  color: 'white',
                  fontSize: typography.size.base,
                  fontWeight: typography.weight.semibold
                }}
              >
                {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistSection;
