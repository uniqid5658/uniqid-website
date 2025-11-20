import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Our Expertise</h2>
          <p className="text-stone-600">
            We focus purely on execution. Our services are designed to support the architect's vision and the client's investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-stone-50 p-8 hover:shadow-lg transition-shadow duration-300 border border-stone-200 group"
            >
              <div className="mb-6 text-stone-800 group-hover:text-stone-600 transition-colors">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};