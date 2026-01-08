import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    delay?: number;
    width?: 'full' | 'contained';
}

export const Section = ({
    children,
    className,
    delay = 0,
    width = 'contained',
    ...props
}: SectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "relative py-16 md:py-24",
                width === 'contained' && "container mx-auto px-4 md:px-6",
                className
            )}
            {...props}
        >
            {children}
        </motion.section>
    );
};

export const FadeIn = ({
    children,
    className,
    delay = 0,
    direction = 'up',
    fullWidth = false,
    ...props
}: {
    children: React.ReactNode,
    className?: string,
    delay?: number,
    direction?: 'up' | 'down' | 'left' | 'right',
    fullWidth?: boolean
} & HTMLMotionProps<"div">) => {

    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn(fullWidth ? "w-full" : "", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};
