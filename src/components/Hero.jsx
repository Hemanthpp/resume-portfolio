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
              display: 'flex', alignItems: 'stretch', gap: '1px', marginTop: '2.5rem',
              flexWrap: 'wrap', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1.5rem', overflow: 'hidden',
              backdropFilter: 'blur(24px)',
              background: 'rgba(0,0,0,0.6)',
            }}>

            {[{
              value: '81%',
              label: 'NPTEL AI Score',
              sublabel: 'IISc Bangalore',
            }, {
              value: '3×',
              label: 'Internships',
              sublabel: 'Production Experience',
            }, {
              value: '2×',
              label: 'Cloud Certified',
              sublabel: 'AWS & IBM',
            }].map((card, i, arr) => (
              <div key={i}
                style={{
                  flex: '1 1 160px', padding: '1.5rem 1.75rem',
                  display: 'flex', flexDirection: 'column', gap: '0.35rem',
                  borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  transition: 'background 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                <div style={{
                  fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                  fontSize: '2.5rem', letterSpacing: '-2px', lineHeight: 1, color: '#fff',
                }}>{card.value}</div>
                <div style={{
                  fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'Barlow, sans-serif', fontWeight: 500, marginTop: '0.25rem',
                }}>{card.label}</div>
                <div style={{
                  fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)',
                  fontFamily: 'Barlow, sans-serif', fontWeight: 300,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>{card.sublabel}</div>
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
