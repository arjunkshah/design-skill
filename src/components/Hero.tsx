import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <header className="border-b border-black/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[85vh]">
        <div className="md:col-span-8 p-8 md:p-16 border-r border-black/10 flex flex-col justify-center relative z-10 bg-paper">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="font-mono text-xs tracking-[0.2em] uppercase text-black/50 mb-8 block">v1.0.0 / Cursor & Claude</motion.span>
            <motion.h1 variants={fadeUp} className="font-serif text-[11vw] md:text-[8vw] leading-[0.85] tracking-[-0.04em] text-ink mb-8">
              Structure<br/>before code.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-serif text-black/60 max-w-2xl leading-relaxed">
              An open-source layout skill for coding agents. It fixes a recurring failure mode: functional code with weak, repetitive layout judgment.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4">
              <a href="https://github.com/arjunkshah/layout-skill" target="_blank" rel="noreferrer" className="bg-ink text-paper px-6 py-4 text-sm font-medium rounded-sm flex items-center gap-2 hover:bg-black/80 transition-all">
                <Github size={16} /> View Repository
              </a>
              <div className="px-6 py-4 text-sm font-mono border border-black/10 rounded-sm bg-black/5 flex items-center gap-2">
                <span className="text-black/50">$</span> layout-director
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="md:col-span-4 flex flex-col justify-between relative">
          <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply" />
          </motion.div>
          <div className="p-8 md:p-16 z-10 bg-gradient-to-b from-paper via-paper/80 to-transparent">
            <h3 className="font-mono text-xs tracking-widest uppercase mb-4 border-b border-black/10 pb-4">The Failure Mode</h3>
            <p className="text-sm text-black/70 leading-relaxed">
              The model reaches for the same centered hero, the same repeated feature cards, and the same cramped mobile collapse.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}