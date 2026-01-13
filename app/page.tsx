'use client';

import { Hero } from '@/components/section/Hero';
import { About } from '@/components/section/About';
import { Stats } from '@/components/section/Stats';
import { Skills } from '@/components/section/Skills';
import { Projects } from '@/components/section/Projects';
import { Timeline } from '@/components/section/Timeline';
import { Contact } from '@/components/section/Contact';
import { Footer } from '@/components/section/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
