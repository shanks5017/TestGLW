import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, Brain, Globe, FileText } from 'lucide-react';
import { cn } from '../../utils/cn';

const features = [
    {
        title: "Global Job Search",
        description: "Access job listings from companies worldwide.",
        icon: Globe,
        colSpan: "md:col-span-2",
    },
    {
        title: "Application Tracking",
        description: "Visualise your job search progress.",
        icon: FileText,
        colSpan: "md:col-span-1",
    },
    {
        title: "AI Resume Builder",
        description: "Optimize your resume with 99.9% ATS pass rate.",
        icon: Brain,
        colSpan: "md:col-span-1",
    },
    {
        title: "Browser Extension",
        description: "Save jobs from LinkedIn directly to your dashboard.",
        icon: Chrome,
        colSpan: "md:col-span-2",
    }
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-[#171717] mb-6 tracking-tight">
                        Everything you need.
                    </h2>
                    <p className="text-xl text-gray-500 max-w-xl">
                        Powerful features to help you land your dream job with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "group relative rounded-[40px] p-10 bg-[#F9FAFB] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500",
                                feature.colSpan
                            )}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#EFF4FF] flex items-center justify-center text-[#0040C1] mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-8 h-8" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#171717] mb-4">{feature.title}</h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-xs">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
