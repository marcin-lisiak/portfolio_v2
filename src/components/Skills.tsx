import { Bot, Brush, Code2, Images, Megaphone, PackageOpen, PenTool, Route, Store, TerminalSquare, Video, Workflow } from 'lucide-react';

const skills = [
  {
    group: 'Frontend',
    items: [
      { name: 'React / Next.js', icon: Code2 },
      { name: 'TypeScript', icon: TerminalSquare },
      { name: 'Tailwind CSS', icon: Brush },
    ],
  },
  {
    group: 'Product context',
    items: [
      { name: 'E-commerce', icon: Store },
      { name: 'Marketing flows', icon: Megaphone },
      { name: 'New product launches', icon: PackageOpen },
      { name: 'Project management', icon: Route },
    ],
  },
  {
    group: 'Visual design',
    items: [
      { name: 'Graphic design', icon: PenTool },
      { name: 'Flyers and print layouts', icon: Brush },
      { name: 'Photo assets', icon: Images },
      { name: 'Video materials', icon: Video },
      { name: 'Product visuals', icon: PackageOpen },
    ],
  },
  {
    group: 'Acceleration',
    items: [
      { name: 'AI tools', icon: Bot },
      { name: 'Automation mindset', icon: Workflow },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell bg-[rgba(255,255,255,0.36)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">A practical stack for polished, shippable interfaces.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group) => (
            <section key={group.group} className="surface p-5">
              <h3 className="mb-5 font-display text-2xl font-semibold">{group.group}</h3>
              <div className="grid gap-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex min-h-16 items-center gap-4 rounded-[8px] border border-[rgba(21,20,18,0.1)] bg-white/58 p-4 transition-[transform,opacity,background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[rgba(180,91,58,0.35)] hover:bg-white"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[var(--color-sage)] text-white shadow-[0_10px_24px_rgba(82,121,102,0.22)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
