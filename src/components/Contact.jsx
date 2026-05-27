import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import { ArrowUpRight } from './Icons';

export default function Contact() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref}
             style={{ background: '#000', minHeight: '80vh',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      padding: '7rem 2rem 4rem', textAlign: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)',
                 marginBottom: '1.5rem', fontFamily: 'Barlow, sans-serif' }}>
        // Let's Connect
      </motion.p>

      <BlurText
        text="Let's Build Something Great"
        className="font-heading italic text-white text-5xl md:text-6xl lg:text-7xl max-w-2xl leading-[0.9] tracking-[-3px]"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem',
                 marginTop: '1.5rem', marginBottom: '2.5rem',
                 maxWidth: '28rem', fontFamily: 'Barlow, sans-serif',
                 fontWeight: 300, lineHeight: 1.65 }}>
        Open to full-time roles, internships and freelance projects.
        Response guaranteed within 24 hours.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.875rem',
                 flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="mailto:hemanthpp1234@gmail.com" className="liquid-glass-strong"
           style={{ borderRadius: '9999px', display: 'flex', alignItems: 'center',
                    gap: '0.5rem', padding: '0.75rem 1.75rem',
                    fontSize: '0.875rem', fontWeight: 600,
                    fontFamily: 'Barlow, sans-serif' }}>
          Send Email <ArrowUpRight className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/hemanthpp277930304" target="_blank" rel="noreferrer"
           className="liquid-glass"
           style={{ borderRadius: '9999px', display: 'flex', alignItems: 'center',
                    gap: '0.5rem', padding: '0.75rem 1.75rem',
                    fontSize: '0.875rem', fontFamily: 'Barlow, sans-serif' }}>
          LinkedIn <ArrowUpRight className="h-5 w-5" />
        </a>
        <a href="tel:+918078006591" className="liquid-glass"
           style={{ borderRadius: '9999px', display: 'flex', alignItems: 'center',
                    gap: '0.5rem', padding: '0.75rem 1.5rem',
                    fontSize: '0.875rem', fontFamily: 'Barlow, sans-serif' }}>
          +91 8078006591
        </a>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{ marginTop: '7rem', borderTop: '1px solid rgba(255,255,255,0.06)',
                 paddingTop: '2rem', width: '100%', maxWidth: '68rem',
                 display: 'flex', justifyContent: 'space-between',
                 alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                       color: 'rgba(255,255,255,0.4)', fontSize: '1.375rem' }}>
          Hemanth P P
        </span>
        <span style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.22)',
                       fontSize: '0.75rem' }}>
          © 2026 · AI/ML Developer · Full-Stack Engineer · Kannur, Kerala
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Skills','Experience','Projects','Certifications','Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
               style={{ fontFamily: 'Barlow, sans-serif',
                        color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
              {l}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
