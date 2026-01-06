import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Pricing } from '../components/home/Pricing';
import { FAQAccordion } from '../components/ui/FAQAccordion';

// Reuse existing FAQs or define new ones matching the vibe
const faqs = [
  {
    id: 1,
    question: 'How does the AI Resume Optimization work?',
    answer: 'Our AI analyzes your projects and experiences, then rewrites them into recruiter-friendly bullet points that match the specific job description you represent.'
  },
  {
    id: 2,
    question: 'Can I track jobs from any site?',
    answer: 'Yes! Our browser extension works on LinkedIn, Indeed, Glassdoor, and most company career pages.'
  },
  {
    id: 3,
    question: 'Is there a free trial?',
    answer: 'We offer a Free Beta plan that includes unlimited job tracking and basic insights. No credit card required.'
  },
  {
    id: 4,
    question: 'Does it help with Visa Sponsorship?',
    answer: 'Absolutely. We automatically flag jobs that are known to sponsor visas, saving you time.'
  }
];

export function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />

      {/* Social Proof Strip - Light */}
      <div className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold">Trusted by students from</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-all duration-500">
            <span className="text-xl font-bold text-slate-800">MIT</span>
            <span className="text-xl font-bold text-slate-800">Stanford</span>
            <span className="text-xl font-bold text-slate-800">Oxford</span>
            <span className="text-xl font-bold text-slate-800">Cambridge</span>
            <span className="text-xl font-bold text-slate-800">UCL</span>
          </div>
        </div>
      </div>

      <Features />

      <Pricing />

      {/* FAQ Section */}
      <section className="py-24 max-w-3xl mx-auto px-4 bg-white">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>
    </div>
  );
}