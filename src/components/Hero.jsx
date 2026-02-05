/**
 * File Role: Hero Section
 * Utility: Displays the main introduction, 3D code screen, and dynamic role rotator.
 * Technical description: Uses GSAP for entrance animations and Framer Motion for the role rotator.
 * Workflow inside the file:
 *  1. Initializes state for the role rotator.
 *  2. Uses GSAP context to animate elements on mount.
 *  3. Renders the 3D CodeScreen and text content with responsive layout.
 * Relation with other files: Imports config data from '../config' and CodeScreen from './CodeScreen'.
 * Overall utility in the project: Serves as the landing section to engage the user immediately.
 */
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { hero, social } from '../config';
import CodeScreen from './CodeScreen';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const containerRef = useRef(null);
  
  const { roles, title, titleHighlight, subtitle, name, status, description, buttons } = hero;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.code-screen-container', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  const CurrentRoleIcon = roles[currentRole].icon;

  return (
    <section id="home" ref={containerRef} className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center relative z-10 overflow-hidden">
      
      {/* Centered Welcome */}
      <h1 className="welcome-title hero-text text-4xl md:text-6xl font-display font-bold text-center mb-12">
            {title} <span className="gradient-text">{titleHighlight}</span>
          </h1>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="hero-text space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-purple-300 text-sm">{status}</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            {subtitle} <span className="gradient-text">{name}</span>
          </h2>

          <div className="h-20 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-300"
              >
                <CurrentRoleIcon className="w-8 h-8" />
                <span>{roles[currentRole].title}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            {description}
          </p>

          <div className="flex gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg shadow-lg shadow-purple-500/25 btn-float"
            >
              {buttons.primary}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/10 transition-colors btn-glass-float"
            >
              {buttons.secondary}
            </motion.button>
          </div>

          <div className="flex gap-6 pt-4">
            {social.map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                whileHover={{ y: -5, scale: 1.1 }}
                className="social-float p-4 rounded-full text-gray-300 hover:text-white"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right: Code Screen */}
        <div className="hidden lg:block">
          <CodeScreen />
        </div>
      </div>
    </section>
  );
};

export default Hero;
