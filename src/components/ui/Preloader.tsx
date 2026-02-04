import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Preloader = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(location.pathname === '/');
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Tracks if the component has just mounted (Page Load/Refresh)
    const isPageLoad = useRef(true);

    useEffect(() => {
        // Only trigger on Home page
        if (location.pathname === '/') {
            setIsLoading(true);

            if (isPageLoad.current) {
                // Case 1: Refresh or First Visit -> Instant Appearance
                setIsInitialLoad(true);
                isPageLoad.current = false;
            } else {
                // Case 2: Internal Navigation -> Slide Up Animation
                setIsInitialLoad(false);
            }

            // Timer to dismiss preloader - increased to accommodate slower animations
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 4500);

            return () => clearTimeout(timer);
        } else {
            // If starting on another page or navigating away
            setIsLoading(false);
            isPageLoad.current = false;
        }
    }, [location.pathname]);

    // Conditional Variants based on load type
    const pageVariants = {
        initial: isInitialLoad
            ? { x: 0, opacity: 1 } // Standard initial load (just appears)
            : { y: '100%', opacity: 1 }, // Slide up from bottom on revisit

        animate: isInitialLoad
            ? { x: 0, opacity: 1 }
            : { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },

        exit: {
            x: '100%', // Always slide out right
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
        }
    };

    // Delays for inner content (wait for slide up if not initial load)
    const contentDelay = isInitialLoad ? 0 : 0.6;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Slower stagger
                delayChildren: contentDelay + 0.5
            }
        }
    };

    return (
        <AnimatePresence mode='wait'>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                >
                    <div className="flex items-center gap-6 relative px-4">
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0, rotate: -45 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{
                                duration: 1.5, // Slower icon
                                ease: "easeOut",
                                type: "spring",
                                bounce: 0.4,
                                delay: contentDelay
                            }}
                            className="bg-white rounded-full p-3 shadow-2xl z-10 w-24 h-24 flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt="GetLanded"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            className="flex items-baseline overflow-hidden"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {Array.from("GetLanded").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.8, // Slower letters
                                                ease: [0.22, 1, 0.36, 1] as const,
                                            }
                                        }
                                    }}
                                    className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Subtext */}

                </motion.div>
            )}
        </AnimatePresence>
    );
};
