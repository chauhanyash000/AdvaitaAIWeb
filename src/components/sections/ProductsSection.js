import React from 'react';
import { Cpu, BarChart3, ArrowRight } from 'lucide-react';
// Import images
import aiModelImage from '../../assets/images/products/ai-model-dashboard.png';
import analyticsImage from '../../assets/images/products/analytics-dashboard.png';
import brownLogo from '../../assets/images/logos/brown-logo.png';
import iitbLogo from '../../assets/images/logos/iitb-logo.png';


const MacBookFrame = ({ children }) => (
  <div className="relative">
    <div className="relative mx-auto w-full max-w-[640px] aspect-[16/10] bg-gray-900 rounded-lg p-4">
      <div className="w-full h-full bg-white rounded-md overflow-hidden">
        {children}
      </div>
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[40%] h-2 bg-gray-800 rounded-b-xl"></div>
    </div>
  </div>
);

const ProductsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900">
          Our Products
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* AI Model Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
          <MacBookFrame>
            <img
              src={aiModelImage}
              alt="AI Model Interface"
              className="w-full h-full object-cover"
            />
          </MacBookFrame>
          <div className="mt-8">
            <div className="mb-6">
              <Cpu size={40} className="text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Advanced AI Model
            </h3>
            <ul className="space-y-3">
              {[
                'Real-time customer behavior analysis',
                'Predictive analytics and forecasting',
                'Automated insight generation',
                'Custom model training capabilities'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-teal-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
          <MacBookFrame>
            <img
              src={analyticsImage}
              alt="Interactive Dashboard Interface"
              className="w-full h-full object-cover"
            />
          </MacBookFrame>
          <div className="mt-8">
            <div className="mb-6">
              <BarChart3 size={40} className="text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Interactive Dashboard
            </h3>
            <ul className="space-y-3">
              {[
                'Customizable visualization tools',
                'Real-time data monitoring',
                'Advanced filtering capabilities',
                'Collaborative features'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-teal-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
