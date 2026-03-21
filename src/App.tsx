import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import Install from './pages/Install';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'manifesto' | 'install'>('home');

  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg font-secondary transition-colors duration-500 overflow-x-hidden">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <Home key="home" />}
          {currentPage === 'manifesto' && <Manifesto key="manifesto" />}
          {currentPage === 'install' && <Install key="install" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
