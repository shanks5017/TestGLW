import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHamburgerProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, onClick, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);


    const variants = {
        top: {
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8 },
        },
        middle: {
            closed: { opacity: 1 },
            open: { opacity: 0 },
        },
        bottom: {
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8 },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={`cursor-pointer group relative z-50 flex items-center justify-center bg-transparent rounded-[24px] ${className}`}
            style={{ width: '48px', height: '48px' }} // Fixed size for the specific look
            onClick={onClick}
        >
            <div className="relative w-8 h-8 flex flex-col justify-center gap-[6px] items-center">
                {/* Top Line */}
                <motion.span
                    variants={variants.top}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-8 h-[2px] bg-current rounded-full origin-center block will-change-transform transform-gpu"
                />

                {/* Middle Line */}
                <motion.span
                    variants={variants.middle}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-8 h-[2px] bg-current rounded-full origin-center block will-change-transform transform-gpu"
                />

                {/* Bottom Line */}
                <motion.span
                    variants={variants.bottom}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-8 h-[2px] bg-current rounded-full origin-center block will-change-transform transform-gpu"
                />
            </div>

            {/* Removed blur effect for performance */}
        </motion.div>
    );
};
