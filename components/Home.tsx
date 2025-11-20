import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Process } from './Process';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling manually because of HashRouter
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
       window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
    </>
  );
};