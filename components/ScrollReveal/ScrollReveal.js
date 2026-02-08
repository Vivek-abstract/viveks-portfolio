'use client';

import { useEffect, useRef } from 'react';
import styles from './ScrollReveal.module.css';

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
  stagger = 0,
  staggerIndex = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const totalDelay = delay + stagger * staggerIndex;
    el.style.transitionDelay = `${totalDelay}ms`;
    el.style.transitionDuration = `${duration}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, duration, threshold, stagger, staggerIndex]);

  const animClass = styles[animation] || styles['fade-up'];

  return (
    <Tag ref={ref} className={`${styles.base} ${animClass} ${className}`}>
      {children}
    </Tag>
  );
}
