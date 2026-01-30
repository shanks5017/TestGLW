import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png'; // Import the logo

const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
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
                      : 'linear-gradient(90deg, #5299E5, #70ADEF, #5299E5)',
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 hover:bg-gray-100/50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden p-6 z-50 ring-1 ring-black/5"
          >
            <div className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                    location.pathname === item.href
                      ? "text-primary bg-primary-light"
                      : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 font-semibold text-slate-600">
                  Sign In
                </Link>
                <Link to="/waitlist" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full rounded-full h-12 text-lg shadow-xl shadow-primary/20">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}