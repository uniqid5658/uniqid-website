import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-stone-50 p-8 md:p-16 shadow-sm relative overflow-hidden">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Start Your Project</h2>
            <p className="text-stone-600">
              Based in Vancouver, BC. Available for commercial and residential execution.
            </p>
          </div>

          <form 
            action="https://formsubmit.co/admin@uniqid.ca" 
            method="POST" 
            className="space-y-6"
          >
            {/* Configuration for FormSubmit */}
            <input type="hidden" name="_subject" value="New Inquiry from UNIQID Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {/* Optional: Redirect back to your site after success. 
                If you don't have a specific URL, you can remove this line and use their default success page 
                to confirm it's working. 
            */}
            {/* <input type="hidden" name="_next" value="https://your-website.com/thanks" /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-500">Name</label>
                <input 
                  type="text"
                  id="name" 
                  name="name"
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
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none resize-none"
                placeholder="Tell us about your project, timeline, and vision..."
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <button 
                type="submit" 
                className="bg-stone-900 text-stone-50 px-10 py-4 uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors w-full md:w-auto"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
