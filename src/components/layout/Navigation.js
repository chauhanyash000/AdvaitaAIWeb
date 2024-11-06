import React from 'react';
import { themeColors, typography } from '../../styles/theme';
import logo from '../../assets/images/logo.png'; // Import the logo

const Navigation = ({ activeSection, scrollTo }) => {
  const sections = ['Home', 'Products', 'Dashboard', 'About', 'Security'];
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img src={logo} alt="Advaita" className="h-12 w-12" />
              <div>
                <span style={{ 
                  color: themeColors.primary.orange,
                  fontSize: typography.size['2xl'],
                  fontWeight: typography.weight.bold 
                }}>
                  Advaita
                </span>
                <span style={{ 
                  color: themeColors.secondary.darkBlue,
                  fontSize: typography.size.base,
                  display: 'block',
                  fontWeight: typography.weight.medium 
                }}>
                  Clickstream AI
                </span>
              </div>
            </div>
            
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8 items-center">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section.toLowerCase())}
                  className="relative group px-1 py-2"
                >
                  <span style={{
                    color: activeSection === section.toLowerCase() 
                      ? themeColors.primary.orange 
                      : themeColors.secondary.darkBlue,
                    fontSize: typography.size.base,
                    fontWeight: typography.weight.medium
                  }}>
                    {section}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-orange to-primary-teal transition-transform ${
                    activeSection === section.toLowerCase() 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollTo('waitlist')}
              style={{
                backgroundColor: themeColors.primary.orange,
                color: 'white',
                fontSize: typography.size.base,
                fontWeight: typography.weight.semibold
              }}
              className="px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
