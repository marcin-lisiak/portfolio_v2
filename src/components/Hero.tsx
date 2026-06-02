import { Mail, MoveRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { value: 'React', label: 'frontend stack' },
  { value: 'E-com', label: 'business context' },
  { value: 'AI', label: 'daily workflow' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Available for focused frontend work</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.03] sm:text-6xl md:text-7xl">
            Marcin Lisiak builds interfaces with product sense.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-[var(--color-muted)] md:text-xl">
            Frontend developer and project manager working with React, TypeScript, e-commerce, marketing, and AI-assisted delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button button-primary">
              View projects
              <MoveRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="mailto:marcin@lisiak.pl" className="button button-secondary">
              <Mail className="h-5 w-5" aria-hidden="true" />
              Get in touch
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="border-l border-[rgba(21,20,18,0.16)] pl-4">
                <dt className="font-display text-2xl font-semibold">{item.value}</dt>
                <dd className="mt-1 text-xs uppercase text-[var(--color-muted)]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[560px] lg:mr-0"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-5 rounded-[8px] bg-[radial-gradient(circle_at_24%_18%,rgba(180,91,58,0.22),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(82,121,102,0.24),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(197,164,90,0.2),transparent_34%)] blur-2xl" aria-hidden="true" />
          <div className="surface relative overflow-hidden p-3 shadow-[0_28px_90px_rgba(65,83,70,0.2),0_12px_34px_rgba(21,20,18,0.1)] md:p-4">
            <div className="grid gap-3 sm:grid-cols-[0.78fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.82fr_1fr]">
              <div className="hero-portrait-frame">
                <img
                  className="hero-portrait"
                  src="/my_photo.jfif"
                  alt="Portrait of Marcin Lisiak"
                />
              </div>

              <div className="flex min-h-full flex-col justify-between rounded-[8px] bg-[var(--color-ink)] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-[999px] bg-white/10 px-3 py-1.5 text-sm font-semibold text-[var(--color-gold)]">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Product-minded frontend
                  </div>
                  <p className="font-display text-2xl font-semibold leading-[1.14] md:text-3xl">
                    Clear UI, fast iteration, measurable product value.
                  </p>
                </div>
                <p className="mt-6 text-sm leading-[1.7] text-white/70">
                  React, TypeScript, e-commerce experience, and AI-supported delivery in one practical workflow.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
