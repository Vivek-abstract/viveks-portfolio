import Link from 'next/link';
import styles from '../personal.module.css';

export const metadata = {
  title: 'About',
  description: 'A bit about Vivek Gawande, a software engineer in Navi Mumbai.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.about} aria-labelledby="about-title">
          <h1 id="about-title">A bit about me</h1>
          <p>
            I’m Vivek, a software engineer in Navi Mumbai. I studied computer
            engineering at Mumbai University. These days I work on .NET apps
            at Wipro, where a lot of my work is about automating manual steps.
          </p>
          <p>
            Outside work, I’ve made a Windows app for tracking PC part prices
            and a tic-tac-toe game for Android. Away from code, I’m into chess,
            movies, and music.
          </p>
          <div className={styles.links}>
            <Link href="/#projects">Things I’ve made</Link>
            <Link href="/blog/">Writing</Link>
            <a href="/resume.pdf">Résumé (PDF)</a>
          </div>
        </section>
      </div>
    </div>
  );
}
