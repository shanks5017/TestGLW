import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Sparkles, Sliders, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/Button';

const features = [
  {
    icon: Sparkles,
    title: "AI Resume Optimization",
    description: "Our AI scans your resume against job descriptions to suggest keywords and formatting changes that beat ATS."
  },
  {
    icon: Sliders,
    title: "Smart Application Tracker",
    description: "Kanban-style board to manage all your applications in one place. Never lose track of a follow-up date."
  },
  {
    icon: Zap,
    title: "Auto-Fill Extension",
    description: "Apply to jobs on LinkedIn, Indeed, and Glassdoor with a single click using our browser extension."
  },
  {
    icon: Shield,
    title: "Interview Prep & Recording",
    description: "Practice answering common questions with our AI interviewer and get instant feedback on your tone and pace."
  },
  {
    icon: Smartphone,
    title: "Mobile Companion App",
    description: "Track your status and receive notifications on the go. Perfect for quick replies to recruiters."
  }
];

export function Product() {
  return (
    <div className="bg-white pt-20 pb-20">

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
          Featured on Product Hunt
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-[#171717] mb-8 tracking-tight"
        >
          Tools built for <br />
          <span className="text-[#0040C1]">Career Growth</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto mb-12"
        >
          We've consolidated the fragmented job search process into one powerful, cohesive platform.
        </motion.p>
        <div className="rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl shadow-blue-900/10">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Product Dashboard" className="w-full" />
        </div>
      </div>

      {/* Feature List */}
      <div className="max-w-[1000px] mx-auto px-6 mb-32">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col md:flex-row items-start gap-8 mb-20 last:mb-0"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#EFF4FF] flex items-center justify-center text-[#0040C1] shrink-0">
              <feature.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#171717] mb-4">{feature.title}</h3>
              <p className="text-xl text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#171717] rounded-[48px] p-12 md:p-24 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to supercharge your search?</h2>
          <Button variant="primary" size="lg" className="bg-white text-[#171717] hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </div>

    </div>
  );
}