import { ArrowDown, Linkedin, Mail, MapPin, MoveRight } from 'lucide-react';
import { lazy, Suspense } from 'react';

const HeroScene = lazy(() => import('./HeroScene'));

const proof = [
  { value: '08', label: 'selected projects' },
  { value: 'HTML to React', label: 'frontend range' },
  { value: 'From zero', label: 'frontend & visual execution' },
];

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-reveal">Frontend developer</span>
            <span className="hero-reveal">with a practical</span>
            <span className="hero-reveal hero-title-accent">project mindset.</span>
          </h1>

          <p className="hero-reveal hero-intro">
            I build responsive websites from scratch with HTML, CSS and JavaScript, and use React and TypeScript for practical, more complex tools.
          </p>

          <div className="hero-reveal hero-actions">
            <a href="#projects" className="button button-primary magnetic-button">
              See selected work
              <MoveRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="mailto:lisiu1999@gmail.com" className="button button-secondary magnetic-button">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Talk to Marcin
            </a>
            <a href="https://www.linkedin.com/in/marcin-lisiak-570691199/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Marcin Lisiak on LinkedIn">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="hero-reveal proof-strip">
            {proof.map((item) => (
              <div key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>

          <p className="hero-reveal availability-note">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Poland · Full remote · Hybrid in Wrocław or Poznań
          </p>
        </div>

        <div className="hero-reveal hero-stage">
          <div className="hero-stage-frame">
            <Suspense fallback={<div className="hero-scene hero-scene-fallback" aria-hidden="true" />}>
              <HeroScene />
            </Suspense>

            <div className="portrait-backdrop" aria-hidden="true" />
            <div className="portrait-cutout">
              <img src="/my_photo.png" alt="Marcin Lisiak, frontend developer and project manager" />
            </div>
            <div className="portrait-role">Frontend Developer <span>+</span> Project Manager</div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label="Scroll to about section">
        <span>Discover more</span>
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
