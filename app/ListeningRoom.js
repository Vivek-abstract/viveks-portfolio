import styles from './personal.module.css';

const tracks = [
  { title: 'Ran To Atlanta', artist: 'Drake, Future & Molly Santana', video: 'ipOSrQNrp1U' },
  { title: 'Do Not Disturb', artist: 'Drake', video: 'vVd4T5NxLgI' },
  { title: 'When To Say When', artist: 'Drake', search: 'Drake When To Say When' },
  { title: 'Akatsuki', artist: 'Seedhe Maut & Raga', video: '5Jmhm3LoKao' },
  { title: 'Eshay', artist: 'Gucci Dassy', video: 'eBQZdfuTkVU' },
];

export default function ListeningRoom() {
  return (
    <section className={styles.section} aria-labelledby="music-title">
      <p className={styles.label}>Off the clock / Music</p>
      <h2 id="music-title">On repeat</h2>
      <p className={styles.intro}>
        Drake, J. Cole, The Weeknd, Seedhe Maut and Future topped my recap.
        Here are the five tracks I played most.
      </p>
      <ol className={styles.trackList}>
        {tracks.map(({ title, artist, video, search }) => (
          <li key={title}>
            <a href={search
              ? `https://music.youtube.com/search?q=${encodeURIComponent(search)}`
              : `https://music.youtube.com/watch?v=${video}`}>
              <span><strong>{title}</strong><small>{artist}</small></span>
              <span className={styles.trackAction}>{search ? 'Find on' : 'Open in'} YouTube Music ↗</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
