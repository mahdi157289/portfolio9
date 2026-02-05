/**
 * File Role: Projects Section Component
 * Utility: Displays a gallery of featured projects with details like category and technology stack.
 * Technical description: Implements 3D card effects with hover interactions and Lucide icons.
 * Workflow inside the file:
 *  1. Imports GSAP and React hooks.
 *  2. Registers ScrollTrigger plugin.
 *  3. Retrieves project data from the configuration file.
 *  4. Uses `useEffect` for staggered entrance animations.
 *  5. Renders project cards with 3D hover effects.
 * Relation with other files: Imported by `App.jsx`. Uses data from `../config.jsx`.
 * Overall utility in the project: Demonstrates the developer's practical experience and work portfolio.
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);
    const { title, titleHighlight, items } = projects;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Use batch for better performance and scroll handling
            ScrollTrigger.batch('.project-card', {
                start: 'top 85%',
                onEnter: batch => gsap.to(batch, {
                    opacity: 1, 
                    y: 0,
                    stagger: 0.15, 
                    duration: 0.8,
                    ease: 'power3.out',
                    overwrite: true
                }),
                onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50 })
            });
            
            // Ensure initial state
            gsap.set('.project-card', { opacity: 0, y: 50 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={containerRef} className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-display font-bold text-center mb-16">
                    {title} <span className="gradient-text">{titleHighlight}</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((project, i) => {
                        const Icon = project.icon;
                        return (
                            <div key={i} className="project-card card-3d rounded-3xl overflow-hidden group cursor-pointer">
                                <div className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
                                        <Icon size={48} />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-purple-400 text-sm mb-2 font-medium">{project.category}</p>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <span className="px-4 py-2 bg-purple-500/10 text-purple-300 text-xs rounded-full font-medium border border-purple-500/20 hover:border-purple-400/50 transition-colors">👁️ View</span>
                                        <span className="px-4 py-2 bg-white/5 text-gray-300 text-xs rounded-full font-medium border border-white/10 hover:border-white/30 transition-colors">💻 Code</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
