import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ExternalLink, Github, Code, Layout, Layers, Box } from 'lucide-react';
import { projects } from '../config';
import ImageCarousel from '../components/ImageCarousel';

const ProjectDetail = () => {
    const { id } = useParams();
    const containerRef = useRef(null);
    const project = projects.items.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (project) {
            const ctx = gsap.context(() => {
                gsap.from('.animate-item', {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                });

                gsap.to('.project-logo', {
                    y: -10,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            }, containerRef);
            return () => ctx.revert();
        }
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-purple-400 hover:text-purple-300">Return Home</Link>
                </div>
            </div>
        );
    }

    const { details } = project;

    return (
        <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Back Navigation */}
                <Link
                    to="/"
                    className="animate-item inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                    <ArrowLeft size={18} />
                    Back to Projects
                </Link>

                {/* Hero Header */}
                <div className="animate-item flex flex-col items-center text-center gap-8 mb-20 mt-8">
                    {/* Main Big Logo */}
                    <div className="project-logo w-40 h-40 sm:w-56 sm:h-56 rounded-3xl bg-white/5 flex items-center justify-center p-6 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10"></div>
                        {details?.bigLogo ? (
                            <img src={details.bigLogo} alt={`${project.title} Logo`} className="w-full h-full object-cover filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-110" />
                        ) : (
                            <project.icon size={80} className={`text-transparent bg-clip-text bg-gradient-to-br ${project.color}`} />
                        )}
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-4">{project.category}</p>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                            {project.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all"
                            >
                                <ExternalLink size={20} />
                                View Live Site
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-white/10 rounded-full font-bold text-white shadow-xl hover:bg-white/20 border border-white/10 hover:-translate-y-1 transition-all"
                            >
                                <Github size={20} />
                                View Source
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-12 mb-20">
                    {/* Row 1: Media Content */}
                    {(details?.screenshots?.length > 0 || details?.video) && (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Carousel */}
                            <div className="animate-item lg:col-span-2 flex flex-col">
                                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-4">Product Showcase</h2>
                                <ImageCarousel images={details?.screenshots || []} />
                            </div>
                            
                            {/* Video */}
                            <div className="animate-item lg:col-span-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">Video Demo</h2>
                                {details?.video ? (
                                    <div className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex-grow flex items-center justify-center relative group min-h-[300px] lg:min-h-0">
                                        <video 
                                            src={details.video} 
                                            controls 
                                            autoPlay 
                                            muted 
                                            loop 
                                            playsInline
                                            className="w-full h-full object-cover absolute inset-0 rounded-3xl" 
                                        />
                                    </div>
                                ) : (
                                    <div className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl flex-grow flex flex-col items-center justify-center p-8 text-center min-h-[300px] lg:min-h-0">
                                        <Box size={48} className="text-white/20 mb-4" />
                                        <p className="text-gray-400">No video available for this project.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Row 2: Text Content */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Overview */}
                        <section className="animate-item bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl hover:border-purple-500/30 transition-colors duration-500 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-6 text-purple-400 border-b border-white/10 pb-6 shrink-0">
                                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                                    <Layout size={28} />
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-white">Project Overview</h2>
                            </div>
                            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light flex-grow">
                                {details?.overview || project.description}
                            </p>
                        </section>

                        {/* Key Functionalities */}
                        <section className="animate-item bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl hover:border-blue-500/30 transition-colors duration-500 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-8 text-blue-400 border-b border-white/10 pb-6 shrink-0">
                                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                    <Layers size={28} />
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-white">Core Functionalities</h2>
                            </div>
                            <div className="flex flex-col gap-4 flex-grow">
                                {details?.functionality ? (
                                    details.functionality.map((func, idx) => (
                                        <div key={idx} className="flex items-start gap-4 bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-black/40 transition-colors">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)] shrink-0"></div>
                                            <p className="text-sm lg:text-base text-gray-300 font-medium">{func}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-400">Functionality details coming soon.</p>
                                )}
                            </div>
                        </section>

                        {/* Sidebar / Tech Stack */}
                        <section className="animate-item bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

                            <div className="flex items-center gap-3 mb-8 text-green-400 border-b border-white/10 pb-6 shrink-0">
                                <Code size={28} />
                                <h3 className="text-2xl lg:text-3xl font-bold text-white">Tech Stack</h3>
                            </div>

                            <div className="flex flex-col gap-3 flex-grow overflow-y-auto">
                                {project.tech ? (
                                    project.tech.map((t, index) => (
                                        <div key={index} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                                            <Box size={16} className="text-gray-400 shrink-0" />
                                            <span className="text-gray-200 font-medium">{t}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-400 text-sm">Technologies not specified.</p>
                                )}
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;
