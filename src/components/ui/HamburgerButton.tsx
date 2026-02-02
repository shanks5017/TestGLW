import { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '../../lib/utils';

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

export function HamburgerButton({ isOpen, onClick, className }: HamburgerButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    // Magnetic effect logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the magnetic movement
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Limit the magnetic pull distance
        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Line animations
    const topVariants = {
        closed: { rotate: 0, translateY: 0 },
        open: { rotate: 45, translateY: 6 },
    };

    const middleVariants = {
        closed: { opacity: 1, scaleX: 1 },
        open: { opacity: 0, scaleX: 0 },
    };

    const bottomVariants = {
        closed: { rotate: 0, translateY: 0 },
        open: { rotate: -45, translateY: -6 },
    };

    const lineProps = {
        initial: "closed",
        animate: isOpen ? "open" : "closed",
        transition: { type: "spring" as const, stiffness: 260, damping: 20 },
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            className={cn(
                "relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer group",
                "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-colors duration-300",
                className
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            {/* Glow effect container */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10 blur-xl" />

            <div className="relative flex flex-col items-center justify-center w-6 h-6 gap-1.5 overflow-hidden">
                {/* Top Line */}
                <motion.span
                    variants={topVariants}
                    {...lineProps}
                    className="w-6 h-0.5 bg-slate-900 rounded-full origin-center"
                />

                {/* Middle Line */}
                <motion.span
                    variants={middleVariants}
                    {...lineProps}
                    className="w-4 h-0.5 bg-slate-900 rounded-full origin-right ml-2"
                // The ml-2 pushes it to the right to create that staggered look when closed
                />

                {/* Bottom Line */}
                <motion.span
                    variants={bottomVariants}
                    {...lineProps}
                    className="w-6 h-0.5 bg-slate-900 rounded-full origin-center"
                />
            </div>
        </motion.button>
    );
}
