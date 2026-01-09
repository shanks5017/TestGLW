import { motion } from "framer-motion";
import { Download, Sparkles, Send } from "lucide-react";
import { cn } from "../../lib/utils";

const StepCard = ({
    number,
    title,
    description,
    icon: Icon,
    className,
    delay
}: {
    number: string,
    title: string,
    description: string,
    icon: any,
    className?: string,
    delay: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "relative flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all duration-300 group",
                className
            )}
        >
            <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-[#0047FF] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                </div>
                <div className="mt-4 text-center">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">{number}</span>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0047FF] transition-colors">{title}</h3>
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0047FF] text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse" />
                                Simple Process
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.05]">
                                From job discovery <br />
                                to offer in <span className="text-[#0047FF]">three steps.</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                                We've streamlined the chaotic student job search into a linear, predictable workflow.
                            </p>

                            <div className="mt-12 hidden lg:block">
                                <img
                                    src="https://cdn.dribbble.com/users/1299330/screenshots/14686082/media/64cc90e2277d079313cb8770d3027783.png?resize=800x600&vertical=center"
                                    alt="Process Abstract"
                                    className="rounded-3xl shadow-2xl border border-slate-100 opacity-80"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Steps List */}
                    <div className="flex flex-col gap-6">
                        <StepCard
                            number="01"
                            title="Install the extension"
                            description="Add GetLanded to your browser in seconds. Browse LinkedIn, Indeed, or handshake as you normally would."
                            icon={Download}
                            delay={0.1}
                        />
                        <StepCard
                            number="02"
                            title="AI analyzes every role"
                            description="We automatically scan the JD, check for visa sponsorship, and score your resume against the requirements."
                            icon={Sparkles}
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
