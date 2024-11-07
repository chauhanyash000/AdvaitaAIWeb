import React from 'react';
import { Cpu, BarChart3, ArrowRight, Users, Brain, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Import images
import aiModelImage from '../../assets/images/products/ai-model-dashboard.png';
import analyticsImage from '../../assets/images/products/analytics-dashboard.png';

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

const FeatureHighlight = ({ icon: Icon, title, description }) => (
  <Card className="p-4">
    <CardContent className="p-0">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h4 className="font-semibold text-blue-900">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ProductsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900">
          Breakthrough Intelligence Through Clickstream AI
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Simplifying user behavior analysis for growth-oriented digital companies
        </p>
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
              <Brain size={40} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Intelligent Clickstream Analysis
            </h3>
            <ul className="space-y-3">
              {[
                'AI-powered user behavior prediction',
                'Advanced user segmentation models',
                'Automated retention strategy insights',
                'Product-market fit analysis',
                'Real-time user journey mapping'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-blue-500" />
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
              <Zap size={40} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Growth Intelligence Dashboard
            </h3>
            <ul className="space-y-3">
              {[
                'One-click deep insights generation',
                'Real-time business metrics tracking',
                'Customizable retention analytics',
                'User behavior pattern detection',
                'Actionable growth recommendations'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-blue-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <FeatureHighlight 
          icon={Users}
          title="User Behavior Understanding"
          description="AI-powered analysis of user interactions during app onboarding and beyond"
        />
        <FeatureHighlight 
          icon={Brain}
          title="Predictive Analytics"
          description="Forecast user behavior and identify growth opportunities automatically"
        />
        <FeatureHighlight 
          icon={BarChart3}
          title="Strategic Insights"
          description="Data-driven recommendations for achieving product-market fit"
        />
      </div>
    </div>
  </section>
);

export default ProductsSection;
