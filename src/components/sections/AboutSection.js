import React from 'react';
import { themeColors, typography } from '../../styles/theme';

// Import images
import yashImage from '../../assets/images/founders/yash-chauhan.png';
import kavinImage from '../../assets/images/founders/kavin-agrawal.png';
import brownLogo from '../../assets/images/logos/brown-logo.png';
import iitbLogo from '../../assets/images/logos/iitb-logo.png';

const FounderProfile = ({ image, name, title }) => (
  <div className="flex items-center space-x-4">
    <div className="w-20 h-20 overflow-hidden border-2 border-gray-200 flex-shrink-0">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover" 
      />
    </div>
    <div>
      <p style={{ 
        color: themeColors.neutral[700], 
        fontWeight: typography.weight.medium 
      }}>
        {name}
      </p>
      <p style={{ 
        color: themeColors.neutral[500],
        fontSize: typography.size.sm
      }}>
        {title}
      </p>
    </div>
  </div>
);

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
        <div className="space-y-8">
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
            }} className="mb-6">
              Founded By
            </h4>
            <div className="space-y-4">
              <FounderProfile 
                image={yashImage}
                name="Yash Chauhan"
              />
              <FounderProfile 
                image={kavinImage}
                name="Kavin Agrawal"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 style={{
            color: themeColors.secondary.darkBlue,
            fontSize: typography.size.xl,
            fontWeight: typography.weight.semibold
          }} className="mb-4">
            Founders Background
          </h4>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
              <img 
                src={brownLogo}
                alt="Brown University"
                className="h-16 object-contain" 
              />
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
              <img 
                src={iitbLogo}
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
