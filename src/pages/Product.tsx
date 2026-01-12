import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  FileSearch,
  Layout,
  BrainCircuit,
  Clock,
  PlayCircle,
  MessageSquare,
  FileText,
  Search,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useRef } from 'react';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Coming Soon Data
const comingSoonFeatures = [
  {
    icon: MessageSquare,
    title: "AI Mock Interviews",
    desc: "Practice interviews with AI-powered feedback and company-specific question sets."
  },
  {
    icon: BrainCircuit,
    title: "AI Interview Prep",
    desc: "Personalized interview preparation based on the specific role and company you're applying to."
  },
  {
    icon: CheckCircle2,
    title: "Plagiarism Checker",
    desc: "Checks resumes, essays, and written responses for originality to ensure compliance with academic and hiring standards."
  },
  {
    icon: FileText,
    title: "AI Humanizer",
    desc: "Refines AI-generated content to sound natural, clear, and human-written. Focuses on clarity and tone, not deception."
  },
  {
    icon: Zap,
    title: "Advanced Resume Rewriting",
    desc: "AI-powered resume optimization that goes beyond keyword matching to improve structure and impact."
  },
  {
    icon: Search,
    title: "Advanced Job Matching",
    desc: "Improved role recommendations based on resume data, preferences, and application history."
  }
];

export function Product() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 60]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 relative overflow-hidden font-sans">
      {/* Background Grid - Matching Home Page */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px]" />

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY }}
        className="relative pt-32 pb-20 px-6 z-10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-600 tracking-wide">AI COPILOT FOR JOB SEARCH</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading tracking-tight leading-[1.1] text-slate-900"
          >
            Track, organize, and<br />
            apply smarter <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">all in one place</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            GetLanded is an AI-powered job search copilot built specifically for students and early-career professionals.
            It helps you track applications, understand job requirements, and focus on roles where you actually have a chance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <Button className="group rounded-full bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
              <span className="flex items-center gap-2">
                Join Free Beta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" className="rounded-full px-10 py-6 text-lg font-bold border-2 text-slate-700 hover:bg-slate-50 transition-colors">
              <span className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem / Solution Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-slate-900">
              Students don't fail job searches because they're unqualified.
            </h2>
            <p className="text-xl text-slate-600">
              They fail because the process is fragmented, unclear, and overwhelming.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-8 font-heading text-slate-900">Most students:</h3>
              <div className="space-y-6">
                {[
                  "Apply across multiple job boards",
                  "Lose track of applications and deadlines",
                  "Don't know if their resume is a fit",
                  "Waste time on roles that won't sponsor visas",
                  "Don't know what to improve next"
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-slate-600 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 relative overflow-hidden text-white"
            >
              <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
              <h3 className="text-2xl font-bold mb-8 font-heading relative text-white">GetLanded fixes these problems first.</h3>
              <div className="space-y-8 relative">
                {[
                  { challenge: "Limited work experience", solution: "Surface projects, coursework, and transferable skills effectively" },
                  { challenge: "High competition", solution: "Smart targeting finds less competitive opportunities" },
                  { challenge: "Unclear requirements", solution: "AI analyzes descriptions for specific improvement recommendations" },
                  { challenge: "Visa hurdles", solution: "Automatic detection of sponsorship-friendly employers" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="border-l-2 border-blue-500 pl-4">
                    <div className="text-rose-300 text-sm mb-1">Challenge: {item.challenge}</div>
                    <div className="text-emerald-300 text-base font-medium">Solution: {item.solution}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works - Steps */}
      <section className="py-24 px-6 relative z-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 font-heading text-slate-900">How GetLanded works</h2>
            <p className="text-lg text-slate-500 font-medium">Browser → AI Reads → Insights → Save & Track → Apply</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { num: "1", title: "Browse Jobs", desc: "Use LinkedIn, Indeed, or career pages normally." },
              { num: "2", title: "AI Analyzes", desc: "Extension captures and analyzes requirements in real-time." },
              { num: "3", title: "Get Insights", desc: "See fit scores, missing skills, and recommendations." },
              { num: "4", title: "Save & Track", desc: "One-click save to dashboard with smart reminders." }
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Available Now - Feature Cards */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-heading text-slate-900">Available now in the Free Beta</h2>
            <p className="text-xl text-slate-600">All features listed below are live and included.</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: Layout,
                title: "AI Job Tracker",
                desc: "Centralizes all your job applications into a single dashboard.",
                color: "green"
              },
              {
                icon: FileSearch,
                title: "Resume Fit Score",
                desc: "Shows how closely your resume matches a specific job description.",
                color: "purple"
              },
              {
                icon: Globe,
                title: "Visa Sponsorship Signals",
                desc: "Highlights sponsorship-friendly employers and flags risks early.",
                color: "blue"
              },
              {
                icon: BrainCircuit,
                title: "AI Copilot on Job Pages",
                desc: "Works directly on job boards to analyze roles in real-time.",
                color: "cyan"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 items-start"
              >
                <div className={`w-20 h-20 rounded-3xl bg-${feature.color}-50 flex items-center justify-center shrink-0`}>
                  <feature.icon className={`w-10 h-10 text-${feature.color}-600`} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                    <span className={`text-xs font-bold uppercase tracking-wider text-${feature.color}-700 bg-${feature.color}-100 px-3 py-1 rounded-full`}>Available Now</span>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 max-w-3xl">{feature.desc}</p>
                  <div className="flex gap-2">
                    <CheckCircle2 className={`w-5 h-5 text-${feature.color}-600`} />
                    <span className="text-slate-500 text-sm font-medium">Included in Free Beta</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-6 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-heading text-slate-900">Coming soon</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The following features are actively in development and will be released after the initial beta launch.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {comingSoonFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -5, borderColor: '#F59E0B' }}
                className="group p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-amber-500" strokeWidth={2} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100">
                    <span className="text-xs font-bold text-amber-600 uppercase">Coming Soon</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          className="max-w-5xl mx-auto rounded-[3.5rem] bg-primary p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-white opacity-10 bg-[size:2rem_2rem] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-heading text-white">Start your job search with clarity</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button className="rounded-full bg-white text-primary hover:bg-slate-50 px-12 py-7 text-xl font-bold shadow-xl transition-transform hover:scale-105">
                Join Free Beta
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-blue-100 text-base font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> No credit card required</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> 2-minute setup</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
