'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, Code2, Database, GitBranch, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-cyan-400">Primes Villa</span>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('certificates')} className="text-slate-300 hover:text-cyan-400 transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</button>
            </div>

            <button
              className="md:hidden text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block text-slate-300 hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-slate-300 hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="block text-slate-300 hover:text-cyan-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('certificates')} className="block text-slate-300 hover:text-cyan-400 transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="block text-slate-300 hover:text-cyan-400 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-12">
            <div className="space-y-6">
              <p className="text-cyan-400 text-sm uppercase tracking-wider">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Primes Bryan Villa
              </h1>
              <p className="text-3xl md:text-4xl text-slate-300 font-light">
                I love to build things for the web
              </p>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                BS Computer Science graduate at Mapúa Malayan Colleges Mindanao with a keen interest in <span className="text-cyan-400 font-medium">full-stack web development</span>. I'm willing to start immediately and eager to undergo training to gain more knowledge and experience in the field.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-cyan-500   hover:bg-cyan-500/40 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Work with me today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500 hover:text-white"
                  onClick={() => window.open('https://github.com/PrimesVilla', '_blank')}
                >
                  <Github className="mr-2" size={16} />
                  View GitHub
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-center">
              <div className="relative">
                <div className="w-115 h-115 rounded-full bg-linear-to-br from-cyan-500/20 to-blue-600/20 blur-3xl absolute -inset-10"></div>
                <div className="w-90 h-90 rounded-full bg-slate-800 border-4 border-cyan-300/80 relative overflow-hidden">
                  <div className="absolute inset-0 p bg-linear-to-br from-cyan-500/10 to-transparent">
                    <Image
                      src="/images/Villa_Profile.jpeg"
                      alt="Villa Profile Picture"
                      width={400}
                      height={400}
                      className="object-cover object-top w-full h-full scale-110 ml-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 p-12">
            About <span className="text-cyan-400">Primes</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12 px-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code2 className="mr-3 text-cyan-400" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-300 font-medium mb-2">Front-End Development:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React.js', 'Tailwind', 'HTML', 'CSS'].map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-slate-300 font-medium mb-2">Back-End Development:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Express.js', 'Node.js', 'Python', 'Flask'].map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-slate-300 font-medium mb-2">Database:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Firebase Database', 'XAMPP', 'MySQL', 'NoSQL'].map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-slate-300 font-medium mb-2">Version Control:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Github'].map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-orange-500/10 text-orange-400 border-orange-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-slate-300 font-medium mb-2">Other Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Visual Studio Code', 'Figma', 'Canva', 'Miro'].map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
              <div className="space-y-4">
                {[
                  { name: 'Adaptability', value: 100 },
                  { name: 'Problem Solving', value: 85 },
                  { name: 'Team Collaboration', value: 90 },
                  { name: 'Communication', value: 90 },
                  { name: 'Time Management', value: 80 }
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between justify-items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
            <a
              href="https://github.com/PrimesVilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors"
            >
              <Github size={20} />
              github.com/PrimesVilla
            </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
            <a href="https://primesvilla.github.io/MasSafe-Website/" target="_blank" rel="noopener noreferrer">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group cursor-pointer">
              <CardHeader>
                <div className="aspect-video bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                <Image src={'/images/massafe-landing.png'} alt='massage-landing.png' width={1080} height={1080} className='object-cover rounded-lg w-full h-full'/>
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                MasSafe Start Up Website
                <ExternalLink size={20} className="text-cyan-400" />
                </CardTitle>
                <CardDescription className="text-slate-400 flex gap-2 flex-wrap">
                  <Badge variant="secondary"className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                    HTML
                  </Badge>
                  <Badge variant="secondary"className="bg-orange-500/10 text-orange-400 border-orange-500/30">
                    Git
                  </Badge>
                  <Badge variant="secondary"className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                    Miro
                  </Badge>
                  <Badge variant="secondary"className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                    Figma
                  </Badge>
                  <Badge variant="secondary"className="bg-gray-500/10 text-gray-400 border-gray-500/30">
                    Bootstrap
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  MasSafe: A modern startup website built to display a concept app designed for a Human-Computer Interaction (HCI) project, focusing on responsive design, user-friendly UI/UX, and team collaboration via Miro and Figma. 
                </p>
              </CardContent>
            </Card>
            </a>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group">
              <CardHeader>
                <div className="aspect-video bg-linear-to-br from-green-600/20 to-emerald-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <Wrench size={64} className="text-cyan-400 opacity-50" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  Jeshcee Pay Web App
                  <ExternalLink size={20} className="text-cyan-400" />
                </CardTitle>
                <CardDescription className="text-slate-400 flex gap-2 flex-wrap">
                  <Badge variant="secondary"className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                    React.js
                  </Badge>
                  <Badge variant="secondary"className="bg-orange-500/10 text-orange-400 border-orange-500/30">
                    Git
                  </Badge>
                  <Badge variant="secondary"className="bg-green-500/10 text-green-400 border-green-500/30">
                    Firebase Database
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Jeshcee pay: a web application for Jeshcee Pharmacy focused on learning NoSQL database integration and full-stack development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group">
              <CardHeader>
                <div className="aspect-video bg-linear-to-br from-orange-600/20 to-red-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <GitBranch size={64} className="text-cyan-400 opacity-50" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  Jeep Connect
                  <ExternalLink size={20} className="text-cyan-400" />
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Leaflet | LRM | Flask
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Interactive mapping application using Leaflet for map visualization, Leaflet Routing Machine for route planning, and Flask backend.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group">
              <CardHeader>
                <div className="aspect-video bg-linear-to-br from-cyan-600/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <Code2 size={64} className="text-cyan-400 opacity-50" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  IS181 Final Project
                  <ExternalLink size={20} className="text-cyan-400" />
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Focus Group Web Page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Academic project focusing on AI-generated content in educational settings, exploring the ethical implications and challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="certificates" className="min-h-screen py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates</h2>
          <p className="text-slate-400 mb-12">I've earned additional certifications online to enhance my skills.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                image: "UC-69cc95d7-5610-45eb-bd3c-818cbc95755b.pdf.png",
                title: "The Complete 2024 Web Development Bootcamp",
                description: "Master full-stack web development with the latest tools and technologies in this comprehensive bootcamp.",
                issuer: "Udemy"
              },
              {
                image: "CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_pbvilla-mcm-edu-ph_ab408d08-cae5-4bf5-878f-701bbef00c26.pdf.png",
                title: "CCNA: Enterprise Networking, Security, and Automation",
                description: "Master enterprise networking, security, and automation to build and manage modern IT infrastructures.",
                issuer: "Cisco"
              },
              {
                image: "GoogleCourseCertificate_Start the UX Design Process.pdf.png",
                title: "Start the UX Design Process: Empathize, Define, and Ideate",
                description: "Learn the essentials of UX design by exploring user needs, defining problems, and generating creative solutions.",
                issuer: "Google"
              },
              {
                image: "CertificateOfCompletion_Software Developement Processes and Methodologies.pdf.png",
                title: "Software Development: Processes and Methodologies",
                description: "Learn key software development processes and methodologies for efficient project execution.",
                issuer: "University of Minnesota"
              },
              {
                title: "Agile Software Development: Clean Coding Practices",
                description: "Learn how to write clean, readable code that's easy for both computers and humans to understand.",
                issuer: "LinkedIn Learning"
              },
              {
                title: "Agile Software Development: Refactoring",
                description: "Learn the fundamentals of refactoring to a more maintainable code, and seamlessly integrate new features.",
                issuer: "LinkedIn Learning"
              },
              {
                title: "Understanding the Impact of Merger for IT Teams",
                description: "Learn how IT teams can navigate the challenges of a post-acquisition merger.",
                issuer: "LinkedIn Learning"
              }
            ].map((cert, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex items-start gap-4 mx-4">
                  <div className="w-50 h-38 rounded-md overflow-hidden shrink-0 bg-slate-700/20">
                    <Image
                      src={cert.image ? `/images/${cert.image}` : '/images/cert-placeholder.png'}
                      alt={cert.title || 'Certificate'}
                      width={600}
                      height={340}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-2 w-auto h-auto">
                    <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                    <CardDescription className="text-cyan-400">{cert.issuer}</CardDescription>
                    <CardContent className="text-slate-300 text-sm px-0">{cert.description}</CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thank You for Visiting My Portfolio
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Feel free to message or connect on <span className="text-cyan-400">LinkedIn</span>, and let's discuss how I can contribute to your team.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:villa.primesbryan@gmail.com"
              className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
              <span className="text-slate-300 group-hover:text-white transition-colors">villa.primesbryan@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/primes-bryan-villa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <Linkedin className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
              <span className="text-slate-300 group-hover:text-white transition-colors">in/primes-bryan-villa</span>
            </a>

            <a
              href="https://github.com/PrimesVilla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <Github className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
              <span className="text-slate-300 group-hover:text-white transition-colors">github.com/PrimesVilla</span>
            </a>

            <a
              href="tel:+971529690811"
              className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
              <span className="text-slate-300 group-hover:text-white transition-colors">+971 52 969 0811</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2025 Primes Bryan Villa. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
