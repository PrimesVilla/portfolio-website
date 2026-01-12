'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

export function CertificatesSection() {
  const certificates = [
    {
      image: "UC-69cc95d7-5610-45eb-bd3c-818cbc95755b.pdf.png",
      title: "The Complete 2024 Web Development Bootcamp",
      description: "Master full-stack web development with the latest tools and technologies in this comprehensive bootcamp.",
      issuer: "Udemy"
    },
    {
      image: "CertificateOfCompletion_Software Developement Processes and Methodologies.pdf.png",
      title: "Software Development: Processes and Methodologies",
      description: "Learn key software development processes and methodologies for efficient project execution.",
      issuer: "University of Minnesota"
    },
    {
      image: "CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_pbvilla-mcm-edu-ph_ab408d08-cae5-4bf5-878f-701bbef00c26.pdf.png",
      title: "CCNA: Enterprise Networking, Security, and Automation",
      description: "Master enterprise networking, security, and automation to build and manage modern IT infrastructures.",
      issuer: "Cisco"
    },
    {
      image: "CCNA-_Switching_Routing_and_Wireless_Essentials_certificate_pbvilla-mcm-edu-ph_e2b824e4-02dc-4e83-92e4-b81d4bf75d20.pdf.png",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      description: "Built a strong foundation by learning how to configure, manage, and troubleshoot switches, routers, and wireless networks",
      issuer: "Cisco"
    },
    {
      image: "CertificateOfCompletion_Agile Software Development Clean Coding Practices.pdf.png",
      title: "Agile Software Development: Clean Coding Practices",
      description: "Learn how to write clean, readable code that's easy for both computers and humans to understand.",
      issuer: "LinkedIn Learning"
    },
    {
      image: "CertificateOfCompletion_Agile Software Development Refactoring.pdf.png",
      title: "Agile Software Development: Refactoring",
      description: "Learn the fundamentals of refactoring to a more maintainable code, and seamlessly integrate new features.",
      issuer: "LinkedIn Learning"
    },
    {
      image: "CertificateOfCompletion_Understanding the Impact of a Merger for IT Teams.pdf.png",
      title: "Understanding the Impact of Merger for IT Teams",
      description: "Learn how IT teams can navigate the challenges of a post-acquisition merger.",
      issuer: "LinkedIn Learning"
    }
  ];

  return (
    <section id="certificates" className="min-h-screen py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates</h2>
        <p className="text-slate-400 mb-12">I've earned additional certifications online to enhance my skills.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10">
              <CardContent className="flex items-start gap-4">
                <div className="w-50 h-38 rounded-md overflow-hidden shrink-0 bg-slate-700/20">
                  <Image
                    src={`images/${cert.image}`}
                    alt={cert.title || 'Certificate'}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col space-y-2 w-auto h-auto">
                  <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-blue-400">{cert.issuer}</CardDescription>
                  <span className="text-slate-300 text-sm px-0">{cert.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
