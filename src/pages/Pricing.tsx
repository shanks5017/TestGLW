import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, X, Shield, CreditCard, Calendar } from 'lucide-react';
import { cn } from '../utils/cn';

// Floating Particles Component - High Density for Branding
function FloatingParticles() {
  const particles = Array.from({ length: 45 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

// 3 Plans matching Fizens structure with GetLanded content
const plans = [
  {
    name: "Free Beta",
    tag: "Starter Plan",
    price: { monthly: "$0", yearly: "$0" },
    period: "/during beta",
    description: "Perfect for trying things out.",
    features: [
      "Track up to 25 applications",
      "Resume fit scoring",
      "Visa sponsorship insights",
      "One-click job saving",
      "Basic deadline tracking"
    ],
    badge: null,
    gradient: "linear-gradient(135deg, #6B8DFF 0%, var(--color-primary) 100%)",
    btnStyle: "outlined"
  },
  {
    name: "Pro",
    tag: "Standard Plan",
    price: { monthly: "$12", yearly: "$10" },
    originalPrice: "$19",
    period: "/month",
    description: "When you're serious about landing something.",
    features: [
      "Everything in Free",
      "Unlimited job tracking",
      "AI resume optimization",
      "AI cover letter generator",
      "Priority support"
    ],
    badge: "Popular",
    gradient: "linear-gradient(135deg, #6B8DFF 0%, var(--color-primary) 100%)",
    btnStyle: "primary"
  },
  {
    name: "Pro Plus",
    tag: "Advanced Plan",
    price: { monthly: "$29", yearly: "$24" },
    period: "/month",
    description: "For power users who want it all.",
    features: [
      "Everything in Pro",
      "Mock interview practice",
      "Advanced job matching",
      "Career coach access",
      "White-glove support"
    ],
    badge: "Best Choice",
    gradient: "linear-gradient(135deg, #6B8DFF 0%, var(--color-primary) 100%)",
    btnStyle: "outlined"
  }
];

// Compare Plans - Grouped categories like Fizens
const comparisonGroups = [
  {
    category: "Core Features",
    features: [
      { name: "Job Application Tracking", starter: "25 max", standard: "Unlimited", advance: "Unlimited" },
      { name: "Resume Fit Scoring", starter: true, standard: true, advance: true },
      { name: "Visa Sponsorship Insights", starter: true, standard: true, advance: true },
      { name: "One-Click Job Saving", starter: true, standard: true, advance: true },
    ]
  },
  {
    category: "Advanced Features",
    features: [
      { name: "AI Resume Optimization", starter: false, standard: true, advance: true },
      { name: "AI Cover Letter Generator", starter: false, standard: true, advance: true },
      { name: "Mock Interview Practice", starter: false, standard: false, advance: true },
      { name: "Advanced Job Matching", starter: false, standard: false, advance: true },
      { name: "Career Coach Access", starter: false, standard: false, advance: true },
    ]
  },
  {
    category: "Support & Pricing",
    features: [
      { name: "Priority Support", starter: false, standard: true, advance: true },
      { name: "White-Glove Support", starter: false, standard: false, advance: true },
      { name: "Monthly Price", starter: "$0", standard: "$12", advance: "$29" },
      { name: "Annually Price", starter: "$0", standard: "$10/mo", advance: "$24/mo" },
    ]
  }
];

// Testimonials
const testimonials = [
  { name: "Sarah Chen", uni: "Stanford CS '25", quote: "GetLanded helped me track 47 applications and land 3 offers.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { name: "Marcus Johnson", uni: "MIT EECS '24", quote: "The resume scoring feature boosted my response rate from 2% to 18%.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
  { name: "Emma Rodriguez", uni: "UC Berkeley '25", quote: "As an international student, the visa filter is a game-changer.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" }
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax and Scale effects to match Product Page exactly
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const gridScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const tableRowReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">

      {/* GLOBAL DYNAMIC BACKGROUND SYSTEM */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Grid */}
        <motion.div
          style={{ opacity: gridOpacity, scale: gridScale }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />

        {/* Floating Particles */}
        <FloatingParticles />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header - Exact Fizens Replica */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] font-normal leading-tight tracking-[-0.03em] mb-4 font-heading"
          >
            <span className="text-slate-900">Pricing</span> <span className="text-primary">Plans</span>
          </motion.h1>

          {/* Blue Plus Icon */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-[18px] text-slate-900 font-normal mb-10 max-w-2xl mx-auto font-heading"
          >
            No hidden fees. No fake discounts. No gotchas.
          </motion.p>

          {/* Toggle - Fizens Tab Style */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-8"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "text-base font-medium pb-2 border-b-2 transition-all duration-300",
                billingCycle === 'monthly'
                  ? "text-primary border-primary"
                  : "text-slate-400 border-transparent hover:text-slate-600"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={cn(
                "text-base font-medium pb-2 border-b-2 transition-all duration-300 flex items-center gap-2",
                billingCycle === 'yearly'
                  ? "text-primary border-primary"
                  : "text-slate-400 border-transparent hover:text-slate-600"
              )}
            >
              Yearly
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#FFE1F0', color: '#FF0096' }}>-20%</span>
            </button>
          </motion.div>
        </motion.div>

        {/* 3 Pricing Cards - Fizens Layout */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-32"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col overflow-hidden cursor-pointer"
              style={{
                borderRadius: '24px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* Gradient Header */}
              <div
                className="relative p-8 text-white min-h-[180px] flex flex-col justify-between"
                style={{ background: plan.gradient }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3" />

                <div className="relative z-10">
                  {/* Tag/Badge Row */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-sm font-medium opacity-90">{plan.tag}</span>
                    </div>
                    {plan.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold tracking-tight">
                      {billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.originalPrice && billingCycle === 'monthly' && (
                      <span className="text-lg text-white/50 line-through">{plan.originalPrice}</span>
                    )}
                    <span className="text-base text-white/80">{plan.period}</span>
                  </div>
                </div>
              </div>

              {/* White Body - Fizens #F2F4F8 */}
              <div className="flex-1 flex flex-col p-8" style={{ backgroundColor: '#F2F4F8' }}>
                <p className="text-[#666] mb-8 text-[15px] font-medium leading-relaxed">{plan.description}</p>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: plan.badge === 'Popular' ? 'var(--color-primary)' : '#CBD5E1' }}
                      >
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "w-full h-[56px] font-bold text-[16px] transition-all duration-300",
                    plan.btnStyle === 'primary'
                      ? "text-white hover:opacity-95"
                      : "bg-transparent border-2 text-primary hover:bg-primary hover:text-white"
                  )}
                  style={{
                    borderRadius: '40px',
                    backgroundColor: plan.btnStyle === 'primary' ? 'var(--color-primary)' : 'transparent',
                    borderColor: 'var(--color-primary)',
                    boxShadow: plan.btnStyle === 'primary' ? '0px 4px 10px rgba(0, 71, 255, 0.2)' : 'none'
                  }}
                >
                  Get Started Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compare Plans - Exact Fizens Replication */}
        <div className="bg-white pt-20 pb-20 relative overflow-hidden">
          {/* Background Grid - Fizens Style */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-32 max-w-[1296px] mx-auto overflow-hidden"
              style={{
                backgroundColor: '#F5FAFF', // Exactly from subagent
                borderRadius: '24px',
                padding: '40px'
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-[56px] font-bold text-slate-900 tracking-tight font-heading">
                  Compare <span className="text-primary">Plans</span>
                </h2>
              </div>

              {/* Table Header Capsule */}
              <div
                className="grid grid-cols-4 gap-4 mb-4 items-center"
                style={{
                  backgroundColor: '#D0D9F3', // Keep exact Fizens color for table header
                  borderRadius: '40px',
                  height: '72px',
                  padding: '0 32px'
                }}
              >
                <div className="text-primary opacity-60 font-semibold text-xs uppercase tracking-[0.1em] font-heading"></div>
                <div className="text-center font-medium text-[20px] text-primary font-heading">Starter</div>
                <div className="text-center font-medium text-[20px] text-primary font-heading">Standard</div>
                <div className="text-center font-medium text-[20px] text-primary font-heading">Advance</div>
              </div>

              <div className="space-y-2">
                {comparisonGroups.map((group, gi) => (
                  <div key={gi} className="mt-12 first:mt-0">
                    {/* Category Header */}
                    <div className="font-medium text-[20px] text-slate-900 mb-6 px-8 font-heading">
                      {group.category}
                    </div>

                    {/* Features with Staggered Entrance */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                      }}
                      className="space-y-0"
                    >
                      {group.features.map((row, ri) => (
                        <motion.div
                          key={ri}
                          variants={tableRowReveal}
                          className="grid grid-cols-4 gap-4 items-center px-8"
                          style={{
                            height: '64px',
                            borderBottom: '1px solid #E5E7EB'
                          }}
                        >
                          <div className="text-slate-700 text-[18px] leading-[28px] font-normal font-heading">{row.name}</div>

                          <div className="flex justify-center">
                            {row.starter === true ? (
                              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDE7FF' }}>
                                <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                              </div>
                            ) : row.starter === false ? (
                              <div className="w-5 h-5 mx-auto opacity-20"><X className="w-full h-full text-slate-700" /></div>
                            ) : (
                              <span className="text-[18px] text-slate-700 font-medium font-heading">{row.starter}</span>
                            )}
                          </div>

                          <div className="flex justify-center">
                            {row.standard === true ? (
                              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDE7FF' }}>
                                <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                              </div>
                            ) : row.standard === false ? (
                              <div className="w-5 h-5 mx-auto opacity-20"><X className="w-full h-full text-slate-700" /></div>
                            ) : (
                              <span className="text-[18px] text-slate-700 font-medium font-heading">{row.standard}</span>
                            )}
                          </div>

                          <div className="flex justify-center">
                            {row.advance === true ? (
                              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDE7FF' }}>
                                <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                              </div>
                            ) : row.advance === false ? (
                              <div className="w-5 h-5 mx-auto opacity-20"><X className="w-full h-full text-slate-700" /></div>
                            ) : (
                              <span className="text-[18px] text-slate-700 font-medium font-heading">{row.advance}</span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Bottom Table Buttons */}
              <div className="grid grid-cols-4 gap-4 mt-12 px-8">
                <div />
                <div className="flex justify-center">
                  <button
                    className="h-[48px] px-8 text-[16px] font-bold border border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    style={{ borderRadius: '40px' }}
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="h-[48px] px-8 text-[16px] font-bold text-white transition-all hover:opacity-90"
                    style={{ borderRadius: '40px', backgroundColor: 'var(--color-primary)', boxShadow: '0 4px 10px rgba(0, 71, 255, 0.2)' }}
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="h-[48px] px-8 text-[16px] font-bold border border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    style={{ borderRadius: '40px' }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials - Matching Fizens Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-32 max-w-[1200px] mx-auto"
        >
          <h2 className="text-[48px] font-bold text-center mb-4 tracking-tight font-heading">
            What students <span className="text-primary">say</span>
          </h2>
          <p className="text-center text-slate-500 text-xl mb-16">Real stories from students who landed offers.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 hover:shadow-2xl transition-all duration-500"
                style={{ borderRadius: '24px', border: '1px solid #F0F0F0' }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full bg-[#F2F4F8]" />
                  <div>
                    <h4 className="font-bold text-[18px] text-slate-900">{t.name}</h4>
                    <p className="text-sm font-medium text-slate-400">{t.uni}</p>
                  </div>
                </div>
                <p className="text-slate-700 text-[16px] leading-relaxed font-normal">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          <div className="flex items-center gap-3 px-6 py-3" style={{ backgroundColor: '#ECFDF5', borderRadius: '1000px', border: '1px solid #A7F3D0' }}>
            <Shield className="w-5 h-5 text-[#059669]" />
            <span className="text-sm font-bold text-[#047857]">Student Discount Available</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3" style={{ backgroundColor: '#EFF6FF', borderRadius: '1000px', border: '1px solid #BFDBFE' }}>
            <CreditCard className="w-5 h-5 text-[#2563EB]" />
            <span className="text-sm font-bold text-[#1D4ED8]">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3" style={{ backgroundColor: '#F5F3FF', borderRadius: '1000px', border: '1px solid #DDD6FE' }}>
            <Calendar className="w-5 h-5 text-[#7C3AED]" />
            <span className="text-sm font-bold text-[#6D28D9]">Cancel Anytime</span>
          </div>
        </div>

        {/* CTA Banner - Full Fizens Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center relative overflow-hidden p-24"
          style={{
            background: 'linear-gradient(135deg, #6B8DFF 0%, var(--color-primary) 100%)',
            borderRadius: '48px'
          }}
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-[64px] font-bold text-white mb-10 leading-tight tracking-tight">
              Ready to land your dream job?
            </h2>
            <button
              className="text-primary px-12 py-5 font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                backgroundColor: 'white',
                borderRadius: '40px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              Get Started Free
            </button>
          </div>
        </motion.div>

      </div >
    </div >
  );
}