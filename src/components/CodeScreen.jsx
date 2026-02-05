/**
 * File Role: Code Screen Visual Component
 * Utility: Renders a 3D floating code editor visual.
 * Technical description: Uses CSS 3D transforms and keyframe animations defined in global CSS.
 * Workflow inside the file:
 *  1. Renders a static HTML structure with specific classes for 3D effects.
 * Relation with other files: Imported by `Hero.jsx`.
 * Overall utility in the project: Provides visual interest and reinforces the developer identity.
 */

import { codeScreen } from '../config';

const CodeScreen = () => {
  const { fileName, code, comment } = codeScreen;
  
  return (
    <div className="perspective-1000 w-full max-w-lg mx-auto lg:mr-0 hidden lg:block">
      <div className="relative">
        {/* Glow Effect */}
        <div className="screen-glow"></div>

        <div className="screen-3d preserve-3d bg-gray-900 rounded-xl overflow-hidden border border-gray-700 relative shadow-2xl">
          {/* Top Bar */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-4 px-3 py-1 bg-gray-900 rounded-md text-xs text-gray-400 font-mono">
              {fileName}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 font-mono text-sm leading-relaxed relative overflow-hidden h-64 sm:h-80 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23]">
            {/* Screen Glow */}
            <div className="screen-glow" />
            
            <div className="relative z-10 text-blue-400">
              <span className="text-pink-400">const</span> <span className="text-yellow-300">{code.variableName}</span> = {'{'}<br />
              &nbsp;&nbsp;<span className="text-purple-300">name</span>: <span className="text-green-300">{code.name}</span>,<br />
              &nbsp;&nbsp;<span className="text-purple-300">skills</span>: [<span className="text-green-300">{code.skills.join(', ')}</span>],<br />
              &nbsp;&nbsp;<span className="text-purple-300">hardWorker</span>: <span className="text-orange-400">{code.hardWorker}</span>,<br />
              &nbsp;&nbsp;<span className="text-purple-300">problemSolver</span>: <span className="text-orange-400">{code.problemSolver}</span>,<br />
              &nbsp;&nbsp;<span className="text-purple-300">hireable</span>: <span className="text-blue-400">function</span>() {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-orange-400">{code.returnValue}</span>;<br />
              &nbsp;&nbsp;{'}'}<br />
              {'}'};
            </div>
            
            <div className="mt-4 text-gray-500">
              {comment}<span className="animate-pulse">|</span>
            </div>
            
            {/* Reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Floating Elements Around Screen */}
        <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float shadow-xl shadow-purple-500/20" style={{animationDelay: '0s'}}>
            <span className="text-xl sm:text-2xl lg:text-3xl">⚛️</span>
        </div>
        <div className="absolute -bottom-4 sm:-bottom-6 -left-8 sm:-left-12 w-12 sm:w-14 lg:w-18 h-12 sm:h-14 lg:h-18 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float shadow-xl shadow-blue-500/20" style={{animationDelay: '1s'}}>
            <span className="text-lg sm:text-xl lg:text-2xl">🔷</span>
        </div>
        <div className="absolute top-1/4 -right-6 sm:-right-10 w-11 sm:w-12 lg:w-16 h-11 sm:h-12 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float shadow-xl shadow-green-500/20" style={{animationDelay: '2s'}}>
            <span className="text-base sm:text-lg lg:text-2xl">🚀</span>
        </div>
        <div className="absolute -bottom-6 sm:-bottom-10 right-8 sm:right-12 w-12 sm:w-14 lg:w-18 h-12 sm:h-14 lg:h-18 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-600/30 to-yellow-600/30 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float shadow-xl shadow-orange-500/20" style={{animationDelay: '1.5s'}}>
            <span className="text-lg sm:text-xl lg:text-2xl">⚡</span>
        </div>
        <div className="absolute top-10 sm:top-12 -right-2 sm:-right-4 w-10 sm:w-11 lg:w-14 h-10 sm:h-11 lg:h-14 rounded-md sm:rounded-lg bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float shadow-xl shadow-pink-500/20" style={{animationDelay: '0.5s'}}>
            <span className="text-sm sm:text-base lg:text-xl">💜</span>
        </div>
      </div>
    </div>
  );
};

export default CodeScreen;
