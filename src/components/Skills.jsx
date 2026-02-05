/**
 * File Role: Skills Section Component
 * Utility: Displays a grid of technical skills categorized by domain (Frontend, Backend, DevOps).
 * Technical description: Uses GSAP ScrollTrigger for staggered entrance animations of skill cards.
 * Workflow inside the file:
 *  1. Imports GSAP and React hooks.
 *  2. Registers ScrollTrigger plugin.
 *  3. Retrieves skill data from the configuration file.
 *  4. Uses `useEffect` to animate the skill cards when scrolled into view.
 *  5. Renders skill categories and items.
 * Relation with other files: Imported by `App.jsx`. Uses data from `../config.jsx`.
 * Overall utility in the project: Showcases the developer's technical stack and proficiency.
 */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../config';

gsap.registerPlugin(ScrollTrigger);

// Helper function to render icons (supports font classes and raw SVG/Image)
const renderIcon = (icon, className) => {
  if (icon.startsWith('<svg') || icon.startsWith('<img')) {
    return (
      <div 
        className={`${className} w-[1em] h-[1em] fill-current inline-block`}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
  }
  return <i className={`${icon} ${className}`}></i>;
};

const Skills = () => {
  const containerRef = useRef(null);
  const { title, titleHighlight, description, categories, otherTools } = skills;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate categories and their skills
      const categories = gsap.utils.toArray('.skill-category');
      
      categories.forEach((category) => {
        // Animate Category Card
        gsap.fromTo(category, 
          { y: 50, opacity: 0 },
          {
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: category,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );

        // Animate Skills inside the category
        const skills = category.querySelectorAll('.floating-skill');
        if (skills.length > 0) {
          gsap.fromTo(skills,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1, 
              opacity: 1, 
              duration: 0.4, 
              stagger: 0.05, 
              ease: 'back.out(1.5)',
              scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          );

          // Animate Progress Bars and Counters
          skills.forEach((skill) => {
             const bar = skill.querySelector('.skill-progress-bar');
             const counter = skill.querySelector('.skill-percentage-text');
             const targetLevel = skill.dataset.level;

             if (bar && counter && targetLevel) {
               // Animate Bar Width
               gsap.fromTo(bar, 
                 { width: '0%' },
                 {
                   width: `${targetLevel}%`,
                   duration: 1.5,
                   ease: 'power2.out',
                   scrollTrigger: {
                     trigger: category,
                     start: 'top 85%',
                     toggleActions: 'play none none none'
                   }
                 }
               );

               // Animate Counter Text
               const counterObj = { val: 0 };
               gsap.to(counterObj, {
                 val: targetLevel,
                 duration: 1.5,
                 ease: 'power2.out',
                 onUpdate: () => {
                   counter.innerText = Math.round(counterObj.val) + "%";
                 },
                 scrollTrigger: {
                   trigger: category,
                   start: 'top 85%',
                   toggleActions: 'play none none none'
                 }
               });
             }
          });
        }
      });
      
      // Animate other tools
      gsap.utils.toArray('.other-tool').forEach((tool, i) => {
         gsap.fromTo(tool,
           { opacity: 0, y: 30 },
           {
             opacity: 1, 
             y: 0, 
             duration: 0.5,
             ease: 'power2.out',
             delay: i * 0.05, // simple stagger effect based on index if all visible, or we can use ScrollTrigger batching but explicit loop is safer
             scrollTrigger: {
               trigger: '.other-tools-grid',
               start: 'top 90%',
               toggleActions: 'play none none none'
             }
           }
         );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-20 sm:py-24 lg:py-32 relative z-10 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          {title} <span className="gradient-text">{titleHighlight}</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Skills Grid */}
        <div className="skills-grid grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.title} className="skill-category card-3d rounded-2xl sm:rounded-3xl p-6 sm:p-8 group">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
                  <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color} mt-1`}></div>
                </div>
              </div>

              {/* Skills in Category */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="floating-skill skill-card relative rounded-xl p-4 cursor-pointer group/skill"
                    data-level={skill.level}
                  >
                    {/* Explore More Button */}
                    <Link 
                      to={`/skill/${skill.name}`}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/5 hover:bg-white/20 text-white/40 hover:text-white transition-all duration-300 opacity-0 group-hover/skill:opacity-100 transform translate-y-2 group-hover/skill:translate-y-0 z-20"
                      title="Explore More"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>

                    <div className="flex flex-col items-center text-center">
                      {renderIcon(skill.icon, "text-3xl sm:text-4xl mb-3 group-hover/skill:scale-110 transition-transform text-white")}
                      <span className="text-sm sm:text-base font-medium text-white/90">{skill.name}</span>
                      <div className="w-full mt-3 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                        <div 
                          className={`skill-progress-bar h-full rounded-full bg-gradient-to-r ${category.color}`}
                          style={{width: '0%'}}
                        ></div>
                      </div>
                      <span className="skill-percentage-text text-xs text-gray-400 mt-1">0%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
            {otherTools.title} <span className="gradient-text">{otherTools.titleHighlight}</span>
          </h3>
          <div className="other-tools-grid flex flex-wrap justify-center gap-4">
            {otherTools.items.map((tool) => (
              <div 
                key={tool.name}
                className="other-tool flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default"
              >
                {renderIcon(tool.icon, "text-xl text-white")}
                <span className="text-gray-300 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
