'use client';

import Image from 'next/image';
import { Mail, Phone, ExternalLink, Menu, X, Code2, Download, Github, Linkedin} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function HeroSection({ onNavigate, mobileMenuOpen, setMobileMenuOpen }: HeroSectionProps) {
  return (
    <>
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-white">Primes Villa</span>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => onNavigate('home')} className="text-slate-300 hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => onNavigate('about')} className="text-slate-300 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => onNavigate('projects')} className="text-slate-300 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => onNavigate('certificates')} className="text-slate-300 hover:text-blue-400 transition-colors">Certificates</button>
              <button onClick={() => onNavigate('contact')} className="text-slate-300 hover:text-blue-400 transition-colors">Contact</button>
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
          <div className="md:hidden bg-slate-950 border-t border-blue-500/20">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="block text-slate-300 hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className="block text-slate-300 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => { onNavigate('projects'); setMobileMenuOpen(false); }} className="block text-slate-300 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => { onNavigate('certificates'); setMobileMenuOpen(false); }} className="block text-slate-300 hover:text-blue-400 transition-colors">Certificates</button>
              <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="block text-slate-300 hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-12">
            <div className="space-y-6">
              <p className="text-blue-400 text-sm uppercase tracking-wider">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Primes Bryan Villa
              </h1>
              <p className="text-3xl md:text-4xl text-slate-200 font-light">
                I love to build things for the web
              </p>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                BS Computer Science graduate at Mapúa Malayan Colleges Mindanao with a keen interest in <span className="text-cyan-400 font-medium">full-stack web development</span>. I'm willing to start immediately and eager to undergo training to gain more knowledge and experience in the field.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="docs/Villa_PrimesBryanBilal_CV.pdf"
                  download="Villa_PrimesBryanBilal_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Download size={18} />
                  Download Resume
                  
                </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500 hover:text-white"
                  onClick={() => window.open('https://github.com/PrimesVilla', '_blank')}
                >
                  <Github className="mr-2" size={16} />
                  View GitHub
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-center">
              <div className="relative">
                <div className="w-115 h-115 rounded-full bg-linear-to-br from-blue-500/20 to-blue-600/20 blur-3xl absolute -inset-10"></div>
                <div className="w-90 h-90 rounded-full bg-slate-800 border-4 border-blue-400/80 relative overflow-hidden">
                  <div className="absolute inset-0 p bg-linear-to-br from-cyan-500/10 to-transparent">
                    <Image
                      src="images/Villa_Profile.jpeg"
                      alt="Villa Profile Picture"
                      width={400}
                      height={400}
                      loading="lazy"
                      className="object-cover object-top w-full h-full scale-110 ml-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
