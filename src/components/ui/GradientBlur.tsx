import React from 'react';
import { cn } from '../../lib/utils';

interface GradientBlurProps {
    className?: string;
    style?: React.CSSProperties;
    position?: 'top' | 'bottom';
}

export const GradientBlur = ({ className, style, position = 'top' }: GradientBlurProps) => {
    const isBottom = position === 'bottom';
    const direction = isBottom ? 'to top' : 'to bottom';
    const positionClass = isBottom ? 'bottom-0' : 'top-0';

    return (
        <div
            className={cn(
                "pointer-events-none fixed left-0 right-0 z-[40] h-[120px]",
                positionClass,
                className
            )}
            style={{
                ...style
            }}
            aria-hidden="true"
        >
            {/* Layer 1: Very subtle blur */}
            <div className="absolute inset-0 z-[1] backdrop-blur-[0.5px]"
                style={{ maskImage: `linear-gradient(${direction}, black 0%, transparent 100%)`, WebkitMaskImage: `linear-gradient(${direction}, black 0%, transparent 100%)` }} />

            {/* Layer 2 */}
            <div className="absolute inset-0 z-[2] backdrop-blur-[1px]"
                style={{ maskImage: `linear-gradient(${direction}, black 0%, transparent 85%)`, WebkitMaskImage: `linear-gradient(${direction}, black 0%, transparent 85%)` }} />

            {/* Layer 3 */}
            <div className="absolute inset-0 z-[3] backdrop-blur-[1.5px]"
                style={{ maskImage: `linear-gradient(${direction}, black 0%, transparent 70%)`, WebkitMaskImage: `linear-gradient(${direction}, black 0%, transparent 70%)` }} />

            {/* Layer 4 */}
            <div className="absolute inset-0 z-[4] backdrop-blur-[2px]"
                style={{ maskImage: `linear-gradient(${direction}, black 0%, transparent 55%)`, WebkitMaskImage: `linear-gradient(${direction}, black 0%, transparent 55%)` }} />

            {/* Layer 5 */}
            <div className="absolute inset-0 z-[5] backdrop-blur-[4px]"
                style={{ maskImage: `linear-gradient(${direction}, black 0%, transparent 40%)`, WebkitMaskImage: `linear-gradient(${direction}, black 0%, transparent 40%)` }} />

            {/* Layer 6: maximum blur reduced to 6px */}
            <div className="absolute inset-0 z-[6] backdrop-blur-[6px]"
                style={{ maskImage: `linear-gradient(${direction}, black 0%, transparent 25%)`, WebkitMaskImage: `linear-gradient(${direction}, black 0%, transparent 25%)` }} />
        </div>
    );
};
