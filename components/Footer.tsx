import React from 'react';
import { COMPANY_NAME, SLOGAN } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-stone-50 font-serif text-xl">{COMPANY_NAME}</h3>
            <p className="text-sm max-w-xs">
              {SLOGAN} <br/>
              A construction firm bridging the gap between design intent and physical reality.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-stone-50 text-sm uppercase tracking-widest">Contact</h4>
            <div className="text-sm space-y-2">
              <p>info@uniqid-noah.com</p>
              <p>+1 (604) 555-0199</p>
              <p>Vancouver, British Columbia</p>
            </div>
          </div>

          {/* Social / Legal */}
          <div className="space-y-4">
             <h4 className="text-stone-50 text-sm uppercase tracking-widest">Follow</h4>
             <div className="flex space-x-4 text-sm">
                <a href="#" className="hover:text-stone-50 transition-colors">Instagram</a>
                <a href="#" className="hover:text-stone-50 transition-colors">LinkedIn</a>
             </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 text-xs text-stone-600 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>Designed with Intent.</p>
        </div>
      </div>
    </footer>
  );
};