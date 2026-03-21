import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="p-8 md:p-16 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-paper">
      <div>
        <div className="font-serif text-2xl tracking-tight mb-2">Design Skill</div>
        <p className="font-mono text-xs text-black/50 uppercase tracking-widest">A skill by arjunkshah.</p>
      </div>
      <div className="flex gap-8 text-sm font-medium">
        <a href="https://github.com/arjunkshah/design-skill" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4 flex items-center gap-2">
          <Github size={14} /> Repository
        </a>
        <a href="https://github.com/arjunkshah/design-skill/issues" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Issues</a>
        <a href="https://github.com/arjunkshah/design-skill/blob/main/LICENSE" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">License</a>
      </div>
    </footer>
  );
}
