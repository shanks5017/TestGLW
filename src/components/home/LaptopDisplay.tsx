
import { motion } from 'framer-motion';
import { Search, FileText, Briefcase, Wifi, Battery } from 'lucide-react';

export const LaptopDisplay = () => {
    // Animation Config
    // Preloader takes ~4.5s + 0.8s exit. We start after that.
    const START_DELAY = 5.5;
    const ROTATION_DURATION = 1.8;
    const OPEN_DELAY = START_DELAY + 1.0; // Starts opening mid-spin
    const OPEN_DURATION = 1.5;

    return (
        <div className="relative w-[640px] perspective-[2000px] group flex flex-col items-center justify-center">

            {/* 3D Container - Handles the Spin */}
            {/* Added flex flex-col items-center to fix screen/base misalignment */}
            <motion.div
                initial={{ rotateY: -180, scale: 0.5, opacity: 0 }}
                animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                transition={{
                    duration: ROTATION_DURATION,
                    ease: [0.22, 1, 0.36, 1], // Heavy, premium friction ease
                    delay: START_DELAY
                }}
                className="relative transition-transform duration-500 transform-style-3d group-hover:rotate-x-2 flex flex-col items-center"
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
                            transition={{ duration: 0.4, delay: OPEN_DELAY + 0.4 }}
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
                                <div className="w-48 bg-slate-50 border-r border-slate-200 flex flex-col p-4 pt-6 gap-2">
                                    <div className="flex items-center gap-2 mb-6 px-2">
                                        <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">G</div>
                                        <span className="font-bold text-slate-800 text-sm">GetLanded</span>
                                    </div>
                                    {['Dashboard', 'Applications', 'Documents', 'Settings'].map((item, i) => (
                                        <div key={item} className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${i === 0 ? 'bg-[#E8F3FC] text-[#0463c7]' : 'text-slate-500 hover:bg-slate-100'}`}>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* Main Canvas */}
                                <div className="flex-1 bg-white p-6 overflow-hidden">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-900 mb-1">Welcome back, Ashwin</h2>
                                            <p className="text-[10px] text-slate-500 leading-relaxed max-w-[280px]">
                                                Instantly verify visa sponsorship, analyze resume fit and generate personalized cover letters so you can focus on landing your dream job.
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ashwin" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-[#0463c7] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden h-32 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-shadow">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                            <div className="flex justify-between items-start z-10">
                                                <div className="bg-white/20 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold">Updated</div>
                                                <Briefcase size={16} className="opacity-80" />
                                            </div>
                                            <div className="z-10">
                                                <div className="text-3xl font-bold">124</div>
                                                <div className="text-[11px] opacity-80">Jobs Applied</div>
                                            </div>
                                        </div>

                                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 relative h-32 flex flex-col justify-between group cursor-pointer hover:border-blue-200 transition-colors">
                                            <div className="flex justify-between items-start">
                                                <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</div>
                                                <FileText size={16} className="text-slate-400" />
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-slate-900">85%</div>
                                                <div className="text-[11px] text-slate-500">Resume Score</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action row that matches user request specifically */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { icon: Search, label: "Find Jobs", color: "text-[#0463c7]", bg: "bg-[#E8F3FC]" },
                                            { icon: FileText, label: "Resume", color: "text-orange-600", bg: "bg-orange-50" },
                                            { icon: Briefcase, label: "Interviews", color: "text-purple-600", bg: "bg-purple-50" },
                                        ].map((action, i) => (
                                            <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl border border-dashed border-slate-200 hover:border-blue-300 hover:bg-[#E8F3FC]/30 transition-all cursor-pointer group">
                                                <div className={`w-8 h-8 rounded-full ${action.bg} ${action.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                                    <action.icon size={16} />
                                                </div>
                                                <span className="text-[10px] font-medium text-slate-600">{action.label}</span>
                                            </div>
                                        ))}
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
                    animate={{ opacity: 1 }}
                    transition={{ delay: OPEN_DELAY + 0.2, duration: 1 }}
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
                    animate={{ width: "100%", opacity: 0.5 }}
                    transition={{ delay: OPEN_DELAY + 0.2, duration: 1.5 }}
                    className="absolute -bottom-16 w-full h-12 bg-black/40 blur-3xl rounded-[100%]"
                />

            </motion.div>
        </div>
    );
};
