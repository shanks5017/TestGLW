import { motion } from "framer-motion";
import { Bookmark, Sparkles, Globe, Target, ArrowRight, CheckCircle2, FileText, Zap } from "lucide-react";
import { cn } from "../../lib/utils";

// --- Rich Visual Components for Bento Cards ---

const ResumeScoreVisual = () => (
    <div className="relative w-full h-full min-h-[160px] bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden group-hover:bg-blue-50/30 transition-colors">
        <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-[6px] border-slate-200 border-t-[#0047FF] border-r-[#0047FF] rotate-45 flex items-center justify-center bg-white shadow-sm">
                <div className="text-2xl font-bold text-slate-900 -rotate-45">98</div>
            </div>
            <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/80 text-green-700 text-xs font-bold border border-green-200">
                <CheckCircle2 size={12} />
                <span>Match Found</span>
            </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#0047FF_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03]" />
    </div>
);

const JobSaveVisual = () => (
    <div className="relative w-full h-full min-h-[160px] flex flex-col gap-3 p-4">
        {['Netflix', 'Spotify'].map((company, i) => (
            <motion.div
                key={company}
                initial={{ x: i * 20, opacity: 0.8 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between group-hover:translate-x-1 transition-transform"
            >
                <div className="flex items-center gap-3">
                    <div className={cn("w-8 h-8 rounded-md flex items-center justify-center text-white text-xs font-bold", i === 0 ? "bg-black" : "bg-[#1DB954]")}>
                        {company[0]}
                    </div>
                    <div className="text-xs font-bold text-slate-700">{company}</div>
                </div>
                <div className="text-[#0047FF]">
                    <Bookmark size={16} fill="currentColor" />
                </div>
            </motion.div>
        ))}
        <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 bg-[#0047FF] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 animate-pulse">
                <Bookmark size={18} />
            </div>
        </div>
    </div>
);

const AnalysisVisual = () => (
    <div className="w-full h-full min-h-[140px] bg-slate-900 rounded-xl p-4 overflow-hidden relative border border-slate-800">
        <div className="flex flex-wrap gap-2 relative z-10">
            {['React', 'TypeScript', 'Node.js'].map((skill) => (
                <div key={skill} className="px-2 py-1 rounded-md bg-white/10 text-white/90 text-[10px] border border-white/5 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {skill}
                </div>
            ))}
            <div className="px-2 py-1 rounded-md bg-red-500/20 text-red-200 text-[10px] border border-red-500/20 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Missing: Docker
            </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0047FF] rounded-full blur-[60px] opacity-20" />
    </div>
);

const VisaVisual = () => (
    <div className="w-full h-full min-h-[140px] flex items-center justify-center">
        <div className="relative">
            <div className="absolute inset-0 bg-[#0047FF] blur-2xl opacity-10 rounded-full" />
            <div className="relative bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0047FF]">
                    <Globe size={20} />
                </div>
                <div>
                    <div className="text-xs font-bold text-slate-900">Visa Sponsored</div>
                    <div className="text-[10px] text-slate-400">H1B Eligible</div>
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white">
                    <CheckCircle2 size={10} />
                </div>
            </div>
        </div>
    </div>
);


const BentoItem = ({
    title,
    description,
    className,
    delay = 0,
    visual: Visual
}: {
    title: string;
    description: string;
    className?: string;
    delay?: number;
    visual: React.ComponentType;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "group relative overflow-hidden rounded-[2.5rem] bg-white p-8 border border-slate-100 hover:border-blue-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between",
                className
            )}
        >
            <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[90%]">
                    {description}
                </p>
            </div>

            <div className="mt-auto relative w-full rounded-2xl overflow-hidden min-h-[140px] bg-slate-50/50 group-hover:scale-[1.02] transition-transform duration-500 ease-out border border-slate-100/50">
                <Visual />
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};

export const Features = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.4]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-600 mb-6 uppercase tracking-wider"
                        >
                            <Sparkles size={12} className="text-[#0047FF]" />
                            <span>Why Students Choose Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]"
                        >
                            Built for the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-blue-400">modern job search.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xs text-slate-500 leading-relaxed"
                    >
                        Traditional job boards weren't built for students. We repackage your experience into something companies instantly recognize.
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[420px]">

                    {/* Feature 1: One-Click Save */}
                    <BentoItem
                        title="One-click job saving"
                        description="Stop keeping 50 tabs open. Save jobs from LinkedIn, Indeed, and company sites to your central dashboard."
                        className="md:col-span-1"
                        visual={JobSaveVisual}
                    />

                    {/* Feature 2: AI Analysis */}
                    <BentoItem
                        title="Instant AI Analysis"
                        description="We read the job description for you and tell you exactly what skills are missing from your profile."
                        visual={AnalysisVisual}
                        delay={0.1}
                    />

                    {/* Feature 3: Visa Detection */}
                    <BentoItem
                        title="Visa Sponsorship Detection"
                        description="International student? We automatically flag roles that have sponsored visas in the past."
                        visual={VisaVisual}
                        delay={0.2}
                    />

                    {/* Feature 4: Resume Match (Span 2) */}
                    <BentoItem
                        title="Resume Match Scoring"
                        description="Get a 0-100 score on how well your resume fits the role, with actionable tips to increase your interview chances."
                        className="md:col-span-2 md:flex-row md:items-center md:gap-12"
                        visual={ResumeScoreVisual}
                        delay={0.3}
                    />

                    {/* Feature Highlight Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 bg-[#0047FF] rounded-[2.5rem] p-10 flex flex-col justify-between text-white relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <Zap size={24} fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
                            <p className="text-white/80 text-sm">Join 2.3M+ students getting hired today.</p>
                        </div>

                        <button className="flex items-center justify-between w-full bg-white text-[#0047FF] p-4 rounded-xl font-bold text-sm mt-8 hover:bg-blue-50 transition-colors group-hover:scale-105 duration-300">
                            <span>Get Template</span>
                            <ArrowRight size={16} />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
