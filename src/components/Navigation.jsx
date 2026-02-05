/**
 * File Role: Navigation Bar Component
 * Utility: Provides the main navigation menu and a call-to-action button.
 * Technical description: Uses Framer Motion for entry animations and sticky positioning with scroll-aware styling.
 * Workflow inside the file:
 *  1. Imports Framer Motion and React hooks.
 *  2. Uses `useEffect` to detect scroll position and toggle glassmorphism effect.
 *  3. Renders the logo, navigation links, and CTA button.
 * Relation with other files: Imported by `App.jsx`. Uses data from `../config.jsx`.
 * Overall utility in the project: Enables easy navigation between different sections of the single-page application.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '../config';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { logo, links, cta } = navigation;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy
      const sections = links.map(link => link.toLowerCase());
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLink = (item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className={`relative transition-colors group whitespace-nowrap ${
        activeSection === item.toLowerCase() ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
      }`}
    >
      {item}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
        activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </a>
  );

  const midPoint = Math.ceil(links.length / 2);
  const leftLinks = links.slice(0, midPoint);
  const rightLinks = links.slice(midPoint);

  return (
    <>
      <div className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled 
          ? 'top-6 inset-x-0 flex justify-center pointer-events-none' 
          : 'top-0 inset-x-0 pointer-events-none'
      }`}>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            scrolled 
              ? 'w-auto max-w-[90vw] px-8 py-3 rounded-full glass shadow-2xl border border-white/10' 
              : 'w-full py-6 bg-transparent'
          }`}
        >
          <div className={`flex items-center transition-all duration-500 ${scrolled ? 'justify-center gap-8' : 'justify-between max-w-7xl mx-auto px-6'}`}>
            
            {/* Scrolled: Left Links */}
            <div className={`hidden md:flex items-center justify-end gap-8 transition-all duration-300 shrink-0 ${scrolled ? 'opacity-100 w-72' : 'opacity-0 w-0 overflow-hidden'}`}>
               {leftLinks.map(renderLink)}
            </div>

            {/* Logo */}
            <a href="#" className="text-2xl font-bold font-display gradient-text whitespace-nowrap z-10 shrink-0">
              {logo}
            </a>
            
            {/* Right Side */}
            <div className={`flex items-center transition-all duration-300 shrink-0`}>
              {/* Unscrolled: All Links */}
              <div className={`hidden md:flex gap-8 transition-all duration-300 ${!scrolled ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                {links.map(renderLink)}
              </div>

              {/* Scrolled: Right Links */}
              <div className={`hidden md:flex items-center justify-start gap-8 transition-all duration-300 ${scrolled ? 'opacity-100 w-72' : 'opacity-0 w-0 overflow-hidden'}`}>
                {rightLinks.map(renderLink)}
              </div>

              {/* CTA Button (Hidden when scrolled) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm shadow-lg shadow-purple-500/30 btn-float whitespace-nowrap ${scrolled ? 'hidden w-0 p-0 overflow-hidden' : 'block ml-8'}`}
              >
                {cta}
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={`!fixed bottom-8 right-8 z-[100] px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm shadow-lg shadow-purple-500/30 btn-float flex items-center gap-2 transition-all duration-500 transform ${
          scrolled ? 'opacity-100 translate-x-0 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-x-20 scale-90 pointer-events-none'
        }`}
      >
        {cta}
      </button>
    </>
  );
};

export default Navigation;
