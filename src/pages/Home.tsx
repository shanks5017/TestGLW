import { Hero } from '../components/home/Hero';
import { ValueProp } from '../components/home/ValueProp';
import { Features } from '../components/home/Features';
import { ToolsSection } from '../components/home/ToolsSection';
import { Stats } from '../components/home/Stats';
import { HowItWorks } from '../components/home/HowItWorks';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { Section, FadeIn } from '../components/ui/Section';

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
    <div className="bg-white">

      {/* Hero Section */}
      <Hero />

      {/* Value Proposition Section */}
      <ValueProp />

      {/* Stats / Receipts */}
      <Stats />

      {/* Features Grid ("Traditional job boards...") */}
      <Features />

      {/* How It Works (Three Steps) */}
      <HowItWorks />

      {/* AI Tools Suite */}
      <ToolsSection />

      {/* FAQ Section */}
      {/* FAQ Section */}
      <Section width="full" className="py-24 bg-white">
        <FadeIn className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-500 text-center mb-16 max-w-2xl mx-auto">Everything you need to know about GetLanded.</p>
        </FadeIn>
        <div className="w-full">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

    </div>
  );
}