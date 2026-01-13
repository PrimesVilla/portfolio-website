'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !categoriesRef.current) return;

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );

    // Categories stagger animation
    const categories = categoriesRef.current.querySelectorAll('[data-category]');
    gsap.fromTo(
      categories,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: 'top 70%',
        },
      }
    );

    // Skill bars animation
    const bars = categoriesRef.current.querySelectorAll('[data-bar]');
    bars.forEach((bar) => {
      const fill = bar.querySelector('[data-fill]') as HTMLElement;
      if (fill) {
        const width = fill.style.width;
        fill.style.width = '0';

        gsap.to(fill, {
          width,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
          },
        });
      }
    });

    // Soft skills animation
    if (softSkillsRef.current) {
      const softSkills = softSkillsRef.current.querySelectorAll('[data-skill]');
      gsap.fromTo(
        softSkills,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: softSkillsRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, []);

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
    <section ref={sectionRef} id="skills" className="py-32 px-4 bg-gradient-to-b from-black to-blue-950/20">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div ref={categoriesRef} className="grid md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              data-category
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
                  <div key={skillIdx} data-bar>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                      <div
                        data-fill
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
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
          <h3 className="text-2xl font-bold text-white text-center mb-6">Soft Skills</h3>
          <div ref={softSkillsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Leadership', 'Time Management', 'Creativity', 'Detail-Oriented'].map((skill, idx) => (
              <div
                key={idx}
                data-skill
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
