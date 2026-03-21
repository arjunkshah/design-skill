import React from 'react';

export default function Features() {
  const features = [
    { title: "Typographic Rigor", desc: "No more arbitrary text-sm or text-lg. Syntax enforces a strict modular scale based on classic editorial design principles." },
    { title: "Structural Space", desc: "Spacing is defined by visible grids and borders, not ambiguous drop shadows or floating elements." },
    { title: "Materiality", desc: "Color palettes are constrained to physical equivalents: ink, paper, zinc, stone. No neon gradients." },
    { title: "Context Optimized", desc: "The entire design system is compressed into a dense markdown file optimized perfectly for LLM context windows." }
  ];

  return (
    <section className="border-b structural-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1 p-8 md:p-16 border-r structural-border flex flex-col justify-between">
          <h2 className="font-serif text-3xl tracking-tight">The Principles</h2>
          <p className="text-sm text-black/50 mt-8 font-mono uppercase tracking-widest">v.01.4</p>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2">
          {features.map((f, i) => (
            <div key={i} className={`p-8 md:p-12 border-b md:border-b-0 md:border-r structural-border ${i > 1 ? 'md:border-t' : ''}`}>
              <h3 className="font-sans font-medium text-lg mb-4">{f.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}