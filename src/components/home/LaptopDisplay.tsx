
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Wifi, Battery } from 'lucide-react';
import dashboardNew from '../../assets/dashboard-new.png';
import sidebarNew from '../../assets/sidebar-new.png';
import { useLoading } from '../../context/LoadingContext';

export const LaptopDisplay = () => {
    // Animation Config
    // Controlled by global LoadingContext
    const { isLoading } = useLoading();

    // Internal state to trigger animation once loading is done + small buffer
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            // Tiny delay to allow Preloader to exit beautifully before we start (0.6s exit -> wait 0.4s or 0.5s)
            const timeout = setTimeout(() => {
                setStartAnimation(true);
            }, 500);
            return () => clearTimeout(timeout);
        } else {
            setStartAnimation(false);
        }
    }, [isLoading]);

    const CINEMATIC_DURATION = 1.2; // Slightly faster entrance

    // OPEN_DELAY: Start opening the lid shortly after the laptop appears
    const OPEN_DELAY = 0.5; // Relative to startAnimation
    const OPEN_DURATION = 1.5; // Snappier opening

    // Mobile Detection
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // 1024px is a common breakpoint for tablets/smaller laptops where performance might be an issue
            // or where the 3D effect might be too much.
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const desktopAnimation = {
        rotateY: [360, 180, 150, 0],   // Smoother curve
        scale: [0.6, 0.9, 1.05, 1],    // Zoom from closer start
        opacity: [0, 1, 1, 1],
        z: [-500, 0, 50, 0]
    };

    const mobileAnimation = {
        rotateY: 0,
        scale: [0.8, 1],
        opacity: [0, 1],
        z: 0
    };

    return (
        <div className="relative w-[640px] perspective-[2000px] group flex flex-col items-center justify-center">

            {/* 3D Container - Handles the Spin */}
            {/* Added flex flex-col items-center to fix screen/base misalignment */}
            <motion.div
                initial={{ rotateY: isMobile ? 0 : 360, scale: 0.5, opacity: 0, z: -500 }} // Scale 0.5 = CLOSER start
                animate={startAnimation ? (isMobile ? mobileAnimation : desktopAnimation) : { rotateY: isMobile ? 0 : 360, scale: 0.5, opacity: 0, z: -500 }}
                transition={{
                    duration: CINEMATIC_DURATION,
                    times: isMobile ? [0, 1] : [0, 0.4, 0.8, 1],      // Improved timing curve
                    ease: "easeInOut",
                    delay: 0 // Immediate start when ready
                }}
                className="relative transition-transform duration-500 transform-style-3d group-hover:rotate-x-2 flex flex-col items-center will-change-transform translate-z-0"
                style={{ backfaceVisibility: 'hidden' }}
            >

                {/* --- LID (SCREEN) --- */}
                <motion.div
                    initial={{ rotateX: -90 }}
                    animate={{ rotateX: startAnimation ? 0 : -90 }}
                    transition={{
                        duration: OPEN_DURATION,
                        ease: [0.22, 1, 0.36, 1],
                        delay: OPEN_DELAY + (startAnimation ? 0.3 : 0) // Relative delay
                    }}
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom' }}
                    className="relative w-[600px] aspect-[16/10] bg-[#0d0d0d] rounded-t-[1.2rem] rounded-b-[0.5rem] p-[3px] shadow-2xl z-20"
                >
                    {/* Lid Edge Highlight (Metallic) */}
                    <div className="absolute inset-0 rounded-[inherit] border border-white/10 pointer-events-none z-50"></div>

                    {/* Back of Lid (Top Case) */}
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-[#e0e0e0] to-[#c4c4c4] rounded-[inherit] transform translate-z-[-1px]"
                        style={{ transform: 'rotateY(180deg) translateZ(1px)', backfaceVisibility: 'hidden' }}
                    >
                        {/* Apple Logo Placeholder */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-20 bg-black mask-star">
                            {/* SVG Logo could go here */}
                        </div>
                    </div>

                    {/* Inner Bezel (Black Glass) */}
                    <div className="w-full h-full bg-black rounded-[1rem] overflow-hidden relative ring-1 ring-white/5 flex flex-col">

                        {/* Notch Area */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50 flex justify-center items-center">
                            {/* Camera Lens */}
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333] relative ml-8">
                                <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-[#3b4b80] rounded-full opacity-60"></div>
                            </div>
                        </div>

                        {/* SCREEN CONTENT (Wakes up on open) */}
                        <motion.div
                            initial={{ filter: "brightness(0)" }}
                            animate={{ filter: "brightness(1)" }}
                            transition={{ duration: 0.4, delay: OPEN_DELAY + 0.4 + (startAnimation ? 0.2 : 0) }}
                            className="w-full h-full bg-slate-50 relative overflow-hidden flex flex-col font-sans"
                        >

                            {/* Mac Menu Bar */}
                            <div className="h-7 bg-transparent absolute top-0 w-full z-40 flex justify-between items-center px-4 text-[11px] font-medium text-white mix-blend-difference">
                                <div className="flex gap-4 pl-2">
                                    <span className="font-bold">GetLanded</span>
                                    <span>File</span>
                                    <span>Edit</span>
                                    <span>View</span>
                                </div>
                                <div className="flex gap-3 pr-2 items-center">
                                    <Battery size={14} />
                                    <Wifi size={14} />
                                    <span>Mon 9:41 AM</span>
                                    <Search size={14} />
                                </div>
                            </div>

                            {/* App Window (Dashboard) */}
                            <div className="mt-7 flex-1 flex relative">
                                {/* Sidebar */}
                                <div className="w-48 border-r border-slate-200 flex flex-col relative bg-white">
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={sidebarNew}
                                            alt="Sidebar Navigation"
                                            className="w-full h-full object-cover object-left-top"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Main Canvas */}
                                <div className="flex-1 bg-white p-6 overflow-hidden">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-900 mb-1">Welcome back, Buddy</h2>
                                            <p className="text-[10px] text-slate-500 leading-relaxed max-w-[280px]">
                                                Instantly verify visa sponsorship, analyze resume fit and generate personalized cover letters so you can focus on landing your dream job.
                                            </p>
                                        </div>

                                    </div>

                                    <div className="w-full h-full relative overflow-hidden rounded-xl">
                                        <img
                                            src={dashboardNew}
                                            alt="Dashboard Stats"
                                            className="w-full h-full object-contain object-top"
                                            loading="lazy"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Glossy Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none mix-blend-overlay"></div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* --- BASE (KEYBOARD) --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: startAnimation ? 1 : 0 }}
                    transition={{ delay: OPEN_DELAY + 0.2 + (startAnimation ? 0.3 : 0), duration: 0.8 }}
                    className="relative w-[640px] h-[16px] bg-[#c8c8c8] rounded-b-[1.5rem] rounded-t-[0.2rem] shadow-2xl mt-[-2px] z-10 flex justify-center items-start border-t border-white/50"
                    style={{
                        background: 'linear-gradient(to bottom, #d8d8d8 0%, #b0b0b0 100%)',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4)'
                    }}
                >
                    {/* Trackpad Notch */}
                    <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-48 h-2 bg-[#b8b8b8]/50 rounded-b-md backdrop-blur-sm shadow-inner" />

                    {/* Suggestion of keyboard depth from this angle */}
                    <div className="absolute top-[2px] w-[580px] h-[10px] bg-[#1a1a1a]/5 rounded blur-[1px]"></div>
                </motion.div>

                {/* Drop Shadow */}
                <motion.div
                    initial={{ width: "80%", opacity: 0 }}
                    animate={{ width: startAnimation ? "100%" : "80%", opacity: startAnimation ? 0.5 : 0 }}
                    transition={{ delay: OPEN_DELAY + 0.2 + (startAnimation ? 0.4 : 0), duration: 1.5 }}
                    className="absolute -bottom-16 w-full h-12 bg-black/40 blur-3xl rounded-[100%]"
                />

            </motion.div>
        </div>
    );
};
