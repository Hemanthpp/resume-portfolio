import { useEffect, useRef, useState } from 'react';

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Cochin University of Engineering and Technology Kuttanad (CUSAT)',
    period: '2020 – 2024',
    badge: 'Graduated 2024',
    color: 'indigo',
    icon: '🎓',
    detail: 'Full-stack development, AI/ML fundamentals, cloud computing, data structures, algorithms and systems programming.',
  },
  {
    degree: 'HSE — Class XII',
    institution: 'GHSS Malur',
    period: '2020 – 2022',
    badge: 'Science Stream',
    color: 'emerald',
    icon: '📖',
    detail: 'Physics, Chemistry, Mathematics & Computer Science.',
  },
];

const languages = [
  { lang: 'English', level: 'Professional', dots: 4 },
  { lang: 'Malayalam', level: 'Native',       dots: 5 },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subtitle">Academic background</p>
          <h2 className="section-title">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`glass rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{edu.icon}</span>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base leading-snug">{edu.degree}</h3>
                  <p className="text-indigo-400 text-sm font-semibold mt-1">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs font-mono">{edu.period}</span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                  {edu.badge}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">{edu.detail}</p>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className={`glass rounded-2xl p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <span>🗣</span> Languages
          </h3>
          <div className="flex flex-wrap gap-8">
            {languages.map(l => (
              <div key={l.lang} className="flex flex-col gap-2">
                <p className="text-white font-semibold text-sm">{l.lang}</p>
                <p className="text-slate-500 text-xs font-mono">{l.level}</p>
                <div className="flex gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-2 rounded-full transition-all duration-300 ${i < l.dots ? 'bg-indigo-400' : 'bg-white/10'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
