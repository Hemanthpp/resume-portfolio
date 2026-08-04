import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const projects = [
  {
    name:     'RepoPilot AI',
    subtitle: 'Multi-Agent AI Repository Intelligence Platform',
    desc:     'Multi-agent AI platform that orchestrates specialized autonomous agents to provide deep repository intelligence and workflow automation. Features multi-agent collaboration for natural language codebase navigation, automated code synthesis & documentation generation, and an intelligent developer copilot backed by advanced LLM APIs.',
    tags:     ['Python', 'Multi-Agent Systems', 'LLM API', 'React', 'GitHub API', 'Prompt Engineering', 'REST API'],
    featured: true,
    link:     null,
  },
  {
    name:     'Event Helper Service System',
    subtitle: 'Mobile Application',
    desc:     'Developed a multi-service mobile app for discovering and booking vendors — integrated Firebase Auth and Cloud Firestore for scalable real-time record management and user security.',
    tags:     ['Flutter', 'Firebase Authentication', 'Cloud Firestore', 'Service Booking Workflows'],
    featured: false,
    link:     null,
  },
  {
    name:     'Period Tracker & Kit Delivery System',
    subtitle: 'DBMS & OOP Software Architecture',
    desc:     'Designed a structured database application comprising four relational entities (Users, PeriodDetails, Kits, KitDelivery) to monitor health records, manage physical inventory, and coordinate scheduled deliveries. Implemented OOP modularity (encapsulation, inheritance, polymorphism) and scripted automated email notification triggers.',
    tags:     ['SQL', 'Entity-Relationship Modelling', 'OOP System Design', 'Notification Workflows'],
    featured: false,
    link:     null,
  },
  {
    name:     'Student Management System',
    subtitle: 'Responsive CRUD Web App',
    desc:     'Engineered a fully responsive student record application without external frameworks — real-time CRUD operations, search filtering, and DOM manipulation via LocalStorage.',
    tags:     ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'DOM APIs', 'LocalStorage'],
    featured: false,
    link:     null,
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.75rem' }}>
        {projects.map((proj, i) => (
          <motion.div key={proj.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: (i % 2) * 0.15 }}
            className="liquid-glass hover:border-white/30 transition-all duration-300"
            style={{ borderRadius: '1.25rem', padding: '1.75rem',
                     display: 'flex', flexDirection: 'column', minHeight: 320, justifyContent: 'space-between' }}>
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
