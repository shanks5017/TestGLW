import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const plans = [
    {
        name: "Free Beta",
        price: "$0",
        description: "Everything you need to land your next internship.",
        features: ["Unlimited Job Tracking", "5 AI Resume Scans/mo", "Visa Sponsorship Insights", "Basic Extension Access"],
        popular: false,
        delay: 0
    },
    {
        name: "Pro Career",
        price: "£6",
        description: "Superchange your search with unlimited power.",
        features: ["Unlimited AI Resume Scans", "Cover Letter Writer", "AI Mock Interviews", "Priority Application Support"],
        popular: true,
        delay: 0.1
    },
    {
        name: "Lifetime",
        price: "£99",
        description: "One-time payment. Own the tools forever.",
        features: ["Everything in Pro", "Lifetime Updates", "Exclusive Community", "Founder Support Call"],
        popular: false,
        delay: 0.2
    }
];

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Fizens-style Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.4]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0047FF] text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse" />
                        Pricing
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
                    >
                        Invest in your future for less <br />
                        than a <span className="text-[#0047FF]">Netflix subscription.</span>
                    </motion.h2>

                    {/* Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-4 mt-8"
                    >
                        <span className={cn("text-sm font-semibold transition-colors", !isAnnual ? "text-slate-900" : "text-slate-500")}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-14 h-8 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300 focus:outline-none"
                        >
                            <div className={cn(
                                "w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300",
                                isAnnual ? "translate-x-6" : "translate-x-0"
                            )} />
                        </button>
                        <span className={cn("text-sm font-semibold transition-colors", isAnnual ? "text-slate-900" : "text-slate-500")}>Yearly</span>
                        <div className="text-[10px] font-bold text-[#0047FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                            SAVE 20%
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: plan.delay, duration: 0.5 }}
                            className={cn(
                                "flex flex-col p-8 rounded-[2.5rem] bg-white border transition-all duration-300 relative overflow-hidden group hover:shadow-xl",
                                plan.popular
                                    ? "border-[#0047FF] shadow-lg shadow-blue-500/10 scale-105 z-10"
                                    : "border-slate-100 hover:border-slate-200"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 inset-x-0 h-2 bg-[#0047FF]" />
                            )}

                            {plan.popular && (
                                <div className="absolute top-6 right-6">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0047FF] text-white text-[10px] font-bold uppercase tracking-wide shadow-sm">
                                        <Sparkles size={12} />
                                        Popular
                                    </div>
                                </div>
                            )}

                            <div className="mb-8 mt-4">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="text-slate-500 text-sm mb-6 min-h-[40px] leading-relaxed">{plan.description}</div>
                                <div className="flex items-baseline gap-1">
                                    <span className={cn("text-5xl font-bold tracking-tight", plan.popular ? "text-[#0047FF]" : "text-slate-900")}>{plan.price}</span>
                                    <span className="text-slate-400 font-medium">/mo</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {plan.features.map((f, k) => (
                                    <div key={k} className="flex items-start gap-3 text-slate-600">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                                            plan.popular ? 'bg-blue-50 text-[#0047FF]' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#0047FF]'
                                        )}>
                                            <Check className="w-3 h-3" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full rounded-full h-12 text-sm font-bold shadow-none hover:shadow-lg transition-all",
                                    plan.popular
                                        ? "bg-[#0047FF] hover:bg-[#0037CC] text-white"
                                        : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200"
                                )}
                            >
                                Choose {plan.name}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
