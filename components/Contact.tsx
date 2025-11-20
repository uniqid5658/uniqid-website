import React from 'react';

export const Contact: React.FC = () => {
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

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none"
                  placeholder="Noah Park"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none"
                  placeholder="admin@uniqid.ca"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500">Project Details</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none resize-none"
                placeholder="Tell us about your project, timeline, and vision..."
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <button className="bg-stone-900 text-stone-50 px-10 py-4 uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors w-full md:w-auto">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
