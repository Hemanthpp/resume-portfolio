import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const certs = [
  { icon: '☁', name: 'Fundamentals of DevOps on AWS',             issuer: 'Simplilearn / AWS SkillUp',  date: 'May 2026'      },
  { icon: '🔷', name: 'Cloud Computing Fundamentals',               issuer: 'IBM SkillsBuild',            date: 'Apr 2026'      },
  { icon: '🏆', name: 'Artificial Intelligence: Concepts & Techniques', issuer: 'NPTEL / IISc Bangalore', date: 'Jul – Oct 2025', score: '81%' },
  { icon: '🚀', name: 'Startup School: Prompt to Prototype',        issuer: 'Google for Startups',        date: 'Dec 2024'      },
  { icon: '📋', name: 'Project Management Fundamentals',            issuer: 'IBM SkillsBuild / IPMA',     date: 'Jul 2024'      },
];

export default function Certifications() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref}
             style={{ background: '#000', padding: '7rem 2rem 5rem' }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)',
                 marginBottom: '1.5rem', fontFamily: 'Barlow, sans-serif' }}>
        // Certifications
      </motion.p>
      <motion.h2
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                 fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 0.9,
                 letterSpacing: '-3px', marginBottom: '4rem' }}>
        Verified<br/>credentials
      </motion.h2>

      <div style={{ display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.25rem' }}>
        {certs.map((cert, i) => (
          <motion.div key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
            className="liquid-glass"
            style={{ borderRadius: '1.25rem', padding: '1.25rem',
                     display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.875rem' }}>{cert.icon}</span>
              {cert.score && (
                <span className="liquid-glass"
                      style={{ borderRadius: '9999px', padding: '0.125rem 0.625rem',
                               fontSize: '0.75rem', fontWeight: 700,
                               fontFamily: 'Barlow, sans-serif' }}>
                  {cert.score}
                </span>
              )}
            </div>
            <div>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                          fontSize: '1.0625rem', margin: 0, lineHeight: 1.3 }}>
                {cert.name}
              </p>
              <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.5)',
                          fontSize: '0.75rem', margin: '0.25rem 0 0' }}>
                {cert.issuer}
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '0.75rem' }}>
              <span style={{ fontFamily: 'Barlow, sans-serif',
                             color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
