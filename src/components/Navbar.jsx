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
