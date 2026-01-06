import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const plans = [
    {
        name: "Job Seeker",
        price: "$0",
        description: "Perfect for starting your search.",
        features: ["Basic Job Tracker", "5 Resume Scans/mo", "Community Access"],
        popular: false
    },
    {
        name: "Pro Career",
        price: "$29",
        description: "For serious candidates.",
        features: ["Unlimited Job Tracker", "Unlimited Resume Scans", "LinkedIn Optimization", "Cover Letter Writer"],
        popular: true
    },
    {
        name: "Coaching",
        price: "$99",
        description: "Personalized guidance.",
        features: ["Dedicated Career Coach", "Mock Interviews", "Salary Negotiation", "Priority Support"],
        popular: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-[#171717] mb-6 tracking-tight">Flexible Pricing</h2>
                    <p className="text-xl text-gray-500">Choose the plan that suits your career goals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex flex-col p-8 rounded-[32px] border ${plan.popular ? 'border-[#0040C1] bg-[#EFF4FF]/30' : 'border-gray-100 bg-white'}`}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-[#171717] mb-2">{plan.name}</h3>
                                <div className="text-gray-500 mb-6">{plan.description}</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-[#171717]">{plan.price}</span>
                                    <span className="text-gray-400">/month</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((f, k) => (
                                    <div key={k} className="flex items-center gap-3 text-gray-600">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-[#0040C1] text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {f}
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                className="w-full"
                                withIcon={plan.popular}
                            >
                                Choose Plan
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
