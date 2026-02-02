import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { cn } from "../../lib/utils";

const StepCard = ({
    number,
    title,
    description,
    icon: Icon,
    faIcon,
    className,
    delay
}: {
    number: string,
    title: string,
    description: string,
    icon?: any,
    faIcon?: string,
    className?: string,
    delay?: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay || 0 }}
            className={cn(
                "relative flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all duration-300 group",
                className
            )}
        >
            <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-[50px] bg-white border border-slate-200 text-[#0463c7] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {faIcon ? <i className={`${faIcon} text-2xl`}></i> : (Icon && <Icon size={24} />)}
                </div>
                <div className="mt-4 text-center">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">{number}</span>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-[#0463c7] transition-colors tracking-tight">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export const HowItWorks = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Sticky Header */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-px w-8 bg-[#0463c7]/30"></div>
                                <span className="text-[#0463c7] font-bold text-xs tracking-widest uppercase">Introduction</span>
                                <div className="h-px w-8 bg-[#0463c7]/30"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                Simplifying the <br />
                                <span className="text-[#0463c7]">job hunt.</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                                Job hunting today is complex and often confusing. Many candidates spend hours tailoring resumes, checking whether a position sponsors visas and crafting cover letters, only to submit applications into a black box. <br /><br />
                                GetLanded was created to simplify this experience by offering an AI‑powered copilot that lives in your browser and integrates with popular job boards. Our tool does the heavy lifting—matching your skills to open roles, optimizing your documents and ensuring you know whether a job can actually hire you.
                            </p>


                        </motion.div>
                    </div>

                    {/* Right: Steps List */}
                    <div className="flex flex-col gap-6">
                        <StepCard
                            number="01"
                            title="Install the extension"
                            description="Add GetLanded to your browser in seconds. Browse LinkedIn, Indeed, or handshake as you normally would."
                            faIcon="fa-solid fa-download"
                            delay={0.1}
                        />
                        <StepCard
                            number="02"
                            title="AI analyzes every role"
                            description="We automatically scan the JD, check for visa sponsorship, and score your resume against the requirements."
                            faIcon="fa-solid fa-magnifying-glass-chart"
                            delay={0.2}
                        />
                        <StepCard
                            number="03"
                            title="Apply smarter"
                            description="Track your applications in one click, generate tailored resumes, and prepare for interviews with AI."
                            icon={Send}
                            delay={0.3}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
