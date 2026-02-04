import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHamburgerProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, onClick, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.2, y: y * 0.2 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const variants = {
        top: {
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6 },
        },
        bottom: {
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
        },
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-8 h-[2px] bg-current rounded-full origin-center block"
                />

                {/* Bottom Line */}
                <motion.span
                    variants={variants.bottom}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-8 h-[2px] bg-current rounded-full origin-center block"
                />
            </div>

            {/* Subtle Hover Glow/Backdrop (Optional, for extra premium feel) */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-current scale-75 blur-lg -z-10" />
        </motion.div>
    );
};
