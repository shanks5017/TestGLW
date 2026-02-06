import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, CheckCircle, Star, Zap, Bell, User } from 'lucide-react';

// Floating particle component
function FloatingParticle({ delay, duration, x, y, size }: { delay: number; duration: number; x: number; y: number; size: number }) {
    return (
        <motion.div
            className="absolute rounded-full bg-[#0463c7]/30"
            style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 0.6, 0.3, 0.6, 0],
                scale: [0, 1, 0.8, 1, 0],
                y: [0, -20, -10, -30, -50],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
}

// Animated notification badge
function NotificationBadge({ delay }: { delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x: 50 }}
            animate={{
                opacity: [0, 1, 1, 1, 1, 0],
                scale: [0, 1.15, 1, 1, 1.15, 0],
                x: [20, 0, 0, 0, 0, 20],
            }}
            transition={{
                duration: 3.5,
                times: [0, 0.05, 0.1, 0.85, 0.9, 1], // Very fast entry/exit (approx 0.15s)
                ease: "easeInOut",
                delay: delay
            }}
            className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex items-center gap-3 min-w-[160px]"
        >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle size={18} className="text-white" />
            </div>
            <div>
                <p className="text-xs font-semibold text-slate-800">Application Sent!</p>
                <p className="text-[10px] text-slate-400">Just now</p>
            </div>
            <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        </motion.div>
    );
}

// Animated match score card floating
function MatchScoreFloat({ delay }: { delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x: -50, y: 20 }}
            animate={{
                opacity: [0, 1, 1, 1, 1, 0],
                scale: [0, 1.15, 1, 1, 1.15, 0],
                x: [-20, 0, 0, 0, 0, -20],
                y: [10, 0, 0, 0, 0, 10]
            }}
            transition={{
                duration: 3.5,
                times: [0, 0.05, 0.1, 0.85, 0.9, 1],
                ease: "easeInOut",
                delay: delay
            }}
            className="absolute -left-6 top-1/3 bg-white rounded-2xl shadow-xl border border-slate-100 p-3"
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0463c7] to-[#0352a8] flex items-center justify-center shadow-lg shadow-[#0463c7]/30">
                    <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                    <p className="text-xs font-semibold text-slate-800">Match Score</p>
                    <motion.p
                        className="text-lg font-bold text-[#0463c7]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: delay + 0.3, duration: 0.5 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: delay + 0.4 }}
                        >
                            94%
                        </motion.span>
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}

// Job card animation component
function AnimatedJobCard({ index, delay }: { index: number; delay: number }) {
    const companies = [
        { name: "Google", color: "bg-gradient-to-br from-blue-500 to-blue-600", letter: "G" },
        { name: "Meta", color: "bg-gradient-to-br from-blue-600 to-indigo-600", letter: "M" },
        { name: "Apple", color: "bg-gradient-to-br from-slate-800 to-slate-900", letter: "" },
    ];
    const company = companies[index];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
                delay: delay + index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
            className="bg-white rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
        >
            <div className={`w-8 h-8 rounded-lg ${company.color} flex items-center justify-center shadow-sm`}>
                {company.letter ? (
                    <span className="text-white font-bold text-sm">{company.letter}</span>
                ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="h-2 w-16 bg-slate-200 rounded-full mb-1" />
                <div className="h-1.5 w-10 bg-slate-100 rounded-full" />
            </div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + index * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                className="w-5 h-5 rounded-full bg-[#0463c7]/10 flex items-center justify-center"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0463c7]" />
            </motion.div>
        </motion.div>
    );
}

export function PhoneDisplay() {

    return (
        <div
            className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto py-8 lg:py-12"
        >
            {/* Floating Particles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <FloatingParticle
                        key={i}
                        delay={i * 0.5}
                        duration={3 + Math.random() * 2}
                        x={10 + Math.random() * 80}
                        y={20 + Math.random() * 60}
                        size={4 + Math.random() * 8}
                    />
                ))}
            </div>

            {/* Main Phone Container with 3D Effect */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                }}
                className="relative will-change-transform"
            >
                {/* Ambient Glow Behind Phone */}
                <motion.div
                    className="absolute -inset-8 bg-gradient-to-br from-[#0463c7]/40 via-[#0463c7]/20 to-transparent rounded-[4rem] blur-[60px]"
                    animate={{
                        opacity: 0.5,
                        scale: 1,
                    }}
                    transition={{ duration: 0.4 }}
                />

                {/* Phone Frame - Ultra Realistic */}
                <div
                    className="relative"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Phone Body - Titanium Frame */}
                    <div className="relative rounded-[3.2rem] p-[3px] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 shadow-2xl">
                        {/* Inner Frame Bezel */}
                        <div className="rounded-[3rem] p-[2px] bg-gradient-to-b from-slate-700 to-slate-950">
                            {/* Display Area */}
                            <div className="relative rounded-[2.85rem] overflow-hidden bg-slate-950 p-[2px]">
                                {/* Screen Bezel Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-[2.85rem] opacity-30"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(4,99,199,0.3) 0%, transparent 50%, rgba(4,99,199,0.2) 100%)",
                                    }}
                                    animate={{
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />

                                {/* Actual Screen */}
                                <div className="relative rounded-[2.75rem] overflow-hidden bg-white aspect-[9/19.5]">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-0 left-0 right-0 h-10 flex justify-center pt-2 z-30">
                                        <motion.div
                                            className="w-28 h-7 bg-slate-950 rounded-full flex items-center justify-center gap-2"
                                            initial={{ width: "7rem" }}
                                            animate={{
                                                width: "7rem",
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Camera */}
                                            <div className="w-3 h-3 rounded-full bg-slate-800 ring-1 ring-slate-700 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
                                            </div>
                                            {/* Face ID Sensors */}
                                            <div className="w-2 h-2 rounded-full bg-slate-800" />
                                        </motion.div>
                                    </div>

                                    {/* Screen Content */}
                                    <div
                                        className="absolute inset-0 p-4 pt-12 pb-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white antialiased"
                                        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                                    >
                                        {/* Status Bar */}
                                        <div className="flex items-center justify-between mb-4 px-1">
                                            <span className="text-[10px] font-semibold text-slate-800">9:41</span>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4].map(i => (
                                                        <div key={i} className={`w-0.5 rounded-full ${i <= 3 ? 'bg-slate-800' : 'bg-slate-300'}`} style={{ height: 3 + i * 1.5 }} />
                                                    ))}
                                                </div>
                                                <div className="w-4 h-2 rounded-sm bg-slate-800 relative ml-1">
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-[2px] h-1 bg-slate-800 rounded-r-sm" />
                                                    <div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-emerald-500 rounded-sm" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Header */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.5 }}
                                            className="flex items-center justify-between mb-4"
                                        >
                                            <div className="flex items-center gap-2">
                                                <motion.div
                                                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0463c7] to-[#0352a8] flex items-center justify-center shadow-lg shadow-[#0463c7]/20"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <User size={16} className="text-white" />
                                                </motion.div>
                                                <div>
                                                    <p className="text-[11px] font-medium text-slate-800">Welcome back</p>
                                                    <p className="text-[9px] text-slate-400">3 new matches today</p>
                                                </div>
                                            </div>
                                            <motion.div
                                                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center relative"
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Bell size={14} className="text-slate-600" />
                                                <motion.div
                                                    className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 1, type: "spring", stiffness: 300 }}
                                                >
                                                    <span className="text-[7px] font-bold text-white">3</span>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Main Stats Card - Glassmorphism */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                                            className="relative rounded-2xl overflow-hidden mb-4"
                                        >
                                            {/* Animated Gradient Background */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-br from-[#0463c7] via-[#4A8AD4] to-[#0352a8]"
                                                animate={{
                                                    background: [
                                                        "linear-gradient(135deg, #0463c7 0%, #4A8AD4 50%, #0352a8 100%)",
                                                        "linear-gradient(135deg, #4A8AD4 0%, #0352a8 50%, #0463c7 100%)",
                                                        "linear-gradient(135deg, #0352a8 0%, #0463c7 50%, #4A8AD4 100%)",
                                                        "linear-gradient(135deg, #0463c7 0%, #4A8AD4 50%, #0352a8 100%)",
                                                    ]
                                                }}
                                                transition={{ duration: 8, repeat: Infinity }}
                                            />
                                            {/* Glass Overlay */}
                                            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

                                            {/* Content */}
                                            <div className="relative p-4 text-white">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                                                            <Zap size={14} className="text-white" />
                                                        </div>
                                                        <span className="text-xs font-medium opacity-90">Match Score</span>
                                                    </div>
                                                    <motion.div
                                                        className="flex items-center gap-1"
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 1.2 }}
                                                    >
                                                        <Star size={12} className="text-amber-300 fill-amber-300" />
                                                        <span className="text-xs font-medium">Top 5%</span>
                                                    </motion.div>
                                                </div>

                                                {/* Score with Animation */}
                                                <motion.div
                                                    className="flex items-end gap-1 mb-2"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.9, duration: 0.5 }}
                                                >
                                                    <motion.span
                                                        className="text-3xl font-bold"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 1, duration: 0.3 }}
                                                    >
                                                        92
                                                    </motion.span>
                                                    <span className="text-lg font-medium mb-1 opacity-80">%</span>
                                                </motion.div>

                                                {/* Progress Bars */}
                                                <div className="flex gap-1.5">
                                                    {[92, 88, 95, 85, 90].map((val, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden"
                                                            initial={{ opacity: 0, scaleX: 0 }}
                                                            animate={{ opacity: 1, scaleX: 1 }}
                                                            transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                                                        >
                                                            <motion.div
                                                                className="h-full bg-white rounded-full"
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${val}%` }}
                                                                transition={{ delay: 1.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Section Header */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 }}
                                            className="flex items-center justify-between mb-3"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Briefcase size={12} className="text-[#0463c7]" />
                                                <span className="text-xs font-semibold text-slate-700">Top Matches</span>
                                            </div>
                                            <span className="text-[10px] text-[#0463c7] font-medium">See all →</span>
                                        </motion.div>

                                        {/* Job Cards */}
                                        <div className="space-y-2">
                                            {[0, 1, 2].map((i) => (
                                                <AnimatedJobCard key={i} index={i} delay={1.2} />
                                            ))}
                                        </div>

                                        {/* Bottom Home Indicator */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                                            <div className="w-28 h-1 rounded-full bg-slate-900" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Buttons */}
                    <div className="absolute left-0 top-28 w-[3px] h-8 bg-gradient-to-b from-slate-600 to-slate-800 rounded-l-sm" />
                    <div className="absolute left-0 top-40 w-[3px] h-14 bg-gradient-to-b from-slate-600 to-slate-800 rounded-l-sm" />
                    <div className="absolute left-0 top-56 w-[3px] h-14 bg-gradient-to-b from-slate-600 to-slate-800 rounded-l-sm" />
                    <div className="absolute right-0 top-36 w-[3px] h-16 bg-gradient-to-b from-slate-600 to-slate-800 rounded-r-sm" />
                </div>
            </motion.div>

            {/* Floating UI Elements */}
            <NotificationBadge delay={1.8} />
            <MatchScoreFloat delay={2.2} />

            {/* Ambient Orbs */}

            <motion.div
                className="absolute -left-10 top-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
        </div >
    );
}
