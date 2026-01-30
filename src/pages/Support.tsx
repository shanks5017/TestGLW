import React from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, MessageCircle, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Support() {
  return (
    <div className="bg-white pt-20 pb-20 relative overflow-hidden">
      {/* Background Grid - Fizens Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Header */}
      <div className="bg-[#E8F3FC] py-24 mb-20 relative z-10">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">How can we help?</h1>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-[#E8F3FC] transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: HelpCircle, title: "Getting Started", desc: "Guide to setting up your profile" },
            { icon: MessageCircle, title: "Billing & Plans", desc: "Manage your subscription" },
            { icon: Mail, title: "Account Settings", desc: "Update email & password" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-[32px] border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer text-center"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900 font-heading">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-heading">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              "How do I import my resume from LinkedIn?",
              "Can I cancel my subscription at any time?",
              "Is my data private and secure?",
              "Do you offer refunds?",
              "How do I contact a career coach?"
            ].map((q, i) => (
              <div key={i} className="p-6 rounded-[24px] border border-gray-100 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                <span className="font-semibold text-slate-900 text-lg">{q}</span>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">+</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-[48px] p-12 md:p-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center font-heading">Still need help?</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-2">Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-2">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-2">Message</label>
                <textarea className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm h-40" placeholder="Describe your issue..." />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
