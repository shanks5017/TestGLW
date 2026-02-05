import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Simple cn utility if not imported
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, icon: Icon, iconPosition = 'left', children, ...props }, ref) => {
    const variantStyles: Record<ButtonVariant, string> = {
      primary: 'bg-[#0463c7] text-white hover:bg-[#0352a8] shadow-lg shadow-[#0463c7]/25 hover:shadow-[#0463c7]/40',
      secondary: 'bg-[#E8F3FC] text-[#0463c7] hover:bg-white border border-transparent hover:border-[#0463c7]/20',
      outline: 'border-2 border-[#0463c7] text-[#0463c7] hover:bg-[#0463c7] hover:text-white',
      ghost: 'bg-transparent text-slate-900 hover:bg-gray-100',
      white: 'bg-white text-slate-900 shadow-lg hover:bg-gray-50'
    };

    const sizeStyles: Record<ButtonSize, string> = {
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
          'relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {!loading && Icon && iconPosition === 'left' && <Icon className="w-5 h-5 mr-2" />}
        {children}
        {!loading && Icon && iconPosition === 'right' && <Icon className="w-5 h-5 ml-2" />}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';