import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, ArrowRight, CheckCircle2, Play, Search } from "lucide-react";
import { cn } from "../../lib/utils";

import extensionPopup from '../../assets/extension-popup.png';
import { useRef, useState, useEffect } from 'react';

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Hydration mismatch fix: only run on client
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}




const JobSaveVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-900 rounded-xl">
        {/* Background - Job List */}


        {/* Overlay - Extension Popup */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 w-[280px] rounded-xl shadow-2xl border border-white/10 overflow-hidden"
        >
            <img
                src={extensionPopup}
                alt="Extension Analysis"
                className="w-full h-auto"
            />
            {/* Glow effect behind popup */}
            <div className="absolute -inset-4 bg-blue-500/20 blur-xl -z-10 rounded-full" />
        </motion.div>
    </div>
);

const AnalysisVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-4">
        <div className="space-y-3 w-full max-w-[200px]">
            <div className="flex items-center gap-2 mb-4 opacity-60">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="flex flex-wrap gap-1.5">
                {['React', 'TS', 'Node'].map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-medium">
                        ✓ {skill}
                    </span>
                ))}
                <span className="px-2 py-1 rounded-md bg-red-500/20 text-red-300 text-[10px] font-medium animate-pulse">
                    ✗ Docker
                </span>
            </div>
        </div>
    </div>
);

const VisaVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-4 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F3FC] flex items-center justify-center text-[#0463c7]">
                    <Globe size={20} />
                </div>
                <div>
                    <div className="text-xs font-bold text-slate-900">H1B Eligible</div>
                    <div className="text-[10px] text-slate-500">Visa Sponsored</div>
                </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg">
                <CheckCircle2 size={12} strokeWidth={3} />
            </div>
        </div>
    </div>
);

// --- New Visuals ---

const InterviewVisual = () => (
    <div className="w-full h-full flex flex-col justify-center p-4">
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm relative">
            <h4 className="text-slate-900 text-xs font-bold mb-3">Interview Questions</h4>
            <div className="space-y-2">
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-lg p-2">
                        <div className="w-6 h-6 rounded-full bg-[#D6EAFF] flex items-center justify-center shrink-0">
                            <Play size={10} className="text-[#0463c7] ml-0.5" fill="currentColor" />
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const AnalyticsVisual = () => (
    <div className="w-full h-full flex items-end justify-center px-4 overflow-hidden">
        <div className="w-full bg-white rounded-t-xl border-x border-t border-slate-100 shadow-sm p-4">
            <div className="flex items-center gap-8 mb-4 border-b border-slate-50 pb-2">
                <div className="flex items-center gap-2">
                    <Search size={12} className="text-slate-300" />
                    <div className="h-1.5 w-16 bg-slate-50 rounded-full" />
                </div>
                <div className="h-4 w-4 rounded-full bg-slate-100 ml-auto" />
            </div>
            <div className="space-y-2 relative">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-100" />
                        <div className="h-1.5 w-20 bg-slate-50 rounded-full" />
                        <div className="h-1.5 w-12 bg-blue-50 rounded-full ml-auto" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Feature Card Component with hover effects
const FeatureCard = ({
    title,
    description,
    Visual,
    className,
    visualBg = "bg-slate-50",
    index,
    customCardClass = "",
    customVisualClass = ""
}: {
    title: string;
    description: string;
    Visual: React.ComponentType;
    className?: string;
    visualBg?: string;
    index: number;
    customCardClass?: string;
    customVisualClass?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={cn(
            "group relative rounded-[2rem] border border-slate-200/80 overflow-hidden",
            "hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50",
            "transition-all duration-500 ease-out",
            customCardClass,
            className
        )}
    >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0463c7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className={cn("relative z-10 h-full flex flex-col", customCardClass.includes('#e8efff') ? 'bg-[#e8efff]' : '')}>
            {/* Visual Section */}
            <div className={cn(
                "flex-1 min-h-[180px] md:min-h-[220px] rounded-t-[2rem] overflow-hidden relative",
                visualBg,
                customVisualClass
            )}>
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <Visual />
                </div>
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#0463c7_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.02]" />
            </div>

            {/* Text Section */}
            <div className="p-6 md:p-8">
                <div className={cn("inline-flex items-center gap-2 px-2.5 py-1 rounded-full mb-4",
                    customCardClass.includes('#e8efff') ? 'bg-white/50 border border-white/80' : 'bg-slate-50 border border-slate-100'
                )}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0463c7]" />
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Feature 0{index + 1}</span>
                </div>
                <h3 className="text-xl md:text-2xl mb-3 leading-tight tracking-tight group-hover:text-[#0463c7] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>

        {/* Corner accent on hover */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0463c7] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight size={14} />
        </div>
    </motion.div>
);

// Hero Feature Card (larger, for first feature)
const HeroFeatureCard = ({
    title,
    description,
    Visual
}: {
    title: string;
    description: string;
    Visual: React.ComponentType;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden col-span-1 md:col-span-2 row-span-1 border border-[#0463c7]"
    >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0463c7]/20 via-transparent to-[#0463c7]/10 opacity-50" />


        <div className="relative z-10 h-full flex flex-col md:flex-row">
            {/* Text Section */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-px w-8 bg-white/30"></div>
                    <span className="text-white font-bold text-xs tracking-widest uppercase">Core Feature</span>
                    <div className="h-px w-8 bg-white/30"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-normal text-white mb-4 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-md">
                    {description}
                </p>

                {/* CTA Button */}
                <button className="mt-8 flex items-center gap-2 text-[#0463c7] bg-white px-5 py-2.5 rounded-[50px] font-medium text-sm hover:bg-[#E8F3FC] transition-all w-fit group/btn">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Visual Section */}
            <div className="flex-1 min-h-[250px] h-auto md:h-full md:min-h-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-slate-900/50 z-10" />
                <div className="relative md:absolute inset-0 p-6 md:p-8 h-full">
                    <div className="w-full min-h-[250px] md:min-h-0 h-auto md:h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                        <Visual />
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const features = [
    {
        title: "Smart Job Match Extension",
        description: "Instant fit score and keyword analysis for any job posting.",
        Visual: JobSaveVisual,
        visualBg: "bg-gradient-to-br from-slate-50 to-slate-100"
    },
    {
        title: "AI Resume Builder",
        description: "Tailor your resume for every application in seconds.",
        Visual: AnalysisVisual,
        visualBg: "bg-[#0F172A]",
        customCardClass: "!bg-[#e8efff]"
    },
    {
        title: "Visa Sponsorship Analyzer",
        description: "Instantly see H1B history and green card policies for over 500k companies.",
        Visual: VisaVisual,
        visualBg: "!bg-[#e8efff]",
        customCardClass: "!bg-[#e8efff]",
        customVisualClass: ""
    },
    {
        title: "AI Mock Interviews",
        description: "Practice with realistic questions tailored to your target role.",
        Visual: InterviewVisual,
        visualBg: "!bg-[#e8efff]",
        customCardClass: "!bg-[#e8efff]",
        customVisualClass: ""
    },
    {
        title: "Progress Tracking",
        description: "Visualize your job search funnel and identify bottlenecks.",
        Visual: AnalyticsVisual,
        visualBg: "!bg-[#e8efff]",
        customCardClass: "!bg-[#e8efff]",
        customVisualClass: ""
    }
];

export const Features = () => {
    const ctaRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery("(max-width: 768px)"); // Define breakpoint

    const { scrollYProgress } = useScroll({
        target: ctaRef,
        offset: ["start end", "end start"]
    });

    // Mobile: Static 100% width, no animation. Desktop: 75% -> 100% -> 75%
    const ctaWidthRaw = useTransform(scrollYProgress, [0, 0.5, 1], ["75%", "100%", "75%"]);
    const ctaWidth = isMobile ? "100%" : ctaWidthRaw;

    // Mobile: Static opacity 1 (no fade). Desktop: Fade in/out
    const ctaOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const ctaOpacity = isMobile ? 1 : ctaOpacityRaw;

    return (
        <section className="bg-slate-100/50 relative overflow-hidden py-24 md:py-32">
            {/* Background decorations */}



            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-8"
                    >
                        <div className="h-px w-8 bg-[#0463c7]/30"></div>
                        <span className="text-[#0463c7] font-bold text-xs tracking-widest uppercase">Why Students Choose Us</span>
                        <div className="h-px w-8 bg-[#0463c7]/30"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl tracking-tight leading-[1.1] max-w-3xl mx-auto"
                    >
                        Built for the <span className="text-[#0463c7]">modern job search.</span>
                    </motion.h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Row 1: Item 1 (2 cols) + Item 2 (1 col) */}
                    <HeroFeatureCard
                        title={features[0].title}
                        description={features[0].description}
                        Visual={features[0].Visual}
                    />

                    <FeatureCard
                        title={features[1].title}
                        description={features[1].description}
                        Visual={features[1].Visual}
                        visualBg={features[1].visualBg}
                        customCardClass={features[1].customCardClass}
                        index={1}
                        className="md:col-span-1"
                    />

                    {/* Row 2: Item 3, 4, 5 */}
                    <FeatureCard
                        title={features[2].title}
                        description={features[2].description}
                        Visual={features[2].Visual}
                        visualBg={features[2].visualBg}
                        customCardClass={features[2].customCardClass}
                        customVisualClass={features[2].customVisualClass}
                        index={2}
                    />
                    <FeatureCard
                        title={features[3].title}
                        description={features[3].description}
                        Visual={features[3].Visual}
                        visualBg={features[3].visualBg}
                        customCardClass={features[3].customCardClass}
                        customVisualClass={features[3].customVisualClass}
                        index={3}
                    />
                    <FeatureCard
                        title={features[4].title}
                        description={features[4].description}
                        Visual={features[4].Visual}
                        visualBg={features[4].visualBg}
                        customCardClass={features[4].customCardClass}
                        customVisualClass={features[4].customVisualClass}
                        index={4}
                    />
                </div>
            </div>

            {/* CTA Section - Full Screen Width Transition */}
            <div className="w-full mt-24 md:mt-32 flex justify-end overflow-hidden relative" ref={ctaRef}>
                <motion.div
                    style={{ width: ctaWidth, opacity: ctaOpacity }}
                    className="w-full max-w-[1400px] bg-[#0463c7] rounded-none md:rounded-l-[15rem] md:rounded-r-none p-12 md:p-20 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group mx-auto md:ml-auto md:mr-0"
                >



                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <div className="h-px w-8 bg-white/30"></div>
                            <span className="text-white font-bold text-xs tracking-widest uppercase">Join 2.3M+ students</span>
                            <div className="h-px w-8 bg-white/30"></div>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-normal mb-6 tracking-tight">Track every application in one place</h3>
                        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10">
                            Automatically save jobs from LinkedIn, Indeed, and more with a single click. Organize your search with a powerful Kanban board.
                        </p>

                        <button className="flex items-center gap-3 bg-white text-[#0463c7] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8F3FC] transition-all hover:scale-105 hover:shadow-xl duration-300 mx-auto group/btn">
                            <span>Start Tracking Free</span>
                            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
