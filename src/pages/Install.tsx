import React from 'react';
import { motion } from 'framer-motion';

export default function Install() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-[1400px] mx-auto min-h-screen grid grid-cols-1 md:grid-cols-12 border-b border-border">
      <div className="md:col-span-4 border-r border-border p-8 md:p-16 bg-fg/5">
        <h1 className="font-primary text-4xl mb-4">Installation</h1>
        <p className="text-fg/60 text-sm leading-relaxed mb-8">
          Add the repo as a skill source, then invoke <span className="font-mono">$design-skill</span> in any supported coding agent.
        </p>
      </div>
      <div className="md:col-span-8 p-8 md:p-16">
        <div className="space-y-12 max-w-2xl">
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase mb-4 text-fg/50 border-b border-border pb-2">Step 1: Add Repo</h3>
            <div className="bg-bg border border-border p-4 font-mono text-sm flex justify-between items-center">
              <span>npx skills add https://github.com/arjunkshah/design-skill</span>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase mb-4 text-fg/50 border-b border-border pb-2">Step 2: Invoke Skill</h3>
            <p className="text-sm text-fg/70 mb-4">
              Use the skill name directly in your agent session. The repo exposes a single frontend layout skill with structure, variation, and review guidance baked in.
            </p>
            <div className="bg-bg border border-border p-4 font-mono text-sm flex justify-between items-center">
              <span>$design-skill</span>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase mb-4 text-fg/50 border-b border-border pb-2">Step 3: Prompt Normally</h3>
            <p className="text-sm text-fg/70 mb-4">
              Ask for the outcome you want. The skill decides on structure, component families, scroll behavior, and layout rhythm from the brief instead of hardcoding one template.
            </p>
            <div className="bg-fg/5 border border-border p-6 font-primary text-lg italic text-fg/80">
              "$design-skill Design a product landing page with a pinned demo rail, tight editorial typography, and a quieter mobile reflow."
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
