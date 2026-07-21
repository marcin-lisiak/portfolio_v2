import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = ref.current;
    if (!cursor || !window.matchMedia('(pointer: fine)').matches) return;

    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMove = (event: PointerEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
      cursor.classList.add('is-visible');
      cursor.classList.toggle('is-active', Boolean((event.target as HTMLElement).closest('a, button, .project-card')));
    };
    const onLeave = () => cursor.classList.remove('is-visible');

    window.addEventListener('pointermove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />;
};

export default CursorSpotlight;
