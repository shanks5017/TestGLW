import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';

export const FloatingNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Product', path: '/product' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <React.Fragment>
            {/* 
                Blur Layer 
                - Covers the area above the navbar and the navbar itself.
                - Uses a gradient mask to fade out at the bottom.
            */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 h-[100px] z-40 pointer-events-none backdrop-blur-xl bg-white/60"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                }}
            />

            <header className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center pointer-events-none",
                scrolled ? "top-5" : "top-6"
            )}>
                <div className="w-full max-w-7xl px-6 flex items-center justify-between">

                    {/* Logo */}
                    <div className="pointer-events-auto">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img src={logo} alt="GetLanded" className="w-9 h-9 object-contain" />
                            <span className="text-[22px] font-bold tracking-tight text-[#0F172A]">
                                GetLanded
                            </span>
                        </Link>
                    </div>

                    {/* Nav Pill - The Core Fizens Animation */}
                    <nav
                        className="hidden md:flex items-center pointer-events-auto bg-white rounded-full shadow-sm border border-black/[0.04] p-1.5 relative isolate"
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path || (link.path !== '/' && location.hash === link.path.replace('/', ''));

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onMouseEnter={() => setHoveredTab(link.name)}
                                    className={cn(
                                        "relative px-5 py-2.5 text-[15px] font-medium rounded-full transition-colors duration-200 flex items-center gap-2 z-10",
                                        isActive ? "text-[#0047FF]" : "text-slate-500 hover:text-slate-900"
                                    )}
                                >
                                    {/* 
                                        Sliding Hover Pill 
                                        - Uses layoutId to animate smoothly between items
                                        - Spring physics for that 'bouncy' Framer feel
                                    */}
                                    {hoveredTab === link.name && (
                                        <motion.span
                                            layoutId="hover-pill"
                                            className="absolute inset-0 bg-gray-100 rounded-full -z-10 mix-blend-multiply"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6
                                            }}
                                        />
                                    )}

                                    {/* Active Dot Indicator */}
                                    {isActive && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-1.5 h-1.5 rounded-full bg-[#0047FF]"
                                        />
                                    )}

                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-3 pointer-events-auto">
                        <div className="hidden md:block">
                            <Link to="/waitlist">
                                <Button className="rounded-full font-bold h-[48px] px-8 text-[15px] bg-[#0047FF] text-white shadow-lg shadow-blue-500/20 hover:bg-[#0037CC] hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
                                    Get Template
                                </Button>
                            </Link>
                        </div>

                        <button
                            className="md:hidden p-3 bg-white text-slate-600 hover:text-[#0047FF] rounded-full shadow-lg border border-gray-100 transition-all active:scale-95"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col p-6 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <img src={logo} alt="GetLanded" className="w-8 h-8 object-contain" />
                                <span className="text-[22px] font-bold text-[#0F172A]">GetLanded</span>
                            </Link>
                            <button
                                className="p-3 text-slate-600 hover:text-[#0047FF] rounded-full bg-slate-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "p-4 rounded-xl text-[16px] font-medium transition-all flex justify-between items-center group",
                                        location.pathname === link.path
                                            ? "bg-blue-50 text-[#0047FF]"
                                            : "text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    <span className="flex items-center gap-3">
                                        {location.pathname === link.path && <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF]" />}
                                        {link.name}
                                    </span>
                                    <ArrowRight size={20} className="text-slate-300 group-hover:text-[#0047FF] transition-colors" />
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full rounded-full py-4 text-[16px] font-bold shadow-xl shadow-blue-500/20 bg-[#0047FF] text-white">
                                    Get Template
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};
