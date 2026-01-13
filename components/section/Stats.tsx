'use client';

import { useEffect, useState } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

interface StatsProps {
  stats?: StatItem[];
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible, target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  );
}

export function Stats({ stats }: StatsProps) {
  const defaultStats: StatItem[] = [
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Happy Clients', value: 8, suffix: '+' },
    { label: 'Technologies', value: 20, suffix: '+' },
    { label: 'Years Experience', value: 3, suffix: '+' },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section id="stats-section" className="py-20 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat, idx) => (
            <div
              key={idx}
              className="group backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-4">{stat.label}</p>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
