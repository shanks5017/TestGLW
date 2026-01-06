import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from '../components/ui/Button';

const plans = [
  {
    name: "Job Seeker",
    price: "$0",
    period: "/mo",
    description: "Essential tools to start your search.",
    features: [
      "Unlimited Application Tracking",
      "1 Resume Builder",
      "3 AI Resume Scans/mo"
    ],
    popular: false,
    btnText: "Start Free",
    btnVariant: "outline"
  },
  {
    name: "Pro Career",
    price: "$29",
    period: "/mo",
    description: "Accelerate your job hunt.",
    features: [
      "Unlimited Resume Builder",
      "Unlimited AI Scans",
      "Cover Letter Generator",
      "LinkedIn Optimization"
    ],
    popular: true,
    btnText: "Get Pro",
    btnVariant: "secondary"
  },
  {
    name: "Coaching",
    price: "$99",
    period: "/mo",
    description: "Expert guidance & mock interviews.",
    features: [
      "Everything in Pro",
      "Dedicated Career Coach",
      "2 Mock Interviews/mo",
      "Priority Support"
    ],
    popular: false,
    btnText: "Get Coached",
    btnVariant: "outline"
  }
];

const featuresList = [
  { name: "Application Tracking", starter: "Unlimited", standard: "Unlimited", advanced: "Unlimited" },
  { name: "Resume Builder", starter: "1 Resume", standard: "Unlimited", advanced: "Unlimited" },
  { name: "AI Resume Scans", starter: "3/mo", standard: "Unlimited", advanced: "Unlimited" },
  { name: "Cover Letter Generator", starter: false, standard: true, advanced: true },
  { name: "LinkedIn Optimization", starter: false, standard: true, advanced: true },
  { name: "Priority Support", starter: false, standard: true, advanced: true },
  { name: "Dedicated Coach", starter: false, standard: false, advanced: true },
  { name: "Mock Interviews", starter: false, standard: false, advanced: "2/mo" },
];

export function Pricing() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <div className="bg-white pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-[#171717] mb-6 tracking-tight"
          >
            Invest in your <span className="text-[#0040C1]">Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 mb-8"
          >
            Transparent pricing. No hidden fees. Cancel anytime.
          </motion.p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <span className={cn("text-sm font-semibold", !isYearly ? "text-[#171717]" : "text-gray-400")}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 rounded-full bg-gray-100 p-1 relative transition-colors hover:bg-gray-200"
            >
              <div className={cn(
                "w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300",
                isYearly ? "translate-x-8" : "translate-x-0"
              )} />
            </button>
            <span className={cn("text-sm font-semibold flex items-center gap-2", isYearly ? "text-[#171717]" : "text-gray-400")}>
              Yearly
              <span className="bg-pink-100 text-pink-600 text-xs px-2 py-0.5 rounded-full font-bold">-20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-8 rounded-[40px] border flex flex-col items-start min-h-[500px]",
                plan.popular
                  ? "bg-gradient-to-b from-[#EFF4FF] to-white border-blue-200 shadow-xl shadow-blue-500/10"
                  : "bg-white border-gray-100 hover:shadow-lg transition-shadow"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 p-8">
                  <span className="bg-[#0040C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
              )}

              <div className="mb-8 w-full">
                <h3 className="text-xl font-bold text-[#171717] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold text-[#171717]">
                    {isYearly && plan.price !== "$0"
                      ? "$" + (parseInt(plan.price.replace("$", "")) * 12 * 0.8).toFixed(0)
                      : plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">{isYearly && plan.price !== "$0" ? "/year" : plan.period}</span>
                </div>
                <p className="text-gray-500 font-medium mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                        plan.popular ? "bg-blue-100 text-[#0040C1]" : "bg-gray-100 text-gray-400"
                      )}>
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto w-full">
                <Button
                  variant={plan.btnVariant as any}
                  className="w-full text-base py-4 mb-4"
                >
                  {plan.btnText}
                </Button>
                <div className="text-center text-xs text-gray-400 font-medium">No credit card required</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-[#171717] text-center mb-16">Compare Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-4 text-gray-400 font-medium w-1/3">Features</th>
                  <th className="py-6 px-4 text-[#171717] font-bold text-center w-1/5">Job Seeker</th>
                  <th className="py-6 px-4 text-[#0040C1] font-bold text-center w-1/5">Pro Career</th>
                  <th className="py-6 px-4 text-[#171717] font-bold text-center w-1/5">Coaching</th>
                </tr>
              </thead>
              <tbody>
                {featuresList.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-4 font-semibold text-[#171717]">{row.name}</td>
                    <td className="py-6 px-4 text-center">
                      {row.starter === true ? <Check className="w-5 h-5 mx-auto text-[#0040C1]" /> : row.starter === false ? <span className="w-4 h-0.5 bg-gray-200 block mx-auto" /> : <span className="font-medium text-gray-600">{row.starter}</span>}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {row.standard === true ? <Check className="w-5 h-5 mx-auto text-[#0040C1]" /> : row.standard === false ? <span className="w-4 h-0.5 bg-gray-200 block mx-auto" /> : <span className="font-medium text-gray-600">{row.standard}</span>}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {row.advanced === true ? <Check className="w-5 h-5 mx-auto text-[#0040C1]" /> : row.advanced === false ? <span className="w-4 h-0.5 bg-gray-200 block mx-auto" /> : <span className="font-medium text-gray-600">{row.advanced}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-[#171717] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
              <h3 className="font-bold text-[#171717] mb-2 text-lg">Can I cancel my subscription?</h3>
              <p className="text-gray-500">Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
              <h3 className="font-bold text-[#171717] mb-2 text-lg">Is there a free trial?</h3>
              <p className="text-gray-500">We offer a Free Forever plan that gives you access to essential features. You can upgrade to Pro or Coaching anytime without losing your data.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
              <h3 className="font-bold text-[#171717] mb-2 text-lg">How does the AI resume scan work?</h3>
              <p className="text-gray-500">Our AI analyzes your resume against job descriptions to identify keywords, formatting issues, and improvement areas to increase your ATS score.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
              <h3 className="font-bold text-[#171717] mb-2 text-lg">Can I switch plans?</h3>
              <p className="text-gray-500">Absolutely. You can upgrade or downgrade your plan instantly from your dashboard settings. Prorated charges may apply for upgrades.</p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-bold mb-6">
            <CheckCircle2 className="w-4 h-4" />
            14-Day Money-Back Guarantee
          </div>
          <h2 className="text-3xl font-bold text-[#171717] mb-4">Try Pro Career Risk-Free</h2>
          <p className="text-gray-500 text-lg">
            We are confident GetLanded will help you speed up your job search. If you are not satisfied with the Pro plan within 14 days, we will refund your payment.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="rounded-[48px] bg-[#0040C1] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Ready to land your dream job?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0040C1] rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all">Get Started Free</button>
            </div>
          </div>
          {/* Abstract Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

      </div>
    </div>
  );
}