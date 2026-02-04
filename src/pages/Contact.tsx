
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';

export function Contact() {
    return (
        <div className="min-h-screen bg-white pt-20 pb-20 px-4 md:px-6 md:pt-28 relative overflow-hidden selection:bg-[#0463c7]/20 selection:text-[#0463c7]">
            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 md:pt-8"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-slate-900 tracking-tight leading-[0.9]">
                            Contact
                            <span className="block text-[#0463c7]">GetLanded</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                            We're thrilled to connect! Contact us to learn about our products, get job search tips, or make corporate inquiries anytime.
                        </p>
                    </motion.div>

                    {/* Right Column: Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#EAF6FF] rounded-2xl md:rounded-[32px] p-6 md:p-12"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Row 1: First and Last Name */}
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-[15px] font-medium text-slate-700 ml-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full pl-5 pr-4 py-3 md:py-3.5 rounded-xl border border-transparent bg-white focus:bg-white focus:ring-2 focus:ring-[#0463c7]/20 focus:border-[#0463c7] outline-none transition-all placeholder:text-gray-400 font-medium"
                                            placeholder="Oliver"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-[15px] font-medium text-slate-700 ml-1">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full pl-5 pr-4 py-3 md:py-3.5 rounded-xl border border-transparent bg-white focus:bg-white focus:ring-2 focus:ring-[#0463c7]/20 focus:border-[#0463c7] outline-none transition-all placeholder:text-gray-400 font-medium"
                                            placeholder="Brown"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Email and Phone */}
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[15px] font-medium text-slate-700 ml-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full pl-5 pr-4 py-3 md:py-3.5 rounded-xl border border-transparent bg-white focus:bg-white focus:ring-2 focus:ring-[#0463c7]/20 focus:border-[#0463c7] outline-none transition-all placeholder:text-gray-400 font-medium"
                                            placeholder="oliver.brown@university.ac.uk"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[15px] font-medium text-slate-700 ml-1">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full pl-5 pr-4 py-3 md:py-3.5 rounded-xl border border-transparent bg-white focus:bg-white focus:ring-2 focus:ring-[#0463c7]/20 focus:border-[#0463c7] outline-none transition-all placeholder:text-gray-400 font-medium"
                                            placeholder="+44 7700 900000"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[15px] font-medium text-slate-700 ml-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-5 py-3 md:py-3.5 rounded-xl border border-transparent bg-white focus:bg-white focus:ring-2 focus:ring-[#0463c7]/20 focus:border-[#0463c7] outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
                                    placeholder="Leave your message"
                                />
                            </div>

                            <div className="pt-2 flex justify-end">
                                <Button size="lg" className="w-full md:w-auto px-10 h-12 bg-[#0463c7] text-white rounded-full font-semibold shadow-lg shadow-[#0463c7]/20 hover:bg-[#0352a8] hover:shadow-[#0463c7]/30 transition-all hover:-translate-y-0.5 text-base">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
                    {/* Customer Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-[#EAF6FF] rounded-[32px] p-8 min-h-[280px] flex flex-col justify-center border border-transparent hover:border-[#0463c7] hover:shadow-lg hover:shadow-[#0463c7]/10 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Customer Support</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed font-medium">Got questions? We're just an email away.</p>

                        <div className="flex flex-col gap-4 mt-auto">
                            <a href="mailto:support@getlanded.com" className="flex items-center gap-2 text-[#0463c7] font-bold text-base hover:underline group">
                                support@getlanded.com <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="/support" className="flex items-center gap-2 text-[#0463c7] font-bold text-base hover:underline group">
                                Visit Help Center <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Sales Enquiry */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-[#EAF6FF] rounded-[32px] p-8 min-h-[280px] flex flex-col justify-center border border-transparent hover:border-[#0463c7] hover:shadow-lg hover:shadow-[#0463c7]/10 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Sales Enquiry</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed font-medium">Partner with us to elevate your career solutions.</p>

                        <div className="flex flex-col gap-4 mt-auto">
                            <a href="#" className="flex items-center gap-2 text-[#0463c7] font-bold text-base hover:underline group">
                                Schedule a Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="/product" className="flex items-center gap-2 text-[#0463c7] font-bold text-base hover:underline group">
                                Know More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Join Community */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-[#EAF6FF] rounded-[32px] p-8 min-h-[280px] flex flex-col justify-center border border-transparent hover:border-[#0463c7] hover:shadow-lg hover:shadow-[#0463c7]/10 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Join our Community</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed font-medium">Join our community for career tips and updates.</p>

                        <div className="flex gap-4 mt-auto">
                            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0463c7] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0463c7] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0463c7] flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
