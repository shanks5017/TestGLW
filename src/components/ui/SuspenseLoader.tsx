import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

export const SuspenseLoader = () => {
    return (
        <div className="fixed inset-0 z-[50] flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="w-16 h-16 flex items-center justify-center"
            >
                <img src={logo} alt="Loading..." className="w-10 h-10 object-contain opacity-80" />
            </motion.div>
        </div>
    );
};
