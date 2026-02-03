import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Target,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Scale,
  Lightbulb,
  Lock,
  Heart,
  Chrome,
  Bot,
  Cpu,
  Network,
  Code,
  Database,
  Briefcase,
  Trophy
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { TabletDisplay } from '../components/home/TabletDisplay';

// --- Animation Variants ---
const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerChildren: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn: any = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// --- Timeline Phase Data ---
const timelinePhases = [
  {
    id: 1,
    title: "The Spark",
    description: "A minimalist browser extension to help students save jobs from any site.",
    highlightWords: ["browser extension", "save jobs"],
    icon: Chrome,
    color: "bg-[#0463c7]"
  },
  {
    id: 2,
    title: "The Expansion",
    description: "Adding visa sponsorship insights to level the playing field.",
    highlightWords: ["visa sponsorship"],
    faIcon: "fa-solid fa-maximize",
    color: "bg-[#0463c7]"
  },
  {
    id: 3,
    title: "The Co-Pilot",
    description: "A full AI platform to guide candidates from application to offer.",
    highlightWords: ["AI-driven platform", "job search journey"],
    icon: Bot,
    color: "bg-[#0463c7]"
  }
];

// --- Core Pillars Data ---
const corePillars = [
  {
    title: "Fairness & Transparency",
    description: "We prioritize equal opportunity by clearly indicating visa sponsorship options and avoiding hidden algorithms. Our tools are built to foster trust and clarity in the hiring process.",
    icon: Scale,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Innovation",
    description: "We’re constantly pushing the boundaries of what’s possible with AI to give candidates a competitive edge.",
    icon: Lightbulb,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Privacy & Security",
    description: "Your career data is personal. We treat it with the highest level of security and never sell your data.",
    icon: Lock,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Empathy",
    description: "We understand the stress of job hunting. Every feature we build is designed to reduce anxiety.",
    icon: Heart,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    title: "True Clarity",
    description: "Cutting through the noise to give you actionable insights and clear next steps.",
    icon: Target,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Global Reach",
    description: "Helping talent cross borders. We specialize in international career mobility.",
    icon: Globe,
    color: "text-teal-600",
    bg: "bg-teal-50"
  }
];

// --- Team Data ---
const teamMembers = [
  {
    name: "Nivin Vincent Raj",
    role: "Founder & CEO",
    expertise: "Software Engineering & Product Vision",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600",
    links: { mail: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Shameer B",
    role: "Chief Technology Officer",
    expertise: "AI/ML & Backend Architecture",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600",
    links: { mail: "#", linkedin: "#", github: "#" }
  }
];

// --- Floating Particles for Global Impact ---
function GlobalParticles() {
  const particles = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/40"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0463c7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0463c7" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 10}%`}
            y1={`${30 + (i % 3) * 20}%`}
            x2={`${50 + i * 5}%`}
            y2={`${50 + (i % 2) * 30}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>
    </div>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const genesisRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);

  const isManifestoInView = useInView(manifestoRef, { once: true, margin: "-20%" });





  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden relative">

      {/* Background Grid - Matching Home Page */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-20 px-6 overflow-hidden z-10 flex flex-col justify-center min-h-[70vh]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: 3D Tablet Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="lg:col-span-7 flex justify-center items-center relative order-2 lg:order-1 -mt-10 md:-mt-6 lg:mt-10"
            >
              {/* Responsive Container to enforce layout size */}
              <div className="relative w-[216px] h-[312px] sm:w-[288px] sm:h-[416px] md:w-[324px] md:h-[468px] lg:w-[360px] lg:h-[520px] transition-[width,height] duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform scale-[0.6] sm:scale-[0.8] md:scale-[0.9] lg:scale-100 transition-transform duration-500">
                  <TabletDisplay />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="lg:col-span-5 space-y-8 text-left order-1 lg:order-2"
            >
              <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-2 mb-8">
                <div className="h-px w-8 bg-[#0463c7]/30"></div>
                <span className="text-[#0463c7] font-bold text-xs tracking-widest uppercase">Our Mission</span>
                <div className="h-px w-8 bg-[#0463c7]/30"></div>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[64px] font-normal tracking-tight text-[#111827] leading-[1.1] mt-6 md:mt-8 lg:mt-0">
                Empowering every student to <br />
                <span className="text-slate-400">launch their dream career.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl text-slate-500 font-medium leading-relaxed tracking-tight max-w-lg">
                We’re building the co-pilot for the modern job search—transparent, intelligent, and fair.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-start gap-5 pt-2"
              >
                <Button className="h-14 px-8 rounded-full bg-[#0463c7] text-white hover:bg-[#0352a8] text-lg font-medium shadow-lg shadow-blue-500/20 transition-all">
                  Join the movement
                </Button>
                <Button variant="ghost" className="h-14 px-8 rounded-full text-slate-600 hover:text-slate-900 text-lg font-medium hover:bg-slate-100 border border-slate-200">
                  Read our story <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========== SECTION 2: THE GENESIS (Split Scroll) ========== */}
      <section ref={genesisRef} className="py-24 lg:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Left: Sticky Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="lg:sticky lg:top-32 space-y-8"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-[#0463c7]/30"></div>
                <span className="text-[#0463c7] font-bold text-sm tracking-widest uppercase">Our Origin</span>
                <div className="h-px w-8 bg-[#0463c7]/30"></div>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight leading-[1.1]">
                It started with a simple problem.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                Applying to jobs was a mess of spreadsheets, 50 open tabs, and forgotten passwords. We wanted a way to save jobs from anywhere and see real insights instantly.
              </motion.p>
            </motion.div>

            {/* Right: Morphing Graphic (Liverpool Map Dot) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden bg-slate-100"
            >
              {/* Abstract Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50" />
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path d="M50,200 Q100,100 200,150 T350,200 T200,350 T50,200" fill="none" stroke="#0463c7" strokeWidth="0.5" opacity="0.5" />
                  <path d="M100,50 Q200,100 250,200 T300,350" fill="none" stroke="#0463c7" strokeWidth="0.5" opacity="0.3" />
                  <path d="M350,100 Q300,200 200,250 T50,300" fill="none" stroke="#0463c7" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>

              {/* Liverpool Dot */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-blue-600"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 w-6 h-6 rounded-full bg-blue-600"
                    animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-sm font-bold text-blue-600 bg-white px-3 py-1 rounded-full shadow-lg">Built in Liverpool, UK</span>
                  </div>
                </div>
              </div>

              {/* Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100">
                <p className="text-slate-700 italic text-lg">"We built the tool we wished we had."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: EVOLUTION TIMELINE ========== */}
      <section className="py-24 lg:py-32 px-6 bg-slate-50/80 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-24 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight">The Evolution</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              What started as a browser extension evolved into a comprehensive co-pilot for your job search journey.
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Animated Center Line - SVG for smooth animation */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-px">
              <motion.div
                className="w-full bg-gradient-to-b from-slate-200 via-[#0463c7] to-[#0463c7]"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="space-y-32 md:space-y-40">
              {timelinePhases.map((phase, i) => {
                // Function to highlight keywords in blue
                const renderDescription = () => {
                  let text = phase.description;
                  const highlights = phase.highlightWords || [];
                  const parts: React.ReactNode[] = [];
                  let lastIndex = 0;

                  // Simple matching for highlighting (case-insensitive)
                  const lowerText = text.toLowerCase();

                  // Find the first occurrence of any highlight word
                  // Note: This simple implementation assumes non-overlapping highlights
                  // for a improved version, we would need a more complex regex approach
                  // But for this specific content, it should work fine.

                  // Let's iterate through the text to find matches
                  const allMatches: { word: string; index: number; length: number }[] = [];
                  highlights.forEach(word => {
                    const index = lowerText.indexOf(word.toLowerCase());
                    if (index !== -1) {
                      allMatches.push({ word, index, length: word.length });
                    }
                  });

                  // Sort matches by index
                  allMatches.sort((a, b) => a.index - b.index);

                  if (allMatches.length === 0) return text;

                  allMatches.forEach((match) => {
                    if (match.index > lastIndex) {
                      parts.push(text.substring(lastIndex, match.index));
                    }
                    parts.push(
                      <span key={match.index} className="text-[#0463c7] font-semibold">
                        {text.substring(match.index, match.index + match.length)}
                      </span>
                    );
                    lastIndex = match.index + match.length;
                  });

                  if (lastIndex < text.length) {
                    parts.push(text.substring(lastIndex));
                  }

                  return parts;
                };

                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'}`}>
                      <motion.div
                        className="group bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 inline-block relative overflow-hidden cursor-default"
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {/* Glassmorphism hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Glow effect on hover */}
                        <div className={`absolute -inset-1 ${phase.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />

                        <div className="relative z-10">
                          <motion.div
                            className={`w-14 h-14 ${phase.color} rounded-[50px] flex items-center justify-center mb-6 ${i % 2 === 0 ? 'md:ml-auto' : ''} shadow-lg`}
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {((phase as any).faIcon) ? (
                              <i className={`${(phase as any).faIcon} text-xl text-white`}></i>
                            ) : (
                              (() => {
                                const Icon = (phase as any).icon;
                                return Icon ? <Icon className="w-7 h-7 text-white" /> : null;
                              })()
                            )}
                          </motion.div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                          <p className="text-slate-600 text-lg leading-relaxed">{renderDescription()}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Node - Enhanced with pulse animation */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                        className="relative"
                      >
                        {/* Outer pulsing ring */}
                        <motion.div
                          className={`absolute inset-0 w-8 h-8 rounded-full ${phase.color}`}
                          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                          style={{ left: "-6px", top: "-6px" }}
                        />
                        {/* Main node */}
                        <div className={`w-5 h-5 rounded-full ${phase.color} ring-4 ring-white shadow-lg relative z-10`} />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: MANIFESTO (Full Screen Dark) ========== */}
      <section ref={manifestoRef} className="relative py-32 lg:py-48 px-6 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        {/* Aura / Pulse Background */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(4,99,199,0.3) 0%, transparent 70%)'
          }}
          animate={isManifestoInView ? { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95]"
          >
            The job search is broken. <br />
            We’re fixing it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200/80 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We believe that finding a job shouldn’t be a full-time job. The current system is opaque, inefficient, and often unfair. We’re using AI not to replace the human element, but to empower candidates with the insights and tools they need to tell their story effectively.
          </motion.p>
        </div>
      </section>

      {/* ========== SECTION 5: THE INTELLIGENCE (Tech Stack) ========== */}
      <section className="py-20 lg:py-32 px-6 bg-slate-950 relative z-10 overflow-hidden">
        {/* Tech Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                <Cpu className="w-3 h-3" />
                <span>The Intelligence</span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Precision.</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-xl text-slate-400 leading-relaxed">
                Our platform isn't just a database—it's a living, breathing neural network that learns from thousands of successful applications to guide you toward your best career move.
              </motion.p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Database, label: "Real-time Data" },
                  { icon: Network, label: "Neural Matching" },
                  { icon: Code, label: "Automated Analysis" },
                  { icon: Lock, label: "Enterprise Security" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Abstract Tech Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] border border-slate-800 p-8 overflow-hidden shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(4,99,199,0.1),transparent_70%)]" />

              {/* Floating Tech Nodes */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col items-center gap-2"
                    initial={{
                      x: Math.random() * 300,
                      y: Math.random() * 300
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    style={{
                      top: `${20 + Math.random() * 40}%`,
                      left: `${20 + Math.random() * 40}%`
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg relative z-10 group cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    </div>
                    <div className="h-20 w-px bg-gradient-to-b from-blue-500/50 to-transparent absolute top-12" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: IMPACT BY THE NUMBERS ========== */}
      <section className="py-16 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { number: "50+", label: "Universities Partnered", icon: Briefcase },
              { number: "10k+", label: "Resumes Analyzed", icon: Code },
              { number: "95%", label: "Success Rate", icon: Trophy },
              { number: "24/7", label: "AI Availability", icon: Bot }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center pt-8 md:pt-0 pl-0 md:pl-8 first:pl-0"
              >
                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-[#0463c7] mb-6">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">{stat.number}</div>
                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: CORE PILLARS (Enhanced Bento Grid) ========== */}
      <section className="py-24 lg:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-24 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight">Our Core Pillars</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">The values that guide every decision we make.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glass Hover Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`w-14 h-14 ${pillar.bg} rounded-[50px] flex items-center justify-center mb-6 ${pillar.color} relative z-10`}>
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: GLOBAL IMPACT ========== */}
      <section className="py-24 lg:py-32 px-6 bg-slate-50 relative z-10 overflow-hidden">
        <GlobalParticles />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight">
              A Global Movement
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering candidates worldwide to focus on presenting their best selves—making meaningful connections between talent and opportunity.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { value: "50+", label: "Countries Reached" },
              { value: "10K+", label: "Applications Tracked" },
              { value: "95%", label: "User Satisfaction" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/30 border border-slate-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION 9: THE COLLECTIVE (Enhanced Team) ========== */}
      <section className="py-24 lg:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Wide Intro Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-24 space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight">The Collective</h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              GetLanded is a diverse collective of software engineers, data scientists, and career coaches. Our founding team has experience at top tech companies and recruitment agencies. We partner closely with immigration specialists to ensure our visa checks remain up to date.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 mb-8 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  />
                  {/* Hover Overlay with Expertise */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="space-y-4">
                      <div className="text-sm font-bold text-blue-400 uppercase tracking-wider">Expertise</div>
                      <div className="text-white text-lg">{member.expertise}</div>
                      <div className="flex gap-4 pt-4">
                        <a href={member.links.mail} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all">
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href={member.links.linkedin} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.links.github} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all">
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-[#0463c7] font-semibold tracking-widest uppercase text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 10: FOOTER CTA ========== */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto bg-[#0463c7] rounded-[3rem] overflow-hidden relative shadow-2xl shadow-blue-900/20 text-white p-12 lg:p-20 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-20" />

          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
              Ready to land <br />
              your dream job?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium">
              Everything you need to organize, optimize, and track your applications. In one place.
            </p>
            <div className="pt-8">
              <Button className="h-20 px-12 rounded-full bg-white text-[#0463c7] hover:bg-blue-50 text-xl font-bold border-2 border-transparent shadow-xl transition-all transform hover:scale-105">
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
