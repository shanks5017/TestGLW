import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircle2, Briefcase, FileText, Sparkles, TrendingUp, Users } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    },
};

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-white selection:bg-primary-light selection:text-primary">
            {/* Premium Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--color-primary-light)_0%,_transparent_60%)] opacity-70 blur-3xl" />
                <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-blue-100 rounded-full blur-[100px] animate-pulse-slow mix-blend-multiply" />
                <div className="absolute top-[20%] right-[15%] w-80 h-80 bg-purple-100 rounded-full blur-[100px] animate-float delay-1000 mix-blend-multiply" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/60 shadow-glass text-primary text-sm font-semibold mb-8 hover:bg-white transition-all duration-300 transform hover:scale-105"
                    >
                        <Sparkles className="w-4 h-4 fill-current animate-pulse" />
                        <span>The AI Advantage for Your Career</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.05]"
                    >
                        Stop applying. <br className="hidden md:block" />
                        Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 relative inline-block">
                            Getting Hired.
                            {/* Hand-drawn underline effect */}
                            <svg className="absolute w-[110%] h-3 -bottom-2 -left-[5%] text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <motion.path
                                    d="M0 5 Q 50 10 100 5"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                    >
                        The all-in-one AI platform that optimizes your resume, tracks your applications, and prepares you for interviews.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 w-full sm:w-auto"
                    >
                        <Link to="/waitlist" className="w-full sm:w-auto">
                            <Button variant="primary" size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link to="/pricing" className="w-full sm:w-auto">
                            <Button variant="white" size="lg" className="h-14 px-10 text-lg rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto">
                                View Pricing
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Active Dashboard Mockup */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full max-w-6xl mx-auto perspective-1000"
                    >
                        {/* 3D Tilt Effect Wrapper */}
                        <div className="relative rounded-[2rem] bg-slate-900 p-2 md:p-3 shadow-2xl ring-1 ring-white/10 mx-auto transform transition-transform hover:scale-[1.01] duration-700 ease-out">

                            {/* Top Bar Decoration */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

                            {/* Inner Screen */}
                            <div className="rounded-[1.5rem] overflow-hidden bg-slate-50 aspect-[16/10] md:aspect-[2/1] relative shadow-inner group cursor-default">

                                {/* App Top Bar */}
                                <div className="h-12 border-b border-gray-200/50 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md sticky top-0 z-20">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                    </div>
                                    <div className="hidden md:flex bg-gray-100/50 px-4 py-1.5 rounded-full border border-gray-200/50 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                        GetLanded Dashboard v2.0
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-medium text-gray-400">Online</span>
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="p-6 md:p-8 h-full grid grid-cols-12 gap-6 bg-slate-50/50">

                                    {/* Left Sidebar (Desktop) */}
                                    <div className="hidden md:flex col-span-2 flex-col gap-4">
                                        <div className="h-10 w-full bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 px-3">
                                            <div className="w-5 h-5 rounded bg-primary/10" />
                                            <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
                                        </div>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-10 w-full bg-transparent rounded-xl flex items-center gap-3 px-3 opacity-50">
                                                <div className="w-5 h-5 rounded bg-gray-200" />
                                                <div className="h-2 w-2/3 bg-gray-200 rounded-full" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="col-span-12 md:col-span-10 flex flex-col gap-6">

                                        {/* Stats Cards */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {[
                                                { label: 'Applications', val: '124', icon: Briefcase, color: 'blue' },
                                                { label: 'Interviews', val: '8', icon: Users, color: 'purple' },
                                                { label: 'Offers', val: '2', icon: TrendingUp, color: 'green' }
                                            ].map((stat, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -5 }}
                                                    className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-24 sm:h-32 group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                                                            <stat.icon className="w-5 h-5" />
                                                        </div>
                                                        <div className={`text-xs font-bold text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}>
                                                            +12%
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.val}</div>
                                                        <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Activity List */}
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 p-5 space-y-4 overflow-hidden relative">
                                            <div className="text-sm font-bold text-slate-900 mb-2">Recent Activity</div>

                                            {[
                                                { company: 'Netflix', role: 'Senior Frontend Engineer', status: 'Interview Scheduled', time: '2m ago' },
                                                { company: 'Spotify', role: 'Product Designer', status: 'Application Viewed', time: '1h ago' },
                                                { company: 'Airbnb', role: 'Software Engineer', status: 'Applied', time: '4h ago' }
                                            ].map((job, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 1.5 + (i * 0.2) }}
                                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                                                        {job.company[0]}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-semibold text-slate-900 truncate">{job.role}</div>
                                                        <div className="text-xs text-slate-500">{job.company} • {job.time}</div>
                                                    </div>
                                                    <div className="hidden sm:block">
                                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                                                            {job.status}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}

                                            {/* Gradient overlay at bottom */}
                                            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-8 top-1/3 bg-white p-4 rounded-2xl shadow-glass-strong border border-white/50 z-30 hidden lg:block max-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div className="text-sm font-bold text-slate-900">Offer!</div>
                            </div>
                            <div className="text-xs text-slate-500 leading-relaxed">
                                "We'd like to offer you the Senior Developer role..."
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [20, -10, 20] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-glass-strong border border-white/50 z-30 hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Resume Score</div>
                                    <div className="text-xs font-medium text-green-600">98/100 (Excellent)</div>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
