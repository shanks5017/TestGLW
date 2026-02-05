import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Bot, Check, FileText, Play, Sparkles, UserCircle2, Mic, Clock } from 'lucide-react';

const Card = ({
    title,
    description,
    children,
    className,
    hoverBlue = true,
    delay = 0
}: {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
    hoverBlue?: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay }}
        className={cn(
            "rounded-[2rem] p-6 flex flex-col overflow-hidden relative group transition-all duration-300 hover:shadow-xl",
            "bg-[#e8efff]", // Default state
            hoverBlue && "hover:bg-[#0463c7] hover:text-white", // Hover state
            className
        )}
    >
        <div className="z-10 mb-4 transition-colors">
            <h3 className={cn("text-xl font-semibold mb-2", hoverBlue && "group-hover:text-white")}>{title}</h3>
            {description && <p className={cn("text-sm text-slate-600 leading-relaxed", hoverBlue && "group-hover:text-blue-100")}>{description}</p>}
        </div>
        <div className="flex-1 relative z-10 w-full transition-colors flex items-center justify-center">
            {children}
        </div>
    </motion.div>
);

// --- Visual Components ---

const LinkedInVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-2">
        <div className="relative w-full max-w-md bg-white rounded-xl shadow-sm p-4 border border-slate-100/50">
            <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center relative">
                    <UserCircle2 className="text-slate-300" size={32} />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
                        <Check size={8} className="text-white" strokeWidth={4} />
                    </div>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-3 w-1/3 bg-slate-100 rounded-full" />
                    <div className="h-2 w-1/4 bg-slate-50 rounded-full" />
                </div>
            </div>

            {/* Tooltips/Badges */}
            <div className="absolute top-2 right-12 bg-white shadow-lg rounded-lg py-1 px-3 flex items-center gap-2 border border-slate-100 animate-bounce">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold text-slate-600">Banner</span>
            </div>

            <div className="absolute bottom-2 left-4 bg-white shadow-lg rounded-lg py-1 px-3 flex items-center gap-2 border border-slate-100">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold text-slate-600">Profile Photo</span>
            </div>
        </div>
    </div>
);

const ExtensionVisual = () => (
    <div className="w-full h-full flex items-center justify-center pt-4 pl-4">
        <div className="w-full h-full bg-white rounded-tl-xl border-l border-t border-slate-100 shadow-sm p-3 relative">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-50 pb-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="space-y-2">
                <div className="h-6 w-8 bg-[#D6EAFF] rounded mx-auto mb-2 flex items-center justify-center text-[#0463c7]">
                    <Bot size={14} />
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full" />
                <div className="h-2 w-2/3 bg-slate-50 rounded-full" />
            </div>

            {/* Chrome Logo Float */}
            <div className="absolute -left-3 top-10 bg-white p-1.5 rounded-full shadow-md border border-slate-50">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
            </div>
        </div>
    </div>
);

const InterviewVisual = () => (
    <div className="w-full h-full flex flex-col justify-center">
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

const CoverLetterVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-2">
        <div className="bg-white w-full max-w-[240px] h-32 rounded-xl shadow-sm border border-slate-100 p-4 relative">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded bg-[#E8F3FC] flex items-center justify-center text-[#0463c7]">
                    <FileText size={14} />
                </div>
                <div className="text-[10px] font-bold text-slate-700">Your Cover Letter</div>
            </div>
            <div className="space-y-1.5">
                <div className="text-[8px] font-bold text-slate-400">Dear Recruiter,</div>
                <div className="h-1.5 w-full bg-slate-50 rounded-full" />
                <div className="h-1.5 w-full bg-slate-50 rounded-full" />
                <div className="inline-block bg-green-100 px-1 py-0.5 rounded-[2px]">
                    <div className="h-1 w-12 bg-green-300 rounded-full" />
                </div>
            </div>

            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
                <Sparkles size={14} />
            </div>
        </div>
    </div>
);

const NetworkingVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-2">
        <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <UserCircle2 size={16} className="text-slate-300" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-3/4 bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-green-100 rounded-full" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ElevatorVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-4">
        <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 w-48 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#E8F3FC] flex items-center justify-center text-[#0463c7]">
                        <Mic size={16} />
                    </div>
                    <div className="flex-1">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full mb-1" />
                        <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                    <Clock size={12} />
                    <span>00:30</span>
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-full bg-[#0463c7]"
                        />
                    </div>
                </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-50 rounded-full -z-0" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-amber-50 rounded-full -z-0" />
        </div>
    </div>
);

const SkillGapVisual = () => (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-2">
        <div className="flex gap-2 w-full">
            <div className="bg-white rounded px-2 py-1 shadow-sm border border-slate-100 flex items-center gap-1">
                <Sparkles size={10} className="text-[#0463c7]" />
                <span className="text-[8px] font-bold text-slate-700">Top skills</span>
            </div>
            <div className="bg-green-50 rounded px-2 py-1 border border-green-100 flex items-center gap-1">
                <Check size={10} className="text-green-600" />
                <span className="text-[8px] font-bold text-green-700">Strong match</span>
            </div>
        </div>
        <div className="flex gap-2 w-full">
            <div className="bg-amber-50 rounded px-2 py-1 border border-amber-100 flex items-center gap-1">
                <span className="text-[8px] font-bold text-amber-700">Partial match</span>
            </div>
            <div className="bg-red-50 rounded px-2 py-1 border border-red-100 flex items-center gap-1">
                <span className="text-[8px] font-bold text-red-700">Missing keywords</span>
            </div>
        </div>
    </div>
);

const TemplateVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-2 gap-3">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                className="w-16 h-20 bg-white rounded shadow-sm border border-slate-200 p-2 flex flex-col gap-1.5"
            >
                <div className="w-full h-2 bg-slate-100 rounded-sm" />
                <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-50 rounded-sm" />
                    <div className="w-full h-1 bg-slate-50 rounded-sm" />
                    <div className="w-2/3 h-1 bg-slate-50 rounded-sm" />
                </div>
                <div className="flex gap-1 mt-auto">
                    <div className="w-1/2 h-8 bg-slate-50 rounded-sm" />
                    <div className="w-1/2 h-8 bg-slate-50 rounded-sm" />
                </div>
            </motion.div>
        ))}
    </div>
);

export function ToolsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[54px] tracking-tight leading-[1.1] mb-4"
                    >
                        AI-Powered <span className="text-[#0463c7]">Tools</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Enhance your job-hunting experience with tools for every step
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
                    {/* Row 1 */}
                    <Card title="Linkedin Profile Optimizer" className="md:col-span-6" delay={0.0}>
                        <LinkedInVisual />
                    </Card>
                    <Card title="Chrome Extension" className="md:col-span-3" delay={0.05}>
                        <ExtensionVisual />
                    </Card>
                    <Card title="Interview Preparation" className="md:col-span-3" delay={0.1}>
                        <InterviewVisual />
                    </Card>

                    {/* Row 2 */}
                    <Card title="AI Cover Letter Generator" className="md:col-span-5" delay={0.15}>
                        <CoverLetterVisual />
                    </Card>
                    <Card title="Networking Tracker" className="md:col-span-7" delay={0.2}>
                        <NetworkingVisual />
                    </Card>

                    {/* Row 3 */}
                    <Card title="Elevator Pitch" className="md:col-span-4" delay={0.25}>
                        <ElevatorVisual />
                    </Card>
                    <Card title="Skill gap analyzer" className="md:col-span-4" delay={0.3}>
                        <SkillGapVisual />
                    </Card>
                    <Card title="Resume Templates" className="md:col-span-4" delay={0.35}>
                        <TemplateVisual />
                    </Card>
                </div>
            </div>
        </section>
    );
}
