
import { motion } from 'framer-motion';
import { Search, FileText, Briefcase, Wifi, Battery } from 'lucide-react';

export const ProductLaptop = () => {
    // Custom Animation Config for Product Page - Faster and different feel
    const START_DELAY = 0.2; // Starts immediately
    const ROTATION_DURATION = 1.0;
    const OPEN_DELAY = START_DELAY + 0.3;
    const OPEN_DURATION = 1.0;

    return (
        <div className="relative w-[640px] perspective-[2000px] group flex flex-col items-center justify-center scale-[0.85] lg:scale-100 origin-center">

            {/* 3D Container - Entrance Animation */}
            <motion.div
                initial={{ rotateY: 90, scale: 0.8, opacity: 0, x: 100 }}
                animate={{ rotateY: -15, scale: 1, opacity: 1, x: 0 }}
                transition={{
                    duration: ROTATION_DURATION,
                    ease: [0.22, 1, 0.36, 1], // Premium easing
                    delay: START_DELAY
                }}
                className="relative transition-transform duration-500 transform-style-3d flex flex-col items-center"
            >
                {/* Floating Animation Wrapper (Static) */}
                <motion.div
                    className="transform-style-3d relative flex flex-col items-center"
                >

                    {/* --- LID (SCREEN) --- */}
                    <motion.div
                        initial={{ rotateX: -90 }}
                        animate={{ rotateX: 0 }}
                        transition={{
                            duration: OPEN_DURATION,
                            ease: [0.22, 1, 0.36, 1],
                            delay: OPEN_DELAY
                        }}
                        style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom' }}
                        className="relative w-[600px] aspect-[16/10] bg-[#0d0d0d] rounded-t-[1.2rem] rounded-b-[0.5rem] p-[3px] shadow-2xl z-20"
                    >
                        {/* Lid Edge Highlight */}
                        <div className="absolute inset-0 rounded-[inherit] border border-white/10 pointer-events-none z-50"></div>

                        {/* Back of Lid */}
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-[#e0e0e0] to-[#c4c4c4] rounded-[inherit] transform translate-z-[-1px]"
                            style={{ transform: 'rotateY(180deg) translateZ(1px)', backfaceVisibility: 'hidden' }}
                        >
                            {/* Apple Logo Placeholder */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-20 bg-black mask-star"></div>
                        </div>

                        {/* Inner Bezel */}
                        <div className="w-full h-full bg-black rounded-[1rem] overflow-hidden relative ring-1 ring-white/5 flex flex-col">

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333] relative ml-8">
                                    <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-[#3b4b80] rounded-full opacity-60"></div>
                                </div>
                            </div>

                            {/* SCREEN CONTENT */}
                            <motion.div
                                initial={{ filter: "brightness(0)" }}
                                animate={{ filter: "brightness(1)" }}
                                transition={{ duration: 0.4, delay: OPEN_DELAY + 0.2 }}
                                className="w-full h-full bg-slate-50 relative overflow-hidden flex flex-col font-sans"
                            >
                                {/* Menu Bar */}
                                <div className="h-7 bg-transparent absolute top-0 w-full z-40 flex justify-between items-center px-4 text-[11px] font-medium text-white mix-blend-difference">
                                    <div className="flex gap-4 pl-2">
                                        <span className="font-bold">GetLanded</span>
                                        <span>Product</span>
                                        <span>Features</span>
                                        <span>Help</span>
                                    </div>
                                    <div className="flex gap-3 pr-2 items-center">
                                        <Battery size={14} />
                                        <Wifi size={14} />
                                        <Search size={14} />
                                    </div>
                                </div>

                                {/* Product Dashboard Content */}
                                <div className="mt-7 flex-1 flex relative">
                                    {/* Sidebar */}
                                    <div className="w-48 bg-slate-50 border-r border-slate-200 flex flex-col p-4 pt-6 gap-2">
                                        <div className="flex items-center gap-2 mb-6 px-2">
                                            <div className="w-6 h-6 rounded-md bg-[#0463c7] flex items-center justify-center text-white font-bold text-xs">P</div>
                                            <span className="font-bold text-slate-800 text-sm">Product</span>
                                        </div>
                                        {['Overview', 'Analytics', 'Reports', 'Settings'].map((item, i) => (
                                            <div key={item} className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${i === 0 ? 'bg-blue-50 text-[#0463c7]' : 'text-slate-500 hover:bg-slate-100'}`}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main Area */}
                                    <div className="flex-1 bg-white p-6 overflow-hidden">
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <h2 className="text-xl font-bold text-slate-900 mb-1">Product Features</h2>
                                                <p className="text-[10px] text-slate-500">Explore the power of GetLanded.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div className="bg-gradient-to-br from-[#0463c7] to-[#024ea0] rounded-2xl p-4 text-white shadow-lg h-28 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <div className="bg-white/20 backdrop-blur px-2 py-0.5 rounded text-[9px] font-bold">New</div>
                                                    <FileText size={16} className="opacity-80" />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold">AI Resume</div>
                                                    <div className="text-[10px] opacity-80">Builder Active</div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 h-28 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold">Live</div>
                                                    <Briefcase size={16} className="text-slate-400" />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-slate-900">Job Tracker</div>
                                                    <div className="text-[10px] text-slate-500">All systems go</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Grid */}
                                        <div className="grid grid-cols-3 gap-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-16 rounded-xl bg-slate-50 border border-slate-100 p-2 flex flex-col justify-center items-center gap-1">
                                                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                                                    <div className="h-1.5 w-10 bg-slate-200 rounded-full"></div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                                {/* Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none mix-blend-overlay"></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* --- BASE (KEYBOARD) --- */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: OPEN_DELAY + 0.1, duration: 1 }}
                        className="relative w-[640px] h-[16px] bg-[#c8c8c8] rounded-b-[1.5rem] rounded-t-[0.2rem] shadow-2xl mt-[-2px] z-10 flex justify-center items-start border-t border-white/50"
                        style={{
                            background: 'linear-gradient(to bottom, #d8d8d8 0%, #b0b0b0 100%)',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4)'
                        }}
                    >
                        <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-48 h-2 bg-[#b8b8b8]/50 rounded-b-md backdrop-blur-sm shadow-inner" />
                    </motion.div>

                </motion.div>
            </motion.div>

            {/* Shadow */}
            <motion.div
                initial={{ width: "60%", opacity: 0 }}
                animate={{ width: "90%", opacity: 0.4 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="absolute -bottom-12 w-full h-12 bg-black/40 blur-[40px] rounded-[100%]"
            />
        </div>
    );
};
