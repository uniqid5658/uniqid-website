import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image - Simulating Prompt #1: Clean, modern hero background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop" 
          alt="Minimalist construction site with subtle architectural lines"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 to-stone-900/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="fade-in-up max-w-3xl">
          <p className="text-stone-300 text-sm md:text-base uppercase tracking-[0.2em] mb-4">
            Design Roots. Construction Mastery.
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-50 mb-8 leading-tight">
            Built with <br/>
            <span className="italic text-stone-200">Understanding.</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            UNIQID bridges the gap between design intent and physical reality. 
            Led by a design-trained founder, we build with a deeper level of care for the details that matter.
          </p>
          <Link 
            to="/#portfolio" 
            className="inline-block border border-stone-50 text-stone-50 px-8 py-4 text-sm uppercase tracking-widest hover:bg-stone-50 hover:text-stone-900 transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};