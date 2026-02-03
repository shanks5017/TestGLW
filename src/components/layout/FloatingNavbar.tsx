import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';
import { RollingText3D } from '../ui/RollingText';
import { AnimatedHamburger } from '../ui/AnimatedHamburger';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

import { useLenis } from 'lenis/react';

export const FloatingNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const location = useLocation();

    // Access Lenis for manual scroll control
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = () => {
        lenis?.scrollTo(0, { immediate: true });
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Product', path: '/product' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <React.Fragment>


            <header className={cn(
                "fixed left-0 right-0 transition-all duration-300 pointer-events-none",
                scrolled ? "top-4" : "top-6",
                mobileMenuOpen ? "z-[61]" : "z-50"
            )}>
                <div className="w-full px-6 md:px-12 flex items-center justify-between mx-auto">

                    {/* Left: Static Logo (No Effects) */}
                    <div className={cn("pointer-events-auto flex w-[200px] transition-opacity duration-200", mobileMenuOpen ? "opacity-0" : "opacity-100")}>
                        <Link to="/" className="flex items-center gap-2.5">
                            <img src={logo} alt="GetLanded" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold text-slate-900 tracking-tight font-heading">
                                GetLanded
                            </span>
                        </Link>
                    </div>

                    {/* Center: Fizens-style Sliding Pill Nav */}
                    <nav
                        className="hidden min-[1100px]:flex items-center pointer-events-auto bg-white/80 backdrop-blur-2xl rounded-full p-1 shadow-sm border border-black/[0.04]"
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
                                                className="w-1.5 h-1.5 rounded-full bg-[#0463c7]"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}

                                        {/* 3D Rolling Text Effect */}
                                        <RollingText3D
                                            text={link.name}
                                            className={cn(
                                                "text-[16px] tracking-wide",
                                                isActive ? "text-[#0463c7] font-medium" : "text-black font-normal"
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
                        <div className="hidden min-[1100px]:block">
                            <Link to="/waitlist">
                                <Button className="rounded-full font-semibold h-[48px] px-8 text-[15px] bg-[#0463c7] text-white shadow-lg shadow-[#0463c7]/20 hover:bg-[#0352a8] hover:shadow-[#0463c7]/30 transition-all hover:-translate-y-0.5">
                                    Get Template
                                </Button>
                            </Link>
                        </div>

                        <div className="min-[1100px]:hidden">
                            <AnimatedHamburger
                                isOpen={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={mobileMenuOpen ? "text-white" : "text-slate-900"}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Cinematic Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-4 left-4 right-4 bottom-auto z-[60] flex flex-col min-[1100px]:hidden rounded-[24px] overflow-hidden min-h-[70vh]"
                        style={{
                            background: 'linear-gradient(180deg, #1A56DB 0%, #3B82F6 100%)', // Blue gradient
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                    >
                        {/* Background Grain Texture - Optional, keeping minimal for now to match reference */}
                        {/* <div className="absolute inset-0 pointer-events-none opacity-[0.03]" ... /> */}

                        {/* Top Bar with Logo and Close Button */}
                        <div className="flex items-center justify-between p-6">
                            <div className="flex items-center gap-2.5 text-white">
                                <img src={logo} alt="GetLanded" className="w-8 h-8 object-contain brightness-0 invert" />
                                <span className="text-xl font-bold tracking-tight font-heading">
                                    GetLanded
                                </span>
                            </div>

                        </div>

                        {/* Menu Content Container */}
                        <div className="flex flex-col h-full relative z-10 px-6 pb-6 items-center justify-center text-center">

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-5 items-center w-full">
                                {navLinks.map((link, i) => {
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.1 + (i * 0.05),
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block text-[24px] font-medium text-white hover:text-white/80 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Spacer */}
                            <div className="flex-1" />

                            {/* Divider Line */}
                            <div className="w-full h-[1px] bg-white/20 mb-8" />

                            {/* Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-6 mb-8"
                            >
                                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer">
                                        <Icon size={18} />
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full max-w-sm"
                            >
                                <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full rounded-full py-4 text-lg bg-white hover:bg-gray-50 border-none shadow-xl flex items-center justify-center">
                                        <RollingText3D
                                            text="Get Template now"
                                            className="text-[18px] font-medium text-[#0040C1]"
                                        />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment >
    );
};
