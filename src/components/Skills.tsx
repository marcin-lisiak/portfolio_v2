import React from 'react';

const skills = [
  { name: 'React / Next.js', icon: '⚛️', color: 'bg-secondary text-black' },
  { name: 'TypeScript', icon: '🔷', color: 'bg-accent text-black' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'bg-primary text-black' },
  { name: 'AI Tools / Prompting', icon: '🤖', color: 'bg-black text-white' },
  { name: 'E-commerce / Marketing', icon: '🛒', color: 'bg-secondary text-black' },
  { name: 'Grafika / Video', icon: '🎬', color: 'bg-primary text-black' },
  { name: 'Project Management', icon: '🗂️', color: 'bg-accent text-black' },
  { name: 'JavaScript (ES6+)', icon: '⚡', color: 'bg-secondary text-black' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 container mx-auto px-6 relative z-10">
      <div className="inline-block bg-black text-white px-4 py-1 font-mono text-sm mb-6 border-2 border-black uppercase">
        // Mój Tech Stack
      </div>
      <h2 className="text-5xl md:text-7xl font-black mb-12 leading-none">
        Moje <span className="text-primary italic">umiejętności</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`border-4 border-black brutalist-shadow p-6 flex flex-col gap-4 ${skill.color} group hover:rotate-1 transition-transform`}
          >
            <span className="text-4xl group-hover:scale-125 transition-transform inline-block w-fit">
              {skill.icon}
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
