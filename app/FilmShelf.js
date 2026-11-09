'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './personal.module.css';

export default function FilmShelf() {
  const shelf = useRef(null);
  const [take, setTake] = useState(0);

  useEffect(() => {
    const cards = shelf.current.children;
    if (!('IntersectionObserver' in window)) {
      for (const card of cards) card.dataset.playing = 'true';
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.dataset.playing = 'true';
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.35 });
    for (const card of cards) observer.observe(card);
    return () => observer.disconnect();
  }, [take]);

  return (
    <section className={styles.section} aria-labelledby="film-title">
      <p className={styles.label}>Off the clock / Film</p>
      <div className={styles.filmHeader}>
        <h2 id="film-title">Favourite movies</h2>
        <button className={styles.filmReplay} type="button" onClick={() => setTake((current) => current + 1)}>
          Replay animations <span aria-hidden="true">↻</span>
        </button>
      </div>
      <ul key={take} ref={shelf} className={styles.films}>
        <li>
          <svg viewBox="0 0 360 220" role="img" aria-label="A brass spinning top reflected on a dark table">
            <defs>
              <linearGradient id="film-brass" x2="1" y2="1">
                <stop stopColor="#f7d9a1" />
                <stop offset=".53" stopColor="#ac7949" />
                <stop offset="1" stopColor="#edc180" />
              </linearGradient>
            </defs>
            <path d="M0 0h360v220H0z" fill="#30232e" />
            <path d="M0 152h360v68H0z" fill="#42313b" />
            <g fill="none" stroke="#ad7967" opacity=".42">
              <path d="M0 152h360M0 169h360M0 192h360m-253 28 58-68m88 68-57-68" />
              <path d="M42 26h276v104H42zm34 16h208v71H76zm32 15h144v39H108z" />
            </g>
            <ellipse cx="180" cy="159" rx="59" ry="10" fill="#261c25" />
            <g className={styles.spinningTop}>
              <path d="M174 61q0-7 6-7t6 7v24l7 8 34 22-47 43-47-43 34-22 7-8z" fill="url(#film-brass)" stroke="#f7d9a1" strokeWidth="1.5" />
              <ellipse cx="180" cy="115" rx="47" ry="7" fill="#f3d4a0" stroke="#81533c" />
              <path d="m141 123 39 35 39-35m-39-67v48" fill="none" stroke="#79523b" opacity=".8" />
            </g>
            <path className={styles.topTrace} d="M120 154q59 16 121 0m-108 11q47 11 94 0" fill="none" stroke="#f7d9a1" strokeWidth="1.5" />
            <path d="M150 174q30 6 60 0" fill="none" stroke="#c78f6a" opacity=".42" />
          </svg>
          <div><h3>Inception</h3><p>A dream within a dream within a dream. Is the ending still a dream?</p></div>
        </li>
        <li>
          <svg viewBox="0 0 360 220" role="img" aria-label="A black hole surrounded by a bent ring of golden light">
            <defs>
              <radialGradient id="film-orbit">
                <stop offset=".42" stopColor="#110d18" />
                <stop offset=".66" stopColor="#8d4b49" />
                <stop offset=".77" stopColor="#e59763" />
                <stop offset="1" stopColor="#261a31" />
              </radialGradient>
              <linearGradient id="film-ring">
                <stop stopColor="#ad5666" stopOpacity="0" />
                <stop offset=".5" stopColor="#ffe0a3" />
                <stop offset="1" stopColor="#ad5666" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 0h360v220H0z" fill="#21182b" />
            <g fill="#eec5aa" opacity=".65">
              <circle cx="45" cy="40" r="1.6" /><circle cx="78" cy="82" r="1" />
              <circle cx="303" cy="33" r="1.5" /><circle cx="322" cy="148" r="1.1" />
              <circle cx="53" cy="183" r="1" /><circle cx="279" cy="182" r="1.5" />
              <circle cx="103" cy="29" r="1" /><circle cx="242" cy="38" r="1" />
            </g>
            <circle cx="180" cy="109" r="91" fill="url(#film-orbit)" />
            <ellipse cx="180" cy="112" rx="144" ry="26" transform="rotate(-12 180 112)" fill="none" stroke="url(#film-ring)" strokeWidth="11" />
            <g className={styles.orbitLight} fill="none" strokeLinecap="round">
              <circle cx="180" cy="109" r="68" stroke="#ffc891" strokeWidth="2" strokeDasharray="38 190 17 183" />
              <circle cx="180" cy="109" r="77" stroke="#ffe3b0" strokeWidth="3" strokeDasharray="21 250 38 175" />
              <circle cx="180" cy="109" r="85" stroke="#e88d72" strokeWidth="1.5" strokeDasharray="38 250 22 224" />
            </g>
            <circle cx="180" cy="107" r="46" fill="#100c17" />
            <path d="M39 133q39 27 146 3 106-23 132-57" fill="none" stroke="url(#film-ring)" strokeWidth="5" />
          </svg>
          <div><h3>Interstellar</h3><p>A marvelous adventure through space and time.</p></div>
        </li>
        <li>
          <svg viewBox="0 0 360 220" role="img" aria-label="Two stick figures trading moves under a spotlight">
            <defs>
              <radialGradient id="film-ring-light">
                <stop stopColor="#82516b" /><stop offset="1" stopColor="#2b1d30" />
              </radialGradient>
            </defs>
            <path d="M0 0h360v220H0z" fill="url(#film-ring-light)" />
            <path d="m130 0-98 162h296L230 0z" fill="#f5a7a1" opacity=".13" />
            <path d="M0 137h360m-360 8h360M0 154h360" stroke="#9a6377" opacity=".6" />
            <path d="M0 160h360v60H0z" fill="#382638" />
            <path d="M8 208h344M27 184h306m-278 36 47-59m203 59-47-59" fill="none" stroke="#81516d" opacity=".6" />
            <ellipse cx="180" cy="182" rx="131" ry="13" fill="#291d2c" opacity=".65" />
            <g transform="translate(107 120)">
              <g className={styles.fighterOne} fill="none" stroke="#ffd1b9" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <circle cy="-36" r="11" />
                <path d="M0-24v41l-14 23-7 20m21-43 17 17 9 26M0-14l-13 12 8 12" />
                <path className={styles.jab} d="M0-17l16 12 10-13" />
              </g>
            </g>
            <g transform="translate(253 120) scale(-1 1)">
              <g className={styles.fighterTwo} fill="none" stroke="#f4a7bb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <circle cy="-36" r="11" />
                <path d="M0-24v41l-14 23-7 20m21-43 17 17 9 26M0-14l-13 12 8 12" />
                <path className={styles.jab} d="M0-17l16 12 10-13" />
              </g>
            </g>
            <g className={styles.fightFlash} fill="none" stroke="#ffe0b3" strokeWidth="2.5" strokeLinecap="round">
              <path d="m178 88 2-10m9 14 8-6m-26 8-10-5" />
            </g>
          </svg>
          <div><h3>Fight Club</h3><p>The less you know going in, the better.</p></div>
        </li>
      </ul>
    </section>
  );
}
