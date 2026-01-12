'use client';

import { Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 p-12">
          About <span className="text-blue-400">Primes</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12 px-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Code2 className="mr-3 text-blue-400" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 font-medium mb-2">Front-End Development:</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React.js', 'Tailwind', 'HTML', 'CSS'].map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-2">Back-End Development:</p>
                <div className="flex flex-wrap gap-2">
                  {['Express.js', 'Node.js', 'Python', 'Flask'].map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-slate-500/10 text-slate-300 border-slate-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-2">Database:</p>
                <div className="flex flex-wrap gap-2">
                  {['Firebase Database', 'XAMPP', 'MySQL', 'NoSQL'].map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-slate-500/10 text-slate-300 border-slate-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-2">Version Control:</p>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Github'].map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-slate-500/10 text-slate-300 border-slate-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-2">Other Tools:</p>
                <div className="flex flex-wrap gap-2">
                  {['Visual Studio Code', 'Figma', 'Canva', 'Miro'].map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-slate-500/10 text-slate-300 border-slate-500/30">
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
                      className="h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
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
  );
}
