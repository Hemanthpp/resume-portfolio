import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';

const CAP_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4';

const cards = [
  {
    title: 'AI & Machine Learning',
    tags:  ['Computer Vision', 'YOLO / OpenCV', 'LLM APIs', 'Prompt Eng'],
    body:  'Building production-ready AI systems — YOLO-based computer vision detection pipelines, ML model training and LLM API integrations applied across real internship deliverables.',
    icon:  'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z',
  },
  {
    title: 'Full-Stack Engineering',
    tags:  ['HTML / CSS', 'JavaScript', 'React / Next.js', 'Django REST', 'PostgreSQL'],
    body:  'End-to-end web application architecture — React / Next.js frontends, Django REST backends and PostgreSQL databases. Demonstrated across marketing dashboards and management systems.',
    icon:  'M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z',
  },
  {
    title: 'Cloud & DevOps',
    tags:  ['AWS / IBM Cloud', 'Docker', 'Kubernetes', 'CI/CD & Deployment'],
    body:  'AWS DevOps and IBM Cloud certified. Applying CI/CD pipelines, Git workflows and cloud infrastructure concepts to deliver reliable, production-grade software deployments.',
    icon:  'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z',
  },
];

export default function Capabilities() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}
             style={{ position: 'relative', minHeight: '100vh', background: '#000', overflow: 'hidden' }}>
      <FadingVideo src={CAP_SRC}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          zIndex: 0,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)'
        }} />

      <div style={{ position: 'relative', zIndex: 10,
                    padding: '6rem 2rem 3rem',
                    display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ marginBottom: 'auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)',
                     marginBottom: '1.5rem', fontFamily: 'Barlow, sans-serif' }}>
            // What I Build
          </motion.p>
          <motion.h2
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                     fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 0.9,
                     letterSpacing: '-3px', margin: 0 }}>
            Technical<br/>Expertise
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.5rem', marginTop: '4rem' }}>
          {cards.map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 + i * 0.15 }}
              className="liquid-glass"
              style={{ borderRadius: '1.5rem', padding: '2rem',
                       display: 'flex', flexDirection: 'column', minHeight: 380,
                       backgroundColor: 'rgba(255,255,255,0.04)',
                       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                       cursor: 'default' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(255,255,255,0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'flex-start',
                            justifyContent: 'space-between', gap: '0.75rem' }}>
                <div className="liquid-glass"
                     style={{ width: 48, height: 48, borderRadius: '0.875rem',
                              display: 'flex', alignItems: 'center',
                              justifyContent: 'center', flexShrink: 0,
                              backgroundColor: 'rgba(255,255,255,0.08)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       width="22" height="22" fill="white"
                       style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))' }}>
                    <path d={card.icon} />
                  </svg>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end',
                              gap: '0.35rem', maxWidth: '68%' }}>
                  {card.tags.map(tag => (
                    <span key={tag} className="liquid-glass"
                          style={{ borderRadius: '9999px', padding: '0.3rem 0.7rem',
                                   fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)',
                                   fontFamily: 'Barlow, sans-serif', fontWeight: 500,
                                   whiteSpace: 'nowrap', letterSpacing: '0.01em',
                                   backgroundColor: 'rgba(255,255,255,0.06)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div style={{ flex: 1 }} />

              {/* Bottom */}
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                             fontSize: '2rem', letterSpacing: '-0.5px', lineHeight: 1.1, margin: 0,
                             textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
                  {card.title}
                </h3>
                <p style={{ marginTop: '0.875rem', fontSize: '0.875rem',
                            color: 'rgba(255,255,255,0.75)', fontFamily: 'Barlow, sans-serif',
                            fontWeight: 300, lineHeight: 1.65 }}>
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
