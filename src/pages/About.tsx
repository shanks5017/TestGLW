import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import {
  Users,
  GraduationCap,
  Globe,
  UserCircle,
  Shield,
  Lock,
  CircleDollarSign,
  Minus,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import { Button } from '../components/ui/Button';

// PROFESSIONAL MOTION VARIANTS
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Floating Particles Component - High Density
function FloatingParticles() {
  const particles = Array.from({ length: 45 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
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

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Grid effects synced with Product Page
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const gridScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans selection:bg-[#E8F3FC] selection:text-blue-700 relative overflow-hidden">

      {/* GLOBAL DYNAMIC BACKGROUND SYSTEM - SYNCED WITH PRODUCT PAGE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Grid - Matching Product Page Scroll Effects */}
        <motion.div
          style={{ opacity: gridOpacity, scale: gridScale }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />

        {/* Floating Particles - 1:1 Parity */}
        <FloatingParticles />
      </div>

      {/* 1. HERO SECTION */}
      <motion.section
        style={{ y: heroY }}
        className="relative pt-48 pb-24 min-h-[85vh] flex flex-col justify-center z-10"
      >
        <div className="max-w-7xl mx-auto px-6 relative w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 text-[#0463c7] font-bold tracking-[0.2em] text-sm md:text-base uppercase">
              <Minus className="w-5 h-5" />
              Our Mission
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-[72px] font-normal tracking-tight text-[#111827] leading-[1.05] max-w-4xl"
            >
              We built GetLanded because <br />
              job searching as a student <br />
              is <span className="text-slate-400">broken.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-normal"
            >
              Not because students aren't capable — but because the tools weren't built for them.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-4">
              <Button className="rounded-full px-12 py-7 bg-slate-950 text-white hover:bg-slate-800 transition-all font-bold text-lg shadow-2xl shadow-slate-200">
                Start free
              </Button>
              <Button variant="ghost" className="rounded-full px-10 py-7 text-slate-600 hover:text-slate-950 font-bold text-lg transition-all underline decoration-slate-200 underline-offset-8 decoration-2">
                How it works
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. THE PROBLEM GRID */}
      <section className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-950 tracking-tight leading-[1.1]">Why GetLanded exists</h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-normal">
                We were students too. We watched smart, capable people get rejected—not because they lacked skill, but because the process was chaotic, opaque, and designed for experienced professionals.
              </p>

              <div className="pt-12 border-t border-slate-200">
                <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  The problem wasn't effort. <br />
                  <span className="text-[#0463c7] font-heading underline decoration-blue-100 underline-offset-8 decoration-4">It was the system.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6"
            >
              {[
                "Applications spread across dozens of job boards",
                "No clear way to know if a resume actually fits a role",
                "Silence after applying, with no feedback",
                "International students left guessing about sponsorship"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-10 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-[2.5rem] shadow-sm flex gap-6 items-center group hover:border-[#0463c7]/20 hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0463c7] group-hover:scale-150 transition-transform shrink-0" />
                  <span className="text-slate-800 text-lg font-semibold leading-snug">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-slate-950">Our approach</h2>
              <div className="h-1.5 w-24 bg-[#0463c7] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                "Doesn't apply for jobs on your behalf.",
                "Doesn't spam recruiters.",
                "Doesn't promise shortcuts."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="p-10 rounded-[2.5rem] bg-slate-50/50 backdrop-blur-sm border border-slate-100 shadow-sm text-slate-500 text-xl font-medium leading-relaxed"
                >
                  <span className="text-slate-950 font-bold block mb-2">GetLanded</span>
                  {text}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl"
            >
              <p className="text-3xl md:text-[42px] font-bold text-slate-900 leading-[1.15] tracking-tight">
                Instead, it helps you understand <span className="text-[#0463c7]">where you stand</span>, what's missing, and what to do next — so every application is <span className="underline decoration-blue-100 underline-offset-[16px] decoration-4">intentional.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S BUILT FOR */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-950 text-white rounded-[3rem] overflow-hidden p-16 lg:p-24 relative shadow-3xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0352a8]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="mb-24 space-y-6 max-w-2xl">
                <h2 className="text-4xl md:text-[52px] font-bold font-heading tracking-tight leading-tight">Who GetLanded is built for</h2>
                <p className="text-slate-400 text-xl font-medium">Four groups, one common goal: Clarity.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
                {[
                  { title: "Students", desc: "Navigating internships, campus hiring, and first roles without insider knowledge.", icon: GraduationCap },
                  { title: "New Graduates", desc: "Turning academic experience into applications that make sense to employers.", icon: UserCircle },
                  { title: "International Students", desc: "Searching with visa constraints, sponsorship filters, and higher stakes.", icon: Globe },
                  { title: "Career Switchers", desc: "Repositioning skills without starting from zero.", icon: Users }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="space-y-8 group"
                  >
                    <div className="w-14 h-14 border border-slate-800 rounded-2xl flex items-center justify-center text-[#70ADEF] group-hover:bg-[#0463c7] group-hover:border-transparent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(0,71,255,0.4)] transition-all duration-500">
                      <item.icon strokeWidth={1.5} className="w-7 h-7" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-2xl text-white tracking-tight">{item.title}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & PRIVACY */}
      <section className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center mb-28">
            <h2 className="text-4xl md:text-[52px] font-bold font-heading tracking-tight text-slate-950">Trust, privacy, and boundaries</h2>
            <div className="h-1.5 w-24 bg-[#D6EAFF] mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-20 mb-20">
            {[
              { icon: Shield, title: "No Data Selling", desc: "We do not sell personal data. Not to employers. Not to advertisers. Not ever." },
              { icon: Lock, title: "User-Initiated Access", desc: "The Chrome extension only runs when you choose to save or analyze a job. You stay in control." },
              { icon: CircleDollarSign, title: "Clear Pricing", desc: "No hidden fees. No fake discounts. You can cancel anytime, in one click." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#E8F3FC] flex items-center justify-center">
                  <item.icon strokeWidth={1.2} className="w-9 h-9 text-[#0463c7]" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading uppercase tracking-widest text-slate-950 leading-snug">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center text-center pt-16 border-t border-slate-100"
          >
            <p className="text-slate-500 text-2xl leading-relaxed font-medium max-w-3xl italic">
              "Your career data is sensitive. We treat it that way."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-10 mb-24">
            <div className="px-5 py-2.5 rounded-full border border-blue-100 bg-white/80 backdrop-blur shadow-sm flex items-center gap-2 text-[#0463c7] text-sm font-bold tracking-tight">
              <Users className="w-4 h-4" />
              Team
            </div>
            <div>
              <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-slate-950 leading-[1.05]">
                Our Talented <br />
                <span className="text-[#0463c7]">Team Members</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 justify-center max-w-5xl mx-auto w-full">
            {[
              {
                name: "Nivin Vincent Raj",
                role: "Founder & CEO",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
              },
              {
                name: "Shameer B",
                role: "Chief Technology Officer",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300"
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group p-16 bg-white/40 backdrop-blur-sm border border-slate-200 rounded-[3.5rem] flex flex-col items-center text-center space-y-10 hover:bg-white/70 transition-all duration-700 hover:shadow-2xl hover:border-blue-100"
              >
                <div className="w-44 h-44 rounded-full overflow-hidden border-8 border-white shadow-2xl relative transition-transform duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 bg-[#D6EAFF] group-hover:bg-blue-200 transition-colors" />
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-3xl font-heading text-slate-950 tracking-tight">{member.name}</h3>
                  <p className="text-[#0463c7] text-xl font-bold tracking-tight uppercase">{member.role}</p>
                </div>

                <div className="flex gap-5">
                  {[Mail, Linkedin, Github].map((Icon, idx) => (
                    <button key={idx} className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-600 border border-slate-100 hover:bg-[#0463c7] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-48 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-16"
          >
            <div className="space-y-8">
              <h2 className="text-5xl md:text-[72px] font-bold font-heading tracking-tight leading-[1] text-slate-950 max-w-5xl mx-auto">
                If you're navigating your first job search, <br />
                <span className="text-[#0463c7]">we built this for you.</span>
              </h2>
              <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                Start making intentional applications today. <br />
                Your first role is closer than you think.
              </p>
            </div>

            <div className="pt-8">
              <Button className="px-16 py-8 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all font-bold text-xl shadow-[0_20px_50px_rgba(15,23,42,0.15)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
                Get started for free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
