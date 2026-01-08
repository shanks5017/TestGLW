import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn'; // Assuming utils/cn exists, if not I will create it. It's standard in these stacks.

// Fallback if cn doesn't exist, I'll assume clsx + tailwind-merge is standard
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30',
      secondary: 'bg-primary-light text-primary hover:bg-white border border-transparent hover:border-primary/20',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
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
          'relative inline-flex items-center justify-center font-semibold rounded-pill transition-colors',
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