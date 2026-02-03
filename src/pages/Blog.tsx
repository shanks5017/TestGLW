import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

// --- Types ---
interface Article {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
    readTime: string;
}

// --- Data ---
const categories = ["All", "Interview Tips", "Resume", "Networking", "Success Stories"];

const featuredArticle: Article = {
    id: 0,
    title: "The complete guide to landing a job at FAANG companies.",
    category: "Featured",
    date: "July 1, 2025",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=1200",
    readTime: "8 min read"
};

const articles: Article[] = [
    {
        id: 1,
        title: "How to ace your system design interview",
        category: "Interview Tips",
        date: "Jun 20, 2025",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
        readTime: "12 min read"
    },
    {
        id: 2,
        title: "10 resume mistakes to avoid in 2025",
        category: "Resume",
        date: "Jun 18, 2025",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600",
        readTime: "5 min read"
    },
    {
        id: 3,
        title: "Networking strategies for introverts",
        category: "Networking",
        date: "Jun 15, 2025",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "How I went from Junior to Senior in 2 years",
        category: "Success Stories",
        date: "Jun 12, 2025",
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=600",
        readTime: "4 min read"
    },
    {
        id: 5,
        title: "Negotiating your salary like a pro",
        category: "Interview Tips",
        date: "Jun 10, 2025",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "Building a personal brand on LinkedIn",
        category: "Networking",
        date: "Jun 08, 2025",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
        readTime: "9 min read"
    },
];

// --- Components ---

// 1. Floating Particles (Background)
function FloatingParticles() {
    const particles = Array.from({ length: 30 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                        opacity: 0,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    className="absolute w-1 h-1 bg-[#0463c7]/20 rounded-full"
                />
            ))}
        </div>
    );
}

export function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Filter articles
    const filteredArticles = activeCategory === "All"
        ? articles
        : articles.filter(a => a.category === activeCategory);

    return (
        <div ref={containerRef} className="bg-[#FAFAFA] min-h-screen relative font-sans selection:bg-[#0463c7]/20 selection:text-[#0463c7]">

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <FloatingParticles />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-32">

                {/* --- Hero Section --- */}
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-heading font-normal tracking-tight text-slate-900 leading-[1.1] mb-6">
                            Career <span className="text-[#0463c7] font-medium tracking-tighter">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
                            Expert advice to help you navigate your professional journey.
                        </p>
                    </motion.div>
                </motion.div>


                {/* --- Featured Article --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24"
                >
                    <div className="group relative bg-white rounded-[2.5rem] p-4 lg:p-4 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#0463c7]/10 transition-all duration-500">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                            {/* Image */}
                            <div className="lg:w-1/2 relative overflow-hidden rounded-[2rem] h-[300px] lg:h-[500px]">
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <motion.img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2 flex flex-col justify-center py-4 lg:py-12 pr-4 lg:pr-12 pl-4 lg:pl-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-[#E8F3FC] text-[#0463c7] text-xs font-bold uppercase tracking-widest border border-[#0463c7]/10">
                                        {featuredArticle.category}
                                    </span>
                                    <span className="text-slate-400 text-sm font-medium">{featuredArticle.date}</span>
                                </div>

                                <h2 className="text-3xl md:text-[42px] font-heading font-medium text-slate-900 mb-6 leading-[1.1] group-hover:text-[#0463c7] transition-colors duration-300">
                                    {featuredArticle.title}
                                </h2>

                                <p className="text-lg text-slate-500 mb-10 leading-relaxed line-clamp-3">
                                    Discover the step-by-step process, from resume screening to the final onsite loop. We break down what recruiters are truly looking for in top candidates.
                                </p>

                                <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 transition-all duration-300 cursor-pointer w-fit">
                                    <span>Read Article</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0463c7] group-hover:text-white transition-colors duration-300">
                                        <ArrowUpRight size={16} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* --- Category Filters --- */}
                <div className="sticky top-24 z-30 mb-16 pointer-events-none">
                    <div className="flex justify-center pointer-events-auto">
                        <div className="bg-white/80 backdrop-blur-xl p-2 rounded-full border border-white/50 shadow-lg shadow-slate-200/50 flex flex-wrap justify-center gap-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                        activeCategory === cat
                                            ? "text-white"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    )}
                                >
                                    {activeCategory === cat && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-slate-900 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


                {/* --- Articles Grid --- */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredArticles.map((article, i) => (
                            <motion.div
                                layout
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group flex flex-col cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[4/3]">
                                    <motion.div
                                        className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/0 z-10 transition-colors"
                                    />
                                    <motion.img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-white/50">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 px-2">
                                    <div className="flex items-center justify-between text-sm text-slate-400">
                                        <span>{article.date}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <span>{article.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-heading font-medium text-slate-900 leading-snug group-hover:text-[#0463c7] transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <div className="pt-2 flex items-center text-sm font-bold text-slate-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        Read More <ChevronRight size={16} className="ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* --- Load More --- */}
                <div className="text-center pt-12">
                    <button className="group relative px-8 py-4 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-900 overflow-hidden transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg hover:shadow-[#0463c7]/5 hover:scale-105 active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                            Load More Insights
                            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
}
