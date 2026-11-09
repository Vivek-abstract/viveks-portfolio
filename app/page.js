import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '../lib/contentful';
import { formatDate } from '../lib/utils';
import Harbour from './Harbour';
import styles from './personal.module.css';

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero} aria-labelledby="intro">
          <div>
            <p className={styles.label}>Navi Mumbai, India</p>
            <h1 id="intro">Hey, I’m<br />{' '}<em>Vivek.</em></h1>
            <p className={styles.intro}>
              I build .NET apps for work and smaller things for myself.
              Here are a few of those things, plus notes on what I’ve learned along the way.
            </p>
            <div className={styles.links}>
              <a href="#projects">Explore my projects <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <Harbour />
        </section>

        <section id="projects" className={styles.section} aria-labelledby="projects-title">
          <p className={styles.label}>01 / From my GitHub</p>
          <h2 id="projects-title">Things I’ve made</h2>
          <div className={styles.projects}>
            <article className={styles.project}>
              <div>
                <p className={styles.label}>01 / Windows · C#</p>
                <h3>PC Part Price Tracker</h3>
                <p className={styles.projectDescription}>
                  I built this when GPU prices were sky-high. I wanted one place to check
                  which cards were in stock, compare prices across Indian retailers, and
                  see when a card dropped below what I was willing to pay.
                </p>
                <a className={styles.sourceLink} href="https://github.com/Vivek-abstract/PCPartPriceTracker">
                  View the tracker on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className={styles.trackerDetail}>
                <p className={styles.label}>How the tracker works</p>
                <ol>
                  <li>Add a product link and set your target price.</li>
                  <li>The app refreshes the listing every minute.</li>
                  <li>The price turns green when the part is in stock and below your target.</li>
                </ol>
              </div>
            </article>

            <article className={styles.project}>
              <div>
                <p className={styles.label}>02 / Android · Kotlin</p>
                <h3>Dracula Tic-Tac-Toe</h3>
                <p className={styles.projectDescription}>
                  You play the computer on a dark board with pink Xs and cyan Os.
                  I built it in Kotlin with Android Studio.
                </p>
                <a className={styles.sourceLink} href="https://github.com/Vivek-abstract/Dracula-Tic-Tac-Toe">
                  View the game on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className={styles.screenshots}>
                <figure>
                  <a href="/projects/dracula-new-game.png" aria-label="Open full-size screenshot of a new game">
                    <Image src="/projects/dracula-new-game.png" alt="Empty tic-tac-toe board with a pink New Game button" width={720} height={1280} loading="lazy" />
                  </a>
                  <figcaption>New game</figcaption>
                </figure>
                <figure>
                  <a href="/projects/dracula-draw.png" aria-label="Open full-size screenshot of a drawn game">
                    <Image src="/projects/dracula-draw.png" alt="A full board of pink Xs and cyan Os with the message Game Drawn" width={720} height={1280} loading="lazy" />
                  </a>
                  <figcaption>Draw against the computer</figcaption>
                </figure>
              </div>
            </article>
          </div>
        </section>

        {posts.length > 0 && (
          <section className={styles.section} aria-labelledby="writing-title">
            <p className={styles.label}>02 / Notes from work</p>
            <h2 id="writing-title">Writing</h2>
            <p className={styles.intro}>I write about problems I’ve had to solve, starting with a .NET API that kept timing out under load.</p>
            <ul className={styles.posts}>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}/`} className={styles.post}>
                    <div>
                      <p className={styles.label}>{formatDate(post.createdDate)}</p>
                      <h3>{post.title}</h3>
                      {post.preview && <p>{post.preview}</p>}
                    </div>
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className={`${styles.section} ${styles.personal}`} aria-labelledby="personal-title">
          <Image src="/vivek_profile_photo.jpg" alt="Vivek Gawande" width={224} height={224} className={styles.portrait} />
          <div>
            <p className={styles.label}>Off the clock</p>
            <h2 id="personal-title">A bit about me</h2>
            <p className={styles.intro}>
              I studied computer engineering at Mumbai University. When I’m away from a code editor,
              I’m usually up for a game of chess or a good movie.
            </p>
            <div className={styles.links}>
              <Link href="/about/">More about me <span aria-hidden="true">↗</span></Link>
              <a href="/resume.pdf">Résumé (PDF)</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
