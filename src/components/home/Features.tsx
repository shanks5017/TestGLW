import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bookmark, Sparkles, Globe, Target, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

// Bento Grid Item Component
const BentoItem = ({
    title,
    description,
    icon: Icon,
    className,
    delay = 0
}: {
    title: string;
    description: string;
    icon: any;
    className?: string;
    delay?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm border border-black/[0.04] hover:shadow-md transition-all duration-300",
                className
            )}
        >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon size={120} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0047FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-[90%]">
                    {description}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-2 text-[#0047FF] font-medium text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={16} />
                </div>
            </div>
        </motion.div>
    );
};

export const Features = () => {
    return (
        <section className="py-24 bg-slate-50/50 relative overflow-hidden">
            {/* Fizens-style Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.3]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 mb-8"
                    >
                        <Sparkles size={14} className="text-[#0047FF]" />
                        <span>Why Students Choose GetLanded</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
                    >
                        Traditional job boards weren't <br />
                        <span className="text-slate-400">built for students.</span> It shows.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        Your experience isn't "limited." It's just not packaged in corporate language yet. That's where we come in.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[360px]">

                    {/* Feature 1: One-Click Save (Large) */}
                    <BentoItem
                        title="One-click job saving"
                        description="Stop keeping 50 tabs open. Save jobs from LinkedIn, Indeed, and company sites to your central dashboard in one click."
                        icon={Bookmark}
                        className="md:col-span-2 bg-gradient-to-br from-white to-blue-50/20"
                    />

                    {/* Feature 2: AI Analysis */}
                    <BentoItem
                        title="Instant AI Analysis"
                        description="We read the job description for you and tell you exactly what skills are missing from your profile."
                        icon={Sparkles}
                        delay={0.1}
                    />

                    {/* Feature 3: Visa Detection */}
                    <BentoItem
                        title="Visa Sponsorship Detection"
                        description="International student? We automatically flag roles that have sponsored visas in the past. No more guessing."
                        icon={Globe}
                        delay={0.2}
                    />

                    {/* Feature 4: Resume Match (Large) */}
                    <BentoItem
                        title="Resume Match Scoring"
                        description="Get a 0-100 score on how well your resume fits the role, with actionable tips to increase your interview chances."
                        icon={Target}
                        className="md:col-span-2 bg-gradient-to-bl from-white to-blue-50/20"
                        delay={0.3}
                    />

                </div>
            </div>
        </section>
    );
};
