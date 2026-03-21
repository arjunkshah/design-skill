import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

type Page = 'home' | 'manifesto' | 'install';

type NavProps = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
};

const pages: Array<{ id: Page; label: string }> = [
  { id: 'home', label: 'Overview' },
  { id: 'manifesto', label: 'Manifesto' },
  { id: 'install', label: 'Install' },
];

export default function Nav({ currentPage, setCurrentPage }: NavProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 bg-bg/90 backdrop-blur-md z-50"
    >
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-ink rounded-sm"></div>
        <span className="font-serif text-xl tracking-tight font-medium">Design Skill</span>
      </div>
      <div className="hidden md:flex items-center gap-3 text-sm">
        {pages.map((page) => (
          <button
            key={page.id}
            type="button"
            onClick={() => setCurrentPage(page.id)}
            className={`px-3 py-2 rounded-sm transition-colors ${
              currentPage === page.id ? 'bg-fg text-bg' : 'text-fg/55 hover:text-fg'
            }`}
          >
            {page.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        <a href="https://github.com/arjunkshah/design-skill" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity flex items-center gap-2">
          <Github size={16} /> GitHub
        </a>
        <button
          type="button"
          onClick={() => setCurrentPage('install')}
          className="bg-ink text-paper px-4 py-2 rounded-sm hover:bg-ink/90 transition-colors flex items-center gap-2"
        >
          Install Skill <ArrowRight size={16} />
        </button>
      </div>
    </motion.nav>
  );
}
