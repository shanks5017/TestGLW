import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

const categories = ["All", "Interview Tips", "Resume", "Networking", "Success Stories"];

const articles = [
    {
        title: "How to ace your system design interview",
        category: "Interview Tips",
        date: "Jun 20, 2025",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "10 resume mistakes to avoid in 2025",
        category: "Resume",
        date: "Jun 18, 2025",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Networking strategies for introverts",
        category: "Networking",
        date: "Jun 15, 2025",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "How I went from Junior to Senior in 2 years",
        category: "Success Stories",
        date: "Jun 12, 2025",
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Negotiating your salary like a pro",
        category: "Interview Tips",
        date: "Jun 10, 2025",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Building a personal brand on LinkedIn",
        category: "Networking",
        date: "Jun 08, 2025",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
    },
];

export function Blog() {
    const [activeCategory, setActiveCategory] = React.useState("All");

    return (
        <div className="bg-white pt-20 pb-20 relative overflow-hidden">
            {/* Background Grid - Fizens Style */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 pt-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight font-heading"
                    >
                        Career <span className="text-primary">Insights</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto"
                    >
                        Expert advice to help you navigate your professional journey.
                    </motion.p>
                </div>

                {/* Featured Article Hero */}
                <div className="mb-24 rounded-[40px] bg-gray-50 overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative group cursor-pointer border border-gray-100">
                    <div className="h-[300px] lg:h-auto overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=1200" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-10 lg:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider">Featured</span>
                            <span className="text-gray-400 text-sm">July 1, 2025</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors font-heading">
                            The complete guide to landing a job at FAANG companies.
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 line-clamp-3">
                            Discover the step-by-step process, from resume screening to the final onsite loop. We break down what recruiters are truly looking for.
                        </p>
                        <div className="flex items-center text-slate-900 font-semibold group-hover:gap-2 transition-all">
                            Read Article <ArrowUpRight className="w-5 h-5 ml-2" />
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                                activeCategory === cat
                                    ? "bg-slate-900 text-white"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {articles.map((article, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group cursor-pointer"
                        >
                            <div className="rounded-[32px] overflow-hidden mb-6 aspect-[4/3] bg-gray-100 relative">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                                    {article.category}
                                </div>
                            </div>
                            <div className="space-y-3 px-2">
                                <div className="text-sm text-gray-400">{article.date}</div>
                                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors font-heading">
                                    {article.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="px-8 py-3 rounded-full border border-gray-200 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300">
                        Load More Insights
                    </button>
                </div>

            </div>
        </div>
    );
}
