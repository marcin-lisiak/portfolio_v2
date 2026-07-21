import { Bot, Braces, Brush, KanbanSquare, ShoppingBag, Sparkles, Workflow } from 'lucide-react';

const capabilities = [
  { title: 'Frontend', note: 'From classic websites to web apps', icon: Braces, items: ['HTML & CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Coordination', note: 'Practical small-team delivery', icon: KanbanSquare, items: ['Project management', 'Scoping', 'Communication', 'Prioritisation'] },
  { title: 'Business', note: 'Context behind the interface', icon: ShoppingBag, items: ['E-commerce', 'Sales workflows', 'Internal tools', 'B2B content'] },
  { title: 'Visual', note: 'A useful supporting foundation', icon: Brush, items: ['UI direction', 'Graphic design', 'Responsive layouts', 'Product visuals'] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal grid gap-7 md:grid-cols-[1fr_0.75fr] md:items-end">
          <div>
            <p className="eyebrow">Capabilities / the working stack</p>
            <h2 className="section-title">Frontend first.<br />Project context included.</h2>
          </div>
          <p className="max-w-lg text-lg leading-[1.75] text-[var(--color-muted)] md:pb-2">
            Frontend is my strongest hands-on direction: from polished HTML, CSS and JavaScript websites to React and TypeScript tools, supported by practical project and B2B experience.
          </p>
        </div>

        <div className="stagger-grid mt-12 grid border-l border-t border-[var(--color-line)] sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="capability-card group">
                <div className="mb-8 flex items-start justify-between">
                  <div className="capability-icon"><Icon className="h-5 w-5" /></div>
                  <Sparkles className="h-4 w-4 text-[var(--color-gold)] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.note}</p>
                <ul>
                  {capability.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-5 flex flex-col gap-4 rounded-[5px] border border-[var(--color-line)] bg-white/45 p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="capability-icon bg-[var(--color-ink)] text-white"><Bot className="h-5 w-5" /></span>
            <p><strong>AI-assisted delivery</strong><span className="ml-2 text-sm text-[var(--color-muted)]">for faster research, iteration and automation — always with human judgment.</span></p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-sage)]"><Workflow className="h-4 w-4" /> Daily workflow</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
