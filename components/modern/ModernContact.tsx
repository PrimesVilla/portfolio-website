'use client';

import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ModernContact() {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'villa.primesbryan@gmail.com',
      href: 'mailto:villa.primesbryan@gmail.com',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'primes-bryan-villa',
      href: 'https://linkedin.com/in/primes-bryan-villa',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'PrimesVilla',
      href: 'https://github.com/PrimesVilla',
    },
  ];

  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-b from-black to-blue-950/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg">
            I'm always interested in hearing about new projects and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                {link.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{link.label}</h3>
              <p className="text-slate-400 text-sm group-hover:text-blue-300 transition-colors">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8">
            <p className="text-slate-300 mb-6">Ready to work together?</p>
            <Button
              onClick={() => window.location.href = 'mailto:villa.primesbryan@gmail.com'}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
