'use client';

import { useState } from 'react';
import styles from './personal.module.css';

const tracks = [
  { title: 'Ran To Atlanta', artist: 'Drake, Future & Molly Santana', video: 'ipOSrQNrp1U' },
  { title: 'Do Not Disturb', artist: 'Drake', video: 'vVd4T5NxLgI' },
  { title: 'When To Say When', artist: 'Drake · paired with Chicago Freestyle', video: '0jz0GAFNNIo' },
  { title: 'Akatsuki', artist: 'Seedhe Maut & Raga', video: '5Jmhm3LoKao' },
  { title: 'Eshay', artist: 'Gucci Dassy', video: 'eBQZdfuTkVU' },
];

export default function ListeningRoom() {
  const [track, setTrack] = useState(null);

  return (
    <section className={styles.section} aria-labelledby="music-title">
      <p className={styles.label}>Off the clock / Music</p>
      <h2 id="music-title">On repeat</h2>
      <p className={styles.intro}>Drake, J. Cole, The Weeknd, Seedhe Maut and Future were at the top of my recap. Here are the five tracks I played most.</p>
      <div className={styles.listening}>
        <ol className={styles.trackList}>
          {tracks.map((item) => (
            <li key={item.video}>
              <button type="button" aria-pressed={track?.video === item.video} onClick={() => setTrack(item)}>
                <span><strong>{item.title}</strong><small>{item.artist}</small></span>
                <span aria-hidden="true">▶</span>
              </button>
            </li>
          ))}
        </ol>
        <div className={styles.player}>
          {track ? (
            <>
              <iframe
                key={track.video}
                src={`https://www.youtube-nocookie.com/embed/${track.video}`}
                title={`${track.title} by ${track.artist}`}
                referrerPolicy="strict-origin-when-cross-origin"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
              <div className={styles.playerLinks}>
                <a href={`https://www.youtube.com/watch?v=${track.video}`}>Open on YouTube ↗</a>
                <button type="button" onClick={() => setTrack(null)}>Close player</button>
              </div>
            </>
          ) : (
            <div className={styles.playerIdle}>
              <span className={styles.record} aria-hidden="true" />
              <p>Pick a track to load the YouTube player.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
