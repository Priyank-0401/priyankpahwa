import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Heart, 
  Trophy,
  Target,
  Lightbulb,
  Users,
  Award
} from 'lucide-react';

// (Removed CountUp: no longer using numeric stats)

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const About = () => {
  // (Removed numeric stats grid)

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at center, rgba(56,189,248,0.12), transparent 60%)' }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at center, rgba(168,85,247,0.12), transparent 60%)' }} />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto">
            Building at the edge of Web3, AI and full‑stack.
          </p>
        </motion.div>

        {/* Friendly badges (no numbers, more personality) */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-3 mb-14 justify-center">
          {[
            { icon: Trophy, text: 'Builds for users, not just demos' },
            { icon: Lightbulb, text: 'Turns ideas into shipped features' },
            { icon: Target, text: 'Outcome over output' },
            { icon: Code, text: 'Clean commits, cleaner architecture' },
            { icon: Zap, text: 'Iterates fast, breaks little' },
            { icon: Heart, text: 'Friendly teammate, strong ownership' },
          ].map((b, i) => (
            <motion.span
              key={`badge-${i}`}
              variants={fadeUp}
              whileHover={{ y: -2, scale: 1.02 }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/70 border border-slate-700/70 text-slate-200"
            >
              <b.icon className="w-4 h-4 text-cyan-300" />
              <span className="text-sm">{b.text}</span>
            </motion.span>
          ))}
        </motion.div>

        {/* Value props + concise summary */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-6">
          {/* Left: compact highlight pills */}
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Code, text: 'Practical full‑stack with an eye for UX' },
              { icon: Award, text: 'Tests that matter, docs you’ll actually read' },
              { icon: Users, text: 'Communicates clearly, pairs well with designers' },
              { icon: Lightbulb, text: 'Prototype → validate → production' },
              { icon: Target, text: 'Security‑minded by default' },
              { icon: Trophy, text: 'Owns outcomes, not just tickets' },
            ].map((bp, i) => (
              <motion.li key={`bp-${i}`} variants={fadeUp} whileHover={{ y: -3 }} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-700/70 hover:border-slate-600/80">
                <bp.icon className="w-5 h-5 text-purple-300" />
                <span className="text-slate-200">{bp.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Right: ultra-brief summary with badges */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative rounded-2xl p-8 border border-slate-700/70 bg-slate-800/60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
            <div className="relative">
              <p className="text-xl md:text-2xl text-white font-semibold mb-3">I build things that ship</p>
              <div className="space-y-3 text-slate-300/90">
                <p>Hi, I’m Priyank. I bring ideas to life by building full‑stack apps, prototyping with AI, and exploring blockchain that works beyond whitepapers.</p>
                <p>I care about shipping software that’s secure, scalable, and a little bit fun—because boring products don’t stick.</p>
                <p>I’ve worked on everything from an AI wellness companion to a blockchain‑powered local payments demo, turning complex problems into simple user experiences.</p>
                <p>Always open to collaborating on ambitious ideas—or geeking out over the latest AI breakthroughs.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Secure', 'Scalable', 'Human‑Centered', 'Clean Architecture'].map((chip) => (
                  <span key={chip} className="px-3 py-1.5 text-xs rounded-full bg-slate-900/60 border border-slate-700/70 text-slate-300">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
