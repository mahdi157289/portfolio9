/**
 * File Role: About Section Component
 * Utility: Displays personal information, a profile image, and key statistics about the developer.
 * Technical description: Uses GSAP ScrollTrigger for entrance animations and standard Tailwind CSS for styling.
 * Workflow inside the file:
 *  1. Imports GSAP and React hooks.
 *  2. Registers ScrollTrigger plugin.
 *  3. Uses `useEffect` to set up the GSAP animation when the component comes into view.
 *  4. Renders the content using data from the configuration file.
 * Relation with other files: Imported by `App.jsx` to be displayed in the main layout. Uses data from `../config.jsx`.
 * Overall utility in the project: Provides the "About Me" section of the portfolio.
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { about } from '../config';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const { title, titleHighlight, description1, description2, stats } = about;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-content', {
                scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
                y: 100, opacity: 0, duration: 1
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-display font-bold text-center mb-16">
                    {title} <span className="gradient-text">{titleHighlight}</span>
                </h2>
                <div className="about-content grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="w-80 h-80 mx-auto rounded-3xl glass gradient-border overflow-hidden animate-float">
                            <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                                <span className="text-8xl">👨‍💻</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-semibold mb-4">Full Stack Developer & Data Engineer</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {description1}
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {description2}
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={stat.label} className="stat-card p-5 rounded-2xl text-center">
                                        <div className="flex justify-center text-purple-400"><Icon className="w-6 h-6 mb-2" /></div>
                                        <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                                        <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
