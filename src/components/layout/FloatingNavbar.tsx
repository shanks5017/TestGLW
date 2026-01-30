import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';
import { RollingText3D } from '../ui/RollingText';

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
            {/* "Mist" Gradient Backdrop Blur Layer - tuned for visibility */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 h-[140px] z-40 pointer-events-none backdrop-blur-2xl bg-white/10"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'
                }}
            />

            <header className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
                scrolled ? "top-4" : "top-6"
            )}>
                <div className="w-full px-6 md:px-12 flex items-center justify-between mx-auto">

                    {/* Left: Static Logo (No Effects) */}
                    <div className="pointer-events-auto flex w-[200px]">
                        <Link to="/" className="flex items-center gap-2.5">
                            <img src={logo} alt="GetLanded" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold text-slate-900 tracking-tight font-heading">
                                GetLanded
                            </span>
                        </Link>
                    </div>

                    {/* Center: Fizens-style Sliding Pill Nav */}
                    <nav
                        className="hidden md:flex items-center pointer-events-auto bg-white/80 backdrop-blur-2xl rounded-full p-1 shadow-sm border border-black/[0.04]"
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onMouseEnter={() => setHoveredTab(link.name)}
                                    className="relative px-6 py-3 block z-10 group"
                                >
                                    {/* Active Background Pill (Lightest Blue) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-[#EFF6FF] rounded-full -z-10"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6
                                            }}
                                        />
                                    )}

                                    {/* Content Container */}
                                    <div className="flex items-center gap-2.5 relative z-10">
                                        {/* Side Dot for Active State */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-dot"
                                                className="w-1.5 h-1.5 rounded-full bg-[#0047FF]"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}

                                        {/* 3D Rolling Text Effect */}
                                        <RollingText3D
                                            text={link.name}
                                            className={cn(
                                                "text-[16px] tracking-wide",
                                                isActive ? "text-[#0047FF] font-medium" : "text-black font-normal"
                                            )}
                                        />
                                    </div>

                                    {/* Hover Pill Background (Gray) - Only when NOT active */}
                                    {hoveredTab === link.name && !isActive && (
                                        <motion.span
                                            layoutId="hover-pill"
                                            className="absolute inset-0 bg-slate-100/80 rounded-full -z-20"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right: CTA */}
                    <div className="flex items-center justify-end w-[200px] gap-3 pointer-events-auto">
                        <div className="hidden md:block">
                            <Link to="/waitlist">
                                <Button className="rounded-full font-semibold h-[48px] px-8 text-[15px] bg-[#0047FF] text-white shadow-lg shadow-blue-600/20 hover:bg-[#0037CC] hover:shadow-blue-600/30 transition-all hover:-translate-y-0.5">
                                    Get Template
                                </Button>
                            </Link>
                        </div>

                        <button
                            className="md:hidden p-3 bg-white text-slate-600 hover:text-[#0047FF] rounded-full shadow-sm border border-gray-100"
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
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col p-6 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <img src={logo} alt="GetLanded" className="w-8 h-8 object-contain" />
                                <span className="text-xl font-bold text-slate-900 font-heading">GetLanded</span>
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
                                    className="text-2xl font-bold text-slate-900 py-4 border-b border-gray-100"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full rounded-full py-4 text-[16px] font-bold bg-[#0047FF] text-white">
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
