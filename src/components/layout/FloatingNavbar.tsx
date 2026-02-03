import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';
import { RollingText3D } from '../ui/RollingText';
import { AnimatedHamburger } from '../ui/AnimatedHamburger';

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
                "fixed left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
                scrolled ? "top-4" : "top-6"
            )}>
                <div className="w-full px-6 md:px-12 flex items-center justify-between mx-auto">

                    {/* Left: Static Logo (No Effects) */}
                    <div className="pointer-events-auto flex w-[200px]">
                        <Link to="/" className="flex items-center gap-2.5" onClick={handleLogoClick}>
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
                                className="text-slate-900"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Cinematic Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[45] bg-[#FAFAFA]/95 backdrop-blur-3xl flex flex-col min-[1100px]:hidden"
                    >
                        {/* Background Grain Texture */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Menu Content Container */}
                        <div className="flex flex-col h-full relative z-10 p-6 pt-32">

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link, i) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.1 + (i * 0.1),
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={cn(
                                                    "block text-[32px] leading-[1.2] tracking-tight transition-all origin-left hover:scale-[1.02] duration-300 font-heading",
                                                    isActive
                                                        ? "text-[#0463c7] font-semibold"
                                                        : "text-slate-900 font-medium hover:text-[#0463c7]"
                                                )}
                                            >
                                                <span className="flex items-center gap-3">
                                                    {link.name}
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="mobile-active-dot"
                                                            className="w-2.5 h-2.5 rounded-full bg-[#0463c7]"
                                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                        />
                                                    )}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Divider */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                                className="h-[1px] bg-slate-200 w-full my-8 origin-left"
                            />

                            {/* Secondary Actions / CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mt-auto pb-8"
                            >
                                <div className="flex flex-col gap-4">
                                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest pl-1">
                                        Get Started
                                    </p>
                                    <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full rounded-full py-6 text-xl font-medium bg-[#0463c7] text-white shadow-xl shadow-blue-600/20 active:scale-95 transition-all">
                                            Get Template
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};
