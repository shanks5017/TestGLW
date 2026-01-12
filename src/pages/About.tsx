import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '../utils/cn';

const stats = [
  { value: "45 Days", label: "Avg. Hiring Time" },
  { value: "10k+", label: "Offers Accepted" },
  { value: "500+", label: "Partner Companies" },
];

const values = [
  { title: "Empowerment", description: "Giving you the tools to own your career." },
  { title: "Transparency", description: "Demystifying the hiring process." },
  { title: "Innovation", description: "AI-driven insights for competitive advantage." },
  { title: "Community", description: "Supporting you at every step." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Sarah Chen", role: "Head of AI", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Michael Ross", role: "Career Coach Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Emma Wilson", role: "Product Design", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
];

export function About() {
  return (
    <div className="bg-white pt-20 pb-20 relative overflow-hidden">
      {/* Background Grid - Fizens Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-24 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight font-heading"
          >
            The GetLanded <span className="text-primary">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Empowering professionals to find, secure, and thrive in their dream careers.
          </motion.p>
        </div>

        {/* Mosaic Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 h-[400px]">
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[32px] overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" alt="Meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[32px] overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" alt="Analysis" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-2 rounded-[32px] overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600" alt="Office culture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Missions & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-heading">
              We're building the future of <span className="text-primary">hiring.</span>
            </h2>
            <div className="space-y-6">
              {values.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg font-heading">{item.title}</h3>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-[48px] overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="Vision" className="w-full h-full object-cover" />
              {/* Floating Stats Pills */}
              <div className="absolute top-8 right-8 bg-white p-4 rounded-3xl shadow-xl animate-float">
                <div className="text-xs text-gray-400 mb-1">Offers this month</div>
                <div className="text-2xl font-bold text-primary">1,284</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-[48px] p-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-200">
            {stats.map((stat, i) => (
              <div key={i} className="py-4 md:py-0">
                <div className="text-5xl font-bold text-primary mb-2 font-heading">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-heading">Meet the team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-blue-100 transition-all duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 font-heading">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}