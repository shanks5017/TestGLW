import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Pricing } from '../components/home/Pricing';
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
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* Hero doesn't use Section wrapper as it has its own load animations */}
      <Hero />

      {/* Social Proof Strip - Light */}
      <Section className="py-12 border-y border-gray-100 bg-gray-50/30" delay={0.2} width="full">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-slate-400 mb-8 uppercase tracking-widest font-semibold">Trusted by students from</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text for now, should be logos */}
            <span className="text-xl font-bold text-slate-900">MIT</span>
            <span className="text-xl font-bold text-slate-900">Stanford</span>
            <span className="text-xl font-bold text-slate-900">Oxford</span>
            <span className="text-xl font-bold text-slate-900">UCL</span>
            <span className="text-xl font-bold text-slate-900">Berkeley</span>
          </div>
        </div>
      </Section>

      <div className="space-y-0">
        <Features />

        <Pricing />

        {/* FAQ Section */}
        <Section className="py-32 max-w-4xl mx-auto bg-white">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-500 text-center mb-16 max-w-2xl mx-auto">Everything you need to know about GetLanded.</p>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </Section>
      </div>

    </div>
  );
}