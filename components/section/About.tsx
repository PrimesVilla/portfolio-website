'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Zap, Lightbulb, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !cardsRef.current || !sectionRef.current) return;

    // Smooth background transition from hero
    gsap.fromTo(
      sectionRef.current,
      { backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 138, 0.3), rgb(0, 0, 0))' },
      {
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0))',
        duration: 1.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
      }
    );

    // Title animation - delayed to avoid overlap
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
        },
      }
    );

    // Cards stagger animation - starts after title
    const cards = cardsRef.current.querySelectorAll('[data-card]');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

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
    <section ref={sectionRef} id="about" className="py-32 px-4 bg-black relative z-10">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm a passionate full-stack developer with expertise in building modern web applications using cutting-edge technologies.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              data-card
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
