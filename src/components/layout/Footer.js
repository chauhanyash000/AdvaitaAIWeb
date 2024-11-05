import React from 'react';
import { themeColors, typography } from '../../styles/theme';

const Footer = () => (
  <footer style={{ backgroundColor: themeColors.secondary.darkBlue }} className="mt-auto">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="/assets/images/logo.svg" alt="Advaita" className="h-10 w-10" />
          <p style={{ color: themeColors.neutral[300] }} className="text-sm">
            Breakthrough Intelligence with Clickstream AI
          </p>
        </div>
        
        {[
          {
            title: 'Product',
            links: ['Features', 'Security', 'Enterprise', 'Pricing']
          },
          {
            title: 'Company',
            links: ['About', 'Careers', 'Blog', 'Contact']
          },
          {
            title: 'Resources',
            links: ['Documentation', 'API', 'Status', 'Support']
          }
        ].map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 style={{ 
              color: 'white',
              fontSize: typography.size.sm,
              fontWeight: typography.weight.semibold 
            }} className="uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    style={{ color: themeColors.neutral[400] }}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img src="/assets/images/brown-logo.png" alt="Brown University" className="h-8" />
            <img src="/assets/images/iitb-logo.png" alt="IIT Bombay" className="h-8" />
          </div>
          <div style={{ color: themeColors.neutral[400] }} className="text-sm">
            © 2024 Advaita AI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;