import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircle2, Briefcase, FileText, Rocket } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white selection:bg-primary-light selection:text-primary">
            {/* Ambient Background - Electric Blue Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white to-white -z-20 opacity-80 pointer-events-none blur-3xl" />
            <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-float" />
            <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Pill Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/40 shadow-sm backdrop-blur-md text-primary text-sm font-semibold mb-8 hover:bg-white/80 transition-colors cursor-default"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        #1 AI Career Copilot
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]"
                    >
                        Land your <br className="hidden md:block" />
                        <span className="text-primary relative inline-block">
                            Dream Job
                            {/* Underline decoration */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                        <span> faster.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                    >
                        The ultimate AI platform to track applications, optimize resumes, and master interviews.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <Link to="/waitlist">
                            <Button variant="primary" size="lg" className="h-14 px-8 text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link to="/pricing">
                            <Button variant="white" size="lg" className="h-14 px-8 text-lg rounded-full border border-gray-100/50">
                                View Pricing
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Glass Mockup */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full max-w-5xl mx-auto perspective-1000"
                    >
                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 md:-left-12 top-20 bg-white/80 backdrop-blur-xl border border-white/40 p-4 rounded-3xl shadow-glass hidden md:block z-30 transform -rotate-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Offer Received</div>
                                    <div className="text-xs text-slate-500">Google Inc.</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -right-4 md:-right-8 top-40 bg-white/80 backdrop-blur-xl border border-white/40 p-4 rounded-3xl shadow-glass hidden md:block z-30 transform rotate-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary shadow-sm">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Resume Score</div>
                                    <div className="text-xs text-slate-500">Optimized to 98%</div>
                                </div>
                            </div>
                        </motion.div>


                        {/* Main Interface Window */}
                        <div className="relative rounded-[32px] md:rounded-[48px] bg-slate-900 p-2 md:p-4 shadow-2xl ring-1 ring-white/10 mx-auto">
                            <div className="rounded-[24px] md:rounded-[40px] overflow-hidden bg-white aspect-[16/10] relative shadow-inner">
                                {/* App Header */}
                                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="hidden md:flex bg-gray-100 px-4 py-1.5 rounded-lg text-xs font-medium text-gray-500">
                                        app.getlanded.com/dashboard
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-100" />
                                </div>

                                {/* App Content - Abstract Representation */}
                                <div className="p-6 md:p-10 bg-gray-50/50 h-full grid grid-cols-4 gap-6">
                                    {/* Sidebar */}
                                    <div className="hidden md:flex flex-col gap-4 col-span-1">
                                        <div className="h-10 w-full bg-white rounded-xl border border-gray-100 shadow-sm animate-pulse" />
                                        <div className="h-10 w-3/4 bg-transparent rounded-xl" />
                                        <div className="h-10 w-full bg-transparent rounded-xl" />
                                        <div className="h-10 w-5/6 bg-transparent rounded-xl" />
                                    </div>

                                    {/* Main Area */}
                                    <div className="col-span-4 md:col-span-3 flex flex-col gap-6">
                                        {/* Stats Row */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between group hover:border-blue-200 transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center"><Briefcase className="w-4 h-4" /></div>
                                                <div className="h-2 w-12 bg-gray-100 rounded-full" />
                                            </div>
                                            <div className="h-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between group hover:border-green-200 transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-500 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
                                                <div className="h-2 w-12 bg-gray-100 rounded-full" />
                                            </div>
                                            <div className="h-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between group hover:border-purple-200 transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center"><FileText className="w-4 h-4" /></div>
                                                <div className="h-2 w-12 bg-gray-100 rounded-full" />
                                            </div>
                                        </div>

                                        {/* List */}
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 p-4 space-y-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center px-4 gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-gray-200" />
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-2 w-1/3 bg-gray-200 rounded-full" />
                                                        <div className="h-2 w-1/4 bg-gray-100 rounded-full" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
