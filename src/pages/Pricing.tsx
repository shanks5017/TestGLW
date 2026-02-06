import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, Star, Shield, CreditCard, Calendar, CheckCircle2, ArrowRight, Sparkles, Globe } from 'lucide-react';
import { cn } from '../utils/cn';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { Section, FadeIn } from '../components/ui/Section';

// Types
interface Plan {
  id: string;
  name: string;
  badge?: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}

// Comparison Data
type FeatureItem = {
  name: string;
  mobileName: string;
  free: boolean | string;
  pro: boolean | string;
  plus: boolean | string;
};

const coreFeatures: FeatureItem[] = [
  { name: "Private Job Dashboard", mobileName: "Job Dashboard", free: true, pro: true, plus: true },
  { name: "Chrome Extension", mobileName: "Extension", free: true, pro: true, plus: true },
  { name: "Visa Sponsorship Data", mobileName: "Visa Data", free: true, pro: true, plus: true },
  { name: "Basic Resume Scoring", mobileName: "Resume Score", free: true, pro: true, plus: true },
  { name: "Application Tracking", mobileName: "App Tracking", free: "25 Active", pro: "Unlimited", plus: "Unlimited" },
];

const advancedFeatures: FeatureItem[] = [
  { name: "AI Resume Optimization", mobileName: "AI Resume", free: false, pro: true, plus: true },
  { name: "Tailored Cover Letters", mobileName: "Cover Letters", free: false, pro: "Unlimited", plus: "Unlimited" },
  { name: "LinkedIn Profile Audit", mobileName: "LinkedIn Audit", free: false, pro: false, plus: true },
  { name: "Keyword Gap Analysis", mobileName: "Gap Analysis", free: false, pro: true, plus: true },
  { name: "Auto-Fill Applications", mobileName: "Auto-Fill", free: false, pro: true, plus: true },
];

const supportFeatures: FeatureItem[] = [
  { name: "Customer Support", mobileName: "Support", free: "Standard", pro: "Priority", plus: "Priority" },
  { name: "1-on-1 Career Strategy", mobileName: "Career Strategy", free: false, pro: false, plus: true },
  { name: "Mock Interview (Video)", mobileName: "Mock Interview", free: false, pro: false, plus: true },
  { name: "Salary Negotiation", mobileName: "Negotiation", free: false, pro: false, plus: true },
];

// Data
const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free Beta',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for trying things out and getting started.',
    features: [
      'Track up to 25 applications',
      'Basic Resume Scanner (5/mo)',
      'Chrome Extension Access',
      'Standard Support'
    ],
    cta: 'Get Started Free'
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular',
    price: { monthly: 12, yearly: 9 },
    description: 'For serious job seekers who want to land roles faster.',
    features: [
      'Unlimited Application Tracking',
      'AI Resume Tailoring (50/mo)',
      'Visa Sponsorship Insights',
      'LinkedIn Profile Optimizer',
      'Priority Support'
    ],
    recommended: true,
    cta: 'Get Started'
  },
  {
    id: 'pro-plus',
    name: 'Pro Plus',
    badge: 'Best Value',
    price: { monthly: 29, yearly: 24 },
    description: 'Ultimate power for maximizing your career potential.',
    features: [
      'Everything in Pro',
      'Unlimited AI Resume Tailoring',
      'Mock Interview Practice (Unlimited)',
      'Cover Letter Generator',
      '1-on-1 Career Coaching session'
    ],
    cta: 'Get Started'
  }
];

const faqs = [
  {
    id: 1,
    question: 'How does the AI Resume Optimization work?',
    answer: 'Our AI analyzes your projects and experiences, then rewrites them into recruiter-friendly bullet points that match the specific job description you represent.'
  },
  {
    id: 2,
    question: 'Is there a free version?',
    answer: 'Yes! Our Free Beta plan includes 25 job saves and basic resume scanning.'
  },
  {
    id: 3,
    question: 'Does it work for visa sponsorship jobs?',
    answer: 'Absolutely. We specialize in helping international students find H1B and sponsorship-friendly roles.'
  },
  {
    id: 4,
    question: 'Which job boards do you support?',
    answer: 'Currently we support LinkedIn, Indeed, Glassdoor, and 40+ other major job sites.'
  },
  {
    id: 5,
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. You will retain access until the end of your billing period.'
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    quote: "GetLanded helped me track 47 applications and land 3 offers. The resume scoring is a game changer.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    uni: "Stanford '23"
  },
  {
    name: "Rahul Patel",
    role: "Product Manager",
    company: "Microsoft",
    quote: "Detailed information about visa sponsorship saved me so much time. Highly recommend for international students.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    uni: "Georgia Tech '22"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Spotify",
    quote: "The Chrome extension makes saving jobs from LinkedIn incredibly fast. I love the kanban board.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    uni: "RISD '23"
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    company: "Netflix",
    quote: "Finally, a tool that actually helps with the job search rather than just listing jobs. The AI feedback is spot on.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    uni: "UC Berkeley '22"
  },
  {
    name: "Priya Sharma",
    role: "Business Analyst",
    company: "Deloitte",
    quote: "I landed my dream internship in 3 weeks using the networking tracker. It kept me accountable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    uni: "NYU '24"
  }
];

// --- Components ---

// Animated Number
const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
};

// 3D Card Component
const PricingCard = ({ plan, billingCycle, index }: { plan: Plan, billingCycle: 'monthly' | 'yearly', index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 10 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      className={cn(
        "relative rounded-[2rem] p-8 md:p-10 transition-all duration-200 ease-out flex flex-col h-full",
        plan.recommended
          ? "bg-gradient-to-br from-[#0463c7] to-[#034996] text-white shadow-2xl shadow-blue-500/20 scale-105 z-10 border border-transparent"
          : "bg-white text-slate-900 border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-blue-200"
      )}
    >
      {/* Glow Effect for Pro Plan */}
      {plan.recommended && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)] rounded-[2rem] pointer-events-none" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-sm",
          plan.recommended
            ? "bg-white text-[#0463c7] border-white"
            : "bg-blue-50 text-[#0463c7] border-blue-100"
        )}>
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-8 relative z-10">
        <h3 className={cn("text-xl font-bold mb-2", plan.recommended ? "text-white" : "text-slate-900")}>{plan.name}</h3>
        <p className={cn("text-sm leading-relaxed min-h-[40px]", plan.recommended ? "text-blue-100" : "text-slate-500")}>{plan.description}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-8 relative z-10">
        <span className={cn("text-5xl font-bold tracking-tight", plan.recommended ? "text-white" : "text-slate-900")}>
          $<AnimatedNumber value={price} />
        </span>
        <span className={cn("text-base font-medium", plan.recommended ? "text-blue-100" : "text-slate-400")}>/month</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10 flex-1 relative z-10">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
              plan.recommended ? "bg-blue-400/30 text-white" : "bg-blue-50 text-[#0463c7]"
            )}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={cn("text-sm font-medium", plan.recommended ? "text-blue-50" : "text-slate-600")}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className={cn(
        "w-full h-14 rounded-full font-bold text-sm tracking-wide transition-all duration-300 relative z-10 overflow-hidden group",
        plan.recommended
          ? "bg-white text-[#0463c7] hover:bg-blue-50"
          : "bg-white text-slate-900 border-2 border-slate-100 hover:border-[#0463c7] hover:text-[#0463c7]"
      )}>
        <span className="relative z-10">{plan.cta}</span>
        {/* Hover Fill Effect for non-recommended */}
        {!plan.recommended && (
          <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0" />
        )}
      </button>

      {/* Decorative Corner */}
      {plan.recommended && (
        <Sparkles className="absolute top-6 right-6 text-blue-300 opacity-50" />
      )}
    </motion.div>
  );
};



// Trust Marquee
const TrustMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-max animate-marquee-medium gap-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8 items-center">
            {[
              { icon: Shield, text: "Data Privacy Guaranteed" },
              { icon: CreditCard, text: "No Hidden Fees" },
              { icon: Calendar, text: "Cancel Anytime" },
              { icon: CheckCircle2, text: "Money-Back Guarantee" },
              { icon: Sparkles, text: "AI-Powered Analysis" },
              { icon: Globe, text: "Works Worldwide" },
            ].map((item, j) => (
              <div key={j} className="flex items-center gap-2 px-6 py-2 rounded-full border border-slate-100 bg-slate-50/50 backdrop-blur-sm text-slate-500 text-sm font-medium whitespace-nowrap">
                <item.icon size={16} className="text-[#0463c7]" />
                {item.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen relative overflow-hidden font-sans selection:bg-[#0463c7]/20 selection:text-[#0463c7]">

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 md:pt-36 lg:pt-24 pb-24">

        {/* Header */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-[#0463c7]/30" />
            <span className="text-[#0463c7] font-bold text-sm tracking-widest uppercase">Pricing Plans</span>
            <div className="h-px w-8 bg-[#0463c7]/30" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl font-heading font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Simple, transparent <br />
            <span className="text-[#0463c7] relative inline-block">
              pricing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto"
          >
            Start for free, upgrade when you need more power. No hidden fees.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex bg-slate-100 p-1.5 rounded-full relative"
          >
            <div className="absolute inset-y-1.5 inset-x-1.5 bg-white rounded-full shadow-sm transition-all duration-300 w-[calc(50%-6px)]"
              style={{ transform: billingCycle === 'monthly' ? 'translateX(0)' : 'translateX(100%)' }}
            />
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn("relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300", billingCycle === 'monthly' ? "text-slate-900" : "text-slate-500 hover:text-slate-700")}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={cn("relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2", billingCycle === 'yearly' ? "text-slate-900" : "text-slate-500 hover:text-slate-700")}
            >
              Yearly
              <span className="bg-[#0463c7] text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wide">Save 20%</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-32 max-w-[1200px] mx-auto perspective-[2000px]">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} index={i} />
          ))}
        </div>

        {/* Marquee Stripe */}
        <div className="mb-32 full-width">
          <TrustMarquee />
        </div>

        {/* Comparisons */}
        {/* Detailed Comparison Table */}
        <div className="max-w-6xl mx-auto mb-32 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-medium text-slate-900 mb-6">Compare <span className="text-[#0463c7]">Plans</span></h2>
            <p className="text-slate-500">Find the perfect fit for your career goals.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">

            {/* Desktop View (lg+) */}
            <div className="hidden lg:block">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-[#E8F3FC] p-8 text-center items-center">
                <div className="text-left font-bold text-slate-900">Features</div>
                <div className="font-bold text-[#0463c7] text-lg">Free Beta</div>
                <div className="font-bold text-[#0463c7] text-lg">Pro</div>
                <div className="font-bold text-[#0463c7] text-lg">Pro Plus</div>
              </div>

              {/* Core Features */}
              <div className="p-8">
                <h3 className="font-bold text-slate-900 mb-6 text-lg">Core Features</h3>
                <div className="space-y-6">
                  {coreFeatures.map((feature, i) => (
                    <div key={i} className="grid grid-cols-4 text-center items-center border-b border-slate-50 pb-4 last:border-0 last:pb-0 hover:bg-slate-50/50 rounded-lg transition-colors">
                      <div className="text-left text-slate-600 font-medium pl-4">{feature.name}</div>
                      <div className="flex justify-center">
                        {feature.free === true ? <CheckCircle2 size={20} className="text-[#0463c7]" /> : <span className="text-slate-500 text-sm">{feature.free}</span>}
                      </div>
                      <div className="flex justify-center">
                        {feature.pro === true ? <CheckCircle2 size={20} className="text-[#0463c7]" /> : <span className="text-slate-900 font-medium text-sm">{feature.pro}</span>}
                      </div>
                      <div className="flex justify-center">
                        {feature.plus === true ? <CheckCircle2 size={20} className="text-[#0463c7]" /> : <span className="text-slate-900 font-medium text-sm">{feature.plus}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Features */}
              <div className="p-8 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 mb-6 text-lg">Advanced AI Tools</h3>
                <div className="space-y-6">
                  {advancedFeatures.map((feature, i) => (
                    <div key={i} className="grid grid-cols-4 text-center items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <div className="text-left text-slate-600 font-medium pl-4">{feature.name}</div>
                      <div className="flex justify-center">
                        {feature.free ? <CheckCircle2 size={20} className="text-[#0463c7]" /> : <div className="w-5 h-5 rounded-full bg-slate-200" />}
                      </div>
                      <div className="flex justify-center">
                        {feature.pro === true ? <CheckCircle2 size={20} className="text-[#0463c7]" /> : feature.pro ? <span className="text-slate-900 font-medium text-sm">{feature.pro}</span> : <div className="w-5 h-5 rounded-full bg-slate-200" />}
                      </div>
                      <div className="flex justify-center">
                        {feature.plus === true ? <CheckCircle2 size={20} className="text-[#0463c7]" /> : <span className="text-slate-900 font-medium text-sm">{feature.plus}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="p-8">
                <h3 className="font-bold text-slate-900 mb-6 text-lg">Support & Coaching</h3>
                <div className="space-y-6">
                  {supportFeatures.map((feature, i) => (
                    <div key={i} className="grid grid-cols-4 text-center items-center border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                      <div className="text-left text-slate-600 font-medium pl-4">{feature.name}</div>
                      <div className="flex justify-center text-sm text-slate-500">
                        {feature.free ? feature.free : <div className="w-5 h-5 rounded-full bg-slate-200" />}
                      </div>
                      <div className="flex justify-center text-sm font-medium text-slate-900">
                        {feature.pro ? feature.pro : <div className="w-5 h-5 rounded-full bg-slate-200" />}
                      </div>
                      <div className="flex justify-center text-sm font-medium text-slate-900">
                        {feature.plus === true ? <CheckCircle2 size={20} className="text-[#0463c7]" /> : feature.plus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet View (< lg) */}
            <div className="block lg:hidden">
              {/* Sticky Header */}
              <div className="grid grid-cols-3 text-center bg-[#E8F3FC]/90 backdrop-blur-sm sticky top-0 z-20 py-4 px-4 sm:px-6 border-b border-blue-100">
                <div className="font-bold text-[#0463c7] text-sm">Free</div>
                <div className="font-bold text-[#0463c7] text-sm">Pro</div>
                <div className="font-bold text-[#0463c7] text-sm">Plus</div>
              </div>

              {/* Core Features */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-slate-900 mb-6 text-center text-lg">Core Features</h3>
                <div className="space-y-8">
                  {coreFeatures.map((feature, i) => (
                    <div key={i} className="grid grid-cols-3 text-center items-start group">
                      <div className="flex flex-col items-center gap-2 px-1">
                        {feature.free === true ? <CheckCircle2 size={18} className="text-[#0463c7]" /> : <span className="text-slate-500 text-xs font-medium">{feature.free}</span>}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-1 border-x border-slate-100">
                        {feature.pro === true ? <CheckCircle2 size={18} className="text-[#0463c7]" /> : <span className="text-slate-900 text-xs font-bold">{feature.pro}</span>}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-1">
                        {feature.plus === true ? <CheckCircle2 size={18} className="text-[#0463c7]" /> : <span className="text-slate-900 text-xs font-bold">{feature.plus}</span>}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Features */}
              <div className="p-4 sm:p-6 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 mb-6 text-center text-lg">Advanced AI Tools</h3>
                <div className="space-y-8">
                  {advancedFeatures.map((feature, i) => (
                    <div key={i} className="grid grid-cols-3 text-center items-start group">
                      <div className="flex flex-col items-center gap-2 px-1">
                        {feature.free ? <CheckCircle2 size={18} className="text-[#0463c7]" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2" />}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-1 border-x border-slate-100">
                        {feature.pro === true ? <CheckCircle2 size={18} className="text-[#0463c7]" /> : feature.pro ? <span className="text-slate-900 text-xs font-bold">{feature.pro}</span> : <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2" />}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-1">
                        {feature.plus === true ? <CheckCircle2 size={18} className="text-[#0463c7]" /> : <span className="text-slate-900 text-xs font-bold">{feature.plus}</span>}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-slate-900 mb-6 text-center text-lg">Support</h3>
                <div className="space-y-8">
                  {supportFeatures.map((feature, i) => (
                    <div key={i} className="grid grid-cols-3 text-center items-start group">
                      <div className="flex flex-col items-center gap-2 px-1">
                        {feature.free ? <span className="text-slate-900 text-xs font-bold">{feature.free}</span> : <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2" />}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-1 border-x border-slate-100">
                        {feature.pro ? <span className="text-slate-900 text-xs font-bold">{feature.pro}</span> : <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2" />}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-1">
                        {feature.plus === true ? <CheckCircle2 size={18} className="text-[#0463c7]" /> : <span className="text-slate-900 text-xs font-bold">{feature.plus}</span>}
                        <span className="text-[10px] text-slate-900 font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-[80%] mx-auto">{feature.mobileName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Pricing Footer (Shared with responsive grid adjustments) */}
            <div className="p-4 sm:p-6 md:p-8 bg-[#F8FAFC]">
              <h3 className="font-bold text-slate-900 mb-6 text-lg text-center md:text-left">Pricing</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-3 lg:grid-cols-4 text-center items-center border-b border-slate-200 pb-6">
                  <div className="text-left text-slate-600 font-medium pl-4 hidden lg:block">Monthly</div>
                  <div className="text-slate-900 font-bold">Free</div>
                  <div className="text-slate-900 font-bold border-x border-slate-200 lg:border-x-0">$12</div>
                  <div className="text-slate-900 font-bold">$29</div>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 text-center items-center mb-8">
                  <div className="text-left text-slate-600 font-medium pl-4 hidden lg:block">Annually <span className="text-[#0463c7] text-xs font-bold bg-blue-50 px-2 py-0.5 rounded-full ml-2">Save 20%</span></div>
                  <div className="text-slate-900 font-bold">Free</div>
                  <div className="text-slate-900 font-bold border-x border-slate-200 lg:border-x-0">
                    <span className="relative inline-block">$10<span className="absolute left-full top-0.5 text-xs font-normal text-slate-400">/mo</span></span>
                  </div>
                  <div className="text-slate-900 font-bold">
                    <span className="relative inline-block">$24<span className="absolute left-full top-0.5 text-xs font-normal text-slate-400">/mo</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-medium text-slate-900 mb-6">Trusted by students and professionals from top universities and companies</h2>
            <p className="text-slate-500">Join thousands of students landing top offers.</p>
          </div>

          <div className="relative overflow-hidden group">
            <div
              ref={testimonialRef}
              className="flex gap-6 animate-marquee-slow hover:[animation-play-state:paused]"
              style={{ width: 'max-content' }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-[400px] p-8 rounded-3xl bg-slate-50 border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-blue-100" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.role} @ {t.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400 gap-0.5">
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">{t.uni}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* FAQ - Full Width */}
      <Section width="full" className="py-24 bg-white relative z-10">
        <FadeIn className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-500 text-center mb-16 max-w-2xl mx-auto">Everything you need to know about our plans.</p>
        </FadeIn>
        <div className="w-full">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-24">
        {/* Footer CTA */}
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-[#0463c7]" />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">


          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 tracking-tight">Ready to get hired?</h2>
            <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed">
              Join thousands of job seekers who are landing their dream roles faster with GetLanded.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-[#0463c7] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                Get Started Now
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white px-10 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm font-medium text-blue-100 opacity-80">
              <span className="flex items-center gap-1"><CheckCircle2 size={14} /> No credit card needed</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={14} /> 14-day free pro trial</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
