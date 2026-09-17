import Image from "next/image";
import styles from "./HeroSection.module.css";
import { getYearsOfExperience } from "../../lib/utils";

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="intro-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.text}>
          <p className="eyebrow">Vivek Gawande / Senior Software Engineer</p>
          <h1 id="intro-title" className={styles.headline}>
            Complex systems.
            <br />
            <span>
              Thoughtful
              <br />
              engineering.
            </span>
          </h1>
          <p className={styles.description}>
            I build enterprise applications with .NET — connecting APIs, data,
            and interfaces across healthcare and finance.
          </p>
          <div className={styles.actions}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              View resume <span aria-hidden="true">↗</span>
            </a>
            <a href="#experience" className={styles.secondary}>
              Explore my work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <aside className={styles.profile} aria-label="At a glance">
          <div className={styles.photoFrame}>
            <Image
              src="/vivek_profile_photo.jpg"
              alt="Vivek Gawande"
              width={480}
              height={540}
              className={styles.photo}
              priority
            />
          </div>
          <div className={styles.caption}>
            <span>Currently at Wipro</span>
            <span>Optum / UHG</span>
          </div>
          <div className={styles.facts}>
            <div>
              <strong>{getYearsOfExperience()} years</strong>
              <span>Engineering experience</span>
            </div>
            <div>
              <strong>Healthcare & finance</strong>
              <span>Enterprise applications</span>
            </div>
          </div>
        </aside>
      </div>
      <div className={`container ${styles.stack}`}>
        <span className="eyebrow">Core toolkit</span>
        <p>
          C# / .NET <span>EF Core</span> SQL Server <span>Vue & Angular</span>
        </p>
      </div>
    </section>
  );
}
