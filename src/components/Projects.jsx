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
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
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
                            <div key={i} className="project-card card-3d rounded-3xl overflow-hidden group bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full">
                                <div className="h-48 relative overflow-hidden shrink-0">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                            <Icon size={48} className="text-white/80 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    )}

                                    {/* Hover Overlay with Links */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 rounded-full hover:bg-purple-600 hover:scale-110 transition-all text-white border border-white/20"
                                                title="View Live"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 rounded-full hover:bg-purple-600 hover:scale-110 transition-all text-white border border-white/20"
                                                title="View Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-auto">
                                        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                                        {project.description && (
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>

                                    {project.tech && (
                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                            {project.tech.map((t, index) => (
                                                <span key={index} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-300 font-medium border border-white/5 whitespace-nowrap">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="mt-6 pt-4 border-t border-white/10">
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="flex items-center justify-between group/link w-full text-sm font-bold text-gray-300 hover:text-white transition-colors"
                                        >
                                            View Project Details
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-purple-600 transition-colors">
                                                <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
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
