import { ArrowUpRight, MoveRight } from 'lucide-react';

const projects = [
  {
    name: 'D-Tech Systems',
    summary: 'Technology systems website designed and built from scratch in clean code.',
    role: 'End-to-end website build',
    outcome: 'Clean-code implementation with product-focused structure and visual hierarchy.',
    tags: ['Clean code', 'HTML', 'Tailwind', 'JavaScript'],
    link: 'https://dtechsystems.pl',
    image: '/project-thumbs/dtech-systems.jpg',
  },
  {
    name: 'Cezab Distribution',
    summary: 'Brand website for a distribution business, built from scratch with a video-led first impression.',
    role: 'End-to-end website build',
    outcome: 'Clean-code execution, visual direction, content flow, and launch-ready presentation.',
    tags: ['Clean code', 'React', 'Video', 'Marketing'],
    link: 'https://cezab-distribution.pl',
    image: '/project-thumbs/cezab-distribution.jpg',
  },
  {
    name: 'Motorline',
    summary: 'Gate automation website with product catalog and dealer-oriented content.',
    role: 'End-to-end website build',
    outcome: 'WordPress and Elementor build with full ownership of layout, content, visuals, and launch.',
    tags: ['WordPress', 'Elementor', 'Product catalog'],
    link: 'https://motorline.pl',
    image: '/project-thumbs/motorline.jpg',
  },
  {
    name: 'Giovidoors',
    summary: 'Premium door manufacturer website with a calmer visual language.',
    role: 'End-to-end website build',
    outcome: 'WordPress and Elementor build with premium visual direction and complete page execution.',
    tags: ['WordPress', 'Elementor', 'Design'],
    link: 'https://giovidoors.pl',
    image: '/project-thumbs/giovidoors.jpg',
  },
  {
    name: 'Giovi Pricing Tool',
    summary: 'Quote automation for Italian high-speed doors.',
    role: 'End-to-end app build',
    outcome: 'Faster quoting and fewer manual calculation mistakes.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind 4'],
    link: 'https://neon-chebakia-a60491.netlify.app',
    image: '/project-thumbs/giovi-pricing-tool.jpg',
  },
  {
    name: 'Cezab24.pl',
    summary: 'B2B e-commerce platform with custom storefront adjustments.',
    role: 'End-to-end storefront work',
    outcome: 'Shoper storefront extended with custom JS, CSS, and content modules.',
    tags: ['E-commerce', 'Shoper', 'Custom JS'],
    link: 'https://cezab24.pl',
    image: '/project-thumbs/cezab24.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Websites and tools shaped by code, context, and delivery.</h2>
          </div>
          <a className="nav-link inline-flex items-center gap-2 self-start md:self-auto" href="https://github.com/marcin-lisiak" target="_blank" rel="noopener noreferrer">
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group surface overflow-hidden transition-[transform,opacity,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[rgba(180,91,58,0.32)] hover:shadow-[0_26px_70px_rgba(65,83,70,0.18),0_10px_28px_rgba(21,20,18,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ember)] active:translate-y-0"
            >
              <div className="relative overflow-hidden">
                <img
                  className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  src={project.image}
                  alt={`${project.name} hero page thumbnail`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent mix-blend-multiply" aria-hidden="true" />
                <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-[8px] bg-white/90 text-[var(--color-ink)] shadow-[0_12px_26px_rgba(21,20,18,0.14)] backdrop-blur-md">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-[999px] border border-[rgba(21,20,18,0.1)] bg-[rgba(255,255,255,0.62)] px-3 py-1 text-xs text-[var(--color-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 leading-[1.65] text-[var(--color-muted)]">{project.summary}</p>
                <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <p>
                    <span className="block font-semibold text-[var(--color-ink)]">Role</span>
                    <span className="text-[var(--color-muted)]">{project.role}</span>
                  </p>
                  <p>
                    <span className="block font-semibold text-[var(--color-ink)]">Build</span>
                    <span className="text-[var(--color-muted)]">{project.outcome}</span>
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-ember)] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  Open project
                  <MoveRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
