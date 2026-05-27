import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const projects = [
  {
    name:     'Agency OS',
    subtitle: 'Marketing Campaign Management Dashboard',
    desc:     'Full-stack marketing dashboard — React / Next.js frontend, Django REST Framework backend, PostgreSQL database. Integrated LLM API for automated content workflow generation with production-level rate-limiting and CORS security. Full unit test coverage.',
    tags:     ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Django REST', 'PostgreSQL', 'LLM API', 'Three.js', 'Framer Motion'],
    featured: true,
  },
  {
    name:     'Student Management System',
    subtitle: 'CRUD Web Application in C++',
    desc:     'Fully functional Student Management System implementing Create, Read, Update, Delete operations in C++ using Object-Oriented Programming principles and persistent File I/O — modular architecture for real-world academic record management.',
    tags:     ['C++', 'OOP', 'Data Structures', 'File I/O', 'CRUD Architecture'],
    featured: false,
  },
];

export default function Projects() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref}
             style={{ background: '#000', minHeight: '100vh',
                      padding: '7rem 2rem 5rem',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)',
                 marginBottom: '1.5rem', fontFamily: 'Barlow, sans-serif' }}>
        // Projects
      </motion.p>
      <BlurText
        text="What I've built"
        className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
      />

      <div style={{ marginTop: '4rem', display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem' }}>
        {projects.map((proj, i) => (
          <motion.div key={proj.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 + i * 0.15 }}
            className="liquid-glass"
            style={{ borderRadius: '1.25rem', padding: '1.5rem',
                     display: 'flex', flexDirection: 'column', minHeight: 320 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
                          alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                           fontSize: '2rem', margin: 0, letterSpacing: '-0.5px' }}>
                {proj.name}
              </h3>
              {proj.featured && (
                <span className="liquid-glass"
                      style={{ borderRadius: '9999px', padding: '0.25rem 0.75rem',
                               fontSize: '0.7rem', fontFamily: 'Barlow, sans-serif',
                               color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' }}>
                  ⭐ Featured
                </span>
              )}
            </div>
            <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.8125rem', margin: '0 0 1rem' }}>
              {proj.subtitle}
            </p>
            <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.78)',
                        fontSize: '0.875rem', lineHeight: 1.65, fontWeight: 300, flex: 1 }}>
              {proj.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
              {proj.tags.map(tag => (
                <span key={tag} className="liquid-glass"
                      style={{ borderRadius: '9999px', padding: '0.2rem 0.6rem',
                               fontSize: '11px', color: 'rgba(255,255,255,0.75)',
                               fontFamily: 'Barlow, sans-serif' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
