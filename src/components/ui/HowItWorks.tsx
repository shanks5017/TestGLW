import React from 'react';
import { Download, Zap, Target } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Card } from './Card';

const steps = [
  {
    number: 1,
    icon: Download,
    title: 'Install Extension',
    description: 'Add GetLanded to your browser in seconds. Works across LinkedIn, Indeed, and 500+ job sites.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    number: 2,
    icon: Zap,
    title: 'AI Analyzes Jobs',
    description: 'Our AI reads job descriptions, calculates match scores, and provides personalized recommendations.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    number: 3,
    icon: Target,
    title: 'Land Your Dream Job',
    description: 'Track applications, optimize resumes, and get interview-ready with our comprehensive toolkit.',
    color: 'from-green-400 to-teal-500'
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-headline neon-text mb-6">
            How GetLanded works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From job discovery to offer in three simple steps.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              number: 1,
              icon: Download,
              title: 'Install the extension',
              description: 'Add GetLanded to your browser in seconds. Apply anywhere as usual.',
              color: 'from-cyan-400 to-blue-500'
            },
            {
              number: 2,
              icon: Zap,
              title: 'AI analyzes every role',
              description: 'We read job descriptions, score your resume match, and flag key requirements including visa eligibility where relevant.',
              color: 'from-purple-400 to-pink-500'
            },
            {
              number: 3,
              icon: Target,
              title: 'Apply smarter',
              description: 'Track progress, improve your resume, and prepare for interviews with personalized guidance.',
              color: 'from-green-400 to-teal-500'
            }
          ].map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 200}>
              <Card className="glass-card text-center card-hover relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                </div>
                <div className="pt-8">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Connecting lines for desktop */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <div className="flex justify-between items-center px-8">
            <div className="w-1/3 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-30"></div>
            <div className="w-1/3 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}