import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  BrainCircuit,
  MessageSquare,
  FileText,
  Zap,
  Search,
  Layout,
} from 'lucide-react';
import { PhoneDisplay } from '../components/product/PhoneDisplay';
import { ProductLaptop } from '../components/product/ProductLaptop';

import { FAQAccordion } from '../components/ui/FAQAccordion';
import { Section, FadeIn } from '../components/ui/Section';

// FAQ data
const faqs = [
  {
    id: 1,
    question: 'How does the AI Resume Optimization work?',
    answer: 'Our AI analyzes your projects and experiences, then rewrites them into recruiter-friendly bullet points that match the specific job description you represent.'
  },
  {
    id: 2,
    question: 'Is there a free version?',
    answer: 'Yes! Our Free Beta plan includes 25 job saves and basic resume scanning.'
  },
  {
    id: 3,
    question: 'Does it work for visa sponsorship jobs?',
    answer: 'Absolutely. We specialize in helping international students find H1B and sponsorship-friendly roles.'
  },
  {
    id: 4,
    question: 'Which job boards do you support?',
    answer: 'Currently we support LinkedIn, Indeed, Glassdoor, and 40+ other major job sites.'
  }
];



// Coming Soon features
const comingSoonFeatures = [
  {
    icon: MessageSquare,
    title: "AI Mock Interviews",
    desc: "Practice with AI-powered feedback and company-specific questions.",
  },
  {
    icon: BrainCircuit,
    title: "AI Interview Prep",
    desc: "Comprehensive guides and resources.",
  },
  {
    icon: FileText,
    title: "AI Humanizer",
    desc: "Make AI-generated text sound more natural.",
  },
  {
    icon: Zap,
    title: "Advanced Resume Rewriting",
    desc: "Deep restructuring of resume content.",
  },
  {
    icon: Search,
    title: "Advanced Job Matching",
    desc: "Smarter algorithms for better job recommendations.",
  },
  {
    icon: CheckCircle2,
    title: "Plagiarism Checker",
    desc: "Ensure your content is unique.",
  },
];




// Coming Soon Card
function ComingSoonCard({
  feature,
  index,
}: {
  feature: typeof comingSoonFeatures[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group p-6 rounded-[2rem] bg-[#e8efff] hover:bg-[#0463c7] hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-[50px] bg-white/80 flex items-center justify-center">
          <feature.icon className="w-6 h-6 text-black" />
        </div>
        <span className="px-3 py-1 rounded-full bg-white/60 group-hover:bg-white/20 text-xs font-medium text-[#0463c7] group-hover:text-white transition-colors">
          Coming Soon
        </span>
      </div>
      <h3 className="text-lg font-medium text-slate-900 group-hover:text-white mb-2 transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm text-slate-500 group-hover:text-white/80 transition-colors">
        {feature.desc}
      </p>
    </motion.div>
  );
}

export function Product() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const ctaWidth = useTransform(scrollYProgress, [0, 0.5, 1], ["75%", "95%", "75%"]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-0 md:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-start relative pt-4">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left lg:translate-y-[120px]"
            >
              <h1 className="text-[3.5rem] leading-[0.95] min-[400px]:text-[4rem] sm:text-[5rem] lg:text-[64px] font-normal tracking-tight text-[#111827] mb-6 lg:mb-8">
                The AI Co-Pilot for your{' '}
                <span className="text-[#0463c7] block sm:inline">Job Search</span>
              </h1>

              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                Stop applying blindly. Get real-time insights, auto-tailored resumes, and organized tracking—all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                <Link to="/waitlist" className="group block w-fit">
                  <div className="inline-flex items-center bg-[#EFF6FF] rounded-full p-1.5 pr-6 gap-4 transition-transform group-hover:scale-105 origin-left shadow-sm hover:shadow-md border border-[#0463c7]/10">
                    <div className="bg-[#0463c7] text-white py-2.5 px-5 rounded-full shadow-lg shadow-[#0463c7]/20">
                      <span className="font-medium text-sm tracking-tight">Add to Chrome - It's Free</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0463c7] flex items-center justify-center text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </Link>
                <Link to="/demo" className="text-slate-600 font-medium hover:text-[#0463c7] transition-colors border-b border-transparent hover:border-[#0463c7]">
                  Watch Demo
                </Link>
              </div>


            </motion.div>

            {/* Right: Laptop Display */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center 
              w-screen ml-[calc(50%-50vw)] lg:w-full lg:ml-0 
              z-20 perspective-[2000px] 
              h-[280px] min-[400px]:h-[320px] sm:h-[400px] lg:h-auto 
              -mt-12 lg:mt-0 lg:translate-y-17 origin-top lg:origin-center pointer-events-none lg:pointer-events-auto">
              <div className="w-[640px] flex justify-center items-center transform scale-[0.45] min-[375px]:scale-[0.52] sm:scale-[0.65] md:scale-[0.85] lg:scale-100 origin-center lg:origin-right transition-transform duration-500 will-change-transform">
                <ProductLaptop />
              </div>
            </div>
          </div>

          {/* Company Logos Marquee Section (Moved Down and Full Width) */}
          <div className="mt-20 md:mt-32 w-full max-w-7xl mx-auto">
            <div className="bg-[#0463c7] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-blue-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden">
              {/* Title & Line */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 md:mb-10 text-center md:text-left">
                <span className="text-blue-100/90 font-semibold tracking-[0.2em] text-sm md:text-lg uppercase whitespace-nowrap">Powering next-gen careers</span>
                <div className="h-px bg-gradient-to-r from-blue-200/40 to-transparent flex-1" />
              </div>

              {/* Logos */}
              <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10rem, black calc(100% - 10rem), transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10rem, black calc(100% - 10rem), transparent)' }}>
                <div className="flex gap-16 animate-marquee whitespace-nowrap pr-16" style={{ animationDuration: '40s' }}>
                  {[
                    { name: "Google", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e821d2faa9faa65fed_google%20logo.svg" },
                    { name: "Meta", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6811c93cc92136775a2cec23_Meta-logo.svg" },
                    { name: "Netflix", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8faaba964c83a21f0_netflix%20logo.svg" },
                    { name: "Amazon", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8c9137787965280b0_Amazon%20logo.svg" },
                    { name: "Airbnb", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8d0de636763a1eb11_airbnb%20logo.svg" },
                    { name: "Spotify", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e9ecc95379c6f5706a_spotify%20logo.svg" },
                    { name: "Tesla", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8dbafd8468a1132a6_Tesla%20logo.svg" },
                    { name: "Bloomberg", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8a27aa6ba0cf2f078_Bloomberg%20logo.svg" },
                    { name: "Microsoft", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e94fc9e5207a9b7823_microsoft%20logo.svg" },
                    { name: "Adobe", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e87ca320857f7eb230_adobe-logo.svg" },
                    { name: "Google", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e821d2faa9faa65fed_google%20logo.svg" },
                    { name: "Meta", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6811c93cc92136775a2cec23_Meta-logo.svg" },
                    { name: "Netflix", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8faaba964c83a21f0_netflix%20logo.svg" },
                    { name: "Amazon", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8c9137787965280b0_Amazon%20logo.svg" },
                    { name: "Airbnb", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8d0de636763a1eb11_airbnb%20logo.svg" },
                    { name: "Spotify", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e9ecc95379c6f5706a_spotify%20logo.svg" },
                    { name: "Tesla", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8dbafd8468a1132a6_Tesla%20logo.svg" },
                    { name: "Bloomberg", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e8a27aa6ba0cf2f078_Bloomberg%20logo.svg" },
                    { name: "Microsoft", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e94fc9e5207a9b7823_microsoft%20logo.svg" },
                    { name: "Adobe", src: "https://cdn.prod.website-files.com/635c591378332f38be25d45f/6720f0e87ca320857f7eb230_adobe-logo.svg" },
                  ].map((logo, index) => (
                    <div key={index} className="flex-shrink-0 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-9 w-auto hover:opacity-80 transition-opacity brightness-0 invert"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* Categories Section */}
      < section className="py-12 md:py-20 px-4 sm:px-6 bg-white relative z-10 overflow-hidden" >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Phone Display (Moved from Hero) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center items-center relative order-2 lg:order-1"
            >
              <div className="w-full max-w-[320px] md:max-w-[380px] scale-[0.65] sm:scale-[0.75] origin-center transform hover:scale-[0.7] sm:hover:scale-[0.8] transition-transform duration-500">
                <PhoneDisplay />
              </div>

              {/* Decorative blob behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply" />
            </motion.div>

            {/* Right: Categories */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl tracking-tight mb-12 text-slate-900"
              >
                Explore <span className="text-[#0463c7]">Features</span>
              </motion.h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { faIcon: "fa-regular fa-file", title: "Resume Builder", subtitle: "AI-Powered Tailoring" },
                  { icon: Layout, title: "Job Application Tracker", subtitle: "Kanban Board" },
                  { faIcon: "fa-solid fa-wifi", title: "Networking Tracker", subtitle: "Manage Connections" },
                  { faIcon: "fa-brands fa-linkedin", title: "LinkedIn Optimizer", subtitle: "Profile Enhancement" },
                  { icon: MessageSquare, title: "AI Mock Interview", subtitle: "Practice & Feedback" },
                ].map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex items-start gap-4 p-6 rounded-[2rem] bg-[#f8fafc] border border-slate-100 hover:border-[#0463c7]/20 hover:bg-[#e8efff] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-[50px] bg-white shadow-sm flex items-center justify-center text-[#0463c7] group-hover:bg-[#0463c7] group-hover:text-white transition-colors duration-300">
                      {cat.faIcon ? (
                        <i className={`${cat.faIcon} text-lg transform group-hover:scale-110 transition-transform duration-300`}></i>
                      ) : (
                        cat.icon && <cat.icon size={22} className="transform group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-1">{cat.title}</h3>
                      <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">{cat.subtitle}</p>
                    </div>
                  </motion.div>
                ))
                }
              </div>
            </div>
          </div>
        </div >
      </section >

      {/* Teal-Style Features Section */}
      < section className="relative z-10" >
        {/* Feature 1: Resume Builder - Left Content, Right Visual */}
        < div className="grid lg:grid-cols-2" >
          {/* Left Content */}
          < div className="py-20 px-6 lg:px-16 flex items-center" >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-[50px] bg-white shadow-sm flex items-center justify-center text-[#0463c7] group-hover:bg-[#0463c7] group-hover:text-white transition-colors duration-300">
                  <i className="fa-regular fa-file text-lg transform group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <span className="text-[#0463c7] font-medium text-sm">Resume Builder</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
                Quickly tailor your resume for each job with AI
              </h2>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Use the right keywords from the job description to highlight your best experience on your resume. Get recommendations to improve your resume and land more interviews.
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 bg-[#0463c7] text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-[#0352a8] transition-all duration-300 hover:scale-105"
              >
                Build a Resume with AI
              </Link>
            </motion.div>
          </div >

          {/* Right Visual - Gradient Background */}
          < div className="bg-gradient-to-br from-[#0463c7]/10 via-[#e8efff] to-[#0463c7]/20 py-16 px-8 flex items-center justify-center relative overflow-hidden" >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Browser Window Mockup */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden w-full max-w-[300px] md:max-w-xs mx-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-900">WeWork</span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#e8efff] flex items-center justify-center">
                        <span className="text-[#0463c7] font-bold text-sm">32%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#e8efff]/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-slate-600">Tailor your resume to increase match score</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-[#e8efff] rounded-full" />
                    <div className="h-2 w-4/5 bg-[#e8efff] rounded-full" />
                    <div className="h-2 w-3/4 bg-[#e8efff] rounded-full" />
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg border border-slate-200 shadow-lg p-3 w-40">
                <p className="text-[10px] text-slate-500 mb-1">True Match</p>
                <div className="h-8 bg-gradient-to-r from-[#0463c7]/30 to-[#0463c7]/60 rounded" />
              </div>
            </motion.div>
          </div >
        </div >

        {/* Feature 2: Job Tracker - Right Content, Left Visual */}
        < div className="grid lg:grid-cols-2 gap-0" >
          {/* Left Visual */}
          < div className="bg-gradient-to-bl from-[#e8efff] via-[#0463c7]/10 to-[#e8efff]/50 py-16 px-8 flex items-center justify-center relative overflow-hidden order-2 lg:order-1" >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Browser Mockup */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden w-full max-w-[300px] md:max-w-xs mx-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span>Job Position</span>
                    <span>Company</span>
                    <span>Location</span>
                    <span>Status</span>
                  </div>
                  <div className="space-y-2">
                    {["APPLIED", "SCREEN", "INTERVIEW"].map((status, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                        <div className="w-6 h-6 rounded bg-[#e8efff]" />
                        <div className="flex-1 space-y-1">
                          <div className="h-2 w-20 bg-[#e8efff] rounded-full" />
                          <div className="h-2 w-12 bg-slate-100 rounded-full" />
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${i === 0 ? 'bg-blue-100 text-blue-600' : i === 1 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div >

          {/* Right Content */}
          < div className="py-20 px-6 lg:px-16 flex items-center order-1 lg:order-2" >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <Layout className="w-5 h-5 text-[#0463c7]" />
                <span className="text-[#0463c7] font-medium text-sm">Job Tracker</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
                One place to organize and manage your job search
              </h2>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                A free and easy way to keep track of all your job applications in one place. Bookmark jobs from any job board using our Chrome extension to create your master list.
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 bg-[#0463c7] text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-[#0352a8] transition-all duration-300 hover:scale-105"
              >
                Start Organizing Now
              </Link>
            </motion.div>
          </div >
        </div >

        {/* Feature 3: Job Insights - Left Content, Right Visual */}
        < div className="grid lg:grid-cols-2 gap-0" >
          {/* Left Content */}
          < div className="py-12 px-6 lg:py-20 lg:px-16 flex items-center" >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-[50px] bg-white shadow-sm flex items-center justify-center text-[#0463c7] group-hover:bg-[#0463c7] group-hover:text-white transition-colors duration-300">
                  <i className="fa-solid fa-magnifying-glass-arrow-right text-lg transform group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <span className="text-[#0463c7] font-medium text-sm">Job Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
                Companies have recruiters, you have GetLanded
              </h2>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Save time by discovering jobs perfectly matched to your profile and resume. Filter results based on company, location, visa sponsorship and more.
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 bg-[#0463c7] text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-[#0352a8] transition-all duration-300 hover:scale-105"
              >
                Start Getting Insights
              </Link>
            </motion.div>
          </div >

          {/* Right Visual */}
          < div className="bg-gradient-to-br from-[#e8efff]/50 via-[#0463c7]/15 to-[#e8efff] py-16 px-8 flex items-center justify-center relative overflow-hidden" >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Browser Mockup */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden w-full max-w-[300px] md:max-w-xs mx-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Marketing Manager, Commerce Services</p>
                      <p className="text-xs text-slate-500">ADOBE • Austin, TX</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-900">$131,000 - $170,000</p>
                      <p className="text-xs text-[#0463c7]">Jobs in profile</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-[#e8efff] text-xs text-[#0463c7]">Sponsorship</span>
                    <span className="px-2 py-1 rounded bg-slate-100 text-xs text-slate-600">Full-time</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="text-xs font-medium text-slate-700 mb-2">Hard Skills</p>
                    <div className="flex gap-1">
                      <div className="h-2 w-16 bg-[#0463c7] rounded-full" />
                      <div className="h-2 w-12 bg-[#0463c7]/60 rounded-full" />
                      <div className="h-2 w-8 bg-[#0463c7]/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div >
        </div >

        {/* Feature 4: Bookmark Jobs - Right Content, Left Visual */}
        < div className="grid lg:grid-cols-2 gap-0" >
          {/* Left Visual */}
          < div className="bg-gradient-to-bl from-[#0463c7]/10 via-[#e8efff]/80 to-[#0463c7]/5 py-16 px-8 flex items-center justify-center relative overflow-hidden order-2 lg:order-1" >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Browser Mockup */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden w-full max-w-[300px] md:max-w-xs mx-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-3 flex items-center gap-2 bg-[#0463c7] text-white text-xs px-3 py-1 rounded-lg">
                    <span>getlanded</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-600 font-bold text-xs">G</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Data Scientist - Product</p>
                      <p className="text-xs text-slate-500">by Toyota (View all jobs)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-slate-500">San Francisco, CA • New York, NY • Seattle, WA</p>
                    <p className="text-xs font-medium text-slate-700">$135,000 - $260,000</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-[#e8efff] rounded-full" />
                    <div className="h-2 w-4/5 bg-[#e8efff] rounded-full" />
                    <div className="flex gap-2 mt-3">
                      <div className="h-6 w-24 bg-[#0463c7] rounded-full" />
                      <div className="h-6 w-20 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div >

          {/* Right Content */}
          < div className="py-20 px-6 lg:px-16 flex items-center order-1 lg:order-2" >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-[50px] bg-white shadow-sm flex items-center justify-center text-[#0463c7] group-hover:bg-[#0463c7] group-hover:text-white transition-colors duration-300">
                  <i className="fa-solid fa-bookmark text-lg transform group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <span className="text-[#0463c7] font-medium text-sm">Bookmark Jobs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
                Save Jobs From over 40 Popular Job Boards
              </h2>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Use the GetLanded Chrome extension to bookmark job postings from LinkedIn, Indeed, Glassdoor and dozens more. Seamlessly transition your job search from browser to tracker.
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 bg-[#0463c7] text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-[#0352a8] transition-all duration-300 hover:scale-105"
              >
                Bookmark Jobs Now
              </Link>
            </motion.div>
          </div >
        </div >
      </section >

      {/* Coming Soon Section */}
      < section className="py-12 md:py-20 px-4 sm:px-6 bg-slate-50/50 relative z-10" >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4">Coming soon</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              These features are in development and will be released after the initial beta launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comingSoonFeatures.map((feature, i) => (
              <ComingSoonCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-0 md:py-20 relative z-10" ref={ctaRef} >
        <motion.div
          style={{ width: ctaWidth, opacity: ctaOpacity }}
          className="bg-[#0463c7] rounded-none md:rounded-l-none md:rounded-r-[15rem] p-8 md:p-20 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group min-w-full md:min-w-0"
        >
          {/* Background Glows */}
          <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="hidden md:block absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-white font-bold text-xs tracking-widest uppercase">Join 2.3M+ students</span>
              <div className="h-px w-8 bg-white/30"></div>
            </div>
            <h3 className="text-4xl md:text-6xl font-normal mb-6 tracking-tight">
              Start your job search with clarity
            </h3>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10">
              Join our early-access waitlist and be among the first to experience AI-powered job search.
            </p>

            <Link
              to="/waitlist"
              className="flex items-center gap-3 bg-white text-[#5299E5] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8F3FC] transition-all hover:scale-105 hover:shadow-xl duration-300 mx-auto w-fit"
            >
              <span>Join Waitlist</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section >

      {/* FAQ Section */}
      < Section width="full" className="py-24 bg-white" >
        <FadeIn className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-500 text-center mb-16 max-w-2xl mx-auto">Everything you need to know about GetLanded.</p>
        </FadeIn>
        <div className="w-full">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section >
    </div >
  );
}
