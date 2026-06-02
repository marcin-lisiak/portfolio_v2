import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

const principles = [
  {
    title: 'Interface craft',
    body: 'React and TypeScript interfaces with clear structure, responsive behavior, and reliable details.',
  },
  {
    title: 'Commercial context',
    body: 'Marketing and e-commerce experience translated into user flows, launches, and market-ready communication.',
  },
  {
    title: 'Graphic design range',
    body: 'Flyers, promotional materials, product graphics, photo/video assets, and brand-facing layouts.',
  },
  {
    title: 'AI-assisted delivery',
    body: 'AI tools for research, iteration, automation, and code support with human product judgment.',
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-ember)] selection:text-white">
      <div className="site-noise" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(180,91,58,0.15),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(82,121,102,0.18),transparent_28%),radial-gradient(circle_at_70%_88%,rgba(197,164,90,0.16),transparent_30%)]" />

      <Navbar />
      <main>
        <Hero />

        <section id="about" className="section-shell">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="section-title">
                I connect frontend execution with business intent.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-[1.7] text-[var(--color-muted)] md:text-lg">
              <p>
                I am Marcin Lisiak, a frontend developer and project manager building a portfolio around React, TypeScript, e-commerce, and AI-enabled workflows.
              </p>
              <p>
                My background is practical: I have worked close to marketing, sales, product presentation, and operational websites. That makes my default question simple: what should this interface help the user do next?
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((item) => (
                  <article key={item.title} className="surface p-5">
                    <h3 className="mb-3 font-display text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-[1.7] text-[var(--color-muted)]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />

        <section id="contact" className="section-shell pb-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="relative overflow-hidden rounded-[8px] bg-[var(--color-ink)] px-6 py-12 text-white shadow-[0_28px_80px_rgba(21,20,18,0.22)] md:px-12 md:py-16">
              <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-[radial-gradient(circle_at_20%_20%,rgba(180,91,58,0.75),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(82,121,102,0.75),transparent_26%),radial-gradient(circle_at_50%_110%,rgba(197,164,90,0.55),transparent_34%)]" aria-hidden="true" />
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="eyebrow text-[var(--color-gold)]">Contact</p>
                  <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] md:text-6xl">
                    Need a frontend partner who understands the product conversation?
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a className="button button-light" href="mailto:marcin@lisiak.pl">
                    Email me
                  </a>
                  <a className="button button-ghost-dark" href="https://www.linkedin.com/in/marcin-lisiak-570691199/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(21,20,18,0.12)] py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>2026 Marcin Lisiak. Frontend, product websites, and e-commerce interfaces.</p>
          <div className="flex gap-5">
            <a className="nav-link" href="https://github.com/marcin-lisiak" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="nav-link" href="https://www.linkedin.com/in/marcin-lisiak-570691199/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
