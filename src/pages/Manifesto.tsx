import React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-[1000px] mx-auto p-8 md:p-16 min-h-screen">
      <div className="mb-16 border-b border-border pb-16">
        <h1 className="font-primary text-5xl md:text-7xl tracking-tight leading-[1.1] mb-8">The AI Design Crisis.</h1>
        <p className="font-mono text-sm uppercase tracking-widest text-fg/50">Draft 01 — The Need for Structure</p>
      </div>
      <div className="font-primary text-lg md:text-xl leading-relaxed text-fg/80 space-y-8 max-w-2xl">
        <p>Large Language Models are remarkable logic engines. They can architect databases, write complex algorithms, and debug obscure errors. But when asked to design a user interface, they consistently fail.</p>
        <p>They default to what we call <strong>AI Slop</strong>: generic purple gradients, arbitrary drop shadows, rounded corners applied without rhythm, and a complete absence of structural grid.</p>
        <h3 className="text-2xl font-secondary font-medium mt-12 mb-4 text-fg">Structure Over Decoration</h3>
        <p>Great design is not about decoration; it is about the structural division of space. It is about materiality, typographic hierarchy, and deterministic layouts.</p>
        <p>Design Skill intercepts the prompt and forces the LLM to think like an editorial designer. It removes the option to simply "center everything and add a shadow." It demands a grid. It demands a thesis.</p>
        <blockquote className="border-l-2 border-fg pl-6 my-12 text-2xl italic">"By constraining the visual vocabulary, we force the model to focus on composition."</blockquote>
      </div>
    </motion.div>
  );
}
