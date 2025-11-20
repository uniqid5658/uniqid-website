import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co for backend-less email sending
      // The first time you submit this form, check your email (admin@uniqid.ca) to activate it.
      const response = await fetch("https://formsubmit.co/ajax/admin@uniqid.ca", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.details,
          _subject: `New Project Inquiry from ${formData.name}` // Custom subject line
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', details: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {isSuccess ? (
            <div className="absolute inset-0 bg-stone-50 flex flex-col items-center justify-center z-10 animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">Inquiry Sent</h3>
              <p className="text-stone-500">Thank you. We will be in touch shortly.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-sm uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-600 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Hidden Honeypot for spam protection */}
              <input type="text" name="_honey" style={{display: 'none'}} />
              
              {/* Disable Captcha to keep it clean (optional) */}
              <input type="hidden" name="_captcha" value="false" />

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
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none disabled:opacity-50"
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
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 transition-colors rounded-none resize-none disabled:opacity-50"
                  placeholder="Tell us about your project, timeline, and vision..."
                ></textarea>
              </div>

              <div className="pt-6 text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-stone-900 text-stone-50 px-10 py-4 uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors w-full md:w-auto flex items-center justify-center mx-auto disabled:bg-stone-700"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={16} />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
