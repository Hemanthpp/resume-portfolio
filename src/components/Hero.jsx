import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import { ArrowUpRight, PlayIcon } from './Icons';
import FadingVideo from './FadingVideo';

const HERO_SRC = 'https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8';
const techStack = ['Python', 'React', 'AWS', 'Next.js', 'Django'];

const fu = (delay) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function Hero() {
  return (
    <section id="home"
      style={{
        position: 'relative', width: '100%', minHeight: '100vh',
        background: '#000', overflow: 'hidden',
        display: 'flex', flexDirection: 'column'
      }}>

      {/* Video background with CSS mask for perfectly seamless fade to black */}
      <FadingVideo
        src={HERO_SRC}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
        style={{
          width: '100%',
          height: '100%',
          zIndex: 0,
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
        }}
      />

      {/* z-10 layer */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column', height: '100%'
      }}>

        {/* ── Main content (centred) ── */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          paddingTop: '6rem', paddingLeft: '1rem', paddingRight: '1rem'
        }}>

          {/* Badge */}
          <motion.div {...fu(0.4)} className="liquid-glass"
            style={{
              borderRadius: '9999px', display: 'flex', alignItems: 'center',
              gap: '0.5rem', padding: '0.375rem', marginBottom: '1.5rem'
            }}>
            <span style={{
              background: 'white', color: '#000',
              padding: '0.25rem 0.75rem', borderRadius: '9999px',
              fontSize: '0.75rem', fontWeight: 700,
              fontFamily: 'Barlow, sans-serif'
            }}>Open to Work</span>
            <span style={{
              fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)',
              paddingRight: '0.75rem', fontFamily: 'Barlow, sans-serif'
            }}>
              AI/ML Developer &amp; Full-Stack Engineer — Kannur, Kerala
            </span>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Building Intelligent Systems & Modern Web Experiences"
            className="font-heading italic text-white text-6xl md:text-7xl lg:text-[5.5rem] max-w-3xl text-center leading-[0.88] tracking-[-4px]"
          />

          {/* Sub-headline */}
          <motion.p {...fu(0.8)}
            style={{
              marginTop: '1rem', fontSize: '0.9375rem', color: 'white',
              maxWidth: '42rem', textAlign: 'center', lineHeight: 1.45,
              fontFamily: 'Barlow, sans-serif', fontWeight: 300
            }}>
            Passionate about building production-ready AI/ML systems and full-stack web apps.
            From YOLO-based computer vision to LLM API integrations — 3× internship experience,
            AWS + IBM Cloud certified, NPTEL AI score <strong style={{ fontWeight: 600, color: '#fff' }}>81 %</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fu(1.1)}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="#projects"
              style={{
                borderRadius: '9999px', display: 'flex', alignItems: 'center',
                gap: '0.5rem', padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem', fontWeight: 600,
                backgroundColor: 'white', color: 'black',
                fontFamily: 'Barlow, sans-serif'
              }}>
              View My Projects <ArrowUpRight className="h-5 w-5" />
            </a>
            <a href="#experience"
              style={{
                borderRadius: '9999px', display: 'flex', alignItems: 'center',
                gap: '0.5rem', padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem', fontWeight: 500,
                backgroundColor: 'rgba(0,0,0,0.6)', color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'Barlow, sans-serif'
              }}>
              My Experience <PlayIcon className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stats cards */}
          <motion.div {...fu(1.3)}
            style={{
              display: 'flex', alignItems: 'stretch', gap: '1rem', marginTop: '2.5rem',
              flexWrap: 'wrap', justifyContent: 'center'
            }}>

            {[{
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                  fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              ),
              value: '81%',
              label: 'NPTEL AI Score',
              sublabel: 'IISc Bangalore',
            }, {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                  fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                </svg>
              ),
              value: '3×',
              label: 'Internships',
              sublabel: 'Production Experience',
            }, {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                  fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              ),
              value: '2×',
              label: 'Cloud Certified',
              sublabel: 'AWS & IBM',
            }].map((card, i) => (
              <div key={i}
                className="liquid-glass"
                style={{
                  width: 200, borderRadius: '1.5rem', padding: '1.5rem 1.25rem',
                  display: 'flex', flexDirection: 'column', gap: '1.25rem',
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(20px)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,255,255,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))' }}>{card.icon}</div>
                <div>
                  <div style={{
                    fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                    fontSize: '2.75rem', letterSpacing: '-2px', lineHeight: 1,
                    color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.5)'
                  }}>{card.value}</div>
                  <div style={{
                    fontSize: '0.875rem', color: 'rgba(255,255,255,0.95)',
                    fontFamily: 'Barlow, sans-serif', fontWeight: 600, marginTop: '0.35rem',
                    textShadow: '0 1px 8px rgba(0,0,0,0.6)'
                  }}>{card.label}</div>
                  <div style={{
                    fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)',
                    fontFamily: 'Barlow, sans-serif', fontWeight: 300, marginTop: '0.15rem',
                    textShadow: '0 1px 6px rgba(0,0,0,0.5)'
                  }}>{card.sublabel}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Tech stack / Partners ── */}
        <motion.div {...fu(1.4)}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '1rem', paddingBottom: '2rem'
          }}>
          <div className="liquid-glass"
            style={{
              borderRadius: '9999px', padding: '0.25rem 0.875rem',
              fontSize: '0.75rem', fontWeight: 500,
              fontFamily: 'Barlow, sans-serif'
            }}>
            Technologies I work with daily
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {techStack.map(t => (
              <span key={t} style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                fontSize: '1.875rem', letterSpacing: '-0.025em'
              }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
