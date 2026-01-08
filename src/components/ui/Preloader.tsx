import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    // Only show on home page
    const shouldShow = location.pathname === '/';

    useEffect(() => {
        if (!shouldShow) {
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, [shouldShow]);

    if (!shouldShow) return null;

    const letterVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.5
            }
        }
    };

    return (
        <AnimatePresence mode='wait'>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
                    }}
                >
                    <div className="flex items-center gap-6 relative px-4">
                        {/* Logo - Balanced White Circle (p-3) - "Proper" look */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0, rotate: -45 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
                            className="bg-white rounded-full p-3 shadow-2xl z-10 w-24 h-24 flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt="GetLanded"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Text - Large, Bold, Emerging */}
                        <motion.div
                            className="flex items-baseline overflow-hidden"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {Array.from("GetLanded").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Subtext */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="absolute bottom-12 text-white/50 font-medium tracking-[0.4em] uppercase text-xs"
                    >
                        Loading Experience
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
