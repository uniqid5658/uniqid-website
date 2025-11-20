import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = PORTFOLIO_ITEMS.find(p => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-6">
        <h2 className="text-3xl font-serif text-stone-900 mb-4">Project Not Found</h2>
        <p className="text-stone-600 mb-8">The project you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-3 bg-stone-900 text-stone-50 uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  const allImages = [project.imageUrl, ...(project.additionalImages || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  return (
    <div className="pt-24 bg-stone-50 min-h-screen pb-24">
      <div className="container mx-auto px-6">
        {/* Back Link */}
        <Link 
          to="/#portfolio" 
          className="inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors mb-12 uppercase tracking-widest text-xs font-medium group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="block text-stone-500 text-sm uppercase tracking-widest mb-4">{project.category}</span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">{project.title}</h1>
          <p className="text-xl text-stone-600 leading-relaxed font-light border-l border-stone-300 pl-6">
            {project.description}
          </p>
        </div>

        {/* Gallery / Carousel */}
        <div className="mb-20">
           <div className="relative aspect-video w-full bg-stone-200 overflow-hidden mb-4">
             <img 
               src={allImages[currentImageIndex]} 
               alt={`${project.title} view ${currentImageIndex + 1}`}
               className="w-full h-full object-cover transition-opacity duration-500"
             />
             
             {/* Controls */}
             {allImages.length > 1 && (
               <>
                 <button 
                   onClick={prevImage}
                   className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-stone-900/10 hover:bg-stone-900/30 text-white backdrop-blur-sm transition-colors rounded-full"
                 >
                   <ChevronLeft size={24} />
                 </button>
                 <button 
                   onClick={nextImage}
                   className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-stone-900/10 hover:bg-stone-900/30 text-white backdrop-blur-sm transition-colors rounded-full"
                 >
                   <ChevronRight size={24} />
                 </button>
               </>
             )}
           </div>
           
           {/* Thumbnails */}
           {allImages.length > 1 && (
             <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
               {allImages.map((img, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrentImageIndex(idx)}
                   className={`aspect-square overflow-hidden ${currentImageIndex === idx ? 'ring-2 ring-stone-900' : 'opacity-60 hover:opacity-100'} transition-all`}
                 >
                   <img src={img} alt="" className="w-full h-full object-cover" />
                 </button>
               ))}
             </div>
           )}
        </div>

        {/* Detailed Content Placeholder - Simulating a real case study layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-200 pt-16">
          <div className="col-span-1">
             <h3 className="text-lg font-serif text-stone-900 mb-4">Project Scope</h3>
             <ul className="space-y-2 text-stone-600 text-sm">
               <li>Full Construction Management</li>
               <li>Custom Millwork Execution</li>
               <li>Site Supervision</li>
               <li>Permit Coordination</li>
             </ul>
          </div>
          <div className="col-span-1 md:col-span-2 text-stone-600 leading-relaxed space-y-6">
            <p>
              For the {project.title}, the challenge was to maintain the integrity of the design vision while navigating complex site constraints. Our team worked closely with the architects to resolve detailing issues on-site, ensuring that materials met perfectly and transitions were seamless.
            </p>
            <p>
              The result is a space that feels both effortless and grounded—a testament to what happens when construction is approached with a design mindset.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-stone-100 p-12 text-center">
          <h3 className="text-2xl font-serif text-stone-900 mb-4">Have a similar project?</h3>
          <Link to="/#contact" className="inline-block border-b border-stone-900 pb-1 text-stone-900 uppercase tracking-widest text-sm hover:text-stone-600 hover:border-stone-600 transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};