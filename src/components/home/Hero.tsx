import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Search, FileText, Globe } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-28 pb-0 overflow-hidden bg-white selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col justify-between">
            {/* Background Grid - Fizens Style */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex-grow w-full">

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full pt-10 relative">

                    {/* Left Column: Headline (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex flex-col items-start text-left relative z-20"
                    >
                        {/* Reduced Size to Fit: 64px max for longer copy */}
                        <h1 className="text-5xl lg:text-[64px] font-normal tracking-tight text-[#111827] leading-[1.1] mb-8">
                            Your AI copilot <br />
                            for the modern <br />
                            <span className="text-slate-400">student job search</span>
                        </h1>

                        {/* Decorative Line */}
                        <div className="h-px w-20 bg-slate-200 mt-2" />
                    </motion.div>

                    {/* Center Column: Phone Mockup (Span 3) - Sleeker Frame */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-3 relative flex justify-center z-30 mt-12 lg:mt-0"
                    >
                        <div className="relative w-[280px] md:w-[300px] aspect-[9/19] bg-[#0c0c0c] rounded-[3rem] p-2 shadow-2xl ring-1 ring-black/5 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
                            {/* Inner Bezel & Screen - Thinner borders for 'Pro' look */}
                            <div className="w-full h-full bg-slate-900 rounded-[2.5rem] overflow-hidden border-[4px] border-[#1a1a1a] relative ring-1 ring-white/10">
                                {/* Dynamic Island */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-b-2xl z-30" />

                                {/* Screen Content */}
                                <div className="w-full h-full bg-white flex flex-col overflow-hidden relative font-sans">
                                    {/* App Header */}
                                    <div className="pt-10 pb-4 px-6 flex justify-between items-center bg-white z-20">
                                        <div>
                                            <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Good Morning</div>
                                            <div className="font-bold text-slate-900 text-lg">Ashwin</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ashwin" alt="Profile" />
                                        </div>
                                    </div>

                                    {/* Main Card */}
                                    <div className="px-5 mb-5 relative z-10">
                                        <div className="bg-[#0047FF] rounded-[2rem] p-6 text-white shadow-xl shadow-blue-500/30 relative overflow-hidden h-[160px] flex flex-col justify-between">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-60" />

                                            <div className="relative z-10 flex justify-between items-start">
                                                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm w-fit border border-white/10">
                                                    <span className="text-[10px] font-bold tracking-wide">Applied</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                                </div>
                                            </div>

                                            <div className="relative z-10">
                                                <div className="text-3xl font-bold tracking-tight mb-1">124</div>
                                                <div className="text-[11px] font-medium opacity-80 tracking-wide">Total Applications</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Chips */}
                                    <div className="px-5 flex gap-4 justify-around mb-6 relative z-10">
                                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                            <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                <Search size={18} />
                                            </div>
                                            <div className="text-[10px] font-medium text-slate-600">Find Jobs</div>
                                        </div>
                                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                            <div className="w-11 h-11 rounded-full bg-white border border-slate-100 text-slate-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                <FileText size={18} />
                                            </div>
                                            <div className="text-[10px] font-medium text-slate-600">Resume</div>
                                        </div>
                                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                            <div className="w-11 h-11 rounded-full bg-white border border-slate-100 text-slate-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                <Briefcase size={18} />
                                            </div>
                                            <div className="text-[10px] font-medium text-slate-600">Interviews</div>
                                        </div>
                                    </div>

                                    {/* Recent List */}
                                    <div className="flex-1 bg-white px-5">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="font-bold text-slate-900 text-xs">Recent Activity</span>
                                            <span className="text-[10px] text-blue-600 font-medium cursor-pointer">View all</span>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { bg: 'bg-black', name: 'Netflix', role: 'SWE Intern', status: 'Applied' },
                                                { bg: 'bg-[#1DB954]', name: 'Spotify', role: 'Design', status: 'Viewed' },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-full ${item.bg} flex items-center justify-center text-white shrink-0 shadow-sm text-[10px] font-bold`}>
                                                        {item.name[0]}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-xs font-bold text-slate-900 truncate">{item.name}</div>
                                                        <div className="text-[10px] text-slate-400 truncate">{item.role}</div>
                                                    </div>
                                                    <div className="text-[10px] font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">{item.status}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Description & CTA (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 flex flex-col justify-center relative z-20 pt-10 lg:pt-0 lg:pl-10"
                    >
                        {/* Plus Icon Decoration */}
                        <div className="mb-6 text-[#0047FF]">
                            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20 0V40M0 20H40" />
                            </svg>
                        </div>

                        <p className="text-base text-slate-600 mb-6 leading-relaxed font-normal">
                            Track every application, optimize your resume, and prepare for interviews all in one dashboard.
                            Built for students applying across LinkedIn, Indeed, and company career sites.
                        </p>

                        {/* Visa Badge - Compact */}
                        <div className="flex items-center gap-2 mb-8 text-xs font-medium text-slate-600 bg-blue-50/50 w-fit px-3 py-1.5 rounded-full border border-blue-100/50">
                            <Globe size={12} className="text-[#0047FF]" />
                            <span>Visa sponsorship insights included</span>
                        </div>

                        {/* Button & Social */}
                        <div className="mb-10">
                            <Link to="/waitlist" className="group block w-fit">
                                <div className="inline-flex items-center bg-[#EFF6FF] rounded-full p-1.5 pr-6 gap-4 transition-transform group-hover:scale-105 origin-left shadow-sm hover:shadow-md border border-[#0047FF]/10">
                                    <div className="bg-[#0047FF] text-white py-2.5 px-5 rounded-full shadow-lg shadow-blue-500/20">
                                        <span className="font-bold text-sm">Get Started Free</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#0047FF] flex items-center justify-center text-white">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative z-10 shadow-sm">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 999}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-bold text-slate-900">2.3M+</span>
                                <span className="text-xs text-slate-500 font-medium">Trusted Users</span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>

            {/* Bottom Banner Area - "JOB SEARCH" */}
            <div className="w-full bg-[#0047FF] h-[300px] mt-[-80px] relative overflow-hidden flex items-end justify-center rounded-t-[4rem] z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Decorative Glows */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-40 mix-blend-multiply" />

                <h2 className="relative z-10 text-[13vw] font-bold text-white/10 tracking-widest pointer-events-none select-none whitespace-nowrap leading-none text-center transform translate-y-[20%]">
                    JOB SEARCH
                </h2>
            </div>
        </section>
    );
}
