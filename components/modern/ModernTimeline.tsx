'use client';

import { Award, BookOpen, Code, Zap } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ModernTimeline() {
  const timeline: TimelineItem[] = [
    {
      year: '2023',
      title: 'Started Full-Stack Journey',
      description: 'Completed The Complete 2024 Web Development Bootcamp and began building production applications.',
      icon: <Code className="w-6 h-6" />,
    },
    {
      year: '2024',
      title: 'Building & Learning',
      description: 'Developed multiple full-stack projects and earned multiple professional certifications.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      year: '2024-2025',
      title: 'Professional Growth',
      description: 'Mastered enterprise networking, cloud technologies, and advanced software development practices.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      year: 'Present',
      title: 'Ready for Challenges',
      description: 'Excited to bring expertise to innovative projects and contribute to dynamic teams.',
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section id="timeline" className="py-32 px-4 bg-gradient-to-b from-blue-950/20 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Key milestones and achievements along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 md:top-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                </div>

                {/* Content - alternate sides on desktop */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-blue-400 font-semibold text-sm">{item.year}</p>
                        <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
