import React, { useState } from 'react';
import { themeColors, typography } from '../../styles/theme';
import { Check, AlertCircle, X } from 'lucide-react';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  
  const [status, setStatus] = useState('idle');
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
    
    if (!formData.contactEmail || !formData.contactName || !formData.company) {
      setError('Please fill in all required fields');
      setStatus('error');
      return;
    }
    
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
      setIsFormOpen(false);
      setIsSubmitted(true);
    } catch (error) {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Check className="text-teal-600" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Thank You for Joining Our Waitlist!
            </h3>
            <p className="text-gray-600">
              We'll be in touch soon with more information.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!isFormOpen ? (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">
              Join Our Exclusive Waitlist
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience our innovative platform. Join our waitlist today and get early access to our services.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        ) : (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              >
                <X size={24} />
              </button>

              <div className="p-6 sm:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    Join our Waitlist
                  </h2>
                  <p className="text-gray-600">
                    Please tell us a bit about yourself and your company
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-600">
                    <AlertCircle size={20} />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Name */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>

                  {/* Contact Email */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
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
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Userbase
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {['<50', '50-500', '500+'].map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleChange({ target: { name: 'userbase', value: size } })}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            formData.userbase === size 
                              ? 'bg-teal-500 text-white border-teal-500' 
                              : 'bg-white text-gray-700 border-gray-300'
                          }`}
                          disabled={status === 'loading'}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Tech Stack
                    </label>
                    <div className="space-y-2">
                      {TECH_STACK_OPTIONS.map(category => (
                        <div key={category.category} className="space-y-2">
                          <h4 className="font-medium text-gray-700">{category.category}</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {category.options.map(option => (
                              <label key={option} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={formData.techStack.includes(option)}
                                  onChange={() => handleTechStackChange(option)}
                                  className="rounded border-gray-300 text-teal-500"
                                  disabled={status === 'loading'}
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <input
                      type="text"
                      name="otherTechStack"
                      value={formData.otherTechStack}
                      onChange={handleChange}
                      placeholder="Other technologies..."
                      className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                      disabled={status === 'loading'}
                    />
                  </div>

                  {/* Preferred Pricing */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Preferred Pricing
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Monthly', 'Dynamic Usage Based'].map(price => (
                        <button
                          key={price}
                          type="button"
                          onClick={() => handleChange({ target: { name: 'pricingPreference', value: price } })}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            formData.pricingPreference === price 
                              ? 'bg-teal-500 text-white border-teal-500' 
                              : 'bg-white text-gray-700 border-gray-300'
                          }`}
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
                      className="flex-1 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 transition-colors hover:bg-gray-50"
                      disabled={status === 'loading'}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex-1 px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold transition-opacity disabled:opacity-50 hover:bg-orange-600"
                    >
                      {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
