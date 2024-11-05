import React from 'react';
import { ChevronDown } from 'lucide-react';
import { themeColors, typography } from '../../styles/theme';

const HeroSection = ({ scrollTo }) => (
  <section className="min-h-[90vh] flex items-center justify-center text-center relative">
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      <h1 style={{
        color: themeColors.secondary.darkBlue,
        fontSize: typography.size['5xl'],
        fontWeight: typography.weight.bold
      }} className="leading-tight">
        Breakthrough Intelligence Through Clickstream AI
      </h1>
      <p style={{
        color: themeColors.neutral[600],
        fontSize: typography.size.xl
      }} className="max-w-2xl mx-auto">
        The Platform for new digital companies to drive growth and maximize data utility through advanced clickstream analytics and AI-powered insights.
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => scrollTo('products')}
          style={{
            backgroundColor: themeColors.primary.orange,
            fontSize: typography.size.lg,
            fontWeight: typography.weight.semibold
          }}
          className="px-8 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
        >
          Explore Platform
        </button>
        <button
          onClick={() => scrollTo('waitlist')}
          style={{
            backgroundColor: 'white',
            color: themeColors.secondary.darkBlue,
            fontSize: typography.size.lg,
            fontWeight: typography.weight.semibold
          }} 
          className="px-8 py-3 rounded-full border border-current hover:bg-gray-50 transition-colors"
        >
          Join Waitlist
        </button>
      </div>
    </div>
    <button 
      onClick={() => scrollTo('products')}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
    >
      <ChevronDown size={32} style={{ color: themeColors.primary.orange }} />
    </button>
  </section>
);

export default HeroSection;