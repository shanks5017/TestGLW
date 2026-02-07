import { motion } from "framer-motion";
import { CheckCircle2, Building2, ArrowUpRight, Users } from "lucide-react";
import { cn } from "../../lib/utils";

// --- Visual Components ---

const OffersVisual = () => (
    <div className="relative w-full h-auto py-6 md:py-0 md:h-[300px] flex items-center justify-center">
        {/* Central Card */}
        <div className="relative z-10 w-64 bg-white rounded-2xl shadow-xl shadow-blue-900/10 border border-[#0463c7] p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
                <div className="w-10 h-10 rounded-full bg-[#0463c7] flex items-center justify-center text-white">
                    <Building2 size={20} />
                </div>
                <div>
                    <div className="text-sm font-medium text-slate-900">Tech Giant Inc.</div>
                    <div className="text-[10px] text-slate-500">Software Engineer</div>
                </div>
            </div>
            <div className="space-y-2">
                <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
            </div>
            <div className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-xs font-medium border border-green-100 w-fit">
                <CheckCircle2 size={12} />
                <span>Offer Received</span>
            </div>
        </div>

        {/* Floating Nodes - Hidden on mobile for performance */}
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute top-10 right-10 w-12 h-12 bg-white rounded-[50px] shadow-lg border border-slate-50 items-center justify-center text-blue-600"
        >
            <Building2 size={20} />
        </motion.div>
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden md:flex absolute bottom-20 left-10 w-10 h-10 bg-white rounded-[50px] shadow-lg border border-slate-50 items-center justify-center text-indigo-500"
        >
            <ArrowUpRight size={18} />
        </motion.div>

        {/* Orbit Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(59,130,246,0.05)_70%)] rounded-[2.5rem]" />
    </div>
);

const InterviewVisual = () => (
    <div className="relative w-full h-auto md:h-[300px] flex flex-col items-center justify-end pb-0 md:pb-24 gap-4">
        {[
            { company: "StartupX", date: "Tomorrow, 2:00 PM", color: "bg-indigo-500" },
            { company: "BigData Co", date: "Fri, 10:00 AM", color: "bg-indigo-500" },
        ].map((item, i) => (
            <motion.div
                key={i}
                className={cn(
                    "w-[80%] bg-white rounded-2xl shadow-lg shadow-blue-900/5 border border-slate-50 p-4 flex items-center gap-4",
                    "scale-100 z-10"
                )}
            >
                <div className={cn("w-12 h-12 rounded-[50px] flex items-center justify-center text-white shadow-sm", item.color)}>
                    <i className="fa-solid fa-hourglass-end text-xl"></i>
                </div>
                <div>
                    <div className="text-sm font-medium text-slate-900">Interview Scheduled</div>
                    <div className="text-xs text-slate-500">{item.company} • {item.date}</div>
                </div>
            </motion.div>
        ))}
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.3] [mask-image:linear-gradient(to_top,#000_50%,transparent_100%)] pointer-events-none" />
    </div>
);

// --- Section Component ---

export const Stats = () => {
    return (
        <section className="pt-0 pb-6 md:pb-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-8"
                    >
                        <div className="h-px w-8 bg-[#0463c7]/30"></div>
                        <span className="text-[#0463c7] font-bold text-xs tracking-widest uppercase">Proven Results</span>
                        <div className="h-px w-8 bg-[#0463c7]/30"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-[64px] font-normal text-[#0463c7] leading-[1.1] tracking-tight"
                    >
                        <span className="text-slate-900">Receipts? </span>We've got plenty.
                    </motion.h2>
                </div>

                {/* 2-Column Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Card 1: Offers Landed (Text Bottom, Visual Top) */}
                    <div className="bg-[#eff3ff] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 h-auto md:h-[500px] flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500 border border-[#0463c7]">
                        {/* Visual Area */}
                        <div className="flex-1 flex items-center justify-center relative min-h-0 md:min-h-[250px]">
                            <OffersVisual />
                        </div>

                        {/* Text Content */}
                        <div className="mt-6 md:mt-8 relative z-10 text-center md:text-left">
                            <h3 className="text-3xl md:text-[40px] font-normal text-slate-900 mb-3 tracking-tight leading-[1.1]">500+ Offers Landed</h3>
                            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                                From top tech companies to specialized startups
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Interview Rate (Text Top, Visual Bottom) */}
                    <div className="bg-[#eff3ff] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 h-auto md:h-[500px] flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500 border border-[#0463c7]">
                        {/* Text Content */}
                        <div className="mb-6 md:mb-8 relative z-10 text-center md:text-left">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-[50px] md:rounded-[50px] bg-indigo-600 text-white flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-indigo-500/20 mx-auto md:mx-0">
                                <Users size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-3xl md:text-[40px] font-normal text-slate-900 mb-3 tracking-tight leading-[1.1]">89% Interview Rate</h3>
                            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                                For users with optimized profiles.
                            </p>
                        </div>

                        {/* Visual Area */}
                        <div className="flex-1 flex items-end justify-center relative">
                            <InterviewVisual />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
