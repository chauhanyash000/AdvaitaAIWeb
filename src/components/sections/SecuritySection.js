import React from 'react';
import { Shield, Lock, Database } from 'lucide-react';
import { themeColors, typography } from '../../styles/theme';

const SecuritySection = () => (
  <section style={{ backgroundColor: themeColors.secondary.darkBlue }} className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-white" style={{
          fontSize: typography.size['4xl'],
          fontWeight: typography.weight.bold
        }}>
          Enterprise-Grade Security
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: 'SOC 2 Type II Compliant',
            description: 'Independently audited security controls and processes'
          },
          {
            icon: Lock,
            title: 'End-to-End Encryption',
            description: 'Data encrypted in transit and at rest using industry standards'
          },
          {
            icon: Database,
            title: 'Data Privacy',
            description: 'GDPR and CCPA compliant data handling procedures'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <item.icon size={32} className="text-white mb-4" />
            <h3 className="text-white mb-2" style={{
              fontSize: typography.size.xl,
              fontWeight: typography.weight.semibold
            }}>
              {item.title}
            </h3>
            <p className="text-neutral-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;