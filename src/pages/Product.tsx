import { motion, useScroll, useTransform, Variants, useSpring } from 'framer-motion';
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

// EXPLOSIVE Animation Variants - High Energy
const explosiveEntry: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 100,
    rotateX: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.8
    }
  }
};

const deckOfCards: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    rotateX: 60,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: i * 0.15,
      duration: 0.8
    }
  })
};

const cascadeReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotateY: -30,
    scale: 0.85
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delay: i * 0.12,
    }
  })
};

const dramaticSlide: Variants = {
  hidden: {
    opacity: 0,
    x: -200,
    scale: 0.7,
    rotate: -12
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 1
    }
  }
};

const dramaticSlideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 200,
    scale: 0.7,
    rotate: 12
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 1
    }
  }
};

const staggerExplosive: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Floating Particles Component
function FloatingParticles() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#70ADEF]/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

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

// Available Features Data with images
const availableFeatures = [
  {
    icon: Layout,
    title: "AI Job Tracker",
    image: "/job_tracker_feature_1768243379454.png",
    shortDesc: "Centralizes all your job applications into a single dashboard so you always know what you've applied to, where you stand, and what to do next.",
    capabilities: [
      "Save job applications from any job board",
      "Track application status (saved, applied, interview)",
      "Store deadlines, notes, and key contacts",
      "View all applications in one organized place"
    ],
    value: "Eliminates lost applications, forgotten deadlines, and manual tracking."
  },
  {
    icon: FileSearch,
    title: "Resume Fit Score",
    image: "/resume_fit_score_1768243395339.png",
    shortDesc: "Shows how closely your resume matches a specific job description with actionable insights.",
    capabilities: [
      "AI-powered fit score based on resume vs job description",
      "Identification of missing skills and keywords",
      "Actionable suggestions to improve alignment",
      "Real-time analysis as you browse jobs"
    ],
    value: "Helps students avoid applying blindly and focus on roles they are competitive for."
  },
  {
    icon: Globe,
    title: "Visa Sponsorship Signal Detection",
    image: "/visa_sponsorship_1768243412954.png",
    shortDesc: "Highlights sponsorship-friendly employers and flags risks early for international students.",
    note: "This feature provides signals and indicators, not guarantees.",
    capabilities: [
      "Sponsorship signal detection based on historical data",
      "Location-aware insights for international applicants",
      "Company sponsorship history tracking",
      "Designed specifically for international job seekers"
    ],
    value: "Reduces wasted applications and improves targeting for international students."
  },
  {
    icon: BrainCircuit,
    title: "AI Copilot on Job Pages",
    image: "/ai_copilot_feature_1768243429211.png",
    shortDesc: "Works directly on job boards like LinkedIn, Indeed, and company career pages to provide instant insights.",
    workflow: [
      "Browse a job listing on any supported job board",
      "AI automatically reads and analyzes the description",
      "See resume fit score, missing keywords, and insights",
      "Save and track the job with one click"
    ],
    value: "Removes the need to switch tabs, copy job descriptions, or manually analyze roles."
  }
];

export function Product() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects with spring physics
  const heroY = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 150]), {
    stiffness: 100,
    damping: 30
  });

  const bgY1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), {
    stiffness: 100,
    damping: 30
  });

  const bgY2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), {
    stiffness: 100,
    damping: 30
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const gridScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 relative overflow-hidden font-sans">
      {/* Animated Background Grid - Matching Home Page with Parallax */}
      <motion.div
        style={{ opacity: gridOpacity, scale: gridScale }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated Background Gradients with Parallax - Professional Blue Theme */}
      <motion.div
        style={{ y: bgY1 }}
        className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#70ADEF]/20 rounded-full blur-[140px]"
      />
      <motion.div
        style={{ y: bgY2 }}
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#5299E5]/15 rounded-full blur-[140px]"
      />
      <motion.div
        style={{ y: bgY1 }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#5299E5]/20 rounded-full blur-[120px]"
      />

      {/* Hero Section with Explosive Entry */}
      <motion.section
        style={{ y: heroY }}
        className="relative pt-32 pb-20 px-6 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.8
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F3FC] border border-[#D6EAFF] mb-8 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-[#5299E5]" />
                </motion.div>
                <span className="text-sm font-bold text-[#2A74C9] tracking-wide">AI COPILOT FOR JOB SEARCH</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 0.1,
                  duration: 1
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading tracking-tight leading-[1.1] text-slate-900"
              >
                Track, organize, and<br />
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-gradient-to-r from-[#3D84D8] via-[#2A74C9] to-[#3D84D8] bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  apply smarter all in one place
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.3
                }}
                className="text-xl text-slate-600 mb-10 leading-relaxed"
              >
                GetLanded is an AI-powered job search copilot built specifically for students and early-career professionals.
                It helps you track applications, understand job requirements, and focus on roles where you actually have a chance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-5"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="group rounded-full bg-gradient-to-r from-[#3D84D8] to-[#2A74C9] hover:from-[#2A74C9] hover:to-[#1D5FA3] text-white px-10 py-6 text-lg font-bold shadow-2xl shadow-[#5299E5]/40 transition-all relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="flex items-center gap-2 relative z-10">
                      Join Free Beta
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="rounded-full px-10 py-6 text-lg font-bold border-2 border-[#5299E5] text-[#2A74C9] hover:bg-[#E8F3FC] transition-colors shadow-lg">
                    <span className="flex items-center gap-2">
                      <PlayCircle className="w-5 h-5" />
                      Watch Demo
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Smaller Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.4
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D6EAFF] w-80 h-80">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3D84D8]/20 to-transparent" />
              </div>

              {/* Floating stats card - smaller */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border-2 border-[#D6EAFF]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5299E5] to-[#2A74C9] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">2.3M+</div>
                    <div className="text-xs text-slate-600">Active Users</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem / Solution Grid with Dramatic Slides */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={explosiveEntry}
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
              variants={dramaticSlide}
              whileHover={{
                scale: 1.02,
                rotate: -1,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
              }}
              className="p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-8 font-heading text-slate-900">Most students:</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerExplosive}
                className="space-y-6"
              >
                {[
                  "Apply across multiple job boards",
                  "Lose track of applications and deadlines",
                  "Don't know if their resume is a fit",
                  "Waste time on roles that won't sponsor visas",
                  "Don't know what to improve next"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cascadeReveal}
                    custom={i}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5"
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </motion.div>
                    <span className="text-slate-600 text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={dramaticSlideRight}
              whileHover={{
                scale: 1.02,
                rotate: 1,
                boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)"
              }}
              className="p-10 rounded-3xl bg-gradient-to-br from-[#3D84D8] to-[#2A74C9] border-2 border-[#5299E5] relative overflow-hidden text-white shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-[#70ADEF]/10 pointer-events-none"
                animate={{
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <h3 className="text-2xl font-bold mb-8 font-heading relative text-white">GetLanded fixes these problems first.</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerExplosive}
                className="space-y-8 relative"
              >
                {[
                  { challenge: "Limited work experience", solution: "Surface projects, coursework, and transferable skills effectively" },
                  { challenge: "High competition", solution: "Smart targeting finds less competitive opportunities" },
                  { challenge: "Unclear requirements", solution: "AI analyzes descriptions for specific improvement recommendations" },
                  { challenge: "Visa hurdles", solution: "Automatic detection of sponsorship-friendly employers" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cascadeReveal}
                    custom={i}
                    whileHover={{ x: 10, borderLeftWidth: "4px" }}
                    className="border-l-2 border-[#5299E5]/40 pl-4 transition-all"
                  >
                    <div className="text-blue-100 text-sm mb-1">Challenge: {item.challenge}</div>
                    <div className="text-white text-base font-medium">Solution: {item.solution}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works - Deck of Cards Animation */}
      <section className="py-24 px-6 relative z-10 bg-[#E8F3FC]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={explosiveEntry}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 font-heading text-slate-900">How GetLanded works</h2>
            <p className="text-lg text-slate-600 font-medium">Browser → AI Reads → Insights → Save & Track → Apply</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 perspective-1000">
            {[
              { num: "1", title: "Browse Jobs", desc: "Use LinkedIn, Indeed, or career pages normally." },
              { num: "2", title: "AI Analyzes", desc: "Extension captures and analyzes requirements in real-time." },
              { num: "3", title: "Get Insights", desc: "See fit scores, missing skills, and recommendations." },
              { num: "4", title: "Save & Track", desc: "One-click save to dashboard with smart reminders." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i}
                variants={deckOfCards}
                whileHover={{
                  y: -20,
                  scale: 1.08,
                  rotate: i % 2 === 0 ? 3 : -3,
                  zIndex: 50,
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 rounded-3xl bg-white border-2 border-[#D6EAFF] hover:border-[#5299E5]/40 shadow-lg group cursor-pointer"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5299E5] to-[#2A74C9] flex items-center justify-center text-xl font-bold text-white mb-6 shadow-xl"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {step.num}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Now - Static Current Card with Smooth Incoming Animation */}
      <section className="py-32 px-6 relative z-10 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-150px", amount: 0.3 }}
            variants={explosiveEntry}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold uppercase tracking-wider shadow-lg">
                Live Features
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading text-slate-900">
              Available now in the <span className="bg-gradient-to-r from-[#3D84D8] to-[#2A74C9] bg-clip-text text-transparent">Free Beta</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              All features listed below are live, usable, and included in the Free Beta plan.
            </p>
          </motion.div>

          {/* Stacking Cards - Each card appears in viewport and stays static */}
          <div className="space-y-32 max-w-6xl mx-auto">
            {availableFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 150, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{
                  once: false,
                  margin: "-20%",
                  amount: 0.3
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 25,
                  mass: 1,
                  duration: 0.8
                }}
                className="relative"
              >
                {/* Card - Image on Left, Content on Right */}
                <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#D6EAFF] overflow-hidden hover:shadow-3xl hover:border-[#D6EAFF] transition-shadow duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left: Image */}
                    <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5299E5]/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Right: Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      {/* Title and Badge */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                            {feature.title}
                          </h3>
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide border border-green-200">
                            ✓ Live
                          </span>
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {feature.shortDesc}
                        </p>
                      </div>

                      {/* Note if exists */}
                      {feature.note && (
                        <div className="mb-6 p-4 rounded-xl bg-amber-50 border-l-4 border-amber-400">
                          <p className="text-sm text-amber-800 font-medium">{feature.note}</p>
                        </div>
                      )}

                      {/* Core Capabilities */}
                      {feature.capabilities && (
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Key Capabilities</h4>
                          <ul className="space-y-2.5">
                            {feature.capabilities.map((capability, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-slate-700"
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#5299E5] shrink-0 mt-0.5" />
                                <span>{capability}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Workflow if exists */}
                      {feature.workflow && (
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">How It Works</h4>
                          <ol className="space-y-2.5">
                            {feature.workflow.map((step, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-slate-700"
                              >
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0 mt-0.5">
                                  {idx + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Primary User Value */}
                      <div className="mt-auto pt-6 border-t-2 border-[#D6EAFF]">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3D84D8] to-[#2A74C9] flex items-center justify-center shrink-0">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#2A74C9] uppercase tracking-wide mb-1">Value</h4>
                            <p className="text-slate-900 font-medium">{feature.value}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Deck Spread Animation */}
      <section className="py-24 px-6 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={explosiveEntry}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-heading text-slate-900">Coming soon</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The following features are actively in development and will be released after the initial beta launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                variants={deckOfCards}
                whileHover={{
                  y: -15,
                  rotate: i % 2 === 0 ? 2 : -2,
                  scale: 1.05,
                  borderColor: '#3B82F6',
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="group p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-lg cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-[#E8F3FC] flex items-center justify-center shadow-md"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#DBEAFE"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <feature.icon className="w-7 h-7 text-[#5299E5]" strokeWidth={2} />
                  </motion.div>
                  <motion.div
                    className="px-3 py-1 rounded-full bg-[#E8F3FC] border border-[#D6EAFF]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xs font-bold text-[#5299E5] uppercase">Coming Soon</span>
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#5299E5] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Explosive Entry */}
      <section className="py-24 px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={explosiveEntry}
          whileHover={{ scale: 1.02 }}
          className="max-w-5xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-[#3D84D8] to-[#2A74C9] p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Animated Grid Pattern Overlay */}
          <motion.div
            className="absolute inset-0 bg-white opacity-10 bg-[size:2rem_2rem] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"
            animate={{
              backgroundPosition: ["0px 0px", "32px 32px"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Animated Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-300/20 to-blue-400/20"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="relative z-10">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 font-heading text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Start your job search with clarity
            </motion.h2>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -3, 3, 0] }}
                whileTap={{ scale: 0.9 }}
              >
                <Button className="rounded-full bg-white text-[#2A74C9] hover:bg-slate-50 px-12 py-7 text-xl font-bold shadow-2xl transition-all relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Join Free Beta</span>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-8 text-blue-100 text-base font-medium flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1, x: 5 }}
              >
                <CheckCircle2 className="w-5 h-5" /> No credit card required
              </motion.span>
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1, x: 5 }}
              >
                <Clock className="w-5 h-5" /> 2-minute setup
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
