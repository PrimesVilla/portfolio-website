'use client';

import { ModernHero } from '@/components/modern/ModernHero';
import { ModernAbout } from '@/components/modern/ModernAbout';
import { ModernStats } from '@/components/modern/ModernStats';
import { ModernSkills } from '@/components/modern/ModernSkills';
import { ModernProjects } from '@/components/modern/ModernProjects';
import { ModernTimeline } from '@/components/modern/ModernTimeline';
import { ModernContact } from '@/components/modern/ModernContact';
import { ModernFooter } from '@/components/modern/ModernFooter';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ModernHero />
      <ModernAbout />
      <ModernStats />
      <ModernSkills />
      <ModernProjects />
      <ModernTimeline />
      <ModernContact />
      <ModernFooter />
    </div>
  );
}
