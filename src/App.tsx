import { ArrowUpRight, Check, MoveRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MotionDirector from './components/MotionDirector';
import CursorSpotlight from './components/CursorSpotlight';

const strengths = [
  ['01', 'Frontend craft', 'Responsive websites and interfaces built with HTML, CSS, JavaScript, React and TypeScript.'],
  ['02', 'Project coordination', 'Clear priorities, communication and next steps in small, practical project teams.'],
  ['03', 'Business context', 'Experience with sales, warehouse, B2B and e-commerce processes behind the interface.'],
  ['04', 'Hands-on delivery', 'For every project shown here, I handled the frontend and visual implementation.'],
];

const workflow = [
  ['Frame', 'Clarify the business goal, user and constraints before the UI starts growing.'],
  ['Shape', 'Turn ambiguity into a focused scope, information architecture and visual direction.'],
  ['Build', 'Create responsive interfaces, connect the details and keep stakeholders in the loop.'],
  ['Ship', 'Test the experience, tighten performance and leave the product ready for its next iteration.'],
];

const tickerItems = ['Frontend development', 'Websites from scratch', 'Project coordination', 'Business tools', 'E-commerce'];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-ember)] selection:text-white">
      <MotionDirector />
      <CursorSpotlight />
      <div className="site-noise" aria-hidden="true" />
      <Navbar />

      <main>
        <Hero />

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div className="ticker-group" key={group}>
                {tickerItems.map((item) => (
                  <span className="ticker-item" key={`${group}-${item}`}>
                    <span>{item}</span><i>✦</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="about" className="section-shell relative overflow-hidden">
          <div className="orbital-word" aria-hidden="true">PRODUCT / PEOPLE / DELIVERY</div>
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.78fr_1.22fr] md:px-8">
            <div className="reveal">
              <p className="eyebrow">About</p>
              <h2 className="section-title">Frontend grounded in real business needs.</h2>
              <p className="mt-7 max-w-md text-lg leading-[1.75] text-[var(--color-muted)]">
                My experience comes from building websites and internal tools used in day-to-day company work.
              </p>
            </div>

            <div className="reveal">
              <p className="about-lead">
                I deliver projects independently or in small teams. In every project shown here, I was responsible for the <em>frontend and visual execution</em>. I am now looking to grow in one focused role as a junior frontend developer or project manager.
              </p>
              <div className="stagger-grid mt-10 grid gap-0 border-l border-t border-[var(--color-line)] sm:grid-cols-2">
                {strengths.map(([number, title, body]) => (
                  <article key={title} className="strength-card">
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />

        <section id="process" className="section-shell bg-[var(--color-ink)] text-white">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="reveal grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow text-[var(--color-gold)]">How I work</p>
                <h2 className="section-title">From brief<br />to shipped.</h2>
                <p className="mt-6 max-w-md leading-[1.75] text-white/58">A simple process that keeps momentum visible without turning delivery into ceremony.</p>
              </div>
              <ol className="stagger-grid border-t border-white/15">
                {workflow.map(([title, body], index) => (
                  <li key={title} className="process-row">
                    <span>0{index + 1}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <Check className="h-5 w-5 text-[var(--color-gold)]" aria-hidden="true" />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="contact-panel reveal">
              <div className="contact-orbit" aria-hidden="true" />
              <p className="eyebrow">Next project / next role</p>
              <h2>Let’s make the<br /><em>next thing useful.</em></h2>
              <p>I’m open to frontend development and project management opportunities where initiative and clear communication matter.</p>
              <div className="contact-actions mt-8 flex flex-wrap justify-center gap-3">
                <a className="button button-light" href="mailto:lisiu1999@gmail.com">lisiu1999@gmail.com <MoveRight className="h-4 w-4" /></a>
                <a className="button button-ghost-dark" href="https://www.linkedin.com/in/marcin-lisiak-570691199/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-line)] py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs font-semibold uppercase tracking-[0.11em] text-[var(--color-muted)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Marcin Lisiak / Built with React, GSAP & Three.js</p>
          <div className="flex gap-5">
            <a className="nav-link" href="https://github.com/marcin-lisiak" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="nav-link" href="#hero">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
