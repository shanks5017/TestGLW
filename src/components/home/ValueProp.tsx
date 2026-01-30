import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ValueProp() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 relative h-full min-h-[600px] flex flex-col justify-center">

                {/* Floating Icons - Decorative */}
                {/* Left Icon */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-10 lg:top-20 left-4 lg:left-20 hidden xl:block z-0"
                >
                    <div className="w-40 h-32 bg-[#F0F5FF] rounded-[50%] flex items-center justify-center shadow-sm">
                        <Briefcase size={56} className="text-[#6D28D9] relative z-10 opacity-90" />
                    </div>
                </motion.div>

                {/* Right Icon */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-32 lg:top-40 right-4 lg:right-20 hidden xl:block z-0"
                >
                    <div className="w-40 h-32 bg-[#F5F3FF] rounded-[50%] flex items-center justify-center shadow-sm">
                        <Zap size={56} className="text-[#0284C7] relative z-10 opacity-90" />
                    </div>
                </motion.div>

                {/* Central Content */}
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h2
                        className="text-5xl md:text-[64px] font-normal text-[#5299E5] leading-[1.1] tracking-tight mb-16"
                    >
                        Your all-in-one <br className="hidden md:block" />
                        solution for managing <br className="hidden md:block" />
                        your job search <br className="hidden md:block" />
                        and career goals.
                    </motion.h2>

                    <motion.div
                        className="flex items-start justify-center gap-3 mb-16"
                    >
                        <div className="h-[3px] w-16 md:w-32 bg-gradient-to-r from-transparent to-[#5299E5] mt-3.5" />
                        <p className="text-black text-lg md:text-xl font-normal leading-tight max-w-2xl">
                            Experience the peace of mind that comes with having your career path under control.
                        </p>
                        <div className="h-[3px] w-16 md:w-32 bg-gradient-to-l from-transparent to-[#5299E5] mt-3.5" />
                    </motion.div>

                    <motion.div>
                        <Link to="/waitlist" className="inline-flex items-center pl-8 pr-2 py-2 bg-[#F3F4F6] rounded-full gap-4 hover:shadow-md transition-all hover:bg-[#EDF2F7] group">
                            <span className="font-medium text-slate-800 text-lg tracking-tight">Get Started Free</span>
                            <div className="w-10 h-10 bg-[#5299E5] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-sm">
                                <ArrowRight size={18} />
                            </div>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
