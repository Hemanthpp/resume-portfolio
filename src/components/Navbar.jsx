import React from 'react';
import { ArrowUpRight } from './Icons';

const links = [
  { label: 'Home',       href: '#home'           },
  { label: 'Skills',     href: '#skills'         },
  { label: 'Experience', href: '#experience'     },
  { label: 'Projects',   href: '#projects'       },
  { label: 'Contact',    href: '#contact'        },
];

export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: '1rem', left: 0, right: 0, zIndex: 50,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0 2rem' }}>
      {/* Logo */}
      <div className="liquid-glass"
           style={{ width: 48, height: 48, borderRadius: '9999px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                       color: 'white', fontSize: '1.375rem' }}>h</span>
      </div>

      {/* Desktop links */}
      <div className="liquid-glass hidden md:flex items-center gap-0.5"
           style={{ borderRadius: '9999px', padding: '0.375rem' }}>
        {links.map(l => (
          <a key={l.label} href={l.href}
             style={{ padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: 500,
                      color: 'rgba(255,255,255,0.88)', fontFamily: 'Barlow, sans-serif',
                      borderRadius: '9999px', transition: 'color 0.2s' }}>
            {l.label}
          </a>
        ))}
        {/* GitHub icon */}
        <a href="https://github.com/Hemanthpp" target="_blank" rel="noreferrer"
           style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 34, height: 34, borderRadius: '9999px',
                    color: 'rgba(255,255,255,0.75)', transition: 'color 0.2s',
                    marginLeft: '0.125rem' }}
           onMouseEnter={e => e.currentTarget.style.color = '#fff'}
           onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
        <a href="#contact"
           style={{ display: 'flex', alignItems: 'center', gap: '0.25rem',
                    background: 'white', color: '#000',
                    padding: '0.5rem 1rem', borderRadius: '9999px',
                    fontSize: '0.875rem', fontWeight: 600,
                    fontFamily: 'Barlow, sans-serif', whiteSpace: 'nowrap',
                    marginLeft: '0.25rem' }}>
          Hire Me <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Spacer */}
      <div style={{ width: 48, height: 48, opacity: 0, pointerEvents: 'none' }} />
    </nav>
  );
}
