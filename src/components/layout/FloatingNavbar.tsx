import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';
import { RollingText3D } from '../ui/RollingText';
import { AnimatedHamburger } from '../ui/AnimatedHamburger';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';



export const FloatingNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const location = useLocation();

    // Access Lenis for manual scroll control
    // Access Lenis for manual scroll control - Removed unused


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
        { name: 'Contact', path: '/contact' },
    ];

    // Determine Hamburger Color based on route & state
    const getHamburgerColor = () => {
        if (mobileMenuOpen) return "text-[#0463c7]"; // Always blue when open (against white menu)

        // Add specific routes here that might have dark backgrounds
        // For now, defaulting to standard behavior:
        // Scrolled = Black/Dark (on white blur nav)
        // Top of page = potentially varying, but sticking to slate-900 for general visibility
        // If specific pages need white, we can add: if (location.pathname === '/some-dark-page' && !scrolled) return "text-white";

        return "text-slate-900";
    };

    return (
        <React.Fragment>


            <header className={cn(
                "fixed left-0 right-0 transition-all duration-300 pointer-events-none",
                // Lock header style or keep it consistent when menu is open
                mobileMenuOpen ? "z-[61] top-0 py-4" : (scrolled ? "top-4 z-50" : "top-6 z-50"),
            )}>
                <div className="w-full px-6 md:px-12 flex items-center justify-between mx-auto">

                    {/* Left: Static Logo (No Effects) */}
                    <div className={cn("pointer-events-auto flex w-[200px] transition-opacity duration-200", mobileMenuOpen ? "opacity-0" : "opacity-100")}>
                        <Link to="/" className="flex items-center gap-2.5">
                            <img src={logo} alt="GetLanded" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold text-[#0463c7] tracking-tight font-heading">
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
                                    className="relative px-4 lg:px-6 py-3 block z-10 group"
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
                                                "text-[15px] lg:text-[16px] tracking-wide",
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
                    <div className="flex items-center justify-end w-[200px] gap-3 pointer-events-auto relative z-[62]">
                        {/* z-[62] ensures this container is above everything including the menu overlay */}

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
                                className={cn(getHamburgerColor(), "transition-colors duration-300 relative z-50")}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Cinematic Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[60] flex flex-col min-[1100px]:hidden h-[100dvh] overflow-hidden bg-white"
                        style={{
                            // Ensure it covers full screen
                        }}
                    >
                        {/* Background Grain Texture - Optional */}
                        {/* <div className="absolute inset-0 pointer-events-none opacity-[0.03]" ... /> */}

                        {/* Top Bar with Logo (Close button is handled by the fixed header hamburger) */}
                        <div className="flex items-center justify-between p-6 shrink-0">
                            <div className="flex items-center gap-2.5 text-[#0463c7]">
                                <img src={logo} alt="GetLanded" className="w-8 h-8 object-contain" />
                                <span className="text-xl font-bold tracking-tight font-heading">
                                    GetLanded
                                </span>
                            </div>

                            {/* Placeholder to balance the layout if needed, or just leave empty since Hamburger is fixed */}
                            <div className="w-[48px]"></div>
                        </div>

                        {/* Menu Content Container - Centered */}
                        <div className="flex flex-col flex-1 relative z-10 px-6 pb-8 items-center justify-center text-center overflow-y-auto">

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-4 md:gap-6 items-center w-full">
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
                                                className="block text-3xl md:text-5xl tracking-tight font-medium text-[#0463c7] hover:text-[#0463c7]/80 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Divider Line */}
                            <div className="w-24 h-[1px] bg-[#0463c7]/20 my-8 shrink-0" />

                            {/* Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-6 mb-8 shrink-0"
                            >
                                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border border-[#0463c7]/20 flex items-center justify-center text-[#0463c7] hover:bg-[#0463c7]/10 transition-colors cursor-pointer">
                                        <Icon size={18} />
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full max-w-sm shrink-0"
                            >
                                <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full rounded-full py-4 text-lg bg-[#0463c7] hover:bg-[#0352a8] border-none shadow-xl flex items-center justify-center">
                                        <RollingText3D
                                            text="Get Template now"
                                            className="text-[18px] font-medium text-white"
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
