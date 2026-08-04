import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import FadingVideo from './FadingVideo';

// Cinematic space video from specification (First Animation / Section 1)
const SKILLS_VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const categories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['Python', 'C++', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    title: 'Agentic AI & Multi-Agent Systems',
    icon: '🤖',
    skills: ['Autonomous AI Agents', 'Multi-Agent Orchestration', 'Agent Tools & API Interoperability', 'Long-Term Memory & State', 'Agent Security & Guardrails', 'Spec-Driven Production Workflows', 'Vibe Coding Workflows'],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🧠',
    skills: ['Machine Learning', 'Computer Vision', 'YOLO / OpenCV', 'LLM API Integration', 'Prompt Engineering'],
  },
  {
    title: 'Web & Frameworks',
    icon: '🌐',
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'Django REST', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: ['AWS (DevOps)', 'IBM Cloud', 'Git / GitHub', 'CI/CD Concepts'],
  },
  {
    title: 'Core CS & Engineering',
    icon: '⚙',
    skills: ['Data Structures', 'OOP', 'Problem Solving', 'Agile / Teamwork'],
  },
];

export default function Skills() {
  return (
    <section id="technical-skills" style={{ background: '#000', padding: '7rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Full-bleed cinematic space video background with seamless fade */}
      <FadingVideo
        src={SKILLS_VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          zIndex: 0,
          opacity: 0.85,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      />

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Kicker */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)',
                   marginBottom: '1.5rem', fontFamily: 'Barlow, sans-serif' }}>
          // Technical Expertise
        </motion.p>

        {/* Headline - BlurText has built-in viewport triggered word animation */}
        <BlurText
          text="What I work with"
          className="font-heading italic text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] mb-16"
        />

        {/* Minimalist Liquid-Glass Cards Grid with Staggered Viewport Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, i) => {
            return (
              <motion.div
                key={cat.title}
                initial={{ filter: 'blur(12px)', opacity: 0, y: 40 }}
                whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.15 }}
                className="liquid-glass rounded-[1.25rem] p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                style={{ borderRadius: '1.5rem', padding: '1.75rem', minHeight: '260px' }}
              >
                <div>
                  {/* Card Header with nested liquid-glass icon square */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 rounded-[0.75rem] liquid-glass flex items-center justify-center text-white text-xl flex-shrink-0 border border-white/10 shadow-inner">
                      {cat.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '1.65rem', letterSpacing: '-0.5px', margin: 0 }}>
                      {cat.title}
                    </h3>
                  </div>

                  {/* Minimalist White / Liquid-Glass Skill Pills */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cat.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full liquid-glass text-white/90 text-xs font-medium tracking-wide hover:bg-white/10 transition-colors duration-200 cursor-default"
                        style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
