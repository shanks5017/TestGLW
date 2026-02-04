import { motion } from 'framer-motion';
import { Wifi, Battery, Signal, Menu } from 'lucide-react';
import dashboardNew from '../../assets/dashboard-new.png';
import sidebarNew from '../../assets/sidebar-new.png';

export const TabletDisplay = () => {
    return (
        <div className="relative w-[360px] h-[520px] perspective-[2000px] group flex items-center justify-center">

            {/* 3D Container */}
            <motion.div
                initial={{ rotateY: -30, rotateX: 10, scale: 0.8, opacity: 0 }}
                animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2
                }}
                className="relative w-[360px] h-[520px] transition-transform duration-500 transform-style-3d group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] will-change-transform"
            >
                {/* --- MAIN BODY (Bezel + Screen) --- */}
                <div
                    className="absolute inset-0 bg-black rounded-[2.5rem] shadow-2xl transform-style-3d border-[4px] border-[#111]"
                    style={{
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.1)'
                    }}
                >
                    {/* Metallic Edge Effect (Side Profile) */}
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 rounded-[2.5rem] border-[1px] border-[#222]"
                            style={{
                                transform: `translateZ(-${i + 1}px)`,
                                background: 'linear-gradient(to right, #333, #111, #333)',
                            }}
                        />
                    ))}

                    {/* Backplate */}
                    <div
                        className="absolute inset-0 bg-[#0a0a0a] rounded-[2.5rem] transform translate-z-[-5px]"
                        style={{ transform: 'translateZ(-5px) rotateY(180deg)', backfaceVisibility: 'hidden' }}
                    >
                        {/* Simple Branding / Camera */}
                        <div className="absolute top-6 right-6 w-8 h-8 bg-[#151515] rounded-full shadow-inner border border-white/5" />
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/5 font-bold text-sm tracking-[0.3em] uppercase">GetLanded</div>
                    </div>

                    {/* Screen Area (Inset matches border thickness) */}
                    <div className="absolute inset-0 bg-white rounded-[2.5rem] overflow-hidden flex flex-col z-20 border-[4px] border-black shadow-inner">

                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-7 w-24 bg-black rounded-full z-50 flex items-center justify-between px-2 shadow-md transition-all duration-300 hover:w-28 hover:scale-105 cursor-pointer">
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-inner ring-1 ring-white/10" />
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-orange-500/50" />
                                <div className="w-1 h-1 rounded-full bg-green-500/50" />
                            </div>
                        </div>

                        {/* Status Bar */}
                        <div className="absolute top-0 w-full h-10 z-40 flex justify-between items-center px-5 pt-2 text-[10px] font-bold text-slate-800">
                            <span className="w-12 text-center text-[12px]">9:41</span>
                            <div className="flex gap-1.5 opacity-80 w-12 justify-end">
                                <Signal size={12} strokeWidth={2.5} />
                                <Wifi size={12} strokeWidth={2.5} />
                                <Battery size={12} strokeWidth={2.5} />
                            </div>
                        </div>

                        {/* --- MAIN CONTENT UI --- */}
                        <div className="w-full h-full bg-slate-50 flex flex-col pt-10 relative overflow-hidden">

                            {/* App Header */}
                            <div className="px-6 pb-4 flex justify-between items-center border-b border-slate-100 bg-white">
                                <div>
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Dashboard</div>
                                    <h2 className="text-xl font-bold text-slate-900 leading-none">Hello, Alex</h2>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Menu size={16} />
                                </div>
                            </div>

                            {/* Split View Content */}
                            <div className="flex-1 flex overflow-hidden">
                                {/* Sidebar (Mini) */}
                                <div className="w-16 bg-white border-r border-slate-100 flex flex-col items-center py-4 gap-4 relative overflow-hidden">
                                    <div className="absolute inset-0">
                                        <img
                                            src={sidebarNew}
                                            alt="Menu"
                                            className="w-full h-full object-cover opacity-50 grayscale"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                {/* Main Dashboard Image Area */}
                                <div className="flex-1 bg-slate-50 p-4 overflow-hidden relative">
                                    <div className="w-full h-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white relative">
                                        {/* Use the dashboard image but crop/fit it nicely */}
                                        <img
                                            src={dashboardNew}
                                            alt="Dashboard"
                                            className="w-full h-full object-cover object-left-top scale-110 -translate-y-2 -translate-x-2"
                                            loading="lazy"
                                            decoding="async"
                                        />

                                        {/* Floating UI Card Overlay for depth */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1.5, duration: 0.8 }}
                                            className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 max-w-[140px]"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <div className="text-[10px] font-bold text-slate-700">Resume Match</div>
                                            </div>
                                            <div className="text-2xl font-bold text-slate-900">98%</div>
                                            <div className="text-[9px] text-slate-400">Top 5% of applicants</div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-30" />
                    </div>

                    {/* Glass Reflection Overlay (Global) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-[2.5rem] pointer-events-none z-50 mix-blend-overlay" />
                </div>

            </motion.div>

            {/* Ambient Shadow */}
            <div className="absolute -bottom-8 w-[240px] h-[25px] bg-black/40 blur-2xl rounded-[100%] opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

        </div>
    );
};
