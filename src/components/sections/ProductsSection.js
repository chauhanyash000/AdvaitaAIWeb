import React from 'react';
import { Cpu, BarChart3, ArrowRight } from 'lucide-react';
import { themeColors, typography } from '../../styles/theme';

const ProductsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 style={{
          color: themeColors.secondary.darkBlue,
          fontSize: typography.size['4xl'],
          fontWeight: typography.weight.bold
        }}>
          Our Products
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* AI Model Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
          <div className="mb-6">
            <Cpu size={40} style={{ color: themeColors.primary.orange }} />
          </div>
          <h3 style={{
            color: themeColors.secondary.darkBlue,
            fontSize: typography.size['2xl'],
            fontWeight: typography.weight.bold
          }} className="mb-4">
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
                <ArrowRight size={16} style={{ color: themeColors.primary.teal }} />
                <span style={{ color: themeColors.neutral[600] }}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
          <div className="mb-6">
            <BarChart3 size={40} style={{ color: themeColors.primary.orange }} />
          </div>
          <h3 style={{
            color: themeColors.secondary.darkBlue,
            fontSize: typography.size['2xl'],
            fontWeight: typography.weight.bold
          }} className="mb-4">
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
                <ArrowRight size={16} style={{ color: themeColors.primary.teal }} />
                <span style={{ color: themeColors.neutral[600] }}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;