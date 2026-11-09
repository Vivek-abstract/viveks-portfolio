import styles from './personal.module.css';

const tracks = [
  { title: 'When To Say When', artist: 'Drake', spotify: 'track/5TCBWmEBrin7etRa4Lswr1' },
  { title: 'Everyday Hustle', artist: 'Future, Metro Boomin & Rick Ross', spotify: 'track/4eRqmUWBmEdnVEEDHu765H' },
  { title: 'People Get Up And Drive Your Funky Soul', artist: 'James Brown', spotify: 'track/7FqcsBx3azfOg1gAJkAXje' },
];

export default function ListeningRoom() {
  return (
    <section className={styles.section} aria-labelledby="music-title">
      <p className={styles.label}>Off the clock / Music</p>
      <h2 id="music-title">On repeat</h2>
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
