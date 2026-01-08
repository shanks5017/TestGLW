import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section, FadeIn } from '../ui/Section';
import { cn } from '../../lib/utils';

const plans = [
    {
        name: "Job Seeker",
        price: "$0",
        description: "Perfect for starting your search.",
        features: ["Basic Job Tracker", "5 Resume Scans/mo", "Community Access"],
        popular: false,
        delay: 0
    },
    {
        name: "Pro Career",
        price: "$29",
        description: "For serious candidates to land faster.",
        features: ["Unlimited Job Tracker", "Unlimited Resume Scans", "LinkedIn Optimization", "Cover Letter Writer"],
        popular: true,
        delay: 0.1
    },
    {
        name: "Coaching",
        price: "$99",
        description: "Personalized expert guidance.",
        features: ["Dedicated Career Coach", "Mock Interviews", "Salary Negotiation", "Priority Support"],
        popular: false,
        delay: 0.2
    }
];

export function Pricing() {
    return (
        <Section id="pricing" className="py-24 bg-white relative">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Flexible plans for everyone.</h2>
                    <p className="text-xl text-slate-500">Start for free, upgrade when you're ready.</p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: plan.delay, duration: 0.5 }}
                        className={cn(
                            "flex flex-col p-8 rounded-[40px] border transition-all duration-300 relative overflow-hidden",
                            plan.popular
                                ? "border-primary bg-primary/[0.02] shadow-professional-xl scale-105 z-10"
                                : "border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg"
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute top-6 right-6">
                                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="text-slate-500 mb-6 min-h-[48px]">{plan.description}</div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                                <span className="text-slate-400 font-medium">/month</span>
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 mb-10">
                            {plan.features.map((f, k) => (
                                <div key={k} className="flex items-start gap-3 text-slate-600">
                                    <div className={cn(
                                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                        plan.popular ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                                    )}>
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium">{f}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant={plan.popular ? 'primary' : 'outline'}
                            className={cn("w-full rounded-full py-4", plan.popular ? "shadow-glow hover:shadow-glow-lg" : "border-slate-200 text-slate-600 hover:bg-slate-50")}
                        >
                            Choose {plan.name}
                        </Button>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
