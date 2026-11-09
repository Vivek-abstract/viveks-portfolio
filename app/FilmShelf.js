'use client';

import { useEffect, useRef } from 'react';
import { filmScenes } from './filmScenes';
import styles from './personal.module.css';

const films = [
  {
    title: 'Inception',
    caption: 'A dream within a dream within a dream. Is the ending still a dream?',
    description: 'A brass top spins and wobbles on a polished table in a lamplit hotel room.',
  },
  {
    title: 'Interstellar',
    caption: 'A marvelous adventure through space and time.',
    description: 'Glowing streams of matter orbit a black hole against a distant starfield.',
  },
  {
    title: 'Fight Club',
    caption: 'The less you know going in, the better.',
    description: 'Two metal stick figures exchange jabs and dodge under a basement spotlight.',
  },
];

export default function FilmShelf() {
  const shelf = useRef(null);

  useEffect(() => {
    const frames = Array.from(shelf.current.querySelectorAll('canvas'), (canvas, i) => {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(2, 0, 0, 2, 0, 0);
      return { canvas, ctx, draw: filmScenes[i] };
    }).filter(({ ctx }) => ctx);

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const visible = new Set();
    let request = 0;
    let last = 0;
    const start = performance.now();

    function paint(frame, time) {
      frame.ctx.clearRect(0, 0, 400, 235);
      frame.draw(frame.ctx, time);
    }

    function animate(now) {
      request = 0;
      if (motion.matches || !visible.size || document.hidden) return;
      if (now - last >= 1000 / 31) {
        for (const frame of frames) {
          if (visible.has(frame.canvas)) paint(frame, (now - start) / 1000);
        }
        last = now;
      }
      request = requestAnimationFrame(animate);
    }

    function sync() {
      if (motion.matches) {
        for (const frame of frames) paint(frame, 0);
      }
      if (!request && visible.size && !motion.matches && !document.hidden) {
        request = requestAnimationFrame(animate);
      }
    }

    for (const frame of frames) paint(frame, 0);
    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) visible.add(target);
        else visible.delete(target);
      }
      sync();
    });
    for (const { canvas } of frames) observer.observe(canvas);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(request);
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="film-title">
      <p className={styles.label}>Off the clock / Film</p>
      <h2 id="film-title">Favourite movies</h2>
      <ul className={styles.films} ref={shelf}>
        {films.map(({ title, caption, description }) => (
          <li key={title}>
            <canvas className={styles.filmScene} width={800} height={470} role="img" aria-label={description} />
            <div><h3>{title}</h3><p>{caption}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
