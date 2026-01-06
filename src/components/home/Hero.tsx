import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { CheckCircle2, Calendar, LayoutDashboard, Briefcase, FileText, Settings } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Hero() {
    return (
        <section className="relative pt-40 pb-32 overflow-hidden bg-white selection:bg-[#EFF4FF] selection:text-[#0040C1]">
            {/* Fizens Background Style: Clean white with deeply blurred ambient orbs */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white -z-20 opacity-70 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Pill Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF4FF] text-[#0040C1] text-sm font-semibold mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#0040C1] animate-pulse" />
                        #1 Career Platform
                    </motion.div>

                    {/* Headline - Big, Bold, Tight Tracking */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl font-bold text-[#171717] mb-8 tracking-tight leading-[1.05]"
                    >
                        Land your <br />
                        <span className="text-[#0040C1]">Dream Job.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        The ultimate career acceleration platform. Track applications, optimize resumes, and get hired faster.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
                    >
                        {/* Primary Button */}
                        {/* Primary Button */}
                        <Link to="/waitlist">
                            <Button variant="primary" size="md">
                                Get Started Free
                            </Button>
                        </Link>

                        {/* Secondary style */}
                        {/* Secondary style */}
                        <Link to="/pricing">
                            <Button variant="outline" size="md" className="border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                                View Pricing
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Device Mockup - Fizens Style: "iPhone" frame with high radius */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full max-w-[1000px] mx-auto"
                    >
                        {/* Decor Elements */}
                        <div className="absolute -left-12 top-20 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl shadow-black/5 animate-float hidden md:block z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-[#171717]">Interview Scheduled</div>
                                    <div className="text-xs text-gray-400">Tomorrow, 10:00 AM</div>
                                </div>
                            </div>
                        </div>


                        <div className="relative rounded-[48px] bg-[#171717] p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] ring-1 ring-white/10 mx-auto border-[4px] border-[#2a2a2a]">
                            <div className="rounded-[40px] overflow-hidden bg-white aspect-[16/10] relative">
                                {/* App Header */}
                                <div className="h-16 border-b border-gray-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
                                    <div className="w-24 h-6 bg-gray-100 rounded-full" />
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-gray-100" />
                                        <div className="w-8 h-8 rounded-full bg-[#0040C1]" />
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="p-8 grid grid-cols-12 gap-8 bg-gray-50/50 h-full">
                                    <div className="col-span-3 space-y-4 hidden md:block">
                                        <div className="h-full bg-white rounded-3xl p-6 border border-gray-100/50 shadow-sm flex flex-col items-center py-8 gap-6">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                                <LayoutDashboard className="w-6 h-6" />
                                            </div>
                                            <div className="w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-50 flex items-center justify-center transition-colors">
                                                <Briefcase className="w-6 h-6" />
                                            </div>
                                            <div className="w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-50 flex items-center justify-center transition-colors">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div className="w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-50 flex items-center justify-center transition-colors">
                                                <Settings className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-9">
                                        <div className="bg-white rounded-3xl p-6 border border-gray-100/50 shadow-sm h-full flex flex-col">
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="text-lg font-bold text-[#171717]">Active Applications</div>
                                                <div className="bg-[#EFF4FF] text-[#0040C1] px-3 py-1 rounded-full font-bold text-xs">12 Pending</div>
                                            </div>
                                            <div className="space-y-3">
                                                {/* Item 1 */}
                                                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-100/50 hover:border-blue-200 hover:shadow-sm transition-all cursor-default">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">T</div>
                                                        <div>
                                                            <div className="text-sm font-bold text-[#171717]">Product Designer</div>
                                                            <div className="text-xs text-gray-500">TechCorp</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">Interview</div>
                                                </div>
                                                {/* Item 2 */}
                                                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-100/50 hover:border-blue-200 hover:shadow-sm transition-all cursor-default">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">S</div>
                                                        <div>
                                                            <div className="text-sm font-bold text-[#171717]">Frontend Dev</div>
                                                            <div className="text-xs text-gray-500">StartupInc</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">Offer</div>
                                                </div>
                                                {/* Item 3 */}
                                                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-100/50 hover:border-blue-200 hover:shadow-sm transition-all cursor-default">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">S</div>
                                                        <div>
                                                            <div className="text-sm font-bold text-[#171717]">UX Researcher</div>
                                                            <div className="text-xs text-gray-500">Studio</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-bold">Applied</div>
                                                </div>
                                            </div>
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
