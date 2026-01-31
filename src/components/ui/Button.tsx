import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Simple cn utility if not imported
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-[#0463c7] text-white hover:bg-[#0352a8] shadow-lg shadow-[#0463c7]/25 hover:shadow-[#0463c7]/40',
      secondary: 'bg-[#E8F3FC] text-[#0463c7] hover:bg-white border border-transparent hover:border-[#0463c7]/20',
      outline: 'border-2 border-[#0463c7] text-[#0463c7] hover:bg-[#0463c7] hover:text-white',
      ghost: 'bg-transparent text-slate-900 hover:bg-gray-100',
      white: 'bg-white text-slate-900 shadow-lg hover:bg-gray-50'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          'relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-200',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';