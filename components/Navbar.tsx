import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to create the correct link path
  // If we are on the home page ('/'), scrolling links like '#about' work.
  // If we are elsewhere, we need to prepend '/' so it goes to home first: '/#about'
  const getLinkPath = (href: string) => {
    if (href.startsWith('#')) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen || location.pathname !== '/' ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900">
          {COMPANY_NAME}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={getLinkPath(item.href)}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 p-6 flex flex-col space-y-4 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={getLinkPath(item.href)}
              className="text-lg font-medium text-stone-800 hover:text-stone-500"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};