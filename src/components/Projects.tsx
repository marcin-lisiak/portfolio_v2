import { ArrowUpRight, Github, MoveRight } from 'lucide-react';

const projects = [
  {
    name: 'Gaposa Poland',
    index: '01',
    summary: 'A Polish brand and product website for an Italian manufacturer of industrial automation systems.',
    role: 'Frontend & visual build from scratch',
    outcome: 'A clear B2B catalogue combining products, technical specifications, documents and enquiry paths.',
    tags: ['Frontend', 'UI design', 'B2B', 'Technical content'],
    link: 'https://www.gaposa.pl',
    image: '/project-thumbs/gaposa.png',
    featured: true,
  },
  {
    name: 'Zlecenia Cezab',
    index: '02',
    summary: 'An internal tool connecting sales and warehouse teams during order dispatch.',
    role: 'Frontend, UI & workflow design',
    outcome: 'Replaced a slow, fragmented process with instant access to assignments, statuses and complete order history for both teams.',
    tags: ['Internal tool', 'Sales & warehouse', 'Workflow', 'Live demo'],
    link: 'https://zlecenia-cezab.netlify.app/',
    image: '/project-thumbs/zlecenia-cezab.png',
    featured: true,
  },
  {
    name: 'D-Tech Systems',
    index: '03',
    summary: 'Technology systems website designed and built from scratch in clean code.',
    role: 'Frontend & visual build from scratch',
    outcome: 'A complete company website with product-focused structure and a clear visual hierarchy.',
    tags: ['HTML', 'Tailwind', 'JavaScript'],
    link: 'https://dtechsystems.pl',
    image: '/project-thumbs/dtech-systems.jpg',
  },
  {
    name: 'Cezab Distribution',
    index: '04',
    summary: 'A video-led brand website for an industrial distribution business.',
    role: 'Frontend & visual build from scratch',
    outcome: 'A complete brand website with visual direction, content flow and video-led presentation.',
    tags: ['React', 'Video', 'Marketing'],
    link: 'https://cezab-distribution.pl',
    image: '/project-thumbs/cezab-distribution.jpg',
  },
  {
    name: 'Giovi Pricing Tool',
    index: '05',
    summary: 'A mobile-friendly pricing tool for sales representatives quoting high-speed industrial doors.',
    role: 'Frontend, UX & calculation flow',
    outcome: 'Sales reps can enter a model and dimensions anywhere and receive a price immediately instead of requesting every quote separately.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind 4'],
    link: 'https://neon-chebakia-a60491.netlify.app',
    image: '/project-thumbs/giovi-pricing-tool.jpg',
  },
  {
    name: 'Cezab24.pl',
    index: '06',
    summary: 'A B2B e-commerce platform extended beyond its standard storefront.',
    role: 'Frontend & storefront customisation',
    outcome: 'Custom JavaScript, CSS and content modules for a clearer buying journey.',
    tags: ['E-commerce', 'Shoper', 'Custom JS'],
    link: 'https://cezab24.pl',
    image: '/project-thumbs/cezab24.jpg',
  },
  {
    name: 'Motorline',
    index: '07',
    summary: 'Gate automation website with a product catalogue and dealer-focused content.',
    role: 'Frontend & visual build from scratch',
    outcome: 'A complete brand website with catalogue structure, content, visuals and responsive implementation.',
    tags: ['WordPress', 'Elementor', 'Product catalogue'],
    link: 'https://motorline.pl',
    image: '/project-thumbs/motorline.jpg',
  },
  {
    name: 'Giovidoors',
    index: '08',
    summary: 'Premium manufacturer website with a calm, architectural visual language.',
    role: 'Frontend & visual build from scratch',
    outcome: 'A complete manufacturer website with premium visual direction and responsive page implementation.',
    tags: ['WordPress', 'Elementor', 'Design'],
    link: 'https://giovidoors.pl',
    image: '/project-thumbs/giovidoors.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-12 grid gap-6 border-b border-[var(--color-line)] pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow">Selected work / 01—08</p>
            <h2 className="section-title">Built to be used,<br /><em className="font-normal text-[var(--color-ember)]">not just viewed.</em></h2>
          </div>
          <a className="nav-link inline-flex items-center gap-2 self-start pb-2 md:self-end" href="https://github.com/marcin-lisiak" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" aria-hidden="true" />
            More on GitHub
          </a>
        </div>

        <div className="stagger-grid grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card group ${project.featured ? 'md:col-span-1' : ''}`}
            >
              <div className="project-media">
                {project.image ? (
                  <img src={project.image} alt={`${project.name} website preview`} loading={project.featured ? 'eager' : 'lazy'} />
                ) : (
                  <div className="project-console" aria-hidden="true">
                    <div className="console-bar"><span /><span /><span /><b>zlecenia / operations</b></div>
                    <div className="console-grid">
                      <div className="console-rail"><i /><i /><i /><i /></div>
                      <div className="console-board">
                        <span className="console-label">ACTIVE WORKFLOW</span>
                        <strong>Orders move.<br />Teams stay aligned.</strong>
                        <div className="console-lines"><i /><i /><i /></div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="project-index">{project.index}</div>
                <div className="project-arrow"><ArrowUpRight className="h-5 w-5" /></div>
              </div>

              <div className="project-content p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.02em]">{project.name}</h3>
                <p className="mt-3 max-w-xl leading-[1.7] text-[var(--color-muted)]">{project.summary}</p>
                <div className="mt-6 grid gap-4 border-t border-[var(--color-line)] pt-5 text-sm sm:grid-cols-2">
                  <p><span className="meta-label">Role</span>{project.role}</p>
                  <p><span className="meta-label">Value</span>{project.outcome}</p>
                </div>
                <span className="project-link mt-6 inline-flex items-center gap-2 font-bold text-[var(--color-ember)]">
                  Visit project
                  <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
