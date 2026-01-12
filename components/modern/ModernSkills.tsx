'use client';

import { Code2, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

export function ModernSkills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      title: 'Backend',
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: 'Node.js/Express', level: 85 },
        { name: 'Python/Flask', level: 80 },
        { name: 'Databases', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
    },
  ];

  return (
    <section id="about" className="py-32 px-4 bg-gradient-to-b from-black to-blue-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Leadership', 'Time Management', 'Creativity', 'Detail-Oriented'].map((skill, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <p className="text-slate-300 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
