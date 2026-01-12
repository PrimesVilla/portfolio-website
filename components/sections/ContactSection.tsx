'use client';

import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Thank You for Visiting My Portfolio
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          Feel free to message or connect on <span className="text-blue-400">LinkedIn</span>, and let's discuss how I can contribute to your team.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="mailto:villa.primesbryan@gmail.com"
            className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
          >
            <Mail className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-slate-300 group-hover:text-white transition-colors">villa.primesbryan@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/primes-bryan-villa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
          >
            <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-slate-300 group-hover:text-white transition-colors">in/primes-bryan-villa</span>
          </a>

          <a
            href="https://github.com/PrimesVilla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
          >
            <Github className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-slate-300 group-hover:text-white transition-colors">github.com/PrimesVilla</span>
          </a>

          <a
            href="tel:+971529690811"
            className="flex items-center justify-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
          >
            <Phone className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-slate-300 group-hover:text-white transition-colors">+971 52 969 0811</span>
          </a>
        </div>
      </div>
    </section>
  );
}
