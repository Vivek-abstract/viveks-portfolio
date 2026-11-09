'use client';

import { useState } from 'react';
import styles from './personal.module.css';

const masonry = [134, 150, 166, 182, 198, 214, 230, 246, 262];

export default function Harbour() {
  const [paused, setPaused] = useState(false);

  return (
    <figure className={styles.harbour} data-paused={paused}>
      <svg className={styles.scene} viewBox="0 0 800 450" role="img" aria-label="An ink sketch of paper boats drifting past the Gateway of India at sunset">
        <defs>
          <linearGradient id="harbour-sky" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#2c1c30" />
            <stop offset=".62" stopColor="#704052" />
            <stop offset="1" stopColor="#ae665b" />
          </linearGradient>
          <linearGradient id="harbour-water" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#603649" />
            <stop offset="1" stopColor="#241927" />
          </linearGradient>
          <pattern id="harbour-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(34)">
            <path d="M0 0v6" stroke="#ffca9e" strokeWidth="1" opacity=".27" />
          </pattern>
          <pattern id="harbour-grain" width="19" height="17" patternUnits="userSpaceOnUse">
            <path d="M2 4h1m9 8h1m5-10h1M7 15h1" stroke="#fff1de" opacity=".16" />
          </pattern>
          <g id="harbour-tower">
            <path d="M-22 269V144h-4v-9h8v-14h6v-12Q0 98 12 109v12h6v14h8v9h-4v125Z" fill="#623746" />
            <path d="M-18 147h36v121h-36Z" fill="url(#harbour-hatch)" stroke="none" />
            <path d="M0 101v-8m-10 28h20m-25 6h30m-40 17h50m-46 8h42m-42 54h42m-42 7h42m-42 43h42M-6 189v-19q6-10 12 0v19zM-5 241v-14q5-9 10 0v14z" fill="none" />
          </g>
          <g id="harbour-paper">
            <path d="M-42 3-24 24h47L43 1 12 8 1-22-17 9Z" fill="#fbe1be" />
            <path d="M-42 3-17 9 1-22 12 8 43 1 23 24h-47Z" fill="none" />
            <path d="M-17 9 0 17 12 8M0-22l2 35m-26 11L0 17l23 7" fill="none" />
          </g>
        </defs>

        <path d="M0 0h800v450H0z" fill="url(#harbour-sky)" />
        <circle cx="550" cy="163" r="93" fill="#db815e" opacity=".18" />
        <circle cx="550" cy="163" r="70" fill="#ffc18e" />
        <path d="M491 196h119m-110 11h100m-86 11h72" stroke="#9b4f4c" strokeWidth="2" opacity=".42" />
        <path d="M0 0h800v450H0z" fill="url(#harbour-grain)" />
        <g className={styles.gulls} fill="none" stroke="#ffd6b0" strokeWidth="1.7" strokeLinecap="round">
          <path d="M467 88q8-6 16 2 6-8 15-6m-52 15q6-4 11 1 4-6 11-4m48-23q5-4 10 1 5-6 11-4" />
        </g>
        <g fill="none" stroke="#ffc79e" opacity=".36">
          <path d="M19 84q68-12 158-5M0 93q58-8 109-5m526 38q72-4 165 10m-123-17q62 0 105 6" />
          <path d="M0 250l51-7 36 4 45-13 41 4m425 12 29-5 44 6 44-11 38 6 47-3" />
        </g>

        <g stroke="#f2b391" strokeWidth="1.45" strokeLinejoin="round" strokeLinecap="round">
          <path d="M181 268V164h-7v-11h28v-19h22v-12h23v-15h170v15h23v12h22v19h28v11h-7v104Z" fill="#74414d" />
          <path d="M182 266V165h300v101Z" fill="url(#harbour-hatch)" stroke="none" />
          {masonry.map((y) => <path key={y} d={`M187 ${y}h290`} opacity=".21" />)}
          <path d="M202 153h260m-285 11h310m-291 92h272M230 134h204m-197-11h190m-162-14v-12h12v12m24 0v-12h12v12m24 0v-12h12v12m24 0v-12h12v12" fill="none" />
          <path d="M259 268v-44q0-37 73-70 73 33 73 70v44Z" fill="#492b3c" />
          <path d="M272 268v-43q0-32 60-62 60 30 60 62v43Z" fill="#ce795f" />
          <path d="M277 268v-42q0-27 55-57 55 30 55 57v42Z" fill="url(#harbour-sky)" stroke="none" />
          <path d="M264 268v-43q0-34 68-67 68 33 68 67v43m-113-37v37m91-37v37M311 146h42m-14-9h-14" fill="none" />
          <use href="#harbour-tower" x="207" />
          <use href="#harbour-tower" x="457" />
          <path d="m162 269 342-1 10 7H151Z" fill="#633b46" />
          <path d="M143 276h382l16 8H125Z" fill="#533341" />
          <path d="M116 284h436l15 9H102Z" fill="#412b3b" />
        </g>

        <path d="M0 295q109-7 202 0t221 0 201-1 176 1v155H0Z" fill="url(#harbour-water)" />
        <g className={styles.ripples} stroke="#f6ad83" strokeLinecap="round" fill="none">
          <path d="M479 307h121m-142 10h158m-117 11h74m-96 12h125m-81 11h111m-164 14h76m-37 16h103m-72 15h45" opacity=".59" />
          <path d="M13 314q38-4 86 0m-45 29q47-5 106-2m18-29h110m-141 54q65-4 131-1m-257 34q94-7 161-1m132-65h82m-96 79q78-4 174 2m159-94h142m-122 42q65-5 111-1m-122 50q86-5 157 0" opacity=".38" />
          <path d="M15 427q65-5 134-2m29 9q71-6 153-3m205 2q111-5 204 0" opacity=".28" />
        </g>
        <g transform="translate(340 345) scale(.64)">
          <g className={styles.distantBoat} stroke="#67394a" strokeWidth="1.4" strokeLinejoin="round">
            <path d="M-85 23q35-6 59-2m-38 9q24-4 36-2" fill="none" stroke="#e5a482" opacity=".6" />
            <use href="#harbour-paper" />
          </g>
        </g>
        <g transform="translate(246 391)">
          <g className={styles.boat} stroke="#67394a" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M-108 24q46-10 77-2m-49 13q40-7 71-4m31 0q18-2 34 0" fill="none" stroke="#ffd4a6" opacity=".7" />
            <use href="#harbour-paper" />
          </g>
        </g>
      </svg>
      <figcaption className={styles.harbourCaption}>
        <span>Gateway of India, Mumbai</span>
        <button type="button" className={styles.motionControl} onClick={() => setPaused(!paused)}>
          {paused ? 'Play animation' : 'Pause animation'}
        </button>
      </figcaption>
    </figure>
  );
}
