'use client';

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ModernHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black animate-gradient-slow"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur">
            ✨ Welcome to My Portfolio
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">Primes</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer crafting elegant digital experiences with modern web technologies
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('about')}
            variant="outline"
            className="px-8 py-6 border-blue-400/50 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
