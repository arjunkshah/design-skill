import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import ScrollyTelling from '../components/ScrollyTelling';
import BentoGrid from '../components/BentoGrid';
import OpenSourceCallout from '../components/OpenSourceCallout';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <Comparison />
      <ScrollyTelling />
      <BentoGrid />
      <OpenSourceCallout />
    </motion.div>
  );
}
