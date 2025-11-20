import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;