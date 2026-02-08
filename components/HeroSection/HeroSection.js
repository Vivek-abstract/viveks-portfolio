import Image from 'next/image';
import styles from './HeroSection.module.css';
import { getYearsOfExperience } from '../../lib/utils';

export default function HeroSection() {
  const years = getYearsOfExperience();

  return (
    <section className={`section ${styles.hero}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.photoWrapper}>
            <Image
              src="/vivek_profile_photo.jpg"
              alt="Vivek Gawande"
              width={280}
              height={280}
              className={styles.photo}
              priority
            />
          </div>
          <div className={styles.text}>
            <p className={styles.tagline}>Hi, I&apos;m Vivek Gawande</p>
            <h1 className={styles.headline}>Senior Software Engineer</h1>
            <p className={styles.subheadline}>
              {years}+ years building enterprise applications with .NET, React, and cloud technologies.
            </p>
            <div className={styles.ctas}>
              <a
                href="https://bit.ly/ViveksResume"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnPrimary}`}
              >
                View Resume
              </a>
              <a
                href="https://www.linkedin.com/in/vivekbgawande/"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnSecondary}`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
