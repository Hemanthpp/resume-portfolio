import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const exps = [
  {
    role:    'AI/ML Development Team Intern',
    company: 'Techgentsia Software Technologies Pvt. Ltd',
    period:  'Jun 9 – Jun 27, 2025 · Cherthala Infopark, Kerala',
    bullets: [
      'Delivered a YOLO-based computer vision detection pipeline using Python and OpenCV with zero missed deadlines.',
      'Contributed to real-world ML model development tasks, applying Python-based workflows across team sprints.',
      'Maintained consistent ownership and professional sincerity throughout the 3-week engagement.',
    ],
  },
  {
    role:    'AI-ML Intern',
    company: 'CSRBOX & IBM SkillsBuild Internship Program',
    period:  'Jun 11 – Jul 6, 2024 · Remote',
    bullets: [
      'Completed intensive 4-week AI-ML internship and received IBM-recognized certificate of completion.',
      'Designed, trained, and presented a working AI prototype on a tight deadline.',
      'Operated effectively in a remote team environment to deliver high-quality project outputs.',
    ],
  },
  {
    role:    'Web Development Intern',
    company: 'Keltron Technologies',
    period:  'May – Jul 2023 · Kannur, Kerala',
    bullets: [
      'Resolved front-end bugs across live pages using HTML, CSS and JavaScript, improving UI consistency.',
      'Fixed cross-browser compatibility issues for responsive, pixel-accurate rendering across all viewports.',
    ],
  },
];

export default function Experience() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref}
             style={{ background: '#000', minHeight: '100vh',
                      padding: '7rem 2rem 5rem',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)',
                 marginBottom: '1.5rem', fontFamily: 'Barlow, sans-serif' }}>
        // Experience
      </motion.p>
      <BlurText
        text="Where I've worked"
        className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
      />

      <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column',
                    gap: '1.25rem', maxWidth: '64rem' }}>
        {exps.map((exp, i) => (
          <motion.div key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
            className="liquid-glass"
            style={{ borderRadius: '1.25rem', padding: '1.75rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
                          alignItems: 'flex-start', gap: '1rem',
                          flexWrap: 'wrap', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                             fontSize: '1.5rem', margin: 0, letterSpacing: '-0.5px' }}>
                  {exp.role}
                </h3>
                <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.55)',
                            fontSize: '0.875rem', margin: '0.25rem 0 0' }}>
                  {exp.company}
                </p>
              </div>
              <span className="liquid-glass"
                    style={{ borderRadius: '9999px', padding: '0.25rem 0.875rem',
                             fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)',
                             fontFamily: 'Barlow, sans-serif', whiteSpace: 'nowrap' }}>
                {exp.period}
              </span>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem' }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ fontFamily: 'Barlow, sans-serif',
                                     color: 'rgba(255,255,255,0.7)',
                                     fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 300,
                                     listStyleType: 'disc' }}>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
