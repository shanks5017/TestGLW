
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function Waitlist() {
  return (
    <div className="min-h-screen bg-white pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Grid - Fizens Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-2xl px-6 text-center -mt-20 relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-primary rounded-3xl mx-auto flex items-center justify-center text-white text-4xl font-bold mb-8 shadow-2xl shadow-primary/20"
        >
          G
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight font-heading"
        >
          Join the <br /><span className="text-primary">Inner Circle</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 mb-12"
        >
          Get early access to our new AI Coaching features. Limited spots available for the beta program.
        </motion.p>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 p-2 rounded-full border border-gray-100 flex shadow-lg"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none outline-none px-6 text-slate-900 placeholder:text-gray-400"
          />
          <Button className="rounded-full px-8">Join Waitlist</Button>
        </motion.form>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          1,402 people joined this week
        </div>
      </div>
    </div>
  );
}