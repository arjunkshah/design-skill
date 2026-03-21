import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function OpenSourceCallout() {
  return (
    <section className="bg-ink text-paper overflow-hidden relative border-b border-black/10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto p-8 md:p-16 py-24 md:py-48 flex flex-col items-center justify-center text-center relative z-10"
      >
        <span className="font-mono text-sm tracking-[0.3em] uppercase text-paper/50 mb-8 block">MIT Licensed</span>
        
        <a href="https://github.com/arjunkshah/design-skill" target="_blank" rel="noreferrer" className="group block">
          <h2 className="font-serif text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter mb-8 group-hover:text-paper/80 transition-colors">
            Open<br/>Source.
          </h2>
          <div className="flex items-center justify-center gap-4 text-paper/70 group-hover:text-paper transition-colors">
            <Github size={20} />
            <span className="font-mono text-sm md:text-base border-b border-paper/30 pb-1 group-hover:border-paper transition-colors">
              github.com/arjunkshah/design-skill
            </span>
          </div>
        </a>
      </motion.div>
      
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-paper/10"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-paper/10"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-paper/10"></div>
    </section>
  );
}
