import React from 'react';
import { themeColors, typography } from '../../styles/theme';

const AboutSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 style={{
          color: themeColors.secondary.darkBlue,
          fontSize: typography.size['4xl'],
          fontWeight: typography.weight.bold
        }}>
          About Us
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 style={{
            color: themeColors.secondary.darkBlue,
            fontSize: typography.size['2xl'],
            fontWeight: typography.weight.bold
          }}>
            Our Mission
          </h3>
          <p style={{ color: themeColors.neutral[600] }} className="text-lg">
            We're revolutionizing how digital companies understand and utilize their clickstream data. Our AI-powered platform helps product and marketing teams transform raw data into actionable insights for retention strategy and user behavior understanding.
          </p>
          <div>
            <h4 style={{
              color: themeColors.secondary.darkBlue,
              fontSize: typography.size.xl,
              fontWeight: typography.weight.semibold
            }} className="mb-3">
              Founded By
            </h4>
            <div className="space-y-2">
              <p style={{ color: themeColors.neutral[700], fontWeight: typography.weight.medium }}>
                Yash Chauhan
              </p>
              <p style={{ color: themeColors.neutral[700], fontWeight: typography.weight.medium }}>
                Kavin Agrawal
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 style={{
            color: themeColors.secondary.darkBlue,
            fontSize: typography.size.xl,
            fontWeight: typography.weight.semibold
          }} className="mb-4">
            Institutional Affiliations
          </h4>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-lg">
              <img 
                src="/assets/images/brown-logo.png" 
                alt="Brown University"
                className="h-16 object-contain" 
              />
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-lg">
              <img 
                src="/assets/images/iitb-logo.png" 
                alt="IIT Bombay"
                className="h-16 object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;