
import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';
import 'lenis/dist/lenis.css';

interface SmoothScrollProps {
    children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,         // Linear interpolation (smoothness)
                duration: 1.5,     // Duration of scroll animation
                smoothWheel: true, // Enable smooth scrolling for mouse wheel
                wheelMultiplier: 1, // Scroll speed multiplier
                touchMultiplier: 2, // touch speed
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Visualizer-like smooth easing
            }}
        >
            {children}
        </ReactLenis>
    );
};
