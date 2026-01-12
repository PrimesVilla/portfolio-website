'use client';

import Image from 'next/image';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  const projects = [
    {
      href: "https://primesvilla.github.io/MasSafe-Website/",
      title: "MasSafe Start Up Website",
      image: 'images/massafe-landing.png',
      description: "MasSafe: A modern startup website built to display a concept app designed for a Human-Computer Interaction (HCI) project, focusing on responsive design, user-friendly UI/UX, and team collaboration via Miro and Figma.",
      badges: ['HTML', 'Git', 'Miro', 'Figma', 'Bootstrap'],
      gradientFrom: "from-blue-600/20",
      gradientTo: "to-purple-600/20"
    },
    {
      href: "https://jeshceepay.web.app/",
      title: "Jeshcee Pay Web App",
      image: 'images/jeshceepay.png',
      description: "Jeshcee pay: a web application for Jeshcee Pharmacy focused on learning NoSQL database integration and full-stack development.",
      badges: ['React.js', 'Git', 'Firebase Database'],
      gradientFrom: "from-green-600/20",
      gradientTo: "to-emerald-600/20"
    },
    {
      href: "https://jeep-connect.onrender.com/",
      title: "Jeep Connect",
      image: 'images/jeep-connect.png',
      description: "Interactive mapping application using Leaflet for map visualization, Leaflet Routing Machine for route planning, and Flask backend.",
      badges: ['HTML', 'CSS', 'Flask', 'Leaflet Routing Machine'],
      gradientFrom: "from-orange-600/20",
      gradientTo: "to-red-600/20"
    },
    {
      href: "docs/V2_CS-009_ThesisPaper_Revised_FromV2-3.pdf",
      title: "YOLOv8-DeepSORT Thesis Project",
      image: null,
      description: "Improving Real-Time IoT-Based Waste Segregation leveraging YOLOv8 and DeepSORT for Davao Material Recovery Facilities.",
      badges: ['Python', 'Deep Learning', 'Object Detection', 'IoT'],
      gradientFrom: "from-cyan-600/20",
      gradientTo: "to-blue-600/20"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between justify-items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
          <a
            href="https://github.com/PrimesVilla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
          >
            <Github size={20} />
            github.com/PrimesVilla
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="contents"
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group cursor-pointer">
                <CardHeader>
                  <div className={`aspect-video bg-linear-to-br ${project.gradientFrom} ${project.gradientTo} rounded-lg mb-4 flex items-center justify-center`}>
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={1080} 
                        height={1080} 
                        loading="lazy"
                        className='object-cover rounded-lg w-full h-full'
                      />
                    ) : (
                      <Code2 size={64} className="text-blue-400 opacity-50" />
                    )}
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    {project.title}
                    <ExternalLink size={20} className="text-blue-400" />
                  </CardTitle>
                  <CardDescription className="text-slate-400 flex gap-2 flex-wrap">
                    {project.badges.map(badge => (
                      <Badge key={badge} variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                        {badge}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
