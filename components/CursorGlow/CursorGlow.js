'use client';

import { useEffect, useRef } from 'react';
import styles from './CursorGlow.module.css';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const container = glow.parentElement;
    if (!container) return;

    let x = 0, y = 0;
    let currentX = 0, currentY = 0;
    let rafId;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.08;
      currentY += (y - currentY) * 0.08;
      glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const mq = window.matchMedia('(pointer: fine)');
    if (mq.matches) {
      container.addEventListener('mousemove', onMouseMove);
      rafId = requestAnimationFrame(animate);
      glow.style.opacity = '1';
    }

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} />;
}
