import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, details } = formData;
    
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`);
    
    window.location.href = `mailto:admin@uniqid.ca?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-stone-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-stone-50 p-8 md:p-16 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Start Your Project</h2>
            <p className="text-stone-600">
              Based in Vancouver, BC. Available for commercial and residential execution.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-500">Name</label>
                <input 
                  type="text"
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-500">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="details" className="text-xs uppercase tracking-widest text-stone-500">Project Details</label>
              <textarea 
                id="details"
                name="details"
                rows={4}
                value={formData.details}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none resize-none"
                placeholder="Tell us about your project, timeline, and vision..."
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <button type="submit" className="bg-stone-900 text-stone-50 px-10 py-4 uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors w-full md:w-auto">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
