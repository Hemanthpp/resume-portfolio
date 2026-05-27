import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    title: 'Languages',
    icon: '{ }',
    color: 'indigo',
    skills: ['Python', 'C++', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    color: 'purple',
    skills: ['Machine Learning', 'Computer Vision', 'YOLO / OpenCV', 'LLM API Integration', 'Prompt Engineering'],
  },
  {
    title: 'Web & Frameworks',
    icon: '🌐',
    color: 'cyan',
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'Django REST', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    color: 'emerald',
    skills: ['AWS (DevOps)', 'IBM Cloud', 'Git / GitHub', 'CI/CD Concepts'],
  },
  {
    title: 'Core CS',
    icon: '⚙',
    color: 'orange',
    skills: ['Data Structures', 'OOP', 'Problem Solving', 'Agile / Teamwork'],
  },
];

const colorMap = {
  indigo:  { pill: 'bg-indigo-500/10  border-indigo-500/30  text-indigo-300  hover:bg-indigo-500/25',  icon: 'text-indigo-400',  header: 'from-indigo-600 to-indigo-800'  },
  purple:  { pill: 'bg-purple-500/10  border-purple-500/30  text-purple-300  hover:bg-purple-500/25',  icon: 'text-purple-400',  header: 'from-purple-600 to-purple-800'  },
  cyan:    { pill: 'bg-cyan-500/10    border-cyan-500/30    text-cyan-300    hover:bg-cyan-500/25',    icon: 'text-cyan-400',    header: 'from-cyan-600 to-cyan-800'    },
  emerald: { pill: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25', icon: 'text-emerald-400', header: 'from-emerald-600 to-emerald-800' },
  orange:  { pill: 'bg-orange-500/10  border-orange-500/30  text-orange-300  hover:bg-orange-500/25',  icon: 'text-orange-400',  header: 'from-orange-600 to-orange-800'  },
};

function useInView(threshold = 0.2) {
  const ref   = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.title}
                className={`glass rounded-2xl p-6 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.header} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all duration-200 cursor-default ${c.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
