import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ScrollyTelling() {
  const containerRef = useRef(null);
  
  const ideas = [
    {
      title: "Structure before components",
      desc: "The page should begin with a structural choice such as editorial split, asymmetric bento, narrative stack, or product frame. Components come later.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Variation without randomness",
      desc: "The skill uses a variation matrix so the agent can change structure, typography mode, density, section rhythm, and motion profile.",
      img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Review before output",
      desc: "The agent rejects the layout if it feels like a centered startup template, a feature-card conveyor belt, or lacks a dominant thesis.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="border-b border-black/10 bg-paper relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Sticky Left Column */}
        <div className="hidden md:block border-r border-black/10 relative">
          <div className="sticky top-20 h-[calc(100vh-5rem)] p-16 flex flex-col justify-center">
            <span className="font-mono text-xs tracking-widest uppercase text-black/50 mb-6 block">Core Ideas</span>
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.1] mb-8">
              A better process<br/>for coding agents.
            </h2>
            <p className="text-lg text-black/60 font-serif italic max-w-md">
              "The goal is not to force one visual style. The goal is to raise the floor for composition while keeping enough freedom."
            </p>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="flex flex-col">
          {ideas.map((idea, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className="min-h-[80vh] md:min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-black/10 last:border-b-0"
            >
              <div className="font-mono text-xs text-black/40 mb-4">0{idx + 1}</div>
              <h3 className="text-3xl font-serif tracking-tight mb-6">{idea.title}</h3>
              <p className="text-black/70 leading-relaxed mb-12 max-w-md">{idea.desc}</p>
              <div className="w-full aspect-[4/3] bg-black/5 relative overflow-hidden border border-black/10">
                <img src={idea.img} alt={idea.title} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}