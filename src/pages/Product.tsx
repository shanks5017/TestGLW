import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  Globe,
  Layout,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Target,
  BrainCircuit,
  Mic,
  FileSearch,
  UserCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother feel
    }
  }
};

const features = [
  {
    icon: Layout,
    title: "AI Job Tracker",
    description: "Never lose track of a deadline again. Automated tracking, status updates, and deadline reminders all in one centralized dashboard.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50"
  },
  {
    icon: FileSearch,
    title: "Resume Fit Score",
    description: "Know exactly why you're not getting callbacks. Provides match scores, keyword analysis, and tailored suggestions to beat the ATS.",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50"
  },
  {
    icon: Globe,
    title: "Visa Sponsorship Signal",
    description: "Stop wasting time on companies that won't sponsor. Real-time detection, H1-B history, and automated filtering for international students.",
    color: "bg-cyan-500",
    lightColor: "bg-cyan-50"
  },
  {
    icon: BrainCircuit,
    title: "AI Copilot Extension",
    description: "The extension that works where you do. Side-by-side analysis and instant fit scores directly on LinkedIn, Indeed, and more.",
    color: "bg-violet-500",
    lightColor: "bg-violet-50"
  }
];

const roadmapFeatures = [
  { icon: Mic, title: "AI Mock Interviews" },
  { icon: Target, title: "Interview Prep" },
  { icon: FileSearch, title: "Plagiarism Checker" },
  { icon: UserCheck, title: "AI Humanizer" }
];

export function Product() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100/30 blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[url('https://framerusercontent.com/images/rR6CH3BheByo8vznuPHT4HfSBo.png')] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.03] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-semibold text-slate-800 tracking-tight">AI-Powered Career Growth</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-8"
          >
            AI COPILOT FOR <br />
            <span className="text-blue-600 italic">JOB SEARCH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Track, organize, and apply smarter all in one place. Specifically built for students and early-career professionals to track applications and understand job requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1">
              Check Sponsorship
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg font-bold text-slate-600 hover:bg-slate-100">
              View Roadmap
            </Button>
          </motion.div>

          {/* Hero Image Mockup - Fizens Style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto max-w-5xl rounded-[32px] border border-white/50 bg-white/50 backdrop-blur-sm p-4 shadow-2xl shadow-blue-900/10"
          >
            <div className="rounded-[24px] overflow-hidden border border-slate-200 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="GetLanded AI Copilot Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section: The Old Way vs The GetLanded Way */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Traditional Job Search is <span className="text-red-500">Broken</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We've reimagined the process from the ground up to give you a massive competitive advantage.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Traditional Way */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] border border-slate-100 bg-slate-50/50"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <XCircle className="text-red-500 w-6 h-6" />
                The Traditional Way
              </h3>
              <ul className="space-y-4">
                {[
                  "Manual application tracking in spreadsheets",
                  "Generic resumes that get lost in ATS",
                  "Wasting time on companies that don't sponsor",
                  "Applying blindly without fit analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The GetLanded Way */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] border border-blue-100 bg-blue-50/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="text-blue-500/20 w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-blue-500 w-6 h-6" />
                The GetLanded Way
              </h3>
              <ul className="space-y-4">
                {[
                  "Automated tracking and deadline reminders",
                  "ATS-optimized resumes with fit scores",
                  "Instant visa sponsorship verification",
                  "Personalized AI copilot for every application"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-500 w-4 h-4 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Powerful Features to <br />Land Your Dream Job</h2>
              <p className="text-slate-500 text-lg">Every tool you need to navigate the modern job market, powered by cutting-edge AI.</p>
            </div>
            <Link to="/waitlist" className="hidden md:flex">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-bold items-center gap-2">
                Learn more about features <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-opacity-80", feature.lightColor)}>
                  <feature.icon className={cn("w-7 h-7", feature.color.replace('bg-', 'text-'))} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">{feature.description}</p>
                <Link to="/waitlist" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  Try it out <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[48px] mx-4 md:mx-10 mb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://framerusercontent.com/images/rR6CH3BheByo8vznuPHT4HfSBo.png')] opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20 mb-6 inline-block">ROADMAP</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">What's Coming Next</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">We're constantly building new ways to simplify your career journey.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {roadmapFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-400 w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-200">{feature.title}</h4>
                <p className="text-xs text-blue-400 mt-2 font-bold uppercase tracking-wider">Coming Soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Ready to Land Your <br /><span className="text-blue-600">Dream Career?</span></h2>
          <p className="text-slate-500 text-xl mb-12">Join thousands of students who are already using GetLanded to accelerate their job search.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl font-bold shadow-2xl shadow-blue-500/20 transition-all hover:-translate-y-1">
              Start Free Trial
            </Button>
            <Button variant="outline" className="w-full sm:w-auto rounded-full border-slate-200 px-10 py-6 text-xl font-bold text-slate-700 hover:bg-slate-50">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
