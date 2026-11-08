import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '../lib/contentful';
import { formatDate } from '../lib/utils';
import styles from './personal.module.css';

const projects = [
  {
    title: 'PC Part Price Tracker',
    kind: 'Windows app',
    description: 'I made a little Windows app for keeping an eye on PC parts across Indian retailers. Set the price you want to pay and it flags a part when it’s in stock below that price.',
    href: 'https://github.com/Vivek-abstract/PCPartPriceTracker',
    style: 'tracker',
  },
  {
    title: 'Dracula Tic-Tac-Toe',
    kind: 'Android game',
    description: 'A dark-themed version of tic-tac-toe I built in Kotlin. It’s you against the computer.',
    href: 'https://github.com/Vivek-abstract/Dracula-Tic-Tac-Toe',
    style: 'game',
  },
];

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero} aria-labelledby="intro">
          <div>
            <p className={styles.label}>Navi Mumbai, India</p>
            <h1 id="intro">Hey, I’m<br />Vivek Gawande.</h1>
            <p className={styles.intro}>
              I’m a software engineer. I work on .NET apps by day and sometimes
              make little apps of my own. I’m also into chess, movies, and music.
            </p>
            <div className={styles.links}>
              <a href="#projects">Things I’ve made <span aria-hidden="true">↓</span></a>
              <Link href="/about/">A bit about me <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <Image
            src="/vivek_profile_photo.jpg"
            alt="Vivek Gawande"
            width={320}
            height={320}
            sizes="(max-width: 600px) 112px, 30vw"
            className={styles.portrait}
            priority
          />
        </section>

        <section id="projects" className={styles.section} aria-labelledby="projects-title">
          <h2 id="projects-title">Things I’ve made</h2>
          <div className={styles.projects}>
            {projects.map((project) => (
              <article key={project.href} className={`${styles.project} ${project.style === 'game' ? styles.game : ''}`}>
                <div className={styles.projectArt} aria-hidden="true">
                  {project.style === 'tracker' ? (
                    <svg viewBox="0 0 140 76" fill="none">
                      <path d="M6 56h128M6 36h128M6 16h128" stroke="currentColor" opacity=".22" />
                      <path d="m8 24 23 8 19-10 20 20 24-9 15 17 21 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="130" cy="57" r="5" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 140 76" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M58 5v66M82 5v66M34 27h72M34 49h72" opacity=".45" />
                      <path d="m40 10 12 12m0-12L40 22m24 10 12 12m0-12L64 44m24 10 12 12m0-12L88 66" />
                      <circle cx="94" cy="16" r="6" />
                      <circle cx="46" cy="60" r="6" />
                    </svg>
                  )}
                </div>
                <div className={styles.projectBody}>
                  <p className={styles.label}>{project.kind}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.href} aria-label={`View ${project.title} on GitHub`}>
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {posts.length > 0 && (
          <section className={styles.section} aria-labelledby="writing-title">
            <h2 id="writing-title">Writing</h2>
            <ul className={styles.posts}>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}/`} className={styles.post}>
                    <div>
                      <p className={styles.label}>{formatDate(post.createdDate)}</p>
                      <h3>{post.title}</h3>
                      {post.preview && <p>{post.preview}</p>}
                    </div>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
