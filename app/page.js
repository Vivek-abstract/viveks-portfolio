import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '../lib/contentful';
import { formatDate } from '../lib/utils';
import Harbour from './Harbour';
import styles from './personal.module.css';

const projects = [
  {
    title: 'PC Part Price Tracker',
    kind: '01 / Windows · C#',
    description: 'A price alert for the next PC build. Pick a part from an Indian retailer, set your target, and the app flags it once it’s in stock below that price.',
    href: 'https://github.com/Vivek-abstract/PCPartPriceTracker',
  },
  {
    title: 'Dracula Tic-Tac-Toe',
    kind: '02 / Android · Kotlin',
    description: 'A dark-themed tic-tac-toe game where you play against the computer. One of my experiments with building for Android.',
    href: 'https://github.com/Vivek-abstract/Dracula-Tic-Tac-Toe',
  },
  {
    title: 'ProjectMU',
    kind: '03 / Web app',
    description: 'A study planner for engineering exams. It gives students a place to start by organizing questions by importance for each subject.',
    href: 'https://github.com/Vivek-abstract/ProjectMU',
  },
];

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero} aria-labelledby="intro">
          <div className={styles.heroCopy}>
            <p className={styles.label}>Navi Mumbai, India</p>
            <h1 id="intro">Hey, I’m<br /><em>Vivek.</em></h1>
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
            {projects.map((project) => (
              <article key={project.href} className={styles.project}>
                <a href={project.href} className={styles.projectLink}>
                  <p className={styles.label}>{project.kind}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <span className={styles.sourceLink}>View source <span aria-hidden="true">↗</span></span>
                </a>
              </article>
            ))}
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
