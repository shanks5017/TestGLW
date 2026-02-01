
import { motion } from 'framer-motion';
import { Wifi, Battery } from 'lucide-react';
import aboutTabletUI from '../../assets/about-tablet-ui.png';


export const TabletDisplay = () => {
    return (
        <div className="relative w-[500px] h-[660px] perspective-[2000px] group flex items-center justify-center">

            {/* 3D Container */}
            <motion.div
                initial={{ rotateY: -30, rotateX: 10, scale: 0.8, opacity: 0 }}
                animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2
                }}
                className="relative w-[480px] h-[640px] transition-transform duration-500 transform-style-3d group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] will-change-transform"
            >
                {/* --- CHASSIS (Main Body) --- */}
                <div
                    className="absolute inset-0 bg-[#1a1a1a] rounded-[2.5rem] shadow-2xl transform-style-3d"
                    style={{
                        boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.1)'
                    }}
                >
                    {/* Metallic Edge Effect (Thickness) */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 rounded-[2.5rem] border-[1px] border-[#333]"
                            style={{
                                transform: `translateZ(-${i + 1}px)`,
                                background: 'linear-gradient(to right, #2a2a2a, #111, #2a2a2a)',
                            }}
                        />
                    ))}

                    {/* Backplate */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] rounded-[2.5rem] transform translate-z-[-7px]"
                        style={{ transform: 'translateZ(-7px) rotateY(180deg)', backfaceVisibility: 'hidden' }}
                    >
                        {/* Camera Bump */}
                        <div className="absolute top-8 right-8 w-12 h-12 bg-[#111] rounded-2xl shadow-inner border border-white/5" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-bold text-xl tracking-widest">GETLANDED</div>
                    </div>

                    {/* Front Bezel */}
                    <div className="absolute inset-[3px] bg-black rounded-[2.3rem] overflow-hidden relative">
                        {/* Screen Area */}
                        <div className="absolute inset-[12px] bg-white rounded-[1.8rem] overflow-hidden flex flex-col relative">

                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-sm transition-all duration-300 hover:w-32 hover:scale-105 cursor-pointer">
                                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-inner ring-1 ring-white/5" /> {/* Camera */}
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/20 blur-[1px]" /> {/* Indicator */}
                            </div>

                            {/* Status Bar Elements */}
                            <div className="absolute top-0 w-full h-12 z-40 flex justify-between items-start pt-3.5 px-7 text-[12px] font-bold text-slate-800 mix-blend-darken">
                                <span>9:41</span>
                                <div className="flex gap-2.5 opacity-80">
                                    <Wifi size={15} strokeWidth={2.5} />
                                    <Battery size={15} strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Main App Image */}
                            <div className="w-full h-full bg-white relative overflow-hidden">
                                <img
                                    src={aboutTabletUI}
                                    alt="App Dashboard"
                                    className="w-full h-full object-cover object-top scale-[1.02]"
                                />
                                {/* Subtle grain overlay for realism */}
                                <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay pointer-events-none" />
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-30" />
                        </div>
                    </div>

                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-[2.5rem] pointer-events-none mix-blend-overlay z-50"></div>
                </div>

            </motion.div>

            {/* Shadow */}
            <div className="absolute active -bottom-10 w-[300px] h-[40px] bg-black/20 blur-2xl rounded-[100%] opacity-60" />

        </div>
    );
};
