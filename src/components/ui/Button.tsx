import React from 'react';
import { cn } from '../../utils/cn';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  withIcon = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
        {
          // Size
          'px-6 py-2.5 text-sm': size === 'sm',
          'px-8 py-4 text-base': size === 'md',
          'px-10 py-5 text-lg': size === 'lg',

          // Radius - Pill shape
          'rounded-full': true,

          // Variants
          // Primary: Light Blue BG, Blue Text, with optional Dark Blue Circle Icon
          'bg-[#EFF4FF] text-[#0040C1] hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-200/50': variant === 'primary',

          // Secondary: Dark Blue BG, White Text
          'bg-[#0040C1] text-white hover:bg-[#003091] shadow-xl shadow-blue-900/10': variant === 'secondary',

          'border-2 border-[#EFF4FF] text-[#171717] hover:bg-[#EFF4FF] hover:border-[#EFF4FF]': variant === 'outline',
          'bg-transparent text-[#171717] hover:bg-gray-100': variant === 'ghost',
        },
        className
      )}
      {...props}
    >
      {children}
      {/* Characteristic icon circle for primary buttons */}
      {(withIcon || variant === 'primary') && (
        <div className={cn(
          "ml-3 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1",
          variant === 'primary' ? "bg-[#0040C1] text-white w-8 h-8" : "bg-white/20 w-6 h-6"
        )}>
          <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
        </div>
      )}
    </button>
  );
}