import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const stats = [
  { label: 'Students helped', value: '25,000+' },
  { label: 'Offers landed', value: '500+' },
  { label: 'Interview success rate', value: '89%' },
  { label: 'Faster job search', value: '50%' }
];

export function SocialProof() {
  return (
    <section className="section-spacing-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Used by students from leading UK universities
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            Built with feedback from students across the UK job market
          </p>
          <div className="university-logos mb-16">
            <div className="university-logo">
              <div className="university-logo-icon">
                <span>UL</span>
              </div>
              <span className="university-logo-text">University of Liverpool</span>
            </div>
            <div className="university-logo">
              <div className="university-logo-icon">
                <span>UM</span>
              </div>
              <span className="university-logo-text">University of Manchester</span>
            </div>
            <div className="university-logo">
              <div className="university-logo-icon">
                <span>UB</span>
              </div>
              <span className="university-logo-text">University of Bristol</span>
            </div>
            <div className="university-logo">
              <div className="university-logo-icon">
                <span>UBi</span>
              </div>
              <span className="university-logo-text">University of Birmingham</span>
            </div>
            <div className="university-logo">
              <div className="university-logo-icon">
                <span>ULe</span>
              </div>
              <span className="university-logo-text">University of Leeds</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="stats-grid">
          {[
            { label: 'Active beta testers', value: '100+' },
            { label: 'Job boards & company sites supported', value: '100+' },
            { label: 'UK universities represented', value: '5+' },
            { label: 'Public launch', value: 'Jan 2026' }
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}