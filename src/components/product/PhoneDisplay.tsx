import { motion } from 'framer-motion';

export function PhoneDisplay() {
    return (
        <div className="relative w-full max-w-[320px] mx-auto">
            {/* Phone Frame */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
            >
                {/* Phone Body */}
                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/20">
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-20" />

                    {/* Screen */}
                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                        {/* Screen Content - App UI Preview */}
                        <div className="absolute inset-0 p-4 pt-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#5299E5]/20" />
                                <div className="h-2 w-20 bg-slate-100 rounded-full" />
                                <div className="w-8 h-8 rounded-full bg-slate-100" />
                            </div>

                            {/* Stats Card */}
                            <div className="bg-gradient-to-br from-[#5299E5] to-[#3D84D8] rounded-2xl p-4 mb-4 text-white">
                                <div className="text-xs opacity-80 mb-1">Match Score</div>
                                <div className="text-2xl font-bold">92%</div>
                                <div className="mt-2 flex gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                                            <div className="h-full bg-white rounded-full" style={{ width: i <= 4 ? '100%' : '60%' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Job Cards */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-slate-50 rounded-xl p-3 mb-2 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-200" />
                                    <div className="flex-1">
                                        <div className="h-2 w-20 bg-slate-200 rounded-full mb-1" />
                                        <div className="h-1.5 w-14 bg-slate-100 rounded-full" />
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-[#5299E5]/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-[#5299E5]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </motion.div>

            {/* Floating Glow */}
            <div className="absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#5299E5]/20 rounded-full blur-[80px]" />
        </div>
    );
}
