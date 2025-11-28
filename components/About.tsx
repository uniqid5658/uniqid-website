import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">
              From Design Studio <br />
              <span className="italic text-stone-500">to the Construction Site.</span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Construction often feels disconnected from design. Drawings are interpreted literally, without understanding the 'why' behind the line weight.
              </p>
              <p>
                <strong>I started UNIQID with a different perspective.</strong> With a background in design, I realized the best way to honor a vision is to master the tools that build it. I traded the studio desk for the site office because I believe true craftsmanship happens when the builder understands the intent.
              </p>
              <p>
                We offer the perfect partnership for architects, designers and clients who care about the details. We speak your language, we respect your materials, and we build with understanding.
              </p>
              
              <div className="pt-8">
                <p className="font-serif text-xl italic text-stone-800">Noah P.</p>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Founder & Lead Director</p>
              </div>
            </div>
          </div>

          {/* Image Content - Simulating Prompt #2 & #7 */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1507537297725-24a1c434e3db?auto=format&fit=crop&q=80&w=800" 
                alt="Noah P, Founder of UNIQID, started with a different perspective" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 bg-stone-900/80 px-6 py-4">
                <p className="text-stone-50 text-xs tracking-widest uppercase">Field-Born Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
