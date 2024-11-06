import React, { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import AboutSection from './components/sections/AboutSection';
import SecuritySection from './components/sections/SecuritySection';
import WaitlistSection from './components/sections/WaitlistSection';
import { themeColors, typography } from './styles/theme';
//import DashboardSection from './components/sections/DashboardSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'security', 'waitlist'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      backgroundColor: themeColors.secondary.lightBlue,
      fontFamily: typography.fontFamily.sans 
    }} className="min-h-screen flex flex-col">
      <Navigation activeSection={activeSection} scrollTo={scrollTo} />
      
      <div id="home">
        <HeroSection scrollTo={scrollTo} />
      </div>
      
      <div id="products">
        <ProductsSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>

      <div id="dashboard">
        <DashboardSection />
      </div>
  
      <div id="security">
        <SecuritySection />
      </div>


      <div id="waitlist">
        <WaitlistSection />
      </div>

      <Footer />
    </div>
  );
};

export default App;
