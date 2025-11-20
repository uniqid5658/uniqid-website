import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-stone-900 text-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-stone-400 text-sm uppercase tracking-[0.2em]">The Method</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4">Built on Fundamentals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-stone-800 z-0" />

          {PROCESS_STEPS.map((step, index) => (
            <div key={step.title} className="relative z-10 group">
              <div className="w-24 h-24 bg-stone-900 border border-stone-700 flex items-center justify-center text-3xl font-serif italic mb-6 group-hover:bg-stone-800 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-medium mb-3 text-stone-100">{step.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed border-l border-stone-800 pl-4 md:border-none md:pl-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};