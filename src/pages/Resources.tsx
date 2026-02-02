
import { motion } from 'framer-motion';
import { FileText, Download, PlayCircle, BookOpen } from 'lucide-react';

const resources = [
  { type: "Template", title: "Modern Resume Template", desc: "Clean, ATS-friendly resume layout.", icon: FileText },
  { type: "Guide", title: "The Perfect Cover Letter", desc: "Step-by-step writing guide.", icon: BookOpen },
  { type: "Video", title: "Interview Masterclass", desc: "1 hour video course on behavioral answers.", icon: PlayCircle },
  { type: "Checklist", title: "LinkedIn Profile Optimization", desc: "20-point checklist.", icon: Check },
  { type: "Template", title: "Resignation Letter", desc: "Professional templates for leaving.", icon: FileText },
  { type: "Link", title: "Salary Estimator", desc: "Calculator for market rates.", icon: Download },
];

import { Check } from 'lucide-react'; // Fix missing import

export function Resources() {
  return (
    <div className="bg-white pt-20 pb-20 relative overflow-hidden">
      {/* Background Grid - Fizens Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 pt-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight font-heading">
            Free <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Tools, templates, and guides to accelerate your job search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[32px] border border-gray-100 p-8 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-[50px] bg-[#E8F3FC] flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <res.icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{res.type}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{res.title}</h3>
              <p className="text-gray-500">{res.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[40px] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 font-heading">Subscribe to our newsletter</h2>
          <p className="text-gray-400 mb-8">Get the latest career tips delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 outline-none focus:bg-white/20 text-white placeholder:text-gray-500 flex-1" />
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-gray-100">Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  );
}
