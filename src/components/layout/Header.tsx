import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { AnimatedHamburger } from '../ui/AnimatedHamburger';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import logo from '../../assets/logo.png'; // Import the logo

const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-6",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <nav
        className={cn(
          "w-full max-w-7xl rounded-full transition-all duration-300 border",
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-glass border-white/20 py-3 px-6"
            : "bg-transparent border-transparent py-2 px-4"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="relative shrink-0 overflow-hidden"
            >
              <img
                src={logo}
                alt="GetLanded Logo"
                className="w-10 h-10 object-contain relative z-10"
              />

              {/* Production-Grade Logo Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-20 z-20 pointer-events-none"
                animate={{
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary/40 blur-sm rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
              />
            </motion.div>

            <motion.div
              className="flex"
              whileHover="hover"
            >
              {"GetLanded".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                  animate={{
                    y: [-1.5, 1.5, -1.5],
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  variants={{
                    hover: {
                      rotateX: 360,
                      scale: 1.15,
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        delay: i * 0.02
                      }
                    }
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    },
                    opacity: { duration: 0.8, delay: 0.2 + i * 0.02 },
                    filter: { duration: 0.8, delay: 0.2 + i * 0.02 }
                  }}
                  className={cn(
                    "text-xl tracking-tighter inline-block font-heading select-none perspective-1000",
                    i < 3 ? "font-semibold text-slate-900" : "font-black"
                  )}
                  style={{
                    transformStyle: "preserve-3d",
                    backgroundImage: i < 3
                      ? 'none'
                      : 'linear-gradient(90deg, #0463c7, #70ADEF, #0463c7)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: i < 3 ? 'none' : 'text',
                    WebkitTextFillColor: i < 3 ? 'currentColor' : 'transparent',
                  }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "200% 50%"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: 'inherit',
                      WebkitBackgroundClip: 'inherit',
                      WebkitTextFillColor: 'inherit',
                    }}
                  >
                    {char}
                  </motion.span>
                </motion.span>
              ))}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group overflow-hidden",
                  location.pathname === item.href
                    ? "text-primary bg-primary-light/50"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname !== item.href && (
                  <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <span className="text-sm font-semibold text-slate-600 hover:text-primary px-2 cursor-pointer transition-colors">
                Sign In
              </span>
            </Link>
            <Link to="/waitlist">
              <Button size="sm" variant="primary" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Magnetic & Animated */}
          <AnimatedHamburger
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 relative"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="fixed inset-2 bg-white/99 rounded-[24px] overflow-hidden overflow-y-auto z-50 flex flex-col pointer-events-auto border border-white/20 shadow-2xl will-change-transform"
          >

            {/* Header within Menu - TOP LEFT LOGO with minimal padding */}
            <div className="relative z-10 flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="GetLanded Logo"
                  className="w-9 h-9 object-contain"
                />
                <span className="text-lg font-heading font-black text-slate-900 tracking-tighter">GetLanded</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100/50 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <ChevronRight size={20} className="rotate-180" />
              </button>
            </div>

            {/* Navigation Links with Dividers */}
            <div className="flex-1 flex flex-col items-center justify-start mt-2 space-y-5 relative z-10 px-4">
              {NAVIGATION_ITEMS.map((item, index) => (
                <div key={item.name} className="flex flex-col w-full items-center">
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-2xl font-bold text-[#0463c7] hover:text-[#0352a8] transition-colors tracking-tight text-center w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Divider - thin line between items */}
                  {index < NAVIGATION_ITEMS.length - 1 && (
                    <div className="w-12 h-[1px] bg-slate-200/50 mt-5"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="p-6 relative z-10 space-y-6">
              {/* CTA Button */}
              <Link to="/waitlist" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#0463c7] text-white hover:bg-[#0352a8] rounded-full h-12 text-lg font-bold shadow-lg shadow-blue-900/10">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}