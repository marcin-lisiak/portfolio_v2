import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MotionDirector = () => {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 34,
        opacity: 0,
        duration: 1.05,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 44,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('.stagger-grid').forEach((grid) => {
        gsap.from(grid.children, {
          opacity: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'opacity',
          scrollTrigger: { trigger: grid, start: 'top 82%', once: true },
        });
      });

      gsap.to('.orbital-word', {
        xPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      });
    });

    return () => context.revert();
  }, []);

  return null;
};

export default MotionDirector;
