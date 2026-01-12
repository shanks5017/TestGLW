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
  Minus
} from 'lucide-react';
import { Button } from '../components/ui/Button';

// SUBTLE MOTION UTILS
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans selection:bg-blue-50 selection:text-blue-700">

      {/* 1. EDITORIAL HERO SECTION (IMAGE 0) */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-widest text-[10px] uppercase">
              <Minus className="w-4 h-4" />
              Our Mission
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold font-heading leading-[1.1] tracking-tight text-slate-950"
            >
              We built GetLanded because <br />
              job searching as a student <br />
              is <span className="text-blue-600">broken.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium"
            >
              Not because students aren't capable — but because the tools weren't built for them.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
              <Button className="rounded-full px-8 py-6 bg-slate-950 text-white hover:bg-slate-800 transition-all font-bold">
                Start free
              </Button>
              <Button variant="ghost" className="rounded-full px-8 py-6 text-slate-600 hover:text-slate-950 font-bold transition-all underline decoration-slate-200 underline-offset-8">
                How it works
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM (IMAGE 1) - SPLIT GRID */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-950 tracking-tight">Why GetLanded exists</h2>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                We were students too. We watched smart, capable people get rejected—not because they lacked skill, but because the process was chaotic, opaque, and designed for experienced professionals.
              </p>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
                  The problem wasn't effort. <br />
                  <span className="text-blue-600 font-heading tracking-tight italic">It was the system.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid gap-4"
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
                  className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex gap-5 items-center group hover:border-blue-300 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shrink-0" />
                  <span className="text-slate-800 text-lg font-semibold leading-relaxed">{item}</span>
                </motion.div>
              ))}

              {/* Moderate visual support (Refined photo) */}
              <motion.div
                variants={fadeInUp}
                className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-xl opacity-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=400"
                  alt="Professional collaboration"
                  className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (IMAGE 2) - BOLD TYPOGRAPHY */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-4 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">Our approach</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 text-center pb-20 border-b border-slate-100">
            {[
              "Doesn't apply for jobs on your behalf.",
              "Doesn't spam recruiters.",
              "Doesn't promise shortcuts."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-slate-500 text-base md:text-lg font-medium leading-relaxed"
              >
                GetLanded {text}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <p className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-center tracking-tight">
              Instead, it helps you understand <span className="text-blue-600">where you stand</span>, what's missing, and what to do next — so every application is <span className="underline decoration-blue-200 underline-offset-8">intentional.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. WHO IT'S BUILT FOR (IMAGE 3) - REFINED GRID */}
      <section className="py-32 px-6 bg-slate-950 text-white rounded-[40px] mx-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-none">Who GetLanded is built for</h2>
            <p className="text-slate-400 text-xl font-medium">Four groups, one common goal: Clarity.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                <div className="w-12 h-12 border border-slate-800 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  <item.icon strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-2xl tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST & PRIVACY (IMAGE 4) - TYPOGRAPHY FOCUS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-tight">Trust, privacy, and boundaries</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-semibold">
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
                <item.icon strokeWidth={1.5} className="w-10 h-10 text-blue-600" />
                <h3 className="text-xl font-bold font-heading uppercase tracking-widest text-slate-950">{item.title}</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEAM SECTION (IMAGE 5) - MINIMAL CARDS */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-16 text-center">The team behind the tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Nivin Vincent Raj",
                role: "Founder & CEO",
                bio: "Nivin built GetLanded after experiencing firsthand how unclear and discouraging the student job search can be. He focuses on making career tools simpler, fairer, and actually useful.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
              },
              {
                name: "Shameer B",
                role: "Chief Technology Officer",
                bio: "Shameer leads the technical direction at GetLanded, focusing on responsible AI, privacy-first systems, and tools that support—not replace—human decision-making.",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 bg-white border border-slate-200 rounded-2xl flex flex-col items-center text-center space-y-6 hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 shadow-inner">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-2xl font-heading text-slate-950">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.2em]">{member.role}</p>
                </div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-sm font-medium">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA (IMAGE 5 FOOTER) */}
      <section className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-tight">
            If you're navigating your first job search, <br />
            <span className="text-blue-600">we built this for you.</span>
          </h2>
          <div className="pt-8">
            <Button className="px-12 py-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow-2xl shadow-blue-500/30 font-bold text-xl">
              Start free
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}