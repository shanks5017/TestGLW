import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LaptopDisplay } from './LaptopDisplay';

export function Hero() {
    return (
        <section className="relative pt-24 lg:pt-32 pb-0 overflow-hidden bg-white selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col justify-between">
            {/* Background Grid - Fizens Style */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex-grow w-full">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-4 items-center h-full pt-4 relative">

                    {/* Left Column: Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex flex-col items-start text-left relative z-20 mt-8 lg:mt-20"
                    >
                        {/* Reduced Size to Fit: 64px max for longer copy */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-normal tracking-tight text-[#111827] leading-[1.1] mb-6 lg:mb-8">
                            GetLanded – Your <br />
                            AI Career <br />
                            <span className="text-slate-400">Co‑Pilot</span>
                        </h1>



                        {/* Button with lead-in line */}
                        <div className="mb-8 lg:mb-10 flex items-center gap-4">
                            <div className="w-12 lg:w-16 h-px bg-slate-300" />
                            <Link to="/waitlist" className="group block w-fit">
                                <div className="inline-flex items-center bg-[#EFF6FF] rounded-full p-1.5 pr-6 gap-4 transition-transform group-hover:scale-105 origin-left shadow-sm hover:shadow-md border border-[#0463c7]/10">
                                    <div className="bg-[#0463c7] text-white py-2.5 px-5 rounded-full shadow-lg shadow-[#0463c7]/20">
                                        <span className="font-medium text-sm tracking-tight">Get Started Free</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#0463c7] flex items-center justify-center text-white">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </div>




                    </motion.div>

                    {/* Right Column: 3D Laptop Animation */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-start items-center h-auto py-12 sm:py-20 lg:py-0 z-20 perspective-[3000px] w-full">
                        <div className="transform scale-[0.55] sm:scale-[0.7] md:scale-[0.75] lg:scale-[0.85] xl:scale-100 origin-center lg:origin-left transition-transform duration-500 will-change-transform">
                            <LaptopDisplay />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Banner Area - Infinite Marquee */}
            <div className="max-w-7xl mx-auto px-6 w-full mt-[-60px] md:mt-[-80px] lg:mt-[-110px] relative z-0">
                <div className="w-full bg-[#0463c7] h-[250px] sm:h-[350px] md:h-[450px] relative overflow-hidden flex flex-col justify-center items-center rounded-[3rem]">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                    {/* Decorative Glows */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0463c7] rounded-full blur-[120px] opacity-40 mix-blend-overlay" />

                    {/* Marquee Container */}
                    <div className="relative w-full overflow-hidden py-4 mb-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                        <motion.div
                            className="flex whitespace-nowrap will-change-transform"
                            animate={{ x: "-50%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 15
                            }}
                        >
                            {/* Repeated Text Block for Seamless Loop */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center gap-8 mx-4">
                                    <span className="text-[10vw] font-bold text-white/10 tracking-wider leading-none select-none">
                                        GETLANDED
                                    </span>
                                    <div className="w-4 h-4 rounded-full bg-white/10" />
                                    <span className="text-[10vw] font-bold text-white/10 tracking-wider leading-none select-none">
                                        YOUR AI CAREER COPILOT
                                    </span>
                                    <div className="w-4 h-4 rounded-full bg-white/10" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Separator Line */}
                    <div className="w-96 h-px bg-white/30 rounded-full mb-6 backdrop-blur-md" />

                    {/* Subtitle */}
                    <p className="text-white/90 text-base sm:text-xl md:text-2xl font-medium tracking-wide text-center px-4">
                        Revolutionizing your career path.
                    </p>
                </div>
            </div>
        </section>
    );
}
