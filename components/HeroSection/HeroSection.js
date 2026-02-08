'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import FloatingShapes from '../FloatingShapes/FloatingShapes';
import CursorGlow from '../CursorGlow/CursorGlow';
import { getYearsOfExperience } from '../../lib/utils';

export default function HeroSection() {
  const years = getYearsOfExperience();
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={heroRef} className={`section ${styles.hero}`}>
      <CursorGlow />
      <FloatingShapes />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.content}>
          <div className={`${styles.photoWrapper} ${mounted ? styles.entered : ''}`}>
            <div className={styles.photoRing}>
              <Image
                src="/vivek_profile_photo.jpg"
                alt="Vivek Gawande"
                width={280}
                height={280}
                className={styles.photo}
                priority
              />
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Building cool stuff
            </div>
          </div>
          <div className={`${styles.text} ${mounted ? styles.entered : ''}`}>
            <p className={styles.tagline}>Hi, I&apos;m Vivek Gawande</p>
            <h1 className={styles.headline}>
              <span className={styles.gradientText}>Senior Software</span>
              <br />
              <span className={styles.gradientText}>Engineer</span>
            </h1>
            <p className={styles.subheadline}>
              {years}+ years building enterprise applications with .NET, React, and cloud technologies.
            </p>
            <div className={styles.ctas}>
              <a
                href="https://bit.ly/ViveksResume"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnPrimary}`}
              >
                View Resume
              </a>
              <a
                href="https://www.linkedin.com/in/vivekbgawande/"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnSecondary}`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
