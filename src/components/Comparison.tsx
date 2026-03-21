import React from 'react';
import { Terminal, Grid } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="border-b structural-border bg-paper">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Prompt Side */}
        <div className="p-8 md:p-16 border-r structural-border">
          <div className="flex items-center gap-2 mb-8">
            <Terminal size={16} />
            <span className="font-mono text-sm">User Prompt</span>
          </div>
          <div className="bg-white border structural-border p-6 font-mono text-sm leading-relaxed shadow-sm">
            <span className="text-blue-600">@syntax</span> Design a pricing card for a pro tier. It should feel premium, structural, and avoid any generic SaaS aesthetics. Use the Newsreader font for the price.
          </div>
          <div className="mt-8">
            <p className="text-sm text-black/60 font-serif italic">
              "Syntax intercepts the prompt, injecting 120kb of strict design system rules into the context window before execution."
            </p>
          </div>
        </div>

        {/* Output Side */}
        <div className="p-8 md:p-16 bg-[#F0EFEA]">
          <div className="flex items-center gap-2 mb-8">
            <Grid size={16} />
            <span className="font-mono text-sm">Syntax Output</span>
          </div>
          
          {/* The Generated Card */}
          <div className="bg-paper border border-ink p-8 max-w-sm mx-auto relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-ink scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            
            <div className="border-b structural-border pb-6 mb-6">
              <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-2">Professional</h4>
              <div className="font-serif text-5xl tracking-tight">$49<span className="text-lg text-black/50 italic">/mo</span></div>
            </div>
            
            <ul className="space-y-3 mb-8 font-sans text-sm text-black/80">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-ink rounded-full"></div> Deterministic Layouts</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-ink rounded-full"></div> Typographic Scales</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-ink rounded-full"></div> Materiality Engine</li>
            </ul>
            
            <button className="w-full bg-ink text-paper py-3 text-sm font-medium hover:bg-black/80 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}