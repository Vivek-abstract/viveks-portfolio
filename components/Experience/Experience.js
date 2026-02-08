'use client';

import { useEffect, useRef } from 'react';
import { experiences } from '../../lib/experience-data';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './Experience.module.css';

export default function Experience() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const line = timeline.querySelector('[data-timeline-line]');
    if (!line) return;

    const handleScroll = () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      // Start drawing when timeline enters viewport, finish when last card is in view
      const progress = Math.min(
        Math.max((windowHeight - timelineTop) / (timelineHeight + windowHeight * 0.3), 0),
        1
      );

      line.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-alt" id="experience">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <h2 className={styles.heading}>Experience</h2>
        </ScrollReveal>
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine} data-timeline-line />
          {experiences.map((exp, i) => (
            <ScrollReveal
              key={i}
              animation="fade-left"
              stagger={120}
              staggerIndex={i}
              className={styles.item}
            >
              <div className={styles.dot}>
                <div className={styles.dotPing} />
              </div>
              <ExperienceCard {...exp} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
