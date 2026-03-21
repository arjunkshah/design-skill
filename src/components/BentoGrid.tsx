import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="border-b border-black/10 bg-black/10">
      <div className="max-w-[1400px] mx-auto bg-paper">
        <div className="p-8 md:p-16 border-b border-black/10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="font-serif text-4xl tracking-tight mb-4">UI Range</h2>
            <p className="text-black/60 max-w-md">The skill supports more than a polished hero and a few feature cards. It explicitly supports complex structural patterns.</p>
          </div>
          <span className="font-mono text-xs tracking-widest uppercase border border-black/10 px-4 py-2 rounded-full">Supported Archetypes</span>
        </div>

        {/* Structural 1px Grid using gap */}
        <div className="bg-black/10 grid grid-cols-1 md:grid-cols-4 gap-[1px]">
          
          {/* Bento Item 1 */}
          <motion.div 
            whileHover={{ backgroundColor: '#F0EFEA' }}
            className="bg-paper p-8 md:p-12 md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[400px] transition-colors"
          >
            <h3 className="font-sans font-medium text-xl mb-4">Asymmetric Bento Sections</h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-8 h-full">
              <div className="col-span-2 row-span-2 bg-black/5 border border-black/10"></div>
              <div className="bg-black/5 border border-black/10"></div>
              <div className="bg-black/5 border border-black/10"></div>
            </div>
          </motion.div>

          {/* Bento Item 2 */}
          <motion.div 
            whileHover={{ backgroundColor: '#F0EFEA' }}
            className="bg-paper p-8 md:col-span-2 flex flex-col justify-center transition-colors"
          >
            <h3 className="font-sans font-medium text-lg mb-2">Editorial Split Layouts</h3>
            <p className="text-sm text-black/60">Classic print-inspired divisions.</p>
          </motion.div>

          {/* Bento Item 3 */}
          <motion.div 
            whileHover={{ backgroundColor: '#F0EFEA' }}
            className="bg-paper p-8 flex flex-col justify-between transition-colors aspect-square"
          >
            <h3 className="font-sans font-medium text-lg">Proof<br/>Rails</h3>
            <div className="flex gap-2 mt-4 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-black/10 shrink-0"></div>
              <div className="w-8 h-8 rounded-full bg-black/10 shrink-0"></div>
              <div className="w-8 h-8 rounded-full bg-black/10 shrink-0"></div>
            </div>
          </motion.div>

          {/* Bento Item 4 */}
          <motion.div 
            whileHover={{ backgroundColor: '#F0EFEA' }}
            className="bg-paper p-8 flex flex-col justify-between transition-colors aspect-square"
          >
            <h3 className="font-sans font-medium text-lg">Framed<br/>Product Stages</h3>
            <div className="w-full h-1/2 mt-4 border border-black/10 border-b-0 rounded-t-lg bg-black/5 relative overflow-hidden">
              <div className="absolute top-2 left-2 right-2 bottom-0 bg-white border border-black/10 border-b-0 rounded-t-md shadow-sm"></div>
            </div>
          </motion.div>

          {/* Bento Item 5 */}
          <motion.div 
            whileHover={{ backgroundColor: '#F0EFEA' }}
            className="bg-paper p-8 md:col-span-4 flex flex-col md:flex-row items-center justify-between transition-colors"
          >
            <div>
              <h3 className="font-sans font-medium text-lg mb-2">Sticky Scrollytelling Modules</h3>
              <p className="text-sm text-black/60">Pinned product demos with changing supporting content.</p>
            </div>
            <ArrowRight className="hidden md:block text-black/30" size={32} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}