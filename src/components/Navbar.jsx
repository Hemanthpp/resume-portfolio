import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from './Icons';

const links = [
  { label: 'Home',       href: '#home'           },
  { label: 'Skills',     href: '#skills'         },
  { label: 'Experience', href: '#experience'     },
  { label: 'Projects',   href: '#projects'       },
  { label: 'Contact',    href: '#contact'        },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav style={{ position: 'fixed', top: '1.5rem', left: 0, right: 0, zIndex: 50,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '0 2rem' }}>
        {/* Logo — profile photo (floating left) */}
        <a href="#home"
           style={{ position: 'absolute', left: '2rem', top: '-0.5rem',
                    width: 96, height: 96, borderRadius: '9999px', display: 'block',
                    overflow: 'hidden', border: '3px solid rgba(255,255,255,0.25)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    opacity: scrolled ? 0 : 1,
                    pointerEvents: scrolled ? 'none' : 'auto',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    transform: scrolled ? 'scale(0.9)' : 'scale(1)' }}
           className="navbar-avatar">
          <img src="/avatar.jpg?v=10" alt="Hemanth P P"
               style={{
                 width: '100%', height: '100%',
                 objectFit: 'cover', objectPosition: 'center center',
                 display: 'block',
                 imageRendering: '-webkit-optimize-contrast'
               }} />
        </a>

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

        {/* Mobile hamburger button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{
            position: 'absolute', right: '1.25rem', top: '0.25rem',
            width: 44, height: 44, borderRadius: '9999px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: '#fff', zIndex: 51,
          }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>

        {/* Spacer */}
        <div style={{ width: 48, height: 48, opacity: 0, pointerEvents: 'none' }} />
      </nav>

      {/* ── Mobile Full-Screen Menu ── */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 998,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      />
      {/* Drawer */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 999,
          width: '80vw', maxWidth: '320px',
          background: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex', flexDirection: 'column',
          padding: '1.5rem',
        }}>
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          style={{
            alignSelf: 'flex-end',
            width: 44, height: 44, borderRadius: '9999px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', marginBottom: '2rem',
          }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Nav links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
               onClick={() => setMobileOpen(false)}
               style={{
                 padding: '1rem 1.25rem', fontSize: '1.125rem', fontWeight: 500,
                 color: 'rgba(255,255,255,0.88)', fontFamily: 'Barlow, sans-serif',
                 borderRadius: '0.875rem', transition: 'background 0.2s',
                 display: 'block',
               }}
               onTouchStart={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
               onTouchEnd={e => e.currentTarget.style.background = 'transparent'}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem',
                      borderTop: '1px solid rgba(255,255,255,0.08)',
                      paddingTop: '1.5rem' }}>
          <a href="https://github.com/Hemanthpp" target="_blank" rel="noreferrer"
             style={{
               display: 'flex', alignItems: 'center', gap: '0.75rem',
               padding: '0.875rem 1.25rem', borderRadius: '0.875rem',
               fontSize: '0.9375rem', fontFamily: 'Barlow, sans-serif',
               color: 'rgba(255,255,255,0.75)',
               background: 'rgba(255,255,255,0.04)',
               border: '1px solid rgba(255,255,255,0.08)',
             }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                 fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
          <a href="#contact"
             onClick={() => setMobileOpen(false)}
             style={{
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               gap: '0.5rem',
               background: 'white', color: '#000',
               padding: '0.875rem 1.25rem', borderRadius: '0.875rem',
               fontSize: '0.9375rem', fontWeight: 600,
               fontFamily: 'Barlow, sans-serif',
             }}>
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
