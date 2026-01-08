import { motion } from 'framer-motion';
import { Chrome, Brain, Globe, FileText, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Section, FadeIn } from '../ui/Section';

const features = [
    {
        title: "Global Job Search",
        description: "Access job listings from companies worldwide with our powerful aggregator.",
        icon: Globe,
        colSpan: "md:col-span-2",
        color: "blue",
        delay: 0
    },
    {
        title: "Smart Tracking",
        description: "Visualise your job search progress with a Kanban board.",
        icon: FileText,
        colSpan: "md:col-span-1",
        color: "purple",
        delay: 0.1
    },
    {
        title: "AI Resume Writer",
        description: "Generate tailored resumes that pass ATS filters.",
        icon: Brain,
        colSpan: "md:col-span-1",
        color: "amber",
        delay: 0.2
    },
    {
        title: "Browser Extension",
        description: "Save jobs from LinkedIn or Indeed with a single click.",
        icon: Chrome,
        colSpan: "md:col-span-2",
        color: "green",
        delay: 0.3
    }
];

export function Features() {
    return (
        <Section id="features" className="py-32 bg-white relative">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="mb-20 text-center max-w-3xl mx-auto">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Everything you need to <br /> <span className="text-primary">get hired.</span>
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        Powerful tools designed to streamline your job search and help you land more interviews.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: feature.delay, duration: 0.5 }}
                        className={cn(
                            "group relative rounded-[40px] p-8 md:p-10 border border-gray-100 overflow-hidden hover:shadow-professional-lg transition-all duration-500",
                            feature.colSpan,
                            feature.color === 'blue' && "bg-blue-50/30 hover:bg-blue-50/80",
                            feature.color === 'purple' && "bg-purple-50/30 hover:bg-purple-50/80",
                            feature.color === 'amber' && "bg-amber-50/30 hover:bg-amber-50/80",
                            feature.color === 'green' && "bg-green-50/30 hover:bg-green-50/80",
                        )}
                    >
                        <div className="relative z-10 flex flex-col h-full items-start">
                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm",
                                feature.color === 'blue' && "bg-blue-100 text-blue-600",
                                feature.color === 'purple' && "bg-purple-100 text-purple-600",
                                feature.color === 'amber' && "bg-amber-100 text-amber-600",
                                feature.color === 'green' && "bg-green-100 text-green-600",
                            )}>
                                <feature.icon className="w-7 h-7" strokeWidth={2} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-500 text-lg leading-relaxed">{feature.description}</p>

                            {/* Decor Button */}
                            <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span className="text-sm font-bold flex items-center gap-2">
                                    Learn more <Zap className="w-4 h-4 fill-current" />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
