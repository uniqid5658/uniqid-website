import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset carousel index when opening a new project
  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
    }
  }, [selectedProject]);

  const handleOpenModal = (project: PortfolioItem) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Combine main image with additional images if available
  const allImages = selectedProject 
    ? [selectedProject.imageUrl, ...(selectedProject.additionalImages || [])]
    : [];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-2">Selected Works</h2>
            <p className="text-stone-500">A collection of executed spaces.</p>
          </div>
          <a href="#" className="hidden md:block text-sm font-medium uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors mt-6 md:mt-0">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-200 mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
                   <span className="opacity-0 group-hover:opacity-100 text-stone-50 text-sm uppercase tracking-widest border border-stone-50 px-4 py-2 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      View Details
                   </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-stone-900">{project.title}</h3>
                <span className="text-xs uppercase tracking-widest text-stone-400">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-sm font-medium uppercase tracking-widest border-b border-stone-900 pb-1">
            View All Projects
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm transition-opacity" 
            onClick={handleCloseModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-stone-50 w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-auto rounded-sm">
            
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 p-2 bg-stone-50/50 md:bg-transparent hover:bg-stone-200 rounded-full transition-colors text-stone-900"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Image Carousel Section */}
            <div className="relative w-full md:w-3/5 h-64 md:h-[600px] bg-stone-200 group/image">
              <img 
                src={allImages[currentImageIndex]} 
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Navigation Controls */}
              {allImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                           e.stopPropagation();
                           setCurrentImageIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${
                          idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-stone-50 overflow-y-auto">
              <span className="text-xs uppercase tracking-widest text-stone-500 mb-4 block">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                {selectedProject.title}
              </h3>
              <div className="w-12 h-[1px] bg-stone-300 mb-8"></div>
              <p className="text-stone-600 text-base md:text-lg leading-relaxed font-light mb-8">
                {selectedProject.description}
              </p>
              

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
