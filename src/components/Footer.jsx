const links = [
  { href: '#home',           label: 'Home'           },
  { href: '#skills',         label: 'Skills'         },
  { href: '#experience',     label: 'Experience'     },
  { href: '#projects',       label: 'Projects'       },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact',        label: 'Contact'        },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)',
                     padding: '2.5rem 1.5rem', background: '#000' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '1.5rem' }}>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span style={{ width: 32, height: 32, borderRadius: '0.5rem',
                         background: 'linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05))',
                         border: '1px solid rgba(255,255,255,0.12)',
                         display: 'flex', alignItems: 'center', justifyContent: 'center',
                         fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                         color: '#fff', fontSize: '1.125rem' }}>H</span>
          <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600,
                         fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.01em' }}>
            Hemanth P P
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem',
                         fontFamily: 'Barlow, sans-serif' }}>· AI/ML & Full-Stack</span>
        </div>

        {/* Nav links */}
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                     gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                 style={{ padding: '0.4rem 0.875rem', fontSize: '0.8125rem',
                          color: 'rgba(255,255,255,0.45)', fontFamily: 'Barlow, sans-serif',
                          borderRadius: '9999px', transition: 'color 0.2s, background 0.2s',
                          display: 'block' }}
                 onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                 onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem',
                    fontFamily: 'Barlow, sans-serif', margin: 0 }}>
          © {year} Hemanth P P. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
