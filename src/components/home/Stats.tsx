import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatItem = ({ label, value, subtext, delay }: { label: string, value: string, subtext: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <div className="text-5xl md:text-7xl font-bold text-[#0047FF] mb-2 tracking-tight">
                {value}
            </div>
            <div className="text-lg font-bold text-slate-900 mb-2">
                {label}
            </div>
            <div className="text-sm text-slate-500 max-w-[200px]">
                {subtext}
            </div>
        </motion.div>
    );
};

export const Stats = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Receipts? We've got <span className="text-[#0047FF]">plenty.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatItem
                        value="500+"
                        label="Offers Landed"
                        subtext="By students using our tools to track and apply."
                        delay={0}
                    />
                    <StatItem
                        value="89%"
                        label="Got Interviews"
                        subtext="After optimizing their resumes with our AI."
                        delay={0.1}
                    />
                    <StatItem
                        value="50%"
                        label="Faster Search"
                        subtext="Less time guessing, more time preparing."
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};
