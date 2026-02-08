'use client';

import { useCallback, useRef } from 'react';
import styles from './TiltCard.module.css';

export default function TiltCard({ children, className = '', intensity = 8 }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Shine effect position
    const shine = card.querySelector('[data-shine]');
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`;
    }
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    const shine = card.querySelector('[data-shine]');
    if (shine) {
      shine.style.background = 'transparent';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.tilt} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div data-shine className={styles.shine} />
      {children}
    </div>
  );
}
