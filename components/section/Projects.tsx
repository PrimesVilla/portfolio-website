'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !projectsContainerRef.current) return;

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

    // Projects stagger animation
    const projects = projectsContainerRef.current.querySelectorAll('[data-project]');
    gsap.fromTo(
      projects,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: 'top 70%',
        },
      }
    );

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const projects: Project[] = [
    {
      title: 'MasSafe Startup Website',
      description: 'A modern startup landing page showcasing an HCI project with focus on responsive design and user-friendly UI/UX.',
      image: 'images/massafe-landing.png',
      tags: ['HTML', 'CSS', 'UI/UX Design', 'Figma'],
      link: 'https://primesvilla.github.io/MasSafe-Website/',
      github: '#',
    },
    {
      title: 'Jeshcee Pay Web App',
      description: 'Full-stack web application for pharmacy management with NoSQL database integration and real-time updates.',
      image: 'images/jeshceepay.png',
      tags: ['React.js', 'Firebase', 'NoSQL', 'Full-Stack'],
      link: 'https://jeshceepay.web.app/',
      github: '#',
    },
    {
      title: 'Jeep Connect',
      description: 'Interactive mapping application with real-time route planning using Leaflet and Flask backend.',
      image: 'images/jeep-connect.png',
      tags: ['Flask', 'Leaflet', 'Mapping', 'API'],
      link: 'https://jeep-connect.onrender.com/',
      github: '#',
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Handpicked projects showcasing my full-stack development capabilities
          </p>
        </div>

        <div ref={projectsContainerRef} className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-project
              className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.link, '_blank')}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View
                  </Button>
                  {project.github && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 border-blue-400/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-400 rounded-lg transition-all duration-300"
                    >
                      <Github />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div ref={ctaRef} className="text-center mt-16">
          <Button
            onClick={() => window.open('https://github.com/PrimesVilla', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2"
          >
            View All
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
