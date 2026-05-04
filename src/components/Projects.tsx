import React from 'react';
import { ExternalLink, MoveRight } from 'lucide-react';

const projects = [
  {
    name: 'D-Tech Systems',
    desc: 'Zaawansowane systemy technologiczne. Nowoczesny design i prezentacja produktów.',
    tags: ['HTML', 'Tailwind', 'JS'],
    link: 'https://dtechsystems.pl',
    bg: 'bg-white',
    accent: 'bg-accent'
  },
  {
    name: 'Cezab Distribution',
    desc: 'Strona dystrybutora z hero sekcją video. Profesjonalny layout brandowy.',
    tags: ['React', 'Video', 'Marketing'],
    link: 'https://cezab-distribution.pl',
    bg: 'bg-secondary',
    accent: 'bg-primary'
  },
  {
    name: 'Motorline',
    desc: 'Automatyka bramowa. Katalog produktów i sieć dealerów.',
    tags: ['Tailwind', 'Project Mgmt'],
    link: 'https://motorline.pl',
    bg: 'bg-white',
    accent: 'bg-accent'
  },
  {
    name: 'Giovidoors',
    desc: 'Producent drzwi premium. Minimalistyczna elegancja.',
    tags: ['Design', 'Frontend'],
    link: 'https://giovidoors.pl',
    bg: 'bg-secondary',
    accent: 'bg-primary'
  },
  {
    name: 'Cennik Giovi',
    desc: 'Automatyzacja wycen włoskich bram szybkobieżnych. Skraca czas ofertowania i eliminuje błędy.',
    tags: ['Next.js 15', 'TS', 'Tailwind 4'],
    link: 'https://github.com/marcin-lisiak/Cennik-giovi',
    bg: 'bg-white',
    accent: 'bg-accent'
  },
  {
    name: 'Cezab24.pl',
    desc: 'Platforma E-commerce B2B na Shoperze z autorskimi modyfikacjami JS/CSS i dedykowanym sliderem.',
    tags: ['E-commerce', 'Shoper', 'Custom JS'],
    link: 'https://cezab24.pl',
    bg: 'bg-secondary',
    accent: 'bg-primary'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 container mx-auto px-6 relative z-10">
      <div className="inline-block bg-black text-white px-4 py-1 font-mono text-sm mb-6 border-2 border-black uppercase">
        // My Recent Work
      </div>
      <h2 className="text-5xl md:text-8xl font-black mb-16 leading-[0.9] uppercase">
        Wybrane <span className="text-accent">projekty</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <a 
            key={project.name} 
            href={project.link} 
            target="_blank" 
            rel="noopener"
            className={`group relative border-4 border-black p-8 ${project.bg} brutalist-shadow hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}
          >
            <div className="flex justify-between items-start mb-10">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white border-2 border-black px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`p-2 border-2 border-black ${project.accent}`}>
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{project.name}</h3>
            <p className="text-lg font-medium text-black leading-tight mb-10 border-l-4 border-black pl-4">
              {project.desc}
            </p>
            
            <div className="flex items-center gap-3 font-black uppercase text-xl group-hover:gap-6 transition-all">
              Odwiedź stronę <MoveRight className="w-6 h-6" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
