import React from 'react';

interface RollingTextProps {
  text: string;
  className?: string;
  height?: number;
}

export const RollingText: React.FC<RollingTextProps> = ({
  text,
  className = "",
  height = 24 // Default height in pixels
}) => {
  return (
    <div
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      style={{ height: `${height}px` }}
    >
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        {/* First Text (Visible) */}
        <span className="flex items-center h-full origin-bottom transition-opacity duration-300 group-hover:opacity-0 translate-y-0 rotate-x-0">
          {text}
        </span>

        {/* Second Text (Hidden, reveals on hover) */}
        <span className="flex items-center h-full origin-top transition-opacity duration-300 opacity-0 group-hover:opacity-100 -translate-y-[0px] rotate-x-0 font-bold">
          {text}
        </span>
      </div>
    </div>
  );
};

// Alternative Implementation using CSS Transforms for true 3D effect if preferred
// But the above sliding effect is often what is referred to as "Rolling Text" in web design (like Fizens/Apple).
// If "3D Flip" specifically means rotation, we use satisfy:

/* 
  To achieve the specific "Fizens" style, they often use a transform text reveal.
  Let's refine this to be the standard "Up and Out" roll.
*/
export const RollingText3D: React.FC<RollingTextProps> = ({ text, className = "" }) => {
  return (
    <div className={`relative block overflow-hidden whitespace-nowrap ${className}`}>
      <div className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        <span className="block">{text}</span>
        <span className="block absolute top-full left-0 font-medium">{text}</span>
      </div>
    </div>
  );
};
