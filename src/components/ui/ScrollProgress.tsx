import { motion, useScroll } from "framer-motion";
import { useState } from "react";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const [isDragging, setIsDragging] = useState(false);

    const handleScroll = (e: React.PointerEvent<HTMLDivElement>) => {
        // Only scroll if we are clicking or dragging (primary button)
        if (e.buttons !== 1 && e.type !== 'click') return;

        const containerHeight = window.innerHeight;
        const y = e.clientY;
        // Clamp percentage between 0 and 1
        const percentage = Math.max(0, Math.min(1, y / containerHeight));

        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({
            top: documentHeight * percentage,
            behavior: 'auto' // Instant update for responsiveness during drag
        });
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(true);
        handleScroll(e);
        // Capture pointer to track movement even if it leaves the thin bar
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (isDragging) {
            handleScroll(e);
        }
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(false);
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };

    return (
        <div
            className="fixed top-0 right-0 w-3 h-full z-[9999] cursor-pointer group touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            {/* Invisible wider hit area for easier interaction */}
            <div className="absolute inset-0 w-full h-full bg-transparent" />

            {/* Visible Progress Bar */}
            <motion.div
                className="absolute top-0 right-0 w-1.5 h-full bg-[#0463c7] origin-top transition-none"
                style={{ scaleY: scrollYProgress }}
            />

            {/* Background Track (Visible on hover for context) */}
            <div className="absolute top-0 right-0 w-1.5 h-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
    );
};
