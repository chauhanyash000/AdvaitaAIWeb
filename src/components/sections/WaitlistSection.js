import React, { useState } from 'react';
import { themeColors, typography } from '../../styles/theme';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Add your waitlist submission logic here
      // Example: await submitToWaitlist(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 style={{
          color: themeColors.secondary.darkBlue,
          fontSize: typography.size['4xl'],
          fontWeight: typography.weight.bold
        }} className="mb-8">
          Join the Waitlist
        </h2>
        <p style={{
          color: themeColors.neutral[600],
          fontSize: typography.size.lg
        }} className="mb-8">
          Be among the first to experience the future of customer analytics
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="flex-1 px-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:border-primary-teal"
            disabled={status === 'loading'}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              backgroundColor: themeColors.primary.orange,
              color: 'white',
              fontSize: typography.size.base,
              fontWeight: typography.weight.semibold
            }}
            className="px-6 py-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === 'loading' ? 'Joining...' : 'Join Now'}
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-green-600">Successfully joined the waitlist!</p>
        )}
        
        {status === 'error' && (
          <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;