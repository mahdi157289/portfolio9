import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, BookOpen, Terminal, Zap, Image as ImageIcon } from 'lucide-react';
import { getSkillDetails } from '../data/skillDetails';

const SkillDetail = () => {
  const { name } = useParams();
  const containerRef = useRef(null);
  const data = getSkillDetails(name);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Animate content entrance
      gsap.from('.animate-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Bouncing Logo Effect
      gsap.to('.skill-logo', {
        y: -15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [name]);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="animate-item flex justify-center items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="animate-item flex flex-col items-center text-center gap-6 mb-12">
          <div className="skill-logo w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-white/10 flex items-center justify-center p-6 backdrop-blur-sm border border-white/10 shadow-2xl shadow-purple-500/10 relative z-20">
            <img src={data.imagePlaceholder} alt={data.name} className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{data.name}</h1>
            <p className="text-xl text-gray-400">Technology Overview</p>
          </div>
        </div>

        {/* Definition & Description */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <section className="animate-item bg-[#1c1c2e] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl group hover:border-purple-500/30 transition-colors duration-300">
              <div className="flex flex-col items-center gap-3 mb-6 text-purple-400">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <BookOpen size={28} />
                </div>
                <h2 className="text-2xl font-bold">Definition</h2>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed text-center font-medium">
                {data.definition}
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed text-center">
                {data.description}
              </p>
            </section>

            <section className="animate-item bg-[#1c1c2e] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl group hover:border-green-500/30 transition-colors duration-300">
              <div className="flex flex-col items-center gap-3 mb-6 text-green-400">
                <div className="p-3 rounded-full bg-green-500/10">
                  <Zap size={28} />
                </div>
                <h2 className="text-2xl font-bold">Key Utilities</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {data.utilities.map((item, idx) => (
                  <li key={idx} className="flex flex-col items-center text-center gap-2 text-gray-300 bg-[#13131f] p-4 rounded-xl border border-white/5 hover:bg-[#181825] transition-colors">
                    <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar / Quick Start */}
          <div className="space-y-8">
            <section className="animate-item bg-[#1c1c2e] border border-white/10 p-6 sm:p-8 rounded-2xl h-full shadow-xl group hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex flex-col items-center gap-3 mb-8 text-blue-400">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <Terminal size={28} />
                </div>
                <h2 className="text-xl font-bold">Quick Start</h2>
              </div>
              <div className="space-y-6 relative pl-2">
                {/* Connecting Line */}
                <div className="absolute left-[1.35rem] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent"></div>
                
                {Object.entries(data.quickStart).map(([step, text], idx) => (
                  <div key={step} className="relative flex gap-5 group/step">
                    <div className="w-8 h-8 rounded-full bg-[#13131f] border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400 flex-shrink-0 z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      {idx + 1}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">Step {idx + 1}</h4>
                      <code className="text-xs sm:text-sm bg-[#13131f] px-3 py-2 rounded-md text-gray-300 block font-mono border border-white/5 shadow-inner">
                        {text}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Visual Showcase (Placeholder for "Explaining Pictures") */}
        <section className="animate-item mb-12">
          <div className="flex items-center gap-3 mb-6 text-pink-400">
            <ImageIcon size={24} />
            <h2 className="text-2xl font-bold">Visual Showcase</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center group overflow-hidden relative">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-gray-500 font-medium">Interface / Dashboard</span>
            </div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center group overflow-hidden relative">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-gray-500 font-medium">Code Structure</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SkillDetail;
