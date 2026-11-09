import styles from './personal.module.css';

const tracks = [
  { title: 'Ran To Atlanta', artist: 'Drake, Future & Molly Santana', spotify: 'album/0krqtklKYf0tyV3mw8AYqo' },
  { title: 'Do Not Disturb', artist: 'Drake', spotify: 'track/2KvHC9z14GSl4YpkNMX384' },
  { title: 'When To Say When', artist: 'Drake', spotify: 'track/5TCBWmEBrin7etRa4Lswr1' },
  { title: 'Akatsuki', artist: 'Seedhe Maut & Raga', spotify: 'track/7JGhDylZMLMmboLrnmJZbt' },
  { title: 'Eshay', artist: 'Gucci Dassy', spotify: 'track/3mDL5BWuaVwXFAhZMWp88E' },
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
      <ul className={styles.trackList} aria-label="Spotify players">
        {tracks.map(({ title, artist, spotify }) => (
          <li key={spotify}>
            <iframe
              src={`https://open.spotify.com/embed/${spotify}?theme=0`}
              title={`${title} by ${artist} on Spotify`}
              width="100%"
              height="152"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
