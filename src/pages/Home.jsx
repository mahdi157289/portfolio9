/**
 * File Role: Home Page Component
 * Utility: Represents the main landing page of the portfolio.
 * Technical description: Aggregates all sections (Hero, About, Skills, Projects, Contact) into a single page view.
 * Workflow inside the file:
 *  1. Imports all section components.
 *  2. Imports `Background3D` for the visual backdrop.
 *  3. Uses `useEffect` to track mouse movement for the custom cursor glow effect.
 *  4. Renders the page structure.
 * Relation with other files: Imported by `routes.js` (or `App.jsx` directly if no router).
 * Overall utility in the project: The primary view for visitors.
 */

import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background3D from '../components/Background3D';

const Home = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-purple-500/30">
      {/* <Background3D /> */}
      
      {/* Cursor Glow */}
      <div ref={cursorRef} className="cursor-glow fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
