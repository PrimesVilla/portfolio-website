'use client';

import { Code, Zap, Lightbulb, Users } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ModernAbout() {
  const stats: StatItem[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and production-ready code',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Always learning new technologies and best practices',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working effectively in teams to achieve goals',
    },
  ];

  return (
    <section id="about" className="py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm a passionate full-stack developer with expertise in building modern web applications using cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10 group"
            >
              <div className="p-4 rounded-lg bg-blue-500/20 text-blue-400 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
