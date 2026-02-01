import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Bot, Check, FileText, Play, Search, Sparkles, UserCircle2 } from 'lucide-react';

const Card = ({
    title,
    children,
    className,
    hoverBlue = true
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
    hoverBlue?: boolean;
}) => (
    <motion.div
        className={cn(
            "rounded-[2rem] p-6 flex flex-col overflow-hidden relative group transition-all duration-300 hover:shadow-xl",
            "bg-[#e8efff]", // Default state
            hoverBlue && "hover:bg-[#0463c7] hover:text-white", // Hover state
            className
        )}
    >
        <h3 className={cn("text-lg mb-4 z-10 transition-colors", hoverBlue && "group-hover:text-white")}>{title}</h3>
        <div className="flex-1 relative z-10 w-full transition-colors">
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
    <div className="w-full h-full flex items-end justify-center px-4 overflow-hidden">
        <div className="w-full bg-white rounded-t-xl border-x border-t border-slate-100 shadow-sm p-4">
            {/* Header */}
            <div className="flex items-center gap-8 mb-4 border-b border-slate-50 pb-2">
                <div className="flex items-center gap-2">
                    <Search size={12} className="text-slate-300" />
                    <div className="h-1.5 w-16 bg-slate-50 rounded-full" />
                </div>
                <div className="h-4 w-4 rounded-full bg-slate-100 ml-auto" />
            </div>

            {/* Rows */}
            <div className="space-y-2 relative">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-100" />
                        <div className="h-1.5 w-20 bg-slate-50 rounded-full" />
                        <div className="h-1.5 w-12 bg-[#E8F3FC] rounded-full ml-auto" />
                    </div>
                ))}

                {/* Chat Popover */}
                <div className="absolute right-0 top-0 w-32 bg-white rounded-lg shadow-xl border border-slate-100 p-2 z-10">
                    <div className="text-[8px] text-slate-400 mb-1">Hi John...</div>
                    <div className="bg-slate-50 p-1 rounded mb-1">
                        <div className="h-1 w-full bg-slate-200 rounded-full" />
                    </div>
                    <div className="bg-[#E8F3FC] p-1 rounded">
                        <div className="h-1 w-2/3 bg-blue-200 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ElevatorVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-4">
        <div className="w-full bg-white rounded-xl shadow-sm border border-slate-100 p-3">
            <div className="text-[10px] font-bold text-slate-900 mb-2">AI Elevator Pitch</div>
            <div className="space-y-1.5">
                <div className="text-[8px] text-slate-400">Hey myself John,</div>
                <div className="h-1 w-full bg-slate-50 rounded-full" />
                <div className="h-1 w-2/3 bg-slate-50 rounded-full" />
                <div className="border-t border-slate-50 mt-2 pt-2 flex justify-end">
                    <div className="text-[8px] text-[#0463c7] font-medium">expert in Js</div>
                </div>
            </div>
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
    <div className="w-full h-full flex items-center justify-center gap-2 overflow-hidden">
        <div className="w-16 h-20 bg-yellow-100 rounded-lg p-1.5 relative top-2 rotate-[-5deg] shadow-sm">
            <div className="text-[6px] font-serif font-bold text-slate-800 mb-1">Hello,</div>
            <div className="space-y-0.5">
                <div className="h-0.5 w-full bg-slate-800/20" />
                <div className="h-0.5 w-full bg-slate-800/20" />
            </div>
        </div>
        <div className="w-16 h-20 bg-slate-800 rounded-lg p-1.5 relative rotate-[5deg] shadow-lg z-10">
            <div className="text-[6px] font-sans font-bold text-white mb-1 tracking-wider">PENELOPE</div>
            <div className="space-y-0.5">
                <div className="h-0.5 w-full bg-white/20" />
                <div className="h-0.5 w-full bg-white/20" />
                <div className="h-0.5 w-2/3 bg-white/20" />
            </div>
        </div>
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
                        Explore our full suite of <br />
                        <span className="text-[#0463c7]">AI tools & features</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg"
                    >
                        Enhance your job-hunting experience with tools for every step
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
                    {/* Row 1 */}
                    <Card title="Linkedin Profile Optimizer" className="md:col-span-6" delay={0.1}>
                        <LinkedInVisual />
                    </Card>
                    <Card title="Chrome Extension" className="md:col-span-3" delay={0.2}>
                        <ExtensionVisual />
                    </Card>
                    <Card title="Interview Preparation" className="md:col-span-3" delay={0.3}>
                        <InterviewVisual />
                    </Card>

                    {/* Row 2 */}
                    <Card title="AI Cover Letter Generator" className="md:col-span-5" delay={0.4}>
                        <CoverLetterVisual />
                    </Card>
                    <Card title="Networking Tracker" className="md:col-span-7" delay={0.5}>
                        <NetworkingVisual />
                    </Card>

                    {/* Row 3 */}
                    <Card title="Elevator Pitch" className="md:col-span-4" delay={0.6}>
                        <ElevatorVisual />
                    </Card>
                    <Card title="Skill gap analyzer" className="md:col-span-4" delay={0.7}>
                        <SkillGapVisual />
                    </Card>
                    <Card title="Resume Templates" className="md:col-span-4" delay={0.8}>
                        <TemplateVisual />
                    </Card>
                </div>
            </div>
        </section>
    );
}
