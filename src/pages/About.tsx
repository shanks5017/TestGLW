import { useRef } from 'react';
import { motion } from 'framer-motion';

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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans selection:bg-blue-50 selection:text-blue-700 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-slate-100 min-h-[70vh] flex flex-col justify-center">
        {/* Exact Home Page Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 text-[#0047FF] font-bold tracking-[0.2em] text-sm md:text-base uppercase">
              <Minus className="w-5 h-5" />
              Our Mission
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-[64px] font-normal tracking-tight text-[#111827] leading-[1.1] max-w-4xl"
            >
              We built GetLanded because <br />
              job searching as a student <br />
              is <span className="text-slate-400">broken.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-normal"
            >
              Not because students aren't capable — but because the tools weren't built for them.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4 pt-6">
              <Button className="rounded-full px-10 py-7 bg-slate-950 text-white hover:bg-slate-800 transition-all font-bold text-lg">
                Start free
              </Button>
              <Button variant="ghost" className="rounded-full px-10 py-7 text-slate-600 hover:text-slate-950 font-bold text-lg transition-all underline decoration-slate-200 underline-offset-8">
                How it works
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM GRID */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.4]" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-950 tracking-tight leading-[1.1]">Why GetLanded exists</h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-normal">
                We were students too. We watched smart, capable people get rejected—not because they lacked skill, but because the process was chaotic, opaque, and designed for experienced professionals.
              </p>

              <div className="pt-10 border-t border-slate-200">
                <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  The problem wasn't effort. <br />
                  <span className="text-[#0047FF] font-heading underline decoration-[#d1dbff] underline-offset-8">It was the system.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid gap-5"
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
                  className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm flex gap-6 items-center group hover:border-[#0047FF]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0047FF] group-hover:scale-150 transition-transform shrink-0" />
                  <span className="text-slate-700 text-lg font-semibold leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH - CENTERED & STACKED */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-20">
            {/* 1. Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-slate-950">Our approach</h2>
              <div className="h-1.5 w-20 bg-[#0047FF] mx-auto rounded-full" />
            </motion.div>

            {/* 2. Three Points */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
              {[
                "Doesn't apply for jobs on your behalf.",
                "Doesn't spam recruiters.",
                "Doesn't promise shortcuts."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100/50 text-slate-500 text-lg font-medium leading-relaxed"
                >
                  <span className="text-slate-900 font-bold block mb-1">GetLanded</span>
                  {text}
                </motion.div>
              ))}
            </div>

            {/* 3. Instead Statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl"
            >
              <p className="text-2xl md:text-4xl font-bold text-slate-900 leading-[1.2] tracking-tight">
                Instead, it helps you understand <span className="text-[#0047FF]">where you stand</span>, what's missing, and what to do next — so every application is <span className="underline decoration-[#0047FF]/10 underline-offset-[16px] decoration-4">intentional.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S BUILT FOR */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-slate-950 text-white rounded-[2.5rem] overflow-hidden p-12 lg:p-20 relative">
            {/* Subtle noise/glow for the dark card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="mb-20 space-y-4 max-w-2xl">
                <h2 className="text-3xl md:text-[44px] font-bold font-heading tracking-tight">Who GetLanded is built for</h2>
                <p className="text-slate-400 text-lg md:text-xl font-medium">Four groups, one common goal: Clarity.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                    className="space-y-6 group"
                  >
                    <div className="w-12 h-12 border border-slate-800 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-[#0047FF] group-hover:text-white transition-all duration-300">
                      <item.icon strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl lg:text-2xl text-white">{item.title}</h3>
                      <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & PRIVACY */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20 space-y-6">
            <h2 className="text-3xl md:text-[44px] font-bold font-heading tracking-tight text-slate-950">Trust, privacy, and boundaries</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-semibold max-w-2xl">
              Your career data is sensitive. We treat it that way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
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
                className="space-y-6"
              >
                <item.icon strokeWidth={1.2} className="w-10 h-10 text-[#0047FF]" />
                <h3 className="text-lg md:text-xl font-bold font-heading uppercase tracking-widest text-slate-950">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 mb-20">
            <div className="px-5 py-2.5 rounded-full border border-blue-100 bg-blue-50/50 flex items-center gap-2 text-[#0047FF] text-sm font-bold tracking-tight">
              <Users className="w-4 h-4" />
              Team
            </div>
            <div>
              <h2 className="text-[44px] md:text-6xl font-bold font-heading tracking-tight text-slate-950 leading-[1.1]">
                Our Talented <br />
                <span className="text-[#0047FF]">Team Members</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 justify-center max-w-4xl mx-auto w-full">
            {[
              {
                name: "Nivin Vincent Raj",
                role: "Founder & CEO",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
              },
              {
                name: "Shameer B",
                role: "Chief Technology Officer",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group p-12 bg-blue-50/30 rounded-[3rem] flex flex-col items-center text-center space-y-8 hover:bg-blue-50/60 transition-all duration-500 border border-transparent hover:border-blue-100"
              >
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
                  <div className="absolute inset-0 bg-blue-100 group-hover:bg-blue-200 transition-colors" />
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-2xl lg:text-3xl font-heading text-slate-950">{member.name}</h3>
                  <p className="text-slate-500 text-lg font-medium">{member.role}</p>
                </div>

                <div className="flex gap-4">
                  {[Mail, Linkedin, Github].map((Icon, idx) => (
                    <button key={idx} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0047FF] border border-blue-100 hover:bg-[#0047FF] hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-40 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-between gap-12 text-left"
          >
            <h2 className="text-4xl md:text-[56px] font-bold font-heading tracking-tighter leading-[1.1] text-slate-950 max-w-4xl">
              If you're navigating your first job search, <br />
              <span className="text-[#0047FF]">we built this for you.</span>
            </h2>
            <div className="shrink-0">
              <Button className="px-10 py-7 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all font-bold text-lg shadow-xl shadow-slate-200">
                Start free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}